// 系列文章配置
const seriesConfig = {
    "伤寒卒病论": {
        path: "/shibianji/interpretations/汉唐/伤寒卒病论/",
        files: [
            "01-伤寒小传.html",
            "02-伤寒卒病论辑复稿.html",
            "03-医圣传.html",
            "04-仲景一生的中星图.html",
            "05-阴阳周衍体系·卷一·总论.html",
            "06-阴阳周衍体系·卷二·阴阳.html",
            "07-阴阳周衍体系·卷三·六态.html",
            "08-阴阳周衍体系·卷四·表里.html",
            "09-阴阳周衍体系·卷五·虚实.html",
            "10-阴阳周衍体系·卷六·寒热.html",
            "11-阴阳周衍体系·卷七·次第.html",
            "12-阴阳周衍体系·卷八·真假.html",
            "13-阴阳周衍体系·卷九·自回.html",
            "14-阴阳周衍体系·卷十·归序.html",
            "15-伤寒卒病论113方六态解读.html",
            "16-虚积论.html"
        ],
        index: "index.html"   // 目录页文件名
    },
    "药象论": {
        path: "/shibianji/interpretations/汉唐/神农本草经/",
        files: [
            "01-药象论·总论第一.html",
            "02-药象论·象数第二.html",
            "03-药象论·五行第三.html",
            "04-药象论·干支第四.html",
            "05-药象论·阴阳第五.html",
            "06-药象论·三易第六.html",
            "07-药象论·解字第七.html",
            "08-药象论·物候第八.html",
            "09-药象论·形象第九.html",
            "10-药象论·色象第十.html",
            "11-药象论·气象第十一.html",
            "12-药象论·味象第十二.html",
            "13-药象论·质象第十三.html",
            "14-药象论·体用第十四.html",
            "15-药象论·流传第十五.html",
            "16-药象论·六维第十六.html",
            "17-药象论·定治第十七.html",
            "18-药象论·药成第十八.html",
            "19-药象论·附论·上品药解第一.html",
            "20-药象论·附论·上品药解第二.html",
            "21-药象论·附论·上品药解第三.html",
            "22-药象论·附论·上品药解第四.html",
            "23-药象论·附论·中品药解第五.html",
            "24-药象论·附论·中品药解第六.html",
            "25-药象论·附论·中品药解第七.html",
            "26-药象论·附论·下品药解第八.html",
            "27-药象论·附论·下品药解第九.html"
        ],
        index: "index.html"
    }
    // 以后如有其他系列，在此添加
};

// 生成底部导航
function buildSeriesNav() {
    const currentPath = window.location.pathname;
    let currentSeries = null;
    let currentFile = null;
    let currentIndex = -1;

    // 查找当前文件属于哪个系列
    for (const [seriesName, series] of Object.entries(seriesConfig)) {
        const relPath = series.path;
        if (currentPath.startsWith(relPath)) {
            const fileName = currentPath.substring(relPath.length);
            const idx = series.files.indexOf(fileName);
            if (idx !== -1) {
                currentSeries = series;
                currentFile = fileName;
                currentIndex = idx;
                break;
            }
        }
    }

    if (!currentSeries || currentIndex === -1) return; // 不属于系列，不生成导航

    const prevFile = currentIndex > 0 ? currentSeries.files[currentIndex - 1] : null;
    const nextFile = currentIndex < currentSeries.files.length - 1 ? currentSeries.files[currentIndex + 1] : null;
    const seriesPath = currentSeries.path;
    const indexLink = `${seriesPath}${currentSeries.index}`;

    let navHtml = `<div class="series-nav">`;
    if (prevFile) {
        navHtml += `<a href="${prevFile}" class="prev">← 上一篇</a>`;
    } else {
        navHtml += `<span class="prev-placeholder"></span>`;
    }
    navHtml += `<a href="${indexLink}" class="index"> 返回目录</a>`;
    if (nextFile) {
        navHtml += `<a href="${nextFile}" class="next">下一篇 →</a>`;
    }
    navHtml += `</div>`;

    // 找到放置导航的位置（例如在 .footer-note 之前）
    const footerNote = document.querySelector('.footer-note');
    if (footerNote) {
        footerNote.insertAdjacentHTML('beforebegin', navHtml);
    } else {
        // 如果没有 .footer-note，就追加到 body 末尾
        document.body.insertAdjacentHTML('beforeend', navHtml);
    }
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSeriesNav);
} else {
    buildSeriesNav();
}
