/* cSpell: disable */
"use strict";
(() => {
    var To = Object.create;
    var Pr = Object.defineProperty;
    var _o = Object.getOwnPropertyDescriptor;
    var Ao = Object.getOwnPropertyNames, ot = Object.getOwnPropertySymbols, Mo = Object.getPrototypeOf,
        it = Object.prototype.hasOwnProperty, Lo = Object.prototype.propertyIsEnumerable;
    var nt = (e, r, t) => r in e ? Pr(e, r, {enumerable: !0, configurable: !0, writable: !0, value: t}) : e[r] = t,
        Ie = (e, r) => {
            for (var t in r || (r = {})) it.call(r, t) && nt(e, t, r[t]);
            if (ot) for (var t of ot(r)) Lo.call(r, t) && nt(e, t, r[t]);
            return e
        };
    var Ce = (e, r) => () => (r || e((r = {exports: {}}).exports, r), r.exports);
    var Io = (e, r, t, o) => {
        if (r && typeof r == "object" || typeof r == "function") for (let n of Ao(r)) !it.call(e, n) && n !== t && Pr(e, n, {
            get: () => r[n], enumerable: !(o = _o(r, n)) || o.enumerable
        });
        return e
    };
    var at = (e, r, t) => (t = e != null ? To(Mo(e)) : {}, Io(r || !e || !e.__esModule ? Pr(t, "default", {
        value: e, enumerable: !0
    }) : t, e));
    var Ge = Ce(ee => {
        (function () {
            var e, r, t, o, n, i, c, u, s, a, f, p, d, l, m, h, b, w, E, H;
            H = 150, a = 20, E = 150, s = .75, ee.score = function (v, x, S) {
                var T, y, g, _;
                return y = S.preparedQuery, T = S.allowErrors, T || n(v, y.core_lw, y.core_up) ? (_ = v.toLowerCase(), g = r(v, _, y), Math.ceil(g)) : 0
            }, ee.isMatch = n = function (v, x, S) {
                var T, y, g, _, W, U, C;
                if (g = v.length, _ = x.length, !g || _ > g) return !1;
                for (T = -1, y = -1; ++y < _;) {
                    for (W = x.charCodeAt(y), U = S.charCodeAt(y); ++T < g && (C = v.charCodeAt(T), !(C === W || C === U));) ;
                    if (T === g) return !1
                }
                return !0
            }, ee.computeScore = r = function (v, x, S) {
                var T, y, g, _, W, U, C, j, L, D, N, ie, Q, le, ye, ae, Ee, me, Mr, Le, Be, Lr, Ir, Cr;
                if (ye = S.query, ae = S.query_lw, D = v.length, Q = ye.length, T = f(v, x, ye, ae), y = T.score, T.count === Q) return l(Q, D, y, T.pos);
                if (le = x.indexOf(ae), le > -1) return m(v, x, ye, ae, le, Q, D);
                for (Le = new Array(Q), W = new Array(Q), Cr = w(Q, D), N = Math.ceil(s * Q) + 5, ie = N, C = !0, L = -1; ++L < Q;) Le[L] = 0, W[L] = 0;
                for (j = -1; ++j < D;) {
                    if (Lr = x[j], !Lr.charCodeAt(0) in S.charCodes) {
                        if (C) {
                            for (L = -1; ++L < Q;) W[L] = 0;
                            C = !1
                        }
                        continue
                    }
                    for (me = 0, Mr = 0, _ = 0, Ee = !0, C = !0, L = -1; ++L < Q;) {
                        if (Be = Le[L], Be > me && (me = Be), U = 0, ae[L] === Lr) if (Ir = u(j, v, x), U = _ > 0 ? _ : d(v, x, ye, ae, j, L, Ir), g = Mr + p(j, L, Ir, y, U), g > me) me = g, ie = N; else {
                            if (Ee && --ie <= 0) return Math.max(me, Le[Q - 1]) * Cr;
                            Ee = !1
                        }
                        Mr = Be, _ = W[L], W[L] = U, Le[L] = me
                    }
                }
                return me = Le[Q - 1], me * Cr
            }, ee.isWordStart = u = function (v, x, S) {
                var T, y;
                return v === 0 ? !0 : (T = x[v], y = x[v - 1], i(y) || T !== S[v] && y === S[v - 1])
            }, ee.isWordEnd = c = function (v, x, S, T) {
                var y, g;
                return v === T - 1 ? !0 : (y = x[v], g = x[v + 1], i(g) || y === S[v] && g !== S[v + 1])
            }, i = function (v) {
                return v === " " || v === "." || v === "-" || v === "_" || v === "/" || v === "\\"
            }, b = function (v) {
                var x;
                return v < a ? (x = a - v, 100 + x * x) : Math.max(100 + a - v, 0)
            }, ee.scoreSize = w = function (v, x) {
                return E / (E + Math.abs(x - v))
            }, l = function (v, x, S, T) {
                return 2 * v * (H * S + b(T)) * w(v, x)
            }, ee.scorePattern = h = function (v, x, S, T, y) {
                var g, _;
                return _ = v, g = 6, S === v && (g += 2), T && (g += 3), y && (g += 1), v === x && (T && (S === x ? _ += 2 : _ += 1), y && (g += 1)), S + _ * (_ + g)
            }, ee.scoreCharacter = p = function (v, x, S, T, y) {
                var g;
                return g = b(v), S ? g + H * ((T > y ? T : y) + 10) : g + H * y
            }, ee.scoreConsecutives = d = function (v, x, S, T, y, g, _) {
                var W, U, C, j, L, D, N;
                for (U = v.length, j = S.length, C = U - y, L = j - g, W = C < L ? C : L, D = 0, N = 0, S[g] === v[y] && D++; ++N < W && T[++g] === x[++y];) S[g] === v[y] && D++;
                return N < W && y--, N === 1 ? 1 + 2 * D : h(N, j, D, _, c(y, v, x, U))
            }, ee.scoreExactMatch = m = function (v, x, S, T, y, g, _) {
                var W, U, C, j, L;
                for (L = u(y, v, x), L || (C = x.indexOf(T, y + 1), C > -1 && (L = u(C, v, x), L && (y = C))), U = -1, j = 0; ++U < g;) S[y + U] === v[U] && j++;
                return W = c(y + g - 1, v, x, _), l(g, _, h(g, g, j, L, W), y)
            }, e = function () {
                function v(x, S, T) {
                    this.score = x, this.pos = S, this.count = T
                }

                return v
            }(), t = new e(0, .1, 0), ee.scoreAcronyms = f = function (v, x, S, T) {
                var y, g, _, W, U, C, j, L, D, N, ie;
                if (U = v.length, C = S.length, !(U > 1 && C > 1)) return t;
                for (y = 0, N = 0, ie = 0, L = 0, _ = -1, W = -1; ++W < C;) {
                    if (j = T[W], i(j)) if (_ = x.indexOf(j, _ + 1), _ > -1) {
                        N++;
                        continue
                    } else break;
                    for (; ++_ < U;) if (j === x[_] && u(_, v, x)) {
                        S[W] === v[_] && L++, ie += _, y++;
                        break
                    }
                    if (_ === U) break
                }
                return y < 2 ? t : (g = y === C ? o(v, x, S, y) : !1, D = h(y, C, L, !0, g), new e(D, ie / y, y + N))
            }, o = function (v, x, S, T) {
                var y, g, _, W;
                if (_ = v.length, W = S.length, y = 0, _ > 12 * W) return !1;
                for (g = -1; ++g < _;) if (u(g, v, x) && ++y > T) return !1;
                return !0
            }
        }).call(ee)
    });
    var _r = Ce(Xe => {
        (function () {
            var e, r, t, o, n, i, c, u, s, a;
            a = Ge(), i = a.isMatch, e = a.computeScore, u = a.scoreSize, s = 20, t = 2.5, Xe.score = function (f, p, d) {
                var l, m, h, b;
                return m = d.preparedQuery, l = d.allowErrors, l || i(f, m.core_lw, m.core_up) ? (b = f.toLowerCase(), h = e(f, b, m), h = c(f, b, h, d), Math.ceil(h)) : 0
            }, c = function (f, p, d, l) {
                var m, h, b, w, E, H, v, x, S, T;
                if (d === 0) return 0;
                for (S = l.preparedQuery, T = l.useExtensionBonus, x = l.pathSeparator, E = f.length - 1; f[E] === x;) E--;
                if (b = f.lastIndexOf(x, E), v = E - b, H = 1, T && (H += n(p, S.ext, b, E, 2), d *= H), b === -1) return d;
                for (w = S.depth; b > -1 && w-- > 0;) b = f.lastIndexOf(x, b - 1);
                return h = b === -1 ? d : H * e(f.slice(b + 1, E + 1), p.slice(b + 1, E + 1), S), m = .5 * s / (s + r(f, E + 1, x)), m * h + (1 - m) * d * u(0, t * v)
            }, Xe.countDir = r = function (f, p, d) {
                var l, m;
                if (p < 1) return 0;
                for (l = 0, m = -1; ++m < p && f[m] === d;) ;
                for (; ++m < p;) if (f[m] === d) for (l++; ++m < p && f[m] === d;) ;
                return l
            }, Xe.getExtension = o = function (f) {
                var p;
                return p = f.lastIndexOf("."), p < 0 ? "" : f.substr(p + 1)
            }, n = function (f, p, d, l, m) {
                var h, b, w, E;
                if (!p.length || (E = f.lastIndexOf(".", l), !(E > d))) return 0;
                for (w = p.length, h = l - E, h < w && (w = h, h = p.length), E++, b = -1; ++b < w && f[E + b] === p[b];) ;
                return b === 0 && m > 0 ? .9 * n(f, p, d, E - 2, m - 1) : b / h
            }
        }).call(Xe)
    });
    var et = Ce((ao, co) => {
        (function () {
            var e, r, t, o, n, i, c, u;
            u = _r(), t = u.countDir, n = u.getExtension, co.exports = e = function () {
                function s(a, f) {
                    var p, d, l;
                    if (l = f != null ? f : {}, p = l.optCharRegEx, d = l.pathSeparator, !(a && a.length)) return null;
                    this.query = a, this.query_lw = a.toLowerCase(), this.core = r(a, p), this.core_lw = this.core.toLowerCase(), this.core_up = c(this.core), this.depth = t(a, a.length, d), this.ext = n(this.query_lw), this.charCodes = o(this.query_lw)
                }

                return s
            }(), i = /[ _\-:\/\\]/g, r = function (s, a) {
                return a == null && (a = i), s.replace(a, "")
            }, c = function (s) {
                var a, f, p, d;
                for (f = "", p = 0, d = s.length; p < d; p++) a = s[p], f += a.toUpperCase()[0];
                return f
            }, o = function (s) {
                var a, f, p;
                for (p = s.length, f = -1, a = []; ++f < p;) a[s.charCodeAt(f)] = !0;
                return a
            }
        }).call(ao)
    });
    var uo = Ce((so, fo) => {
        (function () {
            var e, r, t, o, n;
            o = Ge(), r = _r(), e = et(), t = function (i) {
                return i.candidate
            }, n = function (i, c) {
                return c.score - i.score
            }, fo.exports = function (i, c, u) {
                var s, a, f, p, d, l, m, h, b, w, E, H, v;
                for (h = [], f = u.key, d = u.maxResults, p = u.maxInners, E = u.usePathScoring, b = p != null && p > 0 ? p : i.length + 1, s = f != null, m = E ? r : o, H = 0, v = i.length; H < v && (a = i[H], w = s ? a[f] : a, !(!!w && (l = m.score(w, c, u), l > 0 && (h.push({
                    candidate: a, score: l
                }), !--b)))); H++) ;
                return h.sort(n), i = h.map(t), d != null && (i = i.slice(0, d)), i
            }
        }).call(so)
    });
    var po = Ce(Ar => {
        (function () {
            var e, r, t, o, n, i, c, u, s, a;
            a = Ge(), t = a.isMatch, o = a.isWordStart, s = a.scoreConsecutives, u = a.scoreCharacter, c = a.scoreAcronyms, Ar.match = n = function (f, p, d) {
                var l, m, h, b, w, E;
                return l = d.allowErrors, w = d.preparedQuery, b = d.pathSeparator, l || t(f, w.core_lw, w.core_up) ? (E = f.toLowerCase(), h = r(f, E, w), h.length === 0 || f.indexOf(b) > -1 && (m = e(f, E, w, b), h = i(h, m)), h) : []
            }, Ar.wrap = function (f, p, d) {
                var l, m, h, b, w, E, H, v, x;
                if (d.wrap != null && (x = d.wrap, E = x.tagClass, v = x.tagOpen, H = x.tagClose), E == null && (E = "highlight"), v == null && (v = '<strong class="' + E + '">'), H == null && (H = "</strong>"), f === p) return v + f + H;
                if (h = n(f, p, d), h.length === 0) return f;
                for (b = "", l = -1, w = 0; ++l < h.length;) {
                    for (m = h[l], m > w && (b += f.substring(w, m), w = m); ++l < h.length;) if (h[l] === m + 1) m++; else {
                        l--;
                        break
                    }
                    m++, m > w && (b += v, b += f.substring(w, m), b += H, w = m)
                }
                return w <= f.length - 1 && (b += f.substring(w)), b
            }, e = function (f, p, d, l) {
                var m, h, b;
                for (b = f.length - 1; f[b] === l;) b--;
                if (m = f.lastIndexOf(l, b), m === -1) return [];
                for (h = d.depth; h-- > 0;) if (m = f.lastIndexOf(l, m - 1), m === -1) return [];
                return m++, b++, r(f.slice(m, b), p.slice(m, b), d, m)
            }, i = function (f, p) {
                var d, l, m, h, b, w, E;
                if (b = f.length, w = p.length, w === 0) return f.slice();
                if (b === 0) return p.slice();
                for (m = -1, h = 0, l = p[h], E = []; ++m < b;) {
                    for (d = f[m]; l <= d && ++h < w;) l < d && E.push(l), l = p[h];
                    E.push(d)
                }
                for (; h < w;) E.push(p[h++]);
                return E
            }, r = function (f, p, d, l) {
                var m, h, b, w, E, H, v, x, S, T, y, g, _, W, U, C, j, L, D, N, ie, Q, le, ye, ae, Ee;
                for (l == null && (l = 0), L = d.query, D = d.query_lw, _ = f.length, C = L.length, E = c(f, p, L, D).score, Q = new Array(C), S = new Array(C), b = 0, w = 1, h = 2, m = 3, Ee = new Array(_ * C), j = -1, g = -1; ++g < C;) Q[g] = 0, S[g] = 0;
                for (y = -1; ++y < _;) for (N = 0, le = 0, x = 0, ye = p[y], g = -1; ++g < C;) T = 0, H = 0, ie = le, D[g] === ye && (ae = o(y, f, p), T = x > 0 ? x : s(f, p, L, D, y, g, ae), H = ie + u(y, g, ae, E, T)), le = Q[g], x = S[g], N > le ? U = h : (N = le, U = w), H > N ? (N = H, U = m) : T = 0, Q[g] = N, S[g] = T, Ee[++j] = N > 0 ? U : b;
                for (y = _ - 1, g = C - 1, j = y * C + g, v = !0, W = []; v && y >= 0 && g >= 0;) switch (Ee[j]) {
                    case w:
                        y--, j -= C;
                        break;
                    case h:
                        g--, j--;
                        break;
                    case m:
                        W.push(y + l), g--, y--, j -= C + 1;
                        break;
                    default:
                        v = !1
                }
                return W.reverse(), W
            }
        }).call(Ar)
    });
    var rt = Ce((lo, mo) => {
        (function () {
            var e, r, t, o, n, i, c, u;
            t = uo(), o = po(), u = Ge(), i = _r(), e = et(), c = null, r = (typeof process != "undefined" && process !== null ? process.platform : void 0) === "win32" ? "\\" : "/", mo.exports = {
                filter: function (s, a, f) {
                    return f == null && (f = {}), a != null && a.length && (s != null && s.length) ? (f = n(f, a), t(s, a, f)) : []
                }, score: function (s, a, f) {
                    return f == null && (f = {}), s != null && s.length && (a != null && a.length) ? (f = n(f, a), f.usePathScoring ? i.score(s, a, f) : u.score(s, a, f)) : 0
                }, match: function (s, a, f) {
                    var p, d, l;
                    return f == null && (f = {}), s ? a ? s === a ? function () {
                        l = [];
                        for (var m = 0, h = s.length; 0 <= h ? m < h : m > h; 0 <= h ? m++ : m--) l.push(m);
                        return l
                    }.apply(this) : (f = n(f, a), o.match(s, a, f)) : [] : []
                }, wrap: function (s, a, f) {
                    return f == null && (f = {}), s ? a ? (f = n(f, a), o.wrap(s, a, f)) : [] : []
                }, prepareQuery: function (s, a) {
                    return a == null && (a = {}), a = n(a, s), a.preparedQuery
                }
            }, n = function (s, a) {
                return s.allowErrors == null && (s.allowErrors = !1), s.usePathScoring == null && (s.usePathScoring = !0), s.useExtensionBonus == null && (s.useExtensionBonus = !1), s.pathSeparator == null && (s.pathSeparator = r), s.optCharRegEx == null && (s.optCharRegEx = null), s.wrap == null && (s.wrap = null), s.preparedQuery == null && (s.preparedQuery = c && c.query === a ? c : c = new e(a, s)), s
            }
        }).call(lo)
    });
    var Rr = function (e, r) {
        return Rr = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, o) {
            t.__proto__ = o
        } || function (t, o) {
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
        }, Rr(e, r)
    };

    function $(e, r) {
        if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        Rr(e, r);

        function t() {
            this.constructor = e
        }

        e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t)
    }

    function ct(e, r, t, o) {
        function n(i) {
            return i instanceof t ? i : new t(function (c) {
                c(i)
            })
        }

        return new (t || (t = Promise))(function (i, c) {
            function u(f) {
                try {
                    a(o.next(f))
                } catch (p) {
                    c(p)
                }
            }

            function s(f) {
                try {
                    a(o.throw(f))
                } catch (p) {
                    c(p)
                }
            }

            function a(f) {
                f.done ? i(f.value) : n(f.value).then(u, s)
            }

            a((o = o.apply(e, r || [])).next())
        })
    }

    function Ze(e, r) {
        var t = {
            label: 0, sent: function () {
                if (i[0] & 1) throw i[1];
                return i[1]
            }, trys: [], ops: []
        }, o, n, i, c = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
        return c.next = u(0), c.throw = u(1), c.return = u(2), typeof Symbol == "function" && (c[Symbol.iterator] = function () {
            return this
        }), c;

        function u(a) {
            return function (f) {
                return s([a, f])
            }
        }

        function s(a) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; c && (c = 0, a[0] && (t = 0)), t;) try {
                if (o = 1, n && (i = a[0] & 2 ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                switch (n = 0, i && (a = [a[0] & 2, i.value]), a[0]) {
                    case 0:
                    case 1:
                        i = a;
                        break;
                    case 4:
                        return t.label++, {value: a[1], done: !1};
                    case 5:
                        t.label++, n = a[1], a = [0];
                        continue;
                    case 7:
                        a = t.ops.pop(), t.trys.pop();
                        continue;
                    default:
                        if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                            t = 0;
                            continue
                        }
                        if (a[0] === 3 && (!i || a[1] > i[0] && a[1] < i[3])) {
                            t.label = a[1];
                            break
                        }
                        if (a[0] === 6 && t.label < i[1]) {
                            t.label = i[1], i = a;
                            break
                        }
                        if (i && t.label < i[2]) {
                            t.label = i[2], t.ops.push(a);
                            break
                        }
                        i[2] && t.ops.pop(), t.trys.pop();
                        continue
                }
                a = r.call(e, t)
            } catch (f) {
                a = [6, f], n = 0
            } finally {
                o = i = 0
            }
            if (a[0] & 5) throw a[1];
            return {value: a[0] ? a[1] : void 0, done: !0}
        }
    }

    function G(e) {
        var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], o = 0;
        if (t) return t.call(e);
        if (e && typeof e.length == "number") return {
            next: function () {
                return e && o >= e.length && (e = void 0), {value: e && e[o++], done: !e}
            }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function R(e, r) {
        var t = typeof Symbol == "function" && e[Symbol.iterator];
        if (!t) return e;
        var o = t.call(e), n, i = [], c;
        try {
            for (; (r === void 0 || r-- > 0) && !(n = o.next()).done;) i.push(n.value)
        } catch (u) {
            c = {error: u}
        } finally {
            try {
                n && !n.done && (t = o.return) && t.call(o)
            } finally {
                if (c) throw c.error
            }
        }
        return i
    }

    function k(e, r, t) {
        if (t || arguments.length === 2) for (var o = 0, n = r.length, i; o < n; o++) (i || !(o in r)) && (i || (i = Array.prototype.slice.call(r, 0, o)), i[o] = r[o]);
        return e.concat(i || Array.prototype.slice.call(r))
    }

    function Oe(e) {
        return this instanceof Oe ? (this.v = e, this) : new Oe(e)
    }

    function st(e, r, t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o = t.apply(e, r || []), n, i = [];
        return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", c), n[Symbol.asyncIterator] = function () {
            return this
        }, n;

        function c(l) {
            return function (m) {
                return Promise.resolve(m).then(l, p)
            }
        }

        function u(l, m) {
            o[l] && (n[l] = function (h) {
                return new Promise(function (b, w) {
                    i.push([l, h, b, w]) > 1 || s(l, h)
                })
            }, m && (n[l] = m(n[l])))
        }

        function s(l, m) {
            try {
                a(o[l](m))
            } catch (h) {
                d(i[0][3], h)
            }
        }

        function a(l) {
            l.value instanceof Oe ? Promise.resolve(l.value.v).then(f, p) : d(i[0][2], l)
        }

        function f(l) {
            s("next", l)
        }

        function p(l) {
            s("throw", l)
        }

        function d(l, m) {
            l(m), i.shift(), i.length && s(i[0][0], i[0][1])
        }
    }

    function ft(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r = e[Symbol.asyncIterator], t;
        return r ? r.call(e) : (e = typeof G == "function" ? G(e) : e[Symbol.iterator](), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function () {
            return this
        }, t);

        function o(i) {
            t[i] = e[i] && function (c) {
                return new Promise(function (u, s) {
                    c = e[i](c), n(u, s, c.done, c.value)
                })
            }
        }

        function n(i, c, u, s) {
            Promise.resolve(s).then(function (a) {
                i({value: a, done: u})
            }, c)
        }
    }

    function O(e) {
        return typeof e == "function"
    }

    function er(e) {
        var r = function (o) {
            Error.call(o), o.stack = new Error().stack
        }, t = e(r);
        return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
    }

    var rr = er(function (e) {
        return function (t) {
            e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function (o, n) {
                return n + 1 + ") " + o.toString()
            }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t
        }
    });

    function he(e, r) {
        if (e) {
            var t = e.indexOf(r);
            0 <= t && e.splice(t, 1)
        }
    }

    var ce = function () {
        function e(r) {
            this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null
        }

        return e.prototype.unsubscribe = function () {
            var r, t, o, n, i;
            if (!this.closed) {
                this.closed = !0;
                var c = this._parentage;
                if (c) if (this._parentage = null, Array.isArray(c)) try {
                    for (var u = G(c), s = u.next(); !s.done; s = u.next()) {
                        var a = s.value;
                        a.remove(this)
                    }
                } catch (h) {
                    r = {error: h}
                } finally {
                    try {
                        s && !s.done && (t = u.return) && t.call(u)
                    } finally {
                        if (r) throw r.error
                    }
                } else c.remove(this);
                var f = this.initialTeardown;
                if (O(f)) try {
                    f()
                } catch (h) {
                    i = h instanceof rr ? h.errors : [h]
                }
                var p = this._finalizers;
                if (p) {
                    this._finalizers = null;
                    try {
                        for (var d = G(p), l = d.next(); !l.done; l = d.next()) {
                            var m = l.value;
                            try {
                                ut(m)
                            } catch (h) {
                                i = i != null ? i : [], h instanceof rr ? i = k(k([], R(i)), R(h.errors)) : i.push(h)
                            }
                        }
                    } catch (h) {
                        o = {error: h}
                    } finally {
                        try {
                            l && !l.done && (n = d.return) && n.call(d)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                }
                if (i) throw new rr(i)
            }
        }, e.prototype.add = function (r) {
            var t;
            if (r && r !== this) if (this.closed) ut(r); else {
                if (r instanceof e) {
                    if (r.closed || r._hasParent(this)) return;
                    r._addParent(this)
                }
                (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r)
            }
        }, e.prototype._hasParent = function (r) {
            var t = this._parentage;
            return t === r || Array.isArray(t) && t.includes(r)
        }, e.prototype._addParent = function (r) {
            var t = this._parentage;
            this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r
        }, e.prototype._removeParent = function (r) {
            var t = this._parentage;
            t === r ? this._parentage = null : Array.isArray(t) && he(t, r)
        }, e.prototype.remove = function (r) {
            var t = this._finalizers;
            t && he(t, r), r instanceof e && r._removeParent(this)
        }, e.EMPTY = function () {
            var r = new e;
            return r.closed = !0, r
        }(), e
    }();
    var Hr = ce.EMPTY;

    function tr(e) {
        return e instanceof ce || e && "closed" in e && O(e.remove) && O(e.add) && O(e.unsubscribe)
    }

    function ut(e) {
        O(e) ? e() : e.unsubscribe()
    }

    var oe = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    };
    var Pe = {
        setTimeout: function (e, r) {
            for (var t = [], o = 2; o < arguments.length; o++) t[o - 2] = arguments[o];
            var n = Pe.delegate;
            return n != null && n.setTimeout ? n.setTimeout.apply(n, k([e, r], R(t))) : setTimeout.apply(void 0, k([e, r], R(t)))
        }, clearTimeout: function (e) {
            var r = Pe.delegate;
            return ((r == null ? void 0 : r.clearTimeout) || clearTimeout)(e)
        }, delegate: void 0
    };

    function or(e) {
        Pe.setTimeout(function () {
            var r = oe.onUnhandledError;
            if (r) r(e); else throw e
        })
    }

    function de() {
    }

    var pt = function () {
        return kr("C", void 0, void 0)
    }();

    function lt(e) {
        return kr("E", void 0, e)
    }

    function mt(e) {
        return kr("N", e, void 0)
    }

    function kr(e, r, t) {
        return {kind: e, value: r, error: t}
    }

    var Te = null;

    function Re(e) {
        if (oe.useDeprecatedSynchronousErrorHandling) {
            var r = !Te;
            if (r && (Te = {errorThrown: !1, error: null}), e(), r) {
                var t = Te, o = t.errorThrown, n = t.error;
                if (Te = null, o) throw n
            }
        } else e()
    }

    function ht(e) {
        oe.useDeprecatedSynchronousErrorHandling && Te && (Te.errorThrown = !0, Te.error = e)
    }

    var ze = function (e) {
        $(r, e);

        function r(t) {
            var o = e.call(this) || this;
            return o.isStopped = !1, t ? (o.destination = t, tr(t) && t.add(o)) : o.destination = Ho, o
        }

        return r.create = function (t, o, n) {
            return new _e(t, o, n)
        }, r.prototype.next = function (t) {
            this.isStopped ? Wr(mt(t), this) : this._next(t)
        }, r.prototype.error = function (t) {
            this.isStopped ? Wr(lt(t), this) : (this.isStopped = !0, this._error(t))
        }, r.prototype.complete = function () {
            this.isStopped ? Wr(pt, this) : (this.isStopped = !0, this._complete())
        }, r.prototype.unsubscribe = function () {
            this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
        }, r.prototype._next = function (t) {
            this.destination.next(t)
        }, r.prototype._error = function (t) {
            try {
                this.destination.error(t)
            } finally {
                this.unsubscribe()
            }
        }, r.prototype._complete = function () {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }, r
    }(ce);
    var Co = Function.prototype.bind;

    function Fr(e, r) {
        return Co.call(e, r)
    }

    var Po = function () {
        function e(r) {
            this.partialObserver = r
        }

        return e.prototype.next = function (r) {
            var t = this.partialObserver;
            if (t.next) try {
                t.next(r)
            } catch (o) {
                nr(o)
            }
        }, e.prototype.error = function (r) {
            var t = this.partialObserver;
            if (t.error) try {
                t.error(r)
            } catch (o) {
                nr(o)
            } else nr(r)
        }, e.prototype.complete = function () {
            var r = this.partialObserver;
            if (r.complete) try {
                r.complete()
            } catch (t) {
                nr(t)
            }
        }, e
    }(), _e = function (e) {
        $(r, e);

        function r(t, o, n) {
            var i = e.call(this) || this, c;
            if (O(t) || !t) c = {
                next: t != null ? t : void 0, error: o != null ? o : void 0, complete: n != null ? n : void 0
            }; else {
                var u;
                i && oe.useDeprecatedNextContext ? (u = Object.create(t), u.unsubscribe = function () {
                    return i.unsubscribe()
                }, c = {
                    next: t.next && Fr(t.next, u),
                    error: t.error && Fr(t.error, u),
                    complete: t.complete && Fr(t.complete, u)
                }) : c = t
            }
            return i.destination = new Po(c), i
        }

        return r
    }(ze);

    function nr(e) {
        oe.useDeprecatedSynchronousErrorHandling ? ht(e) : or(e)
    }

    function Ro(e) {
        throw e
    }

    function Wr(e, r) {
        var t = oe.onStoppedNotification;
        t && Pe.setTimeout(function () {
            return t(e, r)
        })
    }

    var Ho = {closed: !0, next: de, error: Ro, complete: de};
    var He = function () {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }();

    function X(e) {
        return e
    }

    function dt() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return jr(e)
    }

    function jr(e) {
        return e.length === 0 ? X : e.length === 1 ? e[0] : function (t) {
            return e.reduce(function (o, n) {
                return n(o)
            }, t)
        }
    }

    var I = function () {
        function e(r) {
            r && (this._subscribe = r)
        }

        return e.prototype.lift = function (r) {
            var t = new e;
            return t.source = this, t.operator = r, t
        }, e.prototype.subscribe = function (r, t, o) {
            var n = this, i = Fo(r) ? r : new _e(r, t, o);
            return Re(function () {
                var c = n, u = c.operator, s = c.source;
                i.add(u ? u.call(i, s) : s ? n._subscribe(i) : n._trySubscribe(i))
            }), i
        }, e.prototype._trySubscribe = function (r) {
            try {
                return this._subscribe(r)
            } catch (t) {
                r.error(t)
            }
        }, e.prototype.forEach = function (r, t) {
            var o = this;
            return t = vt(t), new t(function (n, i) {
                var c = new _e({
                    next: function (u) {
                        try {
                            r(u)
                        } catch (s) {
                            i(s), c.unsubscribe()
                        }
                    }, error: i, complete: n
                });
                o.subscribe(c)
            })
        }, e.prototype._subscribe = function (r) {
            var t;
            return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r)
        }, e.prototype[He] = function () {
            return this
        }, e.prototype.pipe = function () {
            for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
            return jr(r)(this)
        }, e.prototype.toPromise = function (r) {
            var t = this;
            return r = vt(r), new r(function (o, n) {
                var i;
                t.subscribe(function (c) {
                    return i = c
                }, function (c) {
                    return n(c)
                }, function () {
                    return o(i)
                })
            })
        }, e.create = function (r) {
            return new e(r)
        }, e
    }();

    function vt(e) {
        var r;
        return (r = e != null ? e : oe.Promise) !== null && r !== void 0 ? r : Promise
    }

    function ko(e) {
        return e && O(e.next) && O(e.error) && O(e.complete)
    }

    function Fo(e) {
        return e && e instanceof ze || ko(e) && tr(e)
    }

    function Wo(e) {
        return O(e == null ? void 0 : e.lift)
    }

    function M(e) {
        return function (r) {
            if (Wo(r)) return r.lift(function (t) {
                try {
                    return e(t, this)
                } catch (o) {
                    this.error(o)
                }
            });
            throw new TypeError("Unable to lift unknown Observable type")
        }
    }

    function P(e, r, t, o, n) {
        return new jo(e, r, t, o, n)
    }

    var jo = function (e) {
        $(r, e);

        function r(t, o, n, i, c, u) {
            var s = e.call(this, t) || this;
            return s.onFinalize = c, s.shouldUnsubscribe = u, s._next = o ? function (a) {
                try {
                    o(a)
                } catch (f) {
                    t.error(f)
                }
            } : e.prototype._next, s._error = i ? function (a) {
                try {
                    i(a)
                } catch (f) {
                    t.error(f)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._error, s._complete = n ? function () {
                try {
                    n()
                } catch (a) {
                    t.error(a)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._complete, s
        }

        return r.prototype.unsubscribe = function () {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var o = this.closed;
                e.prototype.unsubscribe.call(this), !o && ((t = this.onFinalize) === null || t === void 0 || t.call(this))
            }
        }, r
    }(ze);
    var ke = {
        schedule: function (e) {
            var r = requestAnimationFrame, t = cancelAnimationFrame, o = ke.delegate;
            o && (r = o.requestAnimationFrame, t = o.cancelAnimationFrame);
            var n = r(function (i) {
                t = void 0, e(i)
            });
            return new ce(function () {
                return t == null ? void 0 : t(n)
            })
        }, requestAnimationFrame: function () {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            var t = ke.delegate;
            return ((t == null ? void 0 : t.requestAnimationFrame) || requestAnimationFrame).apply(void 0, k([], R(e)))
        }, cancelAnimationFrame: function () {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            var t = ke.delegate;
            return ((t == null ? void 0 : t.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, k([], R(e)))
        }, delegate: void 0
    };
    var bt = er(function (e) {
        return function () {
            e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
        }
    });
    var K = function (e) {
        $(r, e);

        function r() {
            var t = e.call(this) || this;
            return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
        }

        return r.prototype.lift = function (t) {
            var o = new xt(this, this);
            return o.operator = t, o
        }, r.prototype._throwIfClosed = function () {
            if (this.closed) throw new bt
        }, r.prototype.next = function (t) {
            var o = this;
            Re(function () {
                var n, i;
                if (o._throwIfClosed(), !o.isStopped) {
                    o.currentObservers || (o.currentObservers = Array.from(o.observers));
                    try {
                        for (var c = G(o.currentObservers), u = c.next(); !u.done; u = c.next()) {
                            var s = u.value;
                            s.next(t)
                        }
                    } catch (a) {
                        n = {error: a}
                    } finally {
                        try {
                            u && !u.done && (i = c.return) && i.call(c)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
            })
        }, r.prototype.error = function (t) {
            var o = this;
            Re(function () {
                if (o._throwIfClosed(), !o.isStopped) {
                    o.hasError = o.isStopped = !0, o.thrownError = t;
                    for (var n = o.observers; n.length;) n.shift().error(t)
                }
            })
        }, r.prototype.complete = function () {
            var t = this;
            Re(function () {
                if (t._throwIfClosed(), !t.isStopped) {
                    t.isStopped = !0;
                    for (var o = t.observers; o.length;) o.shift().complete()
                }
            })
        }, r.prototype.unsubscribe = function () {
            this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
        }, Object.defineProperty(r.prototype, "observed", {
            get: function () {
                var t;
                return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0
            }, enumerable: !1, configurable: !0
        }), r.prototype._trySubscribe = function (t) {
            return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
        }, r.prototype._subscribe = function (t) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t)
        }, r.prototype._innerSubscribe = function (t) {
            var o = this, n = this, i = n.hasError, c = n.isStopped, u = n.observers;
            return i || c ? Hr : (this.currentObservers = null, u.push(t), new ce(function () {
                o.currentObservers = null, he(u, t)
            }))
        }, r.prototype._checkFinalizedStatuses = function (t) {
            var o = this, n = o.hasError, i = o.thrownError, c = o.isStopped;
            n ? t.error(i) : c && t.complete()
        }, r.prototype.asObservable = function () {
            var t = new I;
            return t.source = this, t
        }, r.create = function (t, o) {
            return new xt(t, o)
        }, r
    }(I);
    var xt = function (e) {
        $(r, e);

        function r(t, o) {
            var n = e.call(this) || this;
            return n.destination = t, n.source = o, n
        }

        return r.prototype.next = function (t) {
            var o, n;
            (n = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || n === void 0 || n.call(o, t)
        }, r.prototype.error = function (t) {
            var o, n;
            (n = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || n === void 0 || n.call(o, t)
        }, r.prototype.complete = function () {
            var t, o;
            (o = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || o === void 0 || o.call(t)
        }, r.prototype._subscribe = function (t) {
            var o, n;
            return (n = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(t)) !== null && n !== void 0 ? n : Hr
        }, r
    }(K);
    var Ur = function (e) {
        $(r, e);

        function r(t) {
            var o = e.call(this) || this;
            return o._value = t, o
        }

        return Object.defineProperty(r.prototype, "value", {
            get: function () {
                return this.getValue()
            }, enumerable: !1, configurable: !0
        }), r.prototype._subscribe = function (t) {
            var o = e.prototype._subscribe.call(this, t);
            return !o.closed && t.next(this._value), o
        }, r.prototype.getValue = function () {
            var t = this, o = t.hasError, n = t.thrownError, i = t._value;
            if (o) throw n;
            return this._throwIfClosed(), i
        }, r.prototype.next = function (t) {
            e.prototype.next.call(this, this._value = t)
        }, r
    }(K);
    var Ve = {
        now: function () {
            return (Ve.delegate || Date).now()
        }, delegate: void 0
    };
    var yt = function (e) {
        $(r, e);

        function r(t, o, n) {
            t === void 0 && (t = 1 / 0), o === void 0 && (o = 1 / 0), n === void 0 && (n = Ve);
            var i = e.call(this) || this;
            return i._bufferSize = t, i._windowTime = o, i._timestampProvider = n, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = o === 1 / 0, i._bufferSize = Math.max(1, t), i._windowTime = Math.max(1, o), i
        }

        return r.prototype.next = function (t) {
            var o = this, n = o.isStopped, i = o._buffer, c = o._infiniteTimeWindow, u = o._timestampProvider,
                s = o._windowTime;
            n || (i.push(t), !c && i.push(u.now() + s)), this._trimBuffer(), e.prototype.next.call(this, t)
        }, r.prototype._subscribe = function (t) {
            this._throwIfClosed(), this._trimBuffer();
            for (var o = this._innerSubscribe(t), n = this, i = n._infiniteTimeWindow, c = n._buffer, u = c.slice(), s = 0; s < u.length && !t.closed; s += i ? 1 : 2) t.next(u[s]);
            return this._checkFinalizedStatuses(t), o
        }, r.prototype._trimBuffer = function () {
            var t = this, o = t._bufferSize, n = t._timestampProvider, i = t._buffer, c = t._infiniteTimeWindow,
                u = (c ? 1 : 2) * o;
            if (o < 1 / 0 && u < i.length && i.splice(0, i.length - u), !c) {
                for (var s = n.now(), a = 0, f = 1; f < i.length && i[f] <= s; f += 2) a = f;
                a && i.splice(0, a + 1)
            }
        }, r
    }(K);
    var gt = function (e) {
        $(r, e);

        function r(t, o) {
            return e.call(this) || this
        }

        return r.prototype.schedule = function (t, o) {
            return o === void 0 && (o = 0), this
        }, r
    }(ce);
    var $e = {
        setInterval: function (e, r) {
            for (var t = [], o = 2; o < arguments.length; o++) t[o - 2] = arguments[o];
            var n = $e.delegate;
            return n != null && n.setInterval ? n.setInterval.apply(n, k([e, r], R(t))) : setInterval.apply(void 0, k([e, r], R(t)))
        }, clearInterval: function (e) {
            var r = $e.delegate;
            return ((r == null ? void 0 : r.clearInterval) || clearInterval)(e)
        }, delegate: void 0
    };
    var ir = function (e) {
        $(r, e);

        function r(t, o) {
            var n = e.call(this, t, o) || this;
            return n.scheduler = t, n.work = o, n.pending = !1, n
        }

        return r.prototype.schedule = function (t, o) {
            var n;
            if (o === void 0 && (o = 0), this.closed) return this;
            this.state = t;
            var i = this.id, c = this.scheduler;
            return i != null && (this.id = this.recycleAsyncId(c, i, o)), this.pending = !0, this.delay = o, this.id = (n = this.id) !== null && n !== void 0 ? n : this.requestAsyncId(c, this.id, o), this
        }, r.prototype.requestAsyncId = function (t, o, n) {
            return n === void 0 && (n = 0), $e.setInterval(t.flush.bind(t, this), n)
        }, r.prototype.recycleAsyncId = function (t, o, n) {
            if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === !1) return o;
            o != null && $e.clearInterval(o)
        }, r.prototype.execute = function (t, o) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var n = this._execute(t, o);
            if (n) return n;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, r.prototype._execute = function (t, o) {
            var n = !1, i;
            try {
                this.work(t)
            } catch (c) {
                n = !0, i = c || new Error("Scheduled action threw falsy error")
            }
            if (n) return this.unsubscribe(), i
        }, r.prototype.unsubscribe = function () {
            if (!this.closed) {
                var t = this, o = t.id, n = t.scheduler, i = n.actions;
                this.work = this.state = this.scheduler = null, this.pending = !1, he(i, this), o != null && (this.id = this.recycleAsyncId(n, o, null)), this.delay = null, e.prototype.unsubscribe.call(this)
            }
        }, r
    }(gt);
    var zr = function () {
        function e(r, t) {
            t === void 0 && (t = e.now), this.schedulerActionCtor = r, this.now = t
        }

        return e.prototype.schedule = function (r, t, o) {
            return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(o, t)
        }, e.now = Ve.now, e
    }();
    var ar = function (e) {
        $(r, e);

        function r(t, o) {
            o === void 0 && (o = zr.now);
            var n = e.call(this, t, o) || this;
            return n.actions = [], n._active = !1, n
        }

        return r.prototype.flush = function (t) {
            var o = this.actions;
            if (this._active) {
                o.push(t);
                return
            }
            var n;
            this._active = !0;
            do if (n = t.execute(t.state, t.delay)) break; while (t = o.shift());
            if (this._active = !1, n) {
                for (; t = o.shift();) t.unsubscribe();
                throw n
            }
        }, r
    }(zr);
    var Ae = new ar(ir), wt = Ae;
    var St = function (e) {
        $(r, e);

        function r(t, o) {
            var n = e.call(this, t, o) || this;
            return n.scheduler = t, n.work = o, n
        }

        return r.prototype.requestAsyncId = function (t, o, n) {
            return n === void 0 && (n = 0), n !== null && n > 0 ? e.prototype.requestAsyncId.call(this, t, o, n) : (t.actions.push(this), t._scheduled || (t._scheduled = ke.requestAnimationFrame(function () {
                return t.flush(void 0)
            })))
        }, r.prototype.recycleAsyncId = function (t, o, n) {
            var i;
            if (n === void 0 && (n = 0), n != null ? n > 0 : this.delay > 0) return e.prototype.recycleAsyncId.call(this, t, o, n);
            var c = t.actions;
            o != null && ((i = c[c.length - 1]) === null || i === void 0 ? void 0 : i.id) !== o && (ke.cancelAnimationFrame(o), t._scheduled = void 0)
        }, r
    }(ir);
    var Et = function (e) {
        $(r, e);

        function r() {
            return e !== null && e.apply(this, arguments) || this
        }

        return r.prototype.flush = function (t) {
            this._active = !0;
            var o = this._scheduled;
            this._scheduled = void 0;
            var n = this.actions, i;
            t = t || n.shift();
            do if (i = t.execute(t.state, t.delay)) break; while ((t = n[0]) && t.id === o && n.shift());
            if (this._active = !1, i) {
                for (; (t = n[0]) && t.id === o && n.shift();) t.unsubscribe();
                throw i
            }
        }, r
    }(ar);
    var Ne = new Et(St);
    var Fe = new I(function (e) {
        return e.complete()
    });

    function cr(e) {
        return e && O(e.schedule)
    }

    function Vr(e) {
        return e[e.length - 1]
    }

    function ge(e) {
        return O(Vr(e)) ? e.pop() : void 0
    }

    function se(e) {
        return cr(Vr(e)) ? e.pop() : void 0
    }

    function Ot(e, r) {
        return typeof Vr(e) == "number" ? e.pop() : r
    }

    var We = function (e) {
        return e && typeof e.length == "number" && typeof e != "function"
    };

    function sr(e) {
        return O(e == null ? void 0 : e.then)
    }

    function fr(e) {
        return O(e[He])
    }

    function ur(e) {
        return Symbol.asyncIterator && O(e == null ? void 0 : e[Symbol.asyncIterator])
    }

    function pr(e) {
        return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
    }

    function Uo() {
        return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
    }

    var lr = Uo();

    function mr(e) {
        return O(e == null ? void 0 : e[lr])
    }

    function hr(e) {
        return st(this, arguments, function () {
            var t, o, n, i;
            return Ze(this, function (c) {
                switch (c.label) {
                    case 0:
                        t = e.getReader(), c.label = 1;
                    case 1:
                        c.trys.push([1, , 9, 10]), c.label = 2;
                    case 2:
                        return [4, Oe(t.read())];
                    case 3:
                        return o = c.sent(), n = o.value, i = o.done, i ? [4, Oe(void 0)] : [3, 5];
                    case 4:
                        return [2, c.sent()];
                    case 5:
                        return [4, Oe(n)];
                    case 6:
                        return [4, c.sent()];
                    case 7:
                        return c.sent(), [3, 2];
                    case 8:
                        return [3, 10];
                    case 9:
                        return t.releaseLock(), [7];
                    case 10:
                        return [2]
                }
            })
        })
    }

    function dr(e) {
        return O(e == null ? void 0 : e.getReader)
    }

    function F(e) {
        if (e instanceof I) return e;
        if (e != null) {
            if (fr(e)) return zo(e);
            if (We(e)) return Vo(e);
            if (sr(e)) return $o(e);
            if (ur(e)) return Tt(e);
            if (mr(e)) return No(e);
            if (dr(e)) return qo(e)
        }
        throw pr(e)
    }

    function zo(e) {
        return new I(function (r) {
            var t = e[He]();
            if (O(t.subscribe)) return t.subscribe(r);
            throw new TypeError("Provided object does not correctly implement Symbol.observable")
        })
    }

    function Vo(e) {
        return new I(function (r) {
            for (var t = 0; t < e.length && !r.closed; t++) r.next(e[t]);
            r.complete()
        })
    }

    function $o(e) {
        return new I(function (r) {
            e.then(function (t) {
                r.closed || (r.next(t), r.complete())
            }, function (t) {
                return r.error(t)
            }).then(null, or)
        })
    }

    function No(e) {
        return new I(function (r) {
            var t, o;
            try {
                for (var n = G(e), i = n.next(); !i.done; i = n.next()) {
                    var c = i.value;
                    if (r.next(c), r.closed) return
                }
            } catch (u) {
                t = {error: u}
            } finally {
                try {
                    i && !i.done && (o = n.return) && o.call(n)
                } finally {
                    if (t) throw t.error
                }
            }
            r.complete()
        })
    }

    function Tt(e) {
        return new I(function (r) {
            Do(e, r).catch(function (t) {
                return r.error(t)
            })
        })
    }

    function qo(e) {
        return Tt(hr(e))
    }

    function Do(e, r) {
        var t, o, n, i;
        return ct(this, void 0, void 0, function () {
            var c, u;
            return Ze(this, function (s) {
                switch (s.label) {
                    case 0:
                        s.trys.push([0, 5, 6, 11]), t = ft(e), s.label = 1;
                    case 1:
                        return [4, t.next()];
                    case 2:
                        if (o = s.sent(), !!o.done) return [3, 4];
                        if (c = o.value, r.next(c), r.closed) return [2];
                        s.label = 3;
                    case 3:
                        return [3, 1];
                    case 4:
                        return [3, 11];
                    case 5:
                        return u = s.sent(), n = {error: u}, [3, 11];
                    case 6:
                        return s.trys.push([6, , 9, 10]), o && !o.done && (i = t.return) ? [4, i.call(t)] : [3, 8];
                    case 7:
                        s.sent(), s.label = 8;
                    case 8:
                        return [3, 10];
                    case 9:
                        if (n) throw n.error;
                        return [7];
                    case 10:
                        return [7];
                    case 11:
                        return r.complete(), [2]
                }
            })
        })
    }

    function J(e, r, t, o, n) {
        o === void 0 && (o = 0), n === void 0 && (n = !1);
        var i = r.schedule(function () {
            t(), n ? e.add(this.schedule(null, o)) : this.unsubscribe()
        }, o);
        if (e.add(i), !n) return i
    }

    function vr(e, r) {
        return r === void 0 && (r = 0), M(function (t, o) {
            t.subscribe(P(o, function (n) {
                return J(o, e, function () {
                    return o.next(n)
                }, r)
            }, function () {
                return J(o, e, function () {
                    return o.complete()
                }, r)
            }, function (n) {
                return J(o, e, function () {
                    return o.error(n)
                }, r)
            }))
        })
    }

    function br(e, r) {
        return r === void 0 && (r = 0), M(function (t, o) {
            o.add(e.schedule(function () {
                return t.subscribe(o)
            }, r))
        })
    }

    function _t(e, r) {
        return F(e).pipe(br(r), vr(r))
    }

    function At(e, r) {
        return F(e).pipe(br(r), vr(r))
    }

    function Mt(e, r) {
        return new I(function (t) {
            var o = 0;
            return r.schedule(function () {
                o === e.length ? t.complete() : (t.next(e[o++]), t.closed || this.schedule())
            })
        })
    }

    function Lt(e, r) {
        return new I(function (t) {
            var o;
            return J(t, r, function () {
                o = e[lr](), J(t, r, function () {
                    var n, i, c;
                    try {
                        n = o.next(), i = n.value, c = n.done
                    } catch (u) {
                        t.error(u);
                        return
                    }
                    c ? t.complete() : t.next(i)
                }, 0, !0)
            }), function () {
                return O(o == null ? void 0 : o.return) && o.return()
            }
        })
    }

    function xr(e, r) {
        if (!e) throw new Error("Iterable cannot be null");
        return new I(function (t) {
            J(t, r, function () {
                var o = e[Symbol.asyncIterator]();
                J(t, r, function () {
                    o.next().then(function (n) {
                        n.done ? t.complete() : t.next(n.value)
                    })
                }, 0, !0)
            })
        })
    }

    function It(e, r) {
        return xr(hr(e), r)
    }

    function Ct(e, r) {
        if (e != null) {
            if (fr(e)) return _t(e, r);
            if (We(e)) return Mt(e, r);
            if (sr(e)) return At(e, r);
            if (ur(e)) return xr(e, r);
            if (mr(e)) return Lt(e, r);
            if (dr(e)) return It(e, r)
        }
        throw pr(e)
    }

    function B(e, r) {
        return r ? Ct(e, r) : F(e)
    }

    function fe() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = se(e);
        return B(e, t)
    }

    function $r(e, r) {
        var t = O(e) ? e : function () {
            return e
        }, o = function (n) {
            return n.error(t())
        };
        return new I(r ? function (n) {
            return r.schedule(o, 0, n)
        } : o)
    }

    function Pt(e) {
        return e instanceof Date && !isNaN(e)
    }

    function A(e, r) {
        return M(function (t, o) {
            var n = 0;
            t.subscribe(P(o, function (i) {
                o.next(e.call(r, i, n++))
            }))
        })
    }

    var Qo = Array.isArray;

    function Ko(e, r) {
        return Qo(r) ? e.apply(void 0, k([], R(r))) : e(r)
    }

    function je(e) {
        return A(function (r) {
            return Ko(e, r)
        })
    }

    var Jo = Array.isArray, Yo = Object.getPrototypeOf, Go = Object.prototype, Xo = Object.keys;

    function Rt(e) {
        if (e.length === 1) {
            var r = e[0];
            if (Jo(r)) return {args: r, keys: null};
            if (Bo(r)) {
                var t = Xo(r);
                return {
                    args: t.map(function (o) {
                        return r[o]
                    }), keys: t
                }
            }
        }
        return {args: e, keys: null}
    }

    function Bo(e) {
        return e && typeof e == "object" && Yo(e) === Go
    }

    function Ht(e, r) {
        return e.reduce(function (t, o, n) {
            return t[o] = r[n], t
        }, {})
    }

    function we() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = se(e), o = ge(e), n = Rt(e), i = n.args, c = n.keys;
        if (i.length === 0) return B([], t);
        var u = new I(Nr(i, t, c ? function (s) {
            return Ht(c, s)
        } : X));
        return o ? u.pipe(je(o)) : u
    }

    function Nr(e, r, t) {
        return t === void 0 && (t = X), function (o) {
            kt(r, function () {
                for (var n = e.length, i = new Array(n), c = n, u = n, s = function (f) {
                    kt(r, function () {
                        var p = B(e[f], r), d = !1;
                        p.subscribe(P(o, function (l) {
                            i[f] = l, d || (d = !0, u--), u || o.next(t(i.slice()))
                        }, function () {
                            --c || o.complete()
                        }))
                    }, o)
                }, a = 0; a < n; a++) s(a)
            }, o)
        }
    }

    function kt(e, r, t) {
        e ? J(t, e, r) : r()
    }

    function Ft(e, r, t, o, n, i, c, u) {
        var s = [], a = 0, f = 0, p = !1, d = function () {
            p && !s.length && !a && r.complete()
        }, l = function (h) {
            return a < o ? m(h) : s.push(h)
        }, m = function (h) {
            i && r.next(h), a++;
            var b = !1;
            F(t(h, f++)).subscribe(P(r, function (w) {
                n == null || n(w), i ? l(w) : r.next(w)
            }, function () {
                b = !0
            }, void 0, function () {
                if (b) try {
                    a--;
                    for (var w = function () {
                        var E = s.shift();
                        c ? J(r, c, function () {
                            return m(E)
                        }) : m(E)
                    }; s.length && a < o;) w();
                    d()
                } catch (E) {
                    r.error(E)
                }
            }))
        };
        return e.subscribe(P(r, l, function () {
            p = !0, d()
        })), function () {
            u == null || u()
        }
    }

    function Me(e, r, t) {
        return t === void 0 && (t = 1 / 0), O(r) ? Me(function (o, n) {
            return A(function (i, c) {
                return r(o, i, n, c)
            })(F(e(o, n)))
        }, t) : (typeof r == "number" && (t = r), M(function (o, n) {
            return Ft(o, n, e, t)
        }))
    }

    function yr(e) {
        return e === void 0 && (e = 1 / 0), Me(X, e)
    }

    function Wt() {
        return yr(1)
    }

    function qe() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return Wt()(B(e, se(e)))
    }

    function ve(e) {
        return new I(function (r) {
            F(e()).subscribe(r)
        })
    }

    var Zo = ["addListener", "removeListener"], en = ["addEventListener", "removeEventListener"], rn = ["on", "off"];

    function z(e, r, t, o) {
        if (O(t) && (o = t, t = void 0), o) return z(e, r, t).pipe(je(o));
        var n = R(nn(e) ? en.map(function (u) {
            return function (s) {
                return e[u](r, s, t)
            }
        }) : tn(e) ? Zo.map(jt(e, r)) : on(e) ? rn.map(jt(e, r)) : [], 2), i = n[0], c = n[1];
        if (!i && We(e)) return Me(function (u) {
            return z(u, r, t)
        })(F(e));
        if (!i) throw new TypeError("Invalid event target");
        return new I(function (u) {
            var s = function () {
                for (var a = [], f = 0; f < arguments.length; f++) a[f] = arguments[f];
                return u.next(1 < a.length ? a : a[0])
            };
            return i(s), function () {
                return c(s)
            }
        })
    }

    function jt(e, r) {
        return function (t) {
            return function (o) {
                return e[t](r, o)
            }
        }
    }

    function tn(e) {
        return O(e.addListener) && O(e.removeListener)
    }

    function on(e) {
        return O(e.on) && O(e.off)
    }

    function nn(e) {
        return O(e.addEventListener) && O(e.removeEventListener)
    }

    function gr(e, r, t) {
        e === void 0 && (e = 0), t === void 0 && (t = wt);
        var o = -1;
        return r != null && (cr(r) ? t = r : o = r), new I(function (n) {
            var i = Pt(e) ? +e - t.now() : e;
            i < 0 && (i = 0);
            var c = 0;
            return t.schedule(function () {
                n.closed || (n.next(c++), 0 <= o ? this.schedule(void 0, o) : n.complete())
            }, i)
        })
    }

    function V() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = se(e), o = Ot(e, 1 / 0), n = e;
        return n.length ? n.length === 1 ? F(n[0]) : yr(o)(B(n, t)) : Fe
    }

    var De = new I(de);
    var an = Array.isArray;

    function wr(e) {
        return e.length === 1 && an(e[0]) ? e[0] : e
    }

    function ue(e, r) {
        return M(function (t, o) {
            var n = 0;
            t.subscribe(P(o, function (i) {
                return e.call(r, i, n++) && o.next(i)
            }))
        })
    }

    function Ut() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = ge(e), o = wr(e);
        return o.length ? new I(function (n) {
            var i = o.map(function () {
                return []
            }), c = o.map(function () {
                return !1
            });
            n.add(function () {
                i = c = null
            });
            for (var u = function (a) {
                F(o[a]).subscribe(P(n, function (f) {
                    if (i[a].push(f), i.every(function (d) {
                        return d.length
                    })) {
                        var p = i.map(function (d) {
                            return d.shift()
                        });
                        n.next(t ? t.apply(void 0, k([], R(p))) : p), i.some(function (d, l) {
                            return !d.length && c[l]
                        }) && n.complete()
                    }
                }, function () {
                    c[a] = !0, !i[a].length && n.complete()
                }))
            }, s = 0; !n.closed && s < o.length; s++) u(s);
            return function () {
                i = c = null
            }
        }) : Fe
    }

    function zt(e) {
        return M(function (r, t) {
            var o = !1, n = null, i = null, c = !1, u = function () {
                if (i == null || i.unsubscribe(), i = null, o) {
                    o = !1;
                    var a = n;
                    n = null, t.next(a)
                }
                c && t.complete()
            }, s = function () {
                i = null, c && t.complete()
            };
            r.subscribe(P(t, function (a) {
                o = !0, n = a, i || F(e(a)).subscribe(i = P(t, u, s))
            }, function () {
                c = !0, (!o || !i || i.closed) && t.complete()
            }))
        })
    }

    function Qe(e, r) {
        return r === void 0 && (r = Ae), zt(function () {
            return gr(e, r)
        })
    }

    function qr(e, r) {
        return r === void 0 && (r = null), r = r != null ? r : e, M(function (t, o) {
            var n = [], i = 0;
            t.subscribe(P(o, function (c) {
                var u, s, a, f, p = null;
                i++ % r === 0 && n.push([]);
                try {
                    for (var d = G(n), l = d.next(); !l.done; l = d.next()) {
                        var m = l.value;
                        m.push(c), e <= m.length && (p = p != null ? p : [], p.push(m))
                    }
                } catch (w) {
                    u = {error: w}
                } finally {
                    try {
                        l && !l.done && (s = d.return) && s.call(d)
                    } finally {
                        if (u) throw u.error
                    }
                }
                if (p) try {
                    for (var h = G(p), b = h.next(); !b.done; b = h.next()) {
                        var m = b.value;
                        he(n, m), o.next(m)
                    }
                } catch (w) {
                    a = {error: w}
                } finally {
                    try {
                        b && !b.done && (f = h.return) && f.call(h)
                    } finally {
                        if (a) throw a.error
                    }
                }
            }, function () {
                var c, u;
                try {
                    for (var s = G(n), a = s.next(); !a.done; a = s.next()) {
                        var f = a.value;
                        o.next(f)
                    }
                } catch (p) {
                    c = {error: p}
                } finally {
                    try {
                        a && !a.done && (u = s.return) && u.call(s)
                    } finally {
                        if (c) throw c.error
                    }
                }
                o.complete()
            }, void 0, function () {
                n = null
            }))
        })
    }

    function Dr() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = ge(e);
        return t ? dt(Dr.apply(void 0, k([], R(e))), je(t)) : M(function (o, n) {
            Nr(k([o], R(wr(e))))(n)
        })
    }

    function Qr() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return Dr.apply(void 0, k([], R(e)))
    }

    function Kr(e, r) {
        return r === void 0 && (r = Ae), M(function (t, o) {
            var n = null, i = null, c = null, u = function () {
                if (n) {
                    n.unsubscribe(), n = null;
                    var a = i;
                    i = null, o.next(a)
                }
            };

            function s() {
                var a = c + e, f = r.now();
                if (f < a) {
                    n = this.schedule(void 0, a - f), o.add(n);
                    return
                }
                u()
            }

            t.subscribe(P(o, function (a) {
                i = a, c = r.now(), n || (n = r.schedule(s, e), o.add(n))
            }, function () {
                u(), o.complete()
            }, void 0, function () {
                i = n = null
            }))
        })
    }

    function Se(e) {
        return e <= 0 ? function () {
            return Fe
        } : M(function (r, t) {
            var o = 0;
            r.subscribe(P(t, function (n) {
                ++o <= e && (t.next(n), e <= o && t.complete())
            }))
        })
    }

    function Vt() {
        return M(function (e, r) {
            e.subscribe(P(r, de))
        })
    }

    function $t(e) {
        return A(function () {
            return e
        })
    }

    function Jr(e, r) {
        return r ? function (t) {
            return qe(r.pipe(Se(1), Vt()), t.pipe(Jr(e)))
        } : Me(function (t, o) {
            return F(e(t, o)).pipe(Se(1), $t(t))
        })
    }

    function Yr(e, r) {
        r === void 0 && (r = Ae);
        var t = gr(e, r);
        return Jr(function () {
            return t
        })
    }

    function ne(e, r) {
        return r === void 0 && (r = X), e = e != null ? e : cn, M(function (t, o) {
            var n, i = !0;
            t.subscribe(P(o, function (c) {
                var u = r(c);
                (i || !e(n, u)) && (i = !1, n = u, o.next(c))
            }))
        })
    }

    function cn(e, r) {
        return e === r
    }

    function Sr(e, r) {
        return ne(function (t, o) {
            return r ? r(t[e], o[e]) : t[e] === o[e]
        })
    }

    function re(e) {
        return M(function (r, t) {
            try {
                r.subscribe(t)
            } finally {
                t.add(e)
            }
        })
    }

    function Nt(e) {
        e === void 0 && (e = {});
        var r = e.connector, t = r === void 0 ? function () {
                return new K
            } : r, o = e.resetOnError, n = o === void 0 ? !0 : o, i = e.resetOnComplete, c = i === void 0 ? !0 : i,
            u = e.resetOnRefCountZero, s = u === void 0 ? !0 : u;
        return function (a) {
            var f, p, d, l = 0, m = !1, h = !1, b = function () {
                p == null || p.unsubscribe(), p = void 0
            }, w = function () {
                b(), f = d = void 0, m = h = !1
            }, E = function () {
                var H = f;
                w(), H == null || H.unsubscribe()
            };
            return M(function (H, v) {
                l++, !h && !m && b();
                var x = d = d != null ? d : t();
                v.add(function () {
                    l--, l === 0 && !h && !m && (p = Gr(E, s))
                }), x.subscribe(v), !f && l > 0 && (f = new _e({
                    next: function (S) {
                        return x.next(S)
                    }, error: function (S) {
                        h = !0, b(), p = Gr(w, n, S), x.error(S)
                    }, complete: function () {
                        m = !0, b(), p = Gr(w, c), x.complete()
                    }
                }), F(H).subscribe(f))
            })(a)
        }
    }

    function Gr(e, r) {
        for (var t = [], o = 2; o < arguments.length; o++) t[o - 2] = arguments[o];
        if (r === !0) {
            e();
            return
        }
        if (r !== !1) {
            var n = new _e({
                next: function () {
                    n.unsubscribe(), e()
                }
            });
            return F(r.apply(void 0, k([], R(t)))).subscribe(n)
        }
    }

    function be(e, r, t) {
        var o, n, i, c, u = !1;
        return e && typeof e == "object" ? (o = e.bufferSize, c = o === void 0 ? 1 / 0 : o, n = e.windowTime, r = n === void 0 ? 1 / 0 : n, i = e.refCount, u = i === void 0 ? !1 : i, t = e.scheduler) : c = e != null ? e : 1 / 0, Nt({
            connector: function () {
                return new yt(c, r, t)
            }, resetOnError: !0, resetOnComplete: !1, resetOnRefCountZero: u
        })
    }

    function pe() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = se(e);
        return M(function (o, n) {
            (t ? qe(e, o, t) : qe(e, o)).subscribe(n)
        })
    }

    function q(e, r) {
        return M(function (t, o) {
            var n = null, i = 0, c = !1, u = function () {
                return c && !n && o.complete()
            };
            t.subscribe(P(o, function (s) {
                n == null || n.unsubscribe();
                var a = 0, f = i++;
                F(e(s, f)).subscribe(n = P(o, function (p) {
                    return o.next(r ? r(s, p, f, a++) : p)
                }, function () {
                    n = null, u()
                }))
            }, function () {
                c = !0, u()
            }))
        })
    }

    function te(e, r, t) {
        var o = O(e) || r || t ? {next: e, error: r, complete: t} : e;
        return o ? M(function (n, i) {
            var c;
            (c = o.subscribe) === null || c === void 0 || c.call(o);
            var u = !0;
            n.subscribe(P(i, function (s) {
                var a;
                (a = o.next) === null || a === void 0 || a.call(o, s), i.next(s)
            }, function () {
                var s;
                u = !1, (s = o.complete) === null || s === void 0 || s.call(o), i.complete()
            }, function (s) {
                var a;
                u = !1, (a = o.error) === null || a === void 0 || a.call(o, s), i.error(s)
            }, function () {
                var s, a;
                u && ((s = o.unsubscribe) === null || s === void 0 || s.call(o)), (a = o.finalize) === null || a === void 0 || a.call(o)
            }))
        }) : X
    }

    function Ue() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = ge(e);
        return M(function (o, n) {
            for (var i = e.length, c = new Array(i), u = e.map(function () {
                return !1
            }), s = !1, a = function (p) {
                F(e[p]).subscribe(P(n, function (d) {
                    c[p] = d, !s && !u[p] && (u[p] = !0, (s = u.every(X)) && (u = null))
                }, de))
            }, f = 0; f < i; f++) a(f);
            o.subscribe(P(n, function (p) {
                if (s) {
                    var d = k([p], R(c));
                    n.next(t ? t.apply(void 0, k([], R(d))) : d)
                }
            }))
        })
    }

    function qt() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return M(function (t, o) {
            Ut.apply(void 0, k([t], R(e))).subscribe(o)
        })
    }

    function Xr() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return qt.apply(void 0, k([], R(e)))
    }

    function Er(e, r = document) {
        return Array.from(r.querySelectorAll(e))
    }

    function Z(e, r = document) {
        let t = Or(e, r);
        if (typeof t == "undefined") throw new ReferenceError(`Missing element: expected "${e}" to be present`);
        return t
    }

    function Or(e, r = document) {
        return r.querySelector(e) || void 0
    }

    function Br() {
        var e, r, t, o;
        return (o = (t = (r = (e = document.activeElement) == null ? void 0 : e.shadowRoot) == null ? void 0 : r.activeElement) != null ? t : document.activeElement) != null ? o : void 0
    }

    var sn = V(z(document.body, "focusin"), z(document.body, "focusout")).pipe(Kr(1), pe(void 0), A(() => Br() || document.body), be(1));

    function Dt(e) {
        return sn.pipe(A(r => e.contains(r)), ne())
    }

    function Qt(e, r) {
        if (typeof r == "string" || typeof r == "number") e.innerHTML += r.toString(); else if (r instanceof Node) e.appendChild(r); else if (Array.isArray(r)) for (let t of r) Qt(e, t)
    }

    function Y(e, r, ...t) {
        let o = document.createElement(e);
        if (r) for (let n of Object.keys(r)) typeof r[n] != "undefined" && (typeof r[n] != "boolean" ? o.setAttribute(n, r[n]) : o.setAttribute(n, ""));
        for (let n of t) Qt(o, n);
        return o
    }

    function Kt(e) {
        if (e > 999) {
            let r = +((e - 950) % 1e3 > 99);
            return `${((e + 1e-6) / 1e3).toFixed(r)}k`
        } else return e.toString()
    }

    function Jt(e) {
        let r = Y("script", {src: e});
        return ve(() => (document.head.appendChild(r), V(z(r, "load"), z(r, "error").pipe(q(() => $r(() => new ReferenceError(`Invalid script: ${e}`))))).pipe(A(() => {
        }), re(() => document.head.removeChild(r)), Se(1))))
    }

    var fn = new K,
        qp = ve(() => typeof ResizeObserver == "undefined" ? Jt("https://unpkg.com/resize-observer-polyfill") : fe(void 0)).pipe(A(() => new ResizeObserver(e => e.forEach(r => fn.next(r)))), q(e => V(De, fe(e)).pipe(re(() => e.disconnect()))), be(1));

    function Yt(e) {
        return {width: e.offsetWidth, height: e.offsetHeight}
    }

    function Gt(e) {
        return {width: e.scrollWidth, height: e.scrollHeight}
    }

    function Zr(e) {
        return {x: e.offsetLeft, y: e.offsetTop}
    }

    function Xt(e) {
        return V(z(window, "load"), z(window, "resize")).pipe(Qe(0, Ne), A(() => Zr(e)), pe(Zr(e)))
    }

    function Bt(e) {
        return {x: e.scrollLeft, y: e.scrollTop}
    }

    function Ke(e) {
        return V(z(e, "scroll"), z(window, "scroll"), z(window, "resize")).pipe(Qe(0, Ne), A(() => Bt(e)), pe(Bt(e)))
    }

    var Zt = new K, un = ve(() => fe(new IntersectionObserver(e => {
        for (let r of e) Zt.next(r)
    }, {threshold: 0}))).pipe(q(e => V(De, fe(e)).pipe(re(() => e.disconnect()))), be(1));

    function eo(e) {
        return un.pipe(te(r => r.observe(e)), q(r => Zt.pipe(ue(({target: t}) => t === e), re(() => r.unobserve(e)), A(({isIntersecting: t}) => t))))
    }

    function ro(e, r = 16) {
        return Ke(e).pipe(A(({y: t}) => {
            let o = Yt(e), n = Gt(e);
            return t >= n.height - o.height - r
        }), ne())
    }

    var yl = {drawer: Z("[data-md-toggle=drawer]"), search: Z("[data-md-toggle=search]")};
    var pn = Z("#__config"), Je = JSON.parse(pn.textContent);
    Je.base = `${new URL(Je.base, no())}`;

    function to() {
        return Je
    }

    function oo(e, r) {
        return typeof r != "undefined" ? Je.translations[e].replace("#", r.toString()) : Je.translations[e]
    }

    function no() {
        return new URL(location.href)
    }

    function ln(e, r) {
        return new I(t => {
            let o = new XMLHttpRequest;
            return o.open("GET", `${e}`), o.responseType = "blob", o.addEventListener("load", () => {
                o.status >= 200 && o.status < 300 ? (t.next(o.response), t.complete()) : t.error(new Error(o.statusText))
            }), o.addEventListener("error", () => {
                t.error(new Error("Network error"))
            }), o.addEventListener("abort", () => {
                t.complete()
            }), typeof (r == null ? void 0 : r.progress$) != "undefined" && (o.addEventListener("progress", n => {
                var i;
                if (n.lengthComputable) r.progress$.next(n.loaded / n.total * 100); else {
                    let c = (i = o.getResponseHeader("Content-Length")) != null ? i : 0;
                    r.progress$.next(n.loaded / +c * 100)
                }
            }), r.progress$.next(5)), o.send(), () => o.abort()
        })
    }

    function Tr(e, r) {
        return ln(e, r).pipe(q(t => t.text()), A(t => JSON.parse(t)), be(1))
    }

    function Ye(e, r = document) {
        return Z(`[data-mdx-component=${e}]`, r)
    }

    function xe(e, r = document) {
        return Er(`[data-mdx-component=${e}]`, r)
    }

    function io(e) {
        let r = Dt(e), t = V(z(e, "keyup"), z(e, "focus").pipe(Yr(1))).pipe(A(() => e.value), pe(e.value), ne());
        return r.pipe(ue(o => !o), Ue(t)).subscribe(([, o]) => {
            let n = document.location.pathname;
            typeof ga == "function" && o.length && ga("send", "pageview", `${n}?q=[icon]+${o}`)
        }), we([t, r]).pipe(A(([o, n]) => ({ref: e, value: o, focus: n})))
    }

    var tt = at(rt());
    var vo = at(rt());

    function ho(e, r) {
        return (0, vo.wrap)(e.shortcode, r, {wrap: {tagOpen: "<b>", tagClose: "</b>"}})
    }

    function bo(e, r, t) {
        return Y("li", {class: "mdx-iconsearch-result__item"}, Y("span", {class: "twemoji"}, Y("img", {src: e.url})), Y("button", {
            class: "md-clipboard--inline",
            title: oo("clipboard.copy"),
            "data-clipboard-text": t ? e.shortcode : `:${e.shortcode}:`
        }, Y("code", null, t ? ho(e, r) : `:${ho(e, r)}:`)))
    }

    function xo(e) {
        let r = `@${e.name}`;
        return Y("a", {href: e.url, title: r, class: "mdx-sponsorship__item"}, Y("img", {src: e.image}))
    }

    function yo(e) {
        return Y("a", {
            href: "https://github.com/sponsors/squidfunk?metadata_origin=docs",
            class: "mdx-sponsorship__item mdx-sponsorship__item--private"
        }, "+", e)
    }

    function mn(e, {index$: r, query$: t, mode$: o}) {
        switch (e.getAttribute("data-mdx-mode")) {
            case"file":
                return we([t.pipe(Sr("value")), r.pipe(A(({icons: n}) => Object.values(n.data).map(i => i.replace(/\.svg$/, ""))))]).pipe(A(([{value: n}, i]) => (0, tt.filter)(i, n)), q(n => r.pipe(A(({icons: i}) => ({
                    data: n.map(c => ({
                        shortcode: c, url: [i.base, c, ".svg"].join("")
                    }))
                })))));
            default:
                return we([t.pipe(Sr("value")), r.pipe(Qr(o), A(([{
                    icons: n, emojis: i
                }, c]) => [...["all", "icons"].includes(c) ? Object.keys(n.data) : [], ...["all", "emojis"].includes(c) ? Object.keys(i.data) : []]))]).pipe(A(([{value: n}, i]) => (0, tt.filter)(i, n)), q(n => r.pipe(A(({
                                                                                                                                                                                                                                icons: i,
                                                                                                                                                                                                                                emojis: c
                                                                                                                                                                                                                            }) => ({
                    data: n.map(u => {
                        let s = u in i.data ? i : c;
                        return {shortcode: u, url: [s.base, s.data[u]].join("")}
                    })
                })))))
        }
    }

    function go(e, {index$: r, query$: t, mode$: o}) {
        let n = new K, i = ro(e).pipe(ue(Boolean)), c = Z(".mdx-iconsearch-result__meta", e);
        n.pipe(Ue(t)).subscribe(([{data: a}, {value: f}]) => {
            if (f) switch (a.length) {
                case 0:
                    c.textContent = "No matches";
                    break;
                case 1:
                    c.textContent = "1 match";
                    break;
                default:
                    c.textContent = `${Kt(a.length)} matches`
            } else c.textContent = "Type to start searching"
        });
        let u = e.getAttribute("data-mdx-mode") === "file", s = Z(":scope > :last-child", e);
        return n.pipe(te(() => s.innerHTML = ""), q(({data: a}) => V(fe(...a.slice(0, 10)), fe(...a.slice(10)).pipe(qr(10), Xr(i), q(([f]) => f)))), Ue(t)).subscribe(([a, {value: f}]) => s.appendChild(bo(a, f, u))), mn(e, {
            query$: t, index$: r, mode$: o
        }).pipe(te(a => n.next(a)), re(() => n.complete()), A(a => Ie({ref: e}, a)))
    }

    function wo(e) {
        let r = to(), t = Tr(new URL("assets/javascripts/iconsearch_index.json", r.base)),
            o = Ye("iconsearch-query", e), n = Ye("iconsearch-result", e), i = new Ur("all"),
            c = xe("iconsearch-select", e);
        for (let a of c) z(a, "change").pipe(A(f => f.target.value)).subscribe(i);
        let u = io(o), s = go(n, {index$: t, query$: u, mode$: i});
        return V(u, s)
    }

    function hn(e) {
        return V(...Er(":scope [hidden]", e).map(r => eo(r).pipe(ue(t => t), Se(1), A(() => ({active: r})))))
    }

    function So(e) {
        return ve(() => {
            let r = new K;
            r.subscribe(({active: o}) => {
                o.hidden = !1
            }), navigator.userAgent.includes("Gecko/") && Ke(e).pipe(A(({y: o}) => o > 1), ne()).subscribe(o => {
                let n = Ye("hero");
                // n.hidden = o
            });
            let t = Z(":scope > :nth-child(2)", e);
            return we([Ke(e), Xt(t)]).subscribe(([{y: o}, n]) => {
                Z("header").classList.toggle("md-header--shadow", o > n.y)
            }), hn(e).pipe(te(o => r.next(o)), re(() => r.complete()), A(o => Ie({ref: e}, o)))
        })
    }

    function Eo(e) {
        let r = Tr("https://3if8u9o552.execute-api.us-east-1.amazonaws.com/_/"), t = xe("sponsorship-count"),
            o = xe("sponsorship-total");
        r.pipe(q(i => B(t).pipe(te(c => c.innerText = `${i.sponsors.length}`)))).subscribe(() => e.removeAttribute("hidden")), r.pipe(q(i => B(o).pipe(te(c => c.innerText = `$ ${i.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} a month`)))).subscribe();
        let n = Or(":scope > .mdx-sponsorship__list", e);
        return n && t.length && r.subscribe(i => {
            for (let c of i.sponsors) c.type === "public" && n.appendChild(xo(c.user));
            n.appendChild(yo(i.sponsors.filter(({type: c}) => c === "private").length))
        }), r.pipe(A(i => Ie({ref: e}, i)))
    }

    function Oo() {
        let {origin: e} = new URL(location.href);
        typeof ga != "undefined" && z(document.body, "click").subscribe(r => {
            if (r.target instanceof HTMLElement) {
                let t = r.target.closest("a");
                t && t.origin !== e && ga("send", "event", "outbound", "click", t.href)
            }
        })
    }

    Oo();
    var dn = document$.pipe(q(() => V(...xe("iconsearch").map(e => wo(e)), ...xe("parallax").map(e => So(e)), ...xe("sponsorship").map(e => Eo(e)))));
    dn.subscribe();

    // Logic to put the circles with a person's picture on the team parallax
    const circles_container = document.querySelector('.ai-val-team-page-person-circles-container');

    function createPersonCircle(imagePath) {
        const person_circle = document.createElement('div');
        person_circle.classList.add('circle');
        person_circle.style.backgroundImage = `url(${imagePath})`;
        person_circle.style.backgroundSize = 'cover';
        person_circle.style.backgroundPosition = 'center';
        person_circle.style.backgroundRepeat = 'no-repeat';
        circles_container.appendChild(person_circle);
    }

    const imagePaths = ["./img/anne.png", "./img/berry.jpeg", "./img/christopher.jpeg", "./img/laurens.jpeg", "./img/ravi.jpg", "./img/renate.jpg", "./img/robbert_bos.jpeg", "./img/robbert_uittenbroek.jpeg", "./img/ruben.png", // Change here when people leave the active team
    ];

    imagePaths.forEach(imagePath => {
        createPersonCircle(imagePath);
    });
})();
/* cSpell: enable */
