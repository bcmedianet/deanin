!(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.AOS = e()) : (t.AOS = e());
})(this, function () {
    return (
        (s = {}),
        (i.m = o = [
            function (t, e, i) {
                "use strict";
                function o(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                function s() {
                    if ((0 < arguments.length && void 0 !== arguments[0] && arguments[0] && (m = !0), m)) return (f = (0, p.default)(f, g)), (0, h.default)(f, g.once), f;
                }
                function n() {
                    (f = (0, u.default)()), s();
                }
                var r =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = arguments[e];
                                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
                            }
                            return t;
                        },
                    a = o((o(i(1)), i(6))),
                    l = o(i(7)),
                    c = o(i(8)),
                    d = o(i(9)),
                    h = o(i(10)),
                    p = o(i(11)),
                    u = o(i(14)),
                    f = [],
                    m = !1,
                    g = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 };
                t.exports = {
                    init: function (t) {
                        (g = r(g, t)), (f = (0, u.default)());
                        var e = document.all && !window.atob;
                        return (function (t) {
                            return !0 === t || ("mobile" === t && d.default.mobile()) || ("phone" === t && d.default.phone()) || ("tablet" === t && d.default.tablet()) || ("function" == typeof t && !0 === t());
                        })(g.disable) || e
                            ? void f.forEach(function (t, e) {
                                  t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay");
                              })
                            : (g.disableMutationObserver ||
                                  c.default.isSupported() ||
                                  (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
                                  (g.disableMutationObserver = !0)),
                              document.querySelector("body").setAttribute("data-aos-easing", g.easing),
                              document.querySelector("body").setAttribute("data-aos-duration", g.duration),
                              document.querySelector("body").setAttribute("data-aos-delay", g.delay),
                              "DOMContentLoaded" === g.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState)
                                  ? s(!0)
                                  : "load" === g.startEvent
                                  ? window.addEventListener(g.startEvent, function () {
                                        s(!0);
                                    })
                                  : document.addEventListener(g.startEvent, function () {
                                        s(!0);
                                    }),
                              window.addEventListener("resize", (0, l.default)(s, g.debounceDelay, !0)),
                              window.addEventListener("orientationchange", (0, l.default)(s, g.debounceDelay, !0)),
                              window.addEventListener(
                                  "scroll",
                                  (0, a.default)(function () {
                                      (0, h.default)(f, g.once);
                                  }, g.throttleDelay)
                              ),
                              g.disableMutationObserver || c.default.ready("[data-aos]", n),
                              f);
                    },
                    refresh: s,
                    refreshHard: n,
                };
            },
            function (t, e) {},
            ,
            ,
            ,
            ,
            function (m, t) {
                (function (t) {
                    "use strict";
                    function n(o, i, t) {
                        function s(t) {
                            var e = l,
                                i = c;
                            return (l = c = void 0), (f = t), (h = o.apply(i, e));
                        }
                        function n(t) {
                            var e = t - u;
                            return void 0 === u || i <= e || e < 0 || (g && d <= t - f);
                        }
                        function r() {
                            var t = $();
                            return n(t)
                                ? e(t)
                                : void (p = setTimeout(
                                      r,
                                      (function (t) {
                                          var e = i - (t - u);
                                          return g ? w(e, d - (t - f)) : e;
                                      })(t)
                                  ));
                        }
                        function e(t) {
                            return (p = void 0), v && l ? s(t) : ((l = c = void 0), h);
                        }
                        function a() {
                            var t = $(),
                                e = n(t);
                            if (((l = arguments), (c = this), (u = t), e)) {
                                if (void 0 === p)
                                    return (function (t) {
                                        return (f = t), (p = setTimeout(r, i)), m ? s(t) : h;
                                    })(u);
                                if (g) return (p = setTimeout(r, i)), s(u);
                            }
                            return void 0 === p && (p = setTimeout(r, i)), h;
                        }
                        var l,
                            c,
                            d,
                            h,
                            p,
                            u,
                            f = 0,
                            m = !1,
                            g = !1,
                            v = !0;
                        if ("function" != typeof o) throw new TypeError(_);
                        return (
                            (i = b(i) || 0),
                            y(t) && ((m = !!t.leading), (d = (g = "maxWait" in t) ? x(b(t.maxWait) || 0, i) : d), (v = "trailing" in t ? !!t.trailing : v)),
                            (a.cancel = function () {
                                void 0 !== p && clearTimeout(p), (l = u = c = p = void (f = 0));
                            }),
                            (a.flush = function () {
                                return void 0 === p ? h : e($());
                            }),
                            a
                        );
                    }
                    function y(t) {
                        var e = void 0 === t ? "undefined" : i(t);
                        return !!t && ("object" == e || "function" == e);
                    }
                    function o(t) {
                        return (
                            "symbol" == (void 0 === t ? "undefined" : i(t)) ||
                            ((function (t) {
                                return !!t && "object" == (void 0 === t ? "undefined" : i(t));
                            })(t) &&
                                f.call(t) == e)
                        );
                    }
                    function b(t) {
                        if ("number" == typeof t) return t;
                        if (o(t)) return s;
                        if (y(t)) {
                            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = y(e) ? e + "" : e;
                        }
                        if ("string" != typeof t) return 0 === t ? t : +t;
                        t = t.replace(r, "");
                        var i = l.test(t);
                        return i || c.test(t) ? d(t.slice(2), i ? 2 : 8) : a.test(t) ? s : +t;
                    }
                    var i =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  },
                        _ = "Expected a function",
                        s = NaN,
                        e = "[object Symbol]",
                        r = /^\s+|\s+$/g,
                        a = /^[-+]0x[0-9a-f]+$/i,
                        l = /^0b[01]+$/i,
                        c = /^0o[0-7]+$/i,
                        d = parseInt,
                        h = "object" == (void 0 === t ? "undefined" : i(t)) && t && t.Object === Object && t,
                        p = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
                        u = h || p || Function("return this")(),
                        f = Object.prototype.toString,
                        x = Math.max,
                        w = Math.min,
                        $ = function () {
                            return u.Date.now();
                        };
                    m.exports = function (t, e, i) {
                        var o = !0,
                            s = !0;
                        if ("function" != typeof t) throw new TypeError(_);
                        return y(i) && ((o = "leading" in i ? !!i.leading : o), (s = "trailing" in i ? !!i.trailing : s)), n(t, e, { leading: o, maxWait: e, trailing: s });
                    };
                }.call(
                    t,
                    (function () {
                        return this;
                    })()
                ));
            },
            function (f, t) {
                (function (t) {
                    "use strict";
                    function y(t) {
                        var e = void 0 === t ? "undefined" : i(t);
                        return !!t && ("object" == e || "function" == e);
                    }
                    function o(t) {
                        return (
                            "symbol" == (void 0 === t ? "undefined" : i(t)) ||
                            ((function (t) {
                                return !!t && "object" == (void 0 === t ? "undefined" : i(t));
                            })(t) &&
                                u.call(t) == e)
                        );
                    }
                    function b(t) {
                        if ("number" == typeof t) return t;
                        if (o(t)) return s;
                        if (y(t)) {
                            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = y(e) ? e + "" : e;
                        }
                        if ("string" != typeof t) return 0 === t ? t : +t;
                        t = t.replace(n, "");
                        var i = a.test(t);
                        return i || l.test(t) ? c(t.slice(2), i ? 2 : 8) : r.test(t) ? s : +t;
                    }
                    function _() {
                        return p.Date.now();
                    }
                    var i =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  },
                        s = NaN,
                        e = "[object Symbol]",
                        n = /^\s+|\s+$/g,
                        r = /^[-+]0x[0-9a-f]+$/i,
                        a = /^0b[01]+$/i,
                        l = /^0o[0-7]+$/i,
                        c = parseInt,
                        d = "object" == (void 0 === t ? "undefined" : i(t)) && t && t.Object === Object && t,
                        h = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
                        p = d || h || Function("return this")(),
                        u = Object.prototype.toString,
                        x = Math.max,
                        w = Math.min;
                    f.exports = function (o, i, t) {
                        function s(t) {
                            var e = l,
                                i = c;
                            return (l = c = void 0), (f = t), (h = o.apply(i, e));
                        }
                        function n(t) {
                            var e = t - u;
                            return void 0 === u || i <= e || e < 0 || (g && d <= t - f);
                        }
                        function r() {
                            var t = _();
                            return n(t)
                                ? e(t)
                                : void (p = setTimeout(
                                      r,
                                      (function (t) {
                                          var e = i - (t - u);
                                          return g ? w(e, d - (t - f)) : e;
                                      })(t)
                                  ));
                        }
                        function e(t) {
                            return (p = void 0), v && l ? s(t) : ((l = c = void 0), h);
                        }
                        function a() {
                            var t = _(),
                                e = n(t);
                            if (((l = arguments), (c = this), (u = t), e)) {
                                if (void 0 === p)
                                    return (function (t) {
                                        return (f = t), (p = setTimeout(r, i)), m ? s(t) : h;
                                    })(u);
                                if (g) return (p = setTimeout(r, i)), s(u);
                            }
                            return void 0 === p && (p = setTimeout(r, i)), h;
                        }
                        var l,
                            c,
                            d,
                            h,
                            p,
                            u,
                            f = 0,
                            m = !1,
                            g = !1,
                            v = !0;
                        if ("function" != typeof o) throw new TypeError("Expected a function");
                        return (
                            (i = b(i) || 0),
                            y(t) && ((m = !!t.leading), (d = (g = "maxWait" in t) ? x(b(t.maxWait) || 0, i) : d), (v = "trailing" in t ? !!t.trailing : v)),
                            (a.cancel = function () {
                                void 0 !== p && clearTimeout(p), (l = u = c = p = void (f = 0));
                            }),
                            (a.flush = function () {
                                return void 0 === p ? h : e(_());
                            }),
                            a
                        );
                    };
                }.call(
                    t,
                    (function () {
                        return this;
                    })()
                ));
            },
            function (t, e) {
                "use strict";
                function s() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                }
                function n(t) {
                    t &&
                        t.forEach(function (t) {
                            var e = Array.prototype.slice.call(t.addedNodes),
                                i = Array.prototype.slice.call(t.removedNodes);
                            if (
                                (function t(e) {
                                    var i = void 0,
                                        o = void 0;
                                    for (i = 0; i < e.length; i += 1) {
                                        if ((o = e[i]).dataset && o.dataset.aos) return !0;
                                        if (o.children && t(o.children)) return !0;
                                    }
                                    return !1;
                                })(e.concat(i))
                            )
                                return r();
                        });
                }
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = function () {};
                e.default = {
                    isSupported: function () {
                        return !!s();
                    },
                    ready: function (t, e) {
                        var i = window.document,
                            o = new (s())(n);
                        (r = e), o.observe(i.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
                    },
                };
            },
            function (t, e) {
                "use strict";
                function i() {
                    return navigator.userAgent || navigator.vendor || window.opera || "";
                }
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    n = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    a =
                        ((function (t, e, i) {
                            return e && c(t.prototype, e), i && c(t, i), t;
                        })(l, [
                            {
                                key: "phone",
                                value: function () {
                                    var t = i();
                                    return !(!o.test(t) && !s.test(t.substr(0, 4)));
                                },
                            },
                            {
                                key: "mobile",
                                value: function () {
                                    var t = i();
                                    return !(!n.test(t) && !r.test(t.substr(0, 4)));
                                },
                            },
                            {
                                key: "tablet",
                                value: function () {
                                    return this.mobile() && !this.phone();
                                },
                            },
                        ]),
                        l);
                function l() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, l);
                }
                function c(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var o = e[i];
                        (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                    }
                }
                e.default = new a();
            },
            function (t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                e.default = function (t, i) {
                    var o = window.pageYOffset,
                        s = window.innerHeight;
                    t.forEach(function (t, e) {
                        !(function (t, e, i) {
                            var o = t.node.getAttribute("data-aos-once");
                            e > t.position ? t.node.classList.add("aos-animate") : void 0 === o || ("false" !== o && (i || "true" === o)) || t.node.classList.remove("aos-animate");
                        })(t, s + o, i);
                    });
                };
            },
            function (t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o,
                    s = i(12),
                    n = (o = s) && o.__esModule ? o : { default: o };
                e.default = function (t, i) {
                    return (
                        t.forEach(function (t, e) {
                            t.node.classList.add("aos-init"), (t.position = (0, n.default)(t.node, i.offset));
                        }),
                        t
                    );
                };
            },
            function (t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o,
                    s = i(13),
                    r = (o = s) && o.__esModule ? o : { default: o };
                e.default = function (t, e) {
                    var i = 0,
                        o = 0,
                        s = window.innerHeight,
                        n = { offset: t.getAttribute("data-aos-offset"), anchor: t.getAttribute("data-aos-anchor"), anchorPlacement: t.getAttribute("data-aos-anchor-placement") };
                    switch ((n.offset && !isNaN(n.offset) && (o = parseInt(n.offset)), n.anchor && document.querySelectorAll(n.anchor) && (t = document.querySelectorAll(n.anchor)[0]), (i = (0, r.default)(t).top), n.anchorPlacement)) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            i += t.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            i += t.offsetHeight;
                            break;
                        case "top-center":
                            i += s / 2;
                            break;
                        case "bottom-center":
                            i += s / 2 + t.offsetHeight;
                            break;
                        case "center-center":
                            i += s / 2 + t.offsetHeight / 2;
                            break;
                        case "top-top":
                            i += s;
                            break;
                        case "bottom-top":
                            i += t.offsetHeight + s;
                            break;
                        case "center-top":
                            i += t.offsetHeight / 2 + s;
                    }
                    return n.anchorPlacement || n.offset || isNaN(e) || (o = e), i + o;
                };
            },
            function (t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                e.default = function (t) {
                    for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
                        (e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0)), (i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0)), (t = t.offsetParent);
                    return { top: i, left: e };
                };
            },
            function (t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                e.default = function (t) {
                    return (
                        (t = t || document.querySelectorAll("[data-aos]")),
                        Array.prototype.map.call(t, function (t) {
                            return { node: t };
                        })
                    );
                };
            },
        ]),
        (i.c = s),
        (i.p = "dist/"),
        i(0)
    );
    function i(t) {
        if (s[t]) return s[t].exports;
        var e = (s[t] = { exports: {}, id: t, loaded: !1 });
        return o[t].call(e.exports, e, e.exports, i), (e.loaded = !0), e.exports;
    }
    var o, s;
}),
    (function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery);
    })(function (n) {
        var r = function (t, e) {
            (this.$element = n(t)), (this.options = n.extend({}, r.DEFAULTS, this.dataOptions(), e)), this.init();
        };
        (r.DEFAULTS = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: function (t, e) {
                return t.toFixed(e.decimals);
            },
            onUpdate: null,
            onComplete: null,
        }),
            (r.prototype.init = function () {
                (this.value = this.options.from), (this.loops = Math.ceil(this.options.speed / this.options.refreshInterval)), (this.loopCount = 0), (this.increment = (this.options.to - this.options.from) / this.loops);
            }),
            (r.prototype.dataOptions = function () {
                var t = { from: this.$element.data("from"), to: this.$element.data("to"), speed: this.$element.data("speed"), refreshInterval: this.$element.data("refresh-interval"), decimals: this.$element.data("decimals") },
                    e = Object.keys(t);
                for (var i in e) {
                    var o = e[i];
                    void 0 === t[o] && delete t[o];
                }
                return t;
            }),
            (r.prototype.update = function () {
                (this.value += this.increment),
                    this.loopCount++,
                    this.render(),
                    "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value),
                    this.loopCount >= this.loops && (clearInterval(this.interval), (this.value = this.options.to), "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value));
            }),
            (r.prototype.render = function () {
                var t = this.options.formatter.call(this.$element, this.value, this.options);
                this.$element.text(t);
            }),
            (r.prototype.restart = function () {
                this.stop(), this.init(), this.start();
            }),
            (r.prototype.start = function () {
                this.stop(), this.render(), (this.interval = setInterval(this.update.bind(this), this.options.refreshInterval));
            }),
            (r.prototype.stop = function () {
                this.interval && clearInterval(this.interval);
            }),
            (r.prototype.toggle = function () {
                this.interval ? this.stop() : this.start();
            }),
            (n.fn.countTo = function (s) {
                return this.each(function () {
                    var t = n(this),
                        e = t.data("countTo"),
                        i = "object" == typeof s ? s : {},
                        o = "string" == typeof s ? s : "start";
                    (e && "object" != typeof s) || (e && e.stop(), t.data("countTo", (e = new r(this, i)))), e[o].call(e);
                });
            });
    }),
    (function (l, c, m, g) {
        "use strict";
        if (((l.console = l.console || { info: function (t) {} }), m))
            if (m.fn.fancybox) console.info("fancyBox already initialized");
            else {
                var t,
                    e,
                    i,
                    o,
                    s = {
                        closeExisting: !1,
                        loop: !1,
                        gutter: 50,
                        keyboard: !0,
                        preventCaptionOverlap: !0,
                        arrows: !0,
                        infobar: !0,
                        smallBtn: "auto",
                        toolbar: "auto",
                        buttons: ["zoom", "slideShow", "thumbs", "close"],
                        idleTime: 3,
                        protect: !1,
                        modal: !1,
                        image: { preload: !1 },
                        ajax: { settings: { data: { fancybox: !0 } } },
                        iframe: {
                            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                            preload: !0,
                            css: {},
                            attr: { scrolling: "auto" },
                        },
                        video: {
                            tpl:
                                '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                            format: "",
                            autoStart: !0,
                        },
                        defaultType: "image",
                        animationEffect: "zoom",
                        animationDuration: 366,
                        zoomOpacity: "auto",
                        transitionEffect: "fade",
                        transitionDuration: 366,
                        slideClass: "",
                        baseClass: "",
                        baseTpl:
                            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                        spinnerTpl: '<div class="fancybox-loading"></div>',
                        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                        btnTpl: {
                            download:
                                '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                            zoom:
                                '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                            close:
                                '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                            arrowLeft:
                                '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                            arrowRight:
                                '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                            smallBtn:
                                '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
                        },
                        parentEl: "body",
                        hideScrollbar: !0,
                        autoFocus: !0,
                        backFocus: !0,
                        trapFocus: !0,
                        fullScreen: { autoStart: !1 },
                        touch: { vertical: !0, momentum: !0 },
                        hash: null,
                        media: {},
                        slideShow: { autoStart: !1, speed: 3e3 },
                        thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
                        wheel: "auto",
                        onInit: m.noop,
                        beforeLoad: m.noop,
                        afterLoad: m.noop,
                        beforeShow: m.noop,
                        afterShow: m.noop,
                        beforeClose: m.noop,
                        afterClose: m.noop,
                        onActivate: m.noop,
                        onDeactivate: m.noop,
                        clickContent: function (t, e) {
                            return "image" === t.type && "zoom";
                        },
                        clickSlide: "close",
                        clickOutside: "close",
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1,
                        mobile: {
                            preventCaptionOverlap: !1,
                            idleTime: !1,
                            clickContent: function (t, e) {
                                return "image" === t.type && "toggleControls";
                            },
                            clickSlide: function (t, e) {
                                return "image" === t.type ? "toggleControls" : "close";
                            },
                            dblclickContent: function (t, e) {
                                return "image" === t.type && "zoom";
                            },
                            dblclickSlide: function (t, e) {
                                return "image" === t.type && "zoom";
                            },
                        },
                        lang: "en",
                        i18n: {
                            en: {
                                CLOSE: "Close",
                                NEXT: "Next",
                                PREV: "Previous",
                                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                                PLAY_START: "Start slideshow",
                                PLAY_STOP: "Pause slideshow",
                                FULL_SCREEN: "Full screen",
                                THUMBS: "Thumbnails",
                                DOWNLOAD: "Download",
                                SHARE: "Share",
                                ZOOM: "Zoom",
                            },
                            de: {
                                CLOSE: "Schlie&szlig;en",
                                NEXT: "Weiter",
                                PREV: "Zur&uuml;ck",
                                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                                PLAY_START: "Diaschau starten",
                                PLAY_STOP: "Diaschau beenden",
                                FULL_SCREEN: "Vollbild",
                                THUMBS: "Vorschaubilder",
                                DOWNLOAD: "Herunterladen",
                                SHARE: "Teilen",
                                ZOOM: "Vergr&ouml;&szlig;ern",
                            },
                        },
                    },
                    n = m(l),
                    r = m(c),
                    a = 0,
                    p =
                        l.requestAnimationFrame ||
                        l.webkitRequestAnimationFrame ||
                        l.mozRequestAnimationFrame ||
                        l.oRequestAnimationFrame ||
                        function (t) {
                            return l.setTimeout(t, 1e3 / 60);
                        },
                    d =
                        l.cancelAnimationFrame ||
                        l.webkitCancelAnimationFrame ||
                        l.mozCancelAnimationFrame ||
                        l.oCancelAnimationFrame ||
                        function (t) {
                            l.clearTimeout(t);
                        },
                    h = (function () {
                        var t,
                            e = c.createElement("fakeelement"),
                            i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                        for (t in i) if (e.style[t] !== g) return i[t];
                        return "transitionend";
                    })(),
                    u = function (t) {
                        return t && t.length && t[0].offsetHeight;
                    },
                    f = function (t, e) {
                        var i = m.extend(!0, {}, t, e);
                        return (
                            m.each(e, function (t, e) {
                                m.isArray(e) && (i[t] = e);
                            }),
                            i
                        );
                    },
                    v = function (t, e, i) {
                        var o = this;
                        (o.opts = f({ index: i }, m.fancybox.defaults)),
                            m.isPlainObject(e) && (o.opts = f(o.opts, e)),
                            m.fancybox.isMobile && (o.opts = f(o.opts, o.opts.mobile)),
                            (o.id = o.opts.id || ++a),
                            (o.currIndex = parseInt(o.opts.index, 10) || 0),
                            (o.prevIndex = null),
                            (o.prevPos = null),
                            (o.currPos = 0),
                            (o.firstRun = !0),
                            (o.group = []),
                            (o.slides = {}),
                            o.addContent(t),
                            o.group.length && o.init();
                    };
                m.extend(v.prototype, {
                    init: function () {
                        var e,
                            i,
                            o = this,
                            s = o.group[o.currIndex].opts;
                        s.closeExisting && m.fancybox.close(!0),
                            m("body").addClass("fancybox-active"),
                            !m.fancybox.getInstance() &&
                                !1 !== s.hideScrollbar &&
                                !m.fancybox.isMobile &&
                                c.body.scrollHeight > l.innerHeight &&
                                (m("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - c.documentElement.clientWidth) + "px;}</style>"),
                                m("body").addClass("compensate-for-scrollbar")),
                            (i = ""),
                            m.each(s.buttons, function (t, e) {
                                i += s.btnTpl[e] || "";
                            }),
                            (e = m(o.translate(o, s.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight)))
                                .attr("id", "fancybox-container-" + o.id)
                                .addClass(s.baseClass)
                                .data("FancyBox", o)
                                .appendTo(s.parentEl)),
                            (o.$refs = { container: e }),
                            ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                                o.$refs[t] = e.find(".fancybox-" + t);
                            }),
                            o.trigger("onInit"),
                            o.activate(),
                            o.jumpTo(o.currIndex);
                    },
                    translate: function (t, e) {
                        var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                            return i[e] === g ? t : i[e];
                        });
                    },
                    addContent: function (t) {
                        var e,
                            c = this,
                            i = m.makeArray(t);
                        m.each(i, function (t, e) {
                            var i,
                                o,
                                s,
                                n,
                                r,
                                a = {},
                                l = {};
                            m.isPlainObject(e)
                                ? (l = (a = e).opts || e)
                                : "object" === m.type(e) && m(e).length
                                ? ((l = (i = m(e)).data() || {}), ((l = m.extend(!0, {}, l, l.options)).$orig = i), (a.src = c.opts.src || l.src || i.attr("href")), a.type || a.src || ((a.type = "inline"), (a.src = e)))
                                : (a = { type: "html", src: e + "" }),
                                (a.opts = m.extend(!0, {}, c.opts, l)),
                                m.isArray(l.buttons) && (a.opts.buttons = l.buttons),
                                m.fancybox.isMobile && a.opts.mobile && (a.opts = f(a.opts, a.opts.mobile)),
                                (o = a.type || a.opts.type),
                                (n = a.src || ""),
                                !o &&
                                    n &&
                                    ((s = n.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                                        ? ((o = "video"), a.opts.video.format || (a.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
                                        : n.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)
                                        ? (o = "image")
                                        : n.match(/\.(pdf)((\?|#).*)?$/i)
                                        ? ((o = "iframe"), (a = m.extend(!0, a, { contentType: "pdf", opts: { iframe: { preload: !1 } } })))
                                        : "#" === n.charAt(0) && (o = "inline")),
                                o ? (a.type = o) : c.trigger("objectNeedsType", a),
                                a.contentType || (a.contentType = -1 < m.inArray(a.type, ["html", "inline", "ajax"]) ? "html" : a.type),
                                (a.index = c.group.length),
                                "auto" == a.opts.smallBtn && (a.opts.smallBtn = -1 < m.inArray(a.type, ["html", "inline", "ajax"])),
                                "auto" === a.opts.toolbar && (a.opts.toolbar = !a.opts.smallBtn),
                                (a.$thumb = a.opts.$thumb || null),
                                a.opts.$trigger && a.index === c.opts.index && ((a.$thumb = a.opts.$trigger.find("img:first")), a.$thumb.length && (a.opts.$orig = a.opts.$trigger)),
                                (a.$thumb && a.$thumb.length) || !a.opts.$orig || (a.$thumb = a.opts.$orig.find("img:first")),
                                a.$thumb && !a.$thumb.length && (a.$thumb = null),
                                (a.thumb = a.opts.thumb || (a.$thumb ? a.$thumb[0].src : null)),
                                "function" === m.type(a.opts.caption) && (a.opts.caption = a.opts.caption.apply(e, [c, a])),
                                "function" === m.type(c.opts.caption) && (a.opts.caption = c.opts.caption.apply(e, [c, a])),
                                a.opts.caption instanceof m || (a.opts.caption = a.opts.caption === g ? "" : a.opts.caption + ""),
                                "ajax" === a.type && 1 < (r = n.split(/\s+/, 2)).length && ((a.src = r.shift()), (a.opts.filter = r.shift())),
                                a.opts.modal &&
                                    (a.opts = m.extend(!0, a.opts, {
                                        trapFocus: !0,
                                        infobar: 0,
                                        toolbar: 0,
                                        smallBtn: 0,
                                        keyboard: 0,
                                        slideShow: 0,
                                        fullScreen: 0,
                                        thumbs: 0,
                                        touch: 0,
                                        clickContent: !1,
                                        clickSlide: !1,
                                        clickOutside: !1,
                                        dblclickContent: !1,
                                        dblclickSlide: !1,
                                        dblclickOutside: !1,
                                    })),
                                c.group.push(a);
                        }),
                            Object.keys(c.slides).length && (c.updateControls(), (e = c.Thumbs) && e.isActive && (e.create(), e.focus()));
                    },
                    addEvents: function () {
                        var o = this;
                        o.removeEvents(),
                            o.$refs.container
                                .on("click.fb-close", "[data-fancybox-close]", function (t) {
                                    t.stopPropagation(), t.preventDefault(), o.close(t);
                                })
                                .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                                    t.stopPropagation(), t.preventDefault(), o.previous();
                                })
                                .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                                    t.stopPropagation(), t.preventDefault(), o.next();
                                })
                                .on("click.fb", "[data-fancybox-zoom]", function (t) {
                                    o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                                }),
                            n.on("orientationchange.fb resize.fb", function (t) {
                                t && t.originalEvent && "resize" === t.originalEvent.type
                                    ? (o.requestId && d(o.requestId),
                                      (o.requestId = p(function () {
                                          o.update(t);
                                      })))
                                    : (o.current && "iframe" === o.current.type && o.$refs.stage.hide(),
                                      setTimeout(
                                          function () {
                                              o.$refs.stage.show(), o.update(t);
                                          },
                                          m.fancybox.isMobile ? 600 : 250
                                      ));
                            }),
                            r.on("keydown.fb", function (t) {
                                var e = (m.fancybox ? m.fancybox.getInstance() : null).current,
                                    i = t.keyCode || t.which;
                                if (9 != i) {
                                    if (!(!e.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || m(t.target).is("input,textarea,video,audio,select")))
                                        return 8 === i || 27 === i
                                            ? (t.preventDefault(), void o.close(t))
                                            : 37 === i || 38 === i
                                            ? (t.preventDefault(), void o.previous())
                                            : 39 === i || 40 === i
                                            ? (t.preventDefault(), void o.next())
                                            : void o.trigger("afterKeydown", t, i);
                                } else e.opts.trapFocus && o.focus(t);
                            }),
                            o.group[o.currIndex].opts.idleTime &&
                                ((o.idleSecondsCounter = 0),
                                r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                                    (o.idleSecondsCounter = 0), o.isIdle && o.showControls(), (o.isIdle = !1);
                                }),
                                (o.idleInterval = l.setInterval(function () {
                                    o.idleSecondsCounter++, o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && ((o.isIdle = !0), (o.idleSecondsCounter = 0), o.hideControls());
                                }, 1e3)));
                    },
                    removeEvents: function () {
                        n.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (l.clearInterval(this.idleInterval), (this.idleInterval = null));
                    },
                    previous: function (t) {
                        return this.jumpTo(this.currPos - 1, t);
                    },
                    next: function (t) {
                        return this.jumpTo(this.currPos + 1, t);
                    },
                    jumpTo: function (t, o) {
                        var e,
                            i,
                            s,
                            n,
                            r,
                            a,
                            l,
                            c,
                            d,
                            h = this,
                            p = h.group.length;
                        if (!(h.isDragging || h.isClosing || (h.isAnimating && h.firstRun))) {
                            if (((t = parseInt(t, 10)), !(s = h.current ? h.current.opts.loop : h.opts.loop) && (t < 0 || p <= t))) return !1;
                            if (
                                ((e = h.firstRun = !Object.keys(h.slides).length),
                                (r = h.current),
                                (h.prevIndex = h.currIndex),
                                (h.prevPos = h.currPos),
                                (n = h.createSlide(t)),
                                1 < p && ((s || n.index < p - 1) && h.createSlide(t + 1), (s || 0 < n.index) && h.createSlide(t - 1)),
                                (h.current = n),
                                (h.currIndex = n.index),
                                (h.currPos = n.pos),
                                h.trigger("beforeShow", e),
                                h.updateControls(),
                                (n.forcedDuration = g),
                                m.isNumeric(o) ? (n.forcedDuration = o) : (o = n.opts[e ? "animationDuration" : "transitionDuration"]),
                                (o = parseInt(o, 10)),
                                (i = h.isMoved(n)),
                                n.$slide.addClass("fancybox-slide--current"),
                                e)
                            )
                                return n.opts.animationEffect && o && h.$refs.container.css("transition-duration", o + "ms"), h.$refs.container.addClass("fancybox-is-open").trigger("focus"), h.loadSlide(n), void h.preload("image");
                            (a = m.fancybox.getTranslate(r.$slide)),
                                (l = m.fancybox.getTranslate(h.$refs.stage)),
                                m.each(h.slides, function (t, e) {
                                    m.fancybox.stop(e.$slide, !0);
                                }),
                                r.pos !== n.pos && (r.isComplete = !1),
                                r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                                i
                                    ? ((d = a.left - (r.pos * a.width + r.pos * r.opts.gutter)),
                                      m.each(h.slides, function (t, e) {
                                          e.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                                              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                          });
                                          var i = e.pos * a.width + e.pos * e.opts.gutter;
                                          m.fancybox.setTranslate(e.$slide, { top: 0, left: i - l.left + d }),
                                              e.pos !== n.pos && e.$slide.addClass("fancybox-slide--" + (e.pos > n.pos ? "next" : "previous")),
                                              u(e.$slide),
                                              m.fancybox.animate(e.$slide, { top: 0, left: (e.pos - n.pos) * a.width + (e.pos - n.pos) * e.opts.gutter }, o, function () {
                                                  e.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === h.currPos && h.complete();
                                              });
                                      }))
                                    : o &&
                                      n.opts.transitionEffect &&
                                      ((c = "fancybox-animated fancybox-fx-" + n.opts.transitionEffect),
                                      r.$slide.addClass("fancybox-slide--" + (r.pos > n.pos ? "next" : "previous")),
                                      m.fancybox.animate(
                                          r.$slide,
                                          c,
                                          o,
                                          function () {
                                              r.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous");
                                          },
                                          !1
                                      )),
                                n.isLoaded ? h.revealContent(n) : h.loadSlide(n),
                                h.preload("image");
                        }
                    },
                    createSlide: function (t) {
                        var e,
                            i,
                            o = this;
                        return (
                            (i = (i = t % o.group.length) < 0 ? o.group.length + i : i),
                            !o.slides[t] &&
                                o.group[i] &&
                                ((e = m('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage)), (o.slides[t] = m.extend(!0, {}, o.group[i], { pos: t, $slide: e, isLoaded: !1 })), o.updateSlide(o.slides[t])),
                            o.slides[t]
                        );
                    },
                    scaleToActual: function (t, e, i) {
                        var o,
                            s,
                            n,
                            r,
                            a,
                            l = this,
                            c = l.current,
                            d = c.$content,
                            h = m.fancybox.getTranslate(c.$slide).width,
                            p = m.fancybox.getTranslate(c.$slide).height,
                            u = c.width,
                            f = c.height;
                        l.isAnimating ||
                            l.isMoved() ||
                            !d ||
                            "image" != c.type ||
                            !c.isLoaded ||
                            c.hasError ||
                            ((l.isAnimating = !0),
                            m.fancybox.stop(d),
                            (t = t === g ? 0.5 * h : t),
                            (e = e === g ? 0.5 * p : e),
                            ((o = m.fancybox.getTranslate(d)).top -= m.fancybox.getTranslate(c.$slide).top),
                            (o.left -= m.fancybox.getTranslate(c.$slide).left),
                            (r = u / o.width),
                            (a = f / o.height),
                            (s = 0.5 * h - 0.5 * u),
                            (n = 0.5 * p - 0.5 * f),
                            h < u && (0 < (s = o.left * r - (t * r - t)) && (s = 0), s < h - u && (s = h - u)),
                            p < f && (0 < (n = o.top * a - (e * a - e)) && (n = 0), n < p - f && (n = p - f)),
                            l.updateCursor(u, f),
                            m.fancybox.animate(d, { top: n, left: s, scaleX: r, scaleY: a }, i || 366, function () {
                                l.isAnimating = !1;
                            }),
                            l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
                    },
                    scaleToFit: function (t) {
                        var e,
                            i = this,
                            o = i.current,
                            s = o.$content;
                        i.isAnimating ||
                            i.isMoved() ||
                            !s ||
                            "image" != o.type ||
                            !o.isLoaded ||
                            o.hasError ||
                            ((i.isAnimating = !0),
                            m.fancybox.stop(s),
                            (e = i.getFitPos(o)),
                            i.updateCursor(e.width, e.height),
                            m.fancybox.animate(s, { top: e.top, left: e.left, scaleX: e.width / s.width(), scaleY: e.height / s.height() }, t || 366, function () {
                                i.isAnimating = !1;
                            }));
                    },
                    getFitPos: function (t) {
                        var e,
                            i,
                            o,
                            s,
                            n = t.$content,
                            r = t.$slide,
                            a = t.width || t.opts.width,
                            l = t.height || t.opts.height,
                            c = {};
                        return (
                            !!(t.isLoaded && n && n.length) &&
                            ((e = m.fancybox.getTranslate(this.$refs.stage).width),
                            (i = m.fancybox.getTranslate(this.$refs.stage).height),
                            (e -= parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight")) + parseFloat(n.css("marginLeft")) + parseFloat(n.css("marginRight"))),
                            (i -= parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom")) + parseFloat(n.css("marginTop")) + parseFloat(n.css("marginBottom"))),
                            (a && l) || ((a = e), (l = i)),
                            e - 0.5 < (a *= o = Math.min(1, e / a, i / l)) && (a = e),
                            i - 0.5 < (l *= o) && (l = i),
                            "image" === t.type
                                ? ((c.top = Math.floor(0.5 * (i - l)) + parseFloat(r.css("paddingTop"))), (c.left = Math.floor(0.5 * (e - a)) + parseFloat(r.css("paddingLeft"))))
                                : "video" === t.contentType && (a / (s = t.opts.width && t.opts.height ? a / l : t.opts.ratio || 16 / 9) < l ? (l = a / s) : l * s < a && (a = l * s)),
                            (c.width = a),
                            (c.height = l),
                            c)
                        );
                    },
                    update: function (i) {
                        var o = this;
                        m.each(o.slides, function (t, e) {
                            o.updateSlide(e, i);
                        });
                    },
                    updateSlide: function (t, e) {
                        var i = this,
                            o = t && t.$content,
                            s = t.width || t.opts.width,
                            n = t.height || t.opts.height,
                            r = t.$slide;
                        i.adjustCaption(t),
                            o && (s || n || "video" === t.contentType) && !t.hasError && (m.fancybox.stop(o), m.fancybox.setTranslate(o, i.getFitPos(t)), t.pos === i.currPos && ((i.isAnimating = !1), i.updateCursor())),
                            i.adjustLayout(t),
                            r.length &&
                                (r.trigger("refresh"),
                                t.pos === i.currPos && i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)),
                            i.trigger("onUpdate", t, e);
                    },
                    centerSlide: function (t) {
                        var e = this,
                            i = e.current,
                            o = i.$slide;
                        !e.isClosing &&
                            i &&
                            (o.siblings().css({ transform: "", opacity: "" }),
                            o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                            m.fancybox.animate(
                                o,
                                { top: 0, left: 0, opacity: 1 },
                                t === g ? 0 : t,
                                function () {
                                    o.css({ transform: "", opacity: "" }), i.isComplete || e.complete();
                                },
                                !1
                            ));
                    },
                    isMoved: function (t) {
                        var e,
                            i,
                            o = t || this.current;
                        return !!o && ((i = m.fancybox.getTranslate(this.$refs.stage)), (e = m.fancybox.getTranslate(o.$slide)), !o.$slide.hasClass("fancybox-animated") && (0.5 < Math.abs(e.top - i.top) || 0.5 < Math.abs(e.left - i.left)));
                    },
                    updateCursor: function (t, e) {
                        var i,
                            o,
                            s = this,
                            n = s.current,
                            r = s.$refs.container;
                        n &&
                            !s.isClosing &&
                            s.Guestures &&
                            (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                            (o = !!(i = s.canPan(t, e)) || s.isZoomable()),
                            r.toggleClass("fancybox-is-zoomable", o),
                            m("[data-fancybox-zoom]").prop("disabled", !o),
                            i
                                ? r.addClass("fancybox-can-pan")
                                : o && ("zoom" === n.opts.clickContent || (m.isFunction(n.opts.clickContent) && "zoom" == n.opts.clickContent(n)))
                                ? r.addClass("fancybox-can-zoomIn")
                                : n.opts.touch && (n.opts.touch.vertical || 1 < s.group.length) && "video" !== n.contentType && r.addClass("fancybox-can-swipe"));
                    },
                    isZoomable: function () {
                        var t,
                            e = this.current;
                        if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                            if (!e.isLoaded) return !0;
                            if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0;
                        }
                        return !1;
                    },
                    isScaledDown: function (t, e) {
                        var i = !1,
                            o = this.current,
                            s = o.$content;
                        return t !== g && e !== g ? (i = t < o.width && e < o.height) : s && (i = (i = m.fancybox.getTranslate(s)).width < o.width && i.height < o.height), i;
                    },
                    canPan: function (t, e) {
                        var i = this.current,
                            o = null,
                            s = !1;
                        return (
                            "image" === i.type &&
                                (i.isComplete || (t && e)) &&
                                !i.hasError &&
                                ((s = this.getFitPos(i)),
                                t !== g && e !== g ? (o = { width: t, height: e }) : i.isComplete && (o = m.fancybox.getTranslate(i.$content)),
                                o && s && (s = 1.5 < Math.abs(o.width - s.width) || 1.5 < Math.abs(o.height - s.height))),
                            s
                        );
                    },
                    loadSlide: function (i) {
                        var t,
                            e,
                            o,
                            s = this;
                        if (!i.isLoading && !i.isLoaded) {
                            if (!(i.isLoading = !0) === s.trigger("beforeLoad", i)) return (i.isLoading = !1);
                            switch (((t = i.type), (e = i.$slide).off("refresh").trigger("onReset").addClass(i.opts.slideClass), t)) {
                                case "image":
                                    s.setImage(i);
                                    break;
                                case "iframe":
                                    s.setIframe(i);
                                    break;
                                case "html":
                                    s.setContent(i, i.src || i.content);
                                    break;
                                case "video":
                                    s.setContent(
                                        i,
                                        i.opts.video.tpl
                                            .replace(/\{\{src\}\}/gi, i.src)
                                            .replace("{{format}}", i.opts.videoFormat || i.opts.video.format || "")
                                            .replace("{{poster}}", i.thumb || "")
                                    );
                                    break;
                                case "inline":
                                    m(i.src).length ? s.setContent(i, m(i.src)) : s.setError(i);
                                    break;
                                case "ajax":
                                    s.showLoading(i),
                                        (o = m.ajax(
                                            m.extend({}, i.opts.ajax.settings, {
                                                url: i.src,
                                                success: function (t, e) {
                                                    "success" === e && s.setContent(i, t);
                                                },
                                                error: function (t, e) {
                                                    t && "abort" !== e && s.setError(i);
                                                },
                                            })
                                        )),
                                        e.one("onReset", function () {
                                            o.abort();
                                        });
                                    break;
                                default:
                                    s.setError(i);
                            }
                            return !0;
                        }
                    },
                    setImage: function (e) {
                        var t,
                            i = this;
                        setTimeout(function () {
                            var t = e.$image;
                            i.isClosing || !e.isLoading || (t && t.length && t[0].complete) || e.hasError || i.showLoading(e);
                        }, 50),
                            i.checkSrcset(e),
                            (e.$content = m('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image"))),
                            !1 !== e.opts.preload &&
                                e.opts.width &&
                                e.opts.height &&
                                e.thumb &&
                                ((e.width = e.opts.width),
                                (e.height = e.opts.height),
                                ((t = c.createElement("img")).onerror = function () {
                                    m(this).remove(), (e.$ghost = null);
                                }),
                                (t.onload = function () {
                                    i.afterLoad(e);
                                }),
                                (e.$ghost = m(t).addClass("fancybox-image").appendTo(e.$content).attr("src", e.thumb))),
                            i.setBigImage(e);
                    },
                    checkSrcset: function (t) {
                        var e,
                            i,
                            o,
                            s,
                            n = t.opts.srcset || t.opts.image.srcset;
                        if (n) {
                            (o = l.devicePixelRatio || 1),
                                (s = l.innerWidth * o),
                                (i = n.split(",").map(function (t) {
                                    var o = {};
                                    return (
                                        t
                                            .trim()
                                            .split(/\s+/)
                                            .forEach(function (t, e) {
                                                var i = parseInt(t.substring(0, t.length - 1), 10);
                                                if (0 === e) return (o.url = t);
                                                i && ((o.value = i), (o.postfix = t[t.length - 1]));
                                            }),
                                        o
                                    );
                                })).sort(function (t, e) {
                                    return t.value - e.value;
                                });
                            for (var r = 0; r < i.length; r++) {
                                var a = i[r];
                                if (("w" === a.postfix && a.value >= s) || ("x" === a.postfix && a.value >= o)) {
                                    e = a;
                                    break;
                                }
                            }
                            !e && i.length && (e = i[i.length - 1]), e && ((t.src = e.url), t.width && t.height && "w" == e.postfix && ((t.height = (t.width / t.height) * e.value), (t.width = e.value)), (t.opts.srcset = n));
                        }
                    },
                    setBigImage: function (e) {
                        var i = this,
                            t = c.createElement("img"),
                            o = m(t);
                        (e.$image = o
                            .one("error", function () {
                                i.setError(e);
                            })
                            .one("load", function () {
                                var t;
                                e.$ghost || (i.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight), i.afterLoad(e)),
                                    i.isClosing ||
                                        (e.opts.srcset &&
                                            (((t = e.opts.sizes) && "auto" !== t) || (t = (1 < e.width / e.height && 1 < n.width() / n.height() ? "100" : Math.round((e.width / e.height) * 100)) + "vw"),
                                            o.attr("sizes", t).attr("srcset", e.opts.srcset)),
                                        e.$ghost &&
                                            setTimeout(function () {
                                                e.$ghost && !i.isClosing && e.$ghost.hide();
                                            }, Math.min(300, Math.max(1e3, e.height / 1600))),
                                        i.hideLoading(e));
                            })
                            .addClass("fancybox-image")
                            .attr("src", e.src)
                            .appendTo(e.$content)),
                            (t.complete || "complete" == t.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : t.error && o.trigger("error");
                    },
                    resolveImageSlideSize: function (t, e, i) {
                        var o = parseInt(t.opts.width, 10),
                            s = parseInt(t.opts.height, 10);
                        (t.width = e), (t.height = i), 0 < o && ((t.width = o), (t.height = Math.floor((o * i) / e))), 0 < s && ((t.width = Math.floor((s * e) / i)), (t.height = s));
                    },
                    setIframe: function (s) {
                        var n,
                            e = this,
                            r = s.opts.iframe,
                            a = s.$slide;
                        (s.$content = m('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>')
                            .css(r.css)
                            .appendTo(a)),
                            a.addClass("fancybox-slide--" + s.contentType),
                            (s.$iframe = n = m(r.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                                .attr(r.attr)
                                .appendTo(s.$content)),
                            r.preload
                                ? (e.showLoading(s),
                                  n.on("load.fb error.fb", function (t) {
                                      (this.isReady = 1), s.$slide.trigger("refresh"), e.afterLoad(s);
                                  }),
                                  a.on("refresh.fb", function () {
                                      var t,
                                          e = s.$content,
                                          i = r.css.width,
                                          o = r.css.height;
                                      if (1 === n[0].isReady) {
                                          try {
                                              t = n.contents().find("body");
                                          } catch (t) {}
                                          t &&
                                              t.length &&
                                              t.children().length &&
                                              (a.css("overflow", "visible"),
                                              e.css({ width: "100%", "max-width": "100%", height: "9999px" }),
                                              i === g && (i = Math.ceil(Math.max(t[0].clientWidth, t.outerWidth(!0)))),
                                              e.css("width", i || "").css("max-width", ""),
                                              o === g && (o = Math.ceil(Math.max(t[0].clientHeight, t.outerHeight(!0)))),
                                              e.css("height", o || ""),
                                              a.css("overflow", "auto")),
                                              e.removeClass("fancybox-is-hidden");
                                      }
                                  }))
                                : e.afterLoad(s),
                            n.attr("src", s.src),
                            a.one("onReset", function () {
                                try {
                                    m(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                                } catch (t) {}
                                m(this).off("refresh.fb").empty(), (s.isLoaded = !1), (s.isRevealed = !1);
                            });
                    },
                    setContent: function (t, e) {
                        this.isClosing ||
                            (this.hideLoading(t),
                            t.$content && m.fancybox.stop(t.$content),
                            t.$slide.empty(),
                            (function (t) {
                                return t && t.hasOwnProperty && t instanceof m;
                            })(e) && e.parent().length
                                ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"),
                                  (t.$placeholder = m("<div>").hide().insertAfter(e)),
                                  e.css("display", "inline-block"))
                                : t.hasError || ("string" === m.type(e) && (e = m("<div>").append(m.trim(e)).contents()), t.opts.filter && (e = m("<div>").html(e).find(t.opts.filter))),
                            t.$slide.one("onReset", function () {
                                m(this).find("video,audio").trigger("pause"),
                                    t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), (t.$placeholder = null)),
                                    t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                                    t.hasError || (m(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
                            }),
                            m(e).appendTo(t.$slide),
                            m(e).is("video,audio") &&
                                (m(e).addClass("fancybox-video"), m(e).wrap("<div></div>"), (t.contentType = "video"), (t.opts.width = t.opts.width || m(e).attr("width")), (t.opts.height = t.opts.height || m(e).attr("height"))),
                            (t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first()),
                            t.$content.siblings().hide(),
                            t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                            t.$content.addClass("fancybox-content"),
                            t.$slide.addClass("fancybox-slide--" + t.contentType),
                            this.afterLoad(t));
                    },
                    setError: function (t) {
                        (t.hasError = !0),
                            t.$slide
                                .trigger("onReset")
                                .removeClass("fancybox-slide--" + t.contentType)
                                .addClass("fancybox-slide--error"),
                            (t.contentType = "html"),
                            this.setContent(t, this.translate(t, t.opts.errorTpl)),
                            t.pos === this.currPos && (this.isAnimating = !1);
                    },
                    showLoading: function (t) {
                        (t = t || this.current) && !t.$spinner && (t.$spinner = m(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
                    },
                    hideLoading: function (t) {
                        (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
                    },
                    afterLoad: function (t) {
                        var e = this;
                        e.isClosing ||
                            ((t.isLoading = !1),
                            (t.isLoaded = !0),
                            e.trigger("afterLoad", t),
                            e.hideLoading(t),
                            !t.opts.smallBtn || (t.$smallBtn && t.$smallBtn.length) || (t.$smallBtn = m(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                            t.opts.protect &&
                                t.$content &&
                                !t.hasError &&
                                (t.$content.on("contextmenu.fb", function (t) {
                                    return 2 == t.button && t.preventDefault(), !0;
                                }),
                                "image" === t.type && m('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                            e.adjustCaption(t),
                            e.adjustLayout(t),
                            t.pos === e.currPos && e.updateCursor(),
                            e.revealContent(t));
                    },
                    adjustCaption: function (t) {
                        var e,
                            i = this,
                            o = t || i.current,
                            s = o.opts.caption,
                            n = o.opts.preventCaptionOverlap,
                            r = i.$refs.caption,
                            a = !1;
                        r.toggleClass("fancybox-caption--separate", n),
                            n &&
                                s &&
                                s.length &&
                                (o.pos !== i.currPos ? ((e = r.clone().appendTo(r.parent())).children().eq(0).empty().html(s), (a = e.outerHeight(!0)), e.empty().remove()) : i.$caption && (a = i.$caption.outerHeight(!0)),
                                o.$slide.css("padding-bottom", a || ""));
                    },
                    adjustLayout: function (t) {
                        var e,
                            i,
                            o,
                            s,
                            n = t || this.current;
                        n.isLoaded &&
                            !0 !== n.opts.disableLayoutFix &&
                            (n.$content.css("margin-bottom", ""),
                            n.$content.outerHeight() > n.$slide.height() + 0.5 &&
                                ((o = n.$slide[0].style["padding-bottom"]),
                                (s = n.$slide.css("padding-bottom")),
                                0 < parseFloat(s) && ((e = n.$slide[0].scrollHeight), n.$slide.css("padding-bottom", 0), Math.abs(e - n.$slide[0].scrollHeight) < 1 && (i = s), n.$slide.css("padding-bottom", o))),
                            n.$content.css("margin-bottom", i));
                    },
                    revealContent: function (t) {
                        var e,
                            i,
                            o,
                            s,
                            n = this,
                            r = t.$slide,
                            a = !1,
                            l = !1,
                            c = n.isMoved(t),
                            d = t.isRevealed;
                        return (
                            (t.isRevealed = !0),
                            (e = t.opts[n.firstRun ? "animationEffect" : "transitionEffect"]),
                            (o = t.opts[n.firstRun ? "animationDuration" : "transitionDuration"]),
                            (o = parseInt(t.forcedDuration === g ? o : t.forcedDuration, 10)),
                            (!c && t.pos === n.currPos && o) || (e = !1),
                            "zoom" === e && (t.pos === n.currPos && o && "image" === t.type && !t.hasError && (l = n.getThumbPos(t)) ? (a = n.getFitPos(t)) : (e = "fade")),
                            "zoom" === e
                                ? ((n.isAnimating = !0),
                                  (a.scaleX = a.width / l.width),
                                  (a.scaleY = a.height / l.height),
                                  "auto" == (s = t.opts.zoomOpacity) && (s = 0.1 < Math.abs(t.width / t.height - l.width / l.height)),
                                  s && ((l.opacity = 0.1), (a.opacity = 1)),
                                  m.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l),
                                  u(t.$content),
                                  void m.fancybox.animate(t.$content, a, o, function () {
                                      (n.isAnimating = !1), n.complete();
                                  }))
                                : (n.updateSlide(t),
                                  e
                                      ? (m.fancybox.stop(r),
                                        (i = "fancybox-slide--" + (t.pos >= n.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e),
                                        r.addClass(i).removeClass("fancybox-slide--current"),
                                        t.$content.removeClass("fancybox-is-hidden"),
                                        u(r),
                                        "image" !== t.type && t.$content.hide().show(0),
                                        void m.fancybox.animate(
                                            r,
                                            "fancybox-slide--current",
                                            o,
                                            function () {
                                                r.removeClass(i).css({ transform: "", opacity: "" }), t.pos === n.currPos && n.complete();
                                            },
                                            !0
                                        ))
                                      : (t.$content.removeClass("fancybox-is-hidden"), d || !c || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === n.currPos && n.complete())))
                        );
                    },
                    getThumbPos: function (t) {
                        var e,
                            i,
                            o,
                            s,
                            n,
                            r,
                            a = t.$thumb;
                        return (
                            !(
                                !a ||
                                !(function (t) {
                                    var e, i;
                                    return (
                                        !(!t || t.ownerDocument !== c) &&
                                        (m(".fancybox-container").css("pointer-events", "none"),
                                        (e = { x: t.getBoundingClientRect().left + t.offsetWidth / 2, y: t.getBoundingClientRect().top + t.offsetHeight / 2 }),
                                        (i = c.elementFromPoint(e.x, e.y) === t),
                                        m(".fancybox-container").css("pointer-events", ""),
                                        i)
                                    );
                                })(a[0])
                            ) &&
                            ((i = m.fancybox.getTranslate(a)),
                            (o = parseFloat(a.css("border-top-width") || 0)),
                            (s = parseFloat(a.css("border-right-width") || 0)),
                            (n = parseFloat(a.css("border-bottom-width") || 0)),
                            (r = parseFloat(a.css("border-left-width") || 0)),
                            (e = { top: i.top + o, left: i.left + r, width: i.width - s - r, height: i.height - o - n, scaleX: 1, scaleY: 1 }),
                            0 < i.width && 0 < i.height && e)
                        );
                    },
                    complete: function () {
                        var t,
                            i = this,
                            e = i.current,
                            o = {};
                        !i.isMoved() &&
                            e.isLoaded &&
                            (e.isComplete ||
                                ((e.isComplete = !0),
                                e.$slide.siblings().trigger("onReset"),
                                i.preload("inline"),
                                u(e.$slide),
                                e.$slide.addClass("fancybox-slide--complete"),
                                m.each(i.slides, function (t, e) {
                                    e.pos >= i.currPos - 1 && e.pos <= i.currPos + 1 ? (o[e.pos] = e) : e && (m.fancybox.stop(e.$slide), e.$slide.off().remove());
                                }),
                                (i.slides = o)),
                            (i.isAnimating = !1),
                            i.updateCursor(),
                            i.trigger("afterShow"),
                            e.opts.video.autoStart &&
                                e.$slide
                                    .find("video,audio")
                                    .filter(":visible:first")
                                    .trigger("play")
                                    .one("ended", function () {
                                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), i.next();
                                    }),
                            e.opts.autoFocus && "html" === e.contentType && ((t = e.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : i.focus(null, !0)),
                            e.$slide.scrollTop(0).scrollLeft(0));
                    },
                    preload: function (t) {
                        var e,
                            i,
                            o = this;
                        o.group.length < 2 || ((i = o.slides[o.currPos + 1]), (e = o.slides[o.currPos - 1]) && e.type === t && o.loadSlide(e), i && i.type === t && o.loadSlide(i));
                    },
                    focus: function (t, e) {
                        var i,
                            o,
                            s = this,
                            n = [
                                "a[href]",
                                "area[href]",
                                'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                                "select:not([disabled]):not([aria-hidden])",
                                "textarea:not([disabled]):not([aria-hidden])",
                                "button:not([disabled]):not([aria-hidden])",
                                "iframe",
                                "object",
                                "embed",
                                "video",
                                "audio",
                                "[contenteditable]",
                                '[tabindex]:not([tabindex^="-"])',
                            ].join(",");
                        s.isClosing ||
                            ((i = (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (e ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible")).filter(n).filter(function () {
                                return "hidden" !== m(this).css("visibility") && !m(this).hasClass("disabled");
                            })).length
                                ? ((o = i.index(c.activeElement)),
                                  t && t.shiftKey ? (o < 0 || 0 == o) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (o < 0 || o == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus")))
                                : s.$refs.container.trigger("focus"));
                    },
                    activate: function () {
                        var e = this;
                        m(".fancybox-container").each(function () {
                            var t = m(this).data("FancyBox");
                            t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), (t.isVisible = !1));
                        }),
                            (e.isVisible = !0),
                            (e.current || e.isIdle) && (e.update(), e.updateControls()),
                            e.trigger("onActivate"),
                            e.addEvents();
                    },
                    close: function (t, e) {
                        function i() {
                            d.cleanUp(t);
                        }
                        var o,
                            s,
                            n,
                            r,
                            a,
                            l,
                            c,
                            d = this,
                            h = d.current;
                        return (
                            !d.isClosing &&
                            (!(d.isClosing = !0) === d.trigger("beforeClose", t)
                                ? ((d.isClosing = !1),
                                  p(function () {
                                      d.update();
                                  }),
                                  !1)
                                : (d.removeEvents(),
                                  (n = h.$content),
                                  (o = h.opts.animationEffect),
                                  (s = m.isNumeric(e) ? e : o ? h.opts.animationDuration : 0),
                                  h.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                                  !0 !== t ? m.fancybox.stop(h.$slide) : (o = !1),
                                  h.$slide.siblings().trigger("onReset").remove(),
                                  s &&
                                      d.$refs.container
                                          .removeClass("fancybox-is-open")
                                          .addClass("fancybox-is-closing")
                                          .css("transition-duration", s + "ms"),
                                  d.hideLoading(h),
                                  d.hideControls(!0),
                                  d.updateCursor(),
                                  "zoom" !== o || (n && s && "image" === h.type && !d.isMoved() && !h.hasError && (c = d.getThumbPos(h))) || (o = "fade"),
                                  "zoom" === o
                                      ? (m.fancybox.stop(n),
                                        (l = { top: (r = m.fancybox.getTranslate(n)).top, left: r.left, scaleX: r.width / c.width, scaleY: r.height / c.height, width: c.width, height: c.height }),
                                        "auto" == (a = h.opts.zoomOpacity) && (a = 0.1 < Math.abs(h.width / h.height - c.width / c.height)),
                                        a && (c.opacity = 0),
                                        m.fancybox.setTranslate(n, l),
                                        u(n),
                                        m.fancybox.animate(n, c, s, i))
                                      : o && s
                                      ? m.fancybox.animate(h.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, s, i)
                                      : !0 === t
                                      ? setTimeout(i, s)
                                      : i(),
                                  !0))
                        );
                    },
                    cleanUp: function (t) {
                        var e,
                            i,
                            o,
                            s = this,
                            n = s.current.opts.$orig;
                        s.current.$slide.trigger("onReset"),
                            s.$refs.container.empty().remove(),
                            s.trigger("afterClose", t),
                            s.current.opts.backFocus && ((n && n.length && n.is(":visible")) || (n = s.$trigger), n && n.length && ((i = l.scrollX), (o = l.scrollY), n.trigger("focus"), m("html, body").scrollTop(o).scrollLeft(i))),
                            (s.current = null),
                            (e = m.fancybox.getInstance()) ? e.activate() : (m("body").removeClass("fancybox-active compensate-for-scrollbar"), m("#fancybox-style-noscroll").remove());
                    },
                    trigger: function (t, e) {
                        var i,
                            o = Array.prototype.slice.call(arguments, 1),
                            s = this,
                            n = e && e.opts ? e : s.current;
                        if ((n ? o.unshift(n) : (n = s), o.unshift(s), m.isFunction(n.opts[t]) && (i = n.opts[t].apply(n, o)), !1 === i)) return i;
                        "afterClose" !== t && s.$refs ? s.$refs.container.trigger(t + ".fb", o) : r.trigger(t + ".fb", o);
                    },
                    updateControls: function () {
                        var t = this,
                            e = t.current,
                            i = e.index,
                            o = t.$refs.container,
                            s = t.$refs.caption,
                            n = e.opts.caption;
                        e.$slide.trigger("refresh"),
                            n && n.length ? (t.$caption = s).children().eq(0).html(n) : (t.$caption = null),
                            t.hasHiddenControls || t.isIdle || t.showControls(),
                            o.find("[data-fancybox-count]").html(t.group.length),
                            o.find("[data-fancybox-index]").html(i + 1),
                            o.find("[data-fancybox-prev]").prop("disabled", !e.opts.loop && i <= 0),
                            o.find("[data-fancybox-next]").prop("disabled", !e.opts.loop && i >= t.group.length - 1),
                            "image" === e.type
                                ? o
                                      .find("[data-fancybox-zoom]")
                                      .show()
                                      .end()
                                      .find("[data-fancybox-download]")
                                      .attr("href", e.opts.image.src || e.src)
                                      .show()
                                : e.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                            m(c.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
                    },
                    hideControls: function (t) {
                        var e = ["infobar", "toolbar", "nav"];
                        (!t && this.current.opts.preventCaptionOverlap) || e.push("caption"),
                            this.$refs.container.removeClass(
                                e
                                    .map(function (t) {
                                        return "fancybox-show-" + t;
                                    })
                                    .join(" ")
                            ),
                            (this.hasHiddenControls = !0);
                    },
                    showControls: function () {
                        var t = this,
                            e = t.current ? t.current.opts : t.opts,
                            i = t.$refs.container;
                        (t.hasHiddenControls = !1),
                            (t.idleSecondsCounter = 0),
                            i
                                .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
                                .toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < t.group.length))
                                .toggleClass("fancybox-show-caption", !!t.$caption)
                                .toggleClass("fancybox-show-nav", !!(e.arrows && 1 < t.group.length))
                                .toggleClass("fancybox-is-modal", !!e.modal);
                    },
                    toggleControls: function () {
                        this.hasHiddenControls ? this.showControls() : this.hideControls();
                    },
                }),
                    (m.fancybox = {
                        version: "3.5.7",
                        defaults: s,
                        getInstance: function (t) {
                            var e = m('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                                i = Array.prototype.slice.call(arguments, 1);
                            return e instanceof v && ("string" === m.type(t) ? e[t].apply(e, i) : "function" === m.type(t) && t.apply(e, i), e);
                        },
                        open: function (t, e, i) {
                            return new v(t, e, i);
                        },
                        close: function (t) {
                            var e = this.getInstance();
                            e && (e.close(), !0 === t && this.close(t));
                        },
                        destroy: function () {
                            this.close(!0), r.add("body").off("click.fb-start", "**");
                        },
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        use3d: ((t = c.createElement("div")), l.getComputedStyle && l.getComputedStyle(t) && l.getComputedStyle(t).getPropertyValue("transform") && !(c.documentMode && c.documentMode < 11)),
                        getTranslate: function (t) {
                            var e;
                            return !(!t || !t.length) && { top: (e = t[0].getBoundingClientRect()).top || 0, left: e.left || 0, width: e.width, height: e.height, opacity: parseFloat(t.css("opacity")) };
                        },
                        setTranslate: function (t, e) {
                            var i = "",
                                o = {};
                            if (t && e)
                                return (
                                    (e.left === g && e.top === g) ||
                                        ((i = (e.left === g ? t.position().left : e.left) + "px, " + (e.top === g ? t.position().top : e.top) + "px"), (i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")")),
                                    e.scaleX !== g && e.scaleY !== g ? (i += " scale(" + e.scaleX + ", " + e.scaleY + ")") : e.scaleX !== g && (i += " scaleX(" + e.scaleX + ")"),
                                    i.length && (o.transform = i),
                                    e.opacity !== g && (o.opacity = e.opacity),
                                    e.width !== g && (o.width = e.width),
                                    e.height !== g && (o.height = e.height),
                                    t.css(o)
                                );
                        },
                        animate: function (e, i, o, s, n) {
                            var r,
                                a = this;
                            m.isFunction(o) && ((s = o), (o = null)),
                                a.stop(e),
                                (r = a.getTranslate(e)),
                                e.on(h, function (t) {
                                    (t && t.originalEvent && (!e.is(t.originalEvent.target) || "z-index" == t.originalEvent.propertyName)) ||
                                        (a.stop(e),
                                        m.isNumeric(o) && e.css("transition-duration", ""),
                                        m.isPlainObject(i)
                                            ? i.scaleX !== g && i.scaleY !== g && a.setTranslate(e, { top: i.top, left: i.left, width: r.width * i.scaleX, height: r.height * i.scaleY, scaleX: 1, scaleY: 1 })
                                            : !0 !== n && e.removeClass(i),
                                        m.isFunction(s) && s(t));
                                }),
                                m.isNumeric(o) && e.css("transition-duration", o + "ms"),
                                m.isPlainObject(i)
                                    ? (i.scaleX !== g && i.scaleY !== g && (delete i.width, delete i.height, e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")), m.fancybox.setTranslate(e, i))
                                    : e.addClass(i),
                                e.data(
                                    "timer",
                                    setTimeout(function () {
                                        e.trigger(h);
                                    }, o + 33)
                                );
                        },
                        stop: function (t, e) {
                            t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(h), t.off(h).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
                        },
                    }),
                    (m.fn.fancybox = function (t) {
                        var e;
                        return (e = (t = t || {}).selector || !1) ? m("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, y) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, y), this;
                    }),
                    r.on("click.fb-start", "[data-fancybox]", y),
                    r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
                        m('[data-fancybox="' + m(this).attr("data-fancybox-trigger") + '"]')
                            .eq(m(this).attr("data-fancybox-index") || 0)
                            .trigger("click.fb-start", { $trigger: m(this) });
                    }),
                    (e = ".fancybox-button"),
                    (i = "fancybox-focus"),
                    (o = null),
                    r.on("mousedown mouseup focus blur", e, function (t) {
                        switch (t.type) {
                            case "mousedown":
                                o = m(this);
                                break;
                            case "mouseup":
                                o = null;
                                break;
                            case "focusin":
                                m(e).removeClass(i), m(this).is(o) || m(this).is("[disabled]") || m(this).addClass(i);
                                break;
                            case "focusout":
                                m(e).removeClass(i);
                        }
                    });
            }
        function y(t, e) {
            var i,
                o,
                s,
                n = [],
                r = 0;
            (t && t.isDefaultPrevented()) ||
                (t.preventDefault(),
                (e = e || {}),
                t && t.data && (e = f(t.data.options, e)),
                (i = e.$target || m(t.currentTarget).trigger("blur")),
                ((s = m.fancybox.getInstance()) && s.$trigger && s.$trigger.is(i)) ||
                    ((n = e.selector ? m(e.selector) : (o = i.attr("data-fancybox") || "") ? ((n = t.data ? t.data.items : []).length ? n.filter('[data-fancybox="' + o + '"]') : m('[data-fancybox="' + o + '"]')) : [i]),
                    (r = m(n).index(i)) < 0 && (r = 0),
                    ((s = m.fancybox.open(n, e, r)).$trigger = i)));
        }
    })(window, document, jQuery),
    (function (u) {
        "use strict";
        function f(i, t, e) {
            if (i)
                return (
                    (e = e || ""),
                    "object" === u.type(e) && (e = u.param(e, !0)),
                    u.each(t, function (t, e) {
                        i = i.replace("$" + t, e || "");
                    }),
                    e.length && (i += (0 < i.indexOf("?") ? "&" : "?") + e),
                    i
                );
        }
        var o = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
            },
            vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" },
            instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function (t) {
                    return (
                        "//maps.google." +
                        t[2] +
                        "/?ll=" +
                        (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") +
                        "&output=" +
                        (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
                    );
                },
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
                },
            },
        };
        u(document).on("objectNeedsType.fb", function (t, e, s) {
            var i,
                n,
                r,
                a,
                l,
                c,
                d,
                h = s.src || "",
                p = !1;
            (i = u.extend(!0, {}, o, s.opts.media)),
                u.each(i, function (t, e) {
                    if ((r = h.match(e.matcher))) {
                        if (((p = e.type), (d = t), (c = {}), e.paramPlace && r[e.paramPlace])) {
                            "?" == (l = r[e.paramPlace])[0] && (l = l.substring(1)), (l = l.split("&"));
                            for (var i = 0; i < l.length; ++i) {
                                var o = l[i].split("=", 2);
                                2 == o.length && (c[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")));
                            }
                        }
                        return (
                            (a = u.extend(!0, {}, e.params, s.opts[t], c)),
                            (h = "function" === u.type(e.url) ? e.url.call(this, r, a, s) : f(e.url, r, a)),
                            (n = "function" === u.type(e.thumb) ? e.thumb.call(this, r, a, s) : f(e.thumb, r)),
                            "youtube" === t
                                ? (h = h.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, i, o) {
                                      return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(o, 10));
                                  }))
                                : "vimeo" === t && (h = h.replace("&%23", "#")),
                            !1
                        );
                    }
                }),
                p
                    ? (s.opts.thumb || (s.opts.$thumb && s.opts.$thumb.length) || (s.opts.thumb = n),
                      "iframe" === p && (s.opts = u.extend(!0, s.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })),
                      u.extend(s, { type: p, src: h, origSrc: s.src, contentSource: d, contentType: "image" === p ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video" }))
                    : h && (s.type = s.opts.defaultType);
        });
        var s = {
            youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 },
            vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 },
            load: function (t) {
                var e,
                    i = this;
                this[t].loaded
                    ? setTimeout(function () {
                          i.done(t);
                      })
                    : this[t].loading ||
                      ((this[t].loading = !0),
                      ((e = document.createElement("script")).type = "text/javascript"),
                      (e.src = this[t].src),
                      "youtube" === t
                          ? (window.onYouTubeIframeAPIReady = function () {
                                (i[t].loaded = !0), i.done(t);
                            })
                          : (e.onload = function () {
                                (i[t].loaded = !0), i.done(t);
                            }),
                      document.body.appendChild(e));
            },
            done: function (t) {
                var e, i;
                "youtube" === t && delete window.onYouTubeIframeAPIReady,
                    (e = u.fancybox.getInstance()) &&
                        ((i = e.current.$content.find("iframe")),
                        "youtube" === t && void 0 !== YT && YT
                            ? new YT.Player(i.attr("id"), {
                                  events: {
                                      onStateChange: function (t) {
                                          0 == t.data && e.next();
                                      },
                                  },
                              })
                            : "vimeo" === t &&
                              void 0 !== Vimeo &&
                              Vimeo &&
                              new Vimeo.Player(i).on("ended", function () {
                                  e.next();
                              }));
            },
        };
        u(document).on({
            "afterShow.fb": function (t, e, i) {
                1 < e.group.length && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && s.load(i.contentSource);
            },
        });
    })(jQuery),
    (function (m, l, g) {
        "use strict";
        function d(t) {
            var e = [];
            for (var i in (t = (t = t.originalEvent || t || m.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]))
                t[i].pageX ? e.push({ x: t[i].pageX, y: t[i].pageY }) : t[i].clientX && e.push({ x: t[i].clientX, y: t[i].clientY });
            return e;
        }
        function v(t, e, i) {
            return e && t ? ("x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))) : 0;
        }
        function c(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || g.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++) if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
            return !1;
        }
        function h(t) {
            for (
                var e, i, o, s, n, r = !1;
                (e = t.get(0)),
                    void 0,
                    (i = m.getComputedStyle(e)["overflow-y"]),
                    (o = m.getComputedStyle(e)["overflow-x"]),
                    (s = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight),
                    (n = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth),
                    !(r = s || n) && (t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body");

            );
            return r;
        }
        function i(t) {
            var e = this;
            (e.instance = t), (e.$bg = t.$refs.bg), (e.$stage = t.$refs.stage), (e.$container = t.$refs.container), e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", g.proxy(e, "ontouchstart"));
        }
        var y =
                m.requestAnimationFrame ||
                m.webkitRequestAnimationFrame ||
                m.mozRequestAnimationFrame ||
                m.oRequestAnimationFrame ||
                function (t) {
                    return m.setTimeout(t, 1e3 / 60);
                },
            b =
                m.cancelAnimationFrame ||
                m.webkitCancelAnimationFrame ||
                m.mozCancelAnimationFrame ||
                m.oCancelAnimationFrame ||
                function (t) {
                    m.clearTimeout(t);
                };
        (i.prototype.destroy = function () {
            var t = this;
            t.$container.off(".fb.touch"), g(l).off(".fb.touch"), t.requestId && (b(t.requestId), (t.requestId = null)), t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
        }),
            (i.prototype.ontouchstart = function (t) {
                var e = this,
                    i = g(t.target),
                    o = e.instance,
                    s = o.current,
                    n = s.$slide,
                    r = s.$content,
                    a = "touchstart" == t.type;
                if (
                    (a && e.$container.off("mousedown.fb.touch"),
                    (!t.originalEvent || 2 != t.originalEvent.button) && n.length && i.length && !c(i) && !c(i.parent()) && (i.is("img") || !(t.originalEvent.clientX > i[0].clientWidth + i.offset().left)))
                ) {
                    if (!s || o.isAnimating || s.$slide.hasClass("fancybox-animated")) return t.stopPropagation(), void t.preventDefault();
                    (e.realPoints = e.startPoints = d(t)),
                        e.startPoints.length &&
                            (s.touch && t.stopPropagation(),
                            (e.startEvent = t),
                            (e.canTap = !0),
                            (e.$target = i),
                            (e.$content = r),
                            (e.opts = s.opts.touch),
                            (e.isPanning = !1),
                            (e.isSwiping = !1),
                            (e.isZooming = !1),
                            (e.isScrolling = !1),
                            (e.canPan = o.canPan()),
                            (e.startTime = new Date().getTime()),
                            (e.distanceX = e.distanceY = e.distance = 0),
                            (e.canvasWidth = Math.round(n[0].clientWidth)),
                            (e.canvasHeight = Math.round(n[0].clientHeight)),
                            (e.contentLastPos = null),
                            (e.contentStartPos = g.fancybox.getTranslate(e.$content) || { top: 0, left: 0 }),
                            (e.sliderStartPos = g.fancybox.getTranslate(n)),
                            (e.stagePos = g.fancybox.getTranslate(o.$refs.stage)),
                            (e.sliderStartPos.top -= e.stagePos.top),
                            (e.sliderStartPos.left -= e.stagePos.left),
                            (e.contentStartPos.top -= e.stagePos.top),
                            (e.contentStartPos.left -= e.stagePos.left),
                            g(l)
                                .off(".fb.touch")
                                .on(a ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", g.proxy(e, "ontouchend"))
                                .on(a ? "touchmove.fb.touch" : "mousemove.fb.touch", g.proxy(e, "ontouchmove")),
                            g.fancybox.isMobile && l.addEventListener("scroll", e.onscroll, !0),
                            (((e.opts || e.canPan) && (i.is(e.$stage) || e.$stage.find(i).length)) || (i.is(".fancybox-image") && t.preventDefault(), g.fancybox.isMobile && i.parents(".fancybox-caption").length)) &&
                                ((e.isScrollable = h(i) || h(i.parent())),
                                (g.fancybox.isMobile && e.isScrollable) || t.preventDefault(),
                                (1 !== e.startPoints.length && !s.hasError) || (e.canPan ? (g.fancybox.stop(e.$content), (e.isPanning = !0)) : (e.isSwiping = !0), e.$container.addClass("fancybox-is-grabbing")),
                                2 === e.startPoints.length &&
                                    "image" === s.type &&
                                    (s.isLoaded || s.$ghost) &&
                                    ((e.canTap = !1),
                                    (e.isSwiping = !1),
                                    (e.isPanning = !1),
                                    (e.isZooming = !0),
                                    g.fancybox.stop(e.$content),
                                    (e.centerPointStartX = 0.5 * (e.startPoints[0].x + e.startPoints[1].x) - g(m).scrollLeft()),
                                    (e.centerPointStartY = 0.5 * (e.startPoints[0].y + e.startPoints[1].y) - g(m).scrollTop()),
                                    (e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width),
                                    (e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height),
                                    (e.startDistanceBetweenFingers = v(e.startPoints[0], e.startPoints[1])))));
                }
            }),
            (i.prototype.onscroll = function (t) {
                (this.isScrolling = !0), l.removeEventListener("scroll", this.onscroll, !0);
            }),
            (i.prototype.ontouchmove = function (t) {
                var e = this;
                void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons
                    ? e.isScrolling
                        ? (e.canTap = !1)
                        : ((e.newPoints = d(t)),
                          (e.opts || e.canPan) &&
                              e.newPoints.length &&
                              e.newPoints.length &&
                              ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
                              (e.distanceX = v(e.newPoints[0], e.startPoints[0], "x")),
                              (e.distanceY = v(e.newPoints[0], e.startPoints[0], "y")),
                              (e.distance = v(e.newPoints[0], e.startPoints[0])),
                              0 < e.distance && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom())))
                    : e.ontouchend(t);
            }),
            (i.prototype.onSwipe = function (t) {
                var e,
                    s = this,
                    n = s.instance,
                    i = s.isSwiping,
                    o = s.sliderStartPos.left || 0;
                if (!0 !== i)
                    "x" == i &&
                        (0 < s.distanceX && (s.instance.group.length < 2 || (0 === s.instance.current.index && !s.instance.current.opts.loop))
                            ? (o += Math.pow(s.distanceX, 0.8))
                            : s.distanceX < 0 && (s.instance.group.length < 2 || (s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop))
                            ? (o -= Math.pow(-s.distanceX, 0.8))
                            : (o += s.distanceX)),
                        (s.sliderLastPos = { top: "x" == i ? 0 : s.sliderStartPos.top + s.distanceY, left: o }),
                        s.requestId && (b(s.requestId), (s.requestId = null)),
                        (s.requestId = y(function () {
                            s.sliderLastPos &&
                                (g.each(s.instance.slides, function (t, e) {
                                    var i = e.pos - s.instance.currPos;
                                    g.fancybox.setTranslate(e.$slide, { top: s.sliderLastPos.top, left: s.sliderLastPos.left + i * s.canvasWidth + i * e.opts.gutter });
                                }),
                                s.$container.addClass("fancybox-is-sliding"));
                        }));
                else if (10 < Math.abs(s.distance)) {
                    if (
                        ((s.canTap = !1),
                        n.group.length < 2 && s.opts.vertical
                            ? (s.isSwiping = "y")
                            : n.isDragging || !1 === s.opts.vertical || ("auto" === s.opts.vertical && 800 < g(m).width())
                            ? (s.isSwiping = "x")
                            : ((e = Math.abs((180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI)), (s.isSwiping = 45 < e && e < 135 ? "y" : "x")),
                        "y" === s.isSwiping && g.fancybox.isMobile && s.isScrollable)
                    )
                        return void (s.isScrolling = !0);
                    (n.isDragging = s.isSwiping),
                        (s.startPoints = s.newPoints),
                        g.each(n.slides, function (t, e) {
                            var i, o;
                            g.fancybox.stop(e.$slide),
                                (i = g.fancybox.getTranslate(e.$slide)),
                                (o = g.fancybox.getTranslate(n.$refs.stage)),
                                e.$slide
                                    .css({ transform: "", opacity: "", "transition-duration": "" })
                                    .removeClass("fancybox-animated")
                                    .removeClass(function (t, e) {
                                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                    }),
                                e.pos === n.current.pos && ((s.sliderStartPos.top = i.top - o.top), (s.sliderStartPos.left = i.left - o.left)),
                                g.fancybox.setTranslate(e.$slide, { top: i.top - o.top, left: i.left - o.left });
                        }),
                        n.SlideShow && n.SlideShow.isActive && n.SlideShow.stop();
                }
            }),
            (i.prototype.onPan = function () {
                var t = this;
                v(t.newPoints[0], t.realPoints[0]) < (g.fancybox.isMobile ? 10 : 5)
                    ? (t.startPoints = t.newPoints)
                    : ((t.canTap = !1),
                      (t.contentLastPos = t.limitMovement()),
                      t.requestId && b(t.requestId),
                      (t.requestId = y(function () {
                          g.fancybox.setTranslate(t.$content, t.contentLastPos);
                      })));
            }),
            (i.prototype.limitMovement = function () {
                var t,
                    e,
                    i,
                    o,
                    s,
                    n,
                    r = this,
                    a = r.canvasWidth,
                    l = r.canvasHeight,
                    c = r.distanceX,
                    d = r.distanceY,
                    h = r.contentStartPos,
                    p = h.left,
                    u = h.top,
                    f = h.width,
                    m = h.height;
                return (
                    (s = a < f ? p + c : p),
                    (n = u + d),
                    (t = Math.max(0, 0.5 * a - 0.5 * f)),
                    (e = Math.max(0, 0.5 * l - 0.5 * m)),
                    (i = Math.min(a - f, 0.5 * a - 0.5 * f)),
                    (o = Math.min(l - m, 0.5 * l - 0.5 * m)),
                    0 < c && t < s && (s = t - 1 + Math.pow(-t + p + c, 0.8) || 0),
                    c < 0 && s < i && (s = i + 1 - Math.pow(i - p - c, 0.8) || 0),
                    0 < d && e < n && (n = e - 1 + Math.pow(-e + u + d, 0.8) || 0),
                    d < 0 && n < o && (n = o + 1 - Math.pow(o - u - d, 0.8) || 0),
                    { top: n, left: s }
                );
            }),
            (i.prototype.limitPosition = function (t, e, i, o) {
                var s = this.canvasWidth,
                    n = this.canvasHeight;
                return (t = s < i ? ((t = 0 < t ? 0 : t) < s - i ? s - i : t) : Math.max(0, s / 2 - i / 2)), { top: (e = n < o ? ((e = 0 < e ? 0 : e) < n - o ? n - o : e) : Math.max(0, n / 2 - o / 2)), left: t };
            }),
            (i.prototype.onZoom = function () {
                var t = this,
                    e = t.contentStartPos,
                    i = e.width,
                    o = e.height,
                    s = e.left,
                    n = e.top,
                    r = v(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
                    a = Math.floor(i * r),
                    l = Math.floor(o * r),
                    c = (i - a) * t.percentageOfImageAtPinchPointX,
                    d = (o - l) * t.percentageOfImageAtPinchPointY,
                    h = (t.newPoints[0].x + t.newPoints[1].x) / 2 - g(m).scrollLeft(),
                    p = (t.newPoints[0].y + t.newPoints[1].y) / 2 - g(m).scrollTop(),
                    u = h - t.centerPointStartX,
                    f = { top: n + (d + (p - t.centerPointStartY)), left: s + (c + u), scaleX: r, scaleY: r };
                (t.canTap = !1),
                    (t.newWidth = a),
                    (t.newHeight = l),
                    (t.contentLastPos = f),
                    t.requestId && b(t.requestId),
                    (t.requestId = y(function () {
                        g.fancybox.setTranslate(t.$content, t.contentLastPos);
                    }));
            }),
            (i.prototype.ontouchend = function (t) {
                var e = this,
                    i = e.isSwiping,
                    o = e.isPanning,
                    s = e.isZooming,
                    n = e.isScrolling;
                if (
                    ((e.endPoints = d(t)),
                    (e.dMs = Math.max(new Date().getTime() - e.startTime, 1)),
                    e.$container.removeClass("fancybox-is-grabbing"),
                    g(l).off(".fb.touch"),
                    l.removeEventListener("scroll", e.onscroll, !0),
                    e.requestId && (b(e.requestId), (e.requestId = null)),
                    (e.isSwiping = !1),
                    (e.isPanning = !1),
                    (e.isZooming = !1),
                    (e.isScrolling = !1),
                    (e.instance.isDragging = !1),
                    e.canTap)
                )
                    return e.onTap(t);
                (e.speed = 100), (e.velocityX = (e.distanceX / e.dMs) * 0.5), (e.velocityY = (e.distanceY / e.dMs) * 0.5), o ? e.endPanning() : s ? e.endZooming() : e.endSwiping(i, n);
            }),
            (i.prototype.endSwiping = function (t, e) {
                var i = this,
                    o = !1,
                    s = i.instance.group.length,
                    n = Math.abs(i.distanceX),
                    r = "x" == t && 1 < s && ((130 < i.dMs && 10 < n) || 50 < n);
                (i.sliderLastPos = null),
                    "y" == t && !e && 50 < Math.abs(i.distanceY)
                        ? (g.fancybox.animate(i.instance.current.$slide, { top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY, opacity: 0 }, 200), (o = i.instance.close(!0, 250)))
                        : r && 0 < i.distanceX
                        ? (o = i.instance.previous(300))
                        : r && i.distanceX < 0 && (o = i.instance.next(300)),
                    !1 !== o || ("x" != t && "y" != t) || i.instance.centerSlide(200),
                    i.$container.removeClass("fancybox-is-sliding");
            }),
            (i.prototype.endPanning = function () {
                var t,
                    e,
                    i,
                    o = this;
                o.contentLastPos &&
                    ((e = !1 === o.opts.momentum || 350 < o.dMs ? ((t = o.contentLastPos.left), o.contentLastPos.top) : ((t = o.contentLastPos.left + 500 * o.velocityX), o.contentLastPos.top + 500 * o.velocityY)),
                    ((i = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width),
                    (i.height = o.contentStartPos.height),
                    g.fancybox.animate(o.$content, i, 366));
            }),
            (i.prototype.endZooming = function () {
                var t,
                    e,
                    i,
                    o,
                    s = this,
                    n = s.instance.current,
                    r = s.newWidth,
                    a = s.newHeight;
                s.contentLastPos &&
                    ((t = s.contentLastPos.left),
                    (o = { top: (e = s.contentLastPos.top), left: t, width: r, height: a, scaleX: 1, scaleY: 1 }),
                    g.fancybox.setTranslate(s.$content, o),
                    r < s.canvasWidth && a < s.canvasHeight
                        ? s.instance.scaleToFit(150)
                        : r > n.width || a > n.height
                        ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150)
                        : ((i = s.limitPosition(t, e, r, a)), g.fancybox.animate(s.$content, i, 150)));
            }),
            (i.prototype.onTap = function (i) {
                function t(t) {
                    var e = r.opts[t];
                    if ((g.isFunction(e) && (e = e.apply(n, [r, i])), e))
                        switch (e) {
                            case "close":
                                n.close(o.startEvent);
                                break;
                            case "toggleControls":
                                n.toggleControls();
                                break;
                            case "next":
                                n.next();
                                break;
                            case "nextOrClose":
                                1 < n.group.length ? n.next() : n.close(o.startEvent);
                                break;
                            case "zoom":
                                "image" == r.type && (r.isLoaded || r.$ghost) && (n.canPan() ? n.scaleToFit() : n.isScaledDown() ? n.scaleToActual(l, c) : n.group.length < 2 && n.close(o.startEvent));
                        }
                }
                var e,
                    o = this,
                    s = g(i.target),
                    n = o.instance,
                    r = n.current,
                    a = (i && d(i)) || o.startPoints,
                    l = a[0] ? a[0].x - g(m).scrollLeft() - o.stagePos.left : 0,
                    c = a[0] ? a[0].y - g(m).scrollTop() - o.stagePos.top : 0;
                if ((!i.originalEvent || 2 != i.originalEvent.button) && (s.is("img") || !(l > s[0].clientWidth + s.offset().left))) {
                    if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
                    else if (s.is(".fancybox-slide")) e = "Slide";
                    else {
                        if (!n.current.$content || !n.current.$content.find(s).addBack().filter(s).length) return;
                        e = "Content";
                    }
                    if (o.tapped) {
                        if ((clearTimeout(o.tapped), (o.tapped = null), 50 < Math.abs(l - o.tapX) || 50 < Math.abs(c - o.tapY))) return this;
                        t("dblclick" + e);
                    } else
                        (o.tapX = l),
                            (o.tapY = c),
                            r.opts["dblclick" + e] && r.opts["dblclick" + e] !== r.opts["click" + e]
                                ? (o.tapped = setTimeout(function () {
                                      (o.tapped = null), n.isAnimating || t("click" + e);
                                  }, 500))
                                : t("click" + e);
                    return this;
                }
            }),
            g(l)
                .on("onActivate.fb", function (t, e) {
                    e && !e.Guestures && (e.Guestures = new i(e));
                })
                .on("beforeClose.fb", function (t, e) {
                    e && e.Guestures && e.Guestures.destroy();
                });
    })(window, document, jQuery),
    (function (r, a) {
        "use strict";
        a.extend(!0, a.fancybox.defaults, {
            btnTpl: {
                slideShow:
                    '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
        });
        function i(t) {
            (this.instance = t), this.init();
        }
        a.extend(i.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var t = this,
                    e = t.instance,
                    i = e.group[e.currIndex].opts.slideShow;
                (t.$button = e.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    t.toggle();
                })),
                    e.group.length < 2 || !i ? t.$button.hide() : i.progress && (t.$progress = a('<div class="fancybox-progress"></div>').appendTo(e.$refs.inner));
            },
            set: function (t) {
                var e = this,
                    i = e.instance,
                    o = i.current;
                o && (!0 === t || o.opts.loop || i.currIndex < i.group.length - 1)
                    ? e.isActive &&
                      "video" !== o.contentType &&
                      (e.$progress && a.fancybox.animate(e.$progress.show(), { scaleX: 1 }, o.opts.slideShow.speed),
                      (e.timer = setTimeout(function () {
                          i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0);
                      }, o.opts.slideShow.speed)))
                    : (e.stop(), (i.idleSecondsCounter = 0), i.showControls());
            },
            clear: function () {
                clearTimeout(this.timer), (this.timer = null), this.$progress && this.$progress.removeAttr("style").hide();
            },
            start: function () {
                var t = this,
                    e = t.instance.current;
                e &&
                    (t.$button
                        .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP)
                        .removeClass("fancybox-button--play")
                        .addClass("fancybox-button--pause"),
                    (t.isActive = !0),
                    e.isComplete && t.set(!0),
                    t.instance.trigger("onSlideShowChange", !0));
            },
            stop: function () {
                var t = this,
                    e = t.instance.current;
                t.clear(),
                    t.$button
                        .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START)
                        .removeClass("fancybox-button--pause")
                        .addClass("fancybox-button--play"),
                    (t.isActive = !1),
                    t.instance.trigger("onSlideShowChange", !1),
                    t.$progress && t.$progress.removeAttr("style").hide();
            },
            toggle: function () {
                this.isActive ? this.stop() : this.start();
            },
        }),
            a(r).on({
                "onInit.fb": function (t, e) {
                    e && !e.SlideShow && (e.SlideShow = new i(e));
                },
                "beforeShow.fb": function (t, e, i, o) {
                    var s = e && e.SlideShow;
                    o ? s && i.opts.slideShow.autoStart && s.start() : s && s.isActive && s.clear();
                },
                "afterShow.fb": function (t, e, i) {
                    var o = e && e.SlideShow;
                    o && o.isActive && o.set();
                },
                "afterKeydown.fb": function (t, e, i, o, s) {
                    var n = e && e.SlideShow;
                    !n || !i.opts.slideShow || (80 !== s && 32 !== s) || a(r.activeElement).is("button,a,input") || (o.preventDefault(), n.toggle());
                },
                "beforeClose.fb onDeactivate.fb": function (t, e) {
                    var i = e && e.SlideShow;
                    i && i.stop();
                },
            }),
            a(r).on("visibilitychange", function () {
                var t = a.fancybox.getInstance(),
                    e = t && t.SlideShow;
                e && e.isActive && (r.hidden ? e.clear() : e.set());
            });
    })(document, jQuery),
    (function (n, i) {
        "use strict";
        var o = (function () {
            for (
                var t = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                    ],
                    e = {},
                    i = 0;
                i < t.length;
                i++
            ) {
                var o = t[i];
                if (o && o[1] in n) {
                    for (var s = 0; s < o.length; s++) e[t[0][s]] = o[s];
                    return e;
                }
            }
            return !1;
        })();
        if (o) {
            var s = {
                request: function (t) {
                    (t = t || n.documentElement)[o.requestFullscreen](t.ALLOW_KEYBOARD_INPUT);
                },
                exit: function () {
                    n[o.exitFullscreen]();
                },
                toggle: function (t) {
                    (t = t || n.documentElement), this.isFullscreen() ? this.exit() : this.request(t);
                },
                isFullscreen: function () {
                    return Boolean(n[o.fullscreenElement]);
                },
                enabled: function () {
                    return Boolean(n[o.fullscreenEnabled]);
                },
            };
            i.extend(!0, i.fancybox.defaults, {
                btnTpl: {
                    fullScreen:
                        '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
                },
                fullScreen: { autoStart: !1 },
            }),
                i(n).on(o.fullscreenchange, function () {
                    var t = s.isFullscreen(),
                        e = i.fancybox.getInstance();
                    e &&
                        (e.current && "image" === e.current.type && e.isAnimating && ((e.isAnimating = !1), e.update(!0, !0, 0), e.isComplete || e.complete()),
                        e.trigger("onFullscreenChange", t),
                        e.$refs.container.toggleClass("fancybox-is-fullscreen", t),
                        e.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
                });
        }
        i(n).on({
            "onInit.fb": function (t, e) {
                o
                    ? e && e.group[e.currIndex].opts.fullScreen
                        ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                              t.stopPropagation(), t.preventDefault(), s.toggle();
                          }),
                          e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && s.request(),
                          (e.FullScreen = s))
                        : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
                    : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
            },
            "afterKeydown.fb": function (t, e, i, o, s) {
                e && e.FullScreen && 70 === s && (o.preventDefault(), e.FullScreen.toggle());
            },
            "beforeClose.fb": function (t, e) {
                e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && s.exit();
            },
        });
    })(document, jQuery),
    (function (t, n) {
        "use strict";
        var r = "fancybox-thumbs",
            a = r + "-active";
        n.fancybox.defaults = n.extend(
            !0,
            {
                btnTpl: {
                    thumbs:
                        '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
                },
                thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
            },
            n.fancybox.defaults
        );
        function o(t) {
            this.init(t);
        }
        n.extend(o.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (t) {
                var e = this,
                    i = t.group,
                    o = 0;
                (e.instance = t), (e.opts = i[t.currIndex].opts.thumbs), ((t.Thumbs = e).$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
                for (var s = 0, n = i.length; s < n && (i[s].thumb && o++, !(1 < o)); s++);
                1 < o && e.opts
                    ? (e.$button.removeAttr("style").on("click", function () {
                          e.toggle();
                      }),
                      (e.isActive = !0))
                    : e.$button.hide();
            },
            create: function () {
                var i,
                    t = this,
                    e = t.instance,
                    o = t.opts.parentEl,
                    s = [];
                t.$grid ||
                    ((t.$grid = n('<div class="' + r + " " + r + "-" + t.opts.axis + '"></div>').appendTo(e.$refs.container.find(o).addBack().filter(o))),
                    t.$grid.on("click", "a", function () {
                        e.jumpTo(n(this).attr("data-index"));
                    })),
                    t.$list || (t.$list = n('<div class="' + r + '__list">').appendTo(t.$grid)),
                    n.each(e.group, function (t, e) {
                        (i = e.thumb) || "image" !== e.type || (i = e.src),
                            s.push('<a href="javascript:;" tabindex="0" data-index="' + t + '"' + (i && i.length ? ' style="background-image:url(' + i + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
                    }),
                    (t.$list[0].innerHTML = s.join("")),
                    "x" === t.opts.axis && t.$list.width(parseInt(t.$grid.css("padding-right"), 10) + e.group.length * t.$list.children().eq(0).outerWidth(!0));
            },
            focus: function (t) {
                var e,
                    i,
                    o = this,
                    s = o.$list,
                    n = o.$grid;
                o.instance.current &&
                    ((i = (e = s
                        .children()
                        .removeClass(a)
                        .filter('[data-index="' + o.instance.current.index + '"]')
                        .addClass(a)).position()),
                    "y" === o.opts.axis && (i.top < 0 || i.top > s.height() - e.outerHeight())
                        ? s.stop().animate({ scrollTop: s.scrollTop() + i.top }, t)
                        : "x" === o.opts.axis && (i.left < n.scrollLeft() || i.left > n.scrollLeft() + (n.width() - e.outerWidth())) && s.parent().stop().animate({ scrollLeft: i.left }, t));
            },
            update: function () {
                var t = this;
                t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
                    t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
                    t.instance.update();
            },
            hide: function () {
                (this.isVisible = !1), this.update();
            },
            show: function () {
                (this.isVisible = !0), this.update();
            },
            toggle: function () {
                (this.isVisible = !this.isVisible), this.update();
            },
        }),
            n(t).on({
                "onInit.fb": function (t, e) {
                    var i;
                    e && !e.Thumbs && (i = new o(e)).isActive && !0 === i.opts.autoStart && i.show();
                },
                "beforeShow.fb": function (t, e, i, o) {
                    var s = e && e.Thumbs;
                    s && s.isVisible && s.focus(o ? 0 : 250);
                },
                "afterKeydown.fb": function (t, e, i, o, s) {
                    var n = e && e.Thumbs;
                    n && n.isActive && 71 === s && (o.preventDefault(), n.toggle());
                },
                "beforeClose.fb": function (t, e) {
                    var i = e && e.Thumbs;
                    i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide();
                },
            });
    })(document, jQuery),
    (function (t, s) {
        "use strict";
        s.extend(!0, s.fancybox.defaults, {
            btnTpl: {
                share:
                    '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
            },
            share: {
                url: function (t, e) {
                    return (!t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src)) || window.location;
                },
                tpl:
                    '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
            },
        }),
            s(t).on("click", "[data-fancybox-share]", function () {
                var t,
                    e,
                    i = s.fancybox.getInstance(),
                    o = i.current || null;
                o &&
                    ("function" === s.type(o.opts.share.url) && (t = o.opts.share.url.apply(o, [i, o])),
                    (e = o.opts.share.tpl
                        .replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "")
                        .replace(/\{\{url\}\}/g, encodeURIComponent(t))
                        .replace(
                            /\{\{url_raw\}\}/g,
                            (function (t) {
                                var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };
                                return String(t).replace(/[&<>"'`=\/]/g, function (t) {
                                    return e[t];
                                });
                            })(t)
                        )
                        .replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : "")),
                    s.fancybox.open({
                        src: i.translate(i, e),
                        type: "html",
                        opts: {
                            touch: !1,
                            animationEffect: !1,
                            afterLoad: function (t, e) {
                                i.$refs.container.one("beforeClose.fb", function () {
                                    t.close(null, 0);
                                }),
                                    e.$content.find(".fancybox-share__button").click(function () {
                                        return window.open(this.href, "Share", "width=550, height=450"), !1;
                                    });
                            },
                            mobile: { autoFocus: !1 },
                        },
                    }));
            });
    })(document, jQuery),
    (function (n, r, s) {
        "use strict";
        function a() {
            var t = n.location.hash.substr(1),
                e = t.split("-"),
                i = (1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10)) || 1;
            return { hash: t, index: i < 1 ? 1 : i, gallery: e.join("-") };
        }
        function e(t) {
            "" !== t.gallery &&
                s("[data-fancybox='" + s.escapeSelector(t.gallery) + "']")
                    .eq(t.index - 1)
                    .focus()
                    .trigger("click.fb-start");
        }
        function l(t) {
            var e, i;
            return !!t && "" !== (i = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && i;
        }
        s.escapeSelector ||
            (s.escapeSelector = function (t) {
                return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
                    return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                });
            }),
            s(function () {
                !1 !== s.fancybox.defaults.hash &&
                    (s(r).on({
                        "onInit.fb": function (t, e) {
                            var i, o;
                            !1 !== e.group[e.currIndex].opts.hash && ((i = a()), (o = l(e)) && i.gallery && o == i.gallery && (e.currIndex = i.index - 1));
                        },
                        "beforeShow.fb": function (t, e, i, o) {
                            var s;
                            i &&
                                !1 !== i.opts.hash &&
                                (s = l(e)) &&
                                ((e.currentHash = s + (1 < e.group.length ? "-" + (i.index + 1) : "")),
                                n.location.hash !== "#" + e.currentHash &&
                                    (o && !e.origHash && (e.origHash = n.location.hash),
                                    e.hashTimer && clearTimeout(e.hashTimer),
                                    (e.hashTimer = setTimeout(function () {
                                        "replaceState" in n.history
                                            ? (n.history[o ? "pushState" : "replaceState"]({}, r.title, n.location.pathname + n.location.search + "#" + e.currentHash), o && (e.hasCreatedHistory = !0))
                                            : (n.location.hash = e.currentHash),
                                            (e.hashTimer = null);
                                    }, 300))));
                        },
                        "beforeClose.fb": function (t, e, i) {
                            i &&
                                !1 !== i.opts.hash &&
                                (clearTimeout(e.hashTimer),
                                e.currentHash && e.hasCreatedHistory
                                    ? n.history.back()
                                    : e.currentHash && ("replaceState" in n.history ? n.history.replaceState({}, r.title, n.location.pathname + n.location.search + (e.origHash || "")) : (n.location.hash = e.origHash)),
                                (e.currentHash = null));
                        },
                    }),
                    s(n).on("hashchange.fb", function () {
                        var t = a(),
                            o = null;
                        s.each(s(".fancybox-container").get().reverse(), function (t, e) {
                            var i = s(e).data("FancyBox");
                            if (i && i.currentHash) return (o = i), !1;
                        }),
                            o ? o.currentHash === t.gallery + "-" + t.index || (1 === t.index && o.currentHash == t.gallery) || ((o.currentHash = null), o.close()) : "" !== t.gallery && e(t);
                    }),
                    setTimeout(function () {
                        s.fancybox.getInstance() || e(a());
                    }, 50));
            });
    })(window, document, jQuery),
    (function (t, e) {
        "use strict";
        var s = new Date().getTime();
        e(t).on({
            "onInit.fb": function (t, o, e) {
                o.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                    var e = o.current,
                        i = new Date().getTime();
                    o.group.length < 2 ||
                        !1 === e.opts.wheel ||
                        ("auto" === e.opts.wheel && "image" !== e.type) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        e.$slide.hasClass("fancybox-animated") || ((t = t.originalEvent || t), i - s < 250 || ((s = i), o[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
                });
            },
        });
    })(document, jQuery),
    (function (e) {
        !jQuery && "function" == typeof define && define.amd
            ? define(["jquery"], function (t) {
                  return e(t, document, window, navigator);
              })
            : jQuery || "object" != typeof exports
            ? e(jQuery, document, window, navigator)
            : e(require("jquery"), document, window, navigator);
    })(function (l, c, d, t, h) {
        "use strict";
        var e,
            i,
            o = 0,
            s = ((e = t.userAgent), (i = /msie\s\d+/i), 0 < e.search(i) && i.exec(e).toString().split(" ")[1] < 9 && (l("html").addClass("lt-ie9"), !0));
        Function.prototype.bind ||
            (Function.prototype.bind = function (o) {
                var s = this,
                    n = [].slice;
                if ("function" != typeof s) throw new TypeError();
                var r = n.call(arguments, 1),
                    a = function () {
                        if (this instanceof a) {
                            var t = function () {};
                            t.prototype = s.prototype;
                            var e = new t(),
                                i = s.apply(e, r.concat(n.call(arguments)));
                            return Object(i) === i ? i : e;
                        }
                        return s.apply(o, r.concat(n.call(arguments)));
                    };
                return a;
            }),
            Array.prototype.indexOf ||
                (Array.prototype.indexOf = function (t, e) {
                    var i;
                    if (null == this) throw new TypeError('"this" is null or not defined');
                    var o = Object(this),
                        s = o.length >>> 0;
                    if (0 == s) return -1;
                    var n = +e || 0;
                    if ((Math.abs(n) === 1 / 0 && (n = 0), s <= n)) return -1;
                    for (i = Math.max(0 <= n ? n : s - Math.abs(n), 0); i < s; ) {
                        if (i in o && o[i] === t) return i;
                        i++;
                    }
                    return -1;
                });
        function n(t, e, i) {
            (this.VERSION = "2.3.0"),
                (this.input = t),
                (this.plugin_count = i),
                (this.current_plugin = 0),
                (this.calc_count = 0),
                (this.update_tm = 0),
                (this.old_from = 0),
                (this.old_to = 0),
                (this.old_min_interval = null),
                (this.raf_id = null),
                (this.dragging = !1),
                (this.force_redraw = !1),
                (this.no_diapason = !1),
                (this.has_tab_index = !0),
                (this.is_key = !1),
                (this.is_update = !1),
                (this.is_start = !0),
                (this.is_finish = !1),
                (this.is_active = !1),
                (this.is_resize = !1),
                (this.is_click = !1),
                (e = e || {}),
                (this.$cache = {
                    win: l(d),
                    body: l(c.body),
                    input: l(t),
                    cont: null,
                    rs: null,
                    min: null,
                    max: null,
                    from: null,
                    to: null,
                    single: null,
                    bar: null,
                    line: null,
                    s_single: null,
                    s_from: null,
                    s_to: null,
                    shad_single: null,
                    shad_from: null,
                    shad_to: null,
                    edge: null,
                    grid: null,
                    grid_labels: [],
                }),
                (this.coords = {
                    x_gap: 0,
                    x_pointer: 0,
                    w_rs: 0,
                    w_rs_old: 0,
                    w_handle: 0,
                    p_gap: 0,
                    p_gap_left: 0,
                    p_gap_right: 0,
                    p_step: 0,
                    p_pointer: 0,
                    p_handle: 0,
                    p_single_fake: 0,
                    p_single_real: 0,
                    p_from_fake: 0,
                    p_from_real: 0,
                    p_to_fake: 0,
                    p_to_real: 0,
                    p_bar_x: 0,
                    p_bar_w: 0,
                    grid_gap: 0,
                    big_num: 0,
                    big: [],
                    big_w: [],
                    big_p: [],
                    big_x: [],
                }),
                (this.labels = { w_min: 0, w_max: 0, w_from: 0, w_to: 0, w_single: 0, p_min: 0, p_max: 0, p_from_fake: 0, p_from_left: 0, p_to_fake: 0, p_to_left: 0, p_single_fake: 0, p_single_left: 0 });
            var o,
                s,
                n,
                r = this.$cache.input,
                a = r.prop("value");
            for (n in ((o = {
                skin: "flat",
                type: "single",
                min: 10,
                max: 100,
                from: null,
                to: null,
                step: 1,
                min_interval: 0,
                max_interval: 0,
                drag_interval: !1,
                values: [],
                p_values: [],
                from_fixed: !1,
                from_min: null,
                from_max: null,
                from_shadow: !1,
                to_fixed: !1,
                to_min: null,
                to_max: null,
                to_shadow: !1,
                prettify_enabled: !0,
                prettify_separator: " ",
                prettify: null,
                force_edges: !1,
                keyboard: !0,
                grid: !1,
                grid_margin: !0,
                grid_num: 4,
                grid_snap: !1,
                hide_min_max: !1,
                hide_from_to: !1,
                prefix: "",
                postfix: "",
                max_postfix: "",
                decorate_both: !0,
                values_separator: " — ",
                input_values_separator: ";",
                disable: !1,
                block: !1,
                extra_classes: "",
                scope: null,
                onStart: null,
                onChange: null,
                onFinish: null,
                onUpdate: null,
            }),
            "INPUT" !== r[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", r[0]),
            ((s = {
                skin: r.data("skin"),
                type: r.data("type"),
                min: r.data("min"),
                max: r.data("max"),
                from: r.data("from"),
                to: r.data("to"),
                step: r.data("step"),
                min_interval: r.data("minInterval"),
                max_interval: r.data("maxInterval"),
                drag_interval: r.data("dragInterval"),
                values: r.data("values"),
                from_fixed: r.data("fromFixed"),
                from_min: r.data("fromMin"),
                from_max: r.data("fromMax"),
                from_shadow: r.data("fromShadow"),
                to_fixed: r.data("toFixed"),
                to_min: r.data("toMin"),
                to_max: r.data("toMax"),
                to_shadow: r.data("toShadow"),
                prettify_enabled: r.data("prettifyEnabled"),
                prettify_separator: r.data("prettifySeparator"),
                force_edges: r.data("forceEdges"),
                keyboard: r.data("keyboard"),
                grid: r.data("grid"),
                grid_margin: r.data("gridMargin"),
                grid_num: r.data("gridNum"),
                grid_snap: r.data("gridSnap"),
                hide_min_max: r.data("hideMinMax"),
                hide_from_to: r.data("hideFromTo"),
                prefix: r.data("prefix"),
                postfix: r.data("postfix"),
                max_postfix: r.data("maxPostfix"),
                decorate_both: r.data("decorateBoth"),
                values_separator: r.data("valuesSeparator"),
                input_values_separator: r.data("inputValuesSeparator"),
                disable: r.data("disable"),
                block: r.data("block"),
                extra_classes: r.data("extraClasses"),
            }).values = s.values && s.values.split(",")),
            s))
                s.hasOwnProperty(n) && ((s[n] !== h && "" !== s[n]) || delete s[n]);
            a !== h &&
                "" !== a &&
                ((a = a.split(s.input_values_separator || e.input_values_separator || ";"))[0] && a[0] == +a[0] && (a[0] = +a[0]),
                a[1] && a[1] == +a[1] && (a[1] = +a[1]),
                e && e.values && e.values.length ? ((o.from = a[0] && e.values.indexOf(a[0])), (o.to = a[1] && e.values.indexOf(a[1]))) : ((o.from = a[0] && +a[0]), (o.to = a[1] && +a[1]))),
                l.extend(o, e),
                l.extend(o, s),
                (this.options = o),
                (this.update_check = {}),
                this.validate(),
                (this.result = { input: this.$cache.input, slider: null, min: this.options.min, max: this.options.max, from: this.options.from, from_percent: 0, from_value: null, to: this.options.to, to_percent: 0, to_value: null }),
                this.init();
        }
        (n.prototype = {
            init: function (t) {
                (this.no_diapason = !1),
                    (this.coords.p_step = this.convertToPercent(this.options.step, !0)),
                    (this.target = "base"),
                    this.toggleInput(),
                    this.append(),
                    this.setMinMax(),
                    t ? ((this.force_redraw = !0), this.calc(!0), this.callOnUpdate()) : ((this.force_redraw = !0), this.calc(!0), this.callOnStart()),
                    this.updateScene();
            },
            append: function () {
                var t = '<span class="irs irs--' + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + '"></span>';
                this.$cache.input.before(t),
                    this.$cache.input.prop("readonly", !0),
                    (this.$cache.cont = this.$cache.input.prev()),
                    (this.result.slider = this.$cache.cont),
                    this.$cache.cont.html(
                        '<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'
                    ),
                    (this.$cache.rs = this.$cache.cont.find(".irs")),
                    (this.$cache.min = this.$cache.cont.find(".irs-min")),
                    (this.$cache.max = this.$cache.cont.find(".irs-max")),
                    (this.$cache.from = this.$cache.cont.find(".irs-from")),
                    (this.$cache.to = this.$cache.cont.find(".irs-to")),
                    (this.$cache.single = this.$cache.cont.find(".irs-single")),
                    (this.$cache.line = this.$cache.cont.find(".irs-line")),
                    (this.$cache.grid = this.$cache.cont.find(".irs-grid")),
                    "single" === this.options.type
                        ? (this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'),
                          (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
                          (this.$cache.edge = this.$cache.cont.find(".irs-bar-edge")),
                          (this.$cache.s_single = this.$cache.cont.find(".single")),
                          (this.$cache.from[0].style.visibility = "hidden"),
                          (this.$cache.to[0].style.visibility = "hidden"),
                          (this.$cache.shad_single = this.$cache.cont.find(".shadow-single")))
                        : (this.$cache.cont.append(
                              '<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'
                          ),
                          (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
                          (this.$cache.s_from = this.$cache.cont.find(".from")),
                          (this.$cache.s_to = this.$cache.cont.find(".to")),
                          (this.$cache.shad_from = this.$cache.cont.find(".shadow-from")),
                          (this.$cache.shad_to = this.$cache.cont.find(".shadow-to")),
                          this.setTopHandler()),
                    this.options.hide_from_to && ((this.$cache.from[0].style.display = "none"), (this.$cache.to[0].style.display = "none"), (this.$cache.single[0].style.display = "none")),
                    this.appendGrid(),
                    this.options.disable ? (this.appendDisableMask(), (this.$cache.input[0].disabled = !0)) : ((this.$cache.input[0].disabled = !1), this.removeDisableMask(), this.bindEvents()),
                    this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()),
                    this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize");
            },
            setTopHandler: function () {
                var t = this.options.min,
                    e = this.options.max,
                    i = this.options.from,
                    o = this.options.to;
                t < i && o === e ? this.$cache.s_from.addClass("type_last") : o < e && this.$cache.s_to.addClass("type_last");
            },
            changeLevel: function (t) {
                switch (t) {
                    case "single":
                        (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake)), this.$cache.s_single.addClass("state_hover");
                        break;
                    case "from":
                        (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake)), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                        break;
                    case "to":
                        (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake)), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                        break;
                    case "both":
                        (this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake)),
                            (this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer)),
                            this.$cache.s_to.removeClass("type_last"),
                            this.$cache.s_from.removeClass("type_last");
                }
            },
            appendDisableMask: function () {
                this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled");
            },
            removeDisableMask: function () {
                this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled");
            },
            remove: function () {
                this.$cache.cont.remove(),
                    (this.$cache.cont = null),
                    this.$cache.line.off("keydown.irs_" + this.plugin_count),
                    this.$cache.body.off("touchmove.irs_" + this.plugin_count),
                    this.$cache.body.off("mousemove.irs_" + this.plugin_count),
                    this.$cache.win.off("touchend.irs_" + this.plugin_count),
                    this.$cache.win.off("mouseup.irs_" + this.plugin_count),
                    s && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)),
                    (this.$cache.grid_labels = []),
                    (this.coords.big = []),
                    (this.coords.big_w = []),
                    (this.coords.big_p = []),
                    (this.coords.big_x = []),
                    cancelAnimationFrame(this.raf_id);
            },
            bindEvents: function () {
                this.no_diapason ||
                    (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
                    this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
                    this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)),
                    this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)),
                    this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                    this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                    this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)),
                    this.options.drag_interval && "double" === this.options.type
                        ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")))
                        : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
                    "single" === this.options.type
                        ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                          this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                          this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                          this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                          this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                          this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                          this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")))
                        : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)),
                          this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)),
                          this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                          this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                          this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                          this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                          this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                          this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                          this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                          this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                          this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                          this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                          this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                          this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
                    this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")),
                    s && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))));
            },
            pointerFocus: function (t) {
                var e, i;
                this.target || ((e = (i = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left), (e += i.width() / 2 - 1), this.pointerClick("single", { preventDefault: function () {}, pageX: e }));
            },
            pointerMove: function (t) {
                if (this.dragging) {
                    var e = t.pageX || (t.originalEvent.touches && t.originalEvent.touches[0].pageX);
                    (this.coords.x_pointer = e - this.coords.x_gap), this.calc();
                }
            },
            pointerUp: function (t) {
                this.current_plugin === this.plugin_count &&
                    this.is_active &&
                    ((this.is_active = !1),
                    this.$cache.cont.find(".state_hover").removeClass("state_hover"),
                    (this.force_redraw = !0),
                    s && l("*").prop("unselectable", !1),
                    this.updateScene(),
                    this.restoreOriginalMinInterval(),
                    (l.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(),
                    (this.dragging = !1));
            },
            pointerDown: function (t, e) {
                e.preventDefault();
                var i = e.pageX || (e.originalEvent.touches && e.originalEvent.touches[0].pageX);
                2 !== e.button &&
                    ("both" === t && this.setTempMinInterval(),
                    (t = t || this.target || "from"),
                    (this.current_plugin = this.plugin_count),
                    (this.target = t),
                    (this.is_active = !0),
                    (this.dragging = !0),
                    (this.coords.x_gap = this.$cache.rs.offset().left),
                    (this.coords.x_pointer = i - this.coords.x_gap),
                    this.calcPointerPercent(),
                    this.changeLevel(t),
                    s && l("*").prop("unselectable", !0),
                    this.$cache.line.trigger("focus"),
                    this.updateScene());
            },
            pointerClick: function (t, e) {
                e.preventDefault();
                var i = e.pageX || (e.originalEvent.touches && e.originalEvent.touches[0].pageX);
                2 !== e.button &&
                    ((this.current_plugin = this.plugin_count),
                    (this.target = t),
                    (this.is_click = !0),
                    (this.coords.x_gap = this.$cache.rs.offset().left),
                    (this.coords.x_pointer = +(i - this.coords.x_gap).toFixed()),
                    (this.force_redraw = !0),
                    this.calc(),
                    this.$cache.line.trigger("focus"));
            },
            key: function (t, e) {
                if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                    switch (e.which) {
                        case 83:
                        case 65:
                        case 40:
                        case 37:
                            e.preventDefault(), this.moveByKey(!1);
                            break;
                        case 87:
                        case 68:
                        case 38:
                        case 39:
                            e.preventDefault(), this.moveByKey(!0);
                    }
                    return !0;
                }
            },
            moveByKey: function (t) {
                var e = this.coords.p_pointer,
                    i = (this.options.max - this.options.min) / 100;
                (i = this.options.step / i), t ? (e += i) : (e -= i), (this.coords.x_pointer = this.toFixed((this.coords.w_rs / 100) * e)), (this.is_key = !0), this.calc();
            },
            setMinMax: function () {
                if (this.options) {
                    if (this.options.hide_min_max) return (this.$cache.min[0].style.display = "none"), void (this.$cache.max[0].style.display = "none");
                    if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
                    else {
                        var t = this._prettify(this.options.min),
                            e = this._prettify(this.options.max);
                        (this.result.min_pretty = t), (this.result.max_pretty = e), this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(e, this.options.max));
                    }
                    (this.labels.w_min = this.$cache.min.outerWidth(!1)), (this.labels.w_max = this.$cache.max.outerWidth(!1));
                }
            },
            setTempMinInterval: function () {
                var t = this.result.to - this.result.from;
                null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), (this.options.min_interval = t);
            },
            restoreOriginalMinInterval: function () {
                null !== this.old_min_interval && ((this.options.min_interval = this.old_min_interval), (this.old_min_interval = null));
            },
            calc: function (t) {
                if (this.options && (this.calc_count++, (10 !== this.calc_count && !t) || ((this.calc_count = 0), (this.coords.w_rs = this.$cache.rs.outerWidth(!1)), this.calcHandlePercent()), this.coords.w_rs)) {
                    this.calcPointerPercent();
                    var e = this.getHandleX();
                    switch (
                        ("both" === this.target && ((this.coords.p_gap = 0), (e = this.getHandleX())),
                        "click" === this.target && ((this.coords.p_gap = this.coords.p_handle / 2), (e = this.getHandleX()), this.options.drag_interval ? (this.target = "both_one") : (this.target = this.chooseHandle(e))),
                        this.target)
                    ) {
                        case "base":
                            var i = (this.options.max - this.options.min) / 100,
                                o = (this.result.from - this.options.min) / i,
                                s = (this.result.to - this.options.min) / i;
                            (this.coords.p_single_real = this.toFixed(o)),
                                (this.coords.p_from_real = this.toFixed(o)),
                                (this.coords.p_to_real = this.toFixed(s)),
                                (this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max)),
                                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                (this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real)),
                                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)),
                                (this.target = null);
                            break;
                        case "single":
                            if (this.options.from_fixed) break;
                            (this.coords.p_single_real = this.convertToRealPercent(e)),
                                (this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real)),
                                (this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max)),
                                (this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real));
                            break;
                        case "from":
                            if (this.options.from_fixed) break;
                            (this.coords.p_from_real = this.convertToRealPercent(e)),
                                (this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real)),
                                this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real),
                                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                (this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                (this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real));
                            break;
                        case "to":
                            if (this.options.to_fixed) break;
                            (this.coords.p_to_real = this.convertToRealPercent(e)),
                                (this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real)),
                                this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real),
                                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                (this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                (this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                            break;
                        case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            (e = this.toFixed(e + 0.001 * this.coords.p_handle)),
                                (this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left),
                                (this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real)),
                                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                (this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                (this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right),
                                (this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real)),
                                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                (this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                            break;
                        case "both_one":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            var n = this.convertToRealPercent(e),
                                r = this.result.from_percent,
                                a = this.result.to_percent - r,
                                l = a / 2,
                                c = n - l,
                                d = n + l;
                            c < 0 && (d = (c = 0) + a),
                                100 < d && (c = (d = 100) - a),
                                (this.coords.p_from_real = this.calcWithStep(c)),
                                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                (this.coords.p_to_real = this.calcWithStep(d)),
                                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                    }
                    "single" === this.options.type
                        ? ((this.coords.p_bar_x = this.coords.p_handle / 2),
                          (this.coords.p_bar_w = this.coords.p_single_fake),
                          (this.result.from_percent = this.coords.p_single_real),
                          (this.result.from = this.convertToValue(this.coords.p_single_real)),
                          (this.result.from_pretty = this._prettify(this.result.from)),
                          this.options.values.length && (this.result.from_value = this.options.values[this.result.from]))
                        : ((this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2)),
                          (this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake)),
                          (this.result.from_percent = this.coords.p_from_real),
                          (this.result.from = this.convertToValue(this.coords.p_from_real)),
                          (this.result.from_pretty = this._prettify(this.result.from)),
                          (this.result.to_percent = this.coords.p_to_real),
                          (this.result.to = this.convertToValue(this.coords.p_to_real)),
                          (this.result.to_pretty = this._prettify(this.result.to)),
                          this.options.values.length && ((this.result.from_value = this.options.values[this.result.from]), (this.result.to_value = this.options.values[this.result.to]))),
                        this.calcMinMax(),
                        this.calcLabels();
                }
            },
            calcPointerPercent: function () {
                this.coords.w_rs
                    ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? (this.coords.x_pointer = 0) : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs),
                      (this.coords.p_pointer = this.toFixed((this.coords.x_pointer / this.coords.w_rs) * 100)))
                    : (this.coords.p_pointer = 0);
            },
            convertToRealPercent: function (t) {
                return (t / (100 - this.coords.p_handle)) * 100;
            },
            convertToFakePercent: function (t) {
                return (t / 100) * (100 - this.coords.p_handle);
            },
            getHandleX: function () {
                var t = 100 - this.coords.p_handle,
                    e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                return e < 0 ? (e = 0) : t < e && (e = t), e;
            },
            calcHandlePercent: function () {
                "single" === this.options.type ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1)) : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
                    (this.coords.p_handle = this.toFixed((this.coords.w_handle / this.coords.w_rs) * 100));
            },
            chooseHandle: function (t) {
                return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? (this.options.to_fixed ? "from" : "to") : this.options.from_fixed ? "to" : "from";
            },
            calcMinMax: function () {
                this.coords.w_rs && ((this.labels.p_min = (this.labels.w_min / this.coords.w_rs) * 100), (this.labels.p_max = (this.labels.w_max / this.coords.w_rs) * 100));
            },
            calcLabels: function () {
                this.coords.w_rs &&
                    !this.options.hide_from_to &&
                    ("single" === this.options.type
                        ? ((this.labels.w_single = this.$cache.single.outerWidth(!1)),
                          (this.labels.p_single_fake = (this.labels.w_single / this.coords.w_rs) * 100),
                          (this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2))
                        : ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
                          (this.labels.p_from_fake = (this.labels.w_from / this.coords.w_rs) * 100),
                          (this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2),
                          (this.labels.p_from_left = this.toFixed(this.labels.p_from_left)),
                          (this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake)),
                          (this.labels.w_to = this.$cache.to.outerWidth(!1)),
                          (this.labels.p_to_fake = (this.labels.w_to / this.coords.w_rs) * 100),
                          (this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2),
                          (this.labels.p_to_left = this.toFixed(this.labels.p_to_left)),
                          (this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake)),
                          (this.labels.w_single = this.$cache.single.outerWidth(!1)),
                          (this.labels.p_single_fake = (this.labels.w_single / this.coords.w_rs) * 100),
                          (this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2),
                          (this.labels.p_single_left = this.toFixed(this.labels.p_single_left))),
                    (this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)));
            },
            updateScene: function () {
                this.raf_id && (cancelAnimationFrame(this.raf_id), (this.raf_id = null)),
                    clearTimeout(this.update_tm),
                    (this.update_tm = null),
                    this.options && (this.drawHandles(), this.is_active ? (this.raf_id = requestAnimationFrame(this.updateScene.bind(this))) : (this.update_tm = setTimeout(this.updateScene.bind(this), 300)));
            },
            drawHandles: function () {
                (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                    this.coords.w_rs &&
                        (this.coords.w_rs !== this.coords.w_rs_old && ((this.target = "base"), (this.is_resize = !0)),
                        (this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw) ||
                            (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), (this.force_redraw = !0), (this.coords.w_rs_old = this.coords.w_rs), this.drawShadow()),
                        this.coords.w_rs &&
                            (this.dragging || this.force_redraw || this.is_key) &&
                            ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) &&
                                (this.drawLabels(),
                                (this.$cache.bar[0].style.left = this.coords.p_bar_x + "%"),
                                (this.$cache.bar[0].style.width = this.coords.p_bar_w + "%"),
                                "single" === this.options.type
                                    ? ((this.$cache.bar[0].style.left = 0), (this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%"), (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%"))
                                    : ((this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%"),
                                      (this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%"),
                                      (this.old_from === this.result.from && !this.force_redraw) || (this.$cache.from[0].style.left = this.labels.p_from_left + "%"),
                                      (this.old_to === this.result.to && !this.force_redraw) || (this.$cache.to[0].style.left = this.labels.p_to_left + "%")),
                                (this.$cache.single[0].style.left = this.labels.p_single_left + "%"),
                                this.writeToInput(),
                                (this.old_from === this.result.from && this.old_to === this.result.to) || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")),
                                (this.old_from = this.result.from),
                                (this.old_to = this.result.to),
                                this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(),
                                (this.is_key || this.is_click) && ((this.is_key = !1), (this.is_click = !1), this.callOnFinish()),
                                (this.is_update = !1),
                                (this.is_resize = !1),
                                (this.is_finish = !1)),
                            (this.is_start = !1),
                            (this.is_key = !1),
                            (this.is_click = !1),
                            (this.force_redraw = !1)));
            },
            drawLabels: function () {
                if (this.options) {
                    var t,
                        e,
                        i,
                        o,
                        s,
                        n = this.options.values.length,
                        r = this.options.p_values;
                    if (!this.options.hide_from_to)
                        if ("single" === this.options.type)
                            (t = n ? this.decorate(r[this.result.from]) : ((o = this._prettify(this.result.from)), this.decorate(o, this.result.from))),
                                this.$cache.single.html(t),
                                this.calcLabels(),
                                this.labels.p_single_left < this.labels.p_min + 1 ? (this.$cache.min[0].style.visibility = "hidden") : (this.$cache.min[0].style.visibility = "visible"),
                                this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? (this.$cache.max[0].style.visibility = "hidden") : (this.$cache.max[0].style.visibility = "visible");
                        else {
                            (i = n
                                ? (this.options.decorate_both
                                      ? ((t = this.decorate(r[this.result.from])), (t += this.options.values_separator), (t += this.decorate(r[this.result.to])))
                                      : (t = this.decorate(r[this.result.from] + this.options.values_separator + r[this.result.to])),
                                  (e = this.decorate(r[this.result.from])),
                                  this.decorate(r[this.result.to]))
                                : ((o = this._prettify(this.result.from)),
                                  (s = this._prettify(this.result.to)),
                                  this.options.decorate_both
                                      ? ((t = this.decorate(o, this.result.from)), (t += this.options.values_separator), (t += this.decorate(s, this.result.to)))
                                      : (t = this.decorate(o + this.options.values_separator + s, this.result.to)),
                                  (e = this.decorate(o, this.result.from)),
                                  this.decorate(s, this.result.to))),
                                this.$cache.single.html(t),
                                this.$cache.from.html(e),
                                this.$cache.to.html(i),
                                this.calcLabels();
                            var a = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                                l = this.labels.p_single_left + this.labels.p_single_fake,
                                c = this.labels.p_to_left + this.labels.p_to_fake,
                                d = Math.max(l, c);
                            this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left
                                ? ((this.$cache.from[0].style.visibility = "hidden"),
                                  (this.$cache.to[0].style.visibility = "hidden"),
                                  (this.$cache.single[0].style.visibility = "visible"),
                                  (d =
                                      this.result.from === this.result.to
                                          ? ("from" === this.target
                                                ? (this.$cache.from[0].style.visibility = "visible")
                                                : "to" === this.target
                                                ? (this.$cache.to[0].style.visibility = "visible")
                                                : this.target || (this.$cache.from[0].style.visibility = "visible"),
                                            (this.$cache.single[0].style.visibility = "hidden"),
                                            c)
                                          : ((this.$cache.from[0].style.visibility = "hidden"), (this.$cache.to[0].style.visibility = "hidden"), (this.$cache.single[0].style.visibility = "visible"), Math.max(l, c))))
                                : ((this.$cache.from[0].style.visibility = "visible"), (this.$cache.to[0].style.visibility = "visible"), (this.$cache.single[0].style.visibility = "hidden")),
                                a < this.labels.p_min + 1 ? (this.$cache.min[0].style.visibility = "hidden") : (this.$cache.min[0].style.visibility = "visible"),
                                d > 100 - this.labels.p_max - 1 ? (this.$cache.max[0].style.visibility = "hidden") : (this.$cache.max[0].style.visibility = "visible");
                        }
                }
            },
            drawShadow: function () {
                var t,
                    e,
                    i,
                    o,
                    s = this.options,
                    n = this.$cache,
                    r = "number" == typeof s.from_min && !isNaN(s.from_min),
                    a = "number" == typeof s.from_max && !isNaN(s.from_max),
                    l = "number" == typeof s.to_min && !isNaN(s.to_min),
                    c = "number" == typeof s.to_max && !isNaN(s.to_max);
                "single" === s.type
                    ? s.from_shadow && (r || a)
                        ? ((t = this.convertToPercent(r ? s.from_min : s.min)),
                          (e = this.convertToPercent(a ? s.from_max : s.max) - t),
                          (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
                          (e = this.toFixed(e - (this.coords.p_handle / 100) * e)),
                          (t += this.coords.p_handle / 2),
                          (n.shad_single[0].style.display = "block"),
                          (n.shad_single[0].style.left = t + "%"),
                          (n.shad_single[0].style.width = e + "%"))
                        : (n.shad_single[0].style.display = "none")
                    : (s.from_shadow && (r || a)
                          ? ((t = this.convertToPercent(r ? s.from_min : s.min)),
                            (e = this.convertToPercent(a ? s.from_max : s.max) - t),
                            (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
                            (e = this.toFixed(e - (this.coords.p_handle / 100) * e)),
                            (t += this.coords.p_handle / 2),
                            (n.shad_from[0].style.display = "block"),
                            (n.shad_from[0].style.left = t + "%"),
                            (n.shad_from[0].style.width = e + "%"))
                          : (n.shad_from[0].style.display = "none"),
                      s.to_shadow && (l || c)
                          ? ((i = this.convertToPercent(l ? s.to_min : s.min)),
                            (o = this.convertToPercent(c ? s.to_max : s.max) - i),
                            (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
                            (o = this.toFixed(o - (this.coords.p_handle / 100) * o)),
                            (i += this.coords.p_handle / 2),
                            (n.shad_to[0].style.display = "block"),
                            (n.shad_to[0].style.left = i + "%"),
                            (n.shad_to[0].style.width = o + "%"))
                          : (n.shad_to[0].style.display = "none"));
            },
            writeToInput: function () {
                "single" === this.options.type
                    ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from))
                    : (this.options.values.length
                          ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value)
                          : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to),
                      this.$cache.input.data("from", this.result.from),
                      this.$cache.input.data("to", this.result.to));
            },
            callOnStart: function () {
                this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result));
            },
            callOnChange: function () {
                this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result));
            },
            callOnFinish: function () {
                this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result));
            },
            callOnUpdate: function () {
                this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result));
            },
            toggleInput: function () {
                this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), (this.has_tab_index = !this.has_tab_index);
            },
            convertToPercent: function (t, e) {
                var i,
                    o = this.options.max - this.options.min,
                    s = o / 100;
                return o ? ((i = (e ? t : t - this.options.min) / s), this.toFixed(i)) : ((this.no_diapason = !0), 0);
            },
            convertToValue: function (t) {
                var e,
                    i,
                    o = this.options.min,
                    s = this.options.max,
                    n = o.toString().split(".")[1],
                    r = s.toString().split(".")[1],
                    a = 0,
                    l = 0;
                if (0 === t) return this.options.min;
                if (100 === t) return this.options.max;
                n && (a = e = n.length), r && (a = i = r.length), e && i && (a = i <= e ? e : i), o < 0 && ((o = +(o + (l = Math.abs(o))).toFixed(a)), (s = +(s + l).toFixed(a)));
                var c,
                    d = ((s - o) / 100) * t + o,
                    h = this.options.step.toString().split(".")[1];
                return (
                    (d = h ? +d.toFixed(h.length) : ((d /= this.options.step), +(d *= this.options.step).toFixed(0))),
                    l && (d -= l),
                    (c = h ? +d.toFixed(h.length) : this.toFixed(d)) < this.options.min ? (c = this.options.min) : c > this.options.max && (c = this.options.max),
                    c
                );
            },
            calcWithStep: function (t) {
                var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
                return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e);
            },
            checkMinInterval: function (t, e, i) {
                var o,
                    s,
                    n = this.options;
                return n.min_interval
                    ? ((o = this.convertToValue(t)), (s = this.convertToValue(e)), "from" === i ? s - o < n.min_interval && (o = s - n.min_interval) : o - s < n.min_interval && (o = s + n.min_interval), this.convertToPercent(o))
                    : t;
            },
            checkMaxInterval: function (t, e, i) {
                var o,
                    s,
                    n = this.options;
                return n.max_interval
                    ? ((o = this.convertToValue(t)), (s = this.convertToValue(e)), "from" === i ? s - o > n.max_interval && (o = s - n.max_interval) : o - s > n.max_interval && (o = s + n.max_interval), this.convertToPercent(o))
                    : t;
            },
            checkDiapason: function (t, e, i) {
                var o = this.convertToValue(t),
                    s = this.options;
                return "number" != typeof e && (e = s.min), "number" != typeof i && (i = s.max), o < e && (o = e), i < o && (o = i), this.convertToPercent(o);
            },
            toFixed: function (t) {
                return +(t = t.toFixed(20));
            },
            _prettify: function (t) {
                return this.options.prettify_enabled ? (this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t)) : t;
            },
            prettify: function (t) {
                return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
            },
            checkEdges: function (t, e) {
                return this.options.force_edges && (t < 0 ? (t = 0) : 100 - e < t && (t = 100 - e)), this.toFixed(t);
            },
            validate: function () {
                var t,
                    e,
                    i = this.options,
                    o = this.result,
                    s = i.values,
                    n = s.length;
                if (
                    ("string" == typeof i.min && (i.min = +i.min),
                    "string" == typeof i.max && (i.max = +i.max),
                    "string" == typeof i.from && (i.from = +i.from),
                    "string" == typeof i.to && (i.to = +i.to),
                    "string" == typeof i.step && (i.step = +i.step),
                    "string" == typeof i.from_min && (i.from_min = +i.from_min),
                    "string" == typeof i.from_max && (i.from_max = +i.from_max),
                    "string" == typeof i.to_min && (i.to_min = +i.to_min),
                    "string" == typeof i.to_max && (i.to_max = +i.to_max),
                    "string" == typeof i.grid_num && (i.grid_num = +i.grid_num),
                    i.max < i.min && (i.max = i.min),
                    n)
                )
                    for (i.p_values = [], i.min = 0, i.max = n - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < n; e++) (t = +s[e]), (t = isNaN(t) ? s[e] : ((s[e] = t), this._prettify(t))), i.p_values.push(t);
                ("number" == typeof i.from && !isNaN(i.from)) || (i.from = i.min),
                    ("number" == typeof i.to && !isNaN(i.to)) || (i.to = i.max),
                    "single" === i.type
                        ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max))
                        : (i.from < i.min && (i.from = i.min),
                          i.from > i.max && (i.from = i.max),
                          i.to < i.min && (i.to = i.min),
                          i.to > i.max && (i.to = i.max),
                          this.update_check.from && (this.update_check.from !== i.from && i.from > i.to && (i.from = i.to), this.update_check.to !== i.to && i.to < i.from && (i.to = i.from)),
                          i.from > i.to && (i.from = i.to),
                          i.to < i.from && (i.to = i.from)),
                    ("number" != typeof i.step || isNaN(i.step) || !i.step || i.step < 0) && (i.step = 1),
                    "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min),
                    "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max),
                    "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min),
                    "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max),
                    o && (o.min !== i.min && (o.min = i.min), o.max !== i.max && (o.max = i.max), (o.from < o.min || o.from > o.max) && (o.from = i.from), (o.to < o.min || o.to > o.max) && (o.to = i.to)),
                    ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || i.min_interval < 0) && (i.min_interval = 0),
                    ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || i.max_interval < 0) && (i.max_interval = 0),
                    i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min),
                    i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min);
            },
            decorate: function (t, e) {
                var i = "",
                    o = this.options;
                return (
                    o.prefix && (i += o.prefix),
                    (i += t),
                    o.max_postfix && (o.values.length && t === o.p_values[o.max] ? ((i += o.max_postfix), o.postfix && (i += " ")) : e === o.max && ((i += o.max_postfix), o.postfix && (i += " "))),
                    o.postfix && (i += o.postfix),
                    i
                );
            },
            updateFrom: function () {
                (this.result.from = this.options.from),
                    (this.result.from_percent = this.convertToPercent(this.result.from)),
                    (this.result.from_pretty = this._prettify(this.result.from)),
                    this.options.values && (this.result.from_value = this.options.values[this.result.from]);
            },
            updateTo: function () {
                (this.result.to = this.options.to),
                    (this.result.to_percent = this.convertToPercent(this.result.to)),
                    (this.result.to_pretty = this._prettify(this.result.to)),
                    this.options.values && (this.result.to_value = this.options.values[this.result.to]);
            },
            updateResult: function () {
                (this.result.min = this.options.min), (this.result.max = this.options.max), this.updateFrom(), this.updateTo();
            },
            appendGrid: function () {
                if (this.options.grid) {
                    var t,
                        e,
                        i,
                        o,
                        s,
                        n,
                        r = this.options,
                        a = r.max - r.min,
                        l = r.grid_num,
                        c = 0,
                        d = 4,
                        h = "";
                    for (this.calcGridMargin(), r.grid_snap && (l = a / r.step), 50 < l && (l = 50), i = this.toFixed(100 / l), 4 < l && (d = 3), 7 < l && (d = 2), 14 < l && (d = 1), 28 < l && (d = 0), t = 0; t < l + 1; t++) {
                        for (o = d, 100 < (c = this.toFixed(i * t)) && (c = 100), s = ((this.coords.big[t] = c) - i * (t - 1)) / (o + 1), e = 1; e <= o && 0 !== c; e++)
                            h += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(c - s * e) + '%"></span>';
                        (h += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>'),
                            (n = this.convertToValue(c)),
                            (h += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + c + '%">' + (n = r.values.length ? r.p_values[n] : this._prettify(n)) + "</span>");
                    }
                    (this.coords.big_num = Math.ceil(l + 1)), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(h), this.cacheGridLabels();
                }
            },
            cacheGridLabels: function () {
                var t,
                    e,
                    i = this.coords.big_num;
                for (e = 0; e < i; e++) (t = this.$cache.grid.find(".js-grid-text-" + e)), this.$cache.grid_labels.push(t);
                this.calcGridLabels();
            },
            calcGridLabels: function () {
                var t,
                    e,
                    i = [],
                    o = [],
                    s = this.coords.big_num;
                for (t = 0; t < s; t++)
                    (this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1)),
                        (this.coords.big_p[t] = this.toFixed((this.coords.big_w[t] / this.coords.w_rs) * 100)),
                        (this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2)),
                        (i[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t])),
                        (o[t] = this.toFixed(i[t] + this.coords.big_p[t]));
                for (
                    this.options.force_edges &&
                        (i[0] < -this.coords.grid_gap && ((i[0] = -this.coords.grid_gap), (o[0] = this.toFixed(i[0] + this.coords.big_p[0])), (this.coords.big_x[0] = this.coords.grid_gap)),
                        o[s - 1] > 100 + this.coords.grid_gap &&
                            ((o[s - 1] = 100 + this.coords.grid_gap), (i[s - 1] = this.toFixed(o[s - 1] - this.coords.big_p[s - 1])), (this.coords.big_x[s - 1] = this.toFixed(this.coords.big_p[s - 1] - this.coords.grid_gap)))),
                        this.calcGridCollision(2, i, o),
                        this.calcGridCollision(4, i, o),
                        t = 0;
                    t < s;
                    t++
                )
                    (e = this.$cache.grid_labels[t][0]), this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (e.style.marginLeft = -this.coords.big_x[t] + "%");
            },
            calcGridCollision: function (t, e, i) {
                var o,
                    s,
                    n,
                    r = this.coords.big_num;
                for (o = 0; o < r && !(r <= (s = o + t / 2)); o += t) (n = this.$cache.grid_labels[s][0]), i[o] <= e[s] ? (n.style.visibility = "visible") : (n.style.visibility = "hidden");
            },
            calcGridMargin: function () {
                this.options.grid_margin &&
                    ((this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                    this.coords.w_rs &&
                        ("single" === this.options.type ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1)) : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
                        (this.coords.p_handle = this.toFixed((this.coords.w_handle / this.coords.w_rs) * 100)),
                        (this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1)),
                        (this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%"),
                        (this.$cache.grid[0].style.left = this.coords.grid_gap + "%")));
            },
            update: function (t) {
                this.input &&
                    ((this.is_update = !0),
                    (this.options.from = this.result.from),
                    (this.options.to = this.result.to),
                    (this.update_check.from = this.result.from),
                    (this.update_check.to = this.result.to),
                    (this.options = l.extend(this.options, t)),
                    this.validate(),
                    this.updateResult(t),
                    this.toggleInput(),
                    this.remove(),
                    this.init(!0));
            },
            reset: function () {
                this.input && (this.updateResult(), this.update());
            },
            destroy: function () {
                this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), l.data(this.input, "ionRangeSlider", null), this.remove(), (this.input = null), (this.options = null));
            },
        }),
            (l.fn.ionRangeSlider = function (t) {
                return this.each(function () {
                    l.data(this, "ionRangeSlider") || l.data(this, "ionRangeSlider", new n(this, t, o++));
                });
            }),
            (function () {
                for (var n = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !d.requestAnimationFrame; ++e)
                    (d.requestAnimationFrame = d[t[e] + "RequestAnimationFrame"]), (d.cancelAnimationFrame = d[t[e] + "CancelAnimationFrame"] || d[t[e] + "CancelRequestAnimationFrame"]);
                d.requestAnimationFrame ||
                    (d.requestAnimationFrame = function (t, e) {
                        var i = new Date().getTime(),
                            o = Math.max(0, 16 - (i - n)),
                            s = d.setTimeout(function () {
                                t(i + o);
                            }, o);
                        return (n = i + o), s;
                    }),
                    d.cancelAnimationFrame ||
                        (d.cancelAnimationFrame = function (t) {
                            clearTimeout(t);
                        });
            })();
    }),
    (function (e, i) {
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
                  return i(e, t);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = i(e, require("jquery")))
            : (e.jQueryBridget = i(e, e.jQuery));
    })(window, function (t, e) {
        "use strict";
        var i = Array.prototype.slice,
            o = t.console,
            h =
                void 0 === o
                    ? function () {}
                    : function (t) {
                          o.error(t);
                      };
        function s(c, s, d) {
            (d = d || e || t.jQuery) &&
                (s.prototype.option ||
                    (s.prototype.option = function (t) {
                        d.isPlainObject(t) && (this.options = d.extend(!0, this.options, t));
                    }),
                (d.fn[c] = function (t) {
                    return "string" == typeof t
                        ? (function (t, n, r) {
                              var a,
                                  l = "$()." + c + '("' + n + '")';
                              return (
                                  t.each(function (t, e) {
                                      var i = d.data(e, c);
                                      if (i) {
                                          var o = i[n];
                                          if (o && "_" != n.charAt(0)) {
                                              var s = o.apply(i, r);
                                              a = void 0 === a ? s : a;
                                          } else h(l + " is not a valid method");
                                      } else h(c + " not initialized. Cannot call methods, i.e. " + l);
                                  }),
                                  void 0 !== a ? a : t
                              );
                          })(this, t, i.call(arguments, 1))
                        : ((function (t, o) {
                              t.each(function (t, e) {
                                  var i = d.data(e, c);
                                  i ? (i.option(o), i._init()) : ((i = new s(e, o)), d.data(e, c, i));
                              });
                          })(this, t),
                          this);
                }),
                n(d));
        }
        function n(t) {
            !t || (t && t.bridget) || (t.bridget = s);
        }
        return n(e || t.jQuery), s;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        o = (i[t] = i[t] || []);
                    return -1 == o.indexOf(e) && o.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[t] = i[t] || {})[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = i.indexOf(e);
                    return -1 != o && i.splice(o, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    (i = i.slice(0)), (e = e || []);
                    for (var o = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                        var n = i[s];
                        o && o[n] && (this.off(t, n), delete o[n]), n.apply(this, e);
                    }
                    return this;
                }
            }),
            (e.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.getSize = e());
    })(window, function () {
        "use strict";
        function v(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e;
        }
        var i =
                "undefined" == typeof console
                    ? function () {}
                    : function (t) {
                          console.error(t);
                      },
            y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            b = y.length;
        function _(t) {
            var e = getComputedStyle(t);
            return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
        }
        var x,
            w = !1;
        function $(t) {
            if (
                (!(function () {
                    if (!w) {
                        w = !0;
                        var t = document.createElement("div");
                        (t.style.width = "200px"), (t.style.padding = "1px 2px 3px 4px"), (t.style.borderStyle = "solid"), (t.style.borderWidth = "1px 2px 3px 4px"), (t.style.boxSizing = "border-box");
                        var e = document.body || document.documentElement;
                        e.appendChild(t);
                        var i = _(t);
                        (x = 200 == Math.round(v(i.width))), ($.isBoxSizeOuter = x), e.removeChild(t);
                    }
                })(),
                "string" == typeof t && (t = document.querySelector(t)),
                t && "object" == typeof t && t.nodeType)
            ) {
                var e = _(t);
                if ("none" == e.display)
                    return (function () {
                        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < b; e++) {
                            t[y[e]] = 0;
                        }
                        return t;
                    })();
                var i = {};
                (i.width = t.offsetWidth), (i.height = t.offsetHeight);
                for (var o = (i.isBorderBox = "border-box" == e.boxSizing), s = 0; s < b; s++) {
                    var n = y[s],
                        r = e[n],
                        a = parseFloat(r);
                    i[n] = isNaN(a) ? 0 : a;
                }
                var l = i.paddingLeft + i.paddingRight,
                    c = i.paddingTop + i.paddingBottom,
                    d = i.marginLeft + i.marginRight,
                    h = i.marginTop + i.marginBottom,
                    p = i.borderLeftWidth + i.borderRightWidth,
                    u = i.borderTopWidth + i.borderBottomWidth,
                    f = o && x,
                    m = v(e.width);
                !1 !== m && (i.width = m + (f ? 0 : l + p));
                var g = v(e.height);
                return !1 !== g && (i.height = g + (f ? 0 : c + u)), (i.innerWidth = i.width - (l + p)), (i.innerHeight = i.height - (c + u)), (i.outerWidth = i.width + d), (i.outerHeight = i.height + h), i;
            }
        }
        return $;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var i = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var o = e[i] + "MatchesSelector";
                if (t[o]) return o;
            }
        })();
        return function (t, e) {
            return t[i](e);
        };
    }),
    (function (e, i) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
                  return i(e, t);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = i(e, require("desandro-matches-selector")))
            : (e.fizzyUIUtils = i(e, e.matchesSelector));
    })(window, function (c, n) {
        var d = {
                extend: function (t, e) {
                    for (var i in e) t[i] = e[i];
                    return t;
                },
                modulo: function (t, e) {
                    return ((t % e) + e) % e;
                },
            },
            e = Array.prototype.slice;
        (d.makeArray = function (t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t];
        }),
            (d.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                -1 != i && t.splice(i, 1);
            }),
            (d.getParent = function (t, e) {
                for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), n(t, e))) return t;
            }),
            (d.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (d.filterFindElements = function (t, o) {
                t = d.makeArray(t);
                var s = [];
                return (
                    t.forEach(function (t) {
                        if (t instanceof HTMLElement)
                            if (o) {
                                n(t, o) && s.push(t);
                                for (var e = t.querySelectorAll(o), i = 0; i < e.length; i++) s.push(e[i]);
                            } else s.push(t);
                    }),
                    s
                );
            }),
            (d.debounceMethod = function (t, e, o) {
                o = o || 100;
                var s = t.prototype[e],
                    n = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[n];
                    clearTimeout(t);
                    var e = arguments,
                        i = this;
                    this[n] = setTimeout(function () {
                        s.apply(i, e), delete i[n];
                    }, o);
                };
            }),
            (d.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
            }),
            (d.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var h = c.console;
        return (
            (d.htmlInit = function (a, l) {
                d.docReady(function () {
                    var t = d.toDashed(l),
                        s = "data-" + t,
                        e = document.querySelectorAll("[" + s + "]"),
                        i = document.querySelectorAll(".js-" + t),
                        o = d.makeArray(e).concat(d.makeArray(i)),
                        n = s + "-options",
                        r = c.jQuery;
                    o.forEach(function (e) {
                        var t,
                            i = e.getAttribute(s) || e.getAttribute(n);
                        try {
                            t = i && JSON.parse(i);
                        } catch (t) {
                            return void (h && h.error("Error parsing " + s + " on " + e.className + ": " + t));
                        }
                        var o = new a(e, t);
                        r && r.data(e, l, o);
                    });
                });
            }),
            d
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        var i = document.documentElement.style,
            o = "string" == typeof i.transition ? "transition" : "WebkitTransition",
            s = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            n = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[o],
            r = { transform: s, transition: o, transitionDuration: o + "Duration", transitionProperty: o + "Property", transitionDelay: o + "Delay" };
        function a(t, e) {
            t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
        }
        var l = (a.prototype = Object.create(t.prototype));
        (l.constructor = a),
            (l._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (l.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (l.getSize = function () {
                this.size = e(this.element);
            }),
            (l.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    e[r[i] || i] = t[i];
                }
            }),
            (l.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    o = t[e ? "left" : "right"],
                    s = t[i ? "top" : "bottom"],
                    n = parseFloat(o),
                    r = parseFloat(s),
                    a = this.layout.size;
                -1 != o.indexOf("%") && (n = (n / 100) * a.width),
                    -1 != s.indexOf("%") && (r = (r / 100) * a.height),
                    (n = isNaN(n) ? 0 : n),
                    (r = isNaN(r) ? 0 : r),
                    (n -= e ? a.paddingLeft : a.paddingRight),
                    (r -= i ? a.paddingTop : a.paddingBottom),
                    (this.position.x = n),
                    (this.position.y = r);
            }),
            (l.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop"),
                    s = i ? "paddingLeft" : "paddingRight",
                    n = i ? "left" : "right",
                    r = i ? "right" : "left",
                    a = this.position.x + t[s];
                (e[n] = this.getXValue(a)), (e[r] = "");
                var l = o ? "paddingTop" : "paddingBottom",
                    c = o ? "top" : "bottom",
                    d = o ? "bottom" : "top",
                    h = this.position.y + t[l];
                (e[c] = this.getYValue(h)), (e[d] = ""), this.css(e), this.emitEvent("layout", [this]);
            }),
            (l.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
            }),
            (l.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
            }),
            (l._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    s = t == this.position.x && e == this.position.y;
                if ((this.setPosition(t, e), !s || this.isTransitioning)) {
                    var n = t - i,
                        r = e - o,
                        a = {};
                    (a.transform = this.getTranslate(n, r)), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
                } else this.layoutPosition();
            }),
            (l.getTranslate = function (t, e) {
                return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)";
            }),
            (l.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (l.moveTo = l._transitionTo),
            (l.setPosition = function (t, e) {
                (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
            }),
            (l._nonTransition = function (t) {
                for (var e in (this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd)) t.onTransitionEnd[e].call(this);
            }),
            (l.transition = function (t) {
                if (parseFloat(this.layout.options.transitionDuration)) {
                    var e = this._transn;
                    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                    for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                    if (t.from) {
                        this.css(t.from);
                        this.element.offsetHeight;
                        null;
                    }
                    this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
                } else this._nonTransition(t);
            });
        var c =
            "opacity," +
            s.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        (l.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: c, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(n, this, !1);
            }
        }),
            (l.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (l.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var d = { "-webkit-transform": "transform" };
        (l.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = d[t.propertyName] || t.propertyName;
                if (
                    (delete e.ingProperties[i],
                    (function (t) {
                        for (var e in t) return !1;
                        return !null;
                    })(e.ingProperties) && this.disableTransition(),
                    i in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
                    i in e.onEnd)
                )
                    e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (l.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(n, this, !1), (this.isTransitioning = !1);
            }),
            (l._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var h = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (l.removeTransitionStyles = function () {
                this.css(h);
            }),
            (l.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (l.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (l.remove = function () {
                o && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      this.hide())
                    : this.removeElem();
            }),
            (l.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (l.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (l.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (l.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (l.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (l.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            a
        );
    }),
    (function (s, n) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, i, o) {
                  return n(s, t, e, i, o);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = n(s, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (s.Outlayer = n(s, s.EvEmitter, s.getSize, s.fizzyUIUtils, s.Outlayer.Item));
    })(window, function (t, e, s, n, o) {
        "use strict";
        function i() {}
        var r = t.console,
            a = t.jQuery,
            l = 0,
            c = {};
        function d(t, e) {
            var i = n.getQueryElement(t);
            if (i) {
                (this.element = i), a && (this.$element = a(this.element)), (this.options = n.extend({}, this.constructor.defaults)), this.option(e);
                var o = ++l;
                (this.element.outlayerGUID = o), (c[o] = this)._create(), this._getOption("initLayout") && this.layout();
            } else r && r.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
        }
        (d.namespace = "outlayer"),
            (d.Item = o),
            (d.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var h = d.prototype;
        function p(t) {
            function e() {
                t.apply(this, arguments);
            }
            return ((e.prototype = Object.create(t.prototype)).constructor = e);
        }
        n.extend(h, e.prototype),
            (h.option = function (t) {
                n.extend(this.options, t);
            }),
            (h._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }),
            (d.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (h._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
            }),
            (h.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (h._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], s = 0; s < e.length; s++) {
                    var n = new i(e[s], this);
                    o.push(n);
                }
                return o;
            }),
            (h._filterFindItemElements = function (t) {
                return n.filterFindElements(t, this.options.itemSelector);
            }),
            (h.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (h.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (h._init = h.layout),
            (h._resetLayout = function () {
                this.getSize();
            }),
            (h.getSize = function () {
                this.size = s(this.element);
            }),
            (h._getMeasurement = function (t, e) {
                var i,
                    o = this.options[t];
                o ? ("string" == typeof o ? (i = this.element.querySelector(o)) : o instanceof HTMLElement && (i = o), (this[t] = i ? s(i)[e] : o)) : (this[t] = 0);
            }),
            (h.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
            }),
            (h._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (h._layoutItems = function (t, i) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var o = [];
                    t.forEach(function (t) {
                        var e = this._getItemLayoutPosition(t);
                        (e.item = t), (e.isInstant = i || t.isLayoutInstant), o.push(e);
                    }, this),
                        this._processLayoutQueue(o);
                }
            }),
            (h._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (h._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (h.updateStagger = function () {
                var t = this.options.stagger;
                if (null != t)
                    return (
                        (this.stagger = (function (t) {
                            if ("number" == typeof t) return t;
                            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                                i = e && e[1],
                                o = e && e[2];
                            if (!i.length) return 0;
                            i = parseFloat(i);
                            var s = u[o] || 1;
                            return i * s;
                        })(t)),
                        this.stagger
                    );
                this.stagger = 0;
            }),
            (h._positionItem = function (t, e, i, o, s) {
                o ? t.goTo(e, i) : (t.stagger(s * this.stagger), t.moveTo(e, i));
            }),
            (h._postLayout = function () {
                this.resizeContainer();
            }),
            (h.resizeContainer = function () {
                if (this._getOption("resizeContainer")) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
                }
            }),
            (h._getContainerSize = i),
            (h._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (h._emitCompleteOnItems = function (e, t) {
                var i = this;
                function o() {
                    i.dispatchEvent(e + "Complete", null, [t]);
                }
                var s = t.length;
                if (t && s) {
                    var n = 0;
                    t.forEach(function (t) {
                        t.once(e, r);
                    });
                } else o();
                function r() {
                    ++n == s && o();
                }
            }),
            (h.dispatchEvent = function (t, e, i) {
                var o = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, o), a))
                    if (((this.$element = this.$element || a(this.element)), e)) {
                        var s = a.Event(e);
                        (s.type = t), this.$element.trigger(s, i);
                    } else this.$element.trigger(t, i);
            }),
            (h.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (h.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (h.stamp = function (t) {
                (t = this._find(t)) && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
            }),
            (h.unstamp = function (t) {
                (t = this._find(t)) &&
                    t.forEach(function (t) {
                        n.removeFrom(this.stamps, t), this.unignore(t);
                    }, this);
            }),
            (h._find = function (t) {
                if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), (t = n.makeArray(t));
            }),
            (h._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (h._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (h._manageStamp = i),
            (h._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    o = s(t);
                return { left: e.left - i.left - o.marginLeft, top: e.top - i.top - o.marginTop, right: i.right - e.right - o.marginRight, bottom: i.bottom - e.bottom - o.marginBottom };
            }),
            (h.handleEvent = n.handleEvent),
            (h.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (h.unbindResize = function () {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (h.onresize = function () {
                this.resize();
            }),
            n.debounceMethod(d, "onresize", 100),
            (h.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (h.needsResizeLayout = function () {
                var t = s(this.element);
                return this.size && t && t.innerWidth !== this.size.innerWidth;
            }),
            (h.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (h.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (h.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                }
            }),
            (h.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var i = this.updateStagger();
                    t.forEach(function (t, e) {
                        t.stagger(e * i), t.reveal();
                    });
                }
            }),
            (h.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var i = this.updateStagger();
                    t.forEach(function (t, e) {
                        t.stagger(e * i), t.hide();
                    });
                }
            }),
            (h.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (h.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (h.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (h.getItems = function (t) {
                t = n.makeArray(t);
                var i = [];
                return (
                    t.forEach(function (t) {
                        var e = this.getItem(t);
                        e && i.push(e);
                    }, this),
                    i
                );
            }),
            (h.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), n.removeFrom(this.items, t);
                        }, this);
            }),
            (h.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete c[e], delete this.element.outlayerGUID, a && a.removeData(this.element, this.constructor.namespace);
            }),
            (d.data = function (t) {
                var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
                return e && c[e];
            }),
            (d.create = function (t, e) {
                var i = p(d);
                return (
                    (i.defaults = n.extend({}, d.defaults)),
                    n.extend(i.defaults, e),
                    (i.compatOptions = n.extend({}, d.compatOptions)),
                    (i.namespace = t),
                    (i.data = d.data),
                    (i.Item = p(o)),
                    n.htmlInit(i, t),
                    a && a.bridget && a.bridget(t, i),
                    i
                );
            });
        var u = { ms: 1, s: 1e3 };
        return (d.Item = o), d;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
            o = i._create;
        (i._create = function () {
            (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
        }),
            (i.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this);
                    }
                }
            });
        var s = i.destroy;
        return (
            (i.destroy = function () {
                s.apply(this, arguments), this.css({ display: "" });
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("get-size"), require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window, function (e, i) {
        "use strict";
        function o(t) {
            (this.isotope = t) && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));
        }
        var s = o.prototype;
        return (
            ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
                s[t] = function () {
                    return i.prototype[t].apply(this.isotope, arguments);
                };
            }),
            (s.needsVerticalResizeLayout = function () {
                var t = e(this.isotope.element);
                return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight;
            }),
            (s._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (s.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (s.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (s.getSegmentSize = function (t, e) {
                var i = t + e,
                    o = "outer" + e;
                if ((this._getMeasurement(i, o), !this[i])) {
                    var s = this.getFirstItemSize();
                    this[i] = (s && s[o]) || this.isotope.size["inner" + e];
                }
            }),
            (s.getFirstItemSize = function () {
                var t = this.isotope.filteredItems[0];
                return t && t.element && e(t.element);
            }),
            (s.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (s.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (o.modes = {}),
            (o.create = function (t, e) {
                function i() {
                    o.apply(this, arguments);
                }
                return ((i.prototype = Object.create(s)).constructor = i), e && (i.options = e), (o.modes[(i.prototype.namespace = t)] = i);
            }),
            o
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, c) {
        var e = t.create("masonry");
        e.compatOptions.fitWidth = "isFitWidth";
        var i = e.prototype;
        return (
            (i._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (i.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0],
                        e = t && t.element;
                    this.columnWidth = (e && c(e).outerWidth) || this.containerWidth;
                }
                var i = (this.columnWidth += this.gutter),
                    o = this.containerWidth + this.gutter,
                    s = o / i,
                    n = i - (o % i);
                (s = Math[n && n < 1 ? "round" : "floor"](s)), (this.cols = Math.max(s, 1));
            }),
            (i.getContainerWidth = function () {
                var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                    e = c(t);
                this.containerWidth = e && e.innerWidth;
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
                i = Math.min(i, this.cols);
                for (var o = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), s = { x: this.columnWidth * o.col, y: o.y }, n = o.y + t.size.outerHeight, r = i + o.col, a = o.col; a < r; a++)
                    this.colYs[a] = n;
                return s;
            }),
            (i._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t),
                    i = Math.min.apply(Math, e);
                return { col: e.indexOf(i), y: i };
            }),
            (i._getTopColGroup = function (t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
                return e;
            }),
            (i._getColGroupY = function (t, e) {
                if (e < 2) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }),
            (i._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols;
                i = 1 < t && i + t > this.cols ? 0 : i;
                var o = e.size.outerWidth && e.size.outerHeight;
                return (this.horizontalColIndex = o ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };
            }),
            (i._manageStamp = function (t) {
                var e = c(t),
                    i = this._getElementOffset(t),
                    o = this._getOption("originLeft") ? i.left : i.right,
                    s = o + e.outerWidth,
                    n = Math.floor(o / this.columnWidth);
                n = Math.max(0, n);
                var r = Math.floor(s / this.columnWidth);
                (r -= s % this.columnWidth ? 0 : 1), (r = Math.min(this.cols - 1, r));
                for (var a = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, l = n; l <= r; l++) this.colYs[l] = Math.max(a, this.colYs[l]);
            }),
            (i._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
            }),
            (i._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (i.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode"), require("masonry-layout")))
            : e(t.Isotope.LayoutMode, t.Masonry);
    })(window, function (t, e) {
        "use strict";
        var i = t.create("masonry"),
            o = i.prototype,
            s = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var n in e.prototype) s[n] || (o[n] = e.prototype[n]);
        var r = o.measureColumns;
        o.measureColumns = function () {
            (this.items = this.isotope.filteredItems), r.call(this);
        };
        var a = o._getOption;
        return (
            (o._getOption = function (t) {
                return "fitWidth" == t ? (void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth) : a.apply(this.isotope, arguments);
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
                var o = { x: this.x, y: this.y };
                return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), o;
            }),
            (i._getContainerSize = function () {
                return { height: this.maxY };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode")))
            : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (i._getContainerSize = function () {
                return { height: this.y };
            }),
            e
        );
    }),
    (function (r, a) {
        "function" == typeof define && define.amd
            ? define([
                  "outlayer/outlayer",
                  "get-size/get-size",
                  "desandro-matches-selector/matches-selector",
                  "fizzy-ui-utils/utils",
                  "isotope-layout/js/item",
                  "isotope-layout/js/layout-mode",
                  "isotope-layout/js/layout-modes/masonry",
                  "isotope-layout/js/layout-modes/fit-rows",
                  "isotope-layout/js/layout-modes/vertical",
              ], function (t, e, i, o, s, n) {
                  return a(r, t, e, i, o, s, n);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = a(
                  r,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("isotope-layout/js/item"),
                  require("isotope-layout/js/layout-mode"),
                  require("isotope-layout/js/layout-modes/masonry"),
                  require("isotope-layout/js/layout-modes/fit-rows"),
                  require("isotope-layout/js/layout-modes/vertical")
              ))
            : (r.Isotope = a(r, r.Outlayer, r.getSize, r.matchesSelector, r.fizzyUIUtils, r.Isotope.Item, r.Isotope.LayoutMode));
    })(window, function (t, i, e, o, n, s, r) {
        var a = t.jQuery,
            l = String.prototype.trim
                ? function (t) {
                      return t.trim();
                  }
                : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                  },
            c = i.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        (c.Item = s), (c.LayoutMode = r);
        var d = c.prototype;
        (d._create = function () {
            for (var t in ((this.itemGUID = 0), (this._sorters = {}), this._getSorters(), i.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]), r.modes))
                this._initLayoutMode(t);
        }),
            (d.reloadItems = function () {
                (this.itemGUID = 0), i.prototype.reloadItems.call(this);
            }),
            (d._itemize = function () {
                for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) {
                    t[e].id = this.itemGUID++;
                }
                return this._updateItemsSortData(t), t;
            }),
            (d._initLayoutMode = function (t) {
                var e = r.modes[t],
                    i = this.options[t] || {};
                (this.options[t] = e.options ? n.extend(e.options, i) : i), (this.modes[t] = new e(this));
            }),
            (d.layout = function () {
                this._isLayoutInited || !this._getOption("initLayout") ? this._layout() : this.arrange();
            }),
            (d._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
            }),
            (d.arrange = function (t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                (this.filteredItems = e.matches), this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
            }),
            (d._init = d.arrange),
            (d._hideReveal = function (t) {
                this.reveal(t.needReveal), this.hide(t.needHide);
            }),
            (d._getIsInstant = function () {
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                return (this._isInstant = e);
            }),
            (d._bindArrangeComplete = function () {
                var t,
                    e,
                    i,
                    o = this;
                function s() {
                    t && e && i && o.dispatchEvent("arrangeComplete", null, [o.filteredItems]);
                }
                this.once("layoutComplete", function () {
                    (t = !0), s();
                }),
                    this.once("hideComplete", function () {
                        (e = !0), s();
                    }),
                    this.once("revealComplete", function () {
                        (i = !0), s();
                    });
            }),
            (d._filter = function (t) {
                var e = this.options.filter;
                e = e || "*";
                for (var i = [], o = [], s = [], n = this._getFilterTest(e), r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (!a.isIgnored) {
                        var l = n(a);
                        l && i.push(a), l && a.isHidden ? o.push(a) : l || a.isHidden || s.push(a);
                    }
                }
                return { matches: i, needReveal: o, needHide: s };
            }),
            (d._getFilterTest = function (e) {
                return a && this.options.isJQueryFiltering
                    ? function (t) {
                          return a(t.element).is(e);
                      }
                    : "function" == typeof e
                    ? function (t) {
                          return e(t.element);
                      }
                    : function (t) {
                          return o(t.element, e);
                      };
            }),
            (d.updateSortData = function (t) {
                var e;
                (e = t ? ((t = n.makeArray(t)), this.getItems(t)) : this.items), this._getSorters(), this._updateItemsSortData(e);
            }),
            (d._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = h(i);
                }
            }),
            (d._updateItemsSortData = function (t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    t[i].updateSortData();
                }
            });
        var h = function (t) {
            if ("string" != typeof t) return t;
            var e = l(t).split(" "),
                i = e[0],
                o = i.match(/^\[(.+)\]$/),
                s = (function (e, i) {
                    return e
                        ? function (t) {
                              return t.getAttribute(e);
                          }
                        : function (t) {
                              var e = t.querySelector(i);
                              return e && e.textContent;
                          };
                })(o && o[1], i),
                n = c.sortDataParsers[e[1]];
            return (t = n
                ? function (t) {
                      return t && n(s(t));
                  }
                : function (t) {
                      return t && s(t);
                  });
        };
        (c.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10);
            },
            parseFloat: function (t) {
                return parseFloat(t);
            },
        }),
            (d._sort = function () {
                if (this.options.sortBy) {
                    var t = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                    var e = (function (r, a) {
                        return function (t, e) {
                            for (var i = 0; i < r.length; i++) {
                                var o = r[i],
                                    s = t.sortData[o],
                                    n = e.sortData[o];
                                if (n < s || s < n) return (n < s ? 1 : -1) * ((void 0 !== a[o] ? a[o] : a) ? 1 : -1);
                            }
                            return 0;
                        };
                    })(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(e);
                }
            }),
            (d._getIsSameSortBy = function (t) {
                for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
                return !0;
            }),
            (d._mode = function () {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return (e.options = this.options[t]), e;
            }),
            (d._resetLayout = function () {
                i.prototype._resetLayout.call(this), this._mode()._resetLayout();
            }),
            (d._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t);
            }),
            (d._manageStamp = function (t) {
                this._mode()._manageStamp(t);
            }),
            (d._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (d.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (d.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }),
            (d.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems), (this.filteredItems = i.concat(this.filteredItems)), (this.items = e.concat(this.items));
                }
            }),
            (d._filterRevealAdded = function (t) {
                var e = this._filter(t);
                return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
            }),
            (d.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i,
                        o,
                        s = e.length;
                    for (i = 0; i < s; i++) (o = e[i]), this.element.appendChild(o.element);
                    var n = this._filter(e).matches;
                    for (i = 0; i < s; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < s; i++) delete e[i].isLayoutInstant;
                    this.reveal(n);
                }
            });
        var p = d.remove;
        return (
            (d.remove = function (t) {
                t = n.makeArray(t);
                var e = this.getItems(t);
                p.call(this, t);
                for (var i = e && e.length, o = 0; i && o < i; o++) {
                    var s = e[o];
                    n.removeFrom(this.filteredItems, s);
                }
            }),
            (d.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) {
                    this.items[t].sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (d._noTransition = function (t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var o = t.apply(this, e);
                return (this.options.transitionDuration = i), o;
            }),
            (d.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element;
                });
            }),
            c
        );
    }),
    (function (i) {
        var o = {};
        function s(t) {
            if (o[t]) return o[t].exports;
            var e = (o[t] = { i: t, l: !1, exports: {} });
            return i[t].call(e.exports, e, e.exports, s), (e.l = !0), e.exports;
        }
        (s.m = i),
            (s.c = o),
            (s.d = function (t, e, i) {
                s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
            }),
            (s.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (s.t = function (e, t) {
                if ((1 & t && (e = s(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var i = Object.create(null);
                if ((s.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var o in e)
                        s.d(
                            i,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return i;
            }),
            (s.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return s.d(e, "a", e), e;
            }),
            (s.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (s.p = ""),
            s((s.s = 11));
    })([
        ,
        ,
        function (t, e, i) {
            "use strict";
            t.exports = function (t) {
                "complete" === document.readyState || "interactive" === document.readyState
                    ? t.call()
                    : document.attachEvent
                    ? document.attachEvent("onreadystatechange", function () {
                          "interactive" === document.readyState && t.call();
                      })
                    : document.addEventListener && document.addEventListener("DOMContentLoaded", t);
            };
        },
        ,
        function (i, t, e) {
            "use strict";
            (function (t) {
                var e;
                (e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}), (i.exports = e);
            }.call(this, e(5)));
        },
        function (t, e, i) {
            "use strict";
            var o,
                s =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          };
            o = (function () {
                return this;
            })();
            try {
                o = o || new Function("return this")();
            } catch (t) {
                "object" === ("undefined" == typeof window ? "undefined" : s(window)) && (o = window);
            }
            t.exports = o;
        },
        ,
        ,
        ,
        ,
        ,
        function (t, e, i) {
            t.exports = i(12);
        },
        function (t, e, i) {
            "use strict";
            var o =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          },
                s = a(i(2)),
                n = i(4),
                r = a(i(13));
            function a(t) {
                return t && t.__esModule ? t : { default: t };
            }
            var l = n.window.jarallax;
            if (
                ((n.window.jarallax = r.default),
                (n.window.jarallax.noConflict = function () {
                    return (n.window.jarallax = l), this;
                }),
                void 0 !== n.jQuery)
            ) {
                var c = function () {
                    var t = arguments || [];
                    Array.prototype.unshift.call(t, this);
                    var e = r.default.apply(n.window, t);
                    return "object" !== (void 0 === e ? "undefined" : o(e)) ? e : this;
                };
                c.constructor = r.default.constructor;
                var d = n.jQuery.fn.jarallax;
                (n.jQuery.fn.jarallax = c),
                    (n.jQuery.fn.jarallax.noConflict = function () {
                        return (n.jQuery.fn.jarallax = d), this;
                    });
            }
            (0, s.default)(function () {
                (0, r.default)(document.querySelectorAll("[data-jarallax]"));
            });
        },
        function (t, C, P) {
            "use strict";
            (function (t) {
                Object.defineProperty(C, "__esModule", { value: !0 });
                var l = function (t, e) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t))
                            return (function (t, e) {
                                var i = [],
                                    o = !0,
                                    s = !1,
                                    n = void 0;
                                try {
                                    for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                                } catch (t) {
                                    (s = !0), (n = t);
                                } finally {
                                    try {
                                        !o && a.return && a.return();
                                    } finally {
                                        if (s) throw n;
                                    }
                                }
                                return i;
                            })(t, e);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    },
                    e = function (t, e, i) {
                        return e && o(t.prototype, e), i && o(t, i), t;
                    };
                function o(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var o = e[i];
                        (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                    }
                }
                var c =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              },
                    i = r(P(2)),
                    s = r(P(14)),
                    n = P(4);
                function r(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var d = -1 < navigator.userAgent.indexOf("MSIE ") || -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/"),
                    a = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    h = (function () {
                        for (var t = "transform WebkitTransform MozTransform".split(" "), e = document.createElement("div"), i = 0; i < t.length; i++) if (e && void 0 !== e.style[t[i]]) return t[i];
                        return !1;
                    })(),
                    p = void 0;
                var v = void 0,
                    y = void 0,
                    u = void 0,
                    f = !1,
                    m = !1;
                function g(t) {
                    (v = n.window.innerWidth || document.documentElement.clientWidth),
                        (y = a
                            ? (!p && document.body && (((p = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;"), document.body.appendChild(p)),
                              (p ? p.clientHeight : 0) || n.window.innerHeight || document.documentElement.clientHeight)
                            : n.window.innerHeight || document.documentElement.clientHeight),
                        "object" !== (void 0 === t ? "undefined" : c(t)) || ("load" !== t.type && "dom-loaded" !== t.type) || (f = !0);
                }
                g(),
                    n.window.addEventListener("resize", g),
                    n.window.addEventListener("orientationchange", g),
                    n.window.addEventListener("load", g),
                    (0, i.default)(function () {
                        g({ type: "dom-loaded" });
                    });
                var b = [],
                    _ = !1;
                function x() {
                    if (b.length) {
                        u = void 0 !== n.window.pageYOffset ? n.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                        var e = f || !_ || _.width !== v || _.height !== y,
                            i = m || e || !_ || _.y !== u;
                        (m = f = !1),
                            (e || i) &&
                                (b.forEach(function (t) {
                                    e && t.onResize(), i && t.onScroll();
                                }),
                                (_ = { width: v, height: y, y: u })),
                            (0, s.default)(x);
                    }
                }
                var w =
                        !!t.ResizeObserver &&
                        new t.ResizeObserver(function (t) {
                            t &&
                                t.length &&
                                (0, s.default)(function () {
                                    t.forEach(function (t) {
                                        t.target && t.target.jarallax && (f || t.target.jarallax.onResize(), (m = !0));
                                    });
                                });
                        }),
                    $ = 0,
                    S =
                        (e(k, [
                            {
                                key: "css",
                                value: function (e, i) {
                                    return "string" == typeof i
                                        ? n.window.getComputedStyle(e).getPropertyValue(i)
                                        : (i.transform && h && (i[h] = i.transform),
                                          Object.keys(i).forEach(function (t) {
                                              e.style[t] = i[t];
                                          }),
                                          e);
                                },
                            },
                            {
                                key: "extend",
                                value: function (i) {
                                    var o = arguments;
                                    return (
                                        (i = i || {}),
                                        Object.keys(arguments).forEach(function (e) {
                                            o[e] &&
                                                Object.keys(o[e]).forEach(function (t) {
                                                    i[t] = o[e][t];
                                                });
                                        }),
                                        i
                                    );
                                },
                            },
                            {
                                key: "getWindowData",
                                value: function () {
                                    return { width: v, height: y, y: u };
                                },
                            },
                            {
                                key: "initImg",
                                value: function () {
                                    var t = this,
                                        e = t.options.imgElement;
                                    return (
                                        e && "string" == typeof e && (e = t.$item.querySelector(e)),
                                        e instanceof Element || (e = null),
                                        e && (t.options.keepImg ? (t.image.$item = e.cloneNode(!0)) : ((t.image.$item = e), (t.image.$itemParent = e.parentNode)), (t.image.useImgTag = !0)),
                                        !(
                                            !t.image.$item &&
                                            (null === t.image.src && ((t.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"), (t.image.bgImage = t.css(t.$item, "background-image"))),
                                            !t.image.bgImage || "none" === t.image.bgImage)
                                        )
                                    );
                                },
                            },
                            {
                                key: "canInitParallax",
                                value: function () {
                                    return h && !this.options.disableParallax();
                                },
                            },
                            {
                                key: "init",
                                value: function () {
                                    var t = this,
                                        e = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none" },
                                        i = {};
                                    if (!t.options.keepImg) {
                                        var o = t.$item.getAttribute("style");
                                        if ((o && t.$item.setAttribute("data-jarallax-original-styles", o), t.image.useImgTag)) {
                                            var s = t.image.$item.getAttribute("style");
                                            s && t.image.$item.setAttribute("data-jarallax-original-styles", s);
                                        }
                                    }
                                    if (
                                        ("static" === t.css(t.$item, "position") && t.css(t.$item, { position: "relative" }),
                                        "auto" === t.css(t.$item, "z-index") && t.css(t.$item, { zIndex: 0 }),
                                        (t.image.$container = document.createElement("div")),
                                        t.css(t.image.$container, e),
                                        t.css(t.image.$container, { "z-index": t.options.zIndex }),
                                        d && t.css(t.image.$container, { opacity: 0.9999 }),
                                        t.image.$container.setAttribute("id", "jarallax-container-" + t.instanceID),
                                        t.$item.appendChild(t.image.$container),
                                        t.image.useImgTag
                                            ? (i = t.extend(
                                                  {
                                                      "object-fit": t.options.imgSize,
                                                      "object-position": t.options.imgPosition,
                                                      "font-family": "object-fit: " + t.options.imgSize + "; object-position: " + t.options.imgPosition + ";",
                                                      "max-width": "none",
                                                  },
                                                  e,
                                                  i
                                              ))
                                            : ((t.image.$item = document.createElement("div")),
                                              t.image.src &&
                                                  (i = t.extend(
                                                      {
                                                          "background-position": t.options.imgPosition,
                                                          "background-size": t.options.imgSize,
                                                          "background-repeat": t.options.imgRepeat,
                                                          "background-image": t.image.bgImage || 'url("' + t.image.src + '")',
                                                      },
                                                      e,
                                                      i
                                                  ))),
                                        ("opacity" !== t.options.type && "scale" !== t.options.type && "scale-opacity" !== t.options.type && 1 !== t.options.speed) || (t.image.position = "absolute"),
                                        "fixed" === t.image.position)
                                    )
                                        for (var n = 0, r = t.$item; null !== r && r !== document && 0 === n; ) {
                                            var a = t.css(r, "-webkit-transform") || t.css(r, "-moz-transform") || t.css(r, "transform");
                                            a && "none" !== a && ((n = 1), (t.image.position = "absolute")), (r = r.parentNode);
                                        }
                                    (i.position = t.image.position),
                                        t.css(t.image.$item, i),
                                        t.image.$container.appendChild(t.image.$item),
                                        t.onResize(),
                                        t.onScroll(!0),
                                        t.options.automaticResize && w && w.observe(t.$item),
                                        t.options.onInit && t.options.onInit.call(t),
                                        "none" !== t.css(t.$item, "background-image") && t.css(t.$item, { "background-image": "none" }),
                                        t.addToParallaxList();
                                },
                            },
                            {
                                key: "addToParallaxList",
                                value: function () {
                                    b.push(this), 1 === b.length && x();
                                },
                            },
                            {
                                key: "removeFromParallaxList",
                                value: function () {
                                    var i = this;
                                    b.forEach(function (t, e) {
                                        t.instanceID === i.instanceID && b.splice(e, 1);
                                    });
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    var t = this;
                                    t.removeFromParallaxList();
                                    var e = t.$item.getAttribute("data-jarallax-original-styles");
                                    if ((t.$item.removeAttribute("data-jarallax-original-styles"), e ? t.$item.setAttribute("style", e) : t.$item.removeAttribute("style"), t.image.useImgTag)) {
                                        var i = t.image.$item.getAttribute("data-jarallax-original-styles");
                                        t.image.$item.removeAttribute("data-jarallax-original-styles"),
                                            i ? t.image.$item.setAttribute("style", e) : t.image.$item.removeAttribute("style"),
                                            t.image.$itemParent && t.image.$itemParent.appendChild(t.image.$item);
                                    }
                                    t.$clipStyles && t.$clipStyles.parentNode.removeChild(t.$clipStyles),
                                        t.image.$container && t.image.$container.parentNode.removeChild(t.image.$container),
                                        t.options.onDestroy && t.options.onDestroy.call(t),
                                        delete t.$item.jarallax;
                                },
                            },
                            {
                                key: "clipContainer",
                                value: function () {
                                    if ("fixed" === this.image.position) {
                                        var t = this,
                                            e = t.image.$container.getBoundingClientRect(),
                                            i = e.width,
                                            o = e.height;
                                        t.$clipStyles ||
                                            ((t.$clipStyles = document.createElement("style")),
                                            t.$clipStyles.setAttribute("type", "text/css"),
                                            t.$clipStyles.setAttribute("id", "jarallax-clip-" + t.instanceID),
                                            (document.head || document.getElementsByTagName("head")[0]).appendChild(t.$clipStyles));
                                        var s = "#jarallax-container-" + t.instanceID + " {\n           clip: rect(0 " + i + "px " + o + "px 0);\n           clip: rect(0, " + i + "px, " + o + "px, 0);\n        }";
                                        t.$clipStyles.styleSheet ? (t.$clipStyles.styleSheet.cssText = s) : (t.$clipStyles.innerHTML = s);
                                    }
                                },
                            },
                            {
                                key: "coverImage",
                                value: function () {
                                    var t = this,
                                        e = t.image.$container.getBoundingClientRect(),
                                        i = e.height,
                                        o = t.options.speed,
                                        s = "scroll" === t.options.type || "scroll-opacity" === t.options.type,
                                        n = 0,
                                        r = i,
                                        a = 0;
                                    return (
                                        s && (o < 0 ? ((n = o * Math.max(i, y)), y < i && (n -= o * (i - y))) : (n = o * (i + y)), 1 < o ? (r = Math.abs(n - y)) : o < 0 ? (r = n / o + Math.abs(n)) : (r += (y - i) * (1 - o)), (n /= 2)),
                                        (t.parallaxScrollDistance = n),
                                        (a = s ? (y - r) / 2 : (i - r) / 2),
                                        t.css(t.image.$item, { height: r + "px", marginTop: a + "px", left: "fixed" === t.image.position ? e.left + "px" : "0", width: e.width + "px" }),
                                        t.options.onCoverImage && t.options.onCoverImage.call(t),
                                        { image: { height: r, marginTop: a }, container: e }
                                    );
                                },
                            },
                            {
                                key: "isVisible",
                                value: function () {
                                    return this.isElementInViewport || !1;
                                },
                            },
                            {
                                key: "onScroll",
                                value: function (t) {
                                    var e = this,
                                        i = e.$item.getBoundingClientRect(),
                                        o = i.top,
                                        s = i.height,
                                        n = {},
                                        r = i;
                                    if (
                                        (e.options.elementInViewport && (r = e.options.elementInViewport.getBoundingClientRect()),
                                        (e.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= y && r.left <= v),
                                        t || e.isElementInViewport)
                                    ) {
                                        var a = Math.max(0, o),
                                            l = Math.max(0, s + o),
                                            c = Math.max(0, -o),
                                            d = Math.max(0, o + s - y),
                                            h = Math.max(0, s - (o + s - y)),
                                            p = Math.max(0, -o + y - s),
                                            u = 1 - (2 * (y - o)) / (y + s),
                                            f = 1;
                                        if (
                                            (s < y ? (f = 1 - (c || d) / s) : l <= y ? (f = l / y) : h <= y && (f = h / y),
                                            ("opacity" !== e.options.type && "scale-opacity" !== e.options.type && "scroll-opacity" !== e.options.type) || ((n.transform = "translate3d(0,0,0)"), (n.opacity = f)),
                                            "scale" === e.options.type || "scale-opacity" === e.options.type)
                                        ) {
                                            var m = 1;
                                            e.options.speed < 0 ? (m -= e.options.speed * f) : (m += e.options.speed * (1 - f)), (n.transform = "scale(" + m + ") translate3d(0,0,0)");
                                        }
                                        if ("scroll" === e.options.type || "scroll-opacity" === e.options.type) {
                                            var g = e.parallaxScrollDistance * u;
                                            "absolute" === e.image.position && (g -= o), (n.transform = "translate3d(0," + g + "px,0)");
                                        }
                                        e.css(e.image.$item, n),
                                            e.options.onScroll &&
                                                e.options.onScroll.call(e, { section: i, beforeTop: a, beforeTopEnd: l, afterTop: c, beforeBottom: d, beforeBottomEnd: h, afterBottom: p, visiblePercent: f, fromViewportCenter: u });
                                    }
                                },
                            },
                            {
                                key: "onResize",
                                value: function () {
                                    this.coverImage(), this.clipContainer();
                                },
                            },
                        ]),
                        k);
                function k(t, e) {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, k);
                    var i = this;
                    (i.instanceID = $++),
                        (i.$item = t),
                        (i.defaults = {
                            type: "scroll",
                            speed: 0.5,
                            imgSrc: null,
                            imgElement: ".jarallax-img",
                            imgSize: "cover",
                            imgPosition: "50% 50%",
                            imgRepeat: "no-repeat",
                            keepImg: !1,
                            elementInViewport: null,
                            zIndex: -100,
                            disableParallax: !1,
                            disableVideo: !1,
                            automaticResize: !0,
                            videoSrc: null,
                            videoStartTime: 0,
                            videoEndTime: 0,
                            videoVolume: 0,
                            videoLoop: !0,
                            videoPlayOnlyVisible: !0,
                            videoLazyLoading: !0,
                            onScroll: null,
                            onInit: null,
                            onDestroy: null,
                            onCoverImage: null,
                        });
                    var o = i.$item.dataset || {},
                        s = {};
                    if (
                        (Object.keys(o).forEach(function (t) {
                            var e = t.substr(0, 1).toLowerCase() + t.substr(1);
                            e && void 0 !== i.defaults[e] && (s[e] = o[t]);
                        }),
                        (i.options = i.extend({}, i.defaults, s, e)),
                        (i.pureOptions = i.extend({}, i.options)),
                        Object.keys(i.options).forEach(function (t) {
                            "true" === i.options[t] ? (i.options[t] = !0) : "false" === i.options[t] && (i.options[t] = !1);
                        }),
                        (i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed)))),
                        "string" == typeof i.options.disableParallax && (i.options.disableParallax = new RegExp(i.options.disableParallax)),
                        i.options.disableParallax instanceof RegExp)
                    ) {
                        var n = i.options.disableParallax;
                        i.options.disableParallax = function () {
                            return n.test(navigator.userAgent);
                        };
                    }
                    if (
                        ("function" != typeof i.options.disableParallax &&
                            (i.options.disableParallax = function () {
                                return !1;
                            }),
                        "string" == typeof i.options.disableVideo && (i.options.disableVideo = new RegExp(i.options.disableVideo)),
                        i.options.disableVideo instanceof RegExp)
                    ) {
                        var r = i.options.disableVideo;
                        i.options.disableVideo = function () {
                            return r.test(navigator.userAgent);
                        };
                    }
                    "function" != typeof i.options.disableVideo &&
                        (i.options.disableVideo = function () {
                            return !1;
                        });
                    var a = i.options.elementInViewport;
                    a && "object" === (void 0 === a ? "undefined" : c(a)) && void 0 !== a.length && (a = l(a, 1)[0]);
                    a instanceof Element || (a = null),
                        (i.options.elementInViewport = a),
                        (i.image = { src: i.options.imgSrc || null, $container: null, useImgTag: !1, position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed" }),
                        i.initImg() && i.canInitParallax() && i.init();
                }
                function T(t, e) {
                    ("object" === ("undefined" == typeof HTMLElement ? "undefined" : c(HTMLElement))
                        ? t instanceof HTMLElement
                        : t && "object" === (void 0 === t ? "undefined" : c(t)) && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]);
                    for (var i = e, o = Array.prototype.slice.call(arguments, 2), s = t.length, n = 0, r = void 0; n < s; n++)
                        if (("object" === (void 0 === i ? "undefined" : c(i)) || void 0 === i ? t[n].jarallax || (t[n].jarallax = new S(t[n], i)) : t[n].jarallax && (r = t[n].jarallax[i].apply(t[n].jarallax, o)), void 0 !== r)) return r;
                    return t;
                }
                (T.constructor = S), (C.default = T);
            }.call(this, P(5)));
        },
        function (t, e, i) {
            "use strict";
            var o = i(15),
                s =
                    o.requestAnimationFrame ||
                    o.webkitRequestAnimationFrame ||
                    o.mozRequestAnimationFrame ||
                    function (t) {
                        var e = +new Date(),
                            i = Math.max(0, 16 - (e - n)),
                            o = setTimeout(t, i);
                        return (n = e), o;
                    },
                n = +new Date();
            var r = o.cancelAnimationFrame || o.webkitCancelAnimationFrame || o.mozCancelAnimationFrame || clearTimeout;
            Function.prototype.bind && ((s = s.bind(o)), (r = r.bind(o))), ((t.exports = s).cancel = r);
        },
        function (i, t, e) {
            "use strict";
            (function (t) {
                var e;
                (e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}), (i.exports = e);
            }.call(this, e(5)));
        },
    ]),
    (function (i) {
        var o = {};
        function s(t) {
            if (o[t]) return o[t].exports;
            var e = (o[t] = { i: t, l: !1, exports: {} });
            return i[t].call(e.exports, e, e.exports, s), (e.l = !0), e.exports;
        }
        (s.m = i),
            (s.c = o),
            (s.d = function (t, e, i) {
                s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
            }),
            (s.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (s.t = function (e, t) {
                if ((1 & t && (e = s(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var i = Object.create(null);
                if ((s.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var o in e)
                        s.d(
                            i,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return i;
            }),
            (s.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return s.d(e, "a", e), e;
            }),
            (s.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (s.p = ""),
            s((s.s = 0));
    })([
        function (t, e, i) {
            t.exports = i(1);
        },
        function (t, e, i) {
            "use strict";
            var o = s(i(2));
            function s(t) {
                return t && t.__esModule ? t : { default: t };
            }
            (0, s(i(3)).default)(),
                (0, o.default)(function () {
                    "undefined" != typeof jarallax && jarallax(document.querySelectorAll("[data-jarallax-element]"));
                });
        },
        function (t, e, i) {
            "use strict";
            t.exports = function (t) {
                "complete" === document.readyState || "interactive" === document.readyState
                    ? t.call()
                    : document.attachEvent
                    ? document.attachEvent("onreadystatechange", function () {
                          "interactive" === document.readyState && t.call();
                      })
                    : document.addEventListener && document.addEventListener("DOMContentLoaded", t);
            };
        },
        function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : n.default.jarallax;
                    if (void 0 === t) return;
                    var e = t.constructor;
                    ["initImg", "canInitParallax", "init", "destroy", "clipContainer", "coverImage", "isVisible", "onScroll", "onResize"].forEach(function (u) {
                        var f = e.prototype[u];
                        e.prototype[u] = function () {
                            var t = this,
                                e = arguments || [];
                            if (
                                ("initImg" === u && null !== t.$item.getAttribute("data-jarallax-element") && ((t.options.type = "element"), (t.pureOptions.speed = t.$item.getAttribute("data-jarallax-element") || t.pureOptions.speed)),
                                "element" !== t.options.type)
                            )
                                return f.apply(t, e);
                            switch (((t.pureOptions.threshold = t.$item.getAttribute("data-threshold") || ""), u)) {
                                case "init":
                                    var i = t.pureOptions.speed.split(" ");
                                    (t.options.speed = t.pureOptions.speed || 0), (t.options.speedY = i[0] ? parseFloat(i[0]) : 0), (t.options.speedX = i[1] ? parseFloat(i[1]) : 0);
                                    var o = t.pureOptions.threshold.split(" ");
                                    (t.options.thresholdY = o[0] ? parseFloat(o[0]) : null), (t.options.thresholdX = o[1] ? parseFloat(o[1]) : null), f.apply(t, e);
                                    var s = t.$item.getAttribute("data-jarallax-original-styles");
                                    return s && t.$item.setAttribute("style", s), !0;
                                case "onResize":
                                    var n = t.css(t.$item, "transform");
                                    t.css(t.$item, { transform: "" });
                                    var r = t.$item.getBoundingClientRect();
                                    (t.itemData = { width: r.width, height: r.height, y: r.top + t.getWindowData().y, x: r.left }), t.css(t.$item, { transform: n });
                                    break;
                                case "onScroll":
                                    var a = t.getWindowData(),
                                        l = (a.y + a.height / 2 - t.itemData.y - t.itemData.height / 2) / (a.height / 2),
                                        c = l * t.options.speedY,
                                        d = l * t.options.speedX,
                                        h = c,
                                        p = d;
                                    null !== t.options.thresholdY && c > t.options.thresholdY && (h = 0),
                                        null !== t.options.thresholdX && d > t.options.thresholdX && (p = 0),
                                        t.css(t.$item, { transform: "translate3d(" + p + "px," + h + "px,0)" });
                                    break;
                                case "initImg":
                                case "isVisible":
                                case "clipContainer":
                                case "coverImage":
                                    return !0;
                            }
                            return f.apply(t, e);
                        };
                    });
                });
            var o,
                s = i(4),
                n = (o = s) && o.__esModule ? o : { default: o };
        },
        function (i, t, e) {
            "use strict";
            (function (t) {
                var e;
                (e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}), (i.exports = e);
            }.call(this, e(5)));
        },
        function (t, e, i) {
            "use strict";
            var o,
                s =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          };
            o = (function () {
                return this;
            })();
            try {
                o = o || new Function("return this")();
            } catch (t) {
                "object" === ("undefined" == typeof window ? "undefined" : s(window)) && (o = window);
            }
            t.exports = o;
        },
    ]),
    (function (n) {
        n.fn.niceSelect = function (t) {
            if ("string" == typeof t)
                return (
                    "update" == t
                        ? this.each(function () {
                              var t = n(this),
                                  e = n(this).next(".nice-select"),
                                  i = e.hasClass("open");
                              e.length && (e.remove(), o(t), i && t.next().trigger("click"));
                          })
                        : "destroy" == t
                        ? (this.each(function () {
                              var t = n(this),
                                  e = n(this).next(".nice-select");
                              e.length && (e.remove(), t.css("display", ""));
                          }),
                          0 == n(".nice-select").length && n(document).off(".nice_select"))
                        : console.log('Method "' + t + '" does not exist.'),
                    this
                );
            function o(t) {
                t.after(
                    n("<div></div>")
                        .addClass("nice-select")
                        .addClass(t.attr("class") || "")
                        .addClass(t.attr("disabled") ? "disabled" : "")
                        .attr("tabindex", t.attr("disabled") ? null : "0")
                        .html('<span class="current"></span><ul class="list"></ul>')
                );
                var o = t.next(),
                    e = t.find("option"),
                    i = t.find("option:selected");
                o.find(".current").html(i.data("display") || i.text()),
                    e.each(function (t) {
                        var e = n(this),
                            i = e.data("display");
                        o.find("ul").append(
                            n("<li></li>")
                                .attr("data-value", e.val())
                                .attr("data-display", i || null)
                                .addClass("option" + (e.is(":selected") ? " selected" : "") + (e.is(":disabled") ? " disabled" : ""))
                                .html(e.text())
                        );
                    });
            }
            this.hide(),
                this.each(function () {
                    var t = n(this);
                    t.next().hasClass("nice-select") || o(t);
                }),
                n(document).off(".nice_select"),
                n(document).on("click.nice_select", ".nice-select", function (t) {
                    var e = n(this);
                    n(".nice-select").not(e).removeClass("open"), e.toggleClass("open"), e.hasClass("open") ? (e.find(".option"), e.find(".focus").removeClass("focus"), e.find(".selected").addClass("focus")) : e.focus();
                }),
                n(document).on("click.nice_select", function (t) {
                    0 === n(t.target).closest(".nice-select").length && n(".nice-select").removeClass("open").find(".option");
                }),
                n(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
                    var e = n(this),
                        i = e.closest(".nice-select");
                    i.find(".selected").removeClass("selected"), e.addClass("selected");
                    var o = e.data("display") || e.text();
                    i.find(".current").text(o), i.prev("select").val(e.data("value")).trigger("change");
                }),
                n(document).on("keydown.nice_select", ".nice-select", function (t) {
                    var e = n(this),
                        i = n(e.find(".focus") || e.find(".list .option.selected"));
                    if (32 == t.keyCode || 13 == t.keyCode) return e.hasClass("open") ? i.trigger("click") : e.trigger("click"), !1;
                    if (40 == t.keyCode) {
                        if (e.hasClass("open")) {
                            var o = i.nextAll(".option:not(.disabled)").first();
                            0 < o.length && (e.find(".focus").removeClass("focus"), o.addClass("focus"));
                        } else e.trigger("click");
                        return !1;
                    }
                    if (38 == t.keyCode) {
                        if (e.hasClass("open")) {
                            var s = i.prevAll(".option:not(.disabled)").first();
                            0 < s.length && (e.find(".focus").removeClass("focus"), s.addClass("focus"));
                        } else e.trigger("click");
                        return !1;
                    }
                    if (27 == t.keyCode) e.hasClass("open") && e.trigger("click");
                    else if (9 == t.keyCode && e.hasClass("open")) return !1;
                });
            var e = document.createElement("a").style;
            return (e.cssText = "pointer-events:auto"), "auto" !== e.pointerEvents && n("html").addClass("no-csspointerevents"), this;
        };
    })(jQuery),
    (function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? (module.exports = t(require("jquery"))) : t(jQuery);
    })(function (c) {
        "use strict";
        var s,
            r = window.Slick || {};
        (s = 0),
            ((r = function (t, e) {
                var i,
                    o = this;
                (o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: c(t),
                    appendDots: c(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, e) {
                        return c('<button type="button" />').text(e + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                }),
                    (o.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1,
                    }),
                    c.extend(o, o.initials),
                    (o.activeBreakpoint = null),
                    (o.animType = null),
                    (o.animProp = null),
                    (o.breakpoints = []),
                    (o.breakpointSettings = []),
                    (o.cssTransitions = !1),
                    (o.focussed = !1),
                    (o.interrupted = !1),
                    (o.hidden = "hidden"),
                    (o.paused = !0),
                    (o.positionProp = null),
                    (o.respondTo = null),
                    (o.rowCount = 1),
                    (o.shouldClick = !0),
                    (o.$slider = c(t)),
                    (o.$slidesCache = null),
                    (o.transformType = null),
                    (o.transitionType = null),
                    (o.visibilityChange = "visibilitychange"),
                    (o.windowWidth = 0),
                    (o.windowTimer = null),
                    (i = c(t).data("slick") || {}),
                    (o.options = c.extend({}, o.defaults, e, i)),
                    (o.currentSlide = o.options.initialSlide),
                    (o.originalSettings = o.options),
                    void 0 !== document.mozHidden
                        ? ((o.hidden = "mozHidden"), (o.visibilityChange = "mozvisibilitychange"))
                        : void 0 !== document.webkitHidden && ((o.hidden = "webkitHidden"), (o.visibilityChange = "webkitvisibilitychange")),
                    (o.autoPlay = c.proxy(o.autoPlay, o)),
                    (o.autoPlayClear = c.proxy(o.autoPlayClear, o)),
                    (o.autoPlayIterator = c.proxy(o.autoPlayIterator, o)),
                    (o.changeSlide = c.proxy(o.changeSlide, o)),
                    (o.clickHandler = c.proxy(o.clickHandler, o)),
                    (o.selectHandler = c.proxy(o.selectHandler, o)),
                    (o.setPosition = c.proxy(o.setPosition, o)),
                    (o.swipeHandler = c.proxy(o.swipeHandler, o)),
                    (o.dragHandler = c.proxy(o.dragHandler, o)),
                    (o.keyHandler = c.proxy(o.keyHandler, o)),
                    (o.instanceUid = s++),
                    (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    o.registerBreakpoints(),
                    o.init(!0);
            }).prototype.activateADA = function () {
                this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
            }),
            (r.prototype.addSlide = r.prototype.slickAdd = function (t, e, i) {
                var o = this;
                if ("boolean" == typeof e) (i = e), (e = null);
                else if (e < 0 || e >= o.slideCount) return !1;
                o.unload(),
                    "number" == typeof e
                        ? 0 === e && 0 === o.$slides.length
                            ? c(t).appendTo(o.$slideTrack)
                            : i
                            ? c(t).insertBefore(o.$slides.eq(e))
                            : c(t).insertAfter(o.$slides.eq(e))
                        : !0 === i
                        ? c(t).prependTo(o.$slideTrack)
                        : c(t).appendTo(o.$slideTrack),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    o.$slides.each(function (t, e) {
                        c(e).attr("data-slick-index", t);
                    }),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
            }),
            (r.prototype.animateHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.animate({ height: e }, t.options.speed);
                }
            }),
            (r.prototype.animateSlide = function (t, e) {
                var i = {},
                    o = this;
                o.animateHeight(),
                    !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
                    !1 === o.transformsEnabled
                        ? !1 === o.options.vertical
                            ? o.$slideTrack.animate({ left: t }, o.options.speed, o.options.easing, e)
                            : o.$slideTrack.animate({ top: t }, o.options.speed, o.options.easing, e)
                        : !1 === o.cssTransitions
                        ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
                          c({ animStart: o.currentLeft }).animate(
                              { animStart: t },
                              {
                                  duration: o.options.speed,
                                  easing: o.options.easing,
                                  step: function (t) {
                                      (t = Math.ceil(t)), !1 === o.options.vertical ? (i[o.animType] = "translate(" + t + "px, 0px)") : (i[o.animType] = "translate(0px," + t + "px)"), o.$slideTrack.css(i);
                                  },
                                  complete: function () {
                                      e && e.call();
                                  },
                              }
                          ))
                        : (o.applyTransition(),
                          (t = Math.ceil(t)),
                          !1 === o.options.vertical ? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)") : (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
                          o.$slideTrack.css(i),
                          e &&
                              setTimeout(function () {
                                  o.disableTransition(), e.call();
                              }, o.options.speed));
            }),
            (r.prototype.getNavTarget = function () {
                var t = this.options.asNavFor;
                return t && null !== t && (t = c(t).not(this.$slider)), t;
            }),
            (r.prototype.asNavFor = function (e) {
                var t = this.getNavTarget();
                null !== t &&
                    "object" == typeof t &&
                    t.each(function () {
                        var t = c(this).slick("getSlick");
                        t.unslicked || t.slideHandler(e, !0);
                    });
            }),
            (r.prototype.applyTransition = function (t) {
                var e = this,
                    i = {};
                !1 === e.options.fade ? (i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
                    !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
            }),
            (r.prototype.autoPlay = function () {
                var t = this;
                t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
            }),
            (r.prototype.autoPlayClear = function () {
                this.autoPlayTimer && clearInterval(this.autoPlayTimer);
            }),
            (r.prototype.autoPlayIterator = function () {
                var t = this,
                    e = t.currentSlide + t.options.slidesToScroll;
                t.paused ||
                    t.interrupted ||
                    t.focussed ||
                    (!1 === t.options.infinite &&
                        (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? (t.direction = 0) : 0 === t.direction && ((e = t.currentSlide - t.options.slidesToScroll), t.currentSlide - 1 == 0 && (t.direction = 1))),
                    t.slideHandler(e));
            }),
            (r.prototype.buildArrows = function () {
                var t = this;
                !0 === t.options.arrows &&
                    ((t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow")),
                    (t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow")),
                    t.slideCount > t.options.slidesToShow
                        ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                          !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (r.prototype.buildDots = function () {
                var t,
                    e,
                    i = this;
                if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                    for (i.$slider.addClass("slick-dotted"), e = c("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) e.append(c("<li />").append(i.options.customPaging.call(this, i, t)));
                    (i.$dots = e.appendTo(i.options.appendDots)), i.$dots.find("li").first().addClass("slick-active");
                }
            }),
            (r.prototype.buildOut = function () {
                var t = this;
                (t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.$slides.each(function (t, e) {
                        c(e)
                            .attr("data-slick-index", t)
                            .data("originalStyling", c(e).attr("style") || "");
                    }),
                    t.$slider.addClass("slick-slider"),
                    (t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                    t.$slideTrack.css("opacity", 0),
                    (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1),
                    c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.buildDots(),
                    t.updateDots(),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    !0 === t.options.draggable && t.$list.addClass("draggable");
            }),
            (r.prototype.buildRows = function () {
                var t,
                    e,
                    i,
                    o,
                    s,
                    n,
                    r,
                    a = this;
                if (((o = document.createDocumentFragment()), (n = a.$slider.children()), 0 < a.options.rows)) {
                    for (r = a.options.slidesPerRow * a.options.rows, s = Math.ceil(n.length / r), t = 0; t < s; t++) {
                        var l = document.createElement("div");
                        for (e = 0; e < a.options.rows; e++) {
                            var c = document.createElement("div");
                            for (i = 0; i < a.options.slidesPerRow; i++) {
                                var d = t * r + (e * a.options.slidesPerRow + i);
                                n.get(d) && c.appendChild(n.get(d));
                            }
                            l.appendChild(c);
                        }
                        o.appendChild(l);
                    }
                    a.$slider.empty().append(o),
                        a.$slider
                            .children()
                            .children()
                            .children()
                            .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                }
            }),
            (r.prototype.checkResponsive = function (t, e) {
                var i,
                    o,
                    s,
                    n = this,
                    r = !1,
                    a = n.$slider.width(),
                    l = window.innerWidth || c(window).width();
                if (("window" === n.respondTo ? (s = l) : "slider" === n.respondTo ? (s = a) : "min" === n.respondTo && (s = Math.min(l, a)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive)) {
                    for (i in ((o = null), n.breakpoints)) n.breakpoints.hasOwnProperty(i) && (!1 === n.originalSettings.mobileFirst ? s < n.breakpoints[i] && (o = n.breakpoints[i]) : s > n.breakpoints[i] && (o = n.breakpoints[i]));
                    null !== o
                        ? (null !== n.activeBreakpoint && o === n.activeBreakpoint && !e) ||
                          ((n.activeBreakpoint = o),
                          "unslick" === n.breakpointSettings[o] ? n.unslick(o) : ((n.options = c.extend({}, n.originalSettings, n.breakpointSettings[o])), !0 === t && (n.currentSlide = n.options.initialSlide), n.refresh(t)),
                          (r = o))
                        : null !== n.activeBreakpoint && ((n.activeBreakpoint = null), (n.options = n.originalSettings), !0 === t && (n.currentSlide = n.options.initialSlide), n.refresh(t), (r = o)),
                        t || !1 === r || n.$slider.trigger("breakpoint", [n, r]);
                }
            }),
            (r.prototype.changeSlide = function (t, e) {
                var i,
                    o,
                    s = this,
                    n = c(t.currentTarget);
                switch ((n.is("a") && t.preventDefault(), n.is("li") || (n = n.closest("li")), (i = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll), t.data.message)) {
                    case "previous":
                        (o = 0 == i ? s.options.slidesToScroll : s.options.slidesToShow - i), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, e);
                        break;
                    case "next":
                        (o = 0 == i ? s.options.slidesToScroll : i), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, e);
                        break;
                    case "index":
                        var r = 0 === t.data.index ? 0 : t.data.index || n.index() * s.options.slidesToScroll;
                        s.slideHandler(s.checkNavigable(r), !1, e), n.children().trigger("focus");
                        break;
                    default:
                        return;
                }
            }),
            (r.prototype.checkNavigable = function (t) {
                var e, i;
                if (((i = 0), t > (e = this.getNavigableIndexes())[e.length - 1])) t = e[e.length - 1];
                else
                    for (var o in e) {
                        if (t < e[o]) {
                            t = i;
                            break;
                        }
                        i = e[o];
                    }
                return t;
            }),
            (r.prototype.cleanUpEvents = function () {
                var t = this;
                t.options.dots &&
                    null !== t.$dots &&
                    (c("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", c.proxy(t.interrupt, t, !0)).off("mouseleave.slick", c.proxy(t.interrupt, t, !1)),
                    !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
                    t.$slider.off("focus.slick blur.slick"),
                    !0 === t.options.arrows &&
                        t.slideCount > t.options.slidesToShow &&
                        (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
                        !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
                    t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                    t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                    t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                    t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                    t.$list.off("click.slick", t.clickHandler),
                    c(document).off(t.visibilityChange, t.visibility),
                    t.cleanUpSlideEvents(),
                    !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler),
                    c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                    c(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                    c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                    c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
            }),
            (r.prototype.cleanUpSlideEvents = function () {
                var t = this;
                t.$list.off("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", c.proxy(t.interrupt, t, !1));
            }),
            (r.prototype.cleanUpRows = function () {
                var t;
                0 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t));
            }),
            (r.prototype.clickHandler = function (t) {
                !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
            }),
            (r.prototype.destroy = function (t) {
                var e = this;
                e.autoPlayClear(),
                    (e.touchObject = {}),
                    e.cleanUpEvents(),
                    c(".slick-cloned", e.$slider).detach(),
                    e.$dots && e.$dots.remove(),
                    e.$prevArrow &&
                        e.$prevArrow.length &&
                        (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
                    e.$nextArrow &&
                        e.$nextArrow.length &&
                        (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
                    e.$slides &&
                        (e.$slides
                            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                            .removeAttr("aria-hidden")
                            .removeAttr("data-slick-index")
                            .each(function () {
                                c(this).attr("style", c(this).data("originalStyling"));
                            }),
                        e.$slideTrack.children(this.options.slide).detach(),
                        e.$slideTrack.detach(),
                        e.$list.detach(),
                        e.$slider.append(e.$slides)),
                    e.cleanUpRows(),
                    e.$slider.removeClass("slick-slider"),
                    e.$slider.removeClass("slick-initialized"),
                    e.$slider.removeClass("slick-dotted"),
                    (e.unslicked = !0),
                    t || e.$slider.trigger("destroy", [e]);
            }),
            (r.prototype.disableTransition = function (t) {
                var e = {};
                (e[this.transitionType] = ""), !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e);
            }),
            (r.prototype.fadeSlide = function (t, e) {
                var i = this;
                !1 === i.cssTransitions
                    ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
                    : (i.applyTransition(t),
                      i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
                      e &&
                          setTimeout(function () {
                              i.disableTransition(t), e.call();
                          }, i.options.speed));
            }),
            (r.prototype.fadeSlideOut = function (t) {
                var e = this;
                !1 === e.cssTransitions ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
            }),
            (r.prototype.filterSlides = r.prototype.slickFilter = function (t) {
                var e = this;
                null !== t && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit());
            }),
            (r.prototype.focusHandler = function () {
                var i = this;
                i.$slider
                    .off("focus.slick blur.slick")
                    .on("focus.slick", "*", function (t) {
                        var e = c(this);
                        setTimeout(function () {
                            i.options.pauseOnFocus && e.is(":focus") && ((i.focussed = !0), i.autoPlay());
                        }, 0);
                    })
                    .on("blur.slick", "*", function (t) {
                        c(this);
                        i.options.pauseOnFocus && ((i.focussed = !1), i.autoPlay());
                    });
            }),
            (r.prototype.getCurrent = r.prototype.slickCurrentSlide = function () {
                return this.currentSlide;
            }),
            (r.prototype.getDotCount = function () {
                var t = this,
                    e = 0,
                    i = 0,
                    o = 0;
                if (!0 === t.options.infinite)
                    if (t.slideCount <= t.options.slidesToShow) ++o;
                    else for (; e < t.slideCount; ) ++o, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                else if (!0 === t.options.centerMode) o = t.slideCount;
                else if (t.options.asNavFor) for (; e < t.slideCount; ) ++o, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                else o = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
                return o - 1;
            }),
            (r.prototype.getLeft = function (t) {
                var e,
                    i,
                    o,
                    s,
                    n = this,
                    r = 0;
                return (
                    (n.slideOffset = 0),
                    (i = n.$slides.first().outerHeight(!0)),
                    !0 === n.options.infinite
                        ? (n.slideCount > n.options.slidesToShow &&
                              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
                              (s = -1),
                              !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? (s = -1.5) : 1 === n.options.slidesToShow && (s = -2)),
                              (r = i * n.options.slidesToShow * s)),
                          n.slideCount % n.options.slidesToScroll != 0 &&
                              t + n.options.slidesToScroll > n.slideCount &&
                              n.slideCount > n.options.slidesToShow &&
                              (r =
                                  t > n.slideCount
                                      ? ((n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1), (n.options.slidesToShow - (t - n.slideCount)) * i * -1)
                                      : ((n.slideOffset = (n.slideCount % n.options.slidesToScroll) * n.slideWidth * -1), (n.slideCount % n.options.slidesToScroll) * i * -1)))
                        : t + n.options.slidesToShow > n.slideCount && ((n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth), (r = (t + n.options.slidesToShow - n.slideCount) * i)),
                    n.slideCount <= n.options.slidesToShow && (r = n.slideOffset = 0),
                    !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
                        ? (n.slideOffset = (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 - (n.slideWidth * n.slideCount) / 2)
                        : !0 === n.options.centerMode && !0 === n.options.infinite
                        ? (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth)
                        : !0 === n.options.centerMode && ((n.slideOffset = 0), (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
                    (e = !1 === n.options.vertical ? t * n.slideWidth * -1 + n.slideOffset : t * i * -1 + r),
                    !0 === n.options.variableWidth &&
                        ((o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow)),
                        (e = !0 === n.options.rtl ? (o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0) : o[0] ? -1 * o[0].offsetLeft : 0),
                        !0 === n.options.centerMode &&
                            ((o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1)),
                            (e = !0 === n.options.rtl ? (o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0) : o[0] ? -1 * o[0].offsetLeft : 0),
                            (e += (n.$list.width() - o.outerWidth()) / 2))),
                    e
                );
            }),
            (r.prototype.getOption = r.prototype.slickGetOption = function (t) {
                return this.options[t];
            }),
            (r.prototype.getNavigableIndexes = function () {
                var t,
                    e = this,
                    i = 0,
                    o = 0,
                    s = [];
                for (t = !1 === e.options.infinite ? e.slideCount : ((i = -1 * e.options.slidesToScroll), (o = -1 * e.options.slidesToScroll), 2 * e.slideCount); i < t; )
                    s.push(i), (i = o + e.options.slidesToScroll), (o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                return s;
            }),
            (r.prototype.getSlick = function () {
                return this;
            }),
            (r.prototype.getSlideCount = function () {
                var s,
                    n,
                    t,
                    r = this;
                return (
                    (t = !0 === r.options.centerMode ? Math.floor(r.$list.width() / 2) : 0),
                    (n = -1 * r.swipeLeft + t),
                    !0 === r.options.swipeToSlide
                        ? (r.$slideTrack.find(".slick-slide").each(function (t, e) {
                              var i, o;
                              if (((i = c(e).outerWidth()), (o = e.offsetLeft), !0 !== r.options.centerMode && (o += i / 2), n < o + i)) return (s = e), !1;
                          }),
                          Math.abs(c(s).attr("data-slick-index") - r.currentSlide) || 1)
                        : r.options.slidesToScroll
                );
            }),
            (r.prototype.goTo = r.prototype.slickGoTo = function (t, e) {
                this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e);
            }),
            (r.prototype.init = function (t) {
                var e = this;
                c(e.$slider).hasClass("slick-initialized") ||
                    (c(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()),
                    t && e.$slider.trigger("init", [e]),
                    !0 === e.options.accessibility && e.initADA(),
                    e.options.autoplay && ((e.paused = !1), e.autoPlay());
            }),
            (r.prototype.initADA = function () {
                var o = this,
                    i = Math.ceil(o.slideCount / o.options.slidesToShow),
                    s = o.getNavigableIndexes().filter(function (t) {
                        return 0 <= t && t < o.slideCount;
                    });
                o.$slides.add(o.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    null !== o.$dots &&
                        (o.$slides.not(o.$slideTrack.find(".slick-cloned")).each(function (t) {
                            var e = s.indexOf(t);
                            if ((c(this).attr({ role: "tabpanel", id: "slick-slide" + o.instanceUid + t, tabindex: -1 }), -1 !== e)) {
                                var i = "slick-slide-control" + o.instanceUid + e;
                                c("#" + i).length && c(this).attr({ "aria-describedby": i });
                            }
                        }),
                        o.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function (t) {
                                var e = s[t];
                                c(this).attr({ role: "presentation" }),
                                    c(this)
                                        .find("button")
                                        .first()
                                        .attr({ role: "tab", id: "slick-slide-control" + o.instanceUid + t, "aria-controls": "slick-slide" + o.instanceUid + e, "aria-label": t + 1 + " of " + i, "aria-selected": null, tabindex: "-1" });
                            })
                            .eq(o.currentSlide)
                            .find("button")
                            .attr({ "aria-selected": "true", tabindex: "0" })
                            .end());
                for (var t = o.currentSlide, e = t + o.options.slidesToShow; t < e; t++) o.options.focusOnChange ? o.$slides.eq(t).attr({ tabindex: "0" }) : o.$slides.eq(t).removeAttr("tabindex");
                o.activateADA();
            }),
            (r.prototype.initArrowEvents = function () {
                var t = this;
                !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide),
                    t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide),
                    !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)));
            }),
            (r.prototype.initDotEvents = function () {
                var t = this;
                !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (c("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
                    !0 === t.options.dots &&
                        !0 === t.options.pauseOnDotsHover &&
                        t.slideCount > t.options.slidesToShow &&
                        c("li", t.$dots).on("mouseenter.slick", c.proxy(t.interrupt, t, !0)).on("mouseleave.slick", c.proxy(t.interrupt, t, !1));
            }),
            (r.prototype.initSlideEvents = function () {
                var t = this;
                t.options.pauseOnHover && (t.$list.on("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", c.proxy(t.interrupt, t, !1)));
            }),
            (r.prototype.initializeEvents = function () {
                var t = this;
                t.initArrowEvents(),
                    t.initDotEvents(),
                    t.initSlideEvents(),
                    t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler),
                    t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler),
                    t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler),
                    t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler),
                    t.$list.on("click.slick", t.clickHandler),
                    c(document).on(t.visibilityChange, c.proxy(t.visibility, t)),
                    !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)),
                    c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)),
                    c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                    c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                    c(t.setPosition);
            }),
            (r.prototype.initUI = function () {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show();
            }),
            (r.prototype.keyHandler = function (t) {
                var e = this;
                t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === t.keyCode && !0 === e.options.accessibility
                        ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } })
                        : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
            }),
            (r.prototype.lazyLoad = function () {
                var t,
                    e,
                    i,
                    n = this;
                function o(t) {
                    c("img[data-lazy]", t).each(function () {
                        var t = c(this),
                            e = c(this).attr("data-lazy"),
                            i = c(this).attr("data-srcset"),
                            o = c(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                            s = document.createElement("img");
                        (s.onload = function () {
                            t.animate({ opacity: 0 }, 100, function () {
                                i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                                    t.attr("src", e).animate({ opacity: 1 }, 200, function () {
                                        t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                    }),
                                    n.$slider.trigger("lazyLoaded", [n, t, e]);
                            });
                        }),
                            (s.onerror = function () {
                                t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, e]);
                            }),
                            (s.src = e);
                    });
                }
                if (
                    (!0 === n.options.centerMode
                        ? (i =
                              !0 === n.options.infinite
                                  ? (e = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2
                                  : ((e = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1))), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
                        : ((e = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide), (i = Math.ceil(e + n.options.slidesToShow)), !0 === n.options.fade && (0 < e && e--, i <= n.slideCount && i++)),
                    (t = n.$slider.find(".slick-slide").slice(e, i)),
                    "anticipated" === n.options.lazyLoad)
                )
                    for (var s = e - 1, r = i, a = n.$slider.find(".slick-slide"), l = 0; l < n.options.slidesToScroll; l++) s < 0 && (s = n.slideCount - 1), (t = (t = t.add(a.eq(s))).add(a.eq(r))), s--, r++;
                o(t),
                    n.slideCount <= n.options.slidesToShow
                        ? o(n.$slider.find(".slick-slide"))
                        : n.currentSlide >= n.slideCount - n.options.slidesToShow
                        ? o(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
                        : 0 === n.currentSlide && o(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
            }),
            (r.prototype.loadSlider = function () {
                var t = this;
                t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
            }),
            (r.prototype.next = r.prototype.slickNext = function () {
                this.changeSlide({ data: { message: "next" } });
            }),
            (r.prototype.orientationChange = function () {
                this.checkResponsive(), this.setPosition();
            }),
            (r.prototype.pause = r.prototype.slickPause = function () {
                this.autoPlayClear(), (this.paused = !0);
            }),
            (r.prototype.play = r.prototype.slickPlay = function () {
                var t = this;
                t.autoPlay(), (t.options.autoplay = !0), (t.paused = !1), (t.focussed = !1), (t.interrupted = !1);
            }),
            (r.prototype.postSlide = function (t) {
                var e = this;
                e.unslicked ||
                    (e.$slider.trigger("afterChange", [e, t]),
                    (e.animating = !1),
                    e.slideCount > e.options.slidesToShow && e.setPosition(),
                    (e.swipeLeft = null),
                    e.options.autoplay && e.autoPlay(),
                    !0 === e.options.accessibility && (e.initADA(), e.options.focusOnChange && c(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()));
            }),
            (r.prototype.prev = r.prototype.slickPrev = function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
            (r.prototype.preventDefault = function (t) {
                t.preventDefault();
            }),
            (r.prototype.progressiveLazyLoad = function (t) {
                t = t || 1;
                var e,
                    i,
                    o,
                    s,
                    n,
                    r = this,
                    a = c("img[data-lazy]", r.$slider);
                a.length
                    ? ((e = a.first()),
                      (i = e.attr("data-lazy")),
                      (o = e.attr("data-srcset")),
                      (s = e.attr("data-sizes") || r.$slider.attr("data-sizes")),
                      ((n = document.createElement("img")).onload = function () {
                          o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                              e.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                              !0 === r.options.adaptiveHeight && r.setPosition(),
                              r.$slider.trigger("lazyLoaded", [r, e, i]),
                              r.progressiveLazyLoad();
                      }),
                      (n.onerror = function () {
                          t < 3
                              ? setTimeout(function () {
                                    r.progressiveLazyLoad(t + 1);
                                }, 500)
                              : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i]), r.progressiveLazyLoad());
                      }),
                      (n.src = i))
                    : r.$slider.trigger("allImagesLoaded", [r]);
            }),
            (r.prototype.refresh = function (t) {
                var e,
                    i,
                    o = this;
                (i = o.slideCount - o.options.slidesToShow),
                    !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
                    o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
                    (e = o.currentSlide),
                    o.destroy(!0),
                    c.extend(o, o.initials, { currentSlide: e }),
                    o.init(),
                    t || o.changeSlide({ data: { message: "index", index: e } }, !1);
            }),
            (r.prototype.registerBreakpoints = function () {
                var t,
                    e,
                    i,
                    o = this,
                    s = o.options.responsive || null;
                if ("array" === c.type(s) && s.length) {
                    for (t in ((o.respondTo = o.options.respondTo || "window"), s))
                        if (((i = o.breakpoints.length - 1), s.hasOwnProperty(t))) {
                            for (e = s[t].breakpoint; 0 <= i; ) o.breakpoints[i] && o.breakpoints[i] === e && o.breakpoints.splice(i, 1), i--;
                            o.breakpoints.push(e), (o.breakpointSettings[e] = s[t].settings);
                        }
                    o.breakpoints.sort(function (t, e) {
                        return o.options.mobileFirst ? t - e : e - t;
                    });
                }
            }),
            (r.prototype.reinit = function () {
                var t = this;
                (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                    t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                    t.registerBreakpoints(),
                    t.setProps(),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.updateArrows(),
                    t.initArrowEvents(),
                    t.buildDots(),
                    t.updateDots(),
                    t.initDotEvents(),
                    t.cleanUpSlideEvents(),
                    t.initSlideEvents(),
                    t.checkResponsive(!1, !0),
                    !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    t.setPosition(),
                    t.focusHandler(),
                    (t.paused = !t.options.autoplay),
                    t.autoPlay(),
                    t.$slider.trigger("reInit", [t]);
            }),
            (r.prototype.resize = function () {
                var t = this;
                c(window).width() !== t.windowWidth &&
                    (clearTimeout(t.windowDelay),
                    (t.windowDelay = window.setTimeout(function () {
                        (t.windowWidth = c(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
                    }, 50)));
            }),
            (r.prototype.removeSlide = r.prototype.slickRemove = function (t, e, i) {
                var o = this;
                if (((t = "boolean" == typeof t ? (!0 === (e = t) ? 0 : o.slideCount - 1) : !0 === e ? --t : t), o.slideCount < 1 || t < 0 || t > o.slideCount - 1)) return !1;
                o.unload(),
                    !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(t).remove(),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
            }),
            (r.prototype.setCSS = function (t) {
                var e,
                    i,
                    o = this,
                    s = {};
                !0 === o.options.rtl && (t = -t),
                    (e = "left" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (s[o.positionProp] = t),
                    !1 === o.transformsEnabled || (!(s = {}) === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + i + ")") : (s[o.animType] = "translate3d(" + e + ", " + i + ", 0px)")),
                    o.$slideTrack.css(s);
            }),
            (r.prototype.setDimensions = function () {
                var t = this;
                !1 === t.options.vertical
                    ? !0 === t.options.centerMode && t.$list.css({ padding: "0px " + t.options.centerPadding })
                    : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({ padding: t.options.centerPadding + " 0px" })),
                    (t.listWidth = t.$list.width()),
                    (t.listHeight = t.$list.height()),
                    !1 === t.options.vertical && !1 === t.options.variableWidth
                        ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length)))
                        : !0 === t.options.variableWidth
                        ? t.$slideTrack.width(5e3 * t.slideCount)
                        : ((t.slideWidth = Math.ceil(t.listWidth)), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
            }),
            (r.prototype.setFade = function () {
                var i,
                    o = this;
                o.$slides.each(function (t, e) {
                    (i = o.slideWidth * t * -1),
                        !0 === o.options.rtl ? c(e).css({ position: "relative", right: i, top: 0, zIndex: o.options.zIndex - 2, opacity: 0 }) : c(e).css({ position: "relative", left: i, top: 0, zIndex: o.options.zIndex - 2, opacity: 0 });
                }),
                    o.$slides.eq(o.currentSlide).css({ zIndex: o.options.zIndex - 1, opacity: 1 });
            }),
            (r.prototype.setHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.css("height", e);
                }
            }),
            (r.prototype.setOption = r.prototype.slickSetOption = function () {
                var t,
                    e,
                    i,
                    o,
                    s,
                    n = this,
                    r = !1;
                if (
                    ("object" === c.type(arguments[0])
                        ? ((i = arguments[0]), (r = arguments[1]), (s = "multiple"))
                        : "string" === c.type(arguments[0]) &&
                          ((o = arguments[1]), (r = arguments[2]), "responsive" === (i = arguments[0]) && "array" === c.type(arguments[1]) ? (s = "responsive") : void 0 !== arguments[1] && (s = "single")),
                    "single" === s)
                )
                    n.options[i] = o;
                else if ("multiple" === s)
                    c.each(i, function (t, e) {
                        n.options[t] = e;
                    });
                else if ("responsive" === s)
                    for (e in o)
                        if ("array" !== c.type(n.options.responsive)) n.options.responsive = [o[e]];
                        else {
                            for (t = n.options.responsive.length - 1; 0 <= t; ) n.options.responsive[t].breakpoint === o[e].breakpoint && n.options.responsive.splice(t, 1), t--;
                            n.options.responsive.push(o[e]);
                        }
                r && (n.unload(), n.reinit());
            }),
            (r.prototype.setPosition = function () {
                var t = this;
                t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t]);
            }),
            (r.prototype.setProps = function () {
                var t = this,
                    e = document.body.style;
                (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
                    "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
                    (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) || (!0 === t.options.useCSS && (t.cssTransitions = !0)),
                    t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : (t.options.zIndex = t.defaults.zIndex)),
                    void 0 !== e.OTransform && ((t.animType = "OTransform"), (t.transformType = "-o-transform"), (t.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                    void 0 !== e.MozTransform &&
                        ((t.animType = "MozTransform"), (t.transformType = "-moz-transform"), (t.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
                    void 0 !== e.webkitTransform &&
                        ((t.animType = "webkitTransform"), (t.transformType = "-webkit-transform"), (t.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                    void 0 !== e.msTransform && ((t.animType = "msTransform"), (t.transformType = "-ms-transform"), (t.transitionType = "msTransition"), void 0 === e.msTransform && (t.animType = !1)),
                    void 0 !== e.transform && !1 !== t.animType && ((t.animType = "transform"), (t.transformType = "transform"), (t.transitionType = "transition")),
                    (t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType);
            }),
            (r.prototype.setSlideClasses = function (t) {
                var e,
                    i,
                    o,
                    s,
                    n = this;
                if (((i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), n.$slides.eq(t).addClass("slick-current"), !0 === n.options.centerMode)) {
                    var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (e = Math.floor(n.options.slidesToShow / 2)),
                        !0 === n.options.infinite &&
                            (e <= t && t <= n.slideCount - 1 - e
                                ? n.$slides
                                      .slice(t - e + r, t + e + 1)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")
                                : ((o = n.options.slidesToShow + t),
                                  i
                                      .slice(o - e + 1 + r, o + e + 2)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")),
                            0 === t ? i.eq(n.options.slidesToShow + n.slideCount + 1).addClass("slick-center") : t === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")),
                        n.$slides.eq(t).addClass("slick-center");
                } else
                    0 <= t && t <= n.slideCount - n.options.slidesToShow
                        ? n.$slides
                              .slice(t, t + n.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : i.length <= n.options.slidesToShow
                        ? i.addClass("slick-active").attr("aria-hidden", "false")
                        : ((s = n.slideCount % n.options.slidesToShow),
                          (o = !0 === n.options.infinite ? n.options.slidesToShow + t : t),
                          n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - t < n.options.slidesToShow
                              ? i
                                    .slice(o - (n.options.slidesToShow - s), o + s)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : i
                                    .slice(o, o + n.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false"));
                ("ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad) || n.lazyLoad();
            }),
            (r.prototype.setupInfinite = function () {
                var t,
                    e,
                    i,
                    o = this;
                if ((!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && ((e = null), o.slideCount > o.options.slidesToShow))) {
                    for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1)
                        (e = t - 1),
                            c(o.$slides[e])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", e - o.slideCount)
                                .prependTo(o.$slideTrack)
                                .addClass("slick-cloned");
                    for (t = 0; t < i + o.slideCount; t += 1)
                        (e = t),
                            c(o.$slides[e])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", e + o.slideCount)
                                .appendTo(o.$slideTrack)
                                .addClass("slick-cloned");
                    o.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            c(this).attr("id", "");
                        });
                }
            }),
            (r.prototype.interrupt = function (t) {
                t || this.autoPlay(), (this.interrupted = t);
            }),
            (r.prototype.selectHandler = function (t) {
                var e = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide"),
                    i = parseInt(e.attr("data-slick-index"));
                (i = i || 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i);
            }),
            (r.prototype.slideHandler = function (t, e, i) {
                var o,
                    s,
                    n,
                    r,
                    a,
                    l,
                    c = this;
                if (((e = e || !1), !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === t))))
                    if (
                        (!1 === e && c.asNavFor(t),
                        (o = t),
                        (a = c.getLeft(o)),
                        (r = c.getLeft(c.currentSlide)),
                        (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
                        !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                    )
                        !1 === c.options.fade &&
                            ((o = c.currentSlide),
                            !0 !== i && c.slideCount > c.options.slidesToShow
                                ? c.animateSlide(r, function () {
                                      c.postSlide(o);
                                  })
                                : c.postSlide(o));
                    else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                        !1 === c.options.fade &&
                            ((o = c.currentSlide),
                            !0 !== i && c.slideCount > c.options.slidesToShow
                                ? c.animateSlide(r, function () {
                                      c.postSlide(o);
                                  })
                                : c.postSlide(o));
                    else {
                        if (
                            (c.options.autoplay && clearInterval(c.autoPlayTimer),
                            (s =
                                o < 0
                                    ? c.slideCount % c.options.slidesToScroll != 0
                                        ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                                        : c.slideCount + o
                                    : o >= c.slideCount
                                    ? c.slideCount % c.options.slidesToScroll != 0
                                        ? 0
                                        : o - c.slideCount
                                    : o),
                            (c.animating = !0),
                            c.$slider.trigger("beforeChange", [c, c.currentSlide, s]),
                            (n = c.currentSlide),
                            (c.currentSlide = s),
                            c.setSlideClasses(c.currentSlide),
                            c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide),
                            c.updateDots(),
                            c.updateArrows(),
                            !0 === c.options.fade)
                        )
                            return (
                                !0 !== i
                                    ? (c.fadeSlideOut(n),
                                      c.fadeSlide(s, function () {
                                          c.postSlide(s);
                                      }))
                                    : c.postSlide(s),
                                void c.animateHeight()
                            );
                        !0 !== i && c.slideCount > c.options.slidesToShow
                            ? c.animateSlide(a, function () {
                                  c.postSlide(s);
                              })
                            : c.postSlide(s);
                    }
            }),
            (r.prototype.startLoad = function () {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()),
                    !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
                    t.$slider.addClass("slick-loading");
            }),
            (r.prototype.swipeDirection = function () {
                var t,
                    e,
                    i,
                    o,
                    s = this;
                return (
                    (t = s.touchObject.startX - s.touchObject.curX),
                    (e = s.touchObject.startY - s.touchObject.curY),
                    (i = Math.atan2(e, t)),
                    (o = Math.round((180 * i) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
                    o <= 45 && 0 <= o
                        ? !1 === s.options.rtl
                            ? "left"
                            : "right"
                        : o <= 360 && 315 <= o
                        ? !1 === s.options.rtl
                            ? "left"
                            : "right"
                        : 135 <= o && o <= 225
                        ? !1 === s.options.rtl
                            ? "right"
                            : "left"
                        : !0 === s.options.verticalSwiping
                        ? 35 <= o && o <= 135
                            ? "down"
                            : "up"
                        : "vertical"
                );
            }),
            (r.prototype.swipeEnd = function (t) {
                var e,
                    i,
                    o = this;
                if (((o.dragging = !1), (o.swiping = !1), o.scrolling)) return (o.scrolling = !1);
                if (((o.interrupted = !1), (o.shouldClick = !(10 < o.touchObject.swipeLength)), void 0 === o.touchObject.curX)) return !1;
                if ((!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe)) {
                    switch ((i = o.swipeDirection())) {
                        case "left":
                        case "down":
                            (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount()), (o.currentDirection = 0);
                            break;
                        case "right":
                        case "up":
                            (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount()), (o.currentDirection = 1);
                    }
                    "vertical" != i && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger("swipe", [o, i]));
                } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), (o.touchObject = {}));
            }),
            (r.prototype.swipeHandler = function (t) {
                var e = this;
                if (!(!1 === e.options.swipe || ("ontouchend" in document && !1 === e.options.swipe) || (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))))
                    switch (
                        ((e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1),
                        (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                        !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                        t.data.action)
                    ) {
                        case "start":
                            e.swipeStart(t);
                            break;
                        case "move":
                            e.swipeMove(t);
                            break;
                        case "end":
                            e.swipeEnd(t);
                    }
            }),
            (r.prototype.swipeMove = function (t) {
                var e,
                    i,
                    o,
                    s,
                    n,
                    r,
                    a = this;
                return (
                    (n = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
                    !(!a.dragging || a.scrolling || (n && 1 !== n.length)) &&
                        ((e = a.getLeft(a.currentSlide)),
                        (a.touchObject.curX = void 0 !== n ? n[0].pageX : t.clientX),
                        (a.touchObject.curY = void 0 !== n ? n[0].pageY : t.clientY),
                        (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
                        (r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                        !a.options.verticalSwiping && !a.swiping && 4 < r
                            ? !(a.scrolling = !0)
                            : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
                              (i = a.swipeDirection()),
                              void 0 !== t.originalEvent && 4 < a.touchObject.swipeLength && ((a.swiping = !0), t.preventDefault()),
                              (s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                              !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                              (o = a.touchObject.swipeLength),
                              (a.touchObject.edgeHit = !1) === a.options.infinite &&
                                  ((0 === a.currentSlide && "right" === i) || (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                                  ((o = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                              !1 === a.options.vertical ? (a.swipeLeft = e + o * s) : (a.swipeLeft = e + o * (a.$list.height() / a.listWidth) * s),
                              !0 === a.options.verticalSwiping && (a.swipeLeft = e + o * s),
                              !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
                );
            }),
            (r.prototype.swipeStart = function (t) {
                var e,
                    i = this;
                if (((i.interrupted = !0), 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)) return !(i.touchObject = {});
                void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
                    (i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX),
                    (i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY),
                    (i.dragging = !0);
            }),
            (r.prototype.unfilterSlides = r.prototype.slickUnfilter = function () {
                var t = this;
                null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit());
            }),
            (r.prototype.unload = function () {
                var t = this;
                c(".slick-cloned", t.$slider).remove(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                    t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                    t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }),
            (r.prototype.unslick = function (t) {
                this.$slider.trigger("unslick", [this, t]), this.destroy();
            }),
            (r.prototype.updateArrows = function () {
                var t = this;
                Math.floor(t.options.slidesToShow / 2),
                    !0 === t.options.arrows &&
                        t.slideCount > t.options.slidesToShow &&
                        !t.options.infinite &&
                        (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === t.currentSlide
                            ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode
                            ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : t.currentSlide >= t.slideCount - 1 &&
                              !0 === t.options.centerMode &&
                              (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }),
            (r.prototype.updateDots = function () {
                var t = this;
                null !== t.$dots &&
                    (t.$dots.find("li").removeClass("slick-active").end(),
                    t.$dots
                        .find("li")
                        .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
                        .addClass("slick-active"));
            }),
            (r.prototype.visibility = function () {
                this.options.autoplay && (document[this.hidden] ? (this.interrupted = !0) : (this.interrupted = !1));
            }),
            (c.fn.slick = function () {
                var t,
                    e,
                    i = this,
                    o = arguments[0],
                    s = Array.prototype.slice.call(arguments, 1),
                    n = i.length;
                for (t = 0; t < n; t++) if (("object" == typeof o || void 0 === o ? (i[t].slick = new r(i[t], o)) : (e = i[t].slick[o].apply(i[t].slick, s)), void 0 !== e)) return e;
                return i;
            });
    }),
    (function (l) {
        "use strict";
        var c = document.documentElement,
            t = document.body || document.getElementsByTagName("body")[0],
            e = document.getElementById("app"),
            d = l(window),
            i =
                (l(t),
                l(e),
                window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (t) {
                        setTimeout(t, 1e3 / 60);
                    });
        AOS.init({ offset: 120, delay: 100, duration: 450, easing: "ease-in-out-quad", once: !0, disable: "mobile" });
        var o = {
            onReady: function () {
                this.header(),
                    this.jarallax(),
                    this.slick(),
                    this.fancybox(),
                    this.ionRangeSlider(),
                    this.niceSelect(),
                    this.gallerySorting(),
                    this.quantityCounter(),
                    this.goodsFilterToggle(),
                    this.accordion(),
                    this.tabs(),
                    this.counters(),
                    this.scrollTop(),
                    this.contactForm();
            },
            onLoad: function () {
                this.googleMap();
            },
            header: function () {
                var t = document.getElementById("top-bar"),
                    e = document.getElementById("top-bar__navigation"),
                    i = document.getElementById("top-bar__navigation-toggler"),
                    o = l(t),
                    s = l(e),
                    n = l(i),
                    r = s.find(".submenu");
                if (0 < r.length) var a = r.parent("li").addClass("has-submenu");
                n.on("touchend click", function (t) {
                    t.preventDefault();
                    var e = l(this);
                    return e.toggleClass("is-active"), o.toggleClass("is-expanded"), e.hasClass("is-active") ? (c.style.overflow = "hidden") : (c.style.overflow = ""), !1;
                }),
                    a.on("click", function (t) {
                        var e = l(this),
                            i = e.children(".submenu");
                        n.is(":visible") && (i.is(":visible") ? (e.removeClass("drop_active"), i.slideUp("fast")) : (e.siblings().removeClass("drop_active").find(".submenu").slideUp("fast"), e.addClass("drop_active"), i.slideDown("fast")));
                    }),
                    d.on(
                        "resize",
                        (function (i, o, s) {
                            var n;
                            return function () {
                                var t = this,
                                    e = arguments;
                                clearTimeout(n),
                                    (n = setTimeout(function () {
                                        (n = null), s || i.apply(t, e);
                                    }, o)),
                                    s && !n && i.apply(t, e);
                            };
                        })(function () {
                            991 <= window.innerWidth && (o.removeClass("is-expanded"), n.removeClass("is-active"), r.removeAttr("style"), (c.style.overflow = ""));
                        }, 100)
                    );
            },
            jarallax: function () {
                if ("function" != typeof jarallax) return console.error("Error: jarallax is not a function. Be sure to include 'jarallax.js'");
                var t = document.querySelectorAll(".jarallax");
                device.desktop() && 0 < t.length && jarallax(t, { type: "scroll", zIndex: -20 });
            },
            slick: function () {
                if (!l.fn.slick) return console.error("Error: slick is not a function. Be sure to include 'slick.js'");
                var t = l(".js-slick");
                0 < !t.length ||
                    t.each(function (t, e) {
                        l(e)
                            .on("init", function (t, e) {})
                            .slick({
                                autoplay: !0,
                                autoplaySpeed: 3e3,
                                adaptiveHeight: !0,
                                dots: !0,
                                arrows: !1,
                                speed: 800,
                                mobileFirst: !0,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                touchThreshold: 15,
                                prevArrow: '<i class="fontello-left-open slick-prev"></i>',
                                nextArrow: '<i class="fontello-right-open slick-next"></i>',
                            });
                    });
            },
            fancybox: function () {
                if (!l.fn.fancybox) return console.error("Error: fancybox is not a function. Be sure to include 'fancybox.js'");
                var t = l("[data-fancybox]");
                0 < !t.length || t.fancybox({ buttons: ["slideShow", "fullScreen", "thumbs", "close"], loop: !0, protect: !0, wheel: !1, transitionEffect: "tube" });
            },
            ionRangeSlider: function () {
                if (!l.fn.ionRangeSlider) return console.error("Error: ionRangeSlider is not a function. Be sure to include 'ion.rangeSlider.js'");
                var t = l(".js-range-slider");
                if (!(0 < !t.length)) {
                    var e = l(".range-slider-min-value"),
                        i = l(".range-slider-max-value");
                    t.ionRangeSlider({
                        onStart: function (t) {},
                        onChange: function (t) {
                            e.val(t.from), i.val(t.to);
                        },
                        onFinish: function (t) {},
                        onUpdate: function (t) {},
                    });
                }
            },
            niceSelect: function () {
                if (!l.fn.niceSelect) return console.error("Error: niceSelect is not a function. Be sure to include 'nice-select.js'");
                var t = l(".js-select");
                0 < !t.length || t.niceSelect();
            },
            gallerySorting: function () {
                var t = document.getElementById("gallery-set"),
                    o = l(t);
                if (!(0 < !o.length)) {
                    var s = l(".js-isotope");
                    o.find("a").on("click", function (t) {
                        var e = l(this),
                            i = e.data("cat");
                        return o.find(".selected").removeClass("selected"), e.addClass("selected"), "*" !== i && (i = "." + i), s.isotope({ filter: i }), !1;
                    });
                }
            },
            quantityCounter: function () {
                var t = l(".js-quantity-counter");
                0 < !t.length ||
                    t.each(function (t, e) {
                        var i = l(e),
                            o = i.children(".__q-input"),
                            s = i.children(".__btn--minus"),
                            n = i.children(".__btn--plus"),
                            r = 0;
                        s.on("click touchend", function (t) {
                            return t.preventDefault(), t.stopPropagation(), (r = (r = parseInt(o.val()) - 1) < 1 ? 1 : r), o.val(r), o.change(), !1;
                        }),
                            n.on("click touchend", function (t) {
                                return t.preventDefault(), t.stopPropagation(), o.val(parseInt(o.val()) + 1), o.change(), !1;
                            });
                    });
            },
            goodsFilterToggle: function () {
                var t = l(".goods-filter");
                if (!(0 < !t.length)) {
                    var e = l(".js-toggle-filter"),
                        i = !1;
                    e.on("click", function () {
                        return (
                            (i = !i) ? (t.addClass("is-active"), (c.style.overflow = "hidden")) : (t.removeClass("is-active"), (c.style.overflow = "")),
                            90 <= (window.pageYOffset || document.documentElement.scrollTop) && t.addClass("scrolled"),
                            !1
                        );
                    });
                }
            },
            accordion: function () {
                var t = l(".accordion-container");
                if (!(0 < !t.length)) {
                    var s = t.find(".accordion-item"),
                        e = t.find(".accordion-toggler");
                    t.each(function () {
                        l(this).find(".accordion-item:eq(0)").addClass("active");
                    }),
                        e.on("click", function (t) {
                            t.preventDefault();
                            var e = l(this),
                                i = e.parent(),
                                o = e.next("article");
                            return i.toggleClass("active").siblings(s).removeClass("active").find("article").not(o).slideUp(), o.stop(!1, !0).slideToggle(), !1;
                        });
                }
            },
            tabs: function () {
                var t = l(".tab-container");
                if (!(0 < !t.length)) {
                    var s = t.find("nav a");
                    t.each(function () {
                        l(this).find("nav a:eq(0)").addClass("active").end().find(".tab-content__item:eq(0)").addClass("is-visible");
                    }),
                        s.on("click", function (t) {
                            t.preventDefault();
                            var e = l(this),
                                i = e.index(),
                                o = e.closest(".tab-container");
                            return (
                                e.addClass("active").siblings(s).removeClass("active"),
                                o
                                    .find(".tab-content__item.is-visible")
                                    .removeClass("is-visible")
                                    .end()
                                    .find(".tab-content__item:eq(" + i + ")")
                                    .addClass("is-visible"),
                                !1
                            );
                        });
                }
            },
            counters: function () {
                var t = l(".js-count");
                function e() {
                    t.each(function () {
                        var t = l(this);
                        t.is_on_screen() && !t.hasClass("animate") && t.addClass("animate").countTo({ from: 0, speed: 2e3, refreshInterval: 100 });
                    });
                }
                0 < !t.length ||
                    (e(),
                    d.on("scroll", function (t) {
                        i
                            ? i(function () {
                                  e();
                              })
                            : e();
                    }));
            },
            googleMap: function () {
                var o = l(".g_map");
                if (!(0 < !o.length)) {
                    var t,
                        e = o.attr("data-api-key");
                    (t = e ? "https://maps.google.com/maps/api/js?key=" + e + "&sensor=false" : "https://maps.google.com/maps/api/js?sensor=false"),
                        l.getScript(t, function (t, e, i) {
                            o.each(function () {
                                var t = l(this),
                                    e = new google.maps.LatLng(t.attr("data-longitude"), t.attr("data-latitude")),
                                    i = t.attr("data-marker"),
                                    o = { zoom: 14, center: e, mapTypeId: google.maps.MapTypeId.ROADMAP, mapTypeControl: !1, scrollwheel: !1, draggable: !0, panControl: !1, zoomControl: !1, disableDefaultUI: !0 },
                                    s = new google.maps.Map(t[0], o),
                                    n = new google.maps.StyledMapType([{ featureType: "all", elementType: "all", stylers: [{ saturation: -100 }] }], { name: "Grayscale" });
                                s.mapTypes.set("Grayscale", n), s.setMapTypeId("Grayscale");
                                new google.maps.Marker({ map: s, icon: { size: new google.maps.Size(59, 69), origin: new google.maps.Point(0, 0), anchor: new google.maps.Point(0, 69), url: i }, position: e });
                                google.maps.event.addDomListener(window, "resize", function () {
                                    var t = s.getCenter();
                                    google.maps.event.trigger(s, "resize"), s.setCenter(t);
                                });
                            });
                        });
                }
            },
            scrollTo: function () {
                l('a[href*="#"]')
                    .not('[href="#"]')
                    .not('[href="#0"]')
                    .on("touchend click", function (t) {
                        l(this);
                        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                            var e = l(this.hash);
                            return (
                                (e = e.length ? e : l("[name=" + this.hash.slice(1) + "]")).length &&
                                    l("html,body")
                                        .stop()
                                        .animate({ scrollTop: e.offset().top - 135 }, 1e3),
                                !1
                            );
                        }
                    });
            },
            scrollTop: function () {
                var t = document.getElementById("btn-to-top-wrap"),
                    e = l(t);
                if (!(0 < !e.length)) {
                    var i = document.getElementById("btn-to-top"),
                        o = l(i),
                        s = o.data("visible-offset");
                    o.on("click", function (t) {
                        return t.preventDefault(), l("body,html").stop().animate({ scrollTop: 0 }, 1500), !1;
                    }),
                        d
                            .on(
                                "scroll",
                                (function (i, o, s) {
                                    var n,
                                        r,
                                        a,
                                        l,
                                        c = 0;
                                    s = s || {};
                                    function d() {
                                        (c = !1 === s.leading ? 0 : h()), (n = null), (l = i.apply(r, a)), n || (r = a = null);
                                    }
                                    function t() {
                                        var t = h();
                                        c || !1 !== s.leading || (c = t);
                                        var e = o - (t - c);
                                        return (r = this), (a = arguments), e <= 0 || o < e ? (n && (clearTimeout(n), (n = null)), (c = t), (l = i.apply(r, a)), n || (r = a = null)) : n || !1 === s.trailing || (n = setTimeout(d, e)), l;
                                    }
                                    return (
                                        (t.cancel = function () {
                                            clearTimeout(n), (c = 0), (n = r = a = null);
                                        }),
                                        t
                                    );
                                })(function (t) {
                                    d.scrollTop() > s ? e.is(":hidden") && e.fadeIn() : e.is(":visible") && e.fadeOut();
                                }, 400)
                            )
                            .scroll();
                }
            },
            contactForm: function () {
                var t = l(".js-contact-form");
                0 < !t.length ||
                    t.each(function (t, e) {
                        l(e).on("submit", function () {
                            var e = l(this),
                                t = e.serialize(),
                                i = e.find(".form__note");
                            return (
                                l.ajax({
                                    type: "POST",
                                    url: "send_mail/contact_process.php",
                                    data: t,
                                    success: function (t) {
                                        i.html('<span style="color: green"><br/>Your message has been sent. Thank you!</span>'),
                                            e.get(0).reset(),
                                            setTimeout(function () {
                                                i.html("");
                                            }, 3e3);
                                    },
                                    error: function (t) {
                                        var e = '<span style="color: red"><br/>Your message not sent! Error: "' + t.responseJSON.message + '"</span>';
                                        i.html(e);
                                    },
                                    complete: function () {},
                                }),
                                !1
                            );
                        });
                    });
            },
        };
        function h() {
            return new Date().getTime();
        }
        l(document).ready(function () {
            o.onReady();
        }),
            d.on("load", function () {
                o.onLoad();
                var t = l(".js-isotope");
                0 < t.length && l.fn.isotope && t.isotope("layout");
            }),
            (l.fn.is_on_screen = function () {
                var t = { top: d.scrollTop(), left: d.scrollLeft() };
                (t.right = t.left + d.width()), (t.bottom = t.top + d.height());
                var e = this.offset();
                return (e.right = e.left + this.outerWidth()), (e.bottom = e.top + this.outerHeight()), !(t.right < e.left || t.left > e.right || t.bottom < e.top || t.top > e.bottom);
            });
    })(jQuery);
//# sourceMappingURL=main.min.js.map
