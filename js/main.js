//关于我们隐藏菜单
const aMenus = document.querySelectorAll('.a-menu-show')
aMenus.forEach(aMenu => {
    const aToshow = aMenu.nextElementSibling
    const li = aMenu.parentElement; // 获取父级 li 元素
    let timeout; // 用于控制延迟的定时器
    // 当鼠标进入 li 元素时显示菜单
    li.addEventListener('mouseenter', () => {
        clearTimeout(timeout); // 清除可能存在的隐藏定时器
        aToshow.classList.add('active');
    });
    // 当鼠标离开 li 元素时，设置延迟隐藏
    li.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            aToshow.classList.remove('active');
        }, 100);
    });
    // 当鼠标进入子菜单时，取消隐藏
    aToshow.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        aToshow.classList.add('active');
    });
    // 当鼠标离开子菜单时，设置延迟隐藏
    aToshow.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            aToshow.classList.remove('active');
        }, 100);
    });
});

//语言选择菜单显示隐藏
const divLang = document.getElementById('div-lang')
const lang = divLang.previousElementSibling
let timeout
lang.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // 清除可能存在的隐藏定时器
    divLang.classList.add('active');
});
lang.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        divLang.classList.remove('active');
    }, 100);
});
// 当鼠标进入子菜单时，取消隐藏
divLang.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    divLang.classList.add('active');
});
// 当鼠标离开子菜单时，设置延迟隐藏
divLang.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        divLang.classList.remove('active');
    }, 100);
});

const slider = document.getElementById('slider');
const slides = slider.querySelectorAll('img');
const divs = slider.querySelectorAll('.image-caption')
const indicators = document.querySelectorAll('.slider-indicator');
let currentSlide = 0;
const slideCount = slides.length;
// 显示当前幻灯片
function showSlide(index) {
    // 隐藏所有幻灯片
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    // 隐藏所有指示器
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    divs.forEach(div => {
        div.classList.remove('active')
    })
    // 显示当前幻灯片和指示器
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    divs[index].classList.add('active')
    currentSlide = index;
}

// 下一张幻灯片
function nextSlide() {
    let nextIndex = (currentSlide + 1) % slideCount;
    showSlide(nextIndex);
}

// 上一张幻灯片
function prevSlide() {
    let prevIndex = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(prevIndex);
}

// 点击指示器切换幻灯片
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});

// 自动轮播
let slideInterval = setInterval(nextSlide, 5000);

// 初始化轮播
showSlide(0);

document.addEventListener('DOMContentLoaded', function() {
    // 初始化链接
    initLinks();
});

function getScreenSize() {
    return {
    // 视口尺寸
    viewport: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    // 文档尺寸
    document: {
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight
    },
    // 设备像素比
    pixelRatio: window.devicePixelRatio,
    // 屏幕分类
    screenType: window.innerWidth < 768 ? 'mobile' : 
                window.innerWidth < 1024 ? 'tablet' : 'desktop'
    };
}

const screenType = getScreenSize().screenType

if(screenType === 'mobile'){

    const menu = document.getElementById('menu-list')
    const menuButton = document.getElementById('img-menu')
    const ddList = document.querySelectorAll('#change-dd')
    menu.style.display = 'none'
    menuButton.style.display = 'block'
    ddList.forEach( dd => {
        dd.style.display = 'none'
    });
    
    menuButton.addEventListener('click', () => {
        if(menu.style.display === 'none'){
            menu.style.display = 'block'
        }else{
            menu.style.display = 'none'
        }
    });
}


