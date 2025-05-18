document.addEventListener('DOMContentLoaded', function() {
    //headerアニメーション
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // 少しスクロールしたらクラスを追加
            header.classList.add('scrolled-header');
        } else {
            header.classList.remove('scrolled-header');
        }
    });
    
    //navアニメーション
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    console.log('JavaScriptファイルが読み込まれました!');
});