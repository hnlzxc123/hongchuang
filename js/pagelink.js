const pageLinks = {
    home: '../index.html',
    trade: 'trade.html',
    property: 'property.html',
    industrial: 'industrial.html',
    about: 'about.html',
    history: 'history.html',
    brand: 'brand.html',
    brand1: 'brand1.html',
    word: 'word.html'
}

// 将LINKS对象挂载到window对象上，使其在全局可用
window.pageLinks = pageLinks;

// 初始化所有带有data-link属性的a标签
function initPageLinks() {
    // 获取所有带有data-link属性的a标签
    const linkElements = document.querySelectorAll('a[data-link]');
    
    // 遍历所有链接元素并设置href属性
    linkElements.forEach(link => {
        const linkKey = link.getAttribute('data-link');
        
        // 检查链接键是否存在于LINKS对象中
        if (pageLinks.hasOwnProperty(linkKey)) {
            link.href = pageLinks[linkKey];
        } else {
            // 链接键不存在时的处理
            console.warn(`未找到链接键: ${linkKey}`);
            link.href = '#';
            link.classList.add('missing-link');
        }
    });
}


