import React from 'react'
import { ReactDOM } from 'react-dom';

(this["webpackJsonpRNBOfinance-frontend"] = this["webpackJsonpRNBOfinance-frontend"] || []).push([
    [2], {
        100: function(e, t, n) {
            "use strict";
            var a = n(14),
                i = (n(0), n(2)),
                r = n(147),
                s = n(19),
                o = n(1);
            t.a = function(e) {
                var t = Object(s.b)().t,
                    n = Object(r.a)(),
                    u = n.login,
                    c = n.logout,
                    p = Object(i.kb)(u, c).onPresentConnectModal;
                return Object(o.jsx)(i.h, Object(a.a)(Object(a.a)({ onClick: p }, e), {}, { children: t("Unlock Wallet") }))
            }
        },
        105: function(e, t, n) {
            "use strict";
            var a, i = n(21),
                r = n(7),
                s = n(193),
                o = Object(r.e)(s.a)(a || (a = Object(i.a)(["\n  min-height: calc(100vh - 64px);\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.lg }));
            t.a = o
        },
        112: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_syrup","type":"address"},{"internalType":"contract IERC20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerSec","type":"uint256"},{"internalType":"uint256","name":"_startTimestamp","type":"uint256"},{"internalType":"uint256","name":"_bonusEndTimestamp","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTimestamp","type":"uint256"},{"internalType":"uint256","name":"accRNBOPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        113: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(206);
            t.a = function() { var e = Object(a.useContext)(i.a); return { fastRefresh: e.fast, slowRefresh: e.slow } }
        },
        127: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return s })), n.d(t, "a", (function() { return o }));
            var a = n(8),
                i = n.n(a),
                r = n(49),
                s = function(e, t, n, a) {
                    var s = new i.a(t).times(a).times(r.h),
                        o = new i.a(e).times(n),
                        u = s.div(o).times(100);
                    return u.isNaN() || !u.isFinite() ? null : u.toNumber()
                },
                o = function(e, t, n) { var a = r.g.times(r.h).times(e).times(t).div(n).times(100); return a.isNaN() || !a.isFinite() ? null : a.toNumber() }
        },
        145: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return s })), n.d(t, "c", (function() { return o })), n.d(t, "b", (function() { return u }));
            var a = n(52),
                i = Object(a.c)({
                    name: "toasts",
                    initialState: { data: [] },
                    reducers: {
                        push: function(e, t) {
                            var n = t.payload,
                                a = e.data.findIndex((function(e) { return e.id === t.payload.id }));
                            a >= 0 && e.data.splice(a, 1), e.data.unshift(n)
                        },
                        remove: function(e, t) {
                            var n = e.data.findIndex((function(e) { return e.id === t.payload }));
                            n >= 0 && e.data.splice(n, 1)
                        },
                        clear: function(e) { e.data = [] }
                    }
                }),
                r = i.actions,
                s = r.clear,
                o = r.remove,
                u = r.push;
            i.reducer
        },
        146: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return y }));
            var a = n(52),
                i = n(33),
                r = n(161),
                s = n(96),
                o = n(205),
                u = n(91),
                c = n(209),
                p = n(191),
                l = n(163),
                d = Object(a.a)({ devTools: !1, reducer: { achievements: c.a, block: p.a, farms: r.a, pools: s.a, prices: o.a, teams: u.a, maximus: l.a } }),
                y = function() { return Object(i.b)() };
            t.a = d
        },
        147: function(e, t, n) {
            "use strict";
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(0),
                o = n(26),
                u = n(166),
                c = n(2),
                p = n(35),
                l = n(207),
                d = n(192);
            t.a = function() {
                var e = Object(o.c)(),
                    t = e.activate,
                    n = e.deactivate,
                    a = Object(p.m)().toastError;
                return {
                    login: Object(s.useCallback)((function(e) {
                        var n = l.a[e];
                        n ? t(n, function() {
                            var e = Object(r.a)(i.a.mark((function e(r) {
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(r instanceof o.a)) { e.next = 7; break }
                                            return e.next = 3, Object(d.b)();
                                        case 3:
                                            e.sent && t(n), e.next = 9;
                                            break;
                                        case 7:
                                            window.localStorage.removeItem(c.bb), r instanceof u.b ? a("Provider Error", "No provider was found") : r instanceof u.c ? a("Authorization Error", "Please authorize to access your account") : a(r.name, r.message);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }()) : a("Can't find connector", "The connector config is wrong")
                    }), []),
                    logout: n
                }
            }
        },
        161: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() { return C })), n.d(t, "c", (function() { return F })), n.d(t, "b", (function() { return L }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(14),
                o = n(52),
                u = n(94),
                c = n(295),
                p = n(15),
                l = n(8),
                d = n.n(l),
                y = n(72),
                b = n(97),
                m = n(44),
                f = n(36),
                j = n(20),
                h = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(t.map(function() {
                                        var e = Object(r.a)(i.a.mark((function e(t) {
                                            var n, a, r, o, u, c, l, h, O, x, v, T, w, k, g, A, M, S, C, F;
                                            return i.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = Object(j.a)(t.lpAddresses), a = [{ address: Object(j.a)(t.token.address), name: "balanceOf", params: [n] }, { address: Object(j.a)(t.quoteToken.address), name: "balanceOf", params: [n] }, { address: n, name: "balanceOf", params: [Object(j.k)()] }, { address: n, name: "totalSupply" }, { address: Object(j.a)(t.token.address), name: "decimals" }, { address: Object(j.a)(t.quoteToken.address), name: "decimals" }], e.next = 4, Object(m.a)(y, a);
                                                    case 4:
                                                        return r = e.sent, o = Object(p.a)(r, 6), u = o[0], c = o[1], l = o[2], h = o[3], O = o[4], x = o[5], v = new d.a(l).div(new d.a(h)), T = new d.a(c).div(f.a.pow(x)).times(new d.a(2)).times(v), w = new d.a(u).div(f.a.pow(O)).times(v), k = new d.a(c).div(f.a.pow(x)).times(v), e.next = 18, Object(m.a)(b, [{ address: Object(j.k)(), name: "poolInfo", params: [t.pid] }, { address: Object(j.k)(), name: "totalAllocPoint" }]);
                                                    case 18:
                                                        return g = e.sent, A = Object(p.a)(g, 2), M = A[0], S = A[1], C = new d.a(M.allocPoint._hex), F = C.div(new d.a(S)), e.abrupt("return", Object(s.a)(Object(s.a)({}, t), {}, { tokenAmount: w.toJSON(), quoteTokenAmount: k.toJSON(), lpTotalSupply: new d.a(h).toJSON(), lpTotalInQuoteToken: T.toJSON(), tokenPriceVsQuote: k.div(w).toJSON(), poolWeight: F.toJSON(), lpTokenBalanceMC: new d.a(l).toJSON(), multiplier: "".concat(C.div(100).toString(), "X") }));
                                                    case 25:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) { return e.apply(this, arguments) }
                                    }()));
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                O = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(j.k)(), r = n.map((function(e) { return { address: Object(j.a)(e.lpAddresses), name: "allowance", params: [t, a] } })), e.next = 4, Object(m.a)(y, r);
                                case 4:
                                    return s = e.sent, o = s.map((function(e) { return new d.a(e).toJSON() })), e.abrupt("return", o);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                x = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = n.map((function(e) { return { address: Object(j.a)(e.lpAddresses), name: "balanceOf", params: [t] } })), e.next = 3, Object(m.a)(y, a);
                                case 3:
                                    return r = e.sent, s = r.map((function(e) { return new d.a(e).toJSON() })), e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                v = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(j.k)(), r = n.map((function(e) { return { address: a, name: "userInfo", params: [e.pid, t] } })), e.next = 4, Object(m.a)(b, r);
                                case 4:
                                    return s = e.sent, o = s.map((function(e) { return new d.a(e[0]._hex).toJSON() })), e.abrupt("return", o);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                T = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(j.k)(), r = n.map((function(e) { return { address: a, name: "pendingRNBO", params: [e.pid, t] } })), e.next = 4, Object(m.a)(b, r);
                                case 4:
                                    return s = e.sent, o = s.map((function(e) { return new d.a(e).toJSON() })), e.abrupt("return", o);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                w = u.a.filter((function(e) { var t = e.pid; return !Object(c.a)(t) })),
                k = { data: u.a.map((function(e) { return Object(s.a)(Object(s.a)({}, e), {}, { userData: { allowance: "0", tokenBalance: "0", stakedBalance: "0", earnings: "0" } }) })), loadArchivedFarmsData: !1, userDataLoaded: !1 },
                g = Object(o.c)({
                    name: "Farms",
                    initialState: k,
                    reducers: {
                        setFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) { var t = n.find((function(t) { return t.pid === e.pid })); return Object(s.a)(Object(s.a)({}, e), t) }))
                        },
                        setFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.pid,
                                    a = e.data.findIndex((function(e) { return e.pid === n }));
                                e.data[a] = Object(s.a)(Object(s.a)({}, e.data[a]), {}, { userData: t })
                            })), e.userDataLoaded = !0
                        },
                        setLoadArchivedFarmsData: function(e, t) {
                            var n = t.payload;
                            e.loadArchivedFarmsData = n
                        }
                    }
                }),
                A = g.actions,
                M = A.setFarmsPublicData,
                S = A.setFarmUserData,
                C = A.setLoadArchivedFarmsData,
                F = function() {
                    return function() {
                        var e = Object(r.a)(i.a.mark((function e(t, n) {
                            var a, r, s;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = n().farms.loadArchivedFarmsData, r = a ? u.a : w, e.next = 4, h(r);
                                    case 4:
                                        s = e.sent, t(M(s));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) { return e.apply(this, arguments) }
                    }()
                },
                L = function(e) {
                    return function() {
                        var t = Object(r.a)(i.a.mark((function t(n, a) {
                            var r, s, o, c, p, l, d;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = a().farms.loadArchivedFarmsData, s = r ? u.a : w, t.next = 4, O(e, s);
                                    case 4:
                                        return o = t.sent, t.next = 7, x(e, s);
                                    case 7:
                                        return c = t.sent, t.next = 10, v(e, s);
                                    case 10:
                                        return p = t.sent, t.next = 13, T(e, s);
                                    case 13:
                                        l = t.sent, d = o.map((function(e, t) { return { pid: s[t].pid, allowance: o[t], tokenBalance: c[t], stakedBalance: p[t], earnings: l[t] } })), n(S({ arrayOfUserDataObjects: d }));
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) { return t.apply(this, arguments) }
                    }()
                };
            t.a = g.reducer
        },
        162: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() { return s })), n.d(t, "a", (function() { return o })), n.d(t, "d", (function() { return u })), n.d(t, "b", (function() { return p })), n.d(t, "e", (function() { return c }));
            var a = n(14),
                i = (n(0), n(2)),
                r = n(1),
                s = function(e) { return Object(r.jsx)(i.U, Object(a.a)(Object(a.a)({ variant: "secondary", outline: !0, startIcon: Object(r.jsx)(i.Z, { color: "secondary" }) }, e), {}, { children: "Core" })) },
                o = function(e) { return Object(r.jsx)(i.U, Object(a.a)(Object(a.a)({ variant: "textSubtle", outline: !0, startIcon: Object(r.jsx)(i.t, { color: "secondary" }) }, e), {}, { children: "Community" })) },
                u = function(e) { return Object(r.jsx)(i.U, Object(a.a)(Object(a.a)({ variant: "textSubtle", outline: !0 }, e), {}, { children: "Dual" })) },
                c = function(e) { return Object(r.jsx)(i.U, Object(a.a)(Object(a.a)({ variant: "secondary", outline: !0, startIcon: Object(r.jsx)(i.P, { width: "18px", color: "secondary", mr: "4px" }) }, e), {}, { children: "Manual" })) },
                p = function(e) { return Object(r.jsx)(i.U, Object(a.a)(Object(a.a)({ variant: "success", outline: !0, startIcon: Object(r.jsx)(i.d, { width: "18px", color: "success", mr: "4px" }) }, e), {}, { children: "Auto" })) }
        },
        163: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return B })), n.d(t, "c", (function() { return _ }));
            var a = n(15),
                i = n(3),
                r = n.n(i),
                s = n(12),
                o = n(10),
                u = n(14),
                c = n(48),
                p = n(52),
                l = n(55),
                d = n(8),
                y = n.n(d),
                b = n(275),
                m = n.n(b),
                f = n(36),
                j = n(99),
                h = n(44),
                O = n(20),
                x = function() {
                    var e = Object(s.a)(r.a.mark((function e() {
                        var t, n, i, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = l.a.reduce((function(e, t) {
                                        var n = Object(O.a)(t.contractAddress),
                                            a = [{ address: n, name: "balance" }, { address: n, name: "priceShare" }, { address: n, name: "rewardPerToken" }, { address: n, name: "rewardRate" }, { address: n, name: "rewardsDuration" }, { address: n, name: "rewardsToken" }];
                                        return [].concat(Object(c.a)(e), a)
                                    }), []), n = l.a.reduce((function(e, t) { var n = [{ address: Object(O.a)(t.stakingToken), name: "balanceOf", params: [Object(O.k)()] }, { address: Object(O.a)(t.quoteToken.address), name: "balanceOf", params: [Object(O.a)(t.stakingToken)] }, { address: Object(O.a)(t.stakingToken), name: "totalSupply" }]; return [].concat(Object(c.a)(e), n) }), []), e.next = 4, Object(h.a)(j, t);
                                case 4:
                                    return i = e.sent, e.next = 7, Object(h.a)(j, n);
                                case 7:
                                    return s = e.sent, i = m()(i, 6), s = m()(s, 3), e.abrupt("return", Object(c.a)(l.a.map((function(e, t) {
                                        var n = Object(a.a)(s[t], 3),
                                            r = n[0],
                                            o = n[1],
                                            u = n[2],
                                            c = Object(a.a)(i[t], 6),
                                            p = c[0],
                                            l = c[1],
                                            d = c[2],
                                            b = c[3],
                                            m = c[4],
                                            j = c[5],
                                            h = new y.a(r).div(new y.a(u)),
                                            O = new y.a(o).div(f.a.pow(e.quoteToken.decimals)).times(new y.a(2)).times(h),
                                            x = O.times(p).div(r);
                                        return { pid: e.pid, totalStaked: new y.a(p).toJSON(), priceShare: new y.a(l).toJSON(), rewardPerToken: new y.a(d).toJSON(), rewardRate: new y.a(b).toJSON(), rewardsDuration: new y.a(m).toJSON(), rewardsToken: j, lpTotalInQuoteTokenNew: x.toJSON(), lpTokenBalanceMC: new y.a(r).toJSON(), lpTotalInQuoteToken: O.toJSON(), lpTotalSupply: new y.a(u).toJSON() }
                                    }))));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                v = n(72),
                T = n(37),
                w = n(64),
                k = Object(w.b)(),
                g = Object(T.l)(k),
                A = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = l.a.map((function(e) { return { address: Object(O.a)(e.stakingToken), name: "allowance", params: [t, Object(O.a)(e.contractAddress)] } })), e.next = 3, Object(h.a)(v, n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", l.a.reduce((function(e, t, n) { return Object(u.a)(Object(u.a)({}, e), {}, Object(o.a)({}, t.pid, new y.a(a[n]).toJSON())) }), {}));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                M = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = l.a.map((function(e) { return { address: Object(O.a)(e.stakingToken), name: "balanceOf", params: [t] } })), e.next = 3, Object(h.a)(v, n);
                                case 3:
                                    return a = e.sent, i = l.a.reduce((function(e, t, n) { return Object(u.a)(Object(u.a)({}, e), {}, Object(o.a)({}, t.pid, new y.a(a[n]).toJSON())) }), {}), e.abrupt("return", Object(u.a)({}, i));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                S = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = l.a.map((function(e) { return { address: Object(O.a)(e.contractAddress), name: "balanceOf", params: [t] } })), e.next = 3, Object(h.a)(j, n);
                                case 3:
                                    return a = e.sent, i = l.a.reduce((function(e, t, n) { return Object(u.a)(Object(u.a)({}, e), {}, Object(o.a)({}, t.pid, new y.a(a[n]).toJSON())) }), {}), e.abrupt("return", Object(u.a)({}, i));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                C = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = l.a.map((function(e) { return { address: Object(O.a)(e.contractAddress), name: "depositedAt", params: [t] } })), e.next = 3, Object(h.a)(j, n);
                                case 3:
                                    return a = e.sent, i = l.a.reduce((function(e, t, n) { return Object(u.a)(Object(u.a)({}, e), {}, Object(o.a)({}, t.pid, new y.a(a[n]).toJSON())) }), {}), e.abrupt("return", Object(u.a)({}, i));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                F = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, i, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = l.a.map((function(e) { return { address: Object(O.a)(e.contractAddress), name: "earned", params: [t] } })), e.next = 3, Object(h.a)(j, n);
                                case 3:
                                    return a = e.sent, e.next = 6, g.methods.getPricePerFullShare().call();
                                case 6:
                                    return i = e.sent, s = l.a.reduce((function(e, t, n) {
                                        var r = new y.a(i).dividedBy(f.a.pow(18)).toJSON(),
                                            s = new y.a(new y.a(a[n]).toJSON()).dividedBy(f.a.pow(18));
                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(o.a)({}, t.pid, s.multipliedBy(r).toJSON()))
                                    }), {}), e.abrupt("return", Object(u.a)({}, s));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                L = { data: Object(c.a)(l.a) },
                I = Object(p.c)({
                    name: "Pools",
                    initialState: L,
                    reducers: {
                        setMaximusFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) { var t = n.find((function(t) { return t.pid === e.pid })); return Object(u.a)(Object(u.a)({}, e), t) }))
                        },
                        setMaximusFarmsUserData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) { var t = n.find((function(t) { return t.pid === e.pid })); return Object(u.a)(Object(u.a)({}, e), {}, { userData: t }) }))
                        },
                        updatePoolsUserData: function(e, t) {
                            var n = t.payload,
                                a = n.field,
                                i = n.value,
                                r = n.pid,
                                s = e.data.findIndex((function(e) { return e.pid === r }));
                            e.data[s] = Object(u.a)(Object(u.a)({}, e.data[s]), {}, { userData: Object(u.a)(Object(u.a)({}, e.data[s].userData), {}, Object(o.a)({}, a, i)) })
                        }
                    }
                }),
                D = I.actions,
                P = D.setMaximusFarmsPublicData,
                E = D.setMaximusFarmsUserData,
                B = (D.updatePoolsUserData, function() {
                    return function() {
                        var e = Object(s.a)(r.a.mark((function e(t) {
                            var n, a;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, x();
                                    case 2:
                                        n = e.sent, a = l.a.map((function(e) { var t = n.find((function(t) { return t.pid === e.pid })); return Object(u.a)({}, t) })), t(P(a));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) { return e.apply(this, arguments) }
                    }()
                }),
                _ = function(e) {
                    return function() {
                        var t = Object(s.a)(r.a.mark((function t(n) {
                            var i, s, o, u, c, p, d, y, b;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return i = [A(e), M(e), S(e), F(e), C(e)], t.next = 3, Promise.all(i);
                                    case 3:
                                        s = t.sent, o = Object(a.a)(s, 5), u = o[0], c = o[1], p = o[2], d = o[3], y = o[4], b = l.a.map((function(e) { return { pid: e.pid, allowance: u[e.pid], stakingTokenBalance: c[e.pid], stakedBalance: p[e.pid], pendingReward: d[e.pid], depositAt: y[e.pid] } })), n(E(b));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) { return t.apply(this, arguments) }
                    }()
                };
            t.a = I.reducer
        },
        188: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return d }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(0),
                o = n(26),
                u = n(33),
                c = n(43),
                p = n(53),
                l = n(30),
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Object(u.b)(),
                        a = Object(o.c)(),
                        d = a.account,
                        y = Object(l.f)(),
                        b = Object(l.j)(e),
                        m = Object(s.useCallback)(function() {
                            var a = Object(r.a)(i.a.mark((function a(r, s) {
                                return i.a.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (0 !== e) { a.next = 5; break }
                                            return a.next = 3, Object(p.j)(y, 0, r, d);
                                        case 3:
                                            a.next = 12;
                                            break;
                                        case 5:
                                            if (!t) { a.next = 10; break }
                                            return a.next = 8, Object(p.f)(b, r, d);
                                        case 8:
                                            a.next = 12;
                                            break;
                                        case 10:
                                            return a.next = 12, Object(p.e)(b, r, s, d);
                                        case 12:
                                            n(Object(c.n)(e, d)), n(Object(c.l)(e, d));
                                        case 14:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })));
                            return function(e, t) { return a.apply(this, arguments) }
                        }(), [d, n, t, y, b, e]);
                    return { onStake: m }
                };
            t.a = function(e) {
                var t = Object(u.b)(),
                    n = Object(o.c)().account,
                    a = Object(l.f)();
                return {
                    onStake: Object(s.useCallback)(function() {
                        var s = Object(r.a)(i.a.mark((function r(s) {
                            var o;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.next = 2, Object(p.j)(a, e, s, n);
                                    case 2:
                                        o = i.sent, t(Object(c.b)(n)), console.info(o);
                                    case 5:
                                    case "end":
                                        return i.stop()
                                }
                            }), r)
                        })));
                        return function(e) { return s.apply(this, arguments) }
                    }(), [n, t, a, e])
                }
            }
        },
        189: function(e) { e.exports = JSON.parse('[{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]') },
        19: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return h })), n.d(t, "b", (function() { return O }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(14),
                o = n(15),
                u = n(0),
                c = n(74),
                p = n(433),
                l = "RNBOfinance_language",
                d = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat("", "/locales/").concat(t, ".json"));
                                case 2:
                                    return n = e.sent, e.next = 5, n.json();
                                case 5:
                                    return a = e.sent, e.abrupt("return", a);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                y = function() { try { return localStorage.getItem(l) || c.a.locale } catch (e) { return c.a.locale } },
                b = n(1),
                m = { isFetching: !0, currentLanguage: c.a },
                f = new Map;
            f.set(c.a.locale, p);
            var j = Object(u.createContext)(void 0),
                h = function(e) {
                    var t = e.children,
                        n = Object(u.useState)((function() { var e = y(); return Object(s.a)(Object(s.a)({}, m), {}, { currentLanguage: c.c[e] }) })),
                        a = Object(o.a)(n, 2),
                        p = a[0],
                        h = a[1],
                        O = p.currentLanguage;
                    Object(u.useEffect)((function() {
                        (function() {
                            var e = Object(r.a)(i.a.mark((function e() {
                                var t, n, a;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((t = y()) === c.a.locale) { e.next = 7; break }
                                            return n = f.get(c.a.locale), e.next = 5, d(t);
                                        case 5:
                                            a = e.sent, f.set(t, Object(s.a)(Object(s.a)({}, n), a));
                                        case 7:
                                            h((function(e) { return Object(s.a)(Object(s.a)({}, e), {}, { isFetching: !1 }) }));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        })()()
                    }), [h]);
                    var x = function() {
                            var e = Object(r.a)(i.a.mark((function e(t) {
                                var n, a;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (f.has(t.locale)) { e.next = 11; break }
                                            return h((function(e) { return Object(s.a)(Object(s.a)({}, e), {}, { isFetching: !0 }) })), e.next = 4, d(t.locale);
                                        case 4:
                                            n = e.sent, a = f.get(c.a.locale), f.set(t.locale, Object(s.a)(Object(s.a)({}, a), n)), localStorage.setItem(l, t.locale), h((function(e) { return Object(s.a)(Object(s.a)({}, e), {}, { isFetching: !1, currentLanguage: t }) })), e.next = 13;
                                            break;
                                        case 11:
                                            localStorage.setItem(l, t.locale), h((function(e) { return Object(s.a)(Object(s.a)({}, e), {}, { isFetching: !1, currentLanguage: t }) }));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        v = Object(u.useCallback)((function(e, t) {
                            var n = (f.has(O.locale) ? f.get(O.locale) : f.get(c.a.locale))[e] || e;
                            if (n.match(/%\S+?%/gm) && t) {
                                var a = n;
                                return Object.keys(t).forEach((function(e) {
                                    var n = new RegExp("%".concat(e, "%"), "g");
                                    a = a.replace(n, t[e].toString())
                                })), a
                            }
                            return n
                        }), [O]);
                    return Object(b.jsx)(j.Provider, { value: Object(s.a)(Object(s.a)({}, p), {}, { setLanguage: x, t: v }), children: t })
                },
                O = function() { var e = Object(u.useContext)(j); if (void 0 === e) throw new Error("Language context is undefined"); return e }
        },
        190: function(e, t, n) {
            "use strict";
            var a = n(27),
                i = n(94).a.find((function(e) { return 4 === e.pid })),
                r = [{ id: "ftt", address: "0x59f9750697526A8B7872C8800a93500000000", isActive: !0, name: "TEST (FTT)", poolBasic: { saleAmount: "30 FTT", raiseAmount: "$3", RNBOToBurn: "$1.5", distributionRatio: .3 }, poolUnlimited: { saleAmount: "70 FTT", raiseAmount: "$7", RNBOToBurn: "$3.5", distributionRatio: .7 }, currency: { symbol: i.lpSymbol, address: i.lpAddresses, decimals: 18 }, token: a.a.test, releaseTimestamp: 7707736, campaignId: "511110000", articleUrl: "https://pancakeswap.medium.com/kalmar-kalm-ifo-to-be-hosted-on-pancakeswap-4540059753e4", tokenOfferingPrice: .1, version: 2 }];
            t.a = r
        },
        191: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return r }));
            var a = n(52),
                i = Object(a.c)({ name: "Block", initialState: { currentBlock: 0, initialBlock: 0 }, reducers: { setBlock: function(e, t) { 0 === e.initialBlock && (e.initialBlock = t.payload), e.currentBlock = t.payload } } }),
                r = i.actions.setBlock;
            t.a = i.reducer
        },
        192: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return o })), n.d(t, "a", (function() { return u }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(203),
                o = function() {
                    var e = Object(r.a)(i.a.mark((function e() {
                        var t, n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t = window.ethereum)) { e.next = 15; break }
                                    return n = parseInt("43114", 10), e.prev = 3, e.next = 6, t.request({ method: "wallet_addEthereumChain", params: [{ chainId: "0x".concat(n.toString(16)), chainName: "Avalanche Mainnet", nativeCurrency: { name: "AVAX", symbol: "avax", decimals: 18 }, rpcUrls: s.b, blockExplorerUrls: ["https://cchain.explorer.avax.network/"] }] });
                                case 6:
                                    return e.abrupt("return", !0);
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(3), console.error(e.t0), e.abrupt("return", !1);
                                case 13:
                                    e.next = 17;
                                    break;
                                case 15:
                                    return console.error("Can't setup the AVAX network on metamask because window.ethereum is undefined"), e.abrupt("return", !1);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 9]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                u = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a, r) {
                        var s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, window.ethereum.request({ method: "wallet_watchAsset", params: { type: "ERC20", options: { address: t, symbol: n, decimals: a, image: r } } });
                                case 2:
                                    return s = e.sent, e.abrupt("return", s);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a, i) { return e.apply(this, arguments) }
                }()
        },
        193: function(e, t, n) {
            "use strict";
            var a, i = n(21),
                r = n(7).e.div(a || (a = Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }));
            t.a = r
        },
        194: function(e, t, n) {
            "use strict";
            var a = n(15),
                i = n(14),
                r = n(125),
                s = n.n(r),
                o = n(0),
                u = { hydrate: s.a, dehydrate: s.a };
            t.a = function(e, t) {
                var n = Object(i.a)(Object(i.a)({}, u), t),
                    r = n.localStorageKey,
                    s = n.hydrate,
                    c = n.dehydrate,
                    p = Object(o.useState)((function() { try { var t = localStorage.getItem(r); return t ? s(JSON.parse(t)) : e } catch (n) { return e } })),
                    l = Object(a.a)(p, 2),
                    d = l[0],
                    y = l[1];
                return Object(o.useEffect)((function() { localStorage.setItem(r, JSON.stringify(c(d))) }), [d, r, c]), [d, y]
            }
        },
        195: function(e, t, n) {
            "use strict";
            var a, i = n(21),
                r = n(7).e.div(a || (a = Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));
            t.a = r
        },
        196: function(e, t, n) {
            "use strict";
            var a, i, r = n(21),
                s = (n(0), n(7)),
                o = n(2),
                u = n(19),
                c = n(79),
                p = n(1),
                l = s.e.div(a || (a = Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),
                d = s.e.div(i || (i = Object(r.a)(["\n  margin-bottom: '10px';\n"])));
            t.a = function(e) {
                var t = e.onDismiss,
                    n = e.tokenPrice,
                    a = e.apr,
                    i = e.linkLabel,
                    r = e.linkHref,
                    s = e.earningTokenSymbol,
                    y = void 0 === s ? "RNBO" : s,
                    b = e.roundingDecimals,
                    m = void 0 === b ? 2 : b,
                    f = e.compoundFrequency,
                    j = void 0 === f ? 1 : f,
                    h = e.performanceFee,
                    O = void 0 === h ? 0 : h,
                    x = Object(u.b)().t,
                    v = 1e3 / n,
                    T = Object(c.b)({ numberOfDays: 1, farmApr: a, tokenPrice: n, roundingDecimals: m, compoundFrequency: j, performanceFee: O }),
                    w = Object(c.b)({ numberOfDays: 7, farmApr: a, tokenPrice: n, roundingDecimals: m, compoundFrequency: j, performanceFee: O }),
                    k = Object(c.b)({ numberOfDays: 30, farmApr: a, tokenPrice: n, roundingDecimals: m, compoundFrequency: j, performanceFee: O }),
                    g = Object(c.b)({ numberOfDays: 365, farmApr: a, tokenPrice: n, roundingDecimals: m, compoundFrequency: j, performanceFee: O });
                return Object(p.jsxs)(o.K, { title: "ROI", onDismiss: t, children: [Object(p.jsxs)(l, { children: [Object(p.jsx)(d, { children: Object(p.jsx)(o.V, { fontSize: "12px", bold: !0, color: "textSubtle", textTransform: "uppercase", mb: "20px", children: x("Timeframe") }) }), Object(p.jsx)(d, { children: Object(p.jsx)(o.V, { fontSize: "12px", bold: !0, color: "textSubtle", textTransform: "uppercase", mb: "20px", children: x("ROI") }) }), Object(p.jsx)(d, { children: Object(p.jsxs)(o.V, { fontSize: "12px", bold: !0, color: "textSubtle", textTransform: "uppercase", mb: "20px", children: [y, " ", x("per"), " $1000"] }) }), Object(p.jsx)(d, { children: Object(p.jsx)(o.V, { children: "1d" }) }), Object(p.jsx)(d, { children: Object(p.jsxs)(o.V, { children: [Object(c.a)({ amountEarned: T, amountInvested: v }).toFixed(m), "%"] }) }), Object(p.jsx)(d, { children: Object(p.jsx)(o.V, { children: T }) }), Object(p.jsx)(d, { children: Object(p.jsx)(o.V, { children: "7d" }) }), Object(p.jsx)(d, { children: Object(p.jsxs)(o.V, { children: [Object(c.a)({ amountEarned: w, amountInvested: v }).toFixed(m), "%"] }) }), Object(p.jsx)(d, { children: Object(p.jsx)(o.V, { children: w }) }), Object(p.jsx)(d, { children: Object(p.jsx)(o.V, { children: "30d" }) }), Object(p.jsx)(d, { children: Object(p.jsxs)(o.V, { children: [Object(c.a)({ amountEarned: k, amountInvested: v }).toFixed(m), "%"] }) }), Object(p.jsx)(d, { children: Object(p.jsx)(o.V, { children: k }) }), Object(p.jsx)(d, { children: Object(p.jsx)(o.V, { children: "365d(APY)" }) }), Object(p.jsx)(d, { children: Object(p.jsxs)(o.V, { children: [Object(c.a)({ amountEarned: g, amountInvested: v }).toFixed(m), "%"] }) }), Object(p.jsx)(d, { children: Object(p.jsx)(o.V, { children: g }) })] }), Object(p.jsxs)(o.g, { mb: "28px", maxWidth: "280px", children: [Object(p.jsx)(o.V, { fontSize: "12px", color: "textSubtle", children: x("Calculated based on current rates. Compounding %freq%x daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.", { freq: j.toLocaleString() }) }), O > 0 && Object(p.jsx)(o.V, { mt: "14px", fontSize: "12px", color: "textSubtle", children: x("All estimated rates take into account this pool's %fee%% performance fee", { fee: O }) })] }), Object(p.jsx)(o.x, { justifyContent: "center", children: Object(p.jsx)(o.E, { href: r, children: i }) })] })
            }
        },
        197: function(e, t, n) {
            "use strict";
            var a = n(15),
                i = n(0),
                r = n(402);
            t.a = function() {
                var e = Object(i.useState)(Date.now()),
                    t = Object(a.a)(e, 2),
                    n = t[0],
                    s = t[1];
                return { lastUpdated: n, previousLastUpdated: Object(r.a)(n), setLastUpdated: Object(i.useCallback)((function() { s(Date.now()) }), [s]) }
            }
        },
        198: function(e, t, n) {
            "use strict";
            var a = 3600,
                i = 86400,
                r = 2629800,
                s = 31557600;
            t.a = function(e) {
                var t = e,
                    n = { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
                return t >= s && (n.years = Math.floor(t / s), t -= n.years * s), t >= r && (n.months = Math.floor(t / r), t -= n.months * r), t >= i && (n.days = Math.floor(t / i), t -= n.days * i), t >= a && (n.hours = Math.floor(t / a), t -= n.hours * a), t >= 60 && (n.minutes = Math.floor(t / 60), t -= 60 * n.minutes), n.seconds = t, n
            }
        },
        199: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return b }));
            var a, i, r = n(14),
                s = n(406),
                o = n(21),
                u = (n(0), n(7)),
                c = n(2),
                p = n(193),
                l = n(1),
                d = Object(u.e)(c.g)(a || (a = Object(o.a)(["\n  background: ", ";\n"])), (function(e) { var t = e.theme; return e.background || t.colors.gradients.bubblegum })),
                y = Object(u.e)(p.a)(i || (i = Object(o.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"]))),
                b = function(e) {
                    var t = e.background,
                        n = e.children,
                        a = Object(s.a)(e, ["background", "children"]);
                    return Object(l.jsx)(d, Object(r.a)(Object(r.a)({ background: t }, a), {}, { children: Object(l.jsx)(y, { children: n }) }))
                }
        },
        20: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return T })), n.d(t, "g", (function() { return w })), n.d(t, "k", (function() { return k })), n.d(t, "n", (function() { return g })), n.d(t, "p", (function() { return A })), n.d(t, "e", (function() { return M })), n.d(t, "f", (function() { return S })), n.d(t, "j", (function() { return C })), n.d(t, "i", (function() { return F })), n.d(t, "c", (function() { return L })), n.d(t, "d", (function() { return I })), n.d(t, "o", (function() { return D })), n.d(t, "b", (function() { return P })), n.d(t, "h", (function() { return E })), n.d(t, "m", (function() { return B })), n.d(t, "l", (function() { return _ }));
            var a, i, r, s, o, u, c, p, l, d, y, b, m, f, j, h = n(13),
                O = n(10),
                x = { masterChef: (a = {}, Object(O.a)(a, h.a.FUJI, "0x000000000000000000000000"), Object(O.a)(a, h.a.AVALANCHE, "0xFb26525B14048B7BB1F3794F6129176195Db7766"), a), sousChef: (i = {}, Object(O.a)(i, h.a.FUJI, "0x45E43f8A4b43a53230b19B08dB3061A4FB421A4D"), Object(O.a)(i, h.a.AVALANCHE, "0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95"), i), mulltiCall: (r = {}, Object(O.a)(r, h.a.FUJI, "0xb465Fd2d9C71d5D6e6c069aaC9b4E21c69aAA78f"), Object(O.a)(r, h.a.AVALANCHE, "0x98e2060F672FD1656a07bc12D7253b5e41bF3876"), r), RNBOProfile: (s = {}, Object(O.a)(s, h.a.AVALANCHE, "0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a"), Object(O.a)(s, h.a.FUJI, "0x4B683C7E13B6d5D7fd1FeA9530F451954c1A7c8A"), s), RNBOLions: (o = {}, Object(O.a)(o, h.a.AVALANCHE, "0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07"), Object(O.a)(o, h.a.FUJI, "0x60935F36e4631F73f0f407e68642144e07aC7f5E"), o), bunnyFactory: (u = {}, Object(O.a)(u, h.a.AVALANCHE, ""), Object(O.a)(u, h.a.FUJI, ""), u), claimRefund: (c = {}, Object(O.a)(c, h.a.AVALANCHE, "0xE7e53A7e9E3Cf6b840f167eF69519175c497e149"), Object(O.a)(c, h.a.FUJI, ""), c), pointCenterIfo: (p = {}, Object(O.a)(p, h.a.AVALANCHE, ""), Object(O.a)(p, h.a.FUJI, ""), p), airdrop: (l = {}, Object(O.a)(l, h.a.FUJI, "0xCB352441720a070A7C00C67AbD02447514A7173A"), Object(O.a)(l, h.a.AVALANCHE, "0x2e00De8fa96056486eDf668136dC9dD50E1Dc4a7"), l), RNBOVault: (d = {}, Object(O.a)(d, h.a.FUJI, "0xaf8F7eB6A1263c7E0c6e3bA7Fd774E248EFc4953"), Object(O.a)(d, h.a.AVALANCHE, "0xA456bB3a9905D56A9b40D6361EDA931ed52d5bED"), d), loterrys: (y = {}, Object(O.a)(y, h.a.FUJI, "0x0A563f534EEA2Bcc97364b6f13E033AbA2BFCa73"), Object(O.a)(y, h.a.AVALANCHE, "0xC302c4f14f1E39747009AeB69682a1078C0795Cc"), y), lotteryNFT: (b = {}, Object(O.a)(b, h.a.FUJI, "0x2D48E0C7c0fd30541AEFFF0197BfD5C26C4d7351"), Object(O.a)(b, h.a.AVALANCHE, "0xDE75633aDBed27cE2660bE6598a4C3f32434f676"), b), maximusFeeManager: (m = {}, Object(O.a)(m, h.a.FUJI, "0x26C5c9BaFa0d19aa85Cc1cfD77d1536A59Be40D8"), Object(O.a)(m, h.a.AVALANCHE, "0x26C5c9BaFa0d19aa85Cc1cfD77d1536A59Be40D8"), m), maximusDashboard: (f = {}, Object(O.a)(f, h.a.FUJI, "0x86467285a3103C9bEfe415804589A9d19FAA552c"), Object(O.a)(f, h.a.AVALANCHE, "0x86467285a3103C9bEfe415804589A9d19FAA552c"), f), profile: (j = {}, Object(O.a)(j, h.a.FUJI, ""), Object(O.a)(j, h.a.AVALANCHE, ""), j) },
                v = n(27),
                T = function(e) { var t = h.a.AVALANCHE; return e[43114] ? e[43114] : e[t] },
                w = function() { return T(v.a.RNBO.address) },
                g = function() { return T(x.mulltiCall) },
                A = function() { return T(v.a.wavax.address) },
                C = function() { return T(x.RNBOProfile) },
                F = function() { return T(x.mulltiCall) },
                L = function() { return T(x.bunnyFactory) },
                I = function() { return T(x.claimRefund) },
                D = function() { return T(x.pointCenterIfo) },
                E = function() { return T(x.RNBOVault) },
                B = function() { return T(x.maximusFeeManager) },
                _ = function() { return T(x.maximusDashboard) }
        },
        203: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return r }));
            var a = n(416),
                i = n.n(a),
                r = ["https://api.avax.network/ext/bc/C/rpc"];
            t.a = function() { var e = i()(0, r.length - 1); return r[e] }
        },
        204: function(e) { e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        205: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return c }));
            var a = n(3),
                i = n.n(a),
                r = n(10),
                s = n(14),
                o = n(12),
                u = n(52),
                c = Object(u.b)("prices/fetch", Object(o.a)(i.a.mark((function e() {
                    var t, n;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("https://api.RNBO.finance/api/v1/price");
                            case 2:
                                return t = e.sent, e.next = 5, t.json();
                            case 5:
                                return n = e.sent, e.abrupt("return", { update_at: n.update_at, prices: Object.keys(n.prices).reduce((function(e, t) { return Object(s.a)(Object(s.a)({}, e), {}, Object(r.a)({}, t.toLowerCase(), n.prices[t])) }), {}) });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))),
                p = Object(u.c)({ name: "prices", initialState: { isLoading: !1, lastUpdated: null, data: null }, reducers: {}, extraReducers: function(e) { e.addCase(c.pending, (function(e) { e.isLoading = !0 })), e.addCase(c.fulfilled, (function(e, t) { e.isLoading = !1, e.lastUpdated = t.payload.update_at, e.data = t.payload.prices })) } });
            t.a = p.reducer
        },
        206: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return p })), n.d(t, "b", (function() { return l }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(15),
                o = n(0),
                u = n.n(o),
                c = n(1),
                p = u.a.createContext({ slow: 0, fast: 0 }),
                l = function(e) {
                    var t = e.children,
                        n = Object(o.useState)(0),
                        a = Object(s.a)(n, 2),
                        u = a[0],
                        l = a[1],
                        d = Object(o.useState)(0),
                        y = Object(s.a)(d, 2),
                        b = y[0],
                        m = y[1];
                    return Object(o.useEffect)((function() {
                        var e = setInterval(Object(r.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        m((function(e) { return e + 1 }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 1e4);
                        return function() { return clearInterval(e) }
                    }), []), Object(o.useEffect)((function() {
                        var e = setInterval(Object(r.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        l((function(e) { return e + 1 }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 6e4);
                        return function() { return clearInterval(e) }
                    }), []), Object(c.jsx)(p.Provider, { value: { slow: u, fast: b }, children: t })
                }
        },
        207: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return u })), n.d(t, "b", (function() { return c }));
            var a = n(10),
                i = n(166),
                r = n(2),
                s = parseInt("43114", 10),
                o = new i.a({ supportedChainIds: [s] }),
                u = Object(a.a)({}, r.u.Injected, o),
                c = function(e) { return e }
        },
        208: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return p })), n.d(t, "b", (function() { return l }));
            var a = n(15),
                i = n(0),
                r = n.n(i),
                s = n(7),
                o = n(2),
                u = n(1),
                c = "IS_DARK",
                p = r.a.createContext({ isDark: null, toggleTheme: function() { return null } }),
                l = function(e) {
                    var t = e.children,
                        n = Object(i.useState)((function() { var e = localStorage.getItem(c); return !e || JSON.parse(e) })),
                        r = Object(a.a)(n, 2),
                        l = r[0],
                        d = r[1];
                    return Object(u.jsx)(p.Provider, { value: { isDark: l, toggleTheme: function() { d((function(e) { return localStorage.setItem(c, JSON.stringify(!e)), !e })) } }, children: Object(u.jsx)(s.b, { theme: l ? o.cb : o.db, children: t }) })
                }
        },
        209: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return w }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(2),
                o = n(52),
                u = n(98),
                c = n(145),
                p = n(48),
                l = n(21),
                d = n(274),
                y = [{ id: "0", type: "ifo", title: "", badge: "xx.svg" }],
                b = new Map;
            y.forEach((function(e) { b.set(e.id, e) }));
            n(37), n(190), n(65);
            var m, f = function(e) { return e.type, e.title },
                j = function(e) { return e.type, e.description },
                h = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(d.request)("https://api.thegraph.com/subgraphs/name/RNBOswap/profile", Object(d.gql)(m || (m = Object(l.a)(['\n        {\n          user(id: "', '") {\n            points {\n              id\n              campaignId\n              points\n            }\n          }\n        }\n      '])), t.toLowerCase()));
                                case 3:
                                    return n = e.sent, e.abrupt("return", n.user.points);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                O = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, h(t);
                                case 2:
                                    if (n = e.sent) { e.next = 5; break }
                                    return e.abrupt("return", []);
                                case 5:
                                    return e.abrupt("return", n.reduce((function(e, t) { var n = b.get(t.campaignId); return [].concat(Object(p.a)(e), [{ id: t.campaignId, type: n.type, address: t.id, title: f(n), description: j(n), badge: n.badge, points: Number(t.points) }]) }), []));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                x = Object(o.c)({ name: "achievements", initialState: { data: [] }, reducers: { addAchievement: function(e, t) { e.data.push(t.payload) }, addAchievements: function(e, t) { e.data.concat(t.payload) }, setAchievements: function(e, t) { e.data = t.payload }, clearAchievements: function(e) { e.data = [] } } }),
                v = x.actions,
                T = (v.addAchievement, v.addAchievements, v.setAchievements),
                w = (v.clearAchievements, function(e) {
                    return function() {
                        var t = Object(r.a)(i.a.mark((function t(n) {
                            var a, r;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, O(e);
                                    case 3:
                                        a = t.sent, n(T(a)), t.next = 12;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(0), console.error(t.t0), r = "Error fetching achievements", n(Object(c.b)({ id: Object(u.kebabCase)(r), type: s.eb.DANGER, title: r }));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 7]
                            ])
                        })));
                        return function(e) { return t.apply(this, arguments) }
                    }()
                });
            t.a = x.reducer
        },
        23: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() { return s })), n.d(t, "b", (function() { return o })), n.d(t, "c", (function() { return u })), n.d(t, "e", (function() { return c })), n.d(t, "a", (function() { return p }));
            var a = n(8),
                i = n.n(a),
                r = n(36),
                s = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18; return new i.a(e).times(r.a.pow(t)) },
                o = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18; return new i.a(e).dividedBy(r.a.pow(t)) },
                u = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18; return o(e, t).toNumber() },
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return e.dividedBy(r.a.pow(t)).toFixed(n)
                },
                p = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
                        a = { minimumFractionDigits: t, maximumFractionDigits: n };
                    return e.toLocaleString(void 0, a)
                }
        },
        256: function(e, t, n) {
            "use strict";
            var a = n(94);
            n.d(t, "a", (function() { return a.a }));
            var i = n(67);
            n.d(t, "c", (function() { return i.a }));
            var r = n(55);
            n.d(t, "b", (function() { return r.a }));
            n(190), a.a.filter((function(e) { return e.isCommunity })).map((function(e) { return e.token.symbol }))
        },
        27: function(e, t, n) {
            "use strict";
            var a, i, r, s, o, u, c, p, l, d, y, b, m, f, j, h, O = n(10),
                x = n(13),
                v = { avax: { symbol: "AVAX", projectLink: "https://www.avalabs.org/" }, wavax: { symbol: "WAVAX", address: (a = {}, Object(O.a)(a, x.a.AVALANCHE, "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"), Object(O.a)(a, x.a.FUJI, "0xd00ae08403B9bbb9124bB305C09058E32C39A48c"), a), decimals: 18, projectLink: "https://www.avalabs.org/" }, RNBO: { symbol: "RNBO", address: (i = {}, Object(O.a)(i, x.a.AVALANCHE, "0x4C9B4E1AC6F24CdE3660D5E4Ef1eBF77C710C084"), Object(O.a)(i, x.a.FUJI, "0xDe5D7A6484E885eDcCA237dFa93E970DA60F74Db"), i), decimals: 18, projectLink: "https://RNBO.finance/" }, electrum: { symbol: "ELECTRUM", address: (r = {}, Object(O.a)(r, x.a.AVALANCHE, "0x814409AbbC142fa5824C034d564D8D738b20cD51"), Object(O.a)(r, x.a.FUJI, "0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9"), r), decimals: 18, projectLink: "https://RNBO.finance/" }, usdt: { symbol: "USDT", address: (s = {}, Object(O.a)(s, x.a.AVALANCHE, "0xde3A24028580884448a5397872046a019649b084"), Object(O.a)(s, x.a.FUJI, "0x7E3a976295AD9426168500a288015CC7b24ebf3A"), s), decimals: 6, projectLink: "https://tether.to/" }, eth: { symbol: "ETH", address: (o = {}, Object(O.a)(o, x.a.AVALANCHE, "0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15"), Object(O.a)(o, x.a.FUJI, "0x0D4cBc976E19aB50d8C67275bDc0c8cA43b0c471"), o), decimals: 18, projectLink: "https://ptokens.io/" }, sushi: { symbol: "SUSHI", address: (u = {}, Object(O.a)(u, x.a.AVALANCHE, "0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc"), Object(O.a)(u, x.a.FUJI, "0x4e881Ca1e81A176D09e45370DE3622dADC8aE34c"), u), decimals: 18, projectLink: "https://ptokens.io/" }, dai: { symbol: "DAI", address: (c = {}, Object(O.a)(c, x.a.AVALANCHE, "0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a"), Object(O.a)(c, x.a.FUJI, "0xb090C5b83CaC5Cf751E8CB8F8B2401fF6799d011"), c), decimals: 18, projectLink: "https://ptokens.io/" }, uni: { symbol: "UNI", address: (p = {}, Object(O.a)(p, x.a.AVALANCHE, "0xf39f9671906d8630812f9d9863bBEf5D523c84Ab"), Object(O.a)(p, x.a.FUJI, "0x6d3b5f42F625031304A86dfBC6bBA506f6047088"), p), decimals: 18, projectLink: "https://ptokens.io/" }, png: { symbol: "PNG", address: (l = {}, Object(O.a)(l, x.a.AVALANCHE, "0x60781C2586D68229fde47564546784ab3fACA982"), Object(O.a)(l, x.a.FUJI, "0xDFE6639633394fC5C8ADc14f12Dc0F99Cf6cc71d"), l), decimals: 18, projectLink: "https://ptokens.io/" }, wbtc: { symbol: "WBTC", address: (d = {}, Object(O.a)(d, x.a.AVALANCHE, "0x408d4cd0adb7cebd1f1a1c33a0ba2098e1295bab"), Object(O.a)(d, x.a.FUJI, "0xDFE6639633394fC5C8ADc14f12Dc0F99Cf6cc71d"), d), decimals: 8, projectLink: "https://ptokens.io/" }, snob: { symbol: "SNOB", address: (y = {}, Object(O.a)(y, x.a.AVALANCHE, "0xc38f41a296a4493ff429f1238e030924a1542e50"), Object(O.a)(y, x.a.FUJI, "0xDFE6639633394fC5C8ADc14f12Dc0F99Cf6cc71d"), y), decimals: 18, projectLink: "https://snowball.network/" }, xava: { symbol: "XAVA", address: (b = {}, Object(O.a)(b, x.a.AVALANCHE, "0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4"), Object(O.a)(b, x.a.FUJI, "0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4"), b), decimals: 18, projectLink: "https://avalaunch.app/" }, olive: { symbol: "OLIVE", address: (m = {}, Object(O.a)(m, x.a.AVALANCHE, "0x617724974218a18769020a70162165a539c07e8a"), Object(O.a)(m, x.a.FUJI, "0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4"), m), decimals: 18, projectLink: "https://avax.olive.cash/" }, test: { symbol: "FTT", address: (f = {}, Object(O.a)(f, x.a.AVALANCHE, "0xB3cC853242461aCab2177C7493e38E558de10619"), Object(O.a)(f, x.a.FUJI, "0xB3cC853242461aCab2177C7493e38E558de10619"), f), decimals: 6, projectLink: "https://avax.olive.cash/" }, bag: { symbol: "BAG", address: (j = {}, Object(O.a)(j, x.a.AVALANCHE, "0xa1144a6A1304bd9cbb16c800F7a867508726566E"), Object(O.a)(j, x.a.FUJI, "0xa1144a6A1304bd9cbb16c800F7a867508726566E"), j), decimals: 18, projectLink: "https://baguette.exchange" }, yak: { symbol: "YAK", address: (h = {}, Object(O.a)(h, x.a.AVALANCHE, "0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7"), Object(O.a)(h, x.a.FUJI, "0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7"), h), decimals: 18, projectLink: "https://yieldyak.com" } };
            t.a = v
        },
        277: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return d })), n.d(t, "c", (function() { return y })), n.d(t, "b", (function() { return b }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(0),
                o = n(26),
                u = (n(109), n(33)),
                c = n(43),
                p = n(53),
                l = n(30),
                d = function(e) {
                    var t = Object(u.b)(),
                        n = Object(o.c)().account,
                        a = Object(l.f)();
                    return {
                        onApprove: Object(s.useCallback)(Object(r.a)(i.a.mark((function r() {
                            var s;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.prev = 0, i.next = 3, Object(p.a)(e, a, n);
                                    case 3:
                                        return s = i.sent, t(Object(c.b)(n)), i.abrupt("return", s);
                                    case 8:
                                        return i.prev = 8, i.t0 = i.catch(0), i.abrupt("return", !1);
                                    case 11:
                                    case "end":
                                        return i.stop()
                                }
                            }), r, null, [
                                [0, 8]
                            ])
                        }))), [n, t, e, a])
                    }
                },
                y = function(e, t) {
                    var n = Object(u.b)(),
                        a = Object(o.c)().account,
                        d = Object(l.j)(t);
                    return {
                        onApprove: Object(s.useCallback)(Object(r.a)(i.a.mark((function r() {
                            var s;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.prev = 0, i.next = 3, Object(p.a)(e, d, a);
                                    case 3:
                                        return s = i.sent, n(Object(c.k)(t, a)), i.abrupt("return", s);
                                    case 8:
                                        return i.prev = 8, i.t0 = i.catch(0), i.abrupt("return", !1);
                                    case 11:
                                    case "end":
                                        return i.stop()
                                }
                            }), r, null, [
                                [0, 8]
                            ])
                        }))), [a, n, e, d, t])
                    }
                },
                b = function() {
                    var e = Object(o.c)().account,
                        t = Object(l.d)(),
                        n = Object(l.b)();
                    return {
                        onApprove: Object(s.useCallback)(Object(r.a)(i.a.mark((function a() {
                            var r;
                            return i.a.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.prev = 0, a.next = 3, Object(p.a)(t, n, e);
                                    case 3:
                                        return r = a.sent, a.abrupt("return", r);
                                    case 7:
                                        return a.prev = 7, a.t0 = a.catch(0), a.abrupt("return", !1);
                                    case 10:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [0, 7]
                            ])
                        }))), [e, t, n])
                    }
                }
        },
        278: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return y })), n.d(t, "a", (function() { return b })), n.d(t, "c", (function() { return m }));
            var a = n(48),
                i = n(3),
                r = n.n(i),
                s = n(12),
                o = n(0),
                u = n(26),
                c = n(33),
                p = n(43),
                l = n(53),
                d = n(30),
                y = function(e) {
                    var t = Object(c.b)(),
                        n = Object(u.c)().account,
                        a = Object(d.f)();
                    return {
                        onReward: Object(o.useCallback)(Object(s.a)(r.a.mark((function i() {
                            var s;
                            return r.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.next = 2, Object(l.b)(a, e, n);
                                    case 2:
                                        return s = i.sent, t(Object(p.b)(n)), i.abrupt("return", s);
                                    case 5:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        }))), [n, t, e, a])
                    }
                },
                b = function(e) {
                    var t = Object(u.c)().account,
                        n = Object(d.f)();
                    return {
                        onReward: Object(o.useCallback)(Object(s.a)(r.a.mark((function i() {
                            var s;
                            return r.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return s = e.reduce((function(e, i) { return [].concat(Object(a.a)(e), [Object(l.b)(n, i, t)]) }), []), i.abrupt("return", Promise.all(s));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        }))), [t, e, n])
                    }
                },
                m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Object(c.b)(),
                        a = Object(u.c)(),
                        i = a.account,
                        y = Object(d.j)(e),
                        b = Object(d.f)(),
                        m = Object(o.useCallback)(Object(s.a)(r.a.mark((function a() {
                            return r.a.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (0 !== e) { a.next = 5; break }
                                        return a.next = 3, Object(l.b)(b, 0, i);
                                    case 3:
                                        a.next = 12;
                                        break;
                                    case 5:
                                        if (!t) { a.next = 10; break }
                                        return a.next = 8, Object(l.i)(y, i);
                                    case 8:
                                        a.next = 12;
                                        break;
                                    case 10:
                                        return a.next = 12, Object(l.h)(y, i);
                                    case 12:
                                        n(Object(p.m)(e, i)), n(Object(p.l)(e, i));
                                    case 14:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        }))), [i, n, t, b, y, e]);
                    return { onReward: m }
                }
        },
        282: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return y }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(0),
                o = n(26),
                u = n(33),
                c = n(43),
                p = n(53),
                l = n(30),
                d = n(146),
                y = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Object(d.b)(),
                        a = Object(o.c)(),
                        u = a.account,
                        y = Object(l.f)(),
                        b = Object(l.j)(e),
                        m = Object(s.useCallback)(function() {
                            var a = Object(r.a)(i.a.mark((function a(r, s) {
                                var o, l, d;
                                return i.a.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (0 !== e) { a.next = 7; break }
                                            return a.next = 3, Object(p.k)(y, 0, r, u);
                                        case 3:
                                            o = a.sent, console.info(o), a.next = 18;
                                            break;
                                        case 7:
                                            if (!t) { a.next = 14; break }
                                            return a.next = 10, Object(p.d)(b, u);
                                        case 10:
                                            l = a.sent, console.info(l), a.next = 18;
                                            break;
                                        case 14:
                                            return a.next = 16, Object(p.g)(b, r, s, u);
                                        case 16:
                                            d = a.sent, console.info(d);
                                        case 18:
                                            n(Object(c.n)(e, u)), n(Object(c.l)(e, u)), n(Object(c.m)(e, u));
                                        case 21:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })));
                            return function(e, t) { return a.apply(this, arguments) }
                        }(), [u, n, t, y, b, e]);
                    return { onUnstake: m }
                };
            t.a = function(e) {
                var t = Object(u.b)(),
                    n = Object(o.c)().account,
                    a = Object(l.f)();
                return {
                    onUnstake: Object(s.useCallback)(function() {
                        var s = Object(r.a)(i.a.mark((function r(s) {
                            var o;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.next = 2, Object(p.k)(a, e, s, n);
                                    case 2:
                                        o = i.sent, t(Object(c.b)(n)), console.info(o);
                                    case 5:
                                    case "end":
                                        return i.stop()
                                }
                            }), r)
                        })));
                        return function(e) { return s.apply(this, arguments) }
                    }(), [n, t, a, e])
                }
            }
        },
        295: function(e, t, n) {
            "use strict";
            t.a = function(e) { return e >= 139 && e <= 250 }
        },
        30: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return s })), n.d(t, "d", (function() { return o })), n.d(t, "b", (function() { return u })), n.d(t, "c", (function() { return c })), n.d(t, "f", (function() { return p })), n.d(t, "j", (function() { return l })), n.d(t, "e", (function() { return d })), n.d(t, "i", (function() { return y })), n.d(t, "g", (function() { return b })), n.d(t, "h", (function() { return m }));
            var a = n(0),
                i = n(50),
                r = n(37),
                s = function(e) { var t = Object(i.a)(); return Object(a.useMemo)((function() { return Object(r.b)(e, t) }), [e, t]) },
                o = function() { var e = Object(i.a)(); return Object(a.useMemo)((function() { return Object(r.k)(e) }), [e]) },
                u = function() { var e = Object(i.a)(); return Object(a.useMemo)((function() { return Object(r.i)(e) }), [e]) },
                c = function() { var e = Object(i.a)(); return Object(a.useMemo)((function() { return Object(r.j)(e) }), [e]) },
                p = function() { var e = Object(i.a)(); return Object(a.useMemo)((function() { return Object(r.n)(e) }), [e]) },
                l = function(e) { var t = Object(i.a)(); return Object(a.useMemo)((function() { return Object(r.u)(e, t) }), [e, t]) },
                d = function() { var e = Object(i.a)(); return Object(a.useMemo)((function() { return Object(r.l)(e) }), [e]) },
                y = function() { var e = Object(i.a)(); return Object(a.useMemo)((function() { return Object(r.q)(e) }), [e]) },
                b = function(e) { var t = Object(i.a)(); return Object(a.useMemo)((function() { return Object(r.o)(e, t) }), [e, t]) },
                m = function() { var e = Object(i.a)(); return Object(a.useMemo)((function() { return Object(r.p)(e) }), [e]) }
        },
        35: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() { return D })), n.d(t, "d", (function() { return P })), n.d(t, "b", (function() { return B })), n.d(t, "c", (function() { return _ })), n.d(t, "k", (function() { return N })), n.d(t, "j", (function() { return U })), n.d(t, "m", (function() { return V })), n.d(t, "f", (function() { return Y })), n.d(t, "e", (function() { return R })), n.d(t, "i", (function() { return H })), n.d(t, "h", (function() { return J })), n.d(t, "l", (function() { return W })), n.d(t, "a", (function() { return z }));
            var a, i = n(14),
                r = n(3),
                s = n.n(r),
                o = n(12),
                u = n(0),
                c = n(8),
                p = n.n(c),
                l = n(98),
                d = (n(26), n(2)),
                y = n(33),
                b = (n(146), n(64)),
                m = n(113),
                f = (n(36), n(23), n(10)),
                j = n(13),
                h = n(68),
                O = Object(f.a)({}, h.a.RNBO, { address: (a = {}, Object(f.a)(a, j.a.FUJI, ""), Object(f.a)(a, j.a.AVALANCHE, ""), a), identifierKey: "image" }),
                x = [],
                v = n(48),
                T = n(15),
                w = n(52),
                k = n(20),
                g = n(37),
                A = function(e) { var t = Object.values(O).find((function(t) { return Object(k.a)(t.address) === e })); return t ? t.identifierKey : null },
                M = function(e) { return e.startsWith("ipfs://") ? "".concat("https://gateway.pinata.cloud", "/ipfs/").concat(e.slice(6)) : e },
                S = function() {
                    var e = Object(o.a)(s.a.mark((function e(t, n) {
                        var a, i, r, o;
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, a = Object(g.e)(t), e.next = 4, a.methods.tokenURI(n).call();
                                case 4:
                                    return i = e.sent, e.next = 7, fetch(M(i));
                                case 7:
                                    if ((r = e.sent).ok) { e.next = 10; break }
                                    return e.abrupt("return", null);
                                case 10:
                                    return e.next = 12, r.json();
                                case 12:
                                    return o = e.sent, e.abrupt("return", o);
                                case 16:
                                    return e.prev = 16, e.t0 = e.catch(0), console.error("getTokenUriData", e.t0), e.abrupt("return", null);
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 16]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                C = function() {
                    var e = Object(o.a)(s.a.mark((function e(t, n) {
                        var a, i;
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, S(t, n);
                                case 2:
                                    if (a = e.sent, i = A(t), a) { e.next = 6; break }
                                    return e.abrupt("return", null);
                                case 6:
                                    if (i) { e.next = 8; break }
                                    return e.abrupt("return", null);
                                case 8:
                                    if (a[i]) { e.next = 10; break }
                                    return e.abrupt("return", null);
                                case 10:
                                    return e.abrupt("return", x.find((function(e) { return a[i].includes(e.identifier) })));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                F = Object(w.b)("collectibles/fetchWalletNfts", function() {
                    var e = Object(o.a)(s.a.mark((function e(t) {
                        var n, a;
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object.keys(O).map(function() {
                                        var e = Object(o.a)(s.a.mark((function e(n) {
                                            var a, i, r, u, c, p, l, d, y;
                                            return s.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return a = O[n].address, i = Object(k.a)(a), r = Object(g.e)(i), u = function() {
                                                            var e = Object(o.a)(s.a.mark((function e(n) {
                                                                var a, o;
                                                                return s.a.wrap((function(e) {
                                                                    for (;;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return e.prev = 0, e.next = 3, r.methods.tokenOfOwnerByIndex(t, n).call();
                                                                        case 3:
                                                                            return a = e.sent, e.next = 6, C(i, a);
                                                                        case 6:
                                                                            return o = e.sent, e.abrupt("return", [Number(a), o.identifier]);
                                                                        case 10:
                                                                            return e.prev = 10, e.t0 = e.catch(0), console.error("getTokenIdAndData", e.t0), e.abrupt("return", null);
                                                                        case 14:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                                }), e, null, [
                                                                    [0, 10]
                                                                ])
                                                            })));
                                                            return function(t) { return e.apply(this, arguments) }
                                                        }(), e.next = 6, r.methods.balanceOf(t).call();
                                                    case 6:
                                                        if (c = e.sent, 0 !== (p = Number(c))) { e.next = 10; break }
                                                        return e.abrupt("return", []);
                                                    case 10:
                                                        for (l = [], d = 0; d < p; d++) l.push(u(d));
                                                        return e.next = 14, Promise.all(l);
                                                    case 14:
                                                        return y = e.sent, e.abrupt("return", y);
                                                    case 16:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) { return e.apply(this, arguments) }
                                    }()), e.next = 3, Promise.all(n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", a.flat());
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()),
                L = (Object(w.c)({
                    name: "collectibles",
                    initialState: { isInitialized: !1, isLoading: !0, data: {} },
                    reducers: {},
                    extraReducers: function(e) {
                        e.addCase(F.pending, (function(e) { e.isLoading = !0 })), e.addCase(F.fulfilled, (function(e, t) {
                            e.isLoading = !1, e.isInitialized = !0, e.data = t.payload.reduce((function(e, t) {
                                if (!t) return e;
                                var n = t,
                                    a = Object(T.a)(n, 2),
                                    r = a[0],
                                    s = a[1];
                                return Object(i.a)(Object(i.a)({}, e), {}, Object(f.a)({}, s, e[s] ? [].concat(Object(v.a)(e[s]), [r]) : [r]))
                            }), {})
                        }))
                    }
                }).reducer, n(43)),
                I = (n(91), n(209), n(205)),
                D = function() {
                    var e = Object(y.b)(),
                        t = Object(m.a)().slowRefresh;
                    Object(u.useEffect)((function() { e(Object(L.c)()), e(Object(L.f)()), e(Object(L.d)()) }), [e, t]), Object(u.useEffect)((function() {
                        var t = Object(b.b)(),
                            n = setInterval(Object(o.a)(s.a.mark((function n() {
                                var a;
                                return s.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, t.eth.getBlockNumber();
                                        case 2:
                                            a = n.sent, e(Object(L.j)(a));
                                        case 4:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            }))), 6e3);
                        return function() { return clearInterval(n) }
                    }), [e])
                },
                P = function() { return Object(y.c)((function(e) { return e.farms })) },
                E = function(e) { return Object(y.c)((function(t) { return t.farms.data.find((function(t) { return t.pid === e })) })) },
                B = function(e) { return Object(y.c)((function(t) { return t.farms.data.find((function(t) { return t.lpSymbol === e })) })) },
                _ = function(e) {
                    var t = E(e),
                        n = H(),
                        a = (t.userData ? new p.a(t.userData.stakedBalance) : new p.a(0)).dividedBy(null === t || void 0 === t ? void 0 : t.lpTokenBalanceMC).multipliedBy(t.lpTotalInQuoteToken),
                        i = new p.a(0),
                        r = new p.a(0);
                    return n && (r = new p.a(n[t.quoteToken.symbol.toLowerCase()])), i = r.times(a), { allowance: t.userData ? new p.a(t.userData.allowance) : new p.a(0), tokenBalance: t.userData ? new p.a(t.userData.tokenBalance) : new p.a(0), stakedBalance: t.userData ? new p.a(t.userData.stakedBalance) : new p.a(0), earnings: t.userData ? new p.a(t.userData.earnings) : new p.a(0), stakedUsd: i }
                },
                N = function(e) {
                    var t = Object(m.a)().fastRefresh,
                        n = Object(y.b)();
                    return Object(u.useEffect)((function() { e && n(Object(L.g)(e)) }), [e, n, t]), Object(y.c)((function(e) { return e.pools.data }))
                },
                U = function(e) {
                    var t = Object(m.a)().fastRefresh,
                        n = Object(y.b)(),
                        a = H();
                    return Object(u.useEffect)((function() { e && n(Object(L.e)(e)) }), [e, n, t]), Object(y.c)((function(e) { return e.maximus.data })).map((function(e) {
                        var t = new p.a(0),
                            n = new p.a(0);
                        a && (n = new p.a(a[e.quoteToken.symbol.toLowerCase()]));
                        var r = e.userData ? new p.a(e.userData.stakedBalance) : new p.a(0),
                            s = r.dividedBy(null === e || void 0 === e ? void 0 : e.lpTokenBalanceMC).multipliedBy(e.lpTotalInQuoteToken);
                        return t = n.times(s), Object(i.a)(Object(i.a)({}, e), {}, { userData: Object(i.a)(Object(i.a)({}, e.userData), {}, { stakedBalance: r, pendingReward: e.userData ? new p.a(e.userData.pendingReward) : new p.a(0), allowance: e.userData ? new p.a(e.userData.allowance) : new p.a(0), stakedUsd: t }) })
                    }))
                },
                V = function() { var e = Object(y.b)(); return Object(u.useMemo)((function() { var t = function(t) { return e(Object(L.h)(t)) }; return { toastError: function(e, n) { return t({ id: Object(l.kebabCase)(e), type: d.eb.DANGER, title: e, description: n }) }, toastInfo: function(e, n) { return t({ id: Object(l.kebabCase)(e), type: d.eb.INFO, title: e, description: n }) }, toastSuccess: function(e, n) { return t({ id: Object(l.kebabCase)(e), type: d.eb.SUCCESS, title: e, description: n }) }, toastWarning: function(e, n) { return t({ id: Object(l.kebabCase)(e), type: d.eb.WARNING, title: e, description: n }) }, push: t, remove: function(t) { return e(Object(L.i)(t)) }, clear: function() { return e(Object(L.a)()) } } }), [e]) },
                Y = function() {},
                R = function() {
                    var e = Object(m.a)().fastRefresh,
                        t = Object(y.b)();
                    Object(u.useEffect)((function() { t(Object(I.b)()) }), [t, e])
                },
                H = function() { var e = Object(y.c)((function(e) { return e.prices.data })); return e ? Object(i.a)(Object(i.a)({}, e), {}, { olive: .158 }) : e },
                J = function(e) { var t = H(); return t ? t[e.toLowerCase()] : null },
                W = function() {
                    var e = new p.a(0),
                        t = E(4),
                        n = E(1),
                        a = (null === n || void 0 === n ? void 0 : n.tokenPriceVsQuote) ? new p.a(1).div(null === n || void 0 === n ? void 0 : n.tokenPriceVsQuote) : e;
                    return (null === t || void 0 === t ? void 0 : t.tokenPriceVsQuote) ? a.times(null === t || void 0 === t ? void 0 : t.tokenPriceVsQuote) : e
                },
                z = function() { return Object(y.c)((function(e) { return e.block })) }
        },
        36: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return r })), n.d(t, "a", (function() { return s }));
            var a = n(8),
                i = n.n(a),
                r = new i.a(0),
                s = (new i.a(1), new i.a(9), new i.a(10))
        },
        37: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return F })), n.d(t, "f", (function() { return L })), n.d(t, "g", (function() { return I })), n.d(t, "h", (function() { return D })), n.d(t, "u", (function() { return P })), n.d(t, "s", (function() { return E })), n.d(t, "k", (function() { return B })), n.d(t, "t", (function() { return _ })), n.d(t, "m", (function() { return N })), n.d(t, "c", (function() { return U })), n.d(t, "i", (function() { return V })), n.d(t, "j", (function() { return Y })), n.d(t, "n", (function() { return R })), n.d(t, "d", (function() { return H })), n.d(t, "a", (function() { return J })), n.d(t, "l", (function() { return W })), n.d(t, "q", (function() { return z })), n.d(t, "o", (function() { return q })), n.d(t, "p", (function() { return X })), n.d(t, "r", (function() { return G })), n.d(t, "e", (function() { return K }));
            var a = n(64),
                i = n(256),
                r = n(68),
                s = n(20),
                o = n(417),
                u = n(418),
                c = n(419),
                p = n(72),
                l = (n(420), n(204)),
                d = n(421),
                y = n(422),
                b = n(423),
                m = n(424),
                f = n(383),
                j = n(384),
                h = n(97),
                O = n(112),
                x = n(425),
                v = n(426),
                T = n(427),
                w = n(428),
                k = n(429),
                g = n(99),
                A = n(430),
                M = n(189),
                S = n(431),
                C = function(e, t, n) { return new(null !== n && void 0 !== n ? n : a.a).eth.Contract(e, t) },
                F = function(e, t) { return C(p, e, t) },
                L = function(e, t) { return C(b, e, t) },
                I = function(e, t) { return C(y, e, t) },
                D = function(e, t) { return C(d, e, t) },
                P = function(e, t) {
                    var n = i.c.find((function(t) { return t.sousId === e })),
                        a = n.poolCategory === r.b.AVALANCHE ? x : O;
                    return C(a, Object(s.a)(n.contractAddress), t)
                },
                E = function(e) { return C(m, Object(s.o)(), e) },
                B = function(e) { return C(l, Object(s.g)(), e) },
                _ = function(e) { return C(o, Object(s.j)(), e) },
                N = function(e) { return C(u, Object(s.i)(), e) },
                U = function(e) { return C(c, Object(s.c)(), e) },
                V = function(e) { return C(f, Object(s.e)(), e) },
                Y = function(e) { return C(j, Object(s.f)(), e) },
                R = function(e) { return C(h, Object(s.k)(), e) },
                H = function(e) { return C(v, Object(s.d)(), e) },
                J = function(e) { return C(T, Object(s.b)(), e) },
                W = function(e) { return C(w, Object(s.h)(), e) },
                z = function(e) { return C(k, Object(s.m)(), e) },
                q = function(e, t) { var n = i.b.find((function(t) { return t.pid === e })); return C(g, Object(s.a)(n.contractAddress), t) },
                X = function(e) { return C(A, Object(s.l)(), e) },
                G = function(e) { return C(M, Object(s.n)(), e) },
                K = function(e, t) { return C(S, e, t) }
        },
        383: function(e) { e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DevWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"},{"indexed":false,"internalType":"uint8[4]","name":"winningNumbers","type":"uint8[4]"}],"name":"Drawing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"}],"name":"Reset","type":"event"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"adminWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allocation","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4]","name":"_numbers","type":"uint8[4]"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_externalRandomNumber","type":"uint256"}],"name":"drawing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawingPhase","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enterDrawingPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[4]","name":"number","type":"uint8[4]"}],"name":"generateNumberIndexKey","outputs":[{"internalType":"uint64[11]","name":"","type":"uint64[11]"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"},{"internalType":"uint256","name":"_matchingNumber","type":"uint256"}],"name":"getMatchingRewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getRewardView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"getTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_RNBO","type":"address"},{"internalType":"contract LotteryNFT","name":"_lottery","type":"address"},{"internalType":"uint256","name":"_minPrice","type":"uint256"},{"internalType":"uint8","name":"_maxNumber","type":"uint8"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryNFT","outputs":[{"internalType":"contract LotteryNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RNBO","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNumber","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4][]","name":"_numbers","type":"uint8[4][]"}],"name":"multiBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tickets","type":"uint256[]"}],"name":"multiClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_allcation1","type":"uint8"},{"internalType":"uint8","name":"_allcation2","type":"uint8"},{"internalType":"uint8","name":"_allcation3","type":"uint8"}],"name":"setAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_maxNumber","type":"uint8"}],"name":"setMaxNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setMinPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAddresses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint64","name":"","type":"uint64"}],"name":"userBuyAmountSum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winningNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]') },
        384: function(e) { e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"claimInfo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryIssueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryNumbers","outputs":[{"internalType":"uint8[4]","name":"","type":"uint8[4]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"multiClaimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8[4]","name":"_lotteryNumbers","type":"uint8[4]"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"newLotteryItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        402: function(e, t, n) {
            "use strict";
            var a = n(0);
            t.a = function(e) { var t = Object(a.useRef)(); return Object(a.useEffect)((function() { t.current = e })), t.current }
        },
        403: function(e, t, n) {
            "use strict";
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(15),
                o = n(0),
                u = n(8),
                c = n.n(u),
                p = n(26),
                l = n(36),
                d = n(30);
            t.a = function(e) {
                var t = Object(p.c)().account,
                    n = Object(d.e)(),
                    a = Object(o.useState)({ shares: l.b, RNBOAtLastUserAction: l.b, lastDepositedTime: "", lastUserActionTime: "" }),
                    u = Object(s.a)(a, 2),
                    y = u[0],
                    b = u[1];
                return Object(o.useEffect)((function() {
                    t && function() {
                        var e = Object(r.a)(i.a.mark((function e() {
                            var a;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.methods.userInfo(t).call();
                                    case 2:
                                        a = e.sent, b({ shares: new c.a(a.shares), RNBOAtLastUserAction: new c.a(a.RNBOAtLastUserAction), lastDepositedTime: a.lastDepositedTime, lastUserActionTime: a.lastUserActionTime });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    }()()
                }), [t, n, e]), y
            }
        },
        404: function(e, t, n) {
            "use strict";
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(15),
                o = n(0),
                u = n(8),
                c = n.n(u),
                p = n(92),
                l = n(30),
                d = n(65);
            t.a = function(e) {
                var t = Object(l.e)(),
                    n = Object(o.useState)(null),
                    a = Object(s.a)(n, 2),
                    u = a[0],
                    y = a[1],
                    b = Object(o.useState)(null),
                    m = Object(s.a)(b, 2),
                    f = m[0],
                    j = m[1],
                    h = Object(o.useState)(null),
                    O = Object(s.a)(h, 2),
                    x = O[0],
                    v = O[1];
                return Object(o.useEffect)((function() {
                    (function() {
                        var e = Object(r.a)(i.a.mark((function e() {
                            var n, a, r, o, u, l, b;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(d.a)([t.methods.getPricePerFullShare().call, t.methods.totalShares().call]);
                                    case 2:
                                        n = e.sent, a = Object(s.a)(n, 2), r = a[0], o = a[1], u = new c.a(r), l = new c.a(o), b = Object(p.b)(l, u), v(u), y(l), j(b.RNBOAsBigNumber);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    })()()
                }), [t, e]), { totalShares: u, totalRNBOInVault: f, pricePerFullShare: x }
            }
        },
        417: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_RNBOToken","type":"address"},{"internalType":"uint256","name":"_numberRNBOToReactivate","type":"uint256"},{"internalType":"uint256","name":"_numberRNBOToRegister","type":"uint256"},{"internalType":"uint256","name":"_numberRNBOToUpdate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"string","name":"teamName","type":"string"}],"name":"TeamAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"TeamPointIncrease","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"oldTeamId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTeamId","type":"uint256"}],"name":"UserChangeTeam","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserNew","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"}],"name":"UserPause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"UserPointIncrease","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"userAddresses","type":"address[]"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"UserPointIncreaseMultiple","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserReactivate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserUpdate","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POINT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SPECIAL_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"}],"name":"addNftAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_teamName","type":"string"},{"internalType":"string","name":"_teamDescription","type":"string"}],"name":"addTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"RNBOToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_newTeamId","type":"uint256"}],"name":"changeTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"createProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"getTeamProfile","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getUserProfile","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseTeamPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseUserPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_userAddresses","type":"address[]"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseUserPointsMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"makeTeamJoinable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"makeTeamNotJoinable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberActiveProfiles","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberRNBOToReactivate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberRNBOToRegister","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberRNBOToUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberTeams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pauseProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"reactivateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeTeamPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeUserPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_userAddresses","type":"address[]"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeUserPointsMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"string","name":"_teamName","type":"string"},{"internalType":"string","name":"_teamDescription","type":"string"}],"name":"renameTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newNumberRNBOToReactivate","type":"uint256"},{"internalType":"uint256","name":"_newNumberRNBOToRegister","type":"uint256"},{"internalType":"uint256","name":"_newNumberRNBOToUpdate","type":"uint256"}],"name":"updateNumberRNBO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        418: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyBurnCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"getBunnyName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyNameOfTokenId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_name","type":"string"}],"name":"setBunnyName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        419: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract BunnyFactoryV2","name":"_bunnyFactoryV2","type":"address"},{"internalType":"contract BunnyMintingStation","name":"_bunnyMintingStation","type":"address"},{"internalType":"contract IBEP20","name":"_RNBOToken","type":"address"},{"internalType":"uint256","name":"_tokenPrice","type":"uint256"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_startBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bunnyFactoryV2","outputs":[{"internalType":"contract BunnyFactoryV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RNBOToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"canMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_bunnyId5Json","type":"string"},{"internalType":"string","name":"_bunnyId6Json","type":"string"},{"internalType":"string","name":"_bunnyId7Json","type":"string"},{"internalType":"string","name":"_bunnyId8Json","type":"string"},{"internalType":"string","name":"_bunnyId9Json","type":"string"}],"name":"setBunnyJson","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStartBlockNumber","type":"uint256"}],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newTokenPrice","type":"uint256"}],"name":"updateTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        420: function(e) { e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]') },
        421: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"contract IERC20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startTimestamp","type":"uint256"},{"internalType":"uint256","name":"_endTimestamp","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountTokens","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountLP","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountOfferingToken","type":"uint256"}],"name":"AdminWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTimestamp","type":"uint256"}],"name":"NewStartAndEndTimestamps","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"offeringAmountPool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"raisingAmountPool","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"PoolParametersSet","type":"event"},{"inputs":[],"name":"campaignId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"depositPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"harvestPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberPools","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"recoverWrongTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_offeringAmountPool","type":"uint256"},{"internalType":"uint256","name":"_raisingAmountPool","type":"uint256"},{"internalType":"uint256","name":"_limitPerUserInLP","type":"uint256"},{"internalType":"bool","name":"_hasTax","type":"bool"},{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTimestamp","type":"uint256"},{"internalType":"uint256","name":"_endTimestamp","type":"uint256"}],"name":"updateStartAndEndTimestamps","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"viewPoolInformation","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"viewPoolTaxRateOverflow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserAllocationPools","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserInfo","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserOfferingAndRefundingAmountsForPools","outputs":[{"internalType":"uint256[3][]","name":"","type":"uint256[3][]"}],"stateMutability":"view","type":"function"}]') },
        422: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]') },
        423: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]') },
        424: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_RNBOProfileAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"uint256","name":"_campaignId","type":"uint256"},{"internalType":"uint256","name":"_thresholdToClaim","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"addIFOAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"checkClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"address[]","name":"_contractAddresses","type":"address[]"}],"name":"checkClaimStatuses","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"getPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ifos","outputs":[{"internalType":"uint256","name":"thresholdToClaim","type":"uint256"},{"internalType":"uint256","name":"campaignId","type":"uint256"},{"internalType":"uint256","name":"numberPoints","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        425: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lp","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"},{"internalType":"address","name":"_wavax","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRNBOPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"removeBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"setBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setLimitAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"bool","name":"inBlackList","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]') },
        426: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_RNBOToken","type":"address"},{"internalType":"address","name":"_RNBOProfileAddress","type":"address"},{"internalType":"uint256","name":"_numberRNBO","type":"uint256"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"RNBOToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getRNBOBack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberRNBO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"thresholdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        427: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"RNBO_","type":"address"},{"internalType":"address","name":"owner_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"ClaimingAllowed","type":"event"},{"anonymous":false,"inputs":[],"name":"ClaimingOver","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RNBOClaimed","type":"event"},{"inputs":[],"name":"BURN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_AIRDROP_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowClaiming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimingAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endClaiming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"RNBO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocated","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint96","name":"RNBOOut","type":"uint96"}],"name":"whitelistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"},{"internalType":"uint96[]","name":"RNBOOuts","type":"uint96[]"}],"name":"whitelistAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"withdrawAmount","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"}]') },
        428: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"contract IERC20","name":"_receiptToken","type":"address"},{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_treasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"performanceFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"callFee","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"MAX_CALL_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PERFORMANCE_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WITHDRAW_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WITHDRAW_FEE_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"available","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateHarvestRNBORewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateTotalPendingRNBORewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"callFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastHarvestedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"performanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiptToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_callFee","type":"uint256"}],"name":"setCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_performanceFee","type":"uint256"}],"name":"setPerformanceFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasury","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawFee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawFeePeriod","type":"uint256"}],"name":"setWithdrawFeePeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"sharesOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"lastDepositedTime","type":"uint256"},{"internalType":"uint256","name":"RNBOAtLastUserAction","type":"uint256"},{"internalType":"uint256","name":"lastUserActionTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFeePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]') },
        429: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_performance_fee","type":"uint256"},{"internalType":"uint256","name":"_withdrawal_fee_free_period","type":"uint256"},{"internalType":"uint256","name":"_withdrawal_fee","type":"uint256"},{"internalType":"address","name":"_feeTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"FEE_MAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERFORMANCE_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_FEE_FREE_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"_withdrawalFee","type":"uint256"},{"internalType":"uint256","name":"_performanceFee","type":"uint256"}],"name":"feeTransfer","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"profit","type":"uint256"}],"name":"performanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setPerformanceFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setWithdrawalFeeFreePeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"depositedAt","type":"uint256"}],"name":"withdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]') },
        43: function(e, t, n) {
            "use strict";
            var a = n(161);
            n.d(t, "c", (function() { return a.c })), n.d(t, "b", (function() { return a.b }));
            var i = n(145);
            n.d(t, "a", (function() { return i.a })), n.d(t, "i", (function() { return i.c })), n.d(t, "h", (function() { return i.b }));
            var r = n(96);
            n.d(t, "f", (function() { return r.b })), n.d(t, "g", (function() { return r.c })), n.d(t, "k", (function() { return r.d })), n.d(t, "l", (function() { return r.e })), n.d(t, "m", (function() { return r.f })), n.d(t, "n", (function() { return r.g }));
            n(91);
            var s = n(191);
            n.d(t, "j", (function() { return s.b }));
            var o = n(163);
            n.d(t, "d", (function() { return o.b })), n.d(t, "e", (function() { return o.c }))
        },
        430: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"farmApr","type":"uint256"},{"internalType":"uint256","name":"poolApr","type":"uint256"},{"internalType":"uint256","name":"compound","type":"uint256"}],"name":"compoundingAPY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]') },
        431: function(e) { e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"_approved","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"_implementsERC721","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"_tokenId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenMetadata","outputs":[{"name":"_infoUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_approvedAddress","type":"address"},{"name":"_metadata","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numTokensTotal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"getOwnerTokens","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]') },
        432: function(e) { e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]') },
        433: function(e) { e.exports = JSON.parse('{"Farm":"Farm","Staking":"Staking","Electrum Pool":"Electrum Pool","Exchange":"Exchange","Docs":"Docs","Voting":"Voting","Lottery":"Lottery","Unlock Wallet":"Unlock Wallet","Your %asset% Balance":"Your %asset% Balance","Total %asset% Supply":"Total %asset% Supply","LOCKED":"LOCKED","Pending harvest":"Pending harvest","New rewards per block":"New rewards per block","Total RNBO burned since launch":"Total RNBO burned since launch","See the Kitchen":"See the Kitchen","Telegram":"Telegram","Blog":"Blog","Github":"Github","Twitter":"Twitter","Deposit":"Deposit","Earn":"Earn","Stake FLIP tokens to stack RNBO":"Stake LP tokens to stack RNBO","You can swap back anytime":"You can swap back anytime","%asset% Earned":"%asset% Earned","Tokens Staked":"Tokens Staked","Every time you stake and unstake RNBO tokens, the contract will automagically harvest RNBO rewards for you!":"Every time you stake and unstake RNBO tokens, the contract will automagically harvest RNBO rewards for you!","XVS Tokens Earned":"XVS Tokens Earned","Rewards will be calculated per block and total rewards will be distributed automatically at the end of each project\u2019s farming period.":"Rewards will be calculated per block and total rewards will be distributed automatically at the end of each project\u2019s farming period.","Pool":"Pool","Coming soon":"Coming soon","APY":"APY","Total Liquidity":"Total Liquidity","RNBO price":"RNBO price","%asset% Tokens Earned":"%asset% Tokens Earned","%num% blocks until farming ends":"%num% blocks until farming ends","Coming soon...":"Coming soon...","Your Stake":"Your Stake","Farming starts in %num% Blocks":"Farming starts in %num% Blocks","Finished":"Finished","Farming ends in %num% Blocks":"Farming ends in %num% Blocks","Project Site":"Project Site","You can unstake at any time.":"You can unstake at any time.","Rewards are calculated per block.":"Rewards are calculated per block.","Total":"Total","End":"End","View project site":"View project site","Your Project? \ud83d\udc40":"Your Project? \ud83d\udc40","Create a pool for your token":"Create a pool for your token","Apply now":"Apply now","Round 1: BUYING":"Round 1: BUYING","%num% RNBO":"%num% RNBO","Spend RNBO to buy tickets, contributing to the lottery pot. Ticket purchases end approx. 30 minutes before lottery. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their positions! Good luck!":"Spend RNBO to buy tickets, contributing to the lottery pot. Ticket purchases end approx. 30 minutes before lottery. Win prizes if 1, 2, 3, or 4 of your ticket numbers match the winning numbers and their positions! Good luck!","Your total tickets for this round":"Your total tickets for this round","Buy ticket":"Buy ticket","View your tickets":"View your tickets","Approx. time left to buy tickets":"Approx. time left to buy tickets","My Tickets (Total: %TICKETS%)":"My Tickets (Total: %TICKETS%)","Close":"Close","Latest Winning Numbers":"Latest Winning Numbers","Tickets matching 4 numbers:":"Tickets matching 4 numbers:","Tickets matching 3 numbers:":"Tickets matching 3 numbers:","Tickets matching 2 numbers:":"Tickets matching 2 numbers:","Export recent winning numbers":"Export recent winning numbers","Enter amount of tickets to buy":"Enter amount of tickets to buy","Max":"Max","%num% RNBO Available":"%num% RNBO Available","Your amount must be a multiple of 10 RNBO":"Your amount must be a multiple of 10 RNBO","1 Ticket = 10 RNBO":"1 Ticket = 10 RNBO","You will spend: %num% RNBO":"You will spend: %num% RNBO","Cancel":"Cancel","Confirm":"Confirm","Warning":"Warning","Lottery ticket purchases are final.":"Lottery ticket purchases are final.","Your RNBO will not be returned to you after you spend it to buy tickets.":"Your RNBO will not be returned to you after you spend it to buy tickets.","Tickets are only valid for one lottery draw, and will be burned after the draw.":"Tickets are only valid for one lottery draw, and will be burned after the draw.","Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.":"Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.","I understand":"I understand","Ticket purchases are final. Your RNBO cannot be returned to you after buying tickets.":"Ticket purchases are final. Your RNBO cannot be returned to you after buying tickets.","Claim prizes":"Claim prizes","RNBO prizes to be claimed":"RNBO prizes to be claimed","Round 2: CLAIMING":"Round 2: CLAIMING","Pending Confirmation":"Pending Confirmation","Approx. time before next lottery start":"Approx. time before next lottery start","Approve RNBO":"Approve RNBO","IFO: Intitial Farm Offerings":"IFO: Initial Farm Offerings","Buy new tokens with a brand new token sale model.":"Buy new tokens with a brand new token sale model.","You\u2019ll pay for the new tokens using RNBO-AVAX LP tokens, which means you need to stake equal amounts of RNBO and AVAX in a liquidity pool to take part.":"You\u2019ll pay for the new tokens using RNBO-AVAX LP tokens, which means you need to stake equal amounts of RNBO and AVAX in a liquidity pool to take part.","Get RNBO-AVAX LP >":"Get RNBO-AVAX LP >","The project gets the AVAX, RNBOFinance burns the RNBO.":"The project gets the AVAX, RNBOFinance burns the RNBO.","You get the tokens.":"You get the tokens.","Want to launch your own IFO?":"Want to launch your own IFO?","Launch your project with RNBOFinance, Avalanche most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on AVAX.":"Launch your project with RNBOFinance, Avalanche most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on AVAX.","Apply to launch":"Apply to launch","Community":"Community","Core":"Core","Available":"Available","My Wallet":"My Wallet","Sign out":"Sign out","Harvest all (%count%)":"Harvest all (%count%)","RNBO Stats":"RNBO Stats","Total RNBO Supply":"Total RNBO Supply","Total RNBO Burned":"Total RNBO Burned","New RNBO/block":"New RNBO/block","Farms & Staking":"Farms & Staking","RNBO to Harvest":"RNBO to Harvest","RNBO in Wallet":"RNBO in Wallet","Collecting RNBO":"Collecting RNBO","Your Lottery Winnings":"Your Lottery Winnings","RNBO to Collect":"RNBO to Collect","Total jackpot this round":"Total jackpot this round","Collect Winnings":"Collect Winnings","Buy Tickets":"Buy Tickets","Harvest":"Harvest","Approve":"Approve","Select":"Select","Winning Numbers This Round":"Winning Numbers This Round","Staking Pool":"Staking Pool","RNBOFinance":"RNBOFinance","The #1 AMM and yield farm on Avalanche.":"The #1 AMM and yield farm on Avalanche.","Stake RNBO to earn new tokens.":"Stake RNBO to earn new tokens.","Launch Time":"Launch Time","For Sale":"For Sale","RNBO to burn (USD)":"RNBO to burn (USD)","Unstake":"Unstake","\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest RNBO rewards for you!":"\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest RNBO rewards for you!","How to take part":"How to take part","Before Sale":"Before Sale","Buy RNBO and AVAX tokens":"Buy RNBO and AVAX tokens","Get RNBO-AVAX LP tokens by adding RNBO and AVAX liquidity":"Get RNBO-AVAX LP tokens by adding RNBO and AVAX liquidity","During Sale":"During Sale","While the sale is live, commit your RNBO-LP tokens to buy the IFO tokens":"While the sale is live, commit your RNBO-LP tokens to buy the IFO tokens","After Sale":"After Sale","Claim the tokens you bought, along with any unspent funds.":"Claim the tokens you bought, along with any unspent funds.","Done!":"Done!","Read more":"Read more","Connect":"Connect","Trade in for RNBO, or keep for your collection!":"Trade in for RNBO, or keep for your collection!","Register your interest in winning an NFT below.":"Register your interest in winning an NFT below.","Register for a chance to win":"Register for a chance to win","Learn more":"Learn more","Trade in NFT":"Trade in NFT","Trade in":"Trade in","You will receive":"You will receive","When you trade in this NFT to receive RNBO, you will lose access to it forever!":"When you trade in this NFT to receive RNBO, you will lose access to it forever!","Claim NFT":"Claim NFT","How it works":"How it works","Winners will be able to claim an NFT on this page once the claiming period starts.":"Winners will be able to claim an NFT on this page once the claiming period starts.","If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!":"If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!","Winners can trade in their NFTs for a RNBO value until the expiry date written below. If you don\'t trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!":"Winners can trade in their NFTs for a RNBO value until the expiry date written below. If you don\'t trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!","How are winners selected?":"How are winners selected?","Winners are selected at random! Good luck!":"Winners are selected at random! Good luck!","Value if traded in":"Value if traded in","Number minted":"Number minted","Number burned":"Number burned","Claim this NFT":"Claim this NFT","Trade in for RNBO":"Trade in for RNBO","Loading\u2026":"Loading\u2026","Details":"Details","You won!":"You won!","Claim an NFT from the options below!":"Claim an NFT from the options below!","Can be traded until":"Can be traded until","Wallet Disconnected":"Wallet Disconnected","Connect to see if you have won an NFT!":"Connect to see if you have won an NFT!","Home":"Home","Trade":"Trade","Farms":"Farms","Pools":"Pools","NFT":"NFT","Info":"Info","IFO":"IFO","More":"More","Liquidity":"Liquidity","Overview":"Overview","Token":"Token","Pairs":"Pairs","Accounts":"Accounts","Stake LP tokens to earn RNBO":"Stake LP tokens to earn RNBO","Active":"Active","Inactive":"Inactive","Dual":"Dual","Compound":"Compound","Unstake %asset%":"Unstake %asset%","The RNBO Lottery":"The RNBO Lottery","Buy tickets with RNBO":"Buy tickets with RNBO","Win if 2, 3 or 4 of your ticket numbers match!":"Win if 2, 3 or 4 of your ticket numbers match!","%time% Until lottery":"%time% Until lottery draw","Next draw":"Next draw","Past draws":"Past draws","Round %num%":"Round %num%","Total Pot":"Total Pot","Your tickets for this round":"Your tickets for this round","Sorry, no prizes to collect":"Sorry, no prizes to collect","In Wallet":"In Wallet","Loading...":"Loading...","Next IFO":"Next IFO","Past IFOs":"Past IFOs","APR":"APR","Select lottery number:":"Select lottery number:","Search":"Search","History":"History","Pool Size":"Pool Size","Burned":"Burned","Prize Pot":"Prize Pot","Winners":"Winners","No. Matched":"No. Matched","Approve Contract":"Approve Contract","%asset% staked":"%asset% staked","Total Value Locked":"Total Value Locked","Across all LPs and Electrum Pools":"Across all LPs and Electrum Pools","Your wallet":"Your wallet","Logout":"Logout","Profile Setup":"Profile Setup","Show off your stats and collectibles with your unique profile.":"Show off your stats and collectibles with your unique profile.","Total cost: 10 RNBO":"Total cost: 5 RNBO","Get Starter Collectible":"Get Starter Collectible","Set Profile Picture":"Set Profile Picture","Join Team":"Join Team","Set Name":"Set Name","Step 1":"Step 1","Every profile starts by making a \\"starter\\" collectible (NFT).":"Every profile starts by making a \\"starter\\" collectible (NFT).","This starter will aslo become your first profile picture.":"This starter will also become your first profile picture.","You can change your profile pic later if you get another approved RNBO Collectible,":"You can change your profile pic later if you get another approved RNBO Collectible,","Choose your Starter!":"Choose your Starter!","Choose wisely: you can only ever make one starter collectible!":"Choose wisely: you can only ever make one starter collectible!","Cost: 5 RNBO":"Cost: 5 RNBO","Next Step":"Next Step","Approving":"Approving","Confirming":"Confirming","Approved":"Approved","Confirmed":"Confirmed","Insufficient RNBO balance":"Insufficient RNBO balance","Step 2":"Step 2","Choose collectible":"Choose collectible","Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.":"Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.","Only approved RNBO Collectibles can be used.":"Only approved RNBO Collectibles can be used.","Allow collectible to be locked":"Allow collectible to be locked","The collectible you\'ve chosen will be locked in a smart contract while it\'s being used as your profile picture. ":"The collectible you\'ve chosen will be locked in a smart contract while it\'s being used as your profile picture. ","Don\'t worry - you\'ll be able to get it back at any time.":"Don\'t worry - you\'ll be able to get it back at any time.","Step 3":"Step 3","Join a Team":"Join a Team","It won\'t be possible to undo the choice you make for the foreseeable future!":"It won\'t be possible to undo the choice you make for the foreseeable future!","There\'s currently no big difference between teams, and no benefit of joining one team over another for now.":"There\'s currently no big difference between teams, and no benefit of joining one team over another for now.","So pick whichever you like!":"So pick whichever you like!","%count% Members":"%count% Members","Step 4":"Step 4","This name will be shown in team leaderboards and search results as long as your profile is active.":"This name will be shown in team leaderboards and search results as long as your profile is active.","Your name must be at least 3 and at most 15 standards letters and numbers long.":"Your name must be at least 3 and at most 15 standards letters and numbers long.","Complete Profile":"Complete Profile","Maximum length: 15 characters":"Maximum length: 15 characters","Minimum length: 3 characters":"Minimum length: 3 characters","No spaces or special characters":"No spaces or special characters","Submitting NFT to contract and confirming User Name and Team":"Submitting NFT to contract and confirming User Name and Team","Oops!":"Oops!","We couldn\'t find any RNBO Collectibles in your wallet.":"We couldn\'t find any RNBO Collectibles in your wallet.","You need a RNBO Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\'ll need to get it back or acquire a new one somehow. You can\'t make a new starter with this wallet address.":"You need a RNBO Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\'ll need to get it back or acquire a new one somehow. You can\'t make a new starter with this wallet address.","ROI":"ROI","Timeframe":"Timeframe","RNBO per $1000":"RNBO per $1000","Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.":"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.","You can\'t change this once you click Confirm.":"You can\'t change this once you click Confirm.","Until ticket sale":"Until ticket sale","To burn:":"To burn:","On sale soon":"On sale soon","Teams Overview":"Teams Overview","Teams":"Teams","See More":"See More","Team Achievements":"Team Achievements","Team Points":"Team Points","Active Members":"Active Members","Set up now":"Set up now","You haven\'t set up your profile yet!":"You haven\'t set up your profile yet!","You can do this at any time by clicking on your profile picture in the menu":"You can do this at any time by clicking on your profile picture in the menu","Collect":"Collect","Compounding":"Compounding","Buy RNBO":"Buy RNBO","Get LP tokens":"Get LP tokens","Show":"Show","Hide":"Hide","Stake LP tokens":"Stake LP tokens","Stake":"Stake","Earned":"Earned","Staked":"Staked","The lottery number you provided does not exist":"The lottery number you provided does not exist","Error fetching data":"Error fetching data","Unlock wallet to access lottery":"Unlock wallet to access lottery","Teams & Profiles":"Teams & Profiles","Earn more points for completing larger quests!":"Earn more points for completing larger quests!","Collecting points for these tasks makes them available again.":"Collecting points for these tasks makes them available again.","Earn points by completing regular tasks!":"Earn points by completing regular tasks!","Task Center":"Task Center","Achievements":"Achievements","Enter your name...":"Enter your name...","I understand that people can view my wallet if they know my username":"I understand that people can view my wallet if they know my username","A minimum of %num% RNBO is required":"A minimum of %num% RNBO is required","Only reuse a name from other social media if you\'re OK with people viewing your wallet. You can\'t change your name once you click Confirm.":"Only reuse a name from other social media if you\'re OK with people viewing your wallet. You can\'t change your name once you click Confirm.","Please connect your wallet to continue":"Please connect your wallet to continue","Public Profile":"Public Profile","Show off your stats and collectibles with your unique profile. Team features will be revealed soon!":"Show off your stats and collectibles with your unique profile. Team features will be revealed soon!","Points":"Points","Set Your Name":"Set Your Name","Step %num%":"Step %num%","See the list >":"See the list >","Staked only":"Staked only","getLP":"get %symbol%","Balance":"Balance","Oops, page not found.":"Oops, page not found.","Back Home":"Back Home","Unstake LP tokens":"Unstake LP tokens","Live":"Live","Start":"Start","Connect wallet to view":"Connect wallet to view","Sorry, you needed to register during the \u201centry\u201d period!":"Sorry, you needed to register during the \u201centry\u201d period!","Check your Rank":"Check your Rank","You\u2019re not participating this time.":"You\u2019re not participating this time.","Rank in team":"Rank in team","Your volume":"Your volume","Since start":"Since start","Your Score":"Your Score","Enable":"Enable","Enabling":"Enabling","%amount% RNBO":"%amount% RNBO","IFO Shopper: %title%":"IFO Shopper: %title%","%num% of total":"%num% of total","All estimated rates take into account this pool\'s %fee%% performance fee":"All estimated rates take into account this pool\'s %fee%% performance fee","Sorry, you didn\u2019t contribute enough LP tokens to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your LP tokens.":"Sorry, you didn\u2019t contribute enough LP tokens to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your LP tokens.","Only applies within 5 days of staking. Unstaking after 5 days will not include a fee. Timer resets every time you stake new RNBO in the pool.":"Only applies within 5 days of staking. Unstaking after 5 days will not include a fee. Timer resets every time you stake new RNBO in the pool.","unstaking fee until":"unstaking fee until","unstaking fee if withdrawn within 120h":"unstaking fee if withdrawn within 120h","Unstaking fee: %fee%%":"Unstaking fee: %fee%%","Performance Fee":"Performance Fee","Compound: collect and restake RNBO into pool.":"Compound: collect and restake RNBO into pool.","Harvest: collect RNBO and send to wallet":"Harvest: collect RNBO and send to wallet","%position% Entered":"%position% Entered","Sort by":"Sort by","Expired":"Expired","Calculating":"Calculating","Next":"Next","Later":"Later","Up":"Up","Down":"Down","%multiplier% Payout":"%multiplier% Payout","Enter %direction%":"Enter %direction%","Prize Pool:":"Prize Pool:","Charts":"Charts","Your History":"Your History","All":"All","Collected":"Collected","Uncollected":"Uncollected","Round":"Round","Your Result":"Your Result","Your direction":"Your direction","Your position":"Your position","Lose":"Lose","Entry starts":"Entry starts","Locked Price":"Locked Price","Last Price":"Last Price","Closed Price":"Closed Price","Win":"Win","Opening Block":"Opening Block","Closing Block":"Closing Block","Total Value Locked (TVL)":"Total Value Locked (TVL)","Automatic restaking":"Automatic restaking","Manual RNBO":"Manual RNBO","Auto RNBO":"Auto RNBO","Auto RNBO Bounty":"Auto RNBO Bounty","Claim":"Claim","Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.":"Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.","Total staked":"Total staked","Simply stake tokens to earn.":"Simply stake tokens to earn.","High APR, low risk.":"High APR, low risk.","Stake Liquidity Pool (LP) tokens to earn.":"Stake Liquidity Pool (LP) tokens to earn.","Basic Sale":"Basic Sale","Every person can only commit a limited amount, but may expect a higher return per token committed.":"Every person can only commit a limited amount, but may expect a higher return per token committed.","Unlimited Sale":"Unlimited Sale","No limits on the amount you can commit. Additional fee applies when claiming.":"No limits on the amount you can commit. Additional fee applies when claiming.","You didn\u2019t participate in this sale!":"You didn\u2019t participate in this sale!","Max. LP token entry":"Max. LP token entry","How to Take Part":"How to Take Part","Activate your Profile":"Activate your Profile","You\u2019ll need an active RNBOFinance Profile to take part in an IFO!":"You\u2019ll need an active RNBOFinance Profile to take part in an IFO!","Profile Active!":"Profile Active!","Get RNBO-AVAX LP Tokens":"Get RNBO-AVAX LP Tokens","Stake RNBO and AVAX in the liquidity pool to get LP tokens.":"Stake RNBO and AVAX in the liquidity pool to get LP tokens.","You\u2019ll spend them to buy IFO sale tokens.":"You\u2019ll spend them to buy IFO sale tokens.","Commit LP Tokens":"Commit LP Tokens","When the IFO sales are live, you can \u201ccommit\u201d your LP tokens to buy the tokens being sold.":"We recommend committing to the Basic Sale first, but you can do both if you want.","Claim your tokens and achievement":"Claim your tokens and achievement","After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent RNBO-AVAX LP tokens will be returned to your wallet.":"After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent RNBO-AVAX LP tokens will be returned to your wallet.","This round\'s closing transaction has been submitted to the blockchain, and is waiting to be confirmed.":"This round\'s closing transaction has been submitted to the blockchain, and is waiting to be confirmed.","No prediction history available":"No prediction history available","If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.":"If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.","Last price from Chainlink Oracle":"Last price from Chainlink Oracle","Charts are provided for reference only, and do not reflect rounds\u2019 final outcome.":"Charts are provided for reference only, and do not reflect rounds\u2019 final outcome.","Please refer to the prices shown on the cards for the final outcome.":"Please refer to the prices shown on the cards for the final outcome."}') },
        44: function(e, t, n) {
            "use strict";
            n(15);
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(438),
                o = n(64),
                u = n(189),
                c = n(20),
                p = (n(37), function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, p, l, d, y, b;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(o.b)(), r = new a.eth.Contract(u, Object(c.n)()), p = new s.b(t), l = n.map((function(e) { return [e.address.toLowerCase(), p.encodeFunctionData(e.name, e.params)] })), e.next = 6, r.methods.aggregate(l).call();
                                case 6:
                                    return d = e.sent, y = d.returnData, b = y.map((function(e, t) { return p.decodeFunctionResult(n[t].name, e) })), e.abrupt("return", b);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }());
            t.a = p
        },
        483: function(e, t) {},
        49: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() { return r })), n.d(t, "h", (function() { return s })), n.d(t, "d", (function() { return o })), n.d(t, "c", (function() { return u })), n.d(t, "a", (function() { return c })), n.d(t, "e", (function() { return p })), n.d(t, "f", (function() { return l })), n.d(t, "b", (function() { return d }));
            var a = n(211),
                i = n(36);
            a.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 });
            var r = new a.a(8),
                s = new a.a(31536e3),
                o = "https://RNBO.finance",
                u = "https://exchange.RNBO.finance",
                c = "".concat(u, "/#/add"),
                p = ("".concat(u, "/#/pool"), 10),
                l = 500,
                d = "https://cchain.explorer.avax.network/";
            i.a.pow(18)
        },
        50: function(e, t, n) {
            "use strict";
            var a = n(15),
                i = n(0),
                r = n(148),
                s = n.n(r),
                o = n(26),
                u = n(64);
            t.a = function() {
                var e = Object(o.c)().library,
                    t = Object(i.useRef)(e),
                    n = Object(i.useState)(e ? new s.a(e) : Object(u.b)()),
                    r = Object(a.a)(n, 2),
                    c = r[0],
                    p = r[1];
                return Object(i.useEffect)((function() { e !== t.current && (p(e ? new s.a(e) : Object(u.b)()), t.current = e) }), [e]), c
            }
        },
        523: function(e, t) {},
        525: function(e, t) {},
        53: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return c })), n.d(t, "j", (function() { return p })), n.d(t, "e", (function() { return l })), n.d(t, "f", (function() { return d })), n.d(t, "k", (function() { return y })), n.d(t, "g", (function() { return b })), n.d(t, "d", (function() { return m })), n.d(t, "b", (function() { return f })), n.d(t, "h", (function() { return j })), n.d(t, "i", (function() { return h })), n.d(t, "c", (function() { return O }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(8),
                o = n.n(s),
                u = n(109),
                c = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.approve(n.options.address, u.a.constants.MaxUint256).send({ from: a }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) { return e.apply(this, arguments) }
                }(),
                p = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a, r) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== n) { e.next = 2; break }
                                    return e.abrupt("return", t.methods.enterStaking(new o.a(a).times(new o.a(10).pow(18)).toString()).send({ from: r, gas: 2e5 }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 2:
                                    return e.abrupt("return", t.methods.deposit(n, new o.a(a).times(new o.a(10).pow(18)).toString()).send({ from: r, gas: 2e5 }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a, i) { return e.apply(this, arguments) }
                }(),
                l = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s = arguments;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = s.length > 2 && void 0 !== s[2] ? s[2] : 18, r = s.length > 3 ? s[3] : void 0, e.abrupt("return", t.methods.deposit(new o.a(n).times(new o.a(10).pow(a)).toString()).send({ from: r, gas: 2e5 }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                d = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit().send({ from: a, gas: 2e5, value: new o.a(n).times(new o.a(10).pow(18)).toString() }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) { return e.apply(this, arguments) }
                }(),
                y = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a, r) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== n) { e.next = 2; break }
                                    return e.abrupt("return", t.methods.leaveStaking(new o.a(a).times(new o.a(10).pow(18)).toString()).send({ from: r, gas: 2e5 }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 2:
                                    return e.abrupt("return", t.methods.withdraw(n, new o.a(a).times(new o.a(10).pow(18)).toString()).send({ from: r, gas: 2e5 }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a, i) { return e.apply(this, arguments) }
                }(),
                b = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s = arguments;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = s.length > 2 && void 0 !== s[2] ? s[2] : 18, r = s.length > 3 ? s[3] : void 0, "0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC" !== t.options.address) { e.next = 4; break }
                                    return e.abrupt("return", t.methods.emergencyWithdraw().send({ from: r }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 4:
                                    if ("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831" !== t.options.address) { e.next = 6; break }
                                    return e.abrupt("return", t.methods.emergencyWithdraw().send({ from: r }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 6:
                                    if ("0x453a75908fb5a36d482d5f8fe88eca836f32ead5" !== t.options.address) { e.next = 8; break }
                                    return e.abrupt("return", t.methods.emergencyWithdraw().send({ from: r }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 8:
                                    return e.abrupt("return", t.methods.withdraw(new o.a(n).times(new o.a(10).pow(a)).toString()).send({ from: r, gas: 2e5 }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                m = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.emergencyWithdraw().send({ from: n }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                f = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== n) { e.next = 2; break }
                                    return e.abrupt("return", t.methods.leaveStaking("0").send({ from: a, gas: 2e5 }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 2:
                                    return e.abrupt("return", t.methods.deposit(n, "0").send({ from: a, gas: 2e5 }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) { return e.apply(this, arguments) }
                }(),
                j = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit("0").send({ from: n, gas: 2e5 }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                h = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit().send({ from: n, gas: 2e5, value: new o.a(0) }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                O = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.getReward().send({ from: n, value: new o.a(0) }).on("transactionHash", (function(e) { return e.transactionHash })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
        },
        543: function(e, t) {},
        547: function(e, t) {},
        55: function(e, t, n) {
            "use strict";
            var a, i, r, s, o, u, c, p, l, d, y, b, m, f, j = n(10),
                h = n(13),
                O = n(27),
                x = [{ pid: 2, lpSymbol: "AVAX-ETH", contractAddress: (a = {}, Object(j.a)(a, h.a.FUJI, "0x60096143052e7b0A1466D4B10f8Efe614ba83B26"), Object(j.a)(a, h.a.AVALANCHE, "0x558E7E24b39f869E2C1AbB039360A3536D850ab2"), a), stakingToken: (i = {}, Object(j.a)(i, h.a.FUJI, "0x1ccd24def23a742d56a976810ca5bda37b43744d"), Object(j.a)(i, h.a.AVALANCHE, "0x58128ab3ecbf703682ede72f341944bffe3524b9"), i), earningToken: O.a.RNBO, tokenPerBlock: "2", quoteToken: O.a.wavax }, { pid: 1, lpSymbol: "USDT-AVAX", contractAddress: (r = {}, Object(j.a)(r, h.a.FUJI, "0x4fAE2067785ED460408670dc01A3d2A8a416bb6F"), Object(j.a)(r, h.a.AVALANCHE, "0x4fAE2067785ED460408670dc01A3d2A8a416bb6F"), r), stakingToken: (s = {}, Object(j.a)(s, h.a.FUJI, "0xe22a65204726f102d9e3539b85d3999dee2e421f"), Object(j.a)(s, h.a.AVALANCHE, "0xe22a65204726f102d9e3539b85d3999dee2e421f"), s), earningToken: O.a.RNBO, tokenPerBlock: "2", quoteToken: O.a.wavax }, { pid: 4, lpSymbol: "AVAX-RNBO", contractAddress: (o = {}, Object(j.a)(o, h.a.FUJI, "0xBdA30098dD8A5b27C90146EfB295bC0ecf3553F3"), Object(j.a)(o, h.a.AVALANCHE, "0x07F9B7b1FeD6a71AF80AC85d1691A4EC0EBE370b"), o), stakingToken: (u = {}, Object(j.a)(u, h.a.FUJI, "0x4570BD3910c64095F6C0f5e6405BE7Cb30E2bdd7"), Object(j.a)(u, h.a.AVALANCHE, "0xfba4edaad3248b03f1a3261ad06ad846a8e50765"), u), earningToken: O.a.RNBO, tokenPerBlock: "2", quoteToken: O.a.wavax }, { pid: 3, lpSymbol: "USDT-RNBO", contractAddress: (c = {}, Object(j.a)(c, h.a.FUJI, "0xcE1f7DD041cDca5758DAC1f3f0626d454ccf936f"), Object(j.a)(c, h.a.AVALANCHE, "0xcE1f7DD041cDca5758DAC1f3f0626d454ccf936f"), c), stakingToken: (p = {}, Object(j.a)(p, h.a.FUJI, "0x4570BD3910c64095F6C0f5e6405BE7Cb30E2bdd7"), Object(j.a)(p, h.a.AVALANCHE, "0x752c59f22faaa861108649f4596034796c69bc3f"), p), earningToken: O.a.RNBO, tokenPerBlock: "2", quoteToken: O.a.usdt }, { pid: 7, lpSymbol: "PNG-RNBO", contractAddress: (l = {}, Object(j.a)(l, h.a.FUJI, "0x4fAE2067785ED460408670dc01A3d2A8a416bb6F"), Object(j.a)(l, h.a.AVALANCHE, "0x7d0Cc15C9d3740E18a27064b8EFfE5EbAA7944e7"), l), stakingToken: (d = {}, Object(j.a)(d, h.a.FUJI, "0x4570BD3910c64095F6C0f5e6405BE7Cb30E2bdd7"), Object(j.a)(d, h.a.AVALANCHE, "0x161f750b753c7120599d07c352607F458ecB918e"), d), earningToken: O.a.RNBO, tokenPerBlock: "2", quoteToken: O.a.RNBO }, { pid: 9, lpSymbol: "ETH-RNBO", contractAddress: (y = {}, Object(j.a)(y, h.a.FUJI, "0x4fAE2067785ED460408670dc01A3d2A8a416bb6F"), Object(j.a)(y, h.a.AVALANCHE, "0x288426B66E1887ce5bFDEA6C87ECEDD97631bc05"), y), stakingToken: (b = {}, Object(j.a)(b, h.a.FUJI, "0x4570BD3910c64095F6C0f5e6405BE7Cb30E2bdd7"), Object(j.a)(b, h.a.AVALANCHE, "0xEAC3778e5658667B72aEbe8C71F97ed8b3b5887b"), b), earningToken: O.a.RNBO, tokenPerBlock: "2", quoteToken: O.a.eth }, { pid: 12, lpSymbol: "USDT-DAI", contractAddress: (m = {}, Object(j.a)(m, h.a.FUJI, "0x4fAE2067785ED460408670dc01A3d2A8a416bb6F"), Object(j.a)(m, h.a.AVALANCHE, "0xd21f2B655E3bD698365207B54bB44088E2555119"), m), stakingToken: (f = {}, Object(j.a)(f, h.a.FUJI, "0x4570BD3910c64095F6C0f5e6405BE7Cb30E2bdd7"), Object(j.a)(f, h.a.AVALANCHE, "0x3cebc2b0febf521494f06318bbe202ae7ee799c9"), f), earningToken: O.a.RNBO, tokenPerBlock: "2", quoteToken: O.a.usdt }];
            t.a = x
        },
        576: function(e, t) {},
        578: function(e, t) {},
        61: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(7),
                r = n(208);
            t.a = function() { var e = Object(a.useContext)(r.a); return { isDark: e.isDark, toggleTheme: e.toggleTheme, theme: Object(a.useContext)(i.a) } }
        },
        64: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return c }));
            var a = n(148),
                i = n.n(a),
                r = n(203),
                s = Object(r.a)(),
                o = new i.a.providers.HttpProvider(s, { timeout: 1e4 }),
                u = new i.a(o),
                c = function() { return u };
            t.a = u
        },
        65: function(e, t, n) {
            "use strict";
            var a = n(64);
            t.a = function(e) {
                try {
                    var t = new(Object(a.b)().BatchRequest),
                        n = e.map((function(e) { return new Promise((function(n, a) { t.add(e.request({}, (function(e, t) { e ? a(e) : n(t) }))) })) }));
                    return t.execute(), Promise.all(n)
                } catch (i) { return null }
            }
        },
        67: function(e, t, n) {
            "use strict";
            var a, i, r, s, o, u, c, p = n(10),
                l = n(13),
                d = n(27),
                y = n(68),
                b = [{ sousId: 0, stakingToken: d.a.RNBO, earningToken: d.a.RNBO, contractAddress: (a = {}, Object(p.a)(a, l.a.FUJI, "0x520b56F7C10364F2d56D9B380E0886dAcBde4e1c"), Object(p.a)(a, l.a.AVALANCHE, "0xFb26525B14048B7BB1F3794F6129176195Db7766"), a), poolCategory: y.b.CORE, harvest: !0, tokenPerBlock: "2.5", sortOrder: 1, isFinished: !1 }, { sousId: 1001, stakingToken: d.a.RNBO, earningToken: d.a.snob, contractAddress: (i = {}, Object(p.a)(i, l.a.FUJI, "0xFf5d4b8Fd9a73978E0064c8Dd44a2FcAf7b33781"), Object(p.a)(i, l.a.AVALANCHE, "0xf902b496929058eAe5430D7719d0482124eEdE84"), i), poolCategory: y.b.CORE, harvest: !0, tokenPerBlock: "0.02", sortOrder: 1, isFinished: !0 }, { sousId: 1002, stakingToken: d.a.RNBO, earningToken: d.a.xava, contractAddress: (r = {}, Object(p.a)(r, l.a.FUJI, "0xFf5d4b8Fd9a73978E0064c8Dd44a2FcAf7b33781"), Object(p.a)(r, l.a.AVALANCHE, "0x6069CFBFc168c4555175fcd6cbB803170A52856B"), r), poolCategory: y.b.CORE, harvest: !0, tokenPerBlock: "0.007", sortOrder: 1, isFinished: !0 }, { sousId: 1003, stakingToken: d.a.RNBO, earningToken: d.a.olive, contractAddress: (s = {}, Object(p.a)(s, l.a.FUJI, "0xEe37D6533cFBcC25f841d9677c60e205e2aEa0b7"), Object(p.a)(s, l.a.AVALANCHE, "0xEe37D6533cFBcC25f841d9677c60e205e2aEa0b7"), s), poolCategory: y.b.CORE, harvest: !0, tokenPerBlock: "0.020695364", sortOrder: 1, isFinished: !0 }, { sousId: 1004, stakingToken: d.a.RNBO, earningToken: d.a.wavax, contractAddress: (o = {}, Object(p.a)(o, l.a.FUJI, "0x89dAA415A13B6146787B4a1EF22dF4Ef7589b0bf"), Object(p.a)(o, l.a.AVALANCHE, "0xBe9bD78512Fe31Ff12A813Faa4b7507849209D81"), o), poolCategory: y.b.CORE, harvest: !0, tokenPerBlock: "0.000200066", sortOrder: 1, isFinished: !0 }, { sousId: 1005, stakingToken: d.a.RNBO, earningToken: d.a.dai, contractAddress: (u = {}, Object(p.a)(u, l.a.FUJI, "0x89dAA415A13B6146787B4a1EF22dF4Ef7589b0bf"), Object(p.a)(u, l.a.AVALANCHE, "0xa0d692FE48166476D0caccBE1663021D65497529"), u), poolCategory: y.b.CORE, harvest: !0, tokenPerBlock: "0.0024437", sortOrder: 1, isFinished: !0 }, { sousId: 1006, stakingToken: d.a.RNBO, earningToken: d.a.bag, contractAddress: (c = {}, Object(p.a)(c, l.a.FUJI, "0x6Af85E61b4e0c97A219f1FF101fb6b3e0abb12Fc"), Object(p.a)(c, l.a.AVALANCHE, "0x6Af85E61b4e0c97A219f1FF101fb6b3e0abb12Fc"), c), poolCategory: y.b.CORE, harvest: !0, tokenPerBlock: "0.23148", sortOrder: 1, isFinished: !0 }];
            t.a = b
        },
        68: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return r })), n.d(t, "a", (function() { return s }));
            var a, i, r, s;
            n(13);
            ! function(e) { e.poolBasic = "poolBasic", e.poolUnlimited = "poolUnlimited" }(a || (a = {})),
            function(e) { e.AVAX = "AVAX", e.USDT = "USDT", e.ETH = "ETH", e.WBTC = "WBTC", e.RNBO = "RNBO" }(i || (i = {})),
            function(e) { e.COMMUNITY = "Community", e.CORE = "Core", e.AVALANCHE = "Avalanche" }(r || (r = {})),
            function(e) { e.RNBO = "RNBO" }(s || (s = {}))
        },
        695: function(e, t) {},
        697: function(e, t) {},
        704: function(e, t) {},
        705: function(e, t) {},
        72: function(e) { e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]') },
        74: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return a })), n.d(t, "c", (function() { return i })), n.d(t, "b", (function() { return r }));
            var a = { locale: "en-US", language: "English", code: "en" },
                i = { "ar-SA": { locale: "ar-SA", language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629", code: "ar" }, "en-US": a, "de-DE": { locale: "de-DE", language: "Deutsch", code: "de" }, "el-GR": { locale: "el-GR", language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac", code: "el" }, "es-ES": { locale: "es-ES", language: "Espa\xf1ol", code: "es-ES" }, "fi-FI": { locale: "fi-FI", language: "Suomalainen", code: "fi" }, "fil-PH": { locale: "fil-PH", language: "Filipino", code: "fil" }, "fr-FR": { locale: "fr-FR", language: "Fran\xe7ais", code: "fr" }, "hi-IN": { locale: "hi-IN", language: "\u0939\u093f\u0902\u0926\u0940", code: "hi" }, "hu-HU": { locale: "hu-HU", language: "Magyar", code: "hu" }, "id-ID": { locale: "id-ID", language: "Bahasa Indonesia", code: "id" }, "it-IT": { locale: "it-IT", language: "Italiano", code: "it" }, "ja-JP": { locale: "ja-JP", language: "\u65e5\u672c\u8a9e", code: "ja" }, "ko-KR": { locale: "ko-KR", language: "\ud55c\uad6d\uc5b4", code: "ko" }, "nl-NL": { locale: "nl-NL", language: "Nederlands", code: "nl" }, "pt-BR": { locale: "pt-BR", language: "Portugu\xeas (Brazil)", code: "pt-br" }, "ro-RO": { locale: "ro-RO", language: "Rom\xe2n\u0103", code: "ro" }, "ru-RU": { locale: "ru-RU", language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439", code: "ru" }, "sv-SE": { locale: "sv-SE", language: "Svenska", code: "sv" }, "ta-IN": { locale: "ta-IN", language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd", code: "ta" }, "tr-TR": { locale: "tr-TR", language: "T\xfcrk\xe7e", code: "tr" }, "uk-UA": { locale: "uk-UA", language: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430", code: "uk" }, "vi-VN": { locale: "vi-VN", language: "Ti\u1ebfng Vi\u1ec7t", code: "vi" }, "zh-CN": { locale: "zh-CN", language: "\u7b80\u4f53\u4e2d\u6587", code: "zh-cn" }, "zh-TW": { locale: "zh-TW", language: "\u7e41\u9ad4\u4e2d\u6587", code: "zh-tw" } },
                r = Object.values(i)
        },
        79: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return a })), n.d(t, "a", (function() { return i }));
            var a = function(e) {
                    var t = e.numberOfDays,
                        n = e.farmApr,
                        a = e.tokenPrice,
                        i = e.roundingDecimals,
                        r = void 0 === i ? 2 : i,
                        s = e.compoundFrequency,
                        o = void 0 === s ? 1 : s,
                        u = e.performanceFee,
                        c = void 0 === u ? 0 : u,
                        p = 365 * o,
                        l = n / 100;
                    c && (l = (n - n / 100 * c) / 100);
                    var d = t / 365,
                        y = 1e3 / a,
                        b = y * Math.pow(1 + l / p, p * d);
                    return parseFloat((b - y).toFixed(r))
                },
                i = function(e) { return e.amountEarned / e.amountInvested * 100 }
        },
        837: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i, r = n(0),
                s = n.n(r),
                o = n(107),
                u = n.n(o),
                c = n(54),
                p = n(2),
                l = n(8),
                d = n.n(l),
                y = n(147),
                b = function() {
                    var e = Object(y.a)().login;
                    Object(r.useEffect)((function() {
                        var t = window.localStorage.getItem(p.bb);
                        t && e(t)
                    }), [e])
                },
                m = n(35),
                f = function() {
                    var e = Object(m.h)("RNBO");
                    Object(r.useEffect)((function() { document.title = "RNBOFinance ".concat(e ? "| $".concat(null === e || void 0 === e ? void 0 : e.toFixed(3)) : "") }), [e])
                },
                j = n(21),
                h = n(7),
                O = Object(h.c)(a || (a = Object(j.a)(["\n  * {\n    font-family: 'Kanit', sans-serif;\n  }\n  body {\n    background-color: ", ";\n\n       {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"])), (function(e) { return e.theme.colors.background })),
                x = n(14),
                v = n(26),
                T = n(74),
                w = n(19),
                k = n(61),
                g = [{ label: "Home", icon: "HomeIcon", href: "/" }, { label: "Trade", icon: "TradeIcon", items: [{ label: "Exchange", href: "https://exchange.RNBO.finance" }, { label: "Liquidity", href: "https://exchange.RNBO.finance/#/pool" }] }, { label: "RNBO Gate", icon: "GateIcon", href: "https://gate.RNBO.finance/#/bridge", status: { text: "Bridge", color: "success" } }, { label: "Farms", icon: "FarmIcon", href: "/farms" }, { label: "Pools", icon: "PoolIcon", href: "/pools" }, { label: "Maximus Farm", icon: "CrownIcon", href: "/maximus", status: { text: "NEW", color: "success" } }, { label: "Lottery", icon: "TicketIcon", href: "/lottery", status: { text: "NEW", color: "success" } }, { label: "Audit", icon: "ShieldIcon", href: "https://docs.RNBO.finance/security/certik-audit" }, { label: "Listings", icon: "ListingIcon", items: [{ label: "CoinMarketCap", href: "https://coinmarketcap.com/currencies/RNBO-finance" }, { label: "CoinGecko", href: "https://www.coingecko.com/en/coins/RNBO-finance" }, { label: "LiveCoinWatch", href: "https://www.livecoinwatch.com/price/RNBOFinance-_RNBO" }, { label: "Markr.io", href: "https://markr.io/#/applications/RNBOFinance" }, { label: "DefiLama", href: "https://defillama.com/protocol/RNBO" }, { label: "AvaxProjects", href: "https://www.avax-projects.com/" }, { label: "Coinpaprika", href: "https://coinpaprika.com/coin/RNBO-RNBO-finance-token/" }, { label: "Nomics", href: "https://nomics.com/assets/RNBO2-RNBO-finance" }] }, { label: "Info", icon: "InfoIcon", items: [{ label: "Overview", href: "https://info.RNBO.finance" }, { label: "Tokens", href: "https://info.RNBO.finance/tokens" }, { label: "Pairs", href: "https://info.RNBO.finance/pairs" }, { label: "Accounts", href: "https://info.RNBO.finance/accounts" }] }, { label: "More", icon: "MoreIcon", items: [{ label: "Github", href: "https://github.com/RNBOfinance" }, { label: "Docs", href: "https://docs.RNBO.finance" }] }],
                A = n(1),
                M = function(e) {
                    var t = Object(v.c)().account,
                        n = Object(y.a)(),
                        a = n.login,
                        i = n.logout,
                        r = Object(w.b)(),
                        s = r.currentLanguage,
                        o = r.setLanguage,
                        u = Object(k.a)(),
                        c = u.isDark,
                        l = u.toggleTheme,
                        d = Object(m.h)("RNBO");
                    return Object(A.jsx)(p.H, Object(x.a)({ account: t, login: a, logout: i, isDark: c, toggleTheme: l, links: g, currentLang: s.code, langs: T.b, setLang: o, RNBOPriceUsd: d, profile: null }, e))
                },
                S = n(9),
                C = n(11),
                F = n(17),
                L = n(16),
                I = function(e) {
                    Object(F.a)(n, e);
                    var t = Object(L.a)(n);

                    function n(e) { var a; return Object(S.a)(this, n), (a = t.call(this, e)).state = { hasError: !1 }, a }
                    return Object(C.a)(n, [{
                        key: "componentDidCatch",
                        value: function(e) {
                            var t, n = "ChunkLoadError" === e.name,
                                a = "CSS_CHUNK_LOAD_FAILED" === e.code,
                                i = n || a,
                                r = !!(null === (t = window.history.state) || void 0 === t ? void 0 : t.isRecoveringFromChunkError);
                            if (i && !r) { var s = Object(x.a)(Object(x.a)({}, window.history.state), {}, { isRecoveringFromChunkError: !0 }); return window.history.replaceState(s, ""), void window.location.reload() }
                            throw e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.hasError,
                                t = this.props.fallback;
                            return e ? t : Object(A.jsx)(r.Suspense, Object(x.a)({}, this.props))
                        }
                    }], [{ key: "getDerivedStateFromError", value: function() { return { hasError: !0 } } }]), n
                }(s.a.Component),
                D = n(48),
                P = n(15),
                E = n(98),
                B = Object(r.createContext)(void 0),
                _ = function(e) {
                    var t = e.children,
                        n = Object(r.useState)([]),
                        a = Object(P.a)(n, 2),
                        i = a[0],
                        s = a[1],
                        o = Object(r.useCallback)((function(e) {
                            var t = e.title,
                                n = e.description,
                                a = e.type;
                            s((function(e) {
                                var i = Object(E.kebabCase)(t),
                                    r = e.filter((function(e) { return e.id !== i }));
                                return [{ id: i, title: t, description: n, type: a }].concat(Object(D.a)(r))
                            }))
                        }), [s]);
                    return Object(A.jsx)(B.Provider, { value: { toasts: i, clear: function() { return s([]) }, remove: function(e) { s((function(t) { return t.filter((function(t) { return t.id !== e })) })) }, toastError: function(e, t) { return o({ title: e, description: t, type: p.eb.DANGER }) }, toastInfo: function(e, t) { return o({ title: e, description: t, type: p.eb.INFO }) }, toastSuccess: function(e, t) { return o({ title: e, description: t, type: p.eb.SUCCESS }) }, toastWarning: function(e, t) { return o({ title: e, description: t, type: p.eb.WARNING }) } }, children: t })
                },
                N = function() { var e = Object(r.useContext)(B); if (void 0 === e) throw new Error("Toasts context undefined"); return e },
                U = function() {
                    var e = N(),
                        t = e.toasts,
                        n = e.remove;
                    return Object(A.jsx)(p.W, { toasts: t, onRemove: function(e) { return n(e) } })
                },
                V = n(105),
                Y = Object(h.e)(V.a)(i || (i = Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),
                R = function() { return Object(A.jsx)(Y, { children: Object(A.jsx)(p.T, {}) }) },
                H = function(e) {
                    var t = Object(r.useState)(!1),
                        n = Object(P.a)(t, 2),
                        a = n[0],
                        i = n[1],
                        s = Object(r.useCallback)((function() { return i(!0) }), [i]);
                    return Object(p.fb)(s), a ? Object(A.jsx)("div", { onAnimationEnd: function() { return i(!1) }, children: Object(A.jsx)(p.w, Object(x.a)({}, e)) }) : null
                },
                J = s.a.memo(H),
                W = n(131),
                z = n.n(W),
                q = n(434),
                X = n.n(q),
                G = n(194),
                K = n(195),
                Q = n(199),
                $ = n(100),
                Z = n(36),
                ee = n(23),
                te = n(127),
                ne = n(79),
                ae = n(281),
                ie = n.n(ae),
                re = function(e) {
                    var t = e.value,
                        n = e.fontSize,
                        a = e.color,
                        i = e.decimals,
                        s = e.isDisabled,
                        o = e.unit,
                        u = Object(r.useRef)(0);
                    return Object(r.useEffect)((function() { u.current = t }), [t]), Object(A.jsxs)(p.V, { bold: !0, color: s ? "textDisabled" : a, fontSize: n, children: [Object(A.jsx)(ie.a, { start: u.current, end: t, decimals: i, duration: 1, separator: "," }), t && o && Object(A.jsx)("span", { children: o })] })
                };
            re.defaultProps = { fontSize: "32px", isDisabled: !1, color: "text", decimals: 3 };
            var se, oe, ue, ce, pe, le, de, ye, be, me, fe, je, he, Oe, xe, ve, Te, we, ke, ge, Ae, Me, Se, Ce, Fe, Le, Ie, De, Pe, Ee, Be, _e, Ne, Ue, Ve, Ye = re,
                Re = n(196),
                He = n(49),
                Je = function(e) {
                    var t, n = e.pool,
                        a = e.stakingTokenPrice,
                        i = e.isAutoVault,
                        r = void 0 !== i && i,
                        s = e.compoundFrequency,
                        o = void 0 === s ? 1 : s,
                        u = e.performanceFee,
                        c = void 0 === u ? 0 : u,
                        l = Object(w.b)().t,
                        d = n.stakingToken,
                        y = n.earningToken,
                        b = n.totalStaked,
                        f = n.isFinished,
                        j = n.tokenPerBlock,
                        h = l(r ? "APY includes compounding, APR doesn\u2019t. This pool\u2019s RNBO is compounded automatically, so we show APY." : "This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR"),
                        O = Object(p.jb)(h, { placement: "bottom-end" }),
                        x = O.targetRef,
                        v = O.tooltip,
                        T = O.tooltipVisible,
                        k = null === y || void 0 === y || null === (t = y.symbol) || void 0 === t ? void 0 : t.toLowerCase(),
                        g = Object(m.h)(k),
                        M = Object(te.b)(a, g, Object(ee.c)(b, d.decimals), parseFloat(j)),
                        S = Math.round(g / 1e3) > 0,
                        C = S ? 4 : 2,
                        F = d.address && "".concat(He.c, "/#/swap?outputCurrency=").concat(d.address[43114]),
                        L = Object(p.hb)(Object(A.jsx)(Re.a, { tokenPrice: g, apr: M, linkLabel: "".concat(l("Get"), " ").concat(d.symbol), linkHref: F || He.c, earningTokenSymbol: y.symbol, roundingDecimals: S ? 4 : 2, compoundFrequency: o, performanceFee: c })),
                        I = Object(P.a)(L, 1)[0];
                    return Object(A.jsxs)(p.x, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [T && v, Object(A.jsxs)(p.Y, { ref: x, children: [l(r ? "APY" : "APR"), ":"] }), f || !M ? Object(A.jsx)(p.R, { width: "82px", height: "32px" }) : Object(A.jsxs)(p.x, {
                            alignItems: "center",
                            children: [Object(A.jsx)(Ye, {
                                fontSize: "16px",
                                isDisabled: f,
                                value: function() {
                                    if (r) {
                                        var e = 1e3 / g,
                                            t = Object(ne.b)({ numberOfDays: 365, farmApr: M, tokenPrice: g, roundingDecimals: C, compoundFrequency: o, performanceFee: c });
                                        return Object(ne.a)({ amountEarned: t, amountInvested: e })
                                    }
                                    return M
                                }(),
                                decimals: 2,
                                unit: "%",
                                bold: !0
                            }), Object(A.jsx)(p.A, { onClick: I, variant: "text", scale: "sm", children: Object(A.jsx)(p.k, { color: "textSubtle", width: "18px" }) })]
                        })]
                    })
                },
                We = Object(h.e)(p.l)(se || (se = Object(j.a)(["\n  max-width: ", ";\n  margin: 0 8px 24px;\n  background: ", ";\n  border-radius: 32px;\n  display: flex;\n  color: ", ";\n  box-shadow: ", ";\n  flex-direction: column;\n  align-self: baseline;\n  position: relative;\n\n  ", " {\n    margin: 0 12px 46px;\n  }\n"])), (function(e) { return "".concat(e.isHomeCard ? "100%" : "352px") }), (function(e) { return e.theme.card.background }), (function(e) { var t = e.isFinished; return e.theme.colors[t ? "textDisabled" : "secondary"] }), (function(e) { return e.isStaking ? "0px 0px 0px 2px #f9d92e;" : "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)" }), (function(e) { return e.theme.mediaQueries.sm })),
                ze = We,
                qe = n(162),
                Xe = n(20),
                Ge = n(192),
                Ke = Object(h.e)(p.x)(oe || (oe = Object(j.a)(["\n  svg {\n    height: 14px;\n    width: 14px;\n  }\n"]))),
                Qe = function(e) {
                    var t, n = e.pool,
                        a = e.account,
                        i = e.performanceFee,
                        r = void 0 === i ? 0 : i,
                        s = e.isAutoVault,
                        o = void 0 !== s && s,
                        u = e.totalRNBOInVault,
                        c = Object(w.b)().t,
                        l = Object(m.a)().currentBlock,
                        d = n.stakingToken,
                        y = n.earningToken,
                        b = n.totalStaked,
                        f = n.startBlock,
                        j = n.endBlock,
                        h = n.isFinished,
                        O = n.contractAddress,
                        x = y.address ? Object(Xe.a)(y.address) : "",
                        v = Object(Xe.a)(O),
                        T = Object(Xe.h)(),
                        k = "".concat(He.d, "/images/tokens/").concat(y.symbol.toLowerCase(), ".png"),
                        g = !!(null === (t = window.ethereum) || void 0 === t ? void 0 : t.isMetaMask),
                        M = (Boolean(!h && f && j), Math.max(f - l, 0), Math.max(j - l, 0), Object(p.jb)(c("Subtracted automatically from each yield harvest and burned."), { placement: "bottom-end" })),
                        S = M.targetRef,
                        C = M.tooltip,
                        F = M.tooltipVisible;
                    return Object(A.jsxs)(Ke, { flexDirection: "column", children: [Object(A.jsxs)(p.x, { mb: "2px", justifyContent: "space-between", alignItems: "center", children: [Object(A.jsx)(p.V, { small: !0, children: c("Total staked:") }), Object(A.jsx)(p.x, { alignItems: "flex-start", children: b ? Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(Ye, { fontSize: "14px", value: o ? Object(ee.c)(u, d.decimals) : Object(ee.c)(b, d.decimals) }), Object(A.jsx)(p.V, { ml: "4px", fontSize: "14px", children: d.symbol })] }) : Object(A.jsx)(p.R, { width: "90px", height: "21px" }) })] }), o && Object(A.jsxs)(p.x, { mb: "2px", justifyContent: "space-between", alignItems: "center", children: [F && C, Object(A.jsx)(p.Y, { ref: S, small: !0, children: c("Performance Fee") }), Object(A.jsx)(p.x, { alignItems: "center", children: Object(A.jsxs)(p.V, { ml: "4px", small: !0, children: [r / 100, "%"] }) })] }), Object(A.jsx)(p.x, { mb: "2px", justifyContent: "flex-end", children: Object(A.jsx)(p.E, { bold: !1, small: !0, href: y.projectLink, children: c("View Project Site") }) }), v && Object(A.jsx)(p.x, { mb: "2px", justifyContent: "flex-end", children: Object(A.jsx)(p.E, { bold: !1, small: !0, href: "".concat(He.b, "/address/").concat(o ? T : v), children: c("View Contract") }) }), a && g && x && Object(A.jsx)(p.x, { justifyContent: "flex-end", children: Object(A.jsxs)(p.h, { variant: "text", p: "0", height: "auto", onClick: function() { return Object(Ge.a)(x, y.symbol, y.decimals, k) }, children: [Object(A.jsx)(p.V, { color: "primary", fontSize: "14px", children: "Add to Metamask" }), Object(A.jsx)(p.I, { ml: "4px" })] }) })] })
                },
                $e = s.a.memo(Qe),
                Ze = Object(h.e)(p.x)(ue || (ue = Object(j.a)(["\n  align-items: center;\n  justify-content: space-between;\n  button {\n    padding: 0;\n  }\n"]))),
                et = function(e) {
                    var t = e.pool,
                        n = e.account,
                        a = e.performanceFee,
                        i = void 0 === a ? 0 : a,
                        s = e.isAutoVault,
                        o = void 0 !== s && s,
                        u = e.totalRNBOInVault,
                        c = Object(w.b)().t,
                        l = Object(r.useState)(!1),
                        d = Object(P.a)(l, 2),
                        y = d[0],
                        b = d[1],
                        m = c("You must harvest and compound your earnings from this pool manually."),
                        f = c("Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you."),
                        j = Object(p.jb)(o ? f : m, { placement: "bottom-end" }),
                        h = j.targetRef,
                        O = j.tooltip,
                        x = j.tooltipVisible;
                    return Object(A.jsxs)(p.n, { children: [Object(A.jsxs)(Ze, { children: [Object(A.jsxs)(p.x, { alignItems: "center", children: [o ? Object(A.jsx)(qe.b, {}) : Object(A.jsx)(qe.e, {}), x && O, Object(A.jsx)(p.g, { ref: h, children: Object(A.jsx)(p.z, { ml: "4px", width: "20px", height: "20px", color: "textSubtle" }) })] }), Object(A.jsx)(p.v, { expanded: y, onClick: function() { return b(!y) }, children: c(y ? "Hide" : "Details") })] }), y && Object(A.jsx)($e, { pool: t, account: n, performanceFee: i, isAutoVault: o, totalRNBOInVault: u })] })
                },
                tt = Object(h.e)(p.o)(ce || (ce = Object(j.a)(["\n  background: ", ";\n"])), (function(e) {
                    var t = e.isFinished,
                        n = e.background,
                        a = e.theme;
                    return t ? a.colors.backgroundDisabled : a.colors.gradients[n]
                })),
                nt = function(e) {
                    var t = e.earningTokenSymbol,
                        n = e.stakingTokenSymbol,
                        a = e.isFinished,
                        i = void 0 !== a && a,
                        r = e.isAutoVault,
                        s = void 0 !== r && r,
                        o = Object(w.b)().t,
                        u = s ? "RNBO-RNBOvault.svg" : "".concat(t, "-").concat(n, ".svg").toLocaleLowerCase(),
                        c = "RNBO" === t && "RNBO" === n,
                        l = c ? "bubblegum" : "cardHeader";
                    return Object(A.jsx)(tt, { isFinished: i, background: l, children: Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", children: [Object(A.jsxs)(p.x, { flexDirection: "column", children: [Object(A.jsx)(p.y, { color: i ? "textDisabled" : "text", scale: "lg", children: "".concat("".concat(o(s ? "Auto" : c ? "Manual" : "Earn")), " ").concat(t) }), Object(A.jsx)(p.V, { color: i ? "textDisabled" : "text", children: s ? "".concat(o("Automatic restaking")) : c ? "".concat(o("Earn RNBO, stake RNBO")) : "".concat(o("Stake"), " ").concat(n) })] }), Object(A.jsx)(p.B, { src: "/images/pools/".concat(u), alt: t, width: 64, height: 64 })] }) })
                },
                at = n(68),
                it = n(3),
                rt = n.n(it),
                st = n(12),
                ot = n(277),
                ut = n(30),
                ct = function(e) {
                    var t = e.pool,
                        n = e.isLoading,
                        a = void 0 !== n && n,
                        i = t.sousId,
                        s = t.stakingToken,
                        o = t.earningToken,
                        u = t.isFinished,
                        c = Object(w.b)().t,
                        l = Object(ut.a)(s.address ? Object(Xe.a)(s.address) : ""),
                        d = Object(r.useState)(!1),
                        y = Object(P.a)(d, 2),
                        b = y[0],
                        m = y[1],
                        f = Object(ot.c)(l, i).onApprove,
                        j = N(),
                        h = j.toastSuccess,
                        O = j.toastError,
                        x = Object(r.useCallback)(Object(st.a)(rt.a.mark((function e() {
                            return rt.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, m(!0), e.next = 4, f();
                                    case 4:
                                        e.sent ? (h("".concat(c("Contract Enabled")), "".concat(c("You can now stake in the ".concat(o.symbol, " pool!")))), m(!1)) : (O("".concat(c("Error")), "".concat(c("Please try again. Confirm the transaction and make sure you are paying enough gas!"))), m(!1)), e.next = 12;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0), O("Error", null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        }))), [f, m, h, O, c, o]);
                    return Object(A.jsx)(A.Fragment, { children: a ? Object(A.jsx)(p.R, { width: "100%", height: "52px" }) : Object(A.jsx)(p.h, { isLoading: b, endIcon: b ? Object(A.jsx)(p.d, { spin: !0, color: "currentColor" }) : null, disabled: u || b, onClick: x, width: "100%", children: c("Enable") }) })
                },
                pt = Object(h.e)(p.D)(pe || (pe = Object(j.a)(["\n  width: 100%;\n"]))),
                lt = function(e) {
                    var t = e.tokenSymbol,
                        n = e.onDismiss,
                        a = Object(w.b)().t,
                        i = Object(k.a)().theme;
                    return Object(A.jsxs)(p.K, { title: "".concat(t, " ").concat(a("required")), onDismiss: n, headerBackground: i.colors.gradients.cardHeader, children: [Object(A.jsx)(p.V, { color: "failure", bold: !0, children: a("Insufficient %tokensymbol% balance", { tokensymbol: t }) }), Object(A.jsx)(p.V, { mt: "24px", children: a("You\u2019ll need %tokensymbol% to stake in this pool!", { tokensymbol: t }) }), Object(A.jsx)(p.V, { children: a("Buy some %tokensymbol%, or make sure your %tokensymbol% isn\u2019t in another pool or LP.", { tokensymbol: t }) }), Object(A.jsxs)(p.h, { mt: "24px", as: "a", external: !0, href: He.c, children: [a("Buy"), " ", t] }), Object(A.jsx)(pt, { href: "https://exchange.RNBO.finance", external: !0, children: Object(A.jsxs)(p.h, { variant: "secondary", mt: "8px", width: "100%", children: [a("Locate Assets"), Object(A.jsx)(p.N, { color: "primary", ml: "4px" })] }) }), Object(A.jsx)(p.h, { variant: "text", onClick: n, children: a("Close window") })] })
                },
                dt = n(188),
                yt = n(282),
                bt = Object(h.e)(p.h)(le || (le = Object(j.a)(["\n  flex-grow: 1;\n"]))),
                mt = function(e) {
                    var t = e.children,
                        n = e.onClick;
                    return Object(A.jsx)(bt, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: n, children: t })
                },
                ft = Object(h.e)(p.D)(de || (de = Object(j.a)(["\n  width: 100%;\n"]))),
                jt = function(e) {
                    var t, n = e.isBnbPool,
                        a = e.pool,
                        i = e.stakingMax,
                        s = e.stakingTokenPrice,
                        o = e.isRemovingStake,
                        u = void 0 !== o && o,
                        c = e.onDismiss,
                        l = a.sousId,
                        y = a.stakingToken,
                        b = a.earningToken,
                        m = Object(w.b)().t,
                        f = Object(k.a)().theme,
                        j = Object(dt.b)(l, n).onStake,
                        h = Object(yt.b)(l, a.enableEmergencyWithdraw).onUnstake,
                        O = N(),
                        x = O.toastSuccess,
                        v = O.toastError,
                        T = Object(r.useState)(!1),
                        g = Object(P.a)(T, 2),
                        M = g[0],
                        S = g[1],
                        C = Object(r.useState)(""),
                        F = Object(P.a)(C, 2),
                        L = F[0],
                        I = F[1],
                        D = Object(r.useState)(0),
                        E = Object(P.a)(D, 2),
                        B = E[0],
                        _ = E[1],
                        U = L && Object(ee.a)(new d.a(L).times(s).toNumber()),
                        V = function(e) {
                            var t = i.dividedBy(100).multipliedBy(e),
                                n = Object(ee.e)(t, y.decimals, y.decimals);
                            I(n), _(e)
                        },
                        Y = function() {
                            var e = Object(st.a)(rt.a.mark((function e() {
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (S(!0), !u) { e.next = 16; break }
                                            return e.prev = 2, e.next = 5, h(L, y.decimals);
                                        case 5:
                                            x("".concat(m("Unstaked"), "!"), m("Your ".concat(b.symbol, " earnings have also been harvested to your wallet!"))), S(!1), c(), e.next = 14;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), v(m("Canceled"), m("Please try again and confirm the transaction.")), S(!1);
                                        case 14:
                                            e.next = 28;
                                            break;
                                        case 16:
                                            return e.prev = 16, e.next = 19, j(L, y.decimals);
                                        case 19:
                                            x("".concat(m("Staked"), "!"), m("Your ".concat(y.symbol, " funds have been staked in the pool!"))), S(!1), c(), e.next = 28;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t1 = e.catch(16), v(m("Canceled"), m("Please try again and confirm the transaction.")), S(!1);
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 10],
                                    [16, 24]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(A.jsxs)(p.K, {
                        title: m(u ? "Unstake" : "Stake in Pool"),
                        onDismiss: c,
                        headerBackground: f.colors.gradients.cardHeader,
                        children: [Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", mb: "8px", children: [Object(A.jsxs)(p.V, { bold: !0, children: [m(u ? "Unstake" : "Stake"), ":"] }), Object(A.jsxs)(p.x, { alignItems: "center", minWidth: "70px", children: [Object(A.jsx)(p.B, { src: "/images/tokens/".concat(null === y || void 0 === y || null === (t = y.symbol) || void 0 === t ? void 0 : t.toLowerCase(), ".png"), width: 24, height: 24, alt: y.symbol }), Object(A.jsx)(p.V, { ml: "4px", bold: !0, children: y.symbol })] })] }), Object(A.jsx)(p.e, {
                            value: L,
                            onUserInput: function(e) {
                                if (e) {
                                    var t = Object(ee.d)(new d.a(e), y.decimals),
                                        n = Math.floor(t.dividedBy(i).multipliedBy(100).toNumber());
                                    _(n > 100 ? 100 : n)
                                } else _(0);
                                I(e)
                            },
                            currencyValue: "~".concat(U || 0, " USD")
                        }), Object(A.jsxs)(p.V, { mt: "8px", ml: "auto", color: "textSubtle", fontSize: "12px", mb: "8px", children: ["Balance: ", Object(ee.e)(i, y.decimals)] }), Object(A.jsx)(p.S, { min: 0, max: 100, value: B, onValueChanged: V, name: "stake", valueLabel: "".concat(B, "%"), step: 1 }), Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", mt: "8px", children: [Object(A.jsx)(mt, { onClick: function() { return V(25) }, children: "25%" }), Object(A.jsx)(mt, { onClick: function() { return V(50) }, children: "50%" }), Object(A.jsx)(mt, { onClick: function() { return V(75) }, children: "75%" }), Object(A.jsx)(mt, { onClick: function() { return V(100) }, children: "MAX" })] }), Object(A.jsx)(p.h, { isLoading: M, endIcon: M ? Object(A.jsx)(p.d, { spin: !0, color: "currentColor" }) : null, onClick: Y, disabled: !L || 0 === parseFloat(L), mt: "24px", children: m(M ? "Confirming" : "Confirm") }), !u && Object(A.jsx)(ft, { external: !0, href: He.c, children: Object(A.jsxs)(p.h, { width: "100%", mt: "8px", variant: "secondary", children: [m("Get"), " ", y.symbol] }) })]
                    })
                },
                ht = function(e) {
                    var t = e.pool,
                        n = e.stakingTokenBalance,
                        a = e.stakingTokenPrice,
                        i = e.stakedBalance,
                        r = e.isBnbPool,
                        s = e.isStaked,
                        o = e.isLoading,
                        u = void 0 !== o && o,
                        c = t.stakingToken,
                        l = t.earningToken,
                        y = t.stakingLimit,
                        b = t.isFinished,
                        m = Object(w.b)().t,
                        f = Object(ee.d)(new d.a(y), l.decimals),
                        j = y && n.isGreaterThan(f) ? f : n,
                        h = Object(ee.a)(Object(ee.c)(i, c.decimals), 3, 3),
                        O = Object(ee.a)(Object(ee.c)(i.multipliedBy(a), c.decimals)),
                        x = Object(p.hb)(Object(A.jsx)(lt, { tokenSymbol: c.symbol })),
                        v = Object(P.a)(x, 1)[0],
                        T = Object(p.hb)(Object(A.jsx)(jt, { stakingMax: j, isBnbPool: r, pool: t, stakingTokenPrice: a })),
                        k = Object(P.a)(T, 1)[0],
                        g = Object(p.hb)(Object(A.jsx)(jt, { stakingMax: i, isBnbPool: r, pool: t, stakingTokenPrice: a, isRemovingStake: !0 })),
                        M = Object(P.a)(g, 1)[0];
                    return Object(A.jsx)(p.x, { flexDirection: "column", children: u ? Object(A.jsx)(p.R, { width: "100%", height: "52px" }) : s ? Object(A.jsxs)(p.x, { justifyContent: "space-between", alignItems: "center", children: [Object(A.jsxs)(p.x, { flexDirection: "column", children: [Object(A.jsx)(p.y, { children: h }), Object(A.jsx)(p.V, { fontSize: "12px", color: "textSubtle", children: "~".concat(O || 0, " USD") })] }), Object(A.jsxs)(p.x, { children: [Object(A.jsx)(p.A, { variant: "secondary", onClick: M, mr: "6px", children: Object(A.jsx)(p.J, { color: "primary", width: "24px" }) }), Object(A.jsx)(p.A, { variant: "secondary", onClick: n.gt(0) ? k : v, disabled: b, children: Object(A.jsx)(p.a, { color: "primary", width: "24px", height: "24px" }) })] })] }) : Object(A.jsx)(p.h, { disabled: b, onClick: n.gt(0) ? k : v, children: m("Stake") }) })
                },
                Ot = n(278),
                xt = function(e) {
                    var t = e.formattedBalance,
                        n = e.fullBalance,
                        a = e.earningToken,
                        i = e.earningsDollarValue,
                        s = e.sousId,
                        o = e.isBnbPool,
                        u = e.isCompoundPool,
                        c = void 0 !== u && u,
                        l = e.onDismiss,
                        d = Object(w.b)().t,
                        y = Object(k.a)().theme,
                        b = N(),
                        m = b.toastSuccess,
                        f = b.toastError,
                        j = Object(Ot.c)(s, o).onReward,
                        h = Object(dt.b)(s, o).onStake,
                        O = Object(r.useState)(!1),
                        x = Object(P.a)(O, 2),
                        v = x[0],
                        T = x[1],
                        g = Object(r.useState)(c),
                        M = Object(P.a)(g, 2),
                        S = M[0],
                        C = M[1],
                        F = Object(p.jb)(Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(p.V, { mb: "12px", children: d("Compound: collect and restake RNBO into pool.") }), Object(A.jsx)(p.V, { children: d("Harvest: collect RNBO and send to wallet") })] }), { placement: "bottom-end", tooltipOffset: [20, 10] }),
                        L = F.targetRef,
                        I = F.tooltip,
                        D = F.tooltipVisible,
                        E = function() {
                            var e = Object(st.a)(rt.a.mark((function e() {
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T(!0), !S) { e.next = 16; break }
                                            return e.prev = 2, e.next = 5, h(n, a.decimals);
                                        case 5:
                                            m("".concat(d("Compounded"), "!"), d("Your ".concat(a.symbol, " earnings have been re-invested into the pool!"))), T(!1), l(), e.next = 14;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), f(d("Canceled"), d("Please try again and confirm the transaction.")), T(!1);
                                        case 14:
                                            e.next = 28;
                                            break;
                                        case 16:
                                            return e.prev = 16, e.next = 19, j();
                                        case 19:
                                            m("".concat(d("Harvested"), "!"), d("Your ".concat(a.symbol, " earnings have been sent to your wallet!"))), T(!1), l(), e.next = 28;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t1 = e.catch(16), f(d("Canceled"), d("Please try again and confirm the transaction.")), T(!1);
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 10],
                                    [16, 24]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(A.jsxs)(p.K, { title: "".concat(a.symbol, " ").concat(d(c ? "Collect" : "Harvest")), onDismiss: l, headerBackground: y.colors.gradients.cardHeader, children: [c && Object(A.jsxs)(p.x, { justifyContent: "center", alignItems: "center", mb: "24px", children: [Object(A.jsxs)(p.i, { activeIndex: S ? 0 : 1, scale: "sm", variant: "subtle", onItemClick: function(e) { return C(!e) }, children: [Object(A.jsx)(p.j, { as: "button", children: d("Compound") }), Object(A.jsx)(p.j, { as: "button", children: d("Harvest") })] }), Object(A.jsx)(p.x, { ml: "10px", ref: L, children: Object(A.jsx)(p.z, { color: "textSubtle" }) }), D && I] }), Object(A.jsxs)(p.x, { justifyContent: "space-between", alignItems: "center", mb: "24px", children: [Object(A.jsxs)(p.V, { children: [d(S ? "Compounding" : "Harvesting"), ":"] }), Object(A.jsxs)(p.x, { flexDirection: "column", children: [Object(A.jsxs)(p.y, { children: [t, " ", a.symbol] }), Object(A.jsx)(p.V, { fontSize: "12px", color: "textSubtle", children: "~".concat(i || 0, " USD") })] })] }), Object(A.jsx)(p.h, { mt: "8px", onClick: E, isLoading: v, endIcon: v ? Object(A.jsx)(p.d, { spin: !0, color: "currentColor" }) : null, children: d(v ? "Confirming" : "Confirm") }), Object(A.jsx)(p.h, { variant: "text", onClick: l, pb: "0px", children: d("Close window") })] })
                },
                vt = function(e) {
                    var t, n = e.earnings,
                        a = e.earningToken,
                        i = e.sousId,
                        r = e.isBnbPool,
                        s = e.isLoading,
                        o = void 0 !== s && s,
                        u = Object(w.b)().t,
                        c = Object(m.h)(null === a || void 0 === a || null === (t = a.symbol) || void 0 === t ? void 0 : t.toLowerCase()),
                        l = Object(ee.e)(n, a.decimals),
                        d = Object(ee.a)(Object(ee.c)(n, a.decimals), 3, 3),
                        y = Object(ee.a)(Object(ee.c)(n.multipliedBy(c), a.decimals)),
                        b = n.toNumber() > 0,
                        f = 0 === i,
                        j = Object(p.hb)(Object(A.jsx)(xt, { formattedBalance: d, fullBalance: l, earningToken: a, earningsDollarValue: y, sousId: i, isBnbPool: r, isCompoundPool: f })),
                        h = Object(P.a)(j, 1)[0];
                    return Object(A.jsx)(p.x, { flexDirection: "column", mb: "16px", children: Object(A.jsxs)(p.x, { justifyContent: "space-between", alignItems: "center", children: [Object(A.jsx)(p.x, { flexDirection: "column", children: o ? Object(A.jsx)(p.R, { width: "80px", height: "48px" }) : Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(p.y, { color: b ? "text" : "textDisabled", children: b ? d : 0 }), Object(A.jsx)(p.V, { fontSize: "12px", color: b ? "textSubtle" : "textDisabled", children: "~".concat(b ? y : 0, " USD") })] }) }), Object(A.jsx)(p.x, { children: Object(A.jsx)(p.h, { disabled: !b, onClick: h, children: u(f ? "Collect" : "Harvest") }) })] }) })
                },
                Tt = Object(h.e)(p.V)(ye || (ye = Object(j.a)(["\n  display: inline;\n"]))),
                wt = function(e) {
                    var t = e.pool,
                        n = e.stakedBalance,
                        a = e.stakingTokenPrice,
                        i = t.sousId,
                        r = t.stakingToken,
                        s = t.earningToken,
                        o = t.harvest,
                        u = t.poolCategory,
                        c = t.userData,
                        l = u === at.b.AVALANCHE,
                        y = Object(w.b)().t,
                        b = (null === c || void 0 === c ? void 0 : c.allowance) ? new d.a(c.allowance) : Z.b,
                        m = (null === c || void 0 === c ? void 0 : c.stakingTokenBalance) ? new d.a(c.stakingTokenBalance) : Z.b,
                        f = (null === c || void 0 === c ? void 0 : c.pendingReward) ? new d.a(c.pendingReward) : Z.b,
                        j = !b.gt(0) && !l,
                        h = n.gt(0),
                        O = !c;
                    return Object(A.jsx)(p.x, { flexDirection: "column", children: Object(A.jsxs)(p.x, { flexDirection: "column", children: [o && Object(A.jsxs)(A.Fragment, { children: [Object(A.jsxs)(p.g, { display: "inline", children: [Object(A.jsx)(Tt, { color: "secondary", textTransform: "uppercase", bold: !0, fontSize: "12px", children: "".concat(s.symbol, " ") }), Object(A.jsx)(Tt, { color: "textSubtle", textTransform: "uppercase", bold: !0, fontSize: "12px", children: y("earned") })] }), Object(A.jsx)(vt, { earnings: f, earningToken: s, sousId: i, isBnbPool: l, isLoading: O })] }), Object(A.jsxs)(p.g, { display: "inline", children: [Object(A.jsxs)(Tt, { color: h ? "secondary" : "textSubtle", textTransform: "uppercase", bold: !0, fontSize: "12px", children: [h ? r.symbol : y("stake"), " "] }), Object(A.jsx)(Tt, { color: h ? "textSubtle" : "secondary", textTransform: "uppercase", bold: !0, fontSize: "12px", children: h ? y("staked") : "".concat(r.symbol) })] }), j ? Object(A.jsx)(ct, { pool: t, isLoading: O }) : Object(A.jsx)(ht, { isLoading: O, pool: t, stakingTokenBalance: m, stakingTokenPrice: a, stakedBalance: n, isBnbPool: l, isStaked: h })] }) })
                },
                kt = function(e) {
                    var t, n = e.pool,
                        a = e.account,
                        i = e.isHomeCard,
                        r = n.sousId,
                        s = n.stakingToken,
                        o = n.earningToken,
                        u = n.isFinished,
                        c = n.userData,
                        l = Object(w.b)().t,
                        y = (null === c || void 0 === c ? void 0 : c.stakedBalance) ? new d.a(c.stakedBalance) : Z.b,
                        b = y.gt(0),
                        f = Object(m.h)(null === s || void 0 === s || null === (t = s.symbol) || void 0 === t ? void 0 : t.toString());
                    return Object(A.jsxs)(ze, { isStaking: !u && b, isFinished: u && 0 !== r, ribbon: u && Object(A.jsx)(p.p, { variantColor: "textDisabled", text: "".concat(l("Finished")) }), isHomeCard: i, children: [Object(A.jsx)(nt, { earningTokenSymbol: o.symbol, stakingTokenSymbol: s.symbol, isFinished: u && 0 !== r }), Object(A.jsxs)(p.m, { children: [Object(A.jsx)(Je, { pool: n, stakingTokenPrice: f }), Object(A.jsx)(p.x, { mt: "24px", flexDirection: "column", children: a ? Object(A.jsx)(wt, { pool: n, stakedBalance: y, stakingTokenPrice: f }) : Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(p.V, { mb: "10px", textTransform: "uppercase", fontSize: "12px", color: "textSubtle", bold: !0, children: l("Start earning") }), Object(A.jsx)($.a, {})] }) })] }), Object(A.jsx)(et, { pool: n, account: a })] })
                },
                gt = n(197),
                At = n(403),
                Mt = n(404),
                St = n(65),
                Ct = function() {
                    var e = Object(ut.e)(),
                        t = Object(r.useState)({ performanceFee: null, callFee: null, withdrawalFee: null, withdrawalFeePeriod: null }),
                        n = Object(P.a)(t, 2),
                        a = n[0],
                        i = n[1];
                    return Object(r.useEffect)((function() {
                        (function() {
                            var t = Object(st.a)(rt.a.mark((function t() {
                                var n, a, r, s, o, u;
                                return rt.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(St.a)([e.methods.performanceFee().call, e.methods.withdrawFeePeriod().call, e.methods.callFee().call, e.methods.withdrawFee().call]);
                                        case 2:
                                            n = t.sent, a = Object(P.a)(n, 4), r = a[0], s = a[1], o = a[2], u = a[3], i({ performanceFee: r, callFee: o, withdrawalFee: u, withdrawalFeePeriod: s });
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() { return t.apply(this, arguments) }
                        })()()
                    }), [e]), a
                },
                Ft = n(109),
                Lt = function(e) {
                    var t = e.pool,
                        n = e.isLoading,
                        a = void 0 !== n && n,
                        i = e.setLastUpdated,
                        s = Object(v.c)().account,
                        o = t.stakingToken,
                        u = Object(ut.e)(),
                        c = Object(ut.d)(),
                        l = Object(w.b)().t,
                        d = Object(r.useState)(!1),
                        y = Object(P.a)(d, 2),
                        b = y[0],
                        m = y[1],
                        f = N(),
                        j = f.toastSuccess,
                        h = f.toastError;
                    return Object(A.jsx)(A.Fragment, { children: a ? Object(A.jsx)(p.R, { width: "100%", height: "52px" }) : Object(A.jsx)(p.h, { isLoading: b, endIcon: b ? Object(A.jsx)(p.d, { spin: !0, color: "currentColor" }) : null, disabled: b, onClick: function() { c.methods.approve(u.options.address, Ft.a.constants.MaxUint256).send({ from: s }).on("sending", (function() { m(!0) })).on("receipt", (function() { j("".concat(l("Contract Enabled")), "".concat(l("You can now stake in the %symbol% vault!", { symbol: o.symbol }))), i(), m(!1) })).on("error", (function(e) { console.error(e), h("".concat(l("Error")), "".concat(l("Please try again. Confirm the transaction and make sure you are paying enough gas!"))), m(!1) })) }, width: "100%", children: l("Enable") }) })
                },
                It = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 259200,
                        n = Object(r.useState)(null),
                        a = Object(P.a)(n, 2),
                        i = a[0],
                        s = a[1],
                        o = Object(r.useState)(!1),
                        u = Object(P.a)(o, 2),
                        c = u[0],
                        p = u[1];
                    return Object(r.useEffect)((function() {
                        var n = e + t - Math.floor(Date.now() / 1e3);
                        n > 0 && (s(n), p(!0))
                    }), [e, t, s]), { hasUnstakingFee: c, secondsRemaining: i }
                },
                Dt = n(92),
                Pt = n(198),
                Et = function(e) {
                    var t = e.secondsRemaining,
                        n = Object(Pt.a)(t),
                        a = n.days,
                        i = n.hours,
                        r = n.minutes;
                    return Object(A.jsxs)(p.V, { fontSize: "14px", children: [a && a, "d : ", i && i, "h : ", r && r, "m"] })
                },
                Bt = function(e) {
                    var t = e.withdrawalFee,
                        n = e.lastDepositedTime,
                        a = e.withdrawalFeePeriod,
                        i = void 0 === a ? "259200" : a,
                        r = Object(w.b)().t,
                        s = Object(v.c)().account,
                        o = parseInt(t) / 100 || "-",
                        u = Object(p.jb)(Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(p.V, { bold: !0, mb: "4px", children: r("Unstaking fee: %fee%%", { fee: o }) }), Object(A.jsx)(p.V, { children: r("Only applies within 5 days of staking. Unstaking after 5 days will not include a fee. Timer resets every time you stake new RNBO in the pool.") })] }), { placement: "bottom-start" }),
                        c = u.targetRef,
                        l = u.tooltip,
                        d = u.tooltipVisible,
                        y = It(parseInt(n, 10), parseInt(i, 10)),
                        b = y.secondsRemaining,
                        m = y.hasUnstakingFee,
                        f = n && !m,
                        j = s && n && m;
                    return Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", children: [d && l, Object(A.jsxs)(p.Y, { ref: c, small: !0, children: [f ? "0" : o, "% ", r(f ? "unstaking fee" : j ? "unstaking fee until" : "unstaking fee if withdrawn within 120h")] }), j && Object(A.jsx)(Et, { secondsRemaining: b })] })
                },
                _t = function(e) {
                    var t = e.stakingTokenSymbol,
                        n = e.lastDepositedTime,
                        a = e.vaultFees,
                        i = e.stakeAmount,
                        r = Object(w.b)().t,
                        s = parseInt(a.withdrawalFee) / 100,
                        o = (parseFloat(i) * (s / 100)).toFixed(4),
                        u = Object(p.jb)(Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(p.V, { bold: !0, mb: "4px", children: r("Unstaking fee: %fee%%", { fee: s }) }), Object(A.jsx)(p.V, { children: r("Only applies within 5 days of staking. Unstaking after 5 days will not include a fee. Timer resets every time you stake new RNBO in the pool.") })] }), { placement: "top-start" }),
                        c = u.targetRef,
                        l = u.tooltip,
                        d = u.tooltipVisible;
                    return Object(A.jsxs)(A.Fragment, { children: [Object(A.jsxs)(p.x, { mt: "24px", alignItems: "center", justifyContent: "space-between", children: [d && l, Object(A.jsx)(p.Y, { ref: c, small: !0, children: r("Unstaking Fee") }), Object(A.jsxs)(p.V, { fontSize: "14px", children: [i ? o : "-", " ", t] })] }), Object(A.jsx)(Bt, { withdrawalFee: a.withdrawalFee, withdrawalFeePeriod: a.withdrawalFeePeriod, lastDepositedTime: n })] })
                },
                Nt = Object(h.e)(p.h)(be || (be = Object(j.a)(["\n  flex-grow: 1;\n"]))),
                Ut = function(e) {
                    var t, n = e.pool,
                        a = e.stakingMax,
                        i = e.stakingTokenPrice,
                        s = e.pricePerFullShare,
                        o = e.userInfo,
                        u = e.isRemovingStake,
                        c = void 0 !== u && u,
                        l = e.vaultFees,
                        y = e.onDismiss,
                        b = e.setLastUpdated,
                        m = Object(v.c)().account,
                        f = n.stakingToken,
                        j = Object(ut.e)(),
                        h = Object(w.b)().t,
                        O = Object(k.a)().theme,
                        x = N(),
                        T = x.toastSuccess,
                        g = x.toastError,
                        M = Object(r.useState)(!1),
                        S = Object(P.a)(M, 2),
                        C = S[0],
                        F = S[1],
                        L = Object(r.useState)(""),
                        I = Object(P.a)(L, 2),
                        D = I[0],
                        E = I[1],
                        B = Object(r.useState)(0),
                        _ = Object(P.a)(B, 2),
                        U = _[0],
                        V = _[1],
                        Y = It(parseInt(o.lastDepositedTime)).hasUnstakingFee,
                        R = D && Object(ee.a)(new d.a(D).times(i).toNumber()),
                        H = function(e) {
                            var t = a.dividedBy(100).multipliedBy(e),
                                n = Object(ee.e)(t, f.decimals, f.decimals);
                            E(n), V(e)
                        },
                        J = function() {
                            var e = Object(st.a)(rt.a.mark((function e(t) {
                                var n, a, i;
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            F(!0), n = Object(Dt.a)(t, s), a = new d.a(1e12), i = o.shares.minus(n.sharesAsBigNumber), i.lte(a) ? j.methods.withdrawAll().send({ from: m }).on("sending", (function() { F(!0) })).on("receipt", (function() { T(h("Unstaked!"), h("Your earnings have also been harvested to your wallet")), F(!1), y(), b() })).on("error", (function(e) { console.error(e), g(h("Error"), h("".concat(e.message, " - Please try again."))), F(!1) })) : j.methods.withdraw(n.sharesAsBigNumber.toString()).send({ from: m }).on("sending", (function() { F(!0) })).on("receipt", (function() { T(h("Unstaked!"), h("Your earnings have also been harvested to your wallet")), F(!1), y(), b() })).on("error", (function(e) { console.error(e), g(h("Error"), h("".concat(e.message, " - Please try again."))), F(!1) }));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        W = function() {
                            var e = Object(st.a)(rt.a.mark((function e(t) {
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            j.methods.deposit(t.toString()).send({ from: m }).on("sending", (function() { F(!0) })).on("receipt", (function() { T(h("Staked!"), h("Your funds have been staked in the pool")), F(!1), y(), b() })).on("error", (function(e) { console.error(e), g(h("Error"), h("".concat(e.message, " - Please try again."))), F(!1) }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        z = function() {
                            var e = Object(st.a)(rt.a.mark((function e() {
                                var t;
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t = Object(ee.d)(new d.a(D), f.decimals), F(!0), c ? J(t) : W(t);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(A.jsxs)(p.K, {
                        title: h(c ? "Unstake" : "Stake in Pool"),
                        onDismiss: y,
                        headerBackground: O.colors.gradients.cardHeader,
                        children: [Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", mb: "8px", children: [Object(A.jsxs)(p.V, { bold: !0, children: [h(c ? "Unstake" : "Stake"), ":"] }), Object(A.jsxs)(p.x, { alignItems: "center", minWidth: "70px", children: [Object(A.jsx)(p.B, { src: "/images/tokens/".concat(null === f || void 0 === f || null === (t = f.symbol) || void 0 === t ? void 0 : t.toLowerCase(), ".png"), width: 24, height: 24, alt: f.symbol }), Object(A.jsx)(p.V, { ml: "4px", bold: !0, children: f.symbol })] })] }), Object(A.jsx)(p.e, {
                            value: D,
                            onUserInput: function(e) {
                                if (e) {
                                    var t = new d.a(e).multipliedBy(Z.a.pow(f.decimals)),
                                        n = Math.floor(t.dividedBy(a).multipliedBy(100).toNumber());
                                    V(n > 100 ? 100 : n)
                                } else V(0);
                                E(e)
                            },
                            currencyValue: "~".concat(R || 0, " USD"),
                            decimals: f.decimals
                        }), Object(A.jsxs)(p.V, { mt: "8px", ml: "auto", color: "textSubtle", fontSize: "12px", mb: "8px", children: ["Balance: ", Object(ee.e)(a, f.decimals)] }), Object(A.jsx)(p.S, { min: 0, max: 100, value: U, onValueChanged: H, name: "stake", valueLabel: "".concat(U, "%"), step: 1 }), Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", mt: "8px", children: [Object(A.jsx)(Nt, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return H(25) }, children: "25%" }), Object(A.jsx)(Nt, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return H(50) }, children: "50%" }), Object(A.jsx)(Nt, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return H(75) }, children: "75%" }), Object(A.jsx)(Nt, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return H(100) }, children: "MAX" })] }), c && Y && Object(A.jsx)(_t, { stakingTokenSymbol: f.symbol, lastDepositedTime: o.lastDepositedTime, vaultFees: l, stakeAmount: D }), Object(A.jsx)(p.h, { isLoading: C, endIcon: C ? Object(A.jsx)(p.d, { spin: !0, color: "currentColor" }) : null, onClick: z, disabled: !D || 0 === parseFloat(D), mt: "24px", children: h(C ? "Confirming" : "Confirm") }), !c && Object(A.jsxs)(p.h, { mt: "8px", as: "a", external: !0, href: He.c, variant: "secondary", children: [h("Get"), " ", f.symbol] })]
                    })
                },
                Vt = function(e) {
                    var t = e.pool,
                        n = e.stakingTokenBalance,
                        a = e.stakingTokenPrice,
                        i = e.userInfo,
                        r = e.pricePerFullShare,
                        s = e.vaultFees,
                        o = e.setLastUpdated,
                        u = t.stakingToken,
                        c = Object(Dt.b)(i.shares, r),
                        l = c.RNBOAsBigNumber,
                        d = c.RNBOAsDisplayBalance,
                        y = Object(ee.a)(Object(ee.c)(l.multipliedBy(a), u.decimals)),
                        b = Object(p.hb)(Object(A.jsx)(lt, { tokenSymbol: u.symbol })),
                        m = Object(P.a)(b, 1)[0],
                        f = Object(p.hb)(Object(A.jsx)(Ut, { stakingMax: n, pool: t, userInfo: i, stakingTokenPrice: a, setLastUpdated: o })),
                        j = Object(P.a)(f, 1)[0],
                        h = Object(p.hb)(Object(A.jsx)(Ut, { stakingMax: l, pool: t, stakingTokenPrice: a, pricePerFullShare: r, userInfo: i, vaultFees: s, setLastUpdated: o, isRemovingStake: !0 })),
                        O = Object(P.a)(h, 1)[0];
                    return Object(A.jsxs)(p.x, { justifyContent: "space-between", alignItems: "center", children: [Object(A.jsxs)(p.x, { flexDirection: "column", children: [Object(A.jsx)(p.y, { children: d }), Object(A.jsx)(p.V, { fontSize: "12px", color: "textSubtle", children: "~".concat(a ? y : Object(A.jsx)(p.R, { mt: "1px", height: 16, width: 64 }), " USD") })] }), Object(A.jsxs)(p.x, { children: [Object(A.jsx)(p.A, { variant: "secondary", onClick: O, mr: "6px", children: Object(A.jsx)(p.J, { color: "primary", width: "24px" }) }), Object(A.jsx)(p.A, { variant: "secondary", onClick: n.gt(0) ? j : m, children: Object(A.jsx)(p.a, { color: "primary", width: "24px", height: "24px" }) })] })] })
                },
                Yt = function(e) {
                    var t = e.pool,
                        n = e.stakingTokenBalance,
                        a = e.stakingTokenPrice,
                        i = e.userInfo,
                        r = e.accountHasSharesStaked,
                        s = e.pricePerFullShare,
                        o = e.isLoading,
                        u = void 0 !== o && o,
                        c = e.vaultFees,
                        l = e.setLastUpdated,
                        d = t.stakingToken,
                        y = Object(w.b)().t,
                        b = Object(p.hb)(Object(A.jsx)(lt, { tokenSymbol: d.symbol })),
                        m = Object(P.a)(b, 1)[0],
                        f = Object(p.hb)(Object(A.jsx)(Ut, { stakingMax: n, stakingTokenPrice: a, userInfo: i, pool: t, setLastUpdated: l })),
                        j = Object(P.a)(f, 1)[0];
                    return Object(A.jsx)(p.x, { flexDirection: "column", children: u ? Object(A.jsx)(p.R, { width: "100%", height: "52px" }) : r ? Object(A.jsx)(Vt, { pool: t, stakingTokenBalance: n, stakingTokenPrice: a, userInfo: i, pricePerFullShare: s, setLastUpdated: l, vaultFees: c }) : Object(A.jsx)(p.h, { onClick: n.gt(0) ? j : m, children: y("Stake") }) })
                },
                Rt = Object(h.e)(p.V)(me || (me = Object(j.a)(["\n  display: inline;\n"]))),
                Ht = function(e) {
                    var t = e.pool,
                        n = e.userInfo,
                        a = e.pricePerFullShare,
                        i = e.stakingTokenPrice,
                        s = e.accountHasSharesStaked,
                        o = e.lastUpdated,
                        u = e.vaultFees,
                        c = e.isLoading,
                        l = e.setLastUpdated,
                        y = Object(v.c)().account,
                        b = t.stakingToken,
                        m = t.userData,
                        f = Object(r.useState)(!1),
                        j = Object(P.a)(f, 2),
                        h = j[0],
                        O = j[1],
                        x = Object(ut.d)(),
                        T = Object(ut.e)(),
                        k = Object(w.b)().t,
                        g = (null === m || void 0 === m ? void 0 : m.stakingTokenBalance) ? new d.a(m.stakingTokenBalance) : Z.b;
                    return Object(r.useEffect)((function() {
                        (function() {
                            var e = Object(st.a)(rt.a.mark((function e() {
                                var t, n;
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, x.methods.allowance(y, T.options.address).call();
                                        case 3:
                                            t = e.sent, n = new d.a(t), O(n.gt(0)), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), O(!1);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        })()()
                    }), [y, x, T, o]), Object(A.jsx)(p.x, { flexDirection: "column", children: Object(A.jsxs)(p.x, { flexDirection: "column", children: [Object(A.jsxs)(p.g, { display: "inline", children: [Object(A.jsxs)(Rt, { color: s ? "secondary" : "textSubtle", textTransform: "uppercase", bold: !0, fontSize: "12px", children: [s ? b.symbol : k("stake"), " "] }), Object(A.jsx)(Rt, { color: s ? "textSubtle" : "secondary", textTransform: "uppercase", bold: !0, fontSize: "12px", children: s ? k("staked (compounding)") : "".concat(b.symbol) })] }), h ? Object(A.jsx)(Yt, { isLoading: c, pool: t, stakingTokenBalance: g, stakingTokenPrice: i, vaultFees: u, userInfo: n, pricePerFullShare: a, accountHasSharesStaked: s, setLastUpdated: l }) : Object(A.jsx)(Lt, { pool: t, isLoading: c, setLastUpdated: l })] }) })
                },
                Jt = function(e) {
                    var t = e.RNBOAtLastUserAction,
                        n = e.userShares,
                        a = e.pricePerFullShare,
                        i = Object(Dt.b)(n, a).RNBOAsBigNumber.minus(t),
                        r = i.gte(0) ? Object(ee.e)(i, 18, 5) : "0",
                        s = Object(w.b)().t,
                        o = Object(p.jb)(s("Your estimated earnings since last manual stake or unstake:"), { placement: "bottom-end" }),
                        u = o.targetRef,
                        c = o.tooltip,
                        l = o.tooltipVisible;
                    return Object(A.jsxs)(A.Fragment, { children: [l && c, Object(A.jsx)(p.Y, { ref: u, small: !0, children: r })] })
                },
                Wt = function(e) {
                    var t = e.RNBOAtLastUserAction,
                        n = e.userShares,
                        a = e.pricePerFullShare,
                        i = Object(w.b)().t,
                        r = Object(v.c)().account && t && t.gt(0) && n && n.gt(0);
                    return Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", children: [Object(A.jsx)(p.V, { fontSize: "14px", children: i("Recent RNBO profit:") }), r && Object(A.jsx)(Jt, { RNBOAtLastUserAction: t, userShares: n, pricePerFullShare: a })] })
                },
                zt = Object(h.e)(p.m)(fe || (fe = Object(j.a)(["\n  min-height: ", ";\n"])), (function(e) { return e.isLoading ? "0" : "254px" })),
                qt = function(e) {
                    var t, n = e.pool,
                        a = e.showStakedOnly,
                        i = e.isHomeCard,
                        r = Object(w.b)().t,
                        s = Object(v.c)().account,
                        o = Object(gt.a)(),
                        u = o.lastUpdated,
                        c = o.setLastUpdated,
                        l = Object(At.a)(u),
                        d = Ct(),
                        y = Object(Mt.a)(),
                        b = y.totalRNBOInVault,
                        f = y.pricePerFullShare,
                        j = n.stakingToken,
                        h = l.shares && l.shares.gt(0),
                        O = Object(m.h)(null === j || void 0 === j || null === (t = j.symbol) || void 0 === t ? void 0 : t.toLowerCase()),
                        x = !n.userData || !l.shares,
                        T = d.performanceFee && parseInt(d.performanceFee, 10) / 100;
                    return a && !h ? null : Object(A.jsxs)(ze, { isStaking: h, isHomeCard: i, children: [Object(A.jsx)(nt, { isAutoVault: !0, earningTokenSymbol: "RNBO", stakingTokenSymbol: "RNBO" }), Object(A.jsxs)(zt, { isLoading: x, children: [Object(A.jsx)(Je, { pool: n, stakingTokenPrice: O, isAutoVault: !0, compoundFrequency: 288, performanceFee: T }), Object(A.jsx)(p.g, { mt: "24px", children: Object(A.jsx)(Wt, { RNBOAtLastUserAction: l.RNBOAtLastUserAction, userShares: l.shares, pricePerFullShare: f }) }), Object(A.jsx)(p.g, { mt: "8px", children: Object(A.jsx)(Bt, { withdrawalFee: d.withdrawalFee, withdrawalFeePeriod: d.withdrawalFeePeriod, lastDepositedTime: h && l.lastDepositedTime }) }), Object(A.jsx)(p.x, { mt: "24px", flexDirection: "column", children: s ? Object(A.jsx)(Ht, { pool: n, userInfo: l, pricePerFullShare: f, vaultFees: d, stakingTokenPrice: O, accountHasSharesStaked: h, lastUpdated: u, setLastUpdated: c, isLoading: x }) : Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(p.V, { mb: "10px", textTransform: "uppercase", fontSize: "12px", color: "textSubtle", bold: !0, children: r("Start earning") }), Object(A.jsx)($.a, {})] }) })] }), Object(A.jsx)(et, { pool: n, account: s, performanceFee: d.performanceFee, isAutoVault: !0, totalRNBOInVault: b })] })
                },
                Xt = n(88),
                Gt = Object(h.e)(p.V)(je || (je = Object(j.a)(["\n  display: none;\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                Kt = Object(h.e)(p.D)(he || (he = Object(j.a)(["\n  width: 100%;\n\n  &:hover {\n    text-decoration: none;\n  }\n"]))),
                Qt = function(e) {
                    var t = e.stakedOnly,
                        n = e.setStakedOnly,
                        a = e.hasStakeInFinishedPools,
                        i = Object(c.h)(),
                        r = i.url,
                        s = i.isExact,
                        o = Object(w.b)().t;
                    return Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "center", mb: "32px", children: [Object(A.jsxs)(p.x, { alignItems: "center", flexDirection: ["column", null, "row", null], children: [Object(A.jsxs)(p.i, { activeIndex: s ? 0 : 1, scale: "sm", variant: "subtle", children: [Object(A.jsx)(p.j, { as: Xt.a, to: "".concat(r), children: o("Live") }), Object(A.jsx)(p.M, { show: a, children: Object(A.jsx)(p.j, { as: Xt.a, to: "".concat(r, "/history"), children: o("Finished") }) })] }), Object(A.jsxs)(p.x, { mt: ["4px", null, 0, null], ml: [0, null, "24px", null], justifyContent: "center", alignItems: "center", children: [Object(A.jsx)(p.X, { scale: "sm", checked: t, onChange: function() { return n((function(e) { return !e })) } }), Object(A.jsx)(p.V, { ml: "8px", children: o("Staked only") })] })] }), Object(A.jsx)(p.x, { ml: "24px", alignItems: "center", justifyContent: "flex-end", children: Object(A.jsx)(Kt, { external: !0, href: "https://docs.RNBO.finance/guides/electrum-pool", children: Object(A.jsxs)(p.h, { px: ["14px", null, null, null, "20px"], variant: "subtle", children: [Object(A.jsx)(Gt, { color: "backgroundAlt", bold: !0, fontSize: "16px", children: o("Help") }), Object(A.jsx)(p.z, { color: "backgroundAlt", ml: [null, null, null, 0, "6px"] })] }) }) })] })
                },
                $t = n(113),
                Zt = function() {
                    var e = Object($t.a)().fastRefresh,
                        t = Object(ut.e)(),
                        n = Object(r.useState)(null),
                        a = Object(P.a)(n, 2),
                        i = a[0],
                        s = a[1],
                        o = Object(r.useState)(null),
                        u = Object(P.a)(o, 2),
                        c = u[0],
                        p = u[1],
                        l = Object(r.useState)(null),
                        y = Object(P.a)(l, 2),
                        b = y[0],
                        f = y[1],
                        j = Object(m.h)("RNBO");
                    return Object(r.useEffect)((function() {
                        (function() {
                            var e = Object(st.a)(rt.a.mark((function e() {
                                var n, a, i, r, o, u, c;
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(St.a)([null === t || void 0 === t || null === (n = t.methods) || void 0 === n ? void 0 : n.calculateHarvestRNBORewards().call, null === t || void 0 === t || null === (a = t.methods) || void 0 === a ? void 0 : a.calculateHarvestRNBORewards().call]);
                                        case 2:
                                            i = e.sent, r = Object(P.a)(i, 2), o = r[0], u = r[1], j && (c = new d.a(o).multipliedBy(j), s(c)), p(new d.a(o)), f(new d.a(u));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        })()()
                    }), [t, j, e]), { estimatedRNBOBountyReward: c, estimatedDollarBountyReward: i, totalPendingRNBOHarvest: b }
                },
                en = h.e.div(Oe || (Oe = Object(j.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 16px auto;\n  width: 100%;\n"])), (function(e) { return e.theme.colors.backgroundDisabled })),
                tn = function(e) {
                    var t = e.RNBOBountyToDisplay,
                        n = e.dollarBountyToDisplay,
                        a = e.totalPendingRNBOHarvest,
                        i = e.callFee,
                        s = e.onDismiss,
                        o = e.TooltipComponent,
                        u = Object(w.b)().t,
                        c = Object(v.c)().account,
                        l = Object(k.a)().theme,
                        d = N(),
                        y = d.toastError,
                        b = d.toastSuccess,
                        m = Object(ut.e)(),
                        f = Object(r.useState)(!1),
                        j = Object(P.a)(f, 2),
                        h = j[0],
                        O = j[1],
                        x = i / 100,
                        T = Object(ee.e)(a, 18, 3),
                        g = Object(p.jb)(Object(A.jsx)(o, {}), { placement: "bottom", tooltipPadding: { right: 15 } }),
                        M = g.targetRef,
                        S = g.tooltip,
                        C = g.tooltipVisible,
                        F = function() {
                            var e = Object(st.a)(rt.a.mark((function e() {
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            m.methods.harvest().send({ from: c }).on("sending", (function() { O(!0) })).on("receipt", (function() { b(u("Bounty collected!"), u("RNBO bounty has been sent to your wallet.")), O(!1), s() })).on("error", (function(e) { console.error(e), y(u("Could not be collected"), u("There may be an issue with your transaction, or another user claimed the bounty first.")), O(!1) }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(A.jsxs)(p.K, { title: u("Claim Bounty"), onDismiss: s, headerBackground: l.colors.gradients.cardHeader, children: [C && S, Object(A.jsxs)(p.x, { alignItems: "flex-start", justifyContent: "space-between", children: [Object(A.jsx)(p.V, { children: u("You'll claim") }), Object(A.jsxs)(p.x, { flexDirection: "column", children: [Object(A.jsxs)(p.V, { bold: !0, children: [t, " RNBO"] }), Object(A.jsxs)(p.V, { fontSize: "12px", color: "textSubtle", children: ["~ ", n, " USD"] })] })] }), Object(A.jsx)(en, {}), Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", children: [Object(A.jsx)(p.V, { fontSize: "14px", color: "textSubtle", children: u("Pool total pending yield") }), Object(A.jsxs)(p.V, { fontSize: "14px", color: "textSubtle", children: [T, " RNBO"] })] }), Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", mb: "24px", children: [Object(A.jsx)(p.V, { fontSize: "14px", color: "textSubtle", children: u("Bounty") }), Object(A.jsxs)(p.V, { fontSize: "14px", color: "textSubtle", children: [x, "%"] })] }), c ? Object(A.jsx)(p.h, { isLoading: h, endIcon: h ? Object(A.jsx)(p.d, { spin: !0, color: "currentColor" }) : null, onClick: F, mb: "28px", children: u("Confirm") }) : Object(A.jsx)($.a, { mb: "28px" }), Object(A.jsxs)(p.x, { justifyContent: "center", alignItems: "center", children: [Object(A.jsx)(p.V, { fontSize: "16px", bold: !0, color: "textSubtle", mr: "4px", children: u("What's this?") }), Object(A.jsx)("span", { ref: M, children: Object(A.jsx)(p.z, { color: "textSubtle" }) })] })] })
                },
                nn = Object(h.e)(p.l)(xe || (xe = Object(j.a)(["\n  width: 100%;\n  ", " {\n    min-width: 240px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                an = Object(h.e)(p.V)(ve || (ve = Object(j.a)(["\n  display: inline;\n"]))),
                rn = function() {
                    var e = Object(w.b)().t,
                        t = Zt(),
                        n = t.estimatedRNBOBountyReward,
                        a = t.estimatedDollarBountyReward,
                        i = t.totalPendingRNBOHarvest,
                        s = Ct().callFee,
                        o = Object(r.useState)({ modalRNBOBountyToDisplay: "", cardRNBOBountyToDisplay: "", dollarBountyToDisplay: "" }),
                        u = Object(P.a)(o, 2),
                        c = u[0],
                        l = u[1];
                    Object(r.useEffect)((function() { n && a && i && l({ modalRNBOBountyToDisplay: Object(ee.e)(n, 18, 5), cardRNBOBountyToDisplay: Object(ee.e)(n, 18, 3), dollarBountyToDisplay: Object(ee.e)(a, 18, 2) }) }), [n, a, i]);
                    var d = function() { return Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(p.V, { mb: "16px", children: "".concat(e("This bounty is given as a reward for providing a service to other users.")) }), Object(A.jsx)(p.V, { mb: "16px", children: e("Whenever you successfully claim the bounty, you\u2019re also helping out by activating the Auto RNBO Pool\u2019s compounding function for everyone.") }), Object(A.jsx)(p.V, { style: { fontWeight: "bold" }, children: e("Auto-Compound Bounty: %fee%% of all Auto RNBO pool users\u2019 pending yield", { fee: s / 100 }) })] }) },
                        y = Object(p.hb)(Object(A.jsx)(tn, { RNBOBountyToDisplay: c.modalRNBOBountyToDisplay, dollarBountyToDisplay: c.dollarBountyToDisplay, totalPendingRNBOHarvest: i, callFee: s, TooltipComponent: d })),
                        b = Object(P.a)(y, 1)[0],
                        m = Object(p.jb)(Object(A.jsx)(d, {}), { placement: "bottom-end", tooltipOffset: [20, 10] }),
                        f = m.targetRef,
                        j = m.tooltip,
                        h = m.tooltipVisible;
                    return Object(A.jsxs)(A.Fragment, { children: [h && j, Object(A.jsx)(nn, { children: Object(A.jsxs)(p.m, { children: [Object(A.jsx)(p.x, { flexDirection: "column", children: Object(A.jsxs)(p.x, { alignItems: "center", mb: "12px", children: [Object(A.jsx)(p.V, { fontSize: "16px", bold: !0, color: "textSubtle", mr: "4px", children: e("Auto RNBO Bounty") }), Object(A.jsx)(p.g, { ref: f, children: Object(A.jsx)(p.z, { color: "textSubtle" }) })] }) }), Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", children: [Object(A.jsxs)(p.x, { flexDirection: "column", mr: "12px", children: [Object(A.jsx)(p.y, { children: c.cardRNBOBountyToDisplay || Object(A.jsx)(p.R, { height: 20, width: 96, mb: "2px" }) }), Object(A.jsx)(an, { fontSize: "12px", color: "textSubtle", children: c.dollarBountyToDisplay ? "~ ".concat(c.dollarBountyToDisplay, " USD") : Object(A.jsx)(p.R, { height: 16, width: 62 }) })] }), Object(A.jsx)(p.h, { disabled: !c.dollarBountyToDisplay || !c.cardRNBOBountyToDisplay || !s, onClick: b, scale: "sm", children: e("Claim") })] })] }) })] })
                },
                sn = function() {
                    var e = Object(c.h)().path,
                        t = Object(w.b)().t,
                        n = Object(v.c)().account,
                        a = Object(m.k)(n),
                        i = Object(m.a)().currentBlock,
                        s = Object(G.a)(!1, { localStorageKey: "RNBO_pool_staked" }),
                        o = Object(P.a)(s, 2),
                        u = o[0],
                        l = o[1],
                        y = Object(r.useMemo)((function() { return X()(a, (function(e) { return e.isFinished || i > e.endBlock })) }), [i, a]),
                        b = Object(P.a)(y, 2),
                        f = b[0],
                        j = b[1],
                        h = Object(r.useMemo)((function() { return j.filter((function(e) { return e.userData && new d.a(e.userData.stakedBalance).isGreaterThan(0) })) }), [j]),
                        O = Object(r.useMemo)((function() { return f.some((function(e) { return e.userData && new d.a(e.userData.stakedBalance).isGreaterThan(0) })) }), [f]),
                        x = Object(r.useMemo)((function() { return j.find((function(e) { return 0 === e.sousId })) }), [j]);
                    return Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(Q.a, { children: Object(A.jsxs)(p.x, { justifyContent: "space-between", flexDirection: ["column", null, "row"], children: [Object(A.jsxs)(p.x, { flexDirection: "column", mr: ["8px", 0], children: [Object(A.jsx)(p.y, { as: "h1", scale: "xxl", color: "text", mb: "24px", children: t("Electrum Pools") }), Object(A.jsx)(p.y, { scale: "md", color: "text", children: t("Simply stake tokens to earn.") }), Object(A.jsx)(p.y, { scale: "md", color: "text", children: t("High APR, low risk.") })] }), Object(A.jsx)(p.x, { height: "fit-content", justifyContent: "center", alignItems: "center", mt: ["24px", null, "0"], children: Object(A.jsx)(rn, {}) })] }) }), Object(A.jsxs)(V.a, { children: [Object(A.jsx)(Qt, { stakedOnly: u, setStakedOnly: l, hasStakeInFinishedPools: O }), Object(A.jsxs)(K.a, { children: [Object(A.jsx)(c.b, { exact: !0, path: "".concat(e), children: Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(qt, { pool: x, showStakedOnly: u }), u ? z()(h, ["sortOrder"]).map((function(e) { return Object(A.jsx)(kt, { pool: e, account: n }, e.sousId) })) : z()(j, ["sortOrder"]).map((function(e) { return Object(A.jsx)(kt, { pool: e, account: n }, e.sousId) }))] }) }), Object(A.jsx)(c.b, { path: "".concat(e, "/history"), children: z()(f, ["sortOrder"]).map((function(e) { return Object(A.jsx)(kt, { pool: e, account: n }, e.sousId) })) })] })] })] })
                },
                on = h.e.div(Te || (Te = Object(j.a)(["\n  align-items: center;\n  color: ", ";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  padding: 48px 0;\n\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  flex-direction: column;\n\n  .center {\n    display: flex;\n    align-self: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 100%;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n\n    li {\n      margin-bottom: 4px;\n    }\n  }\n\n     {\n    height: auto;\n    max-width: 100%;\n  }\n\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n"])), (function(e) { return e.theme.colors.primary })),
                un = function() { var e = Object(w.b)().t; return Object(A.jsx)(V.a, { children: Object(A.jsxs)(on, { children: [Object(A.jsx)("  ", { src: "/images/white_king.png", alt: "Electrum POOL icon", width: 300, height: 300 }), Object(A.jsx)(p.y, { as: "h1", scale: "xxl", mb: "16px", children: e("Coming Soon") })] }) }) },
                cn = function(e) {
                    var t = Object(v.c)().account,
                        n = Object(ut.e)(),
                        a = Object(r.useState)({ shares: Z.b, RNBOAtLastUserAction: Z.b, lastDepositedTime: "", lastUserActionTime: "" }),
                        i = Object(P.a)(a, 2),
                        s = i[0],
                        o = i[1];
                    return Object(r.useEffect)((function() {
                        t && function() {
                            var e = Object(st.a)(rt.a.mark((function e() {
                                var a;
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, n.methods.userInfo(t).call();
                                        case 2:
                                            a = e.sent, o({ shares: new d.a(a.shares), RNBOAtLastUserAction: new d.a(a.RNBOAtLastUserAction), lastDepositedTime: a.lastDepositedTime, lastUserActionTime: a.lastUserActionTime });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [t, n, e]), s
                },
                pn = function(e) {
                    var t = Object(ut.e)(),
                        n = Object(r.useState)(null),
                        a = Object(P.a)(n, 2),
                        i = a[0],
                        s = a[1],
                        o = Object(r.useState)(null),
                        u = Object(P.a)(o, 2),
                        c = u[0],
                        p = u[1],
                        l = Object(r.useState)(null),
                        y = Object(P.a)(l, 2),
                        b = y[0],
                        m = y[1];
                    return Object(r.useEffect)((function() {
                        (function() {
                            var e = Object(st.a)(rt.a.mark((function e() {
                                var n, a, i, r, o, u, c;
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(St.a)([t.methods.getPricePerFullShare().call, t.methods.totalShares().call]);
                                        case 2:
                                            n = e.sent, a = Object(P.a)(n, 2), i = a[0], r = a[1], o = new d.a(i), u = new d.a(r), c = Object(Dt.b)(u, o), m(o), s(u), p(c.RNBOAsBigNumber);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        })()()
                    }), [t, e]), { totalShares: i, totalRNBOInVault: c, pricePerFullShare: b }
                },
                ln = function() {
                    var e = Object(ut.i)(),
                        t = Object(r.useState)({ performanceFee: null, withdrawalFee: null, withdrawalFeePeriod: null }),
                        n = Object(P.a)(t, 2),
                        a = n[0],
                        i = n[1];
                    return Object(r.useEffect)((function() {
                        (function() {
                            var t = Object(st.a)(rt.a.mark((function t() {
                                var n, a, r, s, o;
                                return rt.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(St.a)([e.methods.PERFORMANCE_FEE().call, e.methods.WITHDRAWAL_FEE_FREE_PERIOD().call, e.methods.WITHDRAWAL_FEE().call]);
                                        case 2:
                                            n = t.sent, a = Object(P.a)(n, 3), r = a[0], s = a[1], o = a[2], i({ performanceFee: r, withdrawalFee: o, withdrawalFeePeriod: s });
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() { return t.apply(this, arguments) }
                        })()()
                    }), [e]), a
                },
                dn = n(33),
                yn = n(43),
                bn = n(53),
                mn = function(e) {
                    var t, n, a, i, s = e.pool,
                        o = e.isAutoVault,
                        u = void 0 !== o && o,
                        c = e.compoundFrequency,
                        l = void 0 === c ? 1 : c,
                        y = e.performanceFee,
                        b = void 0 === y ? 0 : y,
                        f = e.farms,
                        j = Object(w.b)().t,
                        h = s.stakingToken,
                        O = s.earningToken,
                        x = s.tokenPerBlock,
                        T = Object(v.c)().account,
                        k = Object(m.k)(T),
                        g = Object(m.i)(),
                        M = j(u ? "APY includes compounding, APR doesn\u2019t. This pool\u2019s RNBO is compounded automatically, so we show APY." : "This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR"),
                        S = Object(p.jb)(M, { placement: "bottom-end" }),
                        C = S.targetRef,
                        F = S.tooltip,
                        L = S.tooltipVisible,
                        I = Object(m.h)("RNBO"),
                        D = Object(r.useMemo)((function() { return new d.a(I) }), [I]),
                        E = (null === f || void 0 === f ? void 0 : f.length) > 0 && f.find((function(e) { return e.pid === s.pid })),
                        B = Object(te.b)(I, I, Object(ee.c)(null === (t = k[0]) || void 0 === t ? void 0 : t.totalStaked, 18), parseFloat(x)),
                        _ = E && g && g[null === E || void 0 === E || null === (n = E.quoteToken) || void 0 === n || null === (a = n.symbol) || void 0 === a ? void 0 : a.toLowerCase()],
                        N = new d.a(E.lpTotalInQuoteToken).times(_),
                        U = Object(te.a)(E.poolWeight, D, N),
                        V = Math.round(I / 1e3) > 0,
                        Y = function(e, t, n) {
                            var a = Object(ut.h)(),
                                i = Object(r.useState)(0),
                                s = Object(P.a)(i, 2),
                                o = s[0],
                                u = s[1];
                            return Object(r.useEffect)((function() {
                                ! function() {
                                    var i = Object(st.a)(rt.a.mark((function i() {
                                        var r;
                                        return rt.a.wrap((function(i) {
                                            for (;;) switch (i.prev = i.next) {
                                                case 0:
                                                    if ("0" === e || "0" === t) { i.next = 5; break }
                                                    return i.next = 3, a.methods.compoundingAPY(e, t, n).call();
                                                case 3:
                                                    r = i.sent, u(r / 1e16);
                                                case 5:
                                                case "end":
                                                    return i.stop()
                                            }
                                        }), i)
                                    })));
                                    return function() { return i.apply(this, arguments) }
                                }()()
                            }), [n, e, a, t]), o
                        }((1e16 * U).toString(), (1e16 * B).toString(), 2190),
                        R = Object(Xe.a)(h) && "".concat(He.c, "/#/swap?outputCurrency=").concat(Object(Xe.a)(h)),
                        H = Object(p.hb)(Object(A.jsx)(Re.a, { tokenPrice: I, apr: U, linkLabel: "".concat(j("Get"), " ").concat(null === E || void 0 === E || null === (i = E.quoteToken) || void 0 === i ? void 0 : i.symbol), linkHref: R || He.c, earningTokenSymbol: O.symbol, roundingDecimals: V ? 4 : 2, compoundFrequency: l, performanceFee: b })),
                        J = Object(P.a)(H, 1)[0];
                    return Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", children: [L && F, Object(A.jsxs)(p.Y, { ref: C, children: [j("APY (Compound)"), ":"] }), U ? Object(A.jsxs)(p.x, { alignItems: "center", children: [Object(A.jsx)(Ye, { fontSize: "16px", value: Y, decimals: 2, unit: "%", bold: !0 }), Object(A.jsx)(p.A, { onClick: J, variant: "text", scale: "sm", children: Object(A.jsx)(p.k, { color: "textSubtle", width: "18px" }) })] }) : Object(A.jsx)(p.R, { width: "82px", height: "32px" })] })
                },
                fn = h.e.div(we || (we = Object(j.a)(["\n  opacity: 0.5;\n\n  * {\n    font-size: 14px !important;\n  }\n"]))),
                jn = function(e) {
                    var t, n, a = e.pool,
                        i = e.farms,
                        s = Object(w.b)().t,
                        o = Object(m.i)(),
                        u = s("This APR Calculated according to the old method regular farming"),
                        c = Object(p.jb)(u, { placement: "bottom-end" }),
                        l = c.targetRef,
                        y = c.tooltip,
                        b = c.tooltipVisible,
                        f = Object(m.h)("RNBO"),
                        j = Object(r.useMemo)((function() { return new d.a(f) }), [f]),
                        h = (null === i || void 0 === i ? void 0 : i.length) > 0 && i.find((function(e) { return e.pid === a.pid })),
                        O = h && o && o[null === h || void 0 === h || null === (t = h.quoteToken) || void 0 === t || null === (n = t.symbol) || void 0 === n ? void 0 : n.toLowerCase()],
                        x = new d.a(h.lpTotalInQuoteToken).times(O),
                        v = Object(te.a)(h.poolWeight, j, x);
                    return Object(A.jsx)(fn, { children: Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", children: [b && y, Object(A.jsx)(p.Y, { ref: l, children: s("APR (Normal)") }), Object(A.jsx)(p.x, { alignItems: "center", children: Object(A.jsx)(Ye, { fontSize: "14px", isDisabled: !1, value: v, decimals: 2, unit: "%" }) })] }) })
                },
                hn = Object(h.e)(p.l)(ke || (ke = Object(j.a)(["\n  max-width: ", ";\n  margin: 0 8px 24px;\n  background: ", ";\n  border-radius: 32px;\n  display: flex;\n  color: ", ";\n  box-shadow: ", ";\n  flex-direction: column;\n  align-self: baseline;\n  position: relative;\n\n  ", " {\n    margin: 0 12px 46px;\n  }\n"])), (function(e) { return "".concat(e.isHomeCard ? "100%" : "352px") }), (function(e) { return e.theme.card.background }), (function(e) { var t = e.isFinished; return e.theme.colors[t ? "textDisabled" : "secondary"] }), (function(e) { return e.isStaking ? "0px 0px 0px 2px #f9d92e;" : "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)" }), (function(e) { return e.theme.mediaQueries.sm })),
                On = Object(h.e)(p.x)(ge || (ge = Object(j.a)(["\n  svg {\n    height: 14px;\n    width: 14px;\n  }\n"]))),
                xn = function(e) {
                    var t = e.pool,
                        n = e.performanceFee,
                        a = void 0 === n ? 0 : n,
                        i = Object(w.b)().t,
                        r = t.totalStaked,
                        s = t.contractAddress,
                        o = t.lpSymbol,
                        u = t.quoteToken,
                        c = t.lpTotalInQuoteTokenNew,
                        l = Object(Xe.a)(s),
                        y = Object(p.jb)(i("Subtracted automatically from each yield harvest and burned."), { placement: "bottom-end" }),
                        b = y.targetRef,
                        f = y.tooltip,
                        j = y.tooltipVisible,
                        h = Object(m.h)(u.symbol.toLowerCase()),
                        O = new d.a(c).times(h),
                        x = O ? "$".concat(O.toNumber().toLocaleString(void 0, { maximumFractionDigits: 0 })) : "-";
                    return Object(A.jsxs)(On, { flexDirection: "column", children: [Object(A.jsxs)(p.x, { mb: "2px", justifyContent: "space-between", alignItems: "center", children: [Object(A.jsx)(p.V, { small: !0, children: i("Total staked:") }), Object(A.jsx)(p.x, { alignItems: "flex-start", children: r ? Object(A.jsxs)(A.Fragment, { children: [x, Object(A.jsx)(p.V, { ml: "4px", fontSize: "14px", children: o })] }) : Object(A.jsx)(p.R, { width: "90px", height: "21px" }) })] }), Object(A.jsxs)(p.x, { mb: "2px", justifyContent: "space-between", alignItems: "center", children: [j && f, Object(A.jsx)(p.Y, { ref: b, small: !0, children: i("Performance Fee (Maximus)") }), Object(A.jsx)(p.x, { alignItems: "center", children: Object(A.jsxs)(p.V, { ml: "4px", small: !0, children: [a / 100, "%"] }) })] }), Object(A.jsxs)(p.x, { mb: "2px", justifyContent: "space-between", alignItems: "center", children: [j && f, Object(A.jsx)(p.Y, { ref: b, small: !0, children: i("Performance Fee (Auto-RNBO)") }), Object(A.jsx)(p.x, { alignItems: "center", children: Object(A.jsx)(p.V, { ml: "4px", small: !0, children: "6%" }) })] }), Object(A.jsx)(p.x, { mb: "2px", justifyContent: "flex-end", children: Object(A.jsx)(p.E, { bold: !1, small: !0, href: "https://exchange.RNBO.finance/#/pool", children: i("Get  ".concat(o)) }) }), l && Object(A.jsx)(p.x, { mb: "2px", justifyContent: "flex-end", children: Object(A.jsx)(p.E, { bold: !1, small: !0, href: "".concat(He.b, "/address/").concat(l), children: i("View Contract") }) }), Object(A.jsx)(p.x, { mb: "2px", justifyContent: "flex-end", children: Object(A.jsx)(p.E, { bold: !1, small: !0, href: "".concat(He.b, "/address/").concat(l), children: i("See Pair Info") }) })] })
                },
                vn = s.a.memo(xn),
                Tn = Object(h.e)(p.x)(Ae || (Ae = Object(j.a)(["\n  align-items: center;\n  justify-content: space-between;\n  button {\n    padding: 0;\n  }\n"]))),
                wn = function(e) {
                    var t = e.pool,
                        n = e.account,
                        a = e.performanceFee,
                        i = void 0 === a ? 0 : a,
                        s = e.isAutoVault,
                        o = void 0 !== s && s,
                        u = e.totalRNBOInVault,
                        c = Object(w.b)().t,
                        l = Object(r.useState)(!1),
                        d = Object(P.a)(l, 2),
                        y = d[0],
                        b = d[1],
                        m = c("You must harvest and compound your earnings from this pool manually."),
                        f = c("Any funds you stake in this farm will be automatically harvested and staked to Auto RNBO pool for you."),
                        j = Object(p.jb)(o ? f : m, { placement: "bottom-end" }),
                        h = j.targetRef,
                        O = j.tooltip,
                        x = j.tooltipVisible;
                    return Object(A.jsxs)(p.n, { children: [Object(A.jsxs)(Tn, { children: [Object(A.jsxs)(p.x, { alignItems: "center", children: [Object(A.jsx)(qe.b, {}), x && O, Object(A.jsx)(p.g, { ref: h, children: Object(A.jsx)(p.z, { ml: "4px", width: "20px", height: "20px", color: "textSubtle" }) })] }), Object(A.jsx)(p.v, { expanded: y, onClick: function() { return b(!y) }, children: c(y ? "Hide" : "Details") })] }), y && Object(A.jsx)(vn, { pool: t, account: n, performanceFee: i, isAutoVault: o, totalRNBOInVault: u })] })
                },
                kn = Object(h.e)(p.o)(Me || (Me = Object(j.a)(["\n  background: ", ";\n"])), (function(e) {
                    var t = e.isFinished,
                        n = e.background,
                        a = e.theme;
                    return t ? a.colors.backgroundDisabled : a.colors.gradients[n]
                })),
                gn = h.e.div(Se || (Se = Object(j.a)(["\n  width: 100%;\n  max-width: 55px;\n  * {\n    border-radius: 30px;\n  }\n  .target-token-symbol {\n    top: -12px;\n    left: 16px;\n  }\n  .token-symbol {\n  }\n"]))),
                An = function(e) {
                    var t, n, a = e.stackingToken,
                        i = e.isFinished,
                        r = void 0 !== i && i,
                        s = Object(w.b)().t,
                        o = null === a || void 0 === a ? void 0 : a.split("-");
                    return Object(A.jsx)(kn, { isFinished: r, background: "cardHeader", children: Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", children: [Object(A.jsxs)(p.x, { flexDirection: "column", children: [Object(A.jsx)(p.y, { color: r ? "textDisabled" : "text", scale: "lg", children: "".concat(a, " LP") }), Object(A.jsx)(p.V, { color: r ? "textDisabled" : "text", children: s("Maximizer") })] }), Object(A.jsxs)(gn, { children: [Object(A.jsx)(p.B, { className: "token-symbol", src: "/images/tokens/".concat(null === (t = o[0]) || void 0 === t ? void 0 : t.toLowerCase(), ".png"), width: 32, height: 32 }, "axaa"), Object(A.jsx)(p.B, { className: "target-token-symbol", src: "/images/tokens/".concat(null === (n = o[1]) || void 0 === n ? void 0 : n.toLowerCase(), ".png"), width: 42, height: 42 }, "axaa1")] })] }) })
                },
                Mn = n(37),
                Sn = n(50),
                Cn = function(e) {
                    var t = e.pool,
                        n = e.isLoading,
                        a = void 0 !== n && n,
                        i = e.setLastUpdated,
                        s = Object(v.c)().account,
                        o = t.lpSymbol,
                        u = Object(w.b)().t,
                        c = Object(r.useState)(!1),
                        l = Object(P.a)(c, 2),
                        d = l[0],
                        y = l[1],
                        b = N(),
                        m = b.toastSuccess,
                        f = b.toastError,
                        j = Object(Sn.a)(),
                        h = Object(Mn.b)(Object(Xe.a)(t.stakingToken), j);
                    return Object(A.jsx)(A.Fragment, { children: a ? Object(A.jsx)(p.R, { width: "100%", height: "52px" }) : Object(A.jsx)(p.h, { isLoading: d, endIcon: d ? Object(A.jsx)(p.d, { spin: !0, color: "currentColor" }) : null, disabled: d, onClick: function() { h.methods.approve(Object(Xe.a)(t.contractAddress), Ft.a.constants.MaxUint256).send({ from: s }).on("sending", (function() { y(!0) })).on("receipt", (function() { m("".concat(u("Contract Enabled")), "".concat(u("You can now stake in the %symbol% vault!", { symbol: o }))), i(), y(!1) })).on("error", (function(e) { console.error(e), f("".concat(u("Error")), "".concat(u("Please try again. Confirm the transaction and make sure you are paying enough gas!"))), y(!1) })) }, width: "100%", children: u("Enable") }) })
                },
                Fn = Object(h.e)(p.D)(Ce || (Ce = Object(j.a)(["\n  width: 100%;\n"]))),
                Ln = function(e) {
                    var t = e.tokenSymbol,
                        n = e.onDismiss,
                        a = Object(w.b)().t,
                        i = Object(k.a)().theme;
                    return Object(A.jsxs)(p.K, { title: "".concat(t, " ").concat(a("required")), onDismiss: n, headerBackground: i.colors.gradients.cardHeader, children: [Object(A.jsx)(p.V, { color: "failure", bold: !0, children: a("Insufficient %tokensymbol% balance", { tokensymbol: t }) }), Object(A.jsx)(p.V, { mt: "24px", children: a("You\u2019ll need %tokensymbol% to stake in this pool!", { tokensymbol: t }) }), Object(A.jsx)(p.V, { children: a("Buy some %tokensymbol%, or make sure your %tokensymbol% isn\u2019t in another pool or LP.", { tokensymbol: t }) }), Object(A.jsxs)(p.h, { mt: "24px", as: "a", external: !0, href: He.c, children: [a("Buy"), " ", t] }), Object(A.jsx)(Fn, { href: "https://exchange.RNBO.finance", external: !0, children: Object(A.jsxs)(p.h, { variant: "secondary", mt: "8px", width: "100%", children: [a("Locate Assets"), Object(A.jsx)(p.N, { color: "primary", ml: "4px" })] }) }), Object(A.jsx)(p.h, { variant: "text", onClick: n, children: a("Close window") })] })
                },
                In = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 259200,
                        n = Object(r.useState)(null),
                        a = Object(P.a)(n, 2),
                        i = a[0],
                        s = a[1],
                        o = Object(r.useState)(!1),
                        u = Object(P.a)(o, 2),
                        c = u[0],
                        p = u[1];
                    return Object(r.useEffect)((function() {
                        var n = e + t - Math.floor(Date.now() / 1e3);
                        n > 0 && (s(n), p(!0))
                    }), [e, t, s]), { hasUnstakingFee: c, secondsRemaining: i }
                },
                Dn = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 18,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3,
                        i = Object(ee.c)(t, n),
                        r = new d.a(e.dividedBy(i)),
                        s = Object(ee.c)(r, n),
                        o = Object(ee.d)(new d.a(s), n),
                        u = Object(ee.e)(r, n, a);
                    return { sharesAsNumberBalance: s, sharesAsBigNumber: o, sharesAsDisplayBalance: u }
                },
                Pn = function(e) {
                    var t = e.secondsRemaining,
                        n = Object(Pt.a)(t),
                        a = n.days,
                        i = n.hours,
                        r = n.minutes;
                    return Object(A.jsxs)(p.V, { fontSize: "14px", children: [a && a, "d : ", i && i, "h : ", r && r, "m"] })
                },
                En = function(e) {
                    var t = e.withdrawalFee,
                        n = e.lastDepositedTime,
                        a = e.withdrawalFeePeriod,
                        i = void 0 === a ? "259200" : a,
                        r = Object(w.b)().t,
                        s = Object(v.c)().account,
                        o = parseInt(t) / 100 || "-",
                        u = parseInt(i) / 86400,
                        c = Object(p.jb)(Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(p.V, { bold: !0, mb: "4px", children: r("Unstaking fee: %fee%%", { fee: o }) }), Object(A.jsx)(p.V, { children: r("Only applies within ".concat(u, " days of staking. Unstaking after ").concat(u, " days will not include a fee. Timer resets every time you stake new RNBO in the pool.")) })] }), { placement: "bottom-start" }),
                        l = c.targetRef,
                        d = c.tooltip,
                        y = c.tooltipVisible,
                        b = In(parseInt(n, 10), parseInt(i, 10)),
                        m = b.secondsRemaining,
                        f = b.hasUnstakingFee,
                        j = n && !f,
                        h = s && n && f;
                    return Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", children: [y && d, Object(A.jsxs)(p.Y, { ref: l, small: !0, children: [j ? "0" : o, "% ", r(j ? "unstaking fee" : h ? "unstaking fee until" : "unstaking fee if withdrawn within 168h")] }), h && Object(A.jsx)(Pn, { secondsRemaining: m })] })
                },
                Bn = function(e) {
                    var t = e.stakingTokenSymbol,
                        n = e.lastDepositedTime,
                        a = e.vaultFees,
                        i = e.stakeAmount,
                        r = Object(w.b)().t,
                        s = parseInt(a.withdrawalFee) / 100,
                        o = (parseFloat(i) * (s / 100)).toFixed(4),
                        u = parseInt(a.withdrawalFeePeriod) / 86400,
                        c = Object(p.jb)(Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(p.V, { bold: !0, mb: "4px", children: r("Unstaking fee: %fee%%", { fee: s }) }), Object(A.jsx)(p.V, { children: r("Only applies within ".concat(u, " days of staking. Unstaking after 5 days will not include a fee. Timer resets every time you stake new RNBO in the pool.")) })] }), { placement: "top-start" }),
                        l = c.targetRef,
                        d = c.tooltip,
                        y = c.tooltipVisible;
                    return Object(A.jsxs)(A.Fragment, { children: [Object(A.jsxs)(p.x, { mt: "24px", alignItems: "center", justifyContent: "space-between", children: [y && d, Object(A.jsx)(p.Y, { ref: l, small: !0, children: r("Unstaking Fee") }), Object(A.jsxs)(p.V, { fontSize: "14px", children: [i ? o : "-", " ", t] })] }), Object(A.jsx)(En, { withdrawalFee: a.withdrawalFee, withdrawalFeePeriod: a.withdrawalFeePeriod, lastDepositedTime: n })] })
                },
                _n = Object(h.e)(p.h)(Fe || (Fe = Object(j.a)(["\n  flex-grow: 1;\n"]))),
                Nn = function(e) {
                    var t, n, a = e.pool,
                        i = e.stakingMax,
                        s = e.userInfo,
                        o = e.isRemovingStake,
                        u = void 0 !== o && o,
                        c = e.vaultFees,
                        l = e.onDismiss,
                        y = e.setLastUpdated,
                        b = Object(v.c)().account,
                        f = a.lpSymbol,
                        O = a.userData,
                        x = Object(ut.g)(a.pid),
                        T = Object(w.b)().t,
                        g = Object(k.a)().theme,
                        M = N(),
                        S = M.toastSuccess,
                        C = M.toastError,
                        F = Object(r.useState)(!1),
                        L = Object(P.a)(F, 2),
                        I = L[0],
                        D = L[1],
                        E = Object(r.useState)(""),
                        B = Object(P.a)(E, 2),
                        _ = B[0],
                        U = B[1],
                        V = Object(r.useState)(0),
                        Y = Object(P.a)(V, 2),
                        R = Y[0],
                        H = Y[1],
                        J = In(parseInt(s.depositAt)).hasUnstakingFee,
                        W = Object(m.h)("RNBO"),
                        z = (_ && Object(ee.a)(new d.a(_).times(W).toNumber()), (Object(ee.c)(null === O || void 0 === O ? void 0 : O.stakedUsd, 0) * R / 100).toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 })),
                        q = function(e) {
                            var t = i.dividedBy(100).multipliedBy(e),
                                n = Object(ee.e)(t, 18, 18);
                            U(n), H(e)
                        },
                        X = function() {
                            var e = Object(st.a)(rt.a.mark((function e(t) {
                                var n, a, i;
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            D(!0), n = Dn(t, new d.a(1e18)), a = new d.a(1e12), i = s.stakedBalance.minus(t), i.lte(a) ? x.methods.withdrawAll().send({ from: b }).on("sending", (function() { D(!0) })).on("receipt", (function() { S(T("Unstaked!"), T("Your earnings have also been harvested to your wallet")), D(!1), l(), y() })).on("error", (function(e) { console.error(e), C(T("Error"), T("".concat(e.message, " - Please try again."))), D(!1) })) : x.methods.withdraw(n.sharesAsBigNumber.toString()).send({ from: b }).on("sending", (function() { D(!0) })).on("receipt", (function() { S(T("Unstaked!"), T("Your earnings have also been harvested to your wallet")), D(!1), l(), y() })).on("error", (function(e) { console.error(e), C(T("Error"), T("".concat(e.message, " - Please try again."))), D(!1) }));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        G = function() {
                            var e = Object(st.a)(rt.a.mark((function e(t) {
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            x.methods.deposit(t.toString()).send({ from: b }).on("sending", (function() { D(!0) })).on("receipt", (function() { S(T("Staked!"), T("Your funds have been staked in the pool")), D(!1), l(), y() })).on("error", (function(e) { console.error(e), C(T("Error"), T("".concat(e.message, " - Please try again."))), D(!1) }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        K = function() {
                            var e = Object(st.a)(rt.a.mark((function e() {
                                var t;
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t = Object(ee.d)(new d.a(_), 18), D(!0), u ? X(t) : G(t);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }(),
                        Q = null === f || void 0 === f ? void 0 : f.split("-"),
                        $ = h.e.div(Le || (Le = Object(j.a)(["\n    width: 100%;\n    max-width: 55px;\n\n    * {\n      border-radius: 30px;\n    }\n    .target-token-symbol {\n      top: -12px;\n      left: 16px;\n    }\n    .token-symbol {\n    }\n  "])));
                    return Object(A.jsxs)(p.K, {
                        title: T(u ? "Unstake" : "Stake LP in Maximus Pool"),
                        onDismiss: l,
                        headerBackground: g.colors.gradients.cardHeader,
                        children: [Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", mb: "8px", children: [Object(A.jsxs)(p.V, { bold: !0, children: [T(u ? "Unstake" : "Stake"), ":"] }), Object(A.jsxs)(p.x, { alignItems: "center", minWidth: "70px", children: [Object(A.jsxs)($, { children: [Object(A.jsx)(p.B, { className: "token-symbol", src: "/images/tokens/".concat(null === (t = Q[0]) || void 0 === t ? void 0 : t.toLowerCase(), ".png"), width: 22, height: 22 }, "axaa"), Object(A.jsx)(p.B, { className: "target-token-symbol", src: "/images/tokens/".concat(null === (n = Q[1]) || void 0 === n ? void 0 : n.toLowerCase(), ".png"), width: 32, height: 32 }, "axaa1")] }), Object(A.jsx)(p.V, { ml: "30px", bold: !0, children: f })] })] }), Object(A.jsx)(p.e, {
                            value: _,
                            onUserInput: function(e) {
                                if (e) {
                                    var t = new d.a(e).multipliedBy(Z.a.pow(18)),
                                        n = Math.floor(t.dividedBy(i).multipliedBy(100).toNumber());
                                    H(n > 100 ? 100 : n)
                                } else H(0);
                                U(e)
                            },
                            currencyValue: "~".concat(z || 0, " USD")
                        }), Object(A.jsxs)(p.V, { mt: "8px", ml: "auto", color: "textSubtle", fontSize: "12px", mb: "8px", children: ["Balance: ", Object(ee.e)(i, 18)] }), Object(A.jsx)(p.S, { min: 0, max: 100, value: R, onValueChanged: q, name: "stake", valueLabel: "".concat(R, "%"), step: 1 }), Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "space-between", mt: "8px", children: [Object(A.jsx)(_n, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return q(25) }, children: "25%" }), Object(A.jsx)(_n, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return q(50) }, children: "50%" }), Object(A.jsx)(_n, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return q(75) }, children: "75%" }), Object(A.jsx)(_n, { scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return q(100) }, children: "MAX" })] }), u && J && Object(A.jsx)(Bn, { stakingTokenSymbol: f, lastDepositedTime: s.depositAt, vaultFees: c, stakeAmount: _ }), Object(A.jsx)(p.h, { isLoading: I, endIcon: I ? Object(A.jsx)(p.d, { spin: !0, color: "currentColor" }) : null, onClick: K, disabled: !_ || 0 === parseFloat(_), mt: "24px", children: T(I ? "Confirming" : "Confirm") }), !u && Object(A.jsxs)(p.h, { mt: "8px", as: "a", external: !0, href: "https://exchange.RNBO.finance/#/pool", variant: "secondary", children: [T("Get"), " ", f] })]
                    })
                },
                Un = function(e) {
                    var t = e.pool,
                        n = e.stakingTokenBalance,
                        a = e.stakingTokenPrice,
                        i = e.userInfo,
                        r = e.pricePerFullShare,
                        s = e.vaultFees,
                        o = e.setLastUpdated,
                        u = t.lpSymbol,
                        c = t.userData,
                        l = Object(ee.c)(i.stakedBalance, 18),
                        d = Object(ee.c)(null === c || void 0 === c ? void 0 : c.stakedUsd, 0).toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                        y = Object(p.hb)(Object(A.jsx)(Ln, { tokenSymbol: u })),
                        b = Object(P.a)(y, 1)[0],
                        m = Object(p.hb)(Object(A.jsx)(Nn, { stakingMax: n, pool: t, userInfo: i, stakingTokenPrice: a, setLastUpdated: o })),
                        f = Object(P.a)(m, 1)[0],
                        j = Object(p.hb)(Object(A.jsx)(Nn, { stakingMax: i.stakedBalance, pool: t, stakingTokenPrice: a, pricePerFullShare: r, userInfo: i, vaultFees: s, setLastUpdated: o, isRemovingStake: !0 })),
                        h = Object(P.a)(j, 1)[0];
                    return Object(A.jsxs)(p.x, { justifyContent: "space-between", alignItems: "center", children: [Object(A.jsxs)(p.x, { flexDirection: "column", children: [Object(A.jsx)(p.y, { children: l }), Object(A.jsx)(p.V, { fontSize: "12px", color: "textSubtle", children: "~".concat(a ? d : Object(A.jsx)(p.R, { mt: "1px", height: 16, width: 64 }), " USD") })] }), Object(A.jsxs)(p.x, { children: [Object(A.jsx)(p.A, { variant: "secondary", onClick: h, mr: "6px", children: Object(A.jsx)(p.J, { color: "primary", width: "24px" }) }), Object(A.jsx)(p.A, { variant: "secondary", onClick: n.gt(0) ? f : b, children: Object(A.jsx)(p.a, { color: "primary", width: "24px", height: "24px" }) })] })] })
                },
                Vn = function(e) {
                    var t = e.pool,
                        n = e.stakingTokenBalance,
                        a = e.stakingTokenPrice,
                        i = e.userInfo,
                        r = e.accountHasSharesStaked,
                        s = e.pricePerFullShare,
                        o = e.isLoading,
                        u = void 0 !== o && o,
                        c = e.vaultFees,
                        l = e.setLastUpdated,
                        d = t.lpSymbol,
                        y = Object(w.b)().t,
                        b = Object(p.hb)(Object(A.jsx)(Ln, { tokenSymbol: d })),
                        m = Object(P.a)(b, 1)[0],
                        f = Object(p.hb)(Object(A.jsx)(Nn, { stakingMax: n, stakingTokenPrice: a, userInfo: i, pool: t, setLastUpdated: l })),
                        j = Object(P.a)(f, 1)[0];
                    return Object(A.jsx)(p.x, { flexDirection: "column", children: u ? Object(A.jsx)(p.R, { width: "100%", height: "52px" }) : r ? Object(A.jsx)(Un, { pool: t, stakingTokenBalance: n, stakingTokenPrice: a, userInfo: i, pricePerFullShare: s, setLastUpdated: l, vaultFees: c }) : Object(A.jsx)(p.h, { onClick: n.gt(0) ? j : m, children: y("Stake") }) })
                },
                Yn = function(e) {
                    var t = e.earnings,
                        n = e.pid,
                        a = Object(v.c)().account,
                        i = Object(w.b)().t,
                        s = Object(r.useState)(!1),
                        o = Object(P.a)(s, 2),
                        u = o[0],
                        c = o[1],
                        l = function(e) {
                            var t = Object(dn.b)(),
                                n = Object(v.c)().account,
                                a = Object(ut.g)(e);
                            return {
                                onReward: Object(r.useCallback)(Object(st.a)(rt.a.mark((function e() {
                                    var i;
                                    return rt.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Object(bn.c)(a, n);
                                            case 2:
                                                return i = e.sent, t(Object(yn.e)(n)), e.abrupt("return", i);
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), [n, t, a])
                            }
                        }(n).onReward,
                        d = Object(k.a)().theme,
                        y = a && t ? t.toNumber().toFixed(5) : 0,
                        b = y.toLocaleString(),
                        m = Object(p.jb)(i("Your estimated earnings since last manual stake or unstake:"), { placement: "bottom-end" }),
                        f = m.targetRef,
                        O = m.tooltip,
                        x = m.tooltipVisible,
                        T = h.e.div(Ie || (Ie = Object(j.a)([""]))),
                        g = h.e.div(De || (De = Object(j.a)([""]))),
                        M = Object(h.e)(p.V)(Pe || (Pe = Object(j.a)(["\n    color: ", ";\n    font-size: 16px;\n    text-align: left;\n    margin: 10px 0px;\n  "])), d.colors.textSubtle),
                        S = h.e.div(Ee || (Ee = Object(j.a)(["\n    margin: 10px;\n  "]))),
                        C = h.e.div(Be || (Be = Object(j.a)(["\n    flex-direction: inherit;\n    display: flex;\n  "]))),
                        F = Object(p.hb)(Object(A.jsx)(p.K, { title: "Are you sure you want to stop auto-compounding for your current profit?", headerBackground: d.colors.gradients.cardHeader, children: Object(A.jsxs)(g, { children: [Object(A.jsx)(M, { color: "contrast", bold: !1, children: "Your current profit already compounds automatically every 5 minutes to maximize it." }), Object(A.jsx)(M, { color: "contrast", bold: !1, children: "Are you sure want to stop auto-compounding for current profit and harvest it?" }), Object(A.jsxs)(C, { children: [Object(A.jsx)(S, { children: Object(A.jsx)(p.h, { disabled: 0 === y || u, onClick: function() { return D() }, variant: "primary", children: i("No, keep it compounding") }) }), Object(A.jsx)(S, { children: Object(A.jsx)(p.h, { disabled: 0 === y || u, onClick: function() { c(!0), l().finally((function() { c(!1) })) }, variant: "secondary", children: i("Yes, harvest") }) })] })] }) })),
                        L = Object(P.a)(F, 2),
                        I = L[0],
                        D = L[1];
                    return Object(r.useEffect)((function() { u && D() }), [u, D]), Object(A.jsxs)(p.x, { mb: "10px", justifyContent: "space-between", alignItems: "center", children: [Object(A.jsx)(p.g, { ref: f, children: Object(A.jsxs)(p.x, { alignItems: "center", children: [Object(A.jsx)(p.y, { color: 0 === y ? "textDisabled" : "text", children: b }), Object(A.jsx)(p.z, { ml: "4px", width: "20px", height: "20px", color: "textSubtle" })] }) }), x && O, Object(A.jsx)(T, { children: Object(A.jsx)(p.h, { disabled: u, onClick: I, variant: "secondary", children: i("Manual Harvest") }) })] })
                },
                Rn = Object(h.e)(p.V)(_e || (_e = Object(j.a)(["\n  display: inline;\n"]))),
                Hn = function(e) {
                    var t = e.pool,
                        n = e.userInfo,
                        a = e.pricePerFullShare,
                        i = e.stakingTokenPrice,
                        s = e.accountHasSharesStaked,
                        o = e.vaultFees,
                        u = e.isLoading,
                        c = e.setLastUpdated,
                        l = t.userData,
                        y = t.lpSymbol,
                        b = t.pid,
                        m = Object(r.useState)(!1),
                        f = Object(P.a)(m, 2),
                        j = f[0],
                        h = f[1],
                        O = Object(w.b)().t,
                        x = Object(r.useMemo)((function() { return (null === l || void 0 === l ? void 0 : l.stakingTokenBalance) ? new d.a(l.stakingTokenBalance) : Z.b }), [l.stakingTokenBalance]);
                    return Object(r.useEffect)((function() {
                        (function() {
                            var e = Object(st.a)(rt.a.mark((function e() {
                                return rt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            l.allowance && h(l.allowance.gt(x));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        })()()
                    }), [l, x]), Object(A.jsx)(p.x, { flexDirection: "column", children: Object(A.jsxs)(p.x, { flexDirection: "column", children: [Object(A.jsx)(p.x, { children: Object(A.jsx)(p.V, { bold: !0, textTransform: "uppercase", color: "secondary", fontSize: "12px", pr: "3px", children: "Recent RNBO profit:" }) }), Object(A.jsx)(Yn, { earnings: null === l || void 0 === l ? void 0 : l.pendingReward, pid: b }), Object(A.jsxs)(p.g, { display: "inline", children: [Object(A.jsxs)(Rn, { color: s ? "secondary" : "textSubtle", textTransform: "uppercase", bold: !0, fontSize: "12px", children: [s ? "".concat(y, " LP") : O("stake"), " "] }), Object(A.jsx)(Rn, { color: s ? "textSubtle" : "secondary", textTransform: "uppercase", bold: !0, fontSize: "12px", children: s ? O("staked (compounding)") : "".concat(y, " LP") })] }), j ? Object(A.jsx)(Vn, { isLoading: u, pool: t, stakingTokenBalance: x, stakingTokenPrice: i, vaultFees: o, userInfo: n, pricePerFullShare: a, accountHasSharesStaked: s, setLastUpdated: c }) : Object(A.jsx)(Cn, { pool: t, isLoading: u, setLastUpdated: c })] }) })
                },
                Jn = Object(h.e)(p.m)(Ne || (Ne = Object(j.a)(["\n  min-height: ", ";\n"])), (function(e) { return e.isLoading ? "0" : "254px" })),
                Wn = function(e) {
                    var t = e.pool,
                        n = e.showStakedOnly,
                        a = e.isHomeCard,
                        i = e.farms,
                        r = Object(w.b)().t,
                        s = Object(v.c)().account,
                        o = Object(gt.a)(),
                        u = o.lastUpdated,
                        c = o.setLastUpdated,
                        l = cn(u),
                        d = ln(),
                        y = pn().pricePerFullShare,
                        b = t.lpSymbol,
                        m = t.totalStaked,
                        f = t.userData,
                        j = f || {},
                        h = j.depositAt,
                        O = j.stakedBalance,
                        x = O && O.gt(0),
                        T = !t.userData || !l.shares,
                        k = d.performanceFee && parseInt(d.performanceFee, 10) / 100;
                    return n && !x ? null : Object(A.jsxs)(hn, { isStaking: x, isHomeCard: a, children: [Object(A.jsx)(An, { stackingToken: b }), Object(A.jsxs)(Jn, { isLoading: T, children: [Object(A.jsx)(mn, { farms: i, pool: t, stakingTokenPrice: 1, isAutoVault: !0, compoundFrequency: 12, performanceFee: k }), Object(A.jsx)(jn, { farms: i, pool: t, stakingTokenPrice: 1, isAutoVault: !0, compoundFrequency: 12, performanceFee: k }), Object(A.jsx)(p.g, { mt: "8px", children: Object(A.jsx)(En, { withdrawalFee: d.withdrawalFee, withdrawalFeePeriod: d.withdrawalFeePeriod, lastDepositedTime: x && h }) }), Object(A.jsx)(p.x, { mt: "24px", flexDirection: "column", children: s ? Object(A.jsx)(Hn, { pool: t, userInfo: f, pricePerFullShare: y, vaultFees: d, stakingTokenPrice: 1, accountHasSharesStaked: x, lastUpdated: u, setLastUpdated: c, isLoading: T }) : Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(p.V, { mb: "10px", textTransform: "uppercase", fontSize: "12px", color: "textSubtle", bold: !0, children: r("Start earning") }), Object(A.jsx)($.a, {})] }) })] }), Object(A.jsx)(wn, { pool: t, account: s, performanceFee: d.performanceFee, isAutoVault: !0, totalRNBOInVault: m })] })
                },
                zn = Object(h.e)(p.V)(Ue || (Ue = Object(j.a)(["\n  display: none;\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                qn = Object(h.e)(p.D)(Ve || (Ve = Object(j.a)(["\n  width: 100%;\n\n  &:hover {\n    text-decoration: none;\n  }\n"]))),
                Xn = function(e) {
                    var t = e.stakedOnly,
                        n = e.setStakedOnly,
                        a = Object(w.b)().t;
                    return Object(A.jsxs)(p.x, { alignItems: "center", justifyContent: "center", mb: "32px", children: [Object(A.jsx)(p.x, { alignItems: "center", flexDirection: ["column", null, "row", null], children: Object(A.jsxs)(p.x, { mt: ["4px", null, 0, null], ml: [0, null, "24px", null], justifyContent: "center", alignItems: "center", children: [Object(A.jsx)(p.X, { scale: "sm", checked: t, onChange: function() { return n((function(e) { return !e })) } }), Object(A.jsx)(p.V, { ml: "8px", children: a("Staked only") })] }) }), Object(A.jsx)(p.x, { ml: "24px", alignItems: "center", justifyContent: "flex-end", children: Object(A.jsx)(qn, { external: !0, href: "https://docs.RNBO.finance/guides/maximus/maximus-2", children: Object(A.jsxs)(p.h, { px: ["14px", null, null, null, "20px"], variant: "subtle", children: [Object(A.jsx)(zn, { color: "backgroundAlt", bold: !0, fontSize: "16px", children: a("Help") }), Object(A.jsx)(p.z, { color: "backgroundAlt", ml: [null, null, null, 0, "6px"] })] }) }) })] })
                },
                Gn = function() {
                    var e = Object(c.h)().path,
                        t = Object(w.b)().t,
                        n = Object(v.c)().account,
                        a = Object(m.j)(n),
                        i = Object(m.d)().data,
                        s = Object(G.a)(!1, { localStorageKey: "RNBO_pool_staked" }),
                        o = Object(P.a)(s, 2),
                        u = o[0],
                        l = o[1],
                        y = Object(r.useMemo)((function() { return a.filter((function(e) { return e.userData && new d.a(e.userData.stakedBalance).isGreaterThan(0) })) }), [a]);
                    return Object(A.jsxs)(A.Fragment, { children: [Object(A.jsx)(Q.a, { children: Object(A.jsx)(p.x, { justifyContent: "space-between", flexDirection: ["column", null, "row"], children: Object(A.jsxs)(p.x, { flexDirection: "column", mr: ["8px", 0], children: [Object(A.jsx)(p.y, { as: "h1", scale: "xxl", color: "text", mb: "24px", children: t("Maximus Farm \u2728") }), Object(A.jsx)(p.y, { scale: "md", color: "text", children: t("Stake LP token to earn automatically.") }), Object(A.jsx)(p.y, { scale: "md", color: "text", children: t("High APY, low risk, no effort, no fee.") })] }) }) }), Object(A.jsxs)(V.a, { children: [Object(A.jsx)(Xn, { stakedOnly: u, setStakedOnly: l }), Object(A.jsx)(K.a, { children: Object(A.jsx)(c.b, { exact: !0, path: "".concat(e), children: u ? z()(y, ["sortOrder"]).map((function(e) { return Object(A.jsx)(Wn, { pool: e, showStakedOnly: u, farms: i }) })) : z()(a, ["sortOrder"]).map((function(e) { return Object(A.jsx)(Wn, { pool: e, showStakedOnly: u, farms: i }) })) }) })] })] })
                },
                Kn = n(69),
                Qn = Object(Kn.a)(),
                $n = Object(r.lazy)((function() { return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 876)) })),
                Zn = Object(r.lazy)((function() { return n.e(5).then(n.bind(null, 875)) })),
                ea = Object(r.lazy)((function() { return n.e(10).then(n.bind(null, 871)) })),
                ta = Object(r.lazy)((function() { return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, 874)) }));
            d.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 });
            var na = function() { return Object(r.useEffect)((function() { console.warn = function() { return null } }), []), b(), Object(m.g)(), Object(m.f)(), Object(m.e)(), f(), Object(A.jsxs)(c.c, { history: Qn, children: [Object(A.jsx)(p.Q, {}), Object(A.jsx)(O, {}), Object(A.jsx)(M, { children: Object(A.jsx)(I, { fallback: Object(A.jsx)(R, {}), children: Object(A.jsxs)(c.d, { children: [Object(A.jsx)(c.b, { path: "/", exact: !0, children: Object(A.jsx)($n, {}) }), Object(A.jsx)(c.b, { path: "/farms", children: Object(A.jsx)(Zn, {}) }), Object(A.jsx)(c.b, { path: "/pools", children: Object(A.jsx)(sn, {}) }), Object(A.jsx)(c.b, { path: "/staking", children: Object(A.jsx)(c.a, { to: "/pools" }) }), Object(A.jsx)(c.b, { path: "/electrum", children: Object(A.jsx)(c.a, { to: "/pools" }) }), Object(A.jsx)(c.b, { path: "/maximus", children: Object(A.jsx)(Gn, {}) }), Object(A.jsx)(c.b, { path: "/coming-soon", children: Object(A.jsx)(un, {}) }), Object(A.jsx)(c.b, { path: "/lottery", children: Object(A.jsx)(ta, {}) }), Object(A.jsx)(c.b, { component: ea })] }) }) }), Object(A.jsx)(J, { iterations: 2 }), Object(A.jsx)(U, {})] }) },
                aa = s.a.memo(na),
                ia = n(207),
                ra = n(208),
                sa = n(206),
                oa = n(146),
                ua = function(e) { var t = e.children; return Object(A.jsx)(v.b, { getLibrary: ia.b, children: Object(A.jsx)(dn.a, { store: oa.a, children: Object(A.jsx)(_, { children: Object(A.jsx)(ra.b, { children: Object(A.jsx)(w.a, { children: Object(A.jsx)(sa.b, { children: Object(A.jsx)(p.L, { children: t }) }) }) }) }) }) }) };
            u.a.render(Object(A.jsx)(s.a.StrictMode, { children: Object(A.jsx)(ua, { children: Object(A.jsx)(aa, {}) }) }), document.getElementById("root"))
        },
        91: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return w })), n.d(t, "c", (function() { return k }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(10),
                o = n(14),
                u = n(52),
                c = [{ id: 1, name: "", description: "", images: { lg: ".png", md: ".png", sm: ".png", alt: ".png", ipfs: "https://" }, background: "xx.svg", textColor: "#000", users: 0, points: 0 }],
                p = n(273),
                l = n.n(p),
                d = n(37),
                y = n(65),
                b = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, s, o, u, p;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = Object(d.t)(), e.next = 4, n.methods.getTeamProfile(t).call();
                                case 4:
                                    return a = e.sent, r = a[0], s = a[2], o = a[3], u = a[4], p = c.find((function(e) { return e.id === t })), e.abrupt("return", l()({}, p, { isJoinable: u, name: r, users: s, points: o }));
                                case 13:
                                    return e.prev = 13, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 13]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                m = function() {
                    var e = Object(r.a)(i.a.mark((function e() {
                        var t, n, a, r, u, p, b;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = Object(d.t)(), n = c.reduce((function(e, t) { return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.id, t)) }), {}), e.next = 5, t.methods.numberTeams().call();
                                case 5:
                                    for (a = e.sent, r = [], u = 1; u <= a; u++) r.push(t.methods.getTeamProfile(u).call);
                                    return e.next = 10, Object(y.a)(r);
                                case 10:
                                    return p = e.sent, b = p.reduce((function(e, t, n) {
                                        var a = t[0],
                                            i = t[2],
                                            r = t[3],
                                            u = t[4];
                                        return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, n + 1, { name: a, users: Number(i), points: Number(r), isJoinable: u }))
                                    }), {}), e.abrupt("return", l()({}, n, b));
                                case 15:
                                    return e.prev = 15, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 15]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                f = { isInitialized: !1, isLoading: !0, data: c.reduce((function(e, t) { return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.id, t)) }), {}) },
                j = Object(u.c)({ name: "teams", initialState: f, reducers: { fetchStart: function(e) { e.isLoading = !0 }, fetchFailed: function(e) { e.isLoading = !1, e.isInitialized = !0 }, teamFetchSucceeded: function(e, t) { e.isInitialized = !0, e.isLoading = !1, e.data[t.payload.id] = t.payload }, teamsFetchSucceeded: function(e, t) { e.isInitialized = !0, e.isLoading = !1, e.data = t.payload } } }),
                h = j.actions,
                O = h.fetchStart,
                x = h.teamFetchSucceeded,
                v = h.fetchFailed,
                T = h.teamsFetchSucceeded,
                w = function(e) {
                    return function() {
                        var t = Object(r.a)(i.a.mark((function t(n) {
                            var a;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, n(O()), t.next = 4, b(e);
                                    case 4:
                                        a = t.sent, n(x(a)), t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(0), n(v());
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 8]
                            ])
                        })));
                        return function(e) { return t.apply(this, arguments) }
                    }()
                },
                k = function() {
                    return function() {
                        var e = Object(r.a)(i.a.mark((function e(t) {
                            var n;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t(O()), e.next = 4, m();
                                    case 4:
                                        n = e.sent, t(T(n)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), t(v());
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function(t) { return e.apply(this, arguments) }
                    }()
                };
            t.a = j.reducer
        },
        92: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return s })), n.d(t, "a", (function() { return o }));
            var a = n(8),
                i = n.n(a),
                r = n(23),
                s = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 18,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3,
                        s = Object(r.c)(t, n),
                        o = new i.a(e.multipliedBy(s)),
                        u = Object(r.c)(o, n),
                        c = Object(r.d)(new i.a(u), n),
                        p = Object(r.e)(o, n, a);
                    return { RNBOAsNumberBalance: u, RNBOAsBigNumber: c, RNBOAsDisplayBalance: p }
                },
                o = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 18,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3,
                        s = Object(r.c)(t, n),
                        o = new i.a(e.dividedBy(s)),
                        u = Object(r.c)(o, n),
                        c = Object(r.d)(new i.a(u), n),
                        p = Object(r.e)(o, n, a);
                    return { sharesAsNumberBalance: u, sharesAsBigNumber: c, sharesAsDisplayBalance: p }
                }
        },
        94: function(e, t, n) {
            "use strict";
            var a, i, r, s, o, u, c, p, l, d, y, b, m = n(10),
                f = n(13),
                j = n(27),
                h = [{ pid: 3, lpSymbol: "USDT-RNBO LP", lpAddresses: (a = {}, Object(m.a)(a, f.a.FUJI, "0x0000000000000000000000000000000000000000000"), Object(m.a)(a, f.a.AVALANCHE, "0x752c59f22faaa861108649f4596034796c69bc3f"), a), token: j.a.usdt, quoteToken: j.a.RNBO }, { pid: 4, lpSymbol: "AVAX-RNBO LP", lpAddresses: (i = {}, Object(m.a)(i, f.a.FUJI, "0x21A735A9c3f00EF3099D6a945F71d148840F4918"), Object(m.a)(i, f.a.AVALANCHE, "0xfba4edaad3248b03f1a3261ad06ad846a8e50765"), i), token: j.a.RNBO, quoteToken: j.a.wavax, tokenSymbol: "RNBO", quoteTokenAdresses: j.a.wavax }, { pid: 7, lpSymbol: "PNG-RNBO LP", lpAddresses: (r = {}, Object(m.a)(r, f.a.FUJI, "0x4570BD3910c64095F6C0f5e6405BE7Cb30E2bdd7"), Object(m.a)(r, f.a.AVALANCHE, "0x161f750b753c7120599d07c352607F458ecB918e"), r), token: j.a.png, quoteToken: j.a.RNBO }, { pid: 9, lpSymbol: "ETH-RNBO LP", lpAddresses: (s = {}, Object(m.a)(s, f.a.FUJI, "0x4570BD3910c64095F6C0f5e6405BE7Cb30E2bdd7"), Object(m.a)(s, f.a.AVALANCHE, "0xEAC3778e5658667B72aEbe8C71F97ed8b3b5887b"), s), token: j.a.eth, quoteToken: j.a.RNBO }, { pid: 10, lpSymbol: "SNOB-RNBO LP", lpAddresses: (o = {}, Object(m.a)(o, f.a.FUJI, "0x1ccd24def23a742d56a976810ca5bda37b43744d"), Object(m.a)(o, f.a.AVALANCHE, "0x805B7d20e92893FF4b68c83E40c1Fc9A7a6162Fa"), o), token: j.a.snob, quoteToken: j.a.RNBO }, { pid: 11, lpSymbol: "XAVA-RNBO LP", lpAddresses: (u = {}, Object(m.a)(u, f.a.FUJI, "0x5BC783079e9A04c67436D6E712D5e73099c08f16"), Object(m.a)(u, f.a.AVALANCHE, "0x5BC783079e9A04c67436D6E712D5e73099c08f16"), u), token: j.a.xava, quoteToken: j.a.RNBO }, { pid: 1, lpSymbol: "USDT-AVAX LP", lpAddresses: (c = {}, Object(m.a)(c, f.a.FUJI, "0xb239eafea4e312f9409f96493a5f24bb4a23af18"), Object(m.a)(c, f.a.AVALANCHE, "0xe22a65204726f102d9e3539b85d3999dee2e421f"), c), token: j.a.usdt, quoteToken: j.a.wavax }, { pid: 2, lpSymbol: "ETH-AVAX LP", lpAddresses: (p = {}, Object(m.a)(p, f.a.FUJI, "0x1ccd24def23a742d56a976810ca5bda37b43744d"), Object(m.a)(p, f.a.AVALANCHE, "0x58128ab3ecbf703682ede72f341944bffe3524b9"), p), token: j.a.eth, quoteToken: j.a.wavax }, { pid: 6, lpSymbol: "SUSHI-AVAX LP", lpAddresses: (l = {}, Object(m.a)(l, f.a.FUJI, "0x1ccd24def23a742d56a976810ca5bda37b43744d"), Object(m.a)(l, f.a.AVALANCHE, "0xF1d9d971ab9231759d952B22223B4D76D8b181E5"), l), token: j.a.sushi, quoteToken: j.a.wavax }, { pid: 8, lpSymbol: "WBTC-AVAX LP", lpAddresses: (d = {}, Object(m.a)(d, f.a.FUJI, "0x1ccd24def23a742d56a976810ca5bda37b43744d"), Object(m.a)(d, f.a.AVALANCHE, "0x9cfb46d0b92ac83aaa9ed0913f3f01cdbe22176d"), d), token: j.a.wbtc, quoteToken: j.a.wavax }, { pid: 12, lpSymbol: "USDT-DAI LP", lpAddresses: (y = {}, Object(m.a)(y, f.a.FUJI, "0x1ccd24def23a742d56a976810ca5bda37b43744d"), Object(m.a)(y, f.a.AVALANCHE, "0x3cebc2b0febf521494f06318bbe202ae7ee799c9"), y), token: j.a.dai, quoteToken: j.a.usdt }, { pid: 13, lpSymbol: "YAK-AVAX LP", lpAddresses: (b = {}, Object(m.a)(b, f.a.FUJI, "0x590673007Ff2839818cB1155926758E5F969d821"), Object(m.a)(b, f.a.AVALANCHE, "0x590673007Ff2839818cB1155926758E5F969d821"), b), token: j.a.yak, quoteToken: j.a.wavax, tokenSymbol: "YAK", quoteTokenAdresses: j.a.wavax }];
            t.a = h
        },
        96: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() { return N })), n.d(t, "c", (function() { return U })), n.d(t, "d", (function() { return V })), n.d(t, "e", (function() { return Y })), n.d(t, "g", (function() { return R })), n.d(t, "f", (function() { return H }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                s = n(10),
                o = n(14),
                u = n(48),
                c = n(52),
                p = n(67),
                l = n(112),
                d = n(204),
                y = n(432),
                b = n(44),
                m = n(20),
                f = n(8),
                j = n.n(f),
                h = function() {
                    var e = Object(r.a)(i.a.mark((function e() {
                        var t, n, a, r, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = p.a.filter((function(e) { return 0 !== e.sousId })), n = t.map((function(e) { return { address: Object(m.a)(e.contractAddress), name: "startTimestamp" } })), a = t.map((function(e) { return { address: Object(m.a)(e.contractAddress), name: "bonusEndTimestamp" } })), e.next = 5, Object(b.a)(l, n);
                                case 5:
                                    return r = e.sent, e.next = 8, Object(b.a)(l, a);
                                case 8:
                                    return s = e.sent, e.abrupt("return", t.map((function(e, t) {
                                        var n = r[t],
                                            a = s[t];
                                        return { sousId: e.sousId, startBlock: new j.a(n).toJSON(), endBlock: new j.a(a).toJSON() }
                                    })));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                O = function() {
                    var e = Object(r.a)(i.a.mark((function e() {
                        var t, n, a, r, s, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = p.a.filter((function(e) { return "AVAX" !== e.stakingToken.symbol })), n = p.a.filter((function(e) { return "AVAX" === e.stakingToken.symbol })), a = t.map((function(e) { return { address: Object(m.a)(e.stakingToken.address), name: "balanceOf", params: [Object(m.a)(e.contractAddress)] } })), r = n.map((function(e) { return { address: Object(m.p)(), name: "balanceOf", params: [Object(m.a)(e.contractAddress)] } })), e.next = 6, Object(b.a)(d, a);
                                case 6:
                                    return s = e.sent, e.next = 9, Object(b.a)(y, r);
                                case 9:
                                    return o = e.sent, e.abrupt("return", [].concat(Object(u.a)(t.map((function(e, t) { return { sousId: e.sousId, totalStaked: new j.a(s[t]).toJSON() } }))), Object(u.a)(n.map((function(e, t) { return { sousId: e.sousId, totalStaked: new j.a(o[t]).toJSON() } })))));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                x = n(97),
                v = n(72),
                T = n(64),
                w = p.a.filter((function(e) { return "AVAX" !== e.stakingToken.symbol })),
                k = p.a.filter((function(e) { return "AVAX" === e.stakingToken.symbol })),
                g = p.a.filter((function(e) { return 0 !== e.sousId })),
                A = Object(T.b)(),
                M = new A.eth.Contract(x, Object(m.k)()),
                S = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = w.map((function(e) { return { address: Object(m.a)(e.stakingToken.address), name: "allowance", params: [t, Object(m.a)(e.contractAddress)] } })), e.next = 3, Object(b.a)(v, n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", w.reduce((function(e, t, n) { return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.sousId, new j.a(a[n]).toJSON())) }), {}));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                C = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, u, c;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = w.map((function(e) { return { address: Object(m.a)(e.stakingToken.address), name: "balanceOf", params: [t] } })), e.next = 3, Object(b.a)(v, n);
                                case 3:
                                    return a = e.sent, r = w.reduce((function(e, t, n) { return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.sousId, new j.a(a[n]).toJSON())) }), {}), e.next = 7, A.eth.getBalance(t);
                                case 7:
                                    return u = e.sent, c = k.reduce((function(e, t) { return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.sousId, new j.a(u).toJSON())) }), {}), e.abrupt("return", Object(o.a)(Object(o.a)({}, r), c));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                F = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, u, c;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = g.map((function(e) { return { address: Object(m.a)(e.contractAddress), name: "userInfo", params: [t] } })), e.next = 3, Object(b.a)(l, n);
                                case 3:
                                    return a = e.sent, r = g.reduce((function(e, t, n) { return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.sousId, new j.a(a[n].amount._hex).toJSON())) }), {}), e.next = 7, M.methods.userInfo("0", t).call();
                                case 7:
                                    return u = e.sent, c = u.amount, e.abrupt("return", Object(o.a)(Object(o.a)({}, r), {}, { 0: new j.a(c).toJSON() }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                L = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, u;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = g.map((function(e) { return { address: Object(m.a)(e.contractAddress), name: "pendingReward", params: [t] } })), e.next = 3, Object(b.a)(l, n);
                                case 3:
                                    return a = e.sent, r = g.reduce((function(e, t, n) { return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.sousId, new j.a(a[n]).toJSON())) }), {}), e.next = 7, M.methods.pendingRNBO("0", t).call();
                                case 7:
                                    return u = e.sent, e.abrupt("return", Object(o.a)(Object(o.a)({}, r), {}, { 0: new j.a(u).toJSON() }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                I = { data: Object(u.a)(p.a) },
                D = Object(c.c)({
                    name: "Pools",
                    initialState: I,
                    reducers: {
                        setPoolsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) { var t = n.find((function(t) { return t.sousId === e.sousId })); return Object(o.a)(Object(o.a)({}, e), t) }))
                        },
                        setPoolsUserData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) { var t = n.find((function(t) { return t.sousId === e.sousId })); return Object(o.a)(Object(o.a)({}, e), {}, { userData: t }) }))
                        },
                        updatePoolsUserData: function(e, t) {
                            var n = t.payload,
                                a = n.field,
                                i = n.value,
                                r = n.sousId,
                                u = e.data.findIndex((function(e) { return e.sousId === r }));
                            e.data[u] = Object(o.a)(Object(o.a)({}, e.data[u]), {}, { userData: Object(o.a)(Object(o.a)({}, e.data[u].userData), {}, Object(s.a)({}, a, i)) })
                        }
                    }
                }),
                P = D.actions,
                E = P.setPoolsPublicData,
                B = P.setPoolsUserData,
                _ = P.updatePoolsUserData,
                N = function() {
                    return function() {
                        var e = Object(r.a)(i.a.mark((function e(t) {
                            var n, a, r;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, h();
                                    case 2:
                                        return n = e.sent, e.next = 5, O();
                                    case 5:
                                        a = e.sent, r = p.a.map((function(e) {
                                            var t = n.find((function(t) { return t.sousId === e.sousId })),
                                                i = a.find((function(t) { return t.sousId === e.sousId }));
                                            return Object(o.a)(Object(o.a)({}, t), i)
                                        })), t(E(r));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) { return e.apply(this, arguments) }
                    }()
                },
                U = function(e) {
                    return function() {
                        var t = Object(r.a)(i.a.mark((function t(n) {
                            var a, r, s, o, u;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, S(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, C(e);
                                    case 5:
                                        return r = t.sent, t.next = 8, F(e);
                                    case 8:
                                        return s = t.sent, t.next = 11, L(e);
                                    case 11:
                                        o = t.sent, u = p.a.map((function(e) { return { sousId: e.sousId, allowance: a[e.sousId], stakingTokenBalance: r[e.sousId], stakedBalance: s[e.sousId], pendingReward: o[e.sousId] } })), n(B(u));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) { return t.apply(this, arguments) }
                    }()
                },
                V = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, S(t);
                                    case 2:
                                        r = n.sent, a(_({ sousId: e, field: "allowance", value: r[e] }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) { return n.apply(this, arguments) }
                    }()
                },
                Y = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, C(t);
                                    case 2:
                                        r = n.sent, a(_({ sousId: e, field: "stakingTokenBalance", value: r[e] }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) { return n.apply(this, arguments) }
                    }()
                },
                R = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, F(t);
                                    case 2:
                                        r = n.sent, a(_({ sousId: e, field: "stakedBalance", value: r[e] }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) { return n.apply(this, arguments) }
                    }()
                },
                H = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, L(t);
                                    case 2:
                                        r = n.sent, a(_({ sousId: e, field: "pendingReward", value: r[e] }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) { return n.apply(this, arguments) }
                    }()
                };
            t.a = D.reducer
        },
        97: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract RNBOToken","name":"_RNBO","type":"address"},{"internalType":"contract ElectrumBar","name":"_electrum","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_RNBOPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"RNBO","outputs":[{"internalType":"contract RNBOToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RNBOPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRNBO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRNBOPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"electrum","outputs":[{"internalType":"contract ElectrumBar","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        99: function(e) { e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"profit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"performanceFee","type":"uint256"}],"name":"BunnyPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[],"name":"DisableWhitelist","type":"event"},{"anonymous":false,"inputs":[],"name":"EnableWhitelist","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"profit","type":"uint256"}],"name":"Harvested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPaused","type":"bool"}],"name":"PauseChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"profit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"performanceFee","type":"uint256"}],"name":"ProfitPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Recovered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newDuration","type":"uint256"}],"name":"RewardsDurationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"bool","name":"whitelist","type":"bool"}],"name":"Whitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawalFee","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"depositedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"disable","type":"bool"}],"name":"disableWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getRewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_token","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"keeper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPauseTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"migrateRNBO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolType","outputs":[{"internalType":"enum PoolConstant.PoolTypes","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"principalOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newFeeManager","type":"address"}],"name":"setFeeManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_keeper","type":"address"}],"name":"setKeeper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"setPidToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsDistribution","type":"address"}],"name":"setRewardsDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"}],"name":"setRewardsDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRewardsToken","type":"address"}],"name":"setRewardsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_on","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"sharesOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"withdrawableBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]') }
    },
    [
        [837, 3, 4]
    ]
]);

//# sourceMappingURL=main1.js.map
export default main1;