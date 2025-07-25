const LINKS = {
    // 内部页面链接
    home: 'index.html',
    trade: '/pages/trade.html',
    property: '/pages/property.html',
    industrial: '/pages/industrial.html',
    about: '/pages/about.html',
    history: '/pages/history.html',
    brand: '/pages/brand.html',
    brand1: '/pages/brand1.html',
    word: '/pages/word.html'
    
};


// 将LINKS对象挂载到window对象上，使其在全局可用
window.LINKS = LINKS;

// 初始化所有带有data-link属性的a标签
function initLinks() {
    // 获取所有带有data-link属性的a标签
    const linkElements = document.querySelectorAll('a[data-link]');
    
    // 遍历所有链接元素并设置href属性
    linkElements.forEach(link => {
        const linkKey = link.getAttribute('data-link');
        
        // 检查链接键是否存在于LINKS对象中
        if (LINKS.hasOwnProperty(linkKey)) {
            link.href = LINKS[linkKey];
        } else {
            // 链接键不存在时的处理
            console.warn(`未找到链接键: ${linkKey}`);
            link.href = '#';
            link.classList.add('missing-link');
        }
    });
}


