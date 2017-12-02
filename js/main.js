var Parallax = {
    /**
     * Atributos
     * */
    positionScroll: 0,
    scrollWidth: 17,
    windowWidth: 0,
    containerWidth: 0,
    maxWidth: 0,
    articles: document.querySelectorAll("#scroll article"),
    container: document.querySelector("#scroll"),


    /**
     * Metodos
     * */
    init: function () {
        document.addEventListener('scroll', Parallax.onScroll)
    },
    onScroll: function () {
        Parallax.windowWidth = window.outerWidth;
        Parallax.containerWidth = Parallax.articles[0].clientWidth;
        Parallax.maxWidth = (Parallax.windowWidth - Parallax.containerWidth - Parallax.scrollWidth) / 2;

        Parallax.positionScroll = window.pageYOffset;
        if (Parallax.positionScroll < Parallax.maxWidth && Parallax.positionScroll > 0) {
            for (var i = 0; i < Parallax.articles.length; i++) {
                Parallax.articles[i].style.marginLeft = window.pageYOffset + "px";
            }
        }
    }
};

Parallax.init();