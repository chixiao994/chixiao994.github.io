import os
import json
import re
from html.parser import HTMLParser

class HTMLTextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
    def handle_data(self, data):
        self.text.append(data)
    def get_text(self):
        return ' '.join(self.text)

def extract_text_from_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    parser = HTMLTextExtractor()
    parser.feed(content)
    text = parser.get_text()
    # 清理空白
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def extract_title_from_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        for line in f:
            match = re.search(r'<title>(.*?)</title>', line)
            if match:
                return match.group(1).strip()
    return os.path.basename(filepath)

def build_index():
    base_dir = 'interpretations'
    index = []
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.html') and file != 'index.html':
                filepath = os.path.join(root, file)
                # 相对URL（从根目录开始）
                url = '/' + filepath.replace('\\', '/')
                title = extract_title_from_html(filepath)
                full_text = extract_text_from_html(filepath)
                # 摘要：前150字
                summary = full_text[:150] + ('...' if len(full_text) > 150 else '')
                # 分类：根据父目录名
                category = os.path.basename(root)
                index.append({
                    'title': title,
                    'url': url,
                    'summary': summary,
                    'category': category,
                    'full_text': full_text  # 用于全文搜索
                })
    # 同时添加书籍入口页面（index.html）
    for root, dirs, files in os.walk(base_dir):
        if 'index.html' in files:
            filepath = os.path.join(root, 'index.html')
            url = '/' + filepath.replace('\\', '/')
            title = extract_title_from_html(filepath)
            full_text = extract_text_from_html(filepath)
            summary = full_text[:150] + ('...' if len(full_text) > 150 else '')
            category = os.path.basename(root)
            index.append({
                'title': title,
                'url': url,
                'summary': summary,
                'category': category,
                'full_text': full_text
            })
    with open('search_index.json', 'w', encoding='utf-8') as f:
        json.dump(index, f, ensure_ascii=False, indent=2)
    print(f'索引生成完成，共 {len(index)} 条记录。')

if __name__ == '__main__':
    build_index()
