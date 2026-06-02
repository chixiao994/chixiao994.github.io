// 全局搜索模块
let fuse = null;
let searchIndex = null;

function loadSearchIndex() {
    return fetch('/shibianji/search_index.json')
        .then(res => res.json())
        .then(data => {
            searchIndex = data;
            fuse = new Fuse(data, {
                keys: ['title', 'full_text', 'summary'],
                threshold: 0.3,
                includeScore: true,
                ignoreLocation: true
            });
        })
        .catch(err => console.error('索引加载失败', err));
}

function performSearch(query) {
    if (!fuse || !query.trim()) return [];
    return fuse.search(query).map(r => r.item);
}

function renderResults(results, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (results.length === 0) {
        container.innerHTML = '<div style="padding:0.5rem">未找到相关文章</div>';
        return;
    }
    let html = '';
    results.forEach(item => {
        html += `<a href="${item.url}">
                    <strong>${item.title}</strong>
                    <div class="result-summary">${item.summary}</div>
                </a>`;
    });
    container.innerHTML = html;
}

// 主页搜索框绑定
function initHomeSearch() {
    const searchBox = document.getElementById('home-search');
    const resultsDiv = document.getElementById('home-search-results');
    if (!searchBox) return;
    searchBox.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.length < 1) {
            resultsDiv.innerHTML = '';
            return;
        }
        const results = performSearch(query);
        if (resultsDiv) renderResults(results, 'home-search-results');
    });
}

// 模态框搜索
function initModalSearch() {
    const modal = document.getElementById('search-modal');
    const searchInput = document.getElementById('modal-search-input');
    const resultsDiv = document.getElementById('modal-search-results');
    if (!modal) return;
    window.openSearchModal = function() {
        modal.style.display = 'flex';
        if (searchInput) {
            searchInput.focus();
            searchInput.value = '';
            resultsDiv.innerHTML = '';
        }
    };
    window.closeSearchModal = function() {
        modal.style.display = 'none';
    };
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            if (query.length < 1) {
                resultsDiv.innerHTML = '';
                return;
            }
            const results = performSearch(query);
            renderResults(results, 'modal-search-results');
        });
    }
    // 点击模态框背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) window.closeSearchModal();
    });
}

// 在所有页面添加放大镜图标（如果不存在）
function addSearchIconToTop() {
    const homeLink = document.querySelector('.home-link');
    if (homeLink && !document.querySelector('.search-icon')) {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'search-icon';
        iconSpan.innerHTML = ' 🔍';
        iconSpan.style.cursor = 'pointer';
        iconSpan.onclick = () => window.openSearchModal();
        homeLink.parentNode.insertBefore(iconSpan, homeLink.nextSibling);
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadSearchIndex().then(() => {
        initHomeSearch();
        initModalSearch();
        addSearchIconToTop();
    });
});
