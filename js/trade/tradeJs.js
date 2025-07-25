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

document.addEventListener('DOMContentLoaded', function() {
    // 初始化链接
    initPageLinks();
});