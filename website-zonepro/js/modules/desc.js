const Desc = function () {
    let e = {
        btn: "what__desc-nav-item",
        elements: [{ class: "what__desc-nav-item", mod: "what__desc-nav-item--active" },
        { class: "what__desc-text", mod: "what__desc-text--active" },
        { class: "what__desc-img", mod: "what__desc-img--active" }]
    };
    return {
        render: function () {
            debugger;
            for (var t = 0; t < e.elements.length; t++) {
                $("." + e.elements[t].class).eq(0).addClass(e.elements[t].mod);
                for (var s = 0; s < $("." + e.elements[t].class).length; s++)$("." + e.elements[t].class).eq(s).attr("data-index", s)
            }
        },
        event: function () {
            $("." + e.btn).click(function (t) {
                debugger;
                t.preventDefault();
                 let s = $(this).attr("data-index");
                for (var n = 0; n < e.elements.length; n++)$("." + e.elements[n].class).removeClass(e.elements[n].mod),
                    $("." + e.elements[n].class + '[data-index="' + s + '"]').addClass(e.elements[n].mod)
            })
        },
        init: function () { this.render(), this.event() }
    }
}();