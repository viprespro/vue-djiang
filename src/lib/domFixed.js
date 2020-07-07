import $ from 'jquery'
export function footAuto() {
    var _wh = $(window).height();
    var _dh = $(document).height();
    // var _bh = $(document.body).height();
    var _hh = $('.mx-header').height();
    var _fh = $('.mx-footer').height();
    var _content = $(".content").height();
    // var _wh = window.innerHeight;
    // var _hh = document.querySelector('.mx-header').clientHeight;
    // var _content = document.querySelector('.content').clientHeight;
    // var content = document.querySelector(".Memorabilia-content").clientHeight;
    console.log(_wh, _content, _dh);

    if (_content < _wh - _hh - _fh) {
        $(".mx-footer").css({
            width: "100%",
            position: "fixed",
            bottom: "0",
            left: "0",
            'z-index': "111",
        });
        console.log(0)
    } else {
        $(".mx-footer").css({
            width: "100%",
            position: "static",
            bottom: "auto",
            left: "auto"
        });
        console.log(1)
    }
}