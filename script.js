window.addEventListener('scroll', function() {
    document.querySelectorAll('.parallax-box').forEach(function(box) {
        var scrolledHeight = window.pageYOffset;
        var offset = box.offsetTop;
        var boxHeight = box.offsetHeight;

        // 计算背景位置
        var backgroundPositionY = (scrolledHeight - offset + boxHeight) / (boxHeight * 2) * 100;
        backgroundPositionY = Math.min(Math.max(backgroundPositionY, 0), 100); // 限制在 0% 到 100%

        var background = box.querySelector('.background');
        background.style.backgroundPosition = 'center ' + backgroundPositionY + '%';
    });
});
