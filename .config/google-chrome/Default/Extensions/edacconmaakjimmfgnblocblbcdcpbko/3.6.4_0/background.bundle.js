/* Copyright (c) 2020 Session Buddy - All Rights Reserved */
/* The contents of this file may not be modified, copied, and/or distributed, in whole or in part, without the express permission of the author, reachable at support@sessionbuddy.com */

(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.i = function(value) {
        return value;
    };
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                configurable: false,
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module['default'];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = '';
    return __webpack_require__(__webpack_require__.s = 19);
})([ function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    var u = {
        findByPredicate: function findByPredicate(arr, predicate, receiver) {
            var i = u.findIndex(arr, predicate, receiver);
            if (i >= 0) return arr[i];
        },
        findIndex: function findIndex(arr, predicate, receiver) {
            if (arr) {
                var l = arr.length;
                for (var i = 0; i < l; i++) {
                    if (predicate.call(receiver, arr[i], i)) {
                        return i;
                    }
                }
            }
            return -1;
        },
        deepClone: function deepClone(v) {
            var r, i;
            if (u.isArray(v)) {
                r = new Array(v.length);
                for (i = 0; i < v.length; i++) {
                    r[i] = u.deepClone(v[i]);
                }
            } else if (u.isPlainObject(v)) {
                r = {};
                for (i in v) {
                    r[i] = u.deepClone(v[i]);
                }
            } else {
                return v;
            }
            return r;
        },
        type: function type(o) {
            var r = Object.prototype.toString.call(o);
            return r.slice(r.indexOf(' ') + 1, -1).toLowerCase();
        },
        isObject: function isObject(o) {
            return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && !!o;
        },
        isPlainObject: function isPlainObject(v) {
            return u.isObject(v) && !v.nodeType && v !== v.window && (!v.constructor || v.constructor.prototype.hasOwnProperty('isPrototypeOf'));
        },
        isArray: function isArray(o) {
            return Object.prototype.toString.call(o) === '[object Array]';
        },
        isFunction: function isFunction(o) {
            return Object.prototype.toString.call(o) === '[object Function]';
        },
        isString: function isString(o) {
            return Object.prototype.toString.call(o) === '[object String]';
        },
        isUndefined: function isUndefined(o) {
            return o === void 0;
        },
        isNumber: function isNumber(o) {
            return Object.prototype.toString.call(o) === '[object Number]';
        },
        isNumeric: function isNumeric(o) {
            return !isNaN(parseFloat(o)) && isFinite(o);
        },
        pick: function pick(o, props, boolProps) {
            var i, p, r = {};
            if (props) {
                for (i = props.length; i--; ) {
                    p = props[i];
                    if (o[p] != null) {
                        r[p] = o[p];
                    }
                }
            }
            if (boolProps) {
                for (i = boolProps.length; i--; ) {
                    p = boolProps[i];
                    r[p] = !!o[p];
                }
            }
            return r;
        },
        find: function find(arr, prop, val) {
            for (var i = arr.length; i--; ) {
                if (arr[i][prop] === val) {
                    return arr[i];
                }
            }
        },
        contains: function contains(arr, val) {
            return arr.indexOf(val) > -1;
        },
        move: function move(arr, o, p) {
            if (u.isUndefined(p)) {
                p = -1;
            }
            arr = arr || [];
            if (u.isUndefined(o)) {
                return arr;
            }
            var i = arr.indexOf(o);
            if (i > -1) {
                if (i === p) {
                    return arr;
                }
                o = arr.splice(i, 1)[0];
                if (p < 0) {
                    p = Math.max(arr.length + 1 + p, 0);
                }
                arr.splice(p, 0, o);
            }
            return arr;
        },
        compare: function compare(arr1, arr2) {
            if (arr1.length !== arr2.length) return false;
            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        },
        regExEscape: function regExEscape(txt) {
            return txt.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        },
        htmlEncode: function htmlEncode(txt) {
            var el = document.createElement('div');
            el.innerText = txt;
            return el.innerHTML.replace(/ /g, '&nbsp;');
        },
        jsonSafeParse: function jsonSafeParse(txt) {
            if (txt != null && txt !== '') return JSON.parse(txt);
        },
        toCSVField: function toCSVField(txt) {
            return '"' + txt.replace(/\"/g, '""') + '"';
        },
        pluralize: function pluralize(count, singular, plural) {
            if (count === 1) return count + ' ' + singular;
            return count + ' ' + plural;
        },
        stringInterpolate: function stringInterpolate(txt, o) {
            return txt.replace(/{([^{}]+)}/g, function(a, b) {
                var r = o[b];
                return u.isString(r) || u.isNumber(r) ? r : a;
            });
        },
        findMatches: function findMatches(txt, re) {
            var matches = void 0;
            txt.replace(re, function(string) {
                var _ref;
                if (!matches) matches = [];
                matches.push({
                    string: string,
                    offset: (_ref = (arguments.length <= 1 ? 0 : arguments.length - 1) - 2 + 1, arguments.length <= _ref ? undefined : arguments[_ref])
                });
            });
            return matches;
        },
        wrapMatches: function wrapMatches(txt, matches, className) {
            var r = '', cursor = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
            try {
                for (var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var match = _step.value;
                    r += u.htmlEncode(txt.substring(cursor, match.offset)) + '<span class="' + className + '">' + u.htmlEncode(match.string) + '</span>';
                    cursor = match.offset + match.string.length;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            r += u.htmlEncode(txt.substring(cursor));
            return r;
        }
    };
    exports.default = u;
}, function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    var _util = __webpack_require__(0);
    var _util2 = _interopRequireDefault(_util);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    var BrowserAPI = {
        WINDOW_NONE: chrome.windows.WINDOW_ID_NONE,
        WINDOW_CURRENT: chrome.windows.WINDOW_ID_CURRENT,
        WINDOW_NEW: -100,
        setWindowFocus: function setWindowFocus(wins, focusedWid) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
            try {
                for (var _iterator = wins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var win = _step.value;
                    win.focused = win.id === focusedWid;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return wins;
        },
        isAdminTab: function isAdminTab(tab) {
            return tab.url && (tab.url.startsWith('chrome:') || tab.url.startsWith('chrome-devtools:') || BrowserAPI.isBookmarkManagerTab(tab));
        },
        isNewTab: function isNewTab(tab) {
            return /^chrome\:\/\/newtab\/?$/.test(tab.url);
        },
        isBookmarkManagerTab: function isBookmarkManagerTab(tab) {
            return tab.url && (tab.url.startsWith('chrome-extension://eemcgdkfndhakfknompkggombfjjjeno') || tab.url.startsWith('chrome://bookmarks/'));
        },
        compareTabs: function compareTabs(tab1, tab2) {
            return tab1.url === tab2.url && (tab1.selected === tab2.selected || tab1.active === tab2.active) && tab1.pinned === tab2.pinned && tab1.incognito === tab2.incognito;
        },
        getWindow: function getWindow(wid, cb) {
            chrome.windows.get(wid, cb);
        },
        extensionId: function extensionId() {
            return chrome.i18n.getMessage('@@extension_id');
        },
        getWindowAndTabs: function getWindowAndTabs(w, cb) {
            chrome.windows.get(w, {
                populate: true
            }, cb);
        },
        getAllWindows: function getAllWindows(opts, cb) {
            if (_util2.default.isFunction(opts)) {
                cb = opts;
                opts = null;
            }
            chrome.windows.getAll(undefined, opts && opts.rotate ? function(wins) {
                rotateWins(wins, cb);
            } : cb);
        },
        getAllWindowsAndTabs: function getAllWindowsAndTabs(opts, cb) {
            if (_util2.default.isFunction(opts)) {
                cb = opts;
                opts = null;
            }
            chrome.windows.getAll({
                populate: true
            }, opts && opts.rotate ? function(wins) {
                rotateWins(wins, cb);
            } : cb);
        },
        getCurrentWindow: function getCurrentWindow(cb) {
            chrome.windows.getCurrent(cb);
        },
        getCurrentWindowAndTabs: function getCurrentWindowAndTabs(cb) {
            if (cb) {
                chrome.windows.getCurrent({
                    populate: true
                }, cb);
            }
        },
        focusWindow: function focusWindow(wid, cb) {
            chrome.windows.update(wid, {
                focused: true
            }, cb);
        },
        activateTab: function activateTab(t, cb) {
            chrome.tabs.update(_util2.default.isObject(t) ? t.id : t, {
                active: true
            }, cb);
        },
        activateFocusTab: function activateFocusTab(t, cb) {
            BrowserAPI.focusWindow(t.windowId, function() {
                BrowserAPI.activateTab(t.id, cb);
            });
        },
        findTab: function findTab(q, cb) {
            if (cb) {
                if (q.id != null) {
                    return chrome.tabs.get(q.id, function(t) {
                        cb(BrowserAPI.matchTab(t, q) ? t : null);
                    });
                }
                BrowserAPI.getCurrentWindowAndTabs(function(cwin) {
                    var j, tabs = cwin.tabs;
                    for (j = 0; j < tabs.length; j++) {
                        if (BrowserAPI.matchTab(tabs[j], q)) {
                            return cb(tabs[j]);
                        }
                    }
                    BrowserAPI.getAllWindowsAndTabs(function(wins) {
                        var i;
                        for (i = 0; i < wins.length; i++) {
                            if (wins[i].id !== cwin.id) {
                                tabs = wins[i].tabs;
                                for (j = 0; j < tabs.length; j++) {
                                    if (BrowserAPI.matchTab(tabs[j], q)) {
                                        return cb(tabs[j]);
                                    }
                                }
                            }
                        }
                        cb(null);
                    });
                });
            }
        },
        matchTab: function matchTab(t, q) {
            if (!t || !q || q.pinned != null && !!q.pinned !== !!t.pinned || q.active != null && !!q.active !== !!t.active || q.incognito != null && !!q.incognito !== !!t.incognito || q.id != null && q.id !== t.id || q.url != null && (t.url == null || q.url.replace(/\/$/, '') !== t.url.replace(/\/$/, ''))) {
                return false;
            }
            return true;
        },
        navigateTab: function navigateTab(opts, incognitoRejectCb) {
            if (BrowserAPI.isAdminTab(opts) && !BrowserAPI.isNewTab(opts)) {
                opts.incognito = false;
            }
            chrome.extension.isAllowedIncognitoAccess(function(allow) {
                if (!allow && !!opts.incognito) {
                    return incognitoRejectCb && incognitoRejectCb();
                }
                BrowserAPI.findTab(_util2.default.pick(opts, [ 'id', 'url' ], [ 'pinned', 'incognito' ]), function(t) {
                    if (t) {
                        return BrowserAPI.activateFocusTab(t);
                    }
                    BrowserAPI.getCurrentWindow(function(w) {
                        var newTabOpts = _util2.default.pick(opts, [ 'url' ], [ 'pinned', 'active' ]);
                        if (!!w.incognito === !!opts.incognito) {
                            w.focused = !!opts.focused;
                            return BrowserAPI.openTab(newTabOpts, w);
                        }
                        BrowserAPI.getAllWindows(function(wins) {
                            for (var i = 0; i < wins.length; i++) {
                                if (!!wins[i].incognito === !!opts.incognito) {
                                    wins[i].focused = !!opts.focused;
                                    return BrowserAPI.openTab(newTabOpts, wins[i]);
                                }
                            }
                            BrowserAPI.openTab(newTabOpts, {
                                id: BrowserAPI.WINDOW_NEW,
                                incognito: !!opts.incognito,
                                focused: !!opts.focused
                            });
                        });
                    });
                });
            });
        },
        openTab: function openTab(t, w, cb) {
            var requiresSpecialHandling;
            if (arguments.length < 2 || _util2.default.isFunction(w)) {
                cb = w;
                w = t.windowId == null ? BrowserAPI.WINDOW_CURRENT : t.windowId;
            }
            if (_util2.default.isNumber(w)) {
                if (w === BrowserAPI.WINDOW_NEW) {
                    return BrowserAPI.openTab(t, {
                        id: BrowserAPI.WINDOW_NEW,
                        incognito: !!t.incognito
                    }, cb);
                }
                if (w === BrowserAPI.WINDOW_CURRENT) {
                    return BrowserAPI.getCurrentWindow(function(w) {
                        if (chrome.extension.lastError) {
                            console.error('[SB.BrowserAPI.openTab] Unable to get current window');
                            console.error(chrome.extension.lastError.message);
                            return cb && cb();
                        }
                        BrowserAPI.openTab(t, w, cb);
                    });
                }
                return BrowserAPI.getWindow(w, function(w) {
                    if (chrome.extension.lastError) {
                        console.error('[SB.BrowserAPI.openTab] Unable to get window');
                        console.error(chrome.extension.lastError.message);
                        return cb && cb();
                    }
                    BrowserAPI.openTab(t, w, cb);
                });
            }
            if (!w) {
                console.error('[SB.BrowserAPI.openTab] window not specified');
                return cb && cb();
            }
            if (w.id === BrowserAPI.WINDOW_NEW) {
                var wopts = _util2.default.pick(w, [ 'state', 'type' ], [ 'incognito' ]);
                if (wopts.state === 'minimized') {
                    if (w.focused) {
                        wopts.state = 'normal';
                        wopts.focused = true;
                    }
                } else {
                    wopts.focused = !!w.focused;
                }
                if (wopts.state !== 'minimized' && wopts.state !== 'maximized' && wopts.state !== 'fullscreen') {
                    wopts.left = w.left;
                    wopts.top = w.top;
                    wopts.width = w.width;
                    wopts.height = w.height;
                }
                requiresSpecialHandling = wopts.incognito && t.url.startsWith('chrome-extension://');
                if (!requiresSpecialHandling && t.url != null) {
                    wopts.url = t.url;
                }
                return BrowserAPI.openWindow(wopts, function(w) {
                    if (chrome.extension.lastError) {
                        console.error('[SB.BrowserAPI.openTab] Unable to open window');
                        console.error(chrome.extension.lastError.message);
                        return cb && cb();
                    }
                    if (!!t.pinned || requiresSpecialHandling) {
                        var o = {};
                        if (!!t.pinned) {
                            o.pinned = true;
                        }
                        if (requiresSpecialHandling) {
                            o.url = t.url;
                        }
                        return chrome.tabs.update(w.tabs[0].id, o, cb);
                    }
                    cb && cb(w.tabs[0]);
                });
            }
            var newTabOpts = _util2.default.pick(t, [ 'index' ], [ 'active', 'pinned' ]);
            newTabOpts.windowId = w.id;
            requiresSpecialHandling = w.incognito && t.url.startsWith('chrome-extension://');
            if (!requiresSpecialHandling && t.url != null) {
                newTabOpts.url = t.url;
            }
            chrome.tabs.create(newTabOpts, function(t2) {
                if (chrome.extension.lastError) {
                    console.error('[SB.BrowserAPI.openTab] Unable to create tab');
                    console.error(chrome.extension.lastError.message);
                    return cb && cb();
                }
                if (!!w.focused) {
                    BrowserAPI.focusWindow(t2.windowId);
                }
                if (requiresSpecialHandling) {
                    return chrome.tabs.update(t2.id, {
                        url: t.url
                    }, cb);
                }
                cb && cb(t2);
            });
        },
        openWindow: function openWindow(o, cb) {
            chrome.windows.create(o, cb);
        },
        closeTab: function closeTab(id, cb) {
            chrome.tabs.remove(id, cb);
        },
        closeWindow: function closeWindow(id, cb) {
            chrome.windows.remove(id, cb);
        },
        getBackgroundPage: function getBackgroundPage() {
            return chrome.extension.getBackgroundPage();
        },
        getBackgroundAPI: function getBackgroundAPI() {
            var bg = BrowserAPI.getBackgroundPage();
            if (bg) return bg.getAPI && bg.getAPI();
        },
        getURL: function getURL(path) {
            return chrome.extension.getURL(path);
        },
        getViews: function getViews(opts) {
            return chrome.extension.getViews(opts);
        },
        getI18nMessage: function getI18nMessage(m, subs) {
            return chrome.i18n.getMessage(m, subs);
        },
        setBrowserIcon: function setBrowserIcon(inIconFilename19x19, inIconFilename38x38) {
            var p;
            if (inIconFilename38x38) {
                p = {
                    '19': '/images/logo/' + inIconFilename19x19,
                    '38': '/images/logo/' + inIconFilename38x38
                };
            } else {
                p = '/images/logo/' + inIconFilename19x19;
            }
            chrome.browserAction.setIcon({
                path: p
            });
        }
    };
    function rotateWins(wins, cb) {
        BrowserAPI.getCurrentWindow(function(cWin) {
            var cWinIdx = -1, cWinId = cWin.id;
            if (!wins.length || wins[0].id === cWinId) {
                return cb(wins);
            }
            var i, arr = [];
            for (i = 0; i < wins.length; i++) {
                if (cWinIdx === -1 && wins[i].id === cWinId) {
                    cWinIdx = i;
                }
                if (cWinIdx > -1) {
                    arr.push(wins[i]);
                }
            }
            for (i = 0; i < cWinIdx; i++) {
                arr.push(wins[i]);
            }
            cb(arr);
        });
    }
    exports.default = BrowserAPI;
}, function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    var _util = __webpack_require__(0);
    var _util2 = _interopRequireDefault(_util);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    var du = {
        toggleClass: function toggleClass(el, className, add) {
            el.classList[add ? 'add' : 'remove'](className);
        },
        isEnabled: function isEnabled(el) {
            return el.getAttribute('disabled') === null;
        },
        disable: function disable(el) {
            if (!el) return;
            if (_util2.default.isArray(el)) {
                return el.forEach(function(el) {
                    return du.disable(el);
                });
            }
            el.setAttribute('disabled', 'disabled');
        },
        enable: function enable(el) {
            if (!el) return;
            if (_util2.default.isArray(el)) {
                return el.forEach(function(el) {
                    return du.enable(el);
                });
            }
            el.removeAttribute('disabled');
        },
        toggleEnable: function toggleEnable(el, enable) {
            if (enable) {
                du.enable(el);
            } else {
                du.disable(el);
            }
        },
        selectElementContents: function selectElementContents(el) {
            el.focus();
            var range = document.createRange();
            range.selectNodeContents(el);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        },
        getDevicePixelRatio: function getDevicePixelRatio() {
            return window.devicePixelRatio || 1;
        },
        os: function() {
            var appver = navigator.appVersion;
            return appver.includes('Win') && 'Windows' || appver.includes('Mac') && 'MacOS' || appver.includes('X11') && 'UNIX' || appver.includes('Linux') && 'Linux' || '(unknown)';
        }(),
        makeQueryFunction: function makeQueryFunction(w) {
            w = w || window;
            return function findEl(id, startEl) {
                if (!id) return;
                if (!startEl) return w.document.getElementById(id);
                if (startEl.hasChildNodes()) {
                    var foundEl = void 0;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = startEl.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var child = _step.value;
                            if (child.id === id) return child;
                            if (foundEl = findEl(id, child)) return foundEl;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            };
        },
        createElement: function createElement(tag, id, styleOrClassName, html) {
            var el = document.createElement(tag);
            if (id) el.id = id;
            if (_util2.default.isString(styleOrClassName)) {
                if (styleOrClassName.includes(':')) {
                    el.setAttribute('style', styleOrClassName);
                } else if (styleOrClassName.trim()) {
                    el.className = styleOrClassName;
                }
            }
            if (_util2.default.isString(html) || _util2.default.isNumber(html)) {
                el.innerHTML = html;
            }
            return el;
        },
        isChildOf: function isChildOf(el, parent) {
            while (el) {
                if (el === parent) return true;
                el = el.parentNode;
            }
            return false;
        },
        isElementInDocument: function isElementInDocument(el, doc) {
            return du.isChildOf(el, doc || document);
        },
        isControlEl: function isControlEl(el) {
            switch (_util2.default.type(el)) {
              case 'htmlinputelement':
              case 'htmltextareaelement':
              case 'htmlselectelement':
                return true;
            }
            return false;
        },
        initializeControl: function initializeControl(el, val) {
            if (el.type === 'checkbox') {
                el.checked = val;
            } else if (el.type === 'radio') {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;
                try {
                    for (var _iterator2 = document.getElementsByName(el.name)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var radio = _step2.value;
                        if (radio.value == val) {
                            radio.checked = true;
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            } else {
                el.value = val;
            }
            el.dataset.init = val;
        },
        getControlValue: function getControlValue(el) {
            if (du.isControlEl(el)) {
                if (el.type === 'checkbox') {
                    return el.checked;
                } else if (el.type === 'radio') {
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;
                    try {
                        for (var _iterator3 = el.ownerDocument.getElementsByName(el.name)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var radio = _step3.value;
                            if (radio.checked) return radio.value;
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                } else {
                    return el.value;
                }
            }
        },
        getElementMetrics: function getElementMetrics(el, intendedParent) {
            if (el) {
                if (!intendedParent) {
                    intendedParent = du.isElementInDocument(el) ? el.parentNode : document.body;
                }
                intendedParent.appendChild(el = el.cloneNode(true));
                var savePaddingTop = el.style.paddingTop, savePaddingBottom = el.style.paddingBottom, saveBorderTopWidth = el.style.borderTopWidth, saveBorderBottomWidth = el.style.borderBottomWidth;
                var totalHeight = el.getBoundingClientRect().height;
                el.style.paddingTop = '0';
                var paddingTop = totalHeight - el.getBoundingClientRect().height;
                el.style.borderTopWidth = '0';
                var borderTopWidth = totalHeight - el.getBoundingClientRect().height - paddingTop;
                el.style.paddingBottom = '0';
                var paddingBottom = totalHeight - el.getBoundingClientRect().height - paddingTop - borderTopWidth;
                el.style.borderBottomWidth = '0';
                var borderBottomWidth = totalHeight - el.getBoundingClientRect().height - paddingTop - borderTopWidth - paddingBottom;
                el.style.paddingTop = savePaddingTop;
                el.style.paddingBottom = savePaddingBottom;
                el.style.borderTopWidth = saveBorderTopWidth;
                el.style.borderBottomWidth = saveBorderBottomWidth;
                intendedParent.removeChild(el);
                return {
                    totalHeight: totalHeight,
                    height: totalHeight - paddingTop - paddingBottom - borderTopWidth - borderBottomWidth,
                    paddingTop: paddingTop,
                    paddingBottom: paddingBottom,
                    borderTopWidth: borderTopWidth,
                    borderBottomWidth: borderBottomWidth
                };
            }
        },
        animLoop: function animLoop(renderFunction, cb) {
            if (renderFunction) {
                var _loop = function _loop(now) {
                    if (now - lastFrame <= 0 || renderFunction(now - lastFrame)) {
                        window.requestAnimationFrame(_loop);
                        lastFrame = now;
                    } else {
                        cb && cb();
                    }
                };
                var lastFrame = +new Date();
                _loop(lastFrame);
            } else {
                cb && cb();
            }
        },
        getElementRemovalAnimationFunction: function getElementRemovalAnimationFunction(elArrays, speed, opacityAnim, isLinear, finalCSSClasses, cb) {
            if (elArrays && elArrays.length) {
                speed = speed || 250;
                opacityAnim = opacityAnim || 'pop';
                if (document.webkitHidden) {
                    isLinear = false;
                    opacityAnim = 'none';
                }
                var el = void 0, metrics = void 0, elementInfos = [], finalCSSClassesIdx = 0;
                for (var i = 0; i < elArrays.length; i++) {
                    for (var j = 0; j < elArrays[i].length; j++) {
                        if ((el = elArrays[i][j]) && du.isElementInDocument(el)) {
                            metrics = du.getElementMetrics(el);
                            if (metrics.totalHeight > 0) {
                                elementInfos.push({
                                    element: el,
                                    height: el.style.height,
                                    paddingTop: el.style.paddingTop,
                                    paddingBottom: el.style.paddingBottom,
                                    borderTopWidth: el.style.borderTopWidth,
                                    borderBottomWidth: el.style.borderBottomWidth,
                                    overflowY: el.style.getPropertyValue('overflow-y'),
                                    opacity: el.style.opacity,
                                    metrics: metrics,
                                    speed: speed / metrics.totalHeight,
                                    totalElementHeight: metrics.totalHeight,
                                    stopAnimation: false
                                });
                                if (finalCSSClasses && finalCSSClasses.length) {
                                    elementInfos[elementInfos.length - 1]['finalCssClass'] = finalCSSClasses[finalCSSClassesIdx];
                                    if (finalCSSClassesIdx + 1 < finalCSSClasses.length) {
                                        finalCSSClassesIdx++;
                                    }
                                }
                                el.style.setProperty('overflow-y', 'hidden');
                                el.style.borderTopWidth = metrics.borderTopWidth + 'px';
                                el.style.borderBottomWidth = metrics.borderBottomWidth + 'px';
                                el.style.paddingTop = metrics.paddingTop + 'px';
                                el.style.paddingBottom = metrics.paddingBottom + 'px';
                                el.style.height = metrics.height + 'px';
                                if (opacityAnim == 'pop') {
                                    el.classList.add('transitionedInvisibility');
                                }
                            } else {
                                el.parentNode.removeChild(el);
                            }
                        }
                    }
                }
                if (elementInfos.length) {
                    var stopAnimation_all = true, overallSpeed = 0;
                    if (isLinear) {
                        for (var i = 0; i < elementInfos.length; i++) {
                            overallSpeed += elementInfos[i].metrics.totalHeight;
                        }
                        overallSpeed = speed / overallSpeed;
                    }
                    return function(deltaT) {
                        var adjustment = void 0;
                        if (isLinear) {
                            adjustment = deltaT / overallSpeed;
                        } else {
                            stopAnimation_all = true;
                        }
                        var elementInfo = void 0, style = void 0, adjustmentSurplus = 0;
                        for (var i = 0; i < elementInfos.length; i++) {
                            elementInfo = elementInfos[i];
                            if (!elementInfo.stopAnimation) {
                                if (!isLinear) {
                                    adjustment = deltaT / elementInfo.speed;
                                }
                                adjustment = parseFloat(adjustment.toFixed(10)) + adjustmentSurplus;
                                elementInfo.totalElementHeight -= adjustment;
                                style = elementInfo.element.style;
                                if ((elementInfo.stopAnimation = elementInfo.totalElementHeight <= 0) || document.webkitHidden) {
                                    if (elementInfo.finalCssClass) {
                                        style.height = elementInfo.height;
                                        style.paddingTop = elementInfo.paddingTop;
                                        style.paddingBottom = elementInfo.paddingBottom;
                                        style.borderTopWidth = elementInfo.borderTopWidth;
                                        style.borderBottomWidth = elementInfo.borderBottomWidth;
                                        style.setProperty('overflow-y', elementInfo.overflowY);
                                        style.opacity = elementInfo.opacity;
                                        elementInfo.element.classList.add(elementInfo.finalCssClass);
                                    } else {
                                        elementInfo.element.parentNode.removeChild(elementInfo.element);
                                    }
                                } else {
                                    if (opacityAnim == 'fade') {
                                        style.opacity = (elementInfo.opacity === '' ? 1 : elementInfo.opacity) * elementInfo.totalElementHeight / elementInfo.metrics.totalHeight;
                                    }
                                    if (adjustment > 0 && parseFloat(style.borderBottomWidth) > 0) {
                                        if (adjustment >= parseFloat(style.borderBottomWidth)) {
                                            adjustment -= parseFloat(style.borderBottomWidth);
                                            style.borderBottomWidth = '0';
                                        } else {
                                            style.borderBottomWidth = parseFloat(style.borderBottomWidth) - adjustment + 'px';
                                            adjustment = 0;
                                        }
                                    }
                                    if (adjustment > 0 && parseFloat(style.paddingBottom) > 0) {
                                        if (adjustment >= parseFloat(style.paddingBottom)) {
                                            adjustment -= parseFloat(style.paddingBottom);
                                            style.paddingBottom = '0';
                                        } else {
                                            style.paddingBottom = parseFloat(style.paddingBottom) - adjustment + 'px';
                                            adjustment = 0;
                                        }
                                    }
                                    if (adjustment > 0 && parseFloat(style.height) > 0) {
                                        if (adjustment >= parseFloat(style.height)) {
                                            adjustment -= parseFloat(style.height);
                                            style.height = '0';
                                        } else {
                                            style.height = parseFloat(style.height) - adjustment + 'px';
                                            adjustment = 0;
                                        }
                                    }
                                    if (adjustment > 0 && parseFloat(style.paddingTop) > 0) {
                                        if (adjustment >= parseFloat(style.paddingTop)) {
                                            adjustment -= parseFloat(style.paddingTop);
                                            style.paddingTop = '0';
                                        } else {
                                            style.paddingTop = parseFloat(style.paddingTop) - adjustment + 'px';
                                            adjustment = 0;
                                        }
                                    }
                                    if (adjustment > 0 && parseFloat(style.borderTopWidth) > 0) {
                                        if (adjustment >= parseFloat(style.borderTopWidth)) {
                                            adjustment -= parseFloat(style.borderTopWidth);
                                            style.borderTopWidth = '0';
                                        } else {
                                            style.borderTopWidth = parseFloat(style.borderTopWidth) - adjustment + 'px';
                                            adjustment = 0;
                                        }
                                    }
                                    adjustmentSurplus = adjustment;
                                }
                                if (isLinear) break;
                            }
                            if (!isLinear) {
                                stopAnimation_all = stopAnimation_all && elementInfo.stopAnimation;
                            }
                        }
                        if (document.webkitHidden || isLinear && i === elementInfos.length || !isLinear && stopAnimation_all) {
                            cb && cb();
                            return false;
                        }
                    };
                } else {
                    cb && cb();
                }
            } else {
                cb && cb();
            }
        },
        getElementInsertionAnimationFunction: function getElementInsertionAnimationFunction(elArrays, parent, speed, insertBeforeNodes, opacityAnim, isLinear, cb) {
            if (elArrays && elArrays.length && parent) {
                speed = speed || 150;
                opacityAnim = opacityAnim || 'pop';
                if (document.webkitHidden) {
                    isLinear = false;
                    opacityAnim = 'none';
                }
                var el = void 0, metrics = void 0, isDOMElement = void 0, elementInfos = [], insertBeforeIndex = 0;
                for (var i = 0; i < elArrays.length; i++) {
                    for (var j = 0; j < elArrays[i].length; j++) {
                        if (el = elArrays[i][j]) {
                            metrics = du.getElementMetrics(el, parent);
                            isDOMElement = du.isElementInDocument(el);
                            if (metrics.totalHeight > 0) {
                                elementInfos.push({
                                    element: el,
                                    height: el.style.height,
                                    paddingTop: el.style.paddingTop,
                                    paddingBottom: el.style.paddingBottom,
                                    borderTopWidth: el.style.borderTopWidth,
                                    borderBottomWidth: el.style.borderBottomWidth,
                                    overflowY: el.style.getPropertyValue('overflow-y'),
                                    opacity: el.style.opacity,
                                    metrics: metrics,
                                    speed: speed / metrics.totalHeight,
                                    isDOMElement: isDOMElement,
                                    totalElementHeight: 0,
                                    stopAnimation: false
                                });
                                el.style.setProperty('overflow-y', 'hidden');
                                el.style.height = '0';
                                el.style.paddingTop = '0';
                                el.style.paddingBottom = '0';
                                el.style.borderTopWidth = '0';
                                el.style.borderBottomWidth = '0';
                                if (opacityAnim == 'fade' || opacityAnim == 'pop') {
                                    el.style.opacity = '0';
                                }
                            }
                            if (!isDOMElement) {
                                if (insertBeforeNodes && insertBeforeNodes.length) {
                                    parent.insertBefore(el, insertBeforeNodes[insertBeforeIndex]);
                                    if (insertBeforeIndex + 1 < insertBeforeNodes.length) {
                                        insertBeforeIndex++;
                                    }
                                } else {
                                    parent.appendChild(el);
                                }
                            }
                        }
                    }
                }
                if (elementInfos.length) {
                    var stopAnimation_all = true, overallSpeed = 0;
                    if (isLinear) {
                        for (var i = 0; i < elementInfos.length; i++) {
                            overallSpeed += elementInfos[i].metrics.totalHeight;
                        }
                        overallSpeed = speed / overallSpeed;
                    }
                    return function(deltaT) {
                        var adjustment = void 0;
                        if (isLinear) {
                            adjustment = deltaT / overallSpeed;
                        } else {
                            stopAnimation_all = true;
                        }
                        var elementInfo = void 0, style = void 0, adjustmentSurplus = 0;
                        for (var i = 0; i < elementInfos.length; i++) {
                            elementInfo = elementInfos[i];
                            if (!elementInfo.stopAnimation) {
                                if (!isLinear) {
                                    adjustment = deltaT / elementInfo.speed;
                                }
                                adjustment = parseFloat(adjustment.toFixed(10)) + adjustmentSurplus;
                                elementInfo.totalElementHeight += adjustment;
                                style = elementInfo.element.style;
                                if ((elementInfo.stopAnimation = elementInfo.totalElementHeight > elementInfo.metrics.totalHeight) || document.webkitHidden) {
                                    style.height = elementInfo.height;
                                    style.paddingTop = elementInfo.paddingTop;
                                    style.paddingBottom = elementInfo.paddingBottom;
                                    style.borderTopWidth = elementInfo.borderTopWidth;
                                    style.borderBottomWidth = elementInfo.borderBottomWidth;
                                    style.setProperty('overflow-y', elementInfo.overflowY);
                                    style.opacity = elementInfo.opacity;
                                } else {
                                    if (opacityAnim == 'fade') {
                                        style.opacity = (elementInfo.opacity === '' ? 1 : elementInfo.opacity) * elementInfo.totalElementHeight / elementInfo.metrics.totalHeight;
                                    }
                                    if (adjustment > 0 && parseFloat(style.borderTopWidth) < elementInfo.metrics.borderTopWidth) {
                                        if (adjustment >= elementInfo.metrics.borderTopWidth - parseFloat(style.borderTopWidth)) {
                                            adjustment -= elementInfo.metrics.borderTopWidth - parseFloat(style.borderTopWidth);
                                            style.borderTopWidth = elementInfo.metrics.borderTopWidth + 'px';
                                        } else {
                                            style.borderTopWidth = parseFloat(style.borderTopWidth) + adjustment + 'px';
                                            adjustment = 0;
                                        }
                                    }
                                    if (adjustment > 0 && parseFloat(style.paddingTop) < elementInfo.metrics.paddingTop) {
                                        if (adjustment >= elementInfo.metrics.paddingTop - parseFloat(style.paddingTop)) {
                                            adjustment -= elementInfo.metrics.paddingTop - parseFloat(style.paddingTop);
                                            style.paddingTop = elementInfo.metrics.paddingTop + 'px';
                                        } else {
                                            style.paddingTop = parseFloat(style.paddingTop) + adjustment + 'px';
                                            adjustment = 0;
                                        }
                                    }
                                    if (adjustment > 0 && parseFloat(style.height) < elementInfo.metrics.height) {
                                        if (adjustment >= elementInfo.metrics.height - parseFloat(style.height)) {
                                            adjustment -= elementInfo.metrics.height - parseFloat(style.height);
                                            style.height = elementInfo.metrics.height + 'px';
                                        } else {
                                            style.height = parseFloat(style.height) + adjustment + 'px';
                                            adjustment = 0;
                                        }
                                    }
                                    if (adjustment > 0 && parseFloat(style.paddingBottom) < elementInfo.metrics.paddingBottom) {
                                        if (adjustment >= elementInfo.metrics.paddingBottom - parseFloat(style.paddingBottom)) {
                                            adjustment -= elementInfo.metrics.paddingBottom - parseFloat(style.paddingBottom);
                                            style.paddingBottom = elementInfo.metrics.paddingBottom + 'px';
                                        } else {
                                            style.paddingBottom = parseFloat(style.paddingBottom) + adjustment + 'px';
                                            adjustment = 0;
                                        }
                                    }
                                    if (adjustment > 0 && parseFloat(style.borderBottomWidth) < elementInfo.metrics.borderBottomWidth) {
                                        if (adjustment >= elementInfo.metrics.borderBottomWidth - parseFloat(style.borderBottomWidth)) {
                                            adjustment -= elementInfo.metrics.borderBottomWidth - parseFloat(style.borderBottomWidth);
                                            style.borderBottomWidth = elementInfo.metrics.borderBottomWidth + 'px';
                                        } else {
                                            style.borderBottomWidth = parseFloat(style.borderBottomWidth) + adjustment + 'px';
                                            adjustment = 0;
                                        }
                                    }
                                    adjustmentSurplus = adjustment;
                                }
                                if (isLinear) break;
                            }
                            if (!isLinear) {
                                stopAnimation_all = stopAnimation_all && elementInfo.stopAnimation;
                            }
                        }
                        if (document.webkitHidden || isLinear && i === elementInfos.length || !isLinear && stopAnimation_all) {
                            cb && cb();
                            return false;
                        }
                    };
                } else {
                    cb && cb();
                }
            } else {
                cb && cb();
            }
        }
    };
    exports.default = du;
}, function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    var BUFFER_SIZE = 64;
    var CRYPTO = window.crypto || window.msCrypto;
    var BUFFER = new Uint8Array(BUFFER_SIZE);
    var BUFFER_IDX = BUFFER_SIZE;
    var SYM = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var TOP = SYM.length + 1;
    var FACTOR = 0;
    while ((FACTOR + 1) * SYM.length < 257) {
        FACTOR++;
    }
    function xid() {
        return SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()] + SYM[ridx()];
    }
    function ridx() {
        if (BUFFER_IDX >= BUFFER_SIZE) {
            CRYPTO.getRandomValues(BUFFER);
            BUFFER_IDX = 0;
        }
        var idx = BUFFER[BUFFER_IDX++];
        for (var i = 1; i < TOP; i++) {
            if (idx < i * FACTOR) {
                return i - 1;
            }
        }
        return ridx();
    }
    exports.default = xid;
}, function(module, exports, __webpack_require__) {
    'use strict';
    (function(global, module) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
        };
        (function(undefined) {
            var moment, VERSION = '2.8.3', globalScope = typeof global !== 'undefined' ? global : this, oldGlobalMoment, round = Math.round, hasOwnProperty = Object.prototype.hasOwnProperty, i, YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, locales = {}, momentProperties = [], hasModule = typeof module !== 'undefined' && module.exports, aspNetJsonRegex = /^\/?Date\((\-?\d+)/i, aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, parseTokenOneOrTwoDigits = /\d\d?/, parseTokenOneToThreeDigits = /\d{1,3}/, parseTokenOneToFourDigits = /\d{1,4}/, parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, parseTokenDigits = /\d+/, parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, parseTokenT = /T/i, parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, parseTokenOrdinal = /\d{1,2}/, parseTokenOneDigit = /\d/, parseTokenTwoDigits = /\d\d/, parseTokenThreeDigits = /\d{3}/, parseTokenFourDigits = /\d{4}/, parseTokenSixDigits = /[+-]?\d{6}/, parseTokenSignedNumber = /[+-]?\d+/, isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, isoFormat = 'YYYY-MM-DDTHH:mm:ssZ', isoDates = [ [ 'YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/ ], [ 'YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/ ], [ 'GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/ ], [ 'GGGG-[W]WW', /\d{4}-W\d{2}/ ], [ 'YYYY-DDD', /\d{4}-\d{3}/ ] ], isoTimes = [ [ 'HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/ ], [ 'HH:mm:ss', /(T| )\d\d:\d\d:\d\d/ ], [ 'HH:mm', /(T| )\d\d:\d\d/ ], [ 'HH', /(T| )\d\d/ ] ], parseTimezoneChunker = /([\+\-]|\d\d)/gi, proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'), unitMillisecondFactors = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }, unitAliases = {
                ms: 'millisecond',
                s: 'second',
                m: 'minute',
                h: 'hour',
                d: 'day',
                D: 'date',
                w: 'week',
                W: 'isoWeek',
                M: 'month',
                Q: 'quarter',
                y: 'year',
                DDD: 'dayOfYear',
                e: 'weekday',
                E: 'isoWeekday',
                gg: 'weekYear',
                GG: 'isoWeekYear'
            }, camelFunctions = {
                dayofyear: 'dayOfYear',
                isoweekday: 'isoWeekday',
                isoweek: 'isoWeek',
                weekyear: 'weekYear',
                isoweekyear: 'isoWeekYear'
            }, formatFunctions = {}, relativeTimeThresholds = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, ordinalizeTokens = 'DDD w W M D d'.split(' '), paddedTokens = 'M D H h m s w W'.split(' '), formatTokenFunctions = {
                M: function M() {
                    return this.month() + 1;
                },
                MMM: function MMM(format) {
                    return this.localeData().monthsShort(this, format);
                },
                MMMM: function MMMM(format) {
                    return this.localeData().months(this, format);
                },
                D: function D() {
                    return this.date();
                },
                DDD: function DDD() {
                    return this.dayOfYear();
                },
                d: function d() {
                    return this.day();
                },
                dd: function dd(format) {
                    return this.localeData().weekdaysMin(this, format);
                },
                ddd: function ddd(format) {
                    return this.localeData().weekdaysShort(this, format);
                },
                dddd: function dddd(format) {
                    return this.localeData().weekdays(this, format);
                },
                w: function w() {
                    return this.week();
                },
                W: function W() {
                    return this.isoWeek();
                },
                YY: function YY() {
                    return leftZeroFill(this.year() % 100, 2);
                },
                YYYY: function YYYY() {
                    return leftZeroFill(this.year(), 4);
                },
                YYYYY: function YYYYY() {
                    return leftZeroFill(this.year(), 5);
                },
                YYYYYY: function YYYYYY() {
                    var y = this.year(), sign = y >= 0 ? '+' : '-';
                    return sign + leftZeroFill(Math.abs(y), 6);
                },
                gg: function gg() {
                    return leftZeroFill(this.weekYear() % 100, 2);
                },
                gggg: function gggg() {
                    return leftZeroFill(this.weekYear(), 4);
                },
                ggggg: function ggggg() {
                    return leftZeroFill(this.weekYear(), 5);
                },
                GG: function GG() {
                    return leftZeroFill(this.isoWeekYear() % 100, 2);
                },
                GGGG: function GGGG() {
                    return leftZeroFill(this.isoWeekYear(), 4);
                },
                GGGGG: function GGGGG() {
                    return leftZeroFill(this.isoWeekYear(), 5);
                },
                e: function e() {
                    return this.weekday();
                },
                E: function E() {
                    return this.isoWeekday();
                },
                a: function a() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), true);
                },
                A: function A() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), false);
                },
                H: function H() {
                    return this.hours();
                },
                h: function h() {
                    return this.hours() % 12 || 12;
                },
                m: function m() {
                    return this.minutes();
                },
                s: function s() {
                    return this.seconds();
                },
                S: function S() {
                    return toInt(this.milliseconds() / 100);
                },
                SS: function SS() {
                    return leftZeroFill(toInt(this.milliseconds() / 10), 2);
                },
                SSS: function SSS() {
                    return leftZeroFill(this.milliseconds(), 3);
                },
                SSSS: function SSSS() {
                    return leftZeroFill(this.milliseconds(), 3);
                },
                Z: function Z() {
                    var a = -this.zone(), b = '+';
                    if (a < 0) {
                        a = -a;
                        b = '-';
                    }
                    return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
                },
                ZZ: function ZZ() {
                    var a = -this.zone(), b = '+';
                    if (a < 0) {
                        a = -a;
                        b = '-';
                    }
                    return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
                },
                z: function z() {
                    return this.zoneAbbr();
                },
                zz: function zz() {
                    return this.zoneName();
                },
                X: function X() {
                    return this.unix();
                },
                Q: function Q() {
                    return this.quarter();
                }
            }, deprecations = {}, lists = [ 'months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin' ];
            function dfl(a, b, c) {
                switch (arguments.length) {
                  case 2:
                    return a != null ? a : b;

                  case 3:
                    return a != null ? a : b != null ? b : c;

                  default:
                    throw new Error('Implement me');
                }
            }
            function hasOwnProp(a, b) {
                return hasOwnProperty.call(a, b);
            }
            function defaultParsingFlags() {
                return {
                    empty: false,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: false,
                    invalidMonth: null,
                    invalidFormat: false,
                    userInvalidated: false,
                    iso: false
                };
            }
            function printMsg(msg) {
                if (moment.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
                    console.warn('Deprecation warning: ' + msg);
                }
            }
            function deprecate(msg, fn) {
                var firstTime = true;
                return extend(function() {
                    if (firstTime) {
                        printMsg(msg);
                        firstTime = false;
                    }
                    return fn.apply(this, arguments);
                }, fn);
            }
            function deprecateSimple(name, msg) {
                if (!deprecations[name]) {
                    printMsg(msg);
                    deprecations[name] = true;
                }
            }
            function padToken(func, count) {
                return function(a) {
                    return leftZeroFill(func.call(this, a), count);
                };
            }
            function ordinalizeToken(func, period) {
                return function(a) {
                    return this.localeData().ordinal(func.call(this, a), period);
                };
            }
            while (ordinalizeTokens.length) {
                i = ordinalizeTokens.pop();
                formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
            }
            while (paddedTokens.length) {
                i = paddedTokens.pop();
                formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
            }
            formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);
            function Locale() {}
            function Moment(config, skipOverflow) {
                if (skipOverflow !== false) {
                    checkOverflow(config);
                }
                copyConfig(this, config);
                this._d = new Date(+config._d);
            }
            function Duration(duration) {
                var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
                this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
                this._days = +days + weeks * 7;
                this._months = +months + quarters * 3 + years * 12;
                this._data = {};
                this._locale = moment.localeData();
                this._bubble();
            }
            function extend(a, b) {
                for (var i in b) {
                    if (hasOwnProp(b, i)) {
                        a[i] = b[i];
                    }
                }
                if (hasOwnProp(b, 'toString')) {
                    a.toString = b.toString;
                }
                if (hasOwnProp(b, 'valueOf')) {
                    a.valueOf = b.valueOf;
                }
                return a;
            }
            function copyConfig(to, from) {
                var i, prop, val;
                if (typeof from._isAMomentObject !== 'undefined') {
                    to._isAMomentObject = from._isAMomentObject;
                }
                if (typeof from._i !== 'undefined') {
                    to._i = from._i;
                }
                if (typeof from._f !== 'undefined') {
                    to._f = from._f;
                }
                if (typeof from._l !== 'undefined') {
                    to._l = from._l;
                }
                if (typeof from._strict !== 'undefined') {
                    to._strict = from._strict;
                }
                if (typeof from._tzm !== 'undefined') {
                    to._tzm = from._tzm;
                }
                if (typeof from._isUTC !== 'undefined') {
                    to._isUTC = from._isUTC;
                }
                if (typeof from._offset !== 'undefined') {
                    to._offset = from._offset;
                }
                if (typeof from._pf !== 'undefined') {
                    to._pf = from._pf;
                }
                if (typeof from._locale !== 'undefined') {
                    to._locale = from._locale;
                }
                if (momentProperties.length > 0) {
                    for (i in momentProperties) {
                        prop = momentProperties[i];
                        val = from[prop];
                        if (typeof val !== 'undefined') {
                            to[prop] = val;
                        }
                    }
                }
                return to;
            }
            function absRound(number) {
                if (number < 0) {
                    return Math.ceil(number);
                } else {
                    return Math.floor(number);
                }
            }
            function leftZeroFill(number, targetLength, forceSign) {
                var output = '' + Math.abs(number), sign = number >= 0;
                while (output.length < targetLength) {
                    output = '0' + output;
                }
                return (sign ? forceSign ? '+' : '' : '-') + output;
            }
            function positiveMomentsDifference(base, other) {
                var res = {
                    milliseconds: 0,
                    months: 0
                };
                res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
                if (base.clone().add(res.months, 'M').isAfter(other)) {
                    --res.months;
                }
                res.milliseconds = +other - +base.clone().add(res.months, 'M');
                return res;
            }
            function momentsDifference(base, other) {
                var res;
                other = makeAs(other, base);
                if (base.isBefore(other)) {
                    res = positiveMomentsDifference(base, other);
                } else {
                    res = positiveMomentsDifference(other, base);
                    res.milliseconds = -res.milliseconds;
                    res.months = -res.months;
                }
                return res;
            }
            function createAdder(direction, name) {
                return function(val, period) {
                    var dur, tmp;
                    if (period !== null && !isNaN(+period)) {
                        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                        tmp = val;
                        val = period;
                        period = tmp;
                    }
                    val = typeof val === 'string' ? +val : val;
                    dur = moment.duration(val, period);
                    addOrSubtractDurationFromMoment(this, dur, direction);
                    return this;
                };
            }
            function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
                var milliseconds = duration._milliseconds, days = duration._days, months = duration._months;
                updateOffset = updateOffset == null ? true : updateOffset;
                if (milliseconds) {
                    mom._d.setTime(+mom._d + milliseconds * isAdding);
                }
                if (days) {
                    rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
                }
                if (months) {
                    rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
                }
                if (updateOffset) {
                    moment.updateOffset(mom, days || months);
                }
            }
            function isArray(input) {
                return Object.prototype.toString.call(input) === '[object Array]';
            }
            function isDate(input) {
                return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
            }
            function compareArrays(array1, array2, dontConvert) {
                var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
                for (i = 0; i < len; i++) {
                    if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
                        diffs++;
                    }
                }
                return diffs + lengthDiff;
            }
            function normalizeUnits(units) {
                if (units) {
                    var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
                    units = unitAliases[units] || camelFunctions[lowered] || lowered;
                }
                return units;
            }
            function normalizeObjectUnits(inputObject) {
                var normalizedInput = {}, normalizedProp, prop;
                for (prop in inputObject) {
                    if (hasOwnProp(inputObject, prop)) {
                        normalizedProp = normalizeUnits(prop);
                        if (normalizedProp) {
                            normalizedInput[normalizedProp] = inputObject[prop];
                        }
                    }
                }
                return normalizedInput;
            }
            function makeList(field) {
                var count, setter;
                if (field.indexOf('week') === 0) {
                    count = 7;
                    setter = 'day';
                } else if (field.indexOf('month') === 0) {
                    count = 12;
                    setter = 'month';
                } else {
                    return;
                }
                moment[field] = function(format, index) {
                    var i, getter, method = moment._locale[field], results = [];
                    if (typeof format === 'number') {
                        index = format;
                        format = undefined;
                    }
                    getter = function getter(i) {
                        var m = moment().utc().set(setter, i);
                        return method.call(moment._locale, m, format || '');
                    };
                    if (index != null) {
                        return getter(index);
                    } else {
                        for (i = 0; i < count; i++) {
                            results.push(getter(i));
                        }
                        return results;
                    }
                };
            }
            function toInt(argumentForCoercion) {
                var coercedNumber = +argumentForCoercion, value = 0;
                if (coercedNumber !== 0 && isFinite(coercedNumber)) {
                    if (coercedNumber >= 0) {
                        value = Math.floor(coercedNumber);
                    } else {
                        value = Math.ceil(coercedNumber);
                    }
                }
                return value;
            }
            function _daysInMonth(year, month) {
                return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
            }
            function _weeksInYear(year, dow, doy) {
                return weekOfYear(moment([ year, 11, 31 + dow - doy ]), dow, doy).week;
            }
            function daysInYear(year) {
                return _isLeapYear(year) ? 366 : 365;
            }
            function _isLeapYear(year) {
                return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
            }
            function checkOverflow(m) {
                var overflow;
                if (m._a && m._pf.overflow === -2) {
                    overflow = m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH : m._a[DATE] < 1 || m._a[DATE] > _daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE : m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR : m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE : m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND : m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND : -1;
                    if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                        overflow = DATE;
                    }
                    m._pf.overflow = overflow;
                }
            }
            function _isValid(m) {
                if (m._isValid == null) {
                    m._isValid = !isNaN(m._d.getTime()) && m._pf.overflow < 0 && !m._pf.empty && !m._pf.invalidMonth && !m._pf.nullInput && !m._pf.invalidFormat && !m._pf.userInvalidated;
                    if (m._strict) {
                        m._isValid = m._isValid && m._pf.charsLeftOver === 0 && m._pf.unusedTokens.length === 0;
                    }
                }
                return m._isValid;
            }
            function normalizeLocale(key) {
                return key ? key.toLowerCase().replace('_', '-') : key;
            }
            function chooseLocale(names) {
                var i = 0, j, next, locale, split;
                while (i < names.length) {
                    split = normalizeLocale(names[i]).split('-');
                    j = split.length;
                    next = normalizeLocale(names[i + 1]);
                    next = next ? next.split('-') : null;
                    while (j > 0) {
                        locale = loadLocale(split.slice(0, j).join('-'));
                        if (locale) {
                            return locale;
                        }
                        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                            break;
                        }
                        j--;
                    }
                    i++;
                }
                return null;
            }
            function loadLocale(name) {
                var oldLocale = null;
                if (!locales[name] && hasModule) {
                    try {
                        oldLocale = moment.locale();
                        !function webpackMissingModule() {
                            var e = new Error('Cannot find module "./locale"');
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        }();
                        moment.locale(oldLocale);
                    } catch (e) {}
                }
                return locales[name];
            }
            function makeAs(input, model) {
                return model._isUTC ? moment(input).zone(model._offset || 0) : moment(input).local();
            }
            extend(Locale.prototype, {
                set: function set(config) {
                    var prop, i;
                    for (i in config) {
                        prop = config[i];
                        if (typeof prop === 'function') {
                            this[i] = prop;
                        } else {
                            this['_' + i] = prop;
                        }
                    }
                },
                _months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                months: function months(m) {
                    return this._months[m.month()];
                },
                _monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
                monthsShort: function monthsShort(m) {
                    return this._monthsShort[m.month()];
                },
                monthsParse: function monthsParse(monthName) {
                    var i, mom, regex;
                    if (!this._monthsParse) {
                        this._monthsParse = [];
                    }
                    for (i = 0; i < 12; i++) {
                        if (!this._monthsParse[i]) {
                            mom = moment.utc([ 2e3, i ]);
                            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                        }
                        if (this._monthsParse[i].test(monthName)) {
                            return i;
                        }
                    }
                },
                _weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                weekdays: function weekdays(m) {
                    return this._weekdays[m.day()];
                },
                _weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
                weekdaysShort: function weekdaysShort(m) {
                    return this._weekdaysShort[m.day()];
                },
                _weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
                weekdaysMin: function weekdaysMin(m) {
                    return this._weekdaysMin[m.day()];
                },
                weekdaysParse: function weekdaysParse(weekdayName) {
                    var i, mom, regex;
                    if (!this._weekdaysParse) {
                        this._weekdaysParse = [];
                    }
                    for (i = 0; i < 7; i++) {
                        if (!this._weekdaysParse[i]) {
                            mom = moment([ 2e3, 1 ]).day(i);
                            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                        }
                        if (this._weekdaysParse[i].test(weekdayName)) {
                            return i;
                        }
                    }
                },
                _longDateFormat: {
                    LT: 'h:mm A',
                    L: 'MM/DD/YYYY',
                    LL: 'MMMM D, YYYY',
                    LLL: 'MMMM D, YYYY LT',
                    LLLL: 'dddd, MMMM D, YYYY LT'
                },
                longDateFormat: function longDateFormat(key) {
                    var output = this._longDateFormat[key];
                    if (!output && this._longDateFormat[key.toUpperCase()]) {
                        output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(val) {
                            return val.slice(1);
                        });
                        this._longDateFormat[key] = output;
                    }
                    return output;
                },
                isPM: function isPM(input) {
                    return (input + '').toLowerCase().charAt(0) === 'p';
                },
                _meridiemParse: /[ap]\.?m?\.?/i,
                meridiem: function meridiem(hours, minutes, isLower) {
                    if (hours > 11) {
                        return isLower ? 'pm' : 'PM';
                    } else {
                        return isLower ? 'am' : 'AM';
                    }
                },
                _calendar: {
                    sameDay: '[Today at] LT',
                    nextDay: '[Tomorrow at] LT',
                    nextWeek: 'dddd [at] LT',
                    lastDay: '[Yesterday at] LT',
                    lastWeek: '[Last] dddd [at] LT',
                    sameElse: 'L'
                },
                calendar: function calendar(key, mom) {
                    var output = this._calendar[key];
                    return typeof output === 'function' ? output.apply(mom) : output;
                },
                _relativeTime: {
                    future: 'in %s',
                    past: '%s ago',
                    s: 'a few seconds',
                    m: 'a minute',
                    mm: '%d minutes',
                    h: 'an hour',
                    hh: '%d hours',
                    d: 'a day',
                    dd: '%d days',
                    M: 'a month',
                    MM: '%d months',
                    y: 'a year',
                    yy: '%d years'
                },
                relativeTime: function relativeTime(number, withoutSuffix, string, isFuture) {
                    var output = this._relativeTime[string];
                    return typeof output === 'function' ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
                },
                pastFuture: function pastFuture(diff, output) {
                    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
                    return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
                },
                ordinal: function ordinal(number) {
                    return this._ordinal.replace('%d', number);
                },
                _ordinal: '%d',
                preparse: function preparse(string) {
                    return string;
                },
                postformat: function postformat(string) {
                    return string;
                },
                week: function week(mom) {
                    return weekOfYear(mom, this._week.dow, this._week.doy).week;
                },
                _week: {
                    dow: 0,
                    doy: 6
                },
                _invalidDate: 'Invalid date',
                invalidDate: function invalidDate() {
                    return this._invalidDate;
                }
            });
            function removeFormattingTokens(input) {
                if (input.match(/\[[\s\S]/)) {
                    return input.replace(/^\[|\]$/g, '');
                }
                return input.replace(/\\/g, '');
            }
            function makeFormatFunction(format) {
                var array = format.match(formattingTokens), i, length;
                for (i = 0, length = array.length; i < length; i++) {
                    if (formatTokenFunctions[array[i]]) {
                        array[i] = formatTokenFunctions[array[i]];
                    } else {
                        array[i] = removeFormattingTokens(array[i]);
                    }
                }
                return function(mom) {
                    var output = '';
                    for (i = 0; i < length; i++) {
                        output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
                    }
                    return output;
                };
            }
            function formatMoment(m, format) {
                if (!m.isValid()) {
                    return m.localeData().invalidDate();
                }
                format = expandFormat(format, m.localeData());
                if (!formatFunctions[format]) {
                    formatFunctions[format] = makeFormatFunction(format);
                }
                return formatFunctions[format](m);
            }
            function expandFormat(format, locale) {
                var i = 5;
                function replaceLongDateFormatTokens(input) {
                    return locale.longDateFormat(input) || input;
                }
                localFormattingTokens.lastIndex = 0;
                while (i >= 0 && localFormattingTokens.test(format)) {
                    format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
                    localFormattingTokens.lastIndex = 0;
                    i -= 1;
                }
                return format;
            }
            function getParseRegexForToken(token, config) {
                var a, strict = config._strict;
                switch (token) {
                  case 'Q':
                    return parseTokenOneDigit;

                  case 'DDDD':
                    return parseTokenThreeDigits;

                  case 'YYYY':
                  case 'GGGG':
                  case 'gggg':
                    return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;

                  case 'Y':
                  case 'G':
                  case 'g':
                    return parseTokenSignedNumber;

                  case 'YYYYYY':
                  case 'YYYYY':
                  case 'GGGGG':
                  case 'ggggg':
                    return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;

                  case 'S':
                    if (strict) {
                        return parseTokenOneDigit;
                    }

                  case 'SS':
                    if (strict) {
                        return parseTokenTwoDigits;
                    }

                  case 'SSS':
                    if (strict) {
                        return parseTokenThreeDigits;
                    }

                  case 'DDD':
                    return parseTokenOneToThreeDigits;

                  case 'MMM':
                  case 'MMMM':
                  case 'dd':
                  case 'ddd':
                  case 'dddd':
                    return parseTokenWord;

                  case 'a':
                  case 'A':
                    return config._locale._meridiemParse;

                  case 'X':
                    return parseTokenTimestampMs;

                  case 'Z':
                  case 'ZZ':
                    return parseTokenTimezone;

                  case 'T':
                    return parseTokenT;

                  case 'SSSS':
                    return parseTokenDigits;

                  case 'MM':
                  case 'DD':
                  case 'YY':
                  case 'GG':
                  case 'gg':
                  case 'HH':
                  case 'hh':
                  case 'mm':
                  case 'ss':
                  case 'ww':
                  case 'WW':
                    return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;

                  case 'M':
                  case 'D':
                  case 'd':
                  case 'H':
                  case 'h':
                  case 'm':
                  case 's':
                  case 'w':
                  case 'W':
                  case 'e':
                  case 'E':
                    return parseTokenOneOrTwoDigits;

                  case 'Do':
                    return parseTokenOrdinal;

                  default:
                    a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
                    return a;
                }
            }
            function timezoneMinutesFromString(string) {
                string = string || '';
                var possibleTzMatches = string.match(parseTokenTimezone) || [], tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [], parts = (tzChunk + '').match(parseTimezoneChunker) || [ '-', 0, 0 ], minutes = +(parts[1] * 60) + toInt(parts[2]);
                return parts[0] === '+' ? -minutes : minutes;
            }
            function addTimeToArrayFromToken(token, input, config) {
                var a, datePartArray = config._a;
                switch (token) {
                  case 'Q':
                    if (input != null) {
                        datePartArray[MONTH] = (toInt(input) - 1) * 3;
                    }
                    break;

                  case 'M':
                  case 'MM':
                    if (input != null) {
                        datePartArray[MONTH] = toInt(input) - 1;
                    }
                    break;

                  case 'MMM':
                  case 'MMMM':
                    a = config._locale.monthsParse(input);
                    if (a != null) {
                        datePartArray[MONTH] = a;
                    } else {
                        config._pf.invalidMonth = input;
                    }
                    break;

                  case 'D':
                  case 'DD':
                    if (input != null) {
                        datePartArray[DATE] = toInt(input);
                    }
                    break;

                  case 'Do':
                    if (input != null) {
                        datePartArray[DATE] = toInt(parseInt(input, 10));
                    }
                    break;

                  case 'DDD':
                  case 'DDDD':
                    if (input != null) {
                        config._dayOfYear = toInt(input);
                    }
                    break;

                  case 'YY':
                    datePartArray[YEAR] = moment.parseTwoDigitYear(input);
                    break;

                  case 'YYYY':
                  case 'YYYYY':
                  case 'YYYYYY':
                    datePartArray[YEAR] = toInt(input);
                    break;

                  case 'a':
                  case 'A':
                    config._isPm = config._locale.isPM(input);
                    break;

                  case 'H':
                  case 'HH':
                  case 'h':
                  case 'hh':
                    datePartArray[HOUR] = toInt(input);
                    break;

                  case 'm':
                  case 'mm':
                    datePartArray[MINUTE] = toInt(input);
                    break;

                  case 's':
                  case 'ss':
                    datePartArray[SECOND] = toInt(input);
                    break;

                  case 'S':
                  case 'SS':
                  case 'SSS':
                  case 'SSSS':
                    datePartArray[MILLISECOND] = toInt(('0.' + input) * 1e3);
                    break;

                  case 'X':
                    config._d = new Date(parseFloat(input) * 1e3);
                    break;

                  case 'Z':
                  case 'ZZ':
                    config._useUTC = true;
                    config._tzm = timezoneMinutesFromString(input);
                    break;

                  case 'dd':
                  case 'ddd':
                  case 'dddd':
                    a = config._locale.weekdaysParse(input);
                    if (a != null) {
                        config._w = config._w || {};
                        config._w['d'] = a;
                    } else {
                        config._pf.invalidWeekday = input;
                    }
                    break;

                  case 'w':
                  case 'ww':
                  case 'W':
                  case 'WW':
                  case 'd':
                  case 'e':
                  case 'E':
                    token = token.substr(0, 1);

                  case 'gggg':
                  case 'GGGG':
                  case 'GGGGG':
                    token = token.substr(0, 2);
                    if (input) {
                        config._w = config._w || {};
                        config._w[token] = toInt(input);
                    }
                    break;

                  case 'gg':
                  case 'GG':
                    config._w = config._w || {};
                    config._w[token] = moment.parseTwoDigitYear(input);
                }
            }
            function dayOfYearFromWeekInfo(config) {
                var w, weekYear, week, weekday, dow, doy, temp;
                w = config._w;
                if (w.GG != null || w.W != null || w.E != null) {
                    dow = 1;
                    doy = 4;
                    weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
                    week = dfl(w.W, 1);
                    weekday = dfl(w.E, 1);
                } else {
                    dow = config._locale._week.dow;
                    doy = config._locale._week.doy;
                    weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
                    week = dfl(w.w, 1);
                    if (w.d != null) {
                        weekday = w.d;
                        if (weekday < dow) {
                            ++week;
                        }
                    } else if (w.e != null) {
                        weekday = w.e + dow;
                    } else {
                        weekday = dow;
                    }
                }
                temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);
                config._a[YEAR] = temp.year;
                config._dayOfYear = temp.dayOfYear;
            }
            function dateFromConfig(config) {
                var i, date, input = [], currentDate, yearToUse;
                if (config._d) {
                    return;
                }
                currentDate = currentDateArray(config);
                if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
                    dayOfYearFromWeekInfo(config);
                }
                if (config._dayOfYear) {
                    yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);
                    if (config._dayOfYear > daysInYear(yearToUse)) {
                        config._pf._overflowDayOfYear = true;
                    }
                    date = makeUTCDate(yearToUse, 0, config._dayOfYear);
                    config._a[MONTH] = date.getUTCMonth();
                    config._a[DATE] = date.getUTCDate();
                }
                for (i = 0; i < 3 && config._a[i] == null; ++i) {
                    config._a[i] = input[i] = currentDate[i];
                }
                for (;i < 7; i++) {
                    config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
                }
                config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
                if (config._tzm != null) {
                    config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
                }
            }
            function dateFromObject(config) {
                var normalizedInput;
                if (config._d) {
                    return;
                }
                normalizedInput = normalizeObjectUnits(config._i);
                config._a = [ normalizedInput.year, normalizedInput.month, normalizedInput.day, normalizedInput.hour, normalizedInput.minute, normalizedInput.second, normalizedInput.millisecond ];
                dateFromConfig(config);
            }
            function currentDateArray(config) {
                var now = new Date();
                if (config._useUTC) {
                    return [ now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() ];
                } else {
                    return [ now.getFullYear(), now.getMonth(), now.getDate() ];
                }
            }
            function makeDateFromStringAndFormat(config) {
                if (config._f === moment.ISO_8601) {
                    parseISO(config);
                    return;
                }
                config._a = [];
                config._pf.empty = true;
                var string = '' + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0;
                tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
                for (i = 0; i < tokens.length; i++) {
                    token = tokens[i];
                    parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
                    if (parsedInput) {
                        skipped = string.substr(0, string.indexOf(parsedInput));
                        if (skipped.length > 0) {
                            config._pf.unusedInput.push(skipped);
                        }
                        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                        totalParsedInputLength += parsedInput.length;
                    }
                    if (formatTokenFunctions[token]) {
                        if (parsedInput) {
                            config._pf.empty = false;
                        } else {
                            config._pf.unusedTokens.push(token);
                        }
                        addTimeToArrayFromToken(token, parsedInput, config);
                    } else if (config._strict && !parsedInput) {
                        config._pf.unusedTokens.push(token);
                    }
                }
                config._pf.charsLeftOver = stringLength - totalParsedInputLength;
                if (string.length > 0) {
                    config._pf.unusedInput.push(string);
                }
                if (config._isPm && config._a[HOUR] < 12) {
                    config._a[HOUR] += 12;
                }
                if (config._isPm === false && config._a[HOUR] === 12) {
                    config._a[HOUR] = 0;
                }
                dateFromConfig(config);
                checkOverflow(config);
            }
            function unescapeFormat(s) {
                return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
                    return p1 || p2 || p3 || p4;
                });
            }
            function regexpEscape(s) {
                return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            }
            function makeDateFromStringAndArray(config) {
                var tempConfig, bestMoment, scoreToBeat, i, currentScore;
                if (config._f.length === 0) {
                    config._pf.invalidFormat = true;
                    config._d = new Date(NaN);
                    return;
                }
                for (i = 0; i < config._f.length; i++) {
                    currentScore = 0;
                    tempConfig = copyConfig({}, config);
                    if (config._useUTC != null) {
                        tempConfig._useUTC = config._useUTC;
                    }
                    tempConfig._pf = defaultParsingFlags();
                    tempConfig._f = config._f[i];
                    makeDateFromStringAndFormat(tempConfig);
                    if (!_isValid(tempConfig)) {
                        continue;
                    }
                    currentScore += tempConfig._pf.charsLeftOver;
                    currentScore += tempConfig._pf.unusedTokens.length * 10;
                    tempConfig._pf.score = currentScore;
                    if (scoreToBeat == null || currentScore < scoreToBeat) {
                        scoreToBeat = currentScore;
                        bestMoment = tempConfig;
                    }
                }
                extend(config, bestMoment || tempConfig);
            }
            function parseISO(config) {
                var i, l, string = config._i, match = isoRegex.exec(string);
                if (match) {
                    config._pf.iso = true;
                    for (i = 0, l = isoDates.length; i < l; i++) {
                        if (isoDates[i][1].exec(string)) {
                            config._f = isoDates[i][0] + (match[6] || ' ');
                            break;
                        }
                    }
                    for (i = 0, l = isoTimes.length; i < l; i++) {
                        if (isoTimes[i][1].exec(string)) {
                            config._f += isoTimes[i][0];
                            break;
                        }
                    }
                    if (string.match(parseTokenTimezone)) {
                        config._f += 'Z';
                    }
                    makeDateFromStringAndFormat(config);
                } else {
                    config._isValid = false;
                }
            }
            function makeDateFromString(config) {
                parseISO(config);
                if (config._isValid === false) {
                    delete config._isValid;
                    moment.createFromInputFallback(config);
                }
            }
            function map(arr, fn) {
                var res = [], i;
                for (i = 0; i < arr.length; ++i) {
                    res.push(fn(arr[i], i));
                }
                return res;
            }
            function makeDateFromInput(config) {
                var input = config._i, matched;
                if (input === undefined) {
                    config._d = new Date();
                } else if (isDate(input)) {
                    config._d = new Date(+input);
                } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
                    config._d = new Date(+matched[1]);
                } else if (typeof input === 'string') {
                    makeDateFromString(config);
                } else if (isArray(input)) {
                    config._a = map(input.slice(0), function(obj) {
                        return parseInt(obj, 10);
                    });
                    dateFromConfig(config);
                } else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
                    dateFromObject(config);
                } else if (typeof input === 'number') {
                    config._d = new Date(input);
                } else {
                    moment.createFromInputFallback(config);
                }
            }
            function makeDate(y, m, d, h, M, s, ms) {
                var date = new Date(y, m, d, h, M, s, ms);
                if (y < 1970) {
                    date.setFullYear(y);
                }
                return date;
            }
            function makeUTCDate(y) {
                var date = new Date(Date.UTC.apply(null, arguments));
                if (y < 1970) {
                    date.setUTCFullYear(y);
                }
                return date;
            }
            function parseWeekday(input, locale) {
                if (typeof input === 'string') {
                    if (!isNaN(input)) {
                        input = parseInt(input, 10);
                    } else {
                        input = locale.weekdaysParse(input);
                        if (typeof input !== 'number') {
                            return null;
                        }
                    }
                }
                return input;
            }
            function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
                return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
            }
            function relativeTime(posNegDuration, withoutSuffix, locale) {
                var duration = moment.duration(posNegDuration).abs(), seconds = round(duration.as('s')), minutes = round(duration.as('m')), hours = round(duration.as('h')), days = round(duration.as('d')), months = round(duration.as('M')), years = round(duration.as('y')), args = seconds < relativeTimeThresholds.s && [ 's', seconds ] || minutes === 1 && [ 'm' ] || minutes < relativeTimeThresholds.m && [ 'mm', minutes ] || hours === 1 && [ 'h' ] || hours < relativeTimeThresholds.h && [ 'hh', hours ] || days === 1 && [ 'd' ] || days < relativeTimeThresholds.d && [ 'dd', days ] || months === 1 && [ 'M' ] || months < relativeTimeThresholds.M && [ 'MM', months ] || years === 1 && [ 'y' ] || [ 'yy', years ];
                args[2] = withoutSuffix;
                args[3] = +posNegDuration > 0;
                args[4] = locale;
                return substituteTimeAgo.apply({}, args);
            }
            function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
                var end = firstDayOfWeekOfYear - firstDayOfWeek, daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(), adjustedMoment;
                if (daysToDayOfWeek > end) {
                    daysToDayOfWeek -= 7;
                }
                if (daysToDayOfWeek < end - 7) {
                    daysToDayOfWeek += 7;
                }
                adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
                return {
                    week: Math.ceil(adjustedMoment.dayOfYear() / 7),
                    year: adjustedMoment.year()
                };
            }
            function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
                var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;
                d = d === 0 ? 7 : d;
                weekday = weekday != null ? weekday : firstDayOfWeek;
                daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
                dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;
                return {
                    year: dayOfYear > 0 ? year : year - 1,
                    dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
                };
            }
            function makeMoment(config) {
                var input = config._i, format = config._f;
                config._locale = config._locale || moment.localeData(config._l);
                if (input === null || format === undefined && input === '') {
                    return moment.invalid({
                        nullInput: true
                    });
                }
                if (typeof input === 'string') {
                    config._i = input = config._locale.preparse(input);
                }
                if (moment.isMoment(input)) {
                    return new Moment(input, true);
                } else if (format) {
                    if (isArray(format)) {
                        makeDateFromStringAndArray(config);
                    } else {
                        makeDateFromStringAndFormat(config);
                    }
                } else {
                    makeDateFromInput(config);
                }
                return new Moment(config);
            }
            moment = function moment(input, format, locale, strict) {
                var c;
                if (typeof locale === 'boolean') {
                    strict = locale;
                    locale = undefined;
                }
                c = {};
                c._isAMomentObject = true;
                c._i = input;
                c._f = format;
                c._l = locale;
                c._strict = strict;
                c._isUTC = false;
                c._pf = defaultParsingFlags();
                return makeMoment(c);
            };
            moment.suppressDeprecationWarnings = false;
            moment.createFromInputFallback = deprecate('moment construction falls back to js Date. This is ' + 'discouraged and will be removed in upcoming major ' + 'release. Please refer to ' + 'https://github.com/moment/moment/issues/1407 for more info.', function(config) {
                config._d = new Date(config._i);
            });
            function pickBy(fn, moments) {
                var res, i;
                if (moments.length === 1 && isArray(moments[0])) {
                    moments = moments[0];
                }
                if (!moments.length) {
                    return moment();
                }
                res = moments[0];
                for (i = 1; i < moments.length; ++i) {
                    if (moments[i][fn](res)) {
                        res = moments[i];
                    }
                }
                return res;
            }
            moment.min = function() {
                var args = [].slice.call(arguments, 0);
                return pickBy('isBefore', args);
            };
            moment.max = function() {
                var args = [].slice.call(arguments, 0);
                return pickBy('isAfter', args);
            };
            moment.utc = function(input, format, locale, strict) {
                var c;
                if (typeof locale === 'boolean') {
                    strict = locale;
                    locale = undefined;
                }
                c = {};
                c._isAMomentObject = true;
                c._useUTC = true;
                c._isUTC = true;
                c._l = locale;
                c._i = input;
                c._f = format;
                c._strict = strict;
                c._pf = defaultParsingFlags();
                return makeMoment(c).utc();
            };
            moment.unix = function(input) {
                return moment(input * 1e3);
            };
            moment.duration = function(input, key) {
                var duration = input, match = null, sign, ret, parseIso, diffRes;
                if (moment.isDuration(input)) {
                    duration = {
                        ms: input._milliseconds,
                        d: input._days,
                        M: input._months
                    };
                } else if (typeof input === 'number') {
                    duration = {};
                    if (key) {
                        duration[key] = input;
                    } else {
                        duration.milliseconds = input;
                    }
                } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
                    sign = match[1] === '-' ? -1 : 1;
                    duration = {
                        y: 0,
                        d: toInt(match[DATE]) * sign,
                        h: toInt(match[HOUR]) * sign,
                        m: toInt(match[MINUTE]) * sign,
                        s: toInt(match[SECOND]) * sign,
                        ms: toInt(match[MILLISECOND]) * sign
                    };
                } else if (!!(match = isoDurationRegex.exec(input))) {
                    sign = match[1] === '-' ? -1 : 1;
                    parseIso = function parseIso(inp) {
                        var res = inp && parseFloat(inp.replace(',', '.'));
                        return (isNaN(res) ? 0 : res) * sign;
                    };
                    duration = {
                        y: parseIso(match[2]),
                        M: parseIso(match[3]),
                        d: parseIso(match[4]),
                        h: parseIso(match[5]),
                        m: parseIso(match[6]),
                        s: parseIso(match[7]),
                        w: parseIso(match[8])
                    };
                } else if ((typeof duration === 'undefined' ? 'undefined' : _typeof(duration)) === 'object' && ('from' in duration || 'to' in duration)) {
                    diffRes = momentsDifference(moment(duration.from), moment(duration.to));
                    duration = {};
                    duration.ms = diffRes.milliseconds;
                    duration.M = diffRes.months;
                }
                ret = new Duration(duration);
                if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
                    ret._locale = input._locale;
                }
                return ret;
            };
            moment.version = VERSION;
            moment.defaultFormat = isoFormat;
            moment.ISO_8601 = function() {};
            moment.momentProperties = momentProperties;
            moment.updateOffset = function() {};
            moment.relativeTimeThreshold = function(threshold, limit) {
                if (relativeTimeThresholds[threshold] === undefined) {
                    return false;
                }
                if (limit === undefined) {
                    return relativeTimeThresholds[threshold];
                }
                relativeTimeThresholds[threshold] = limit;
                return true;
            };
            moment.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', function(key, value) {
                return moment.locale(key, value);
            });
            moment.locale = function(key, values) {
                var data;
                if (key) {
                    if (typeof values !== 'undefined') {
                        data = moment.defineLocale(key, values);
                    } else {
                        data = moment.localeData(key);
                    }
                    if (data) {
                        moment.duration._locale = moment._locale = data;
                    }
                }
                return moment._locale._abbr;
            };
            moment.defineLocale = function(name, values) {
                if (values !== null) {
                    values.abbr = name;
                    if (!locales[name]) {
                        locales[name] = new Locale();
                    }
                    locales[name].set(values);
                    moment.locale(name);
                    return locales[name];
                } else {
                    delete locales[name];
                    return null;
                }
            };
            moment.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', function(key) {
                return moment.localeData(key);
            });
            moment.localeData = function(key) {
                var locale;
                if (key && key._locale && key._locale._abbr) {
                    key = key._locale._abbr;
                }
                if (!key) {
                    return moment._locale;
                }
                if (!isArray(key)) {
                    locale = loadLocale(key);
                    if (locale) {
                        return locale;
                    }
                    key = [ key ];
                }
                return chooseLocale(key);
            };
            moment.isMoment = function(obj) {
                return obj instanceof Moment || obj != null && hasOwnProp(obj, '_isAMomentObject');
            };
            moment.isDuration = function(obj) {
                return obj instanceof Duration;
            };
            for (i = lists.length - 1; i >= 0; --i) {
                makeList(lists[i]);
            }
            moment.normalizeUnits = function(units) {
                return normalizeUnits(units);
            };
            moment.invalid = function(flags) {
                var m = moment.utc(NaN);
                if (flags != null) {
                    extend(m._pf, flags);
                } else {
                    m._pf.userInvalidated = true;
                }
                return m;
            };
            moment.parseZone = function() {
                return moment.apply(null, arguments).parseZone();
            };
            moment.parseTwoDigitYear = function(input) {
                return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
            };
            extend(moment.fn = Moment.prototype, {
                clone: function clone() {
                    return moment(this);
                },
                valueOf: function valueOf() {
                    return +this._d + (this._offset || 0) * 6e4;
                },
                unix: function unix() {
                    return Math.floor(+this / 1e3);
                },
                toString: function toString() {
                    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
                },
                toDate: function toDate() {
                    return this._offset ? new Date(+this) : this._d;
                },
                toISOString: function toISOString() {
                    var m = moment(this).utc();
                    if (0 < m.year() && m.year() <= 9999) {
                        return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
                    } else {
                        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
                    }
                },
                toArray: function toArray() {
                    var m = this;
                    return [ m.year(), m.month(), m.date(), m.hours(), m.minutes(), m.seconds(), m.milliseconds() ];
                },
                isValid: function isValid() {
                    return _isValid(this);
                },
                isDSTShifted: function isDSTShifted() {
                    if (this._a) {
                        return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
                    }
                    return false;
                },
                parsingFlags: function parsingFlags() {
                    return extend({}, this._pf);
                },
                invalidAt: function invalidAt() {
                    return this._pf.overflow;
                },
                utc: function utc(keepLocalTime) {
                    return this.zone(0, keepLocalTime);
                },
                local: function local(keepLocalTime) {
                    if (this._isUTC) {
                        this.zone(0, keepLocalTime);
                        this._isUTC = false;
                        if (keepLocalTime) {
                            this.add(this._dateTzOffset(), 'm');
                        }
                    }
                    return this;
                },
                format: function format(inputString) {
                    var output = formatMoment(this, inputString || moment.defaultFormat);
                    return this.localeData().postformat(output);
                },
                add: createAdder(1, 'add'),
                subtract: createAdder(-1, 'subtract'),
                diff: function diff(input, units, asFloat) {
                    var that = makeAs(input, this), zoneDiff = (this.zone() - that.zone()) * 6e4, diff, output, daysAdjust;
                    units = normalizeUnits(units);
                    if (units === 'year' || units === 'month') {
                        diff = (this.daysInMonth() + that.daysInMonth()) * 432e5;
                        output = (this.year() - that.year()) * 12 + (this.month() - that.month());
                        daysAdjust = this - moment(this).startOf('month') - (that - moment(that).startOf('month'));
                        daysAdjust -= (this.zone() - moment(this).startOf('month').zone() - (that.zone() - moment(that).startOf('month').zone())) * 6e4;
                        output += daysAdjust / diff;
                        if (units === 'year') {
                            output = output / 12;
                        }
                    } else {
                        diff = this - that;
                        output = units === 'second' ? diff / 1e3 : units === 'minute' ? diff / 6e4 : units === 'hour' ? diff / 36e5 : units === 'day' ? (diff - zoneDiff) / 864e5 : units === 'week' ? (diff - zoneDiff) / 6048e5 : diff;
                    }
                    return asFloat ? output : absRound(output);
                },
                from: function from(time, withoutSuffix) {
                    return moment.duration({
                        to: this,
                        from: time
                    }).locale(this.locale()).humanize(!withoutSuffix);
                },
                fromNow: function fromNow(withoutSuffix) {
                    return this.from(moment(), withoutSuffix);
                },
                calendar: function calendar(time) {
                    var now = time || moment(), sod = makeAs(now, this).startOf('day'), diff = this.diff(sod, 'days', true), format = diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
                    return this.format(this.localeData().calendar(format, this));
                },
                isLeapYear: function isLeapYear() {
                    return _isLeapYear(this.year());
                },
                isDST: function isDST() {
                    return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone();
                },
                day: function day(input) {
                    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    if (input != null) {
                        input = parseWeekday(input, this.localeData());
                        return this.add(input - day, 'd');
                    } else {
                        return day;
                    }
                },
                month: makeAccessor('Month', true),
                startOf: function startOf(units) {
                    units = normalizeUnits(units);
                    switch (units) {
                      case 'year':
                        this.month(0);

                      case 'quarter':
                      case 'month':
                        this.date(1);

                      case 'week':
                      case 'isoWeek':
                      case 'day':
                        this.hours(0);

                      case 'hour':
                        this.minutes(0);

                      case 'minute':
                        this.seconds(0);

                      case 'second':
                        this.milliseconds(0);
                    }
                    if (units === 'week') {
                        this.weekday(0);
                    } else if (units === 'isoWeek') {
                        this.isoWeekday(1);
                    }
                    if (units === 'quarter') {
                        this.month(Math.floor(this.month() / 3) * 3);
                    }
                    return this;
                },
                endOf: function endOf(units) {
                    units = normalizeUnits(units);
                    return this.startOf(units).add(1, units === 'isoWeek' ? 'week' : units).subtract(1, 'ms');
                },
                isAfter: function isAfter(input, units) {
                    units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
                    if (units === 'millisecond') {
                        input = moment.isMoment(input) ? input : moment(input);
                        return +this > +input;
                    } else {
                        return +this.clone().startOf(units) > +moment(input).startOf(units);
                    }
                },
                isBefore: function isBefore(input, units) {
                    units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
                    if (units === 'millisecond') {
                        input = moment.isMoment(input) ? input : moment(input);
                        return +this < +input;
                    } else {
                        return +this.clone().startOf(units) < +moment(input).startOf(units);
                    }
                },
                isSame: function isSame(input, units) {
                    units = normalizeUnits(units || 'millisecond');
                    if (units === 'millisecond') {
                        input = moment.isMoment(input) ? input : moment(input);
                        return +this === +input;
                    } else {
                        return +this.clone().startOf(units) === +makeAs(input, this).startOf(units);
                    }
                },
                min: deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function(other) {
                    other = moment.apply(null, arguments);
                    return other < this ? this : other;
                }),
                max: deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function(other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }),
                zone: function zone(input, keepLocalTime) {
                    var offset = this._offset || 0, localAdjust;
                    if (input != null) {
                        if (typeof input === 'string') {
                            input = timezoneMinutesFromString(input);
                        }
                        if (Math.abs(input) < 16) {
                            input = input * 60;
                        }
                        if (!this._isUTC && keepLocalTime) {
                            localAdjust = this._dateTzOffset();
                        }
                        this._offset = input;
                        this._isUTC = true;
                        if (localAdjust != null) {
                            this.subtract(localAdjust, 'm');
                        }
                        if (offset !== input) {
                            if (!keepLocalTime || this._changeInProgress) {
                                addOrSubtractDurationFromMoment(this, moment.duration(offset - input, 'm'), 1, false);
                            } else if (!this._changeInProgress) {
                                this._changeInProgress = true;
                                moment.updateOffset(this, true);
                                this._changeInProgress = null;
                            }
                        }
                    } else {
                        return this._isUTC ? offset : this._dateTzOffset();
                    }
                    return this;
                },
                zoneAbbr: function zoneAbbr() {
                    return this._isUTC ? 'UTC' : '';
                },
                zoneName: function zoneName() {
                    return this._isUTC ? 'Coordinated Universal Time' : '';
                },
                parseZone: function parseZone() {
                    if (this._tzm) {
                        this.zone(this._tzm);
                    } else if (typeof this._i === 'string') {
                        this.zone(this._i);
                    }
                    return this;
                },
                hasAlignedHourOffset: function hasAlignedHourOffset(input) {
                    if (!input) {
                        input = 0;
                    } else {
                        input = moment(input).zone();
                    }
                    return (this.zone() - input) % 60 === 0;
                },
                daysInMonth: function daysInMonth() {
                    return _daysInMonth(this.year(), this.month());
                },
                dayOfYear: function dayOfYear(input) {
                    var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
                    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
                },
                quarter: function quarter(input) {
                    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
                },
                weekYear: function weekYear(input) {
                    var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                    return input == null ? year : this.add(input - year, 'y');
                },
                isoWeekYear: function isoWeekYear(input) {
                    var year = weekOfYear(this, 1, 4).year;
                    return input == null ? year : this.add(input - year, 'y');
                },
                week: function week(input) {
                    var week = this.localeData().week(this);
                    return input == null ? week : this.add((input - week) * 7, 'd');
                },
                isoWeek: function isoWeek(input) {
                    var week = weekOfYear(this, 1, 4).week;
                    return input == null ? week : this.add((input - week) * 7, 'd');
                },
                weekday: function weekday(input) {
                    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return input == null ? weekday : this.add(input - weekday, 'd');
                },
                isoWeekday: function isoWeekday(input) {
                    return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
                },
                isoWeeksInYear: function isoWeeksInYear() {
                    return _weeksInYear(this.year(), 1, 4);
                },
                weeksInYear: function weeksInYear() {
                    var weekInfo = this.localeData()._week;
                    return _weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
                },
                get: function get(units) {
                    units = normalizeUnits(units);
                    return this[units]();
                },
                set: function set(units, value) {
                    units = normalizeUnits(units);
                    if (typeof this[units] === 'function') {
                        this[units](value);
                    }
                    return this;
                },
                locale: function locale(key) {
                    var newLocaleData;
                    if (key === undefined) {
                        return this._locale._abbr;
                    } else {
                        newLocaleData = moment.localeData(key);
                        if (newLocaleData != null) {
                            this._locale = newLocaleData;
                        }
                        return this;
                    }
                },
                lang: deprecate('moment().lang() is deprecated. Use moment().localeData() instead.', function(key) {
                    if (key === undefined) {
                        return this.localeData();
                    } else {
                        return this.locale(key);
                    }
                }),
                localeData: function localeData() {
                    return this._locale;
                },
                _dateTzOffset: function _dateTzOffset() {
                    return Math.round(this._d.getTimezoneOffset() / 15) * 15;
                }
            });
            function rawMonthSetter(mom, value) {
                var dayOfMonth;
                if (typeof value === 'string') {
                    value = mom.localeData().monthsParse(value);
                    if (typeof value !== 'number') {
                        return mom;
                    }
                }
                dayOfMonth = Math.min(mom.date(), _daysInMonth(mom.year(), value));
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
                return mom;
            }
            function rawGetter(mom, unit) {
                return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
            }
            function rawSetter(mom, unit, value) {
                if (unit === 'Month') {
                    return rawMonthSetter(mom, value);
                } else {
                    return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
                }
            }
            function makeAccessor(unit, keepTime) {
                return function(value) {
                    if (value != null) {
                        rawSetter(this, unit, value);
                        moment.updateOffset(this, keepTime);
                        return this;
                    } else {
                        return rawGetter(this, unit);
                    }
                };
            }
            moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
            moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
            moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
            moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
            moment.fn.date = makeAccessor('Date', true);
            moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
            moment.fn.year = makeAccessor('FullYear', true);
            moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));
            moment.fn.days = moment.fn.day;
            moment.fn.months = moment.fn.month;
            moment.fn.weeks = moment.fn.week;
            moment.fn.isoWeeks = moment.fn.isoWeek;
            moment.fn.quarters = moment.fn.quarter;
            moment.fn.toJSON = moment.fn.toISOString;
            function daysToYears(days) {
                return days * 400 / 146097;
            }
            function yearsToDays(years) {
                return years * 146097 / 400;
            }
            extend(moment.duration.fn = Duration.prototype, {
                _bubble: function _bubble() {
                    var milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data, seconds, minutes, hours, years = 0;
                    data.milliseconds = milliseconds % 1e3;
                    seconds = absRound(milliseconds / 1e3);
                    data.seconds = seconds % 60;
                    minutes = absRound(seconds / 60);
                    data.minutes = minutes % 60;
                    hours = absRound(minutes / 60);
                    data.hours = hours % 24;
                    days += absRound(hours / 24);
                    years = absRound(daysToYears(days));
                    days -= absRound(yearsToDays(years));
                    months += absRound(days / 30);
                    days %= 30;
                    years += absRound(months / 12);
                    months %= 12;
                    data.days = days;
                    data.months = months;
                    data.years = years;
                },
                abs: function abs() {
                    this._milliseconds = Math.abs(this._milliseconds);
                    this._days = Math.abs(this._days);
                    this._months = Math.abs(this._months);
                    this._data.milliseconds = Math.abs(this._data.milliseconds);
                    this._data.seconds = Math.abs(this._data.seconds);
                    this._data.minutes = Math.abs(this._data.minutes);
                    this._data.hours = Math.abs(this._data.hours);
                    this._data.months = Math.abs(this._data.months);
                    this._data.years = Math.abs(this._data.years);
                    return this;
                },
                weeks: function weeks() {
                    return absRound(this.days() / 7);
                },
                valueOf: function valueOf() {
                    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
                },
                humanize: function humanize(withSuffix) {
                    var output = relativeTime(this, !withSuffix, this.localeData());
                    if (withSuffix) {
                        output = this.localeData().pastFuture(+this, output);
                    }
                    return this.localeData().postformat(output);
                },
                add: function add(input, val) {
                    var dur = moment.duration(input, val);
                    this._milliseconds += dur._milliseconds;
                    this._days += dur._days;
                    this._months += dur._months;
                    this._bubble();
                    return this;
                },
                subtract: function subtract(input, val) {
                    var dur = moment.duration(input, val);
                    this._milliseconds -= dur._milliseconds;
                    this._days -= dur._days;
                    this._months -= dur._months;
                    this._bubble();
                    return this;
                },
                get: function get(units) {
                    units = normalizeUnits(units);
                    return this[units.toLowerCase() + 's']();
                },
                as: function as(units) {
                    var days, months;
                    units = normalizeUnits(units);
                    if (units === 'month' || units === 'year') {
                        days = this._days + this._milliseconds / 864e5;
                        months = this._months + daysToYears(days) * 12;
                        return units === 'month' ? months : months / 12;
                    } else {
                        days = this._days + yearsToDays(this._months / 12);
                        switch (units) {
                          case 'week':
                            return days / 7 + this._milliseconds / 6048e5;

                          case 'day':
                            return days + this._milliseconds / 864e5;

                          case 'hour':
                            return days * 24 + this._milliseconds / 36e5;

                          case 'minute':
                            return days * 24 * 60 + this._milliseconds / 6e4;

                          case 'second':
                            return days * 24 * 60 * 60 + this._milliseconds / 1e3;

                          case 'millisecond':
                            return Math.floor(days * 24 * 60 * 60 * 1e3) + this._milliseconds;

                          default:
                            throw new Error('Unknown unit ' + units);
                        }
                    }
                },
                lang: moment.fn.lang,
                locale: moment.fn.locale,
                toIsoString: deprecate('toIsoString() is deprecated. Please use toISOString() instead ' + '(notice the capitals)', function() {
                    return this.toISOString();
                }),
                toISOString: function toISOString() {
                    var years = Math.abs(this.years()), months = Math.abs(this.months()), days = Math.abs(this.days()), hours = Math.abs(this.hours()), minutes = Math.abs(this.minutes()), seconds = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                    if (!this.asSeconds()) {
                        return 'P0D';
                    }
                    return (this.asSeconds() < 0 ? '-' : '') + 'P' + (years ? years + 'Y' : '') + (months ? months + 'M' : '') + (days ? days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hours + 'H' : '') + (minutes ? minutes + 'M' : '') + (seconds ? seconds + 'S' : '');
                },
                localeData: function localeData() {
                    return this._locale;
                }
            });
            moment.duration.fn.toString = moment.duration.fn.toISOString;
            function makeDurationGetter(name) {
                moment.duration.fn[name] = function() {
                    return this._data[name];
                };
            }
            for (i in unitMillisecondFactors) {
                if (hasOwnProp(unitMillisecondFactors, i)) {
                    makeDurationGetter(i.toLowerCase());
                }
            }
            moment.duration.fn.asMilliseconds = function() {
                return this.as('ms');
            };
            moment.duration.fn.asSeconds = function() {
                return this.as('s');
            };
            moment.duration.fn.asMinutes = function() {
                return this.as('m');
            };
            moment.duration.fn.asHours = function() {
                return this.as('h');
            };
            moment.duration.fn.asDays = function() {
                return this.as('d');
            };
            moment.duration.fn.asWeeks = function() {
                return this.as('weeks');
            };
            moment.duration.fn.asMonths = function() {
                return this.as('M');
            };
            moment.duration.fn.asYears = function() {
                return this.as('y');
            };
            moment.locale('en', {
                ordinal: function ordinal(number) {
                    var b = number % 10, output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
                    return number + output;
                }
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('af', {
                    months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
                    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
                    weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
                    weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
                    weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
                    meridiem: function meridiem(hours, minutes, isLower) {
                        if (hours < 12) {
                            return isLower ? 'vm' : 'VM';
                        } else {
                            return isLower ? 'nm' : 'NM';
                        }
                    },
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Vandag om] LT',
                        nextDay: '[M??re om] LT',
                        nextWeek: 'dddd [om] LT',
                        lastDay: '[Gister om] LT',
                        lastWeek: '[Laas] dddd [om] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'oor %s',
                        past: '%s gelede',
                        s: '\'n paar sekondes',
                        m: '\'n minuut',
                        mm: '%d minute',
                        h: '\'n uur',
                        hh: '%d ure',
                        d: '\'n dag',
                        dd: '%d dae',
                        M: '\'n maand',
                        MM: '%d maande',
                        y: '\'n jaar',
                        yy: '%d jaar'
                    },
                    ordinal: function ordinal(number) {
                        return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('ar-ma', {
                    months: '??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????'.split('_'),
                    monthsShort: '??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????'.split('_'),
                    weekdays: '??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????'.split('_'),
                    weekdaysShort: '??????_??????????_????????????_????????????_????????_????????_??????'.split('_'),
                    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[?????????? ?????? ????????????] LT',
                        nextDay: '[?????? ?????? ????????????] LT',
                        nextWeek: 'dddd [?????? ????????????] LT',
                        lastDay: '[?????? ?????? ????????????] LT',
                        lastWeek: 'dddd [?????? ????????????] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '???? %s',
                        past: '?????? %s',
                        s: '????????',
                        m: '??????????',
                        mm: '%d ??????????',
                        h: '????????',
                        hh: '%d ??????????',
                        d: '??????',
                        dd: '%d ????????',
                        M: '??????',
                        MM: '%d ????????',
                        y: '??????',
                        yy: '%d ??????????'
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var symbolMap = {
                    '1': '??',
                    '2': '??',
                    '3': '??',
                    '4': '??',
                    '5': '??',
                    '6': '??',
                    '7': '??',
                    '8': '??',
                    '9': '??',
                    '0': '??'
                }, numberMap = {
                    '??': '1',
                    '??': '2',
                    '??': '3',
                    '??': '4',
                    '??': '5',
                    '??': '6',
                    '??': '7',
                    '??': '8',
                    '??': '9',
                    '??': '0'
                };
                return moment.defineLocale('ar-sa', {
                    months: '??????????_????????????_????????_??????????_????????_??????????_??????????_??????????_????????????_????????????_????????????_????????????'.split('_'),
                    monthsShort: '??????????_????????????_????????_??????????_????????_??????????_??????????_??????????_????????????_????????????_????????????_????????????'.split('_'),
                    weekdays: '??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????'.split('_'),
                    weekdaysShort: '??????_??????????_????????????_????????????_????????_????????_??????'.split('_'),
                    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 12) {
                            return '??';
                        } else {
                            return '??';
                        }
                    },
                    calendar: {
                        sameDay: '[?????????? ?????? ????????????] LT',
                        nextDay: '[?????? ?????? ????????????] LT',
                        nextWeek: 'dddd [?????? ????????????] LT',
                        lastDay: '[?????? ?????? ????????????] LT',
                        lastWeek: 'dddd [?????? ????????????] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '???? %s',
                        past: '?????? %s',
                        s: '????????',
                        m: '??????????',
                        mm: '%d ??????????',
                        h: '????????',
                        hh: '%d ??????????',
                        d: '??????',
                        dd: '%d ????????',
                        M: '??????',
                        MM: '%d ????????',
                        y: '??????',
                        yy: '%d ??????????'
                    },
                    preparse: function preparse(string) {
                        return string.replace(/[??-??]/g, function(match) {
                            return numberMap[match];
                        }).replace(/??/g, ',');
                    },
                    postformat: function postformat(string) {
                        return string.replace(/\d/g, function(match) {
                            return symbolMap[match];
                        }).replace(/,/g, '??');
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var symbolMap = {
                    '1': '??',
                    '2': '??',
                    '3': '??',
                    '4': '??',
                    '5': '??',
                    '6': '??',
                    '7': '??',
                    '8': '??',
                    '9': '??',
                    '0': '??'
                }, numberMap = {
                    '??': '1',
                    '??': '2',
                    '??': '3',
                    '??': '4',
                    '??': '5',
                    '??': '6',
                    '??': '7',
                    '??': '8',
                    '??': '9',
                    '??': '0'
                }, pluralForm = function pluralForm(n) {
                    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
                }, plurals = {
                    s: [ '?????? ???? ??????????', '?????????? ??????????', [ '??????????????', '??????????????' ], '%d ????????', '%d ??????????', '%d ??????????' ],
                    m: [ '?????? ???? ??????????', '?????????? ??????????', [ '??????????????', '??????????????' ], '%d ??????????', '%d ??????????', '%d ??????????' ],
                    h: [ '?????? ???? ????????', '???????? ??????????', [ '????????????', '????????????' ], '%d ??????????', '%d ????????', '%d ????????' ],
                    d: [ '?????? ???? ??????', '?????? ????????', [ '??????????', '??????????' ], '%d ????????', '%d ??????????', '%d ??????' ],
                    M: [ '?????? ???? ??????', '?????? ????????', [ '??????????', '??????????' ], '%d ????????', '%d ????????', '%d ??????' ],
                    y: [ '?????? ???? ??????', '?????? ????????', [ '??????????', '??????????' ], '%d ??????????', '%d ??????????', '%d ??????' ]
                }, pluralize = function pluralize(u) {
                    return function(number, withoutSuffix, string, isFuture) {
                        var f = pluralForm(number), str = plurals[u][pluralForm(number)];
                        if (f === 2) {
                            str = str[withoutSuffix ? 0 : 1];
                        }
                        return str.replace(/%d/i, number);
                    };
                }, months = [ '?????????? ???????????? ??????????', '???????? ????????????', '???????? ????????', '?????????? ??????????', '???????? ????????', '???????????? ??????????', '???????? ??????????', '???? ??????????', '?????????? ????????????', '?????????? ?????????? ????????????', '?????????? ???????????? ????????????', '?????????? ?????????? ????????????' ];
                return moment.defineLocale('ar', {
                    months: months,
                    monthsShort: months,
                    weekdays: '??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????'.split('_'),
                    weekdaysShort: '??????_??????????_????????????_????????????_????????_????????_??????'.split('_'),
                    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 12) {
                            return '??';
                        } else {
                            return '??';
                        }
                    },
                    calendar: {
                        sameDay: '[?????????? ?????? ????????????] LT',
                        nextDay: '[???????? ?????? ????????????] LT',
                        nextWeek: 'dddd [?????? ????????????] LT',
                        lastDay: '[?????? ?????? ????????????] LT',
                        lastWeek: 'dddd [?????? ????????????] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '?????? %s',
                        past: '?????? %s',
                        s: pluralize('s'),
                        m: pluralize('m'),
                        mm: pluralize('m'),
                        h: pluralize('h'),
                        hh: pluralize('h'),
                        d: pluralize('d'),
                        dd: pluralize('d'),
                        M: pluralize('M'),
                        MM: pluralize('M'),
                        y: pluralize('y'),
                        yy: pluralize('y')
                    },
                    preparse: function preparse(string) {
                        return string.replace(/[??-??]/g, function(match) {
                            return numberMap[match];
                        }).replace(/??/g, ',');
                    },
                    postformat: function postformat(string) {
                        return string.replace(/\d/g, function(match) {
                            return symbolMap[match];
                        }).replace(/,/g, '??');
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var suffixes = {
                    1: '-inci',
                    5: '-inci',
                    8: '-inci',
                    70: '-inci',
                    80: '-inci',
                    2: '-nci',
                    7: '-nci',
                    20: '-nci',
                    50: '-nci',
                    3: '-??nc??',
                    4: '-??nc??',
                    100: '-??nc??',
                    6: '-nc??',
                    9: '-uncu',
                    10: '-uncu',
                    30: '-uncu',
                    60: '-??nc??',
                    90: '-??nc??'
                };
                return moment.defineLocale('az', {
                    months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
                    monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
                    weekdays: 'Bazar_Bazar ert??si_????r????nb?? ax??am??_????r????nb??_C??m?? ax??am??_C??m??_????nb??'.split('_'),
                    weekdaysShort: 'Baz_BzE_??Ax_????r_CAx_C??m_????n'.split('_'),
                    weekdaysMin: 'Bz_BE_??A_????_CA_C??_????'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[bug??n saat] LT',
                        nextDay: '[sabah saat] LT',
                        nextWeek: '[g??l??n h??ft??] dddd [saat] LT',
                        lastDay: '[d??n??n] LT',
                        lastWeek: '[ke????n h??ft??] dddd [saat] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s sonra',
                        past: '%s ??vv??l',
                        s: 'birne???? saniyy??',
                        m: 'bir d??qiq??',
                        mm: '%d d??qiq??',
                        h: 'bir saat',
                        hh: '%d saat',
                        d: 'bir g??n',
                        dd: '%d g??n',
                        M: 'bir ay',
                        MM: '%d ay',
                        y: 'bir il',
                        yy: '%d il'
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 4) {
                            return 'gec??';
                        } else if (hour < 12) {
                            return 's??h??r';
                        } else if (hour < 17) {
                            return 'g??nd??z';
                        } else {
                            return 'ax??am';
                        }
                    },
                    ordinal: function ordinal(number) {
                        if (number === 0) {
                            return number + '-??nc??';
                        }
                        var a = number % 10, b = number % 100 - a, c = number >= 100 ? 100 : null;
                        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function plural(word, num) {
                    var forms = word.split('_');
                    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
                }
                function relativeTimeWithPlural(number, withoutSuffix, key) {
                    var format = {
                        mm: withoutSuffix ? '??????????????_??????????????_????????????' : '??????????????_??????????????_????????????',
                        hh: withoutSuffix ? '??????????????_??????????????_????????????' : '??????????????_??????????????_????????????',
                        dd: '??????????_??????_????????',
                        MM: '??????????_????????????_??????????????',
                        yy: '??????_????????_??????????'
                    };
                    if (key === 'm') {
                        return withoutSuffix ? '??????????????' : '??????????????';
                    } else if (key === 'h') {
                        return withoutSuffix ? '??????????????' : '??????????????';
                    } else {
                        return number + ' ' + plural(format[key], +number);
                    }
                }
                function monthsCaseReplace(m, format) {
                    var months = {
                        nominative: '????????????????_????????_??????????????_????????????????_??????????????_??????????????_????????????_??????????????_????????????????_????????????????????_????????????????_??????????????'.split('_'),
                        accusative: '????????????????_????????????_????????????????_??????????????????_????????????_??????????????_????????????_????????????_??????????????_??????????????????????_??????????????????_????????????'.split('_')
                    }, nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
                    return months[nounCase][m.month()];
                }
                function weekdaysCaseReplace(m, format) {
                    var weekdays = {
                        nominative: '??????????????_????????????????????_??????????????_????????????_????????????_??????????????_????????????'.split('_'),
                        accusative: '??????????????_????????????????????_??????????????_????????????_????????????_??????????????_????????????'.split('_')
                    }, nounCase = /\[ ?[????] ?(?:??????????????|??????????????????)? ?\] ?dddd/.test(format) ? 'accusative' : 'nominative';
                    return weekdays[nounCase][m.day()];
                }
                return moment.defineLocale('be', {
                    months: monthsCaseReplace,
                    monthsShort: '????????_??????_??????_????????_????????_????????_??????_????????_??????_????????_????????_????????'.split('_'),
                    weekdays: weekdaysCaseReplace,
                    weekdaysShort: '????_????_????_????_????_????_????'.split('_'),
                    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY ??.',
                        LLL: 'D MMMM YYYY ??., LT',
                        LLLL: 'dddd, D MMMM YYYY ??., LT'
                    },
                    calendar: {
                        sameDay: '[?????????? ??] LT',
                        nextDay: '[???????????? ??] LT',
                        lastDay: '[?????????? ??] LT',
                        nextWeek: function nextWeek() {
                            return '[??] dddd [??] LT';
                        },
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 0:
                              case 3:
                              case 5:
                              case 6:
                                return '[?? ??????????????] dddd [??] LT';

                              case 1:
                              case 2:
                              case 4:
                                return '[?? ????????????] dddd [??] LT';
                            }
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '???????? %s',
                        past: '%s ????????',
                        s: '???????????????? ????????????',
                        m: relativeTimeWithPlural,
                        mm: relativeTimeWithPlural,
                        h: relativeTimeWithPlural,
                        hh: relativeTimeWithPlural,
                        d: '??????????',
                        dd: relativeTimeWithPlural,
                        M: '??????????',
                        MM: relativeTimeWithPlural,
                        y: '??????',
                        yy: relativeTimeWithPlural
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 4) {
                            return '????????';
                        } else if (hour < 12) {
                            return '????????????';
                        } else if (hour < 17) {
                            return '??????';
                        } else {
                            return '????????????';
                        }
                    },
                    ordinal: function ordinal(number, period) {
                        switch (period) {
                          case 'M':
                          case 'd':
                          case 'DDD':
                          case 'w':
                          case 'W':
                            return (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? number + '-??' : number + '-??';

                          case 'D':
                            return number + '-????';

                          default:
                            return number;
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('bg', {
                    months: '????????????_????????????????_????????_??????????_??????_??????_??????_????????????_??????????????????_????????????????_??????????????_????????????????'.split('_'),
                    monthsShort: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????'.split('_'),
                    weekdays: '????????????_????????????????????_??????????????_??????????_??????????????????_??????????_????????????'.split('_'),
                    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
                    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'D.MM.YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[???????? ??] LT',
                        nextDay: '[???????? ??] LT',
                        nextWeek: 'dddd [??] LT',
                        lastDay: '[?????????? ??] LT',
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 0:
                              case 3:
                              case 6:
                                return '[?? ????????????????????] dddd [??] LT';

                              case 1:
                              case 2:
                              case 4:
                              case 5:
                                return '[?? ??????????????????] dddd [??] LT';
                            }
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '???????? %s',
                        past: '?????????? %s',
                        s: '?????????????? ??????????????',
                        m: '????????????',
                        mm: '%d ????????????',
                        h: '??????',
                        hh: '%d ????????',
                        d: '??????',
                        dd: '%d ??????',
                        M: '??????????',
                        MM: '%d ????????????',
                        y: '????????????',
                        yy: '%d ????????????'
                    },
                    ordinal: function ordinal(number) {
                        var lastDigit = number % 10, last2Digits = number % 100;
                        if (number === 0) {
                            return number + '-????';
                        } else if (last2Digits === 0) {
                            return number + '-????';
                        } else if (last2Digits > 10 && last2Digits < 20) {
                            return number + '-????';
                        } else if (lastDigit === 1) {
                            return number + '-????';
                        } else if (lastDigit === 2) {
                            return number + '-????';
                        } else if (lastDigit === 7 || lastDigit === 8) {
                            return number + '-????';
                        } else {
                            return number + '-????';
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var symbolMap = {
                    '1': '???',
                    '2': '???',
                    '3': '???',
                    '4': '???',
                    '5': '???',
                    '6': '???',
                    '7': '???',
                    '8': '???',
                    '9': '???',
                    '0': '???'
                }, numberMap = {
                    '???': '1',
                    '???': '2',
                    '???': '3',
                    '???': '4',
                    '???': '5',
                    '???': '6',
                    '???': '7',
                    '???': '8',
                    '???': '9',
                    '???': '0'
                };
                return moment.defineLocale('bn', {
                    months: '????????????????????????_????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_??????????????????_??????????????????????????????_?????????????????????_?????????????????????_????????????????????????'.split('_'),
                    monthsShort: '????????????_?????????_???????????????_?????????_??????_?????????_?????????_??????_???????????????_???????????????_??????_??????????????????'.split('_'),
                    weekdays: '??????????????????_??????????????????_????????????????????????_??????????????????_???????????????????????????????????????_???????????????????????????_??????????????????'.split('_'),
                    weekdaysShort: '?????????_?????????_???????????????_?????????_??????????????????????????????_??????????????????_?????????'.split('_'),
                    weekdaysMin: '??????_??????_????????????_??????_???????????????_??????_?????????'.split('_'),
                    longDateFormat: {
                        LT: 'A h:mm ?????????',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY, LT',
                        LLLL: 'dddd, D MMMM YYYY, LT'
                    },
                    calendar: {
                        sameDay: '[??????] LT',
                        nextDay: '[????????????????????????] LT',
                        nextWeek: 'dddd, LT',
                        lastDay: '[???????????????] LT',
                        lastWeek: '[??????] dddd, LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s ?????????',
                        past: '%s ?????????',
                        s: '????????? ?????????????????????',
                        m: '?????? ???????????????',
                        mm: '%d ???????????????',
                        h: '?????? ???????????????',
                        hh: '%d ???????????????',
                        d: '?????? ?????????',
                        dd: '%d ?????????',
                        M: '?????? ?????????',
                        MM: '%d ?????????',
                        y: '?????? ?????????',
                        yy: '%d ?????????'
                    },
                    preparse: function preparse(string) {
                        return string.replace(/[??????????????????????????????]/g, function(match) {
                            return numberMap[match];
                        });
                    },
                    postformat: function postformat(string) {
                        return string.replace(/\d/g, function(match) {
                            return symbolMap[match];
                        });
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 4) {
                            return '?????????';
                        } else if (hour < 10) {
                            return '????????????';
                        } else if (hour < 17) {
                            return '???????????????';
                        } else if (hour < 20) {
                            return '???????????????';
                        } else {
                            return '?????????';
                        }
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var symbolMap = {
                    '1': '???',
                    '2': '???',
                    '3': '???',
                    '4': '???',
                    '5': '???',
                    '6': '???',
                    '7': '???',
                    '8': '???',
                    '9': '???',
                    '0': '???'
                }, numberMap = {
                    '???': '1',
                    '???': '2',
                    '???': '3',
                    '???': '4',
                    '???': '5',
                    '???': '6',
                    '???': '7',
                    '???': '8',
                    '???': '9',
                    '???': '0'
                };
                return moment.defineLocale('bo', {
                    months: '??????????????????????????????_?????????????????????????????????_?????????????????????????????????_??????????????????????????????_???????????????????????????_?????????????????????????????????_?????????????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????????????????_?????????????????????????????????????????????'.split('_'),
                    monthsShort: '??????????????????????????????_?????????????????????????????????_?????????????????????????????????_??????????????????????????????_???????????????????????????_?????????????????????????????????_?????????????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????????????????_?????????????????????????????????????????????'.split('_'),
                    weekdays: '???????????????????????????_???????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????'.split('_'),
                    weekdaysShort: '???????????????_???????????????_????????????????????????_??????????????????_??????????????????_??????????????????_?????????????????????'.split('_'),
                    weekdaysMin: '???????????????_???????????????_????????????????????????_??????????????????_??????????????????_??????????????????_?????????????????????'.split('_'),
                    longDateFormat: {
                        LT: 'A h:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY, LT',
                        LLLL: 'dddd, D MMMM YYYY, LT'
                    },
                    calendar: {
                        sameDay: '[??????????????????] LT',
                        nextDay: '[??????????????????] LT',
                        nextWeek: '[?????????????????????????????????????????????], LT',
                        lastDay: '[????????????] LT',
                        lastWeek: '[??????????????????????????????????????????] dddd, LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s ??????',
                        past: '%s ???????????????',
                        s: '???????????????',
                        m: '??????????????????????????????',
                        mm: '%d ???????????????',
                        h: '?????????????????????????????????',
                        hh: '%d ??????????????????',
                        d: '????????????????????????',
                        dd: '%d ????????????',
                        M: '???????????????????????????',
                        MM: '%d ????????????',
                        y: '?????????????????????',
                        yy: '%d ??????'
                    },
                    preparse: function preparse(string) {
                        return string.replace(/[??????????????????????????????]/g, function(match) {
                            return numberMap[match];
                        });
                    },
                    postformat: function postformat(string) {
                        return string.replace(/\d/g, function(match) {
                            return symbolMap[match];
                        });
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 4) {
                            return '??????????????????';
                        } else if (hour < 10) {
                            return '?????????????????????';
                        } else if (hour < 17) {
                            return '?????????????????????';
                        } else if (hour < 20) {
                            return '?????????????????????';
                        } else {
                            return '??????????????????';
                        }
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function relativeTimeWithMutation(number, withoutSuffix, key) {
                    var format = {
                        mm: 'munutenn',
                        MM: 'miz',
                        dd: 'devezh'
                    };
                    return number + ' ' + mutation(format[key], number);
                }
                function specialMutationForYears(number) {
                    switch (lastNumber(number)) {
                      case 1:
                      case 3:
                      case 4:
                      case 5:
                      case 9:
                        return number + ' bloaz';

                      default:
                        return number + ' vloaz';
                    }
                }
                function lastNumber(number) {
                    if (number > 9) {
                        return lastNumber(number % 10);
                    }
                    return number;
                }
                function mutation(text, number) {
                    if (number === 2) {
                        return softMutation(text);
                    }
                    return text;
                }
                function softMutation(text) {
                    var mutationTable = {
                        m: 'v',
                        b: 'v',
                        d: 'z'
                    };
                    if (mutationTable[text.charAt(0)] === undefined) {
                        return text;
                    }
                    return mutationTable[text.charAt(0)] + text.substring(1);
                }
                return moment.defineLocale('br', {
                    months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
                    monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
                    weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
                    weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
                    weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'h[e]mm A',
                        L: 'DD/MM/YYYY',
                        LL: 'D [a viz] MMMM YYYY',
                        LLL: 'D [a viz] MMMM YYYY LT',
                        LLLL: 'dddd, D [a viz] MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Hiziv da] LT',
                        nextDay: '[Warc\'hoazh da] LT',
                        nextWeek: 'dddd [da] LT',
                        lastDay: '[Dec\'h da] LT',
                        lastWeek: 'dddd [paset da] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'a-benn %s',
                        past: '%s \'zo',
                        s: 'un nebeud segondenno??',
                        m: 'ur vunutenn',
                        mm: relativeTimeWithMutation,
                        h: 'un eur',
                        hh: '%d eur',
                        d: 'un devezh',
                        dd: relativeTimeWithMutation,
                        M: 'ur miz',
                        MM: relativeTimeWithMutation,
                        y: 'ur bloaz',
                        yy: specialMutationForYears
                    },
                    ordinal: function ordinal(number) {
                        var output = number === 1 ? 'a??' : 'vet';
                        return number + output;
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function translate(number, withoutSuffix, key) {
                    var result = number + ' ';
                    switch (key) {
                      case 'm':
                        return withoutSuffix ? 'jedna minuta' : 'jedne minute';

                      case 'mm':
                        if (number === 1) {
                            result += 'minuta';
                        } else if (number === 2 || number === 3 || number === 4) {
                            result += 'minute';
                        } else {
                            result += 'minuta';
                        }
                        return result;

                      case 'h':
                        return withoutSuffix ? 'jedan sat' : 'jednog sata';

                      case 'hh':
                        if (number === 1) {
                            result += 'sat';
                        } else if (number === 2 || number === 3 || number === 4) {
                            result += 'sata';
                        } else {
                            result += 'sati';
                        }
                        return result;

                      case 'dd':
                        if (number === 1) {
                            result += 'dan';
                        } else {
                            result += 'dana';
                        }
                        return result;

                      case 'MM':
                        if (number === 1) {
                            result += 'mjesec';
                        } else if (number === 2 || number === 3 || number === 4) {
                            result += 'mjeseca';
                        } else {
                            result += 'mjeseci';
                        }
                        return result;

                      case 'yy':
                        if (number === 1) {
                            result += 'godina';
                        } else if (number === 2 || number === 3 || number === 4) {
                            result += 'godine';
                        } else {
                            result += 'godina';
                        }
                        return result;
                    }
                }
                return moment.defineLocale('bs', {
                    months: 'januar_februar_mart_april_maj_juni_juli_avgust_septembar_oktobar_novembar_decembar'.split('_'),
                    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
                    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota'.split('_'),
                    weekdaysShort: 'ned._pon._uto._sri._??et._pet._sub.'.split('_'),
                    weekdaysMin: 'ne_po_ut_sr_??e_pe_su'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD. MM. YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd, D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[danas u] LT',
                        nextDay: '[sutra u] LT',
                        nextWeek: function nextWeek() {
                            switch (this.day()) {
                              case 0:
                                return '[u] [nedjelju] [u] LT';

                              case 3:
                                return '[u] [srijedu] [u] LT';

                              case 6:
                                return '[u] [subotu] [u] LT';

                              case 1:
                              case 2:
                              case 4:
                              case 5:
                                return '[u] dddd [u] LT';
                            }
                        },
                        lastDay: '[ju??er u] LT',
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 0:
                              case 3:
                                return '[pro??lu] dddd [u] LT';

                              case 6:
                                return '[pro??le] [subote] [u] LT';

                              case 1:
                              case 2:
                              case 4:
                              case 5:
                                return '[pro??li] dddd [u] LT';
                            }
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'za %s',
                        past: 'prije %s',
                        s: 'par sekundi',
                        m: translate,
                        mm: translate,
                        h: translate,
                        hh: translate,
                        d: 'dan',
                        dd: translate,
                        M: 'mjesec',
                        MM: translate,
                        y: 'godinu',
                        yy: translate
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('ca', {
                    months: 'gener_febrer_mar??_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
                    monthsShort: 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
                    weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
                    weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
                    weekdaysMin: 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: function sameDay() {
                            return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
                        },
                        nextDay: function nextDay() {
                            return '[dem?? a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
                        },
                        nextWeek: function nextWeek() {
                            return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
                        },
                        lastDay: function lastDay() {
                            return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
                        },
                        lastWeek: function lastWeek() {
                            return '[el] dddd [passat a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'en %s',
                        past: 'fa %s',
                        s: 'uns segons',
                        m: 'un minut',
                        mm: '%d minuts',
                        h: 'una hora',
                        hh: '%d hores',
                        d: 'un dia',
                        dd: '%d dies',
                        M: 'un mes',
                        MM: '%d mesos',
                        y: 'un any',
                        yy: '%d anys'
                    },
                    ordinal: '%d??',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var months = 'leden_??nor_b??ezen_duben_kv??ten_??erven_??ervenec_srpen_z??????_????jen_listopad_prosinec'.split('_'), monthsShort = 'led_??no_b??e_dub_kv??_??vn_??vc_srp_z????_????j_lis_pro'.split('_');
                function plural(n) {
                    return n > 1 && n < 5 && ~~(n / 10) !== 1;
                }
                function translate(number, withoutSuffix, key, isFuture) {
                    var result = number + ' ';
                    switch (key) {
                      case 's':
                        return withoutSuffix || isFuture ? 'p??r sekund' : 'p??r sekundami';

                      case 'm':
                        return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';

                      case 'mm':
                        if (withoutSuffix || isFuture) {
                            return result + (plural(number) ? 'minuty' : 'minut');
                        } else {
                            return result + 'minutami';
                        }
                        break;

                      case 'h':
                        return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

                      case 'hh':
                        if (withoutSuffix || isFuture) {
                            return result + (plural(number) ? 'hodiny' : 'hodin');
                        } else {
                            return result + 'hodinami';
                        }
                        break;

                      case 'd':
                        return withoutSuffix || isFuture ? 'den' : 'dnem';

                      case 'dd':
                        if (withoutSuffix || isFuture) {
                            return result + (plural(number) ? 'dny' : 'dn??');
                        } else {
                            return result + 'dny';
                        }
                        break;

                      case 'M':
                        return withoutSuffix || isFuture ? 'm??s??c' : 'm??s??cem';

                      case 'MM':
                        if (withoutSuffix || isFuture) {
                            return result + (plural(number) ? 'm??s??ce' : 'm??s??c??');
                        } else {
                            return result + 'm??s??ci';
                        }
                        break;

                      case 'y':
                        return withoutSuffix || isFuture ? 'rok' : 'rokem';

                      case 'yy':
                        if (withoutSuffix || isFuture) {
                            return result + (plural(number) ? 'roky' : 'let');
                        } else {
                            return result + 'lety';
                        }
                        break;
                    }
                }
                return moment.defineLocale('cs', {
                    months: months,
                    monthsShort: monthsShort,
                    monthsParse: function(months, monthsShort) {
                        var i, _monthsParse = [];
                        for (i = 0; i < 12; i++) {
                            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
                        }
                        return _monthsParse;
                    }(months, monthsShort),
                    weekdays: 'ned??le_pond??l??_??ter??_st??eda_??tvrtek_p??tek_sobota'.split('_'),
                    weekdaysShort: 'ne_po_??t_st_??t_p??_so'.split('_'),
                    weekdaysMin: 'ne_po_??t_st_??t_p??_so'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD. MM. YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[dnes v] LT',
                        nextDay: '[z??tra v] LT',
                        nextWeek: function nextWeek() {
                            switch (this.day()) {
                              case 0:
                                return '[v ned??li v] LT';

                              case 1:
                              case 2:
                                return '[v] dddd [v] LT';

                              case 3:
                                return '[ve st??edu v] LT';

                              case 4:
                                return '[ve ??tvrtek v] LT';

                              case 5:
                                return '[v p??tek v] LT';

                              case 6:
                                return '[v sobotu v] LT';
                            }
                        },
                        lastDay: '[v??era v] LT',
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 0:
                                return '[minulou ned??li v] LT';

                              case 1:
                              case 2:
                                return '[minul??] dddd [v] LT';

                              case 3:
                                return '[minulou st??edu v] LT';

                              case 4:
                              case 5:
                                return '[minul??] dddd [v] LT';

                              case 6:
                                return '[minulou sobotu v] LT';
                            }
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'za %s',
                        past: 'p??ed %s',
                        s: translate,
                        m: translate,
                        mm: translate,
                        h: translate,
                        hh: translate,
                        d: translate,
                        dd: translate,
                        M: translate,
                        MM: translate,
                        y: translate,
                        yy: translate
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('cv', {
                    months: '????????????_??????????_??????_??????_??????_????????????_??????_??????????_????????_??????_??????_????????????'.split('_'),
                    monthsShort: '??????_??????_??????_??????_??????_??????_??????_??????_????_??????_??????_??????'.split('_'),
                    weekdays: '??????????????????????_????????????????_??????????????????_??????????_??????????????????????_??????????????_????????????????'.split('_'),
                    weekdaysShort: '??????_??????_??????_????_??????_??????_??????'.split('_'),
                    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD-MM-YYYY',
                        LL: 'YYYY [??????????] MMMM [????????????] D[-????????]',
                        LLL: 'YYYY [??????????] MMMM [????????????] D[-????????], LT',
                        LLLL: 'dddd, YYYY [??????????] MMMM [????????????] D[-????????], LT'
                    },
                    calendar: {
                        sameDay: '[????????] LT [??????????????]',
                        nextDay: '[????????] LT [??????????????]',
                        lastDay: '[????????] LT [??????????????]',
                        nextWeek: '[??????????] dddd LT [??????????????]',
                        lastWeek: '[??????????] dddd LT [??????????????]',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: function future(output) {
                            var affix = /??????????$/i.exec(output) ? '??????' : /??????$/i.exec(output) ? '??????' : '??????';
                            return output + affix;
                        },
                        past: '%s ????????????',
                        s: '??????-???? ??????????????',
                        m: '?????? ??????????',
                        mm: '%d ??????????',
                        h: '?????? ??????????',
                        hh: '%d ??????????',
                        d: '?????? ??????',
                        dd: '%d ??????',
                        M: '?????? ????????',
                        MM: '%d ????????',
                        y: '?????? ??????',
                        yy: '%d ??????'
                    },
                    ordinal: '%d-??????',
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('cy', {
                    months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
                    monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
                    weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
                    weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
                    weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Heddiw am] LT',
                        nextDay: '[Yfory am] LT',
                        nextWeek: 'dddd [am] LT',
                        lastDay: '[Ddoe am] LT',
                        lastWeek: 'dddd [diwethaf am] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'mewn %s',
                        past: '%s yn ??l',
                        s: 'ychydig eiliadau',
                        m: 'munud',
                        mm: '%d munud',
                        h: 'awr',
                        hh: '%d awr',
                        d: 'diwrnod',
                        dd: '%d diwrnod',
                        M: 'mis',
                        MM: '%d mis',
                        y: 'blwyddyn',
                        yy: '%d flynedd'
                    },
                    ordinal: function ordinal(number) {
                        var b = number, output = '', lookup = [ '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' ];
                        if (b > 20) {
                            if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                                output = 'fed';
                            } else {
                                output = 'ain';
                            }
                        } else if (b > 0) {
                            output = lookup[b];
                        }
                        return number + output;
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('da', {
                    months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
                    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
                    weekdays: 's??ndag_mandag_tirsdag_onsdag_torsdag_fredag_l??rdag'.split('_'),
                    weekdaysShort: 's??n_man_tir_ons_tor_fre_l??r'.split('_'),
                    weekdaysMin: 's??_ma_ti_on_to_fr_l??'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd [d.] D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[I dag kl.] LT',
                        nextDay: '[I morgen kl.] LT',
                        nextWeek: 'dddd [kl.] LT',
                        lastDay: '[I g??r kl.] LT',
                        lastWeek: '[sidste] dddd [kl] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'om %s',
                        past: '%s siden',
                        s: 'f?? sekunder',
                        m: 'et minut',
                        mm: '%d minutter',
                        h: 'en time',
                        hh: '%d timer',
                        d: 'en dag',
                        dd: '%d dage',
                        M: 'en m??ned',
                        MM: '%d m??neder',
                        y: 'et ??r',
                        yy: '%d ??r'
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function processRelativeTime(number, withoutSuffix, key, isFuture) {
                    var format = {
                        m: [ 'eine Minute', 'einer Minute' ],
                        h: [ 'eine Stunde', 'einer Stunde' ],
                        d: [ 'ein Tag', 'einem Tag' ],
                        dd: [ number + ' Tage', number + ' Tagen' ],
                        M: [ 'ein Monat', 'einem Monat' ],
                        MM: [ number + ' Monate', number + ' Monaten' ],
                        y: [ 'ein Jahr', 'einem Jahr' ],
                        yy: [ number + ' Jahre', number + ' Jahren' ]
                    };
                    return withoutSuffix ? format[key][0] : format[key][1];
                }
                return moment.defineLocale('de-at', {
                    months: 'J??nner_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
                    monthsShort: 'J??n._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
                    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
                    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
                    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm [Uhr]',
                        L: 'DD.MM.YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd, D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Heute um] LT',
                        sameElse: 'L',
                        nextDay: '[Morgen um] LT',
                        nextWeek: 'dddd [um] LT',
                        lastDay: '[Gestern um] LT',
                        lastWeek: '[letzten] dddd [um] LT'
                    },
                    relativeTime: {
                        future: 'in %s',
                        past: 'vor %s',
                        s: 'ein paar Sekunden',
                        m: processRelativeTime,
                        mm: '%d Minuten',
                        h: processRelativeTime,
                        hh: '%d Stunden',
                        d: processRelativeTime,
                        dd: processRelativeTime,
                        M: processRelativeTime,
                        MM: processRelativeTime,
                        y: processRelativeTime,
                        yy: processRelativeTime
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function processRelativeTime(number, withoutSuffix, key, isFuture) {
                    var format = {
                        m: [ 'eine Minute', 'einer Minute' ],
                        h: [ 'eine Stunde', 'einer Stunde' ],
                        d: [ 'ein Tag', 'einem Tag' ],
                        dd: [ number + ' Tage', number + ' Tagen' ],
                        M: [ 'ein Monat', 'einem Monat' ],
                        MM: [ number + ' Monate', number + ' Monaten' ],
                        y: [ 'ein Jahr', 'einem Jahr' ],
                        yy: [ number + ' Jahre', number + ' Jahren' ]
                    };
                    return withoutSuffix ? format[key][0] : format[key][1];
                }
                return moment.defineLocale('de', {
                    months: 'Januar_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
                    monthsShort: 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
                    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
                    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
                    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm [Uhr]',
                        L: 'DD.MM.YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd, D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Heute um] LT',
                        sameElse: 'L',
                        nextDay: '[Morgen um] LT',
                        nextWeek: 'dddd [um] LT',
                        lastDay: '[Gestern um] LT',
                        lastWeek: '[letzten] dddd [um] LT'
                    },
                    relativeTime: {
                        future: 'in %s',
                        past: 'vor %s',
                        s: 'ein paar Sekunden',
                        m: processRelativeTime,
                        mm: '%d Minuten',
                        h: processRelativeTime,
                        hh: '%d Stunden',
                        d: processRelativeTime,
                        dd: processRelativeTime,
                        M: processRelativeTime,
                        MM: processRelativeTime,
                        y: processRelativeTime,
                        yy: processRelativeTime
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('el', {
                    monthsNominativeEl: '????????????????????_??????????????????????_??????????????_????????????????_??????????_??????????????_??????????????_??????????????????_??????????????????????_??????????????????_??????????????????_????????????????????'.split('_'),
                    monthsGenitiveEl: '????????????????????_??????????????????????_??????????????_????????????????_??????????_??????????????_??????????????_??????????????????_??????????????????????_??????????????????_??????????????????_????????????????????'.split('_'),
                    months: function months(momentToFormat, format) {
                        if (/D/.test(format.substring(0, format.indexOf('MMMM')))) {
                            return this._monthsGenitiveEl[momentToFormat.month()];
                        } else {
                            return this._monthsNominativeEl[momentToFormat.month()];
                        }
                    },
                    monthsShort: '??????_??????_??????_??????_??????_????????_????????_??????_??????_??????_??????_??????'.split('_'),
                    weekdays: '??????????????_??????????????_??????????_??????????????_????????????_??????????????????_??????????????'.split('_'),
                    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
                    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
                    meridiem: function meridiem(hours, minutes, isLower) {
                        if (hours > 11) {
                            return isLower ? '????' : '????';
                        } else {
                            return isLower ? '????' : '????';
                        }
                    },
                    isPM: function isPM(input) {
                        return (input + '').toLowerCase()[0] === '??';
                    },
                    meridiemParse: /[????]\.????\.?/i,
                    longDateFormat: {
                        LT: 'h:mm A',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendarEl: {
                        sameDay: '[???????????? {}] LT',
                        nextDay: '[?????????? {}] LT',
                        nextWeek: 'dddd [{}] LT',
                        lastDay: '[???????? {}] LT',
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 6:
                                return '[???? ??????????????????????] dddd [{}] LT';

                              default:
                                return '[?????? ??????????????????????] dddd [{}] LT';
                            }
                        },
                        sameElse: 'L'
                    },
                    calendar: function calendar(key, mom) {
                        var output = this._calendarEl[key], hours = mom && mom.hours();
                        if (typeof output === 'function') {
                            output = output.apply(mom);
                        }
                        return output.replace('{}', hours % 12 === 1 ? '??????' : '????????');
                    },
                    relativeTime: {
                        future: '???? %s',
                        past: '%s ????????',
                        s: '????????????????????????',
                        m: '?????? ??????????',
                        mm: '%d ??????????',
                        h: '?????? ??????',
                        hh: '%d ????????',
                        d: '?????? ????????',
                        dd: '%d ??????????',
                        M: '???????? ??????????',
                        MM: '%d ??????????',
                        y: '???????? ????????????',
                        yy: '%d ????????????'
                    },
                    ordinal: function ordinal(number) {
                        return number + '??';
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('en-au', {
                    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
                    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
                    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'h:mm A',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Today at] LT',
                        nextDay: '[Tomorrow at] LT',
                        nextWeek: 'dddd [at] LT',
                        lastDay: '[Yesterday at] LT',
                        lastWeek: '[Last] dddd [at] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'in %s',
                        past: '%s ago',
                        s: 'a few seconds',
                        m: 'a minute',
                        mm: '%d minutes',
                        h: 'an hour',
                        hh: '%d hours',
                        d: 'a day',
                        dd: '%d days',
                        M: 'a month',
                        MM: '%d months',
                        y: 'a year',
                        yy: '%d years'
                    },
                    ordinal: function ordinal(number) {
                        var b = number % 10, output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
                        return number + output;
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('en-ca', {
                    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
                    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
                    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'h:mm A',
                        L: 'YYYY-MM-DD',
                        LL: 'D MMMM, YYYY',
                        LLL: 'D MMMM, YYYY LT',
                        LLLL: 'dddd, D MMMM, YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Today at] LT',
                        nextDay: '[Tomorrow at] LT',
                        nextWeek: 'dddd [at] LT',
                        lastDay: '[Yesterday at] LT',
                        lastWeek: '[Last] dddd [at] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'in %s',
                        past: '%s ago',
                        s: 'a few seconds',
                        m: 'a minute',
                        mm: '%d minutes',
                        h: 'an hour',
                        hh: '%d hours',
                        d: 'a day',
                        dd: '%d days',
                        M: 'a month',
                        MM: '%d months',
                        y: 'a year',
                        yy: '%d years'
                    },
                    ordinal: function ordinal(number) {
                        var b = number % 10, output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
                        return number + output;
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('en-gb', {
                    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
                    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
                    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Today at] LT',
                        nextDay: '[Tomorrow at] LT',
                        nextWeek: 'dddd [at] LT',
                        lastDay: '[Yesterday at] LT',
                        lastWeek: '[Last] dddd [at] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'in %s',
                        past: '%s ago',
                        s: 'a few seconds',
                        m: 'a minute',
                        mm: '%d minutes',
                        h: 'an hour',
                        hh: '%d hours',
                        d: 'a day',
                        dd: '%d days',
                        M: 'a month',
                        MM: '%d months',
                        y: 'a year',
                        yy: '%d years'
                    },
                    ordinal: function ordinal(number) {
                        var b = number % 10, output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
                        return number + output;
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('eo', {
                    months: 'januaro_februaro_marto_aprilo_majo_junio_julio_a??gusto_septembro_oktobro_novembro_decembro'.split('_'),
                    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_a??g_sep_okt_nov_dec'.split('_'),
                    weekdays: 'Diman??o_Lundo_Mardo_Merkredo_??a??do_Vendredo_Sabato'.split('_'),
                    weekdaysShort: 'Dim_Lun_Mard_Merk_??a??_Ven_Sab'.split('_'),
                    weekdaysMin: 'Di_Lu_Ma_Me_??a_Ve_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'YYYY-MM-DD',
                        LL: 'D[-an de] MMMM, YYYY',
                        LLL: 'D[-an de] MMMM, YYYY LT',
                        LLLL: 'dddd, [la] D[-an de] MMMM, YYYY LT'
                    },
                    meridiem: function meridiem(hours, minutes, isLower) {
                        if (hours > 11) {
                            return isLower ? 'p.t.m.' : 'P.T.M.';
                        } else {
                            return isLower ? 'a.t.m.' : 'A.T.M.';
                        }
                    },
                    calendar: {
                        sameDay: '[Hodia?? je] LT',
                        nextDay: '[Morga?? je] LT',
                        nextWeek: 'dddd [je] LT',
                        lastDay: '[Hiera?? je] LT',
                        lastWeek: '[pasinta] dddd [je] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'je %s',
                        past: 'anta?? %s',
                        s: 'sekundoj',
                        m: 'minuto',
                        mm: '%d minutoj',
                        h: 'horo',
                        hh: '%d horoj',
                        d: 'tago',
                        dd: '%d tagoj',
                        M: 'monato',
                        MM: '%d monatoj',
                        y: 'jaro',
                        yy: '%d jaroj'
                    },
                    ordinal: '%da',
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
                return moment.defineLocale('es', {
                    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
                    monthsShort: function monthsShort(m, format) {
                        if (/-MMM-/.test(format)) {
                            return _monthsShort[m.month()];
                        } else {
                            return monthsShortDot[m.month()];
                        }
                    },
                    weekdays: 'domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado'.split('_'),
                    weekdaysShort: 'dom._lun._mar._mi??._jue._vie._s??b.'.split('_'),
                    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_S??'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D [de] MMMM [de] YYYY',
                        LLL: 'D [de] MMMM [de] YYYY LT',
                        LLLL: 'dddd, D [de] MMMM [de] YYYY LT'
                    },
                    calendar: {
                        sameDay: function sameDay() {
                            return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
                        },
                        nextDay: function nextDay() {
                            return '[ma??ana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
                        },
                        nextWeek: function nextWeek() {
                            return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
                        },
                        lastDay: function lastDay() {
                            return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
                        },
                        lastWeek: function lastWeek() {
                            return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'en %s',
                        past: 'hace %s',
                        s: 'unos segundos',
                        m: 'un minuto',
                        mm: '%d minutos',
                        h: 'una hora',
                        hh: '%d horas',
                        d: 'un d??a',
                        dd: '%d d??as',
                        M: 'un mes',
                        MM: '%d meses',
                        y: 'un a??o',
                        yy: '%d a??os'
                    },
                    ordinal: '%d??',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function processRelativeTime(number, withoutSuffix, key, isFuture) {
                    var format = {
                        s: [ 'm??ne sekundi', 'm??ni sekund', 'paar sekundit' ],
                        m: [ '??he minuti', '??ks minut' ],
                        mm: [ number + ' minuti', number + ' minutit' ],
                        h: [ '??he tunni', 'tund aega', '??ks tund' ],
                        hh: [ number + ' tunni', number + ' tundi' ],
                        d: [ '??he p??eva', '??ks p??ev' ],
                        M: [ 'kuu aja', 'kuu aega', '??ks kuu' ],
                        MM: [ number + ' kuu', number + ' kuud' ],
                        y: [ '??he aasta', 'aasta', '??ks aasta' ],
                        yy: [ number + ' aasta', number + ' aastat' ]
                    };
                    if (withoutSuffix) {
                        return format[key][2] ? format[key][2] : format[key][1];
                    }
                    return isFuture ? format[key][0] : format[key][1];
                }
                return moment.defineLocale('et', {
                    months: 'jaanuar_veebruar_m??rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
                    monthsShort: 'jaan_veebr_m??rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
                    weekdays: 'p??hap??ev_esmasp??ev_teisip??ev_kolmap??ev_neljap??ev_reede_laup??ev'.split('_'),
                    weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
                    weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd, D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[T??na,] LT',
                        nextDay: '[Homme,] LT',
                        nextWeek: '[J??rgmine] dddd LT',
                        lastDay: '[Eile,] LT',
                        lastWeek: '[Eelmine] dddd LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s p??rast',
                        past: '%s tagasi',
                        s: processRelativeTime,
                        m: processRelativeTime,
                        mm: processRelativeTime,
                        h: processRelativeTime,
                        hh: processRelativeTime,
                        d: processRelativeTime,
                        dd: '%d p??eva',
                        M: processRelativeTime,
                        MM: processRelativeTime,
                        y: processRelativeTime,
                        yy: processRelativeTime
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('eu', {
                    months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
                    monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
                    weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
                    weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
                    weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'YYYY-MM-DD',
                        LL: 'YYYY[ko] MMMM[ren] D[a]',
                        LLL: 'YYYY[ko] MMMM[ren] D[a] LT',
                        LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] LT',
                        l: 'YYYY-M-D',
                        ll: 'YYYY[ko] MMM D[a]',
                        lll: 'YYYY[ko] MMM D[a] LT',
                        llll: 'ddd, YYYY[ko] MMM D[a] LT'
                    },
                    calendar: {
                        sameDay: '[gaur] LT[etan]',
                        nextDay: '[bihar] LT[etan]',
                        nextWeek: 'dddd LT[etan]',
                        lastDay: '[atzo] LT[etan]',
                        lastWeek: '[aurreko] dddd LT[etan]',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s barru',
                        past: 'duela %s',
                        s: 'segundo batzuk',
                        m: 'minutu bat',
                        mm: '%d minutu',
                        h: 'ordu bat',
                        hh: '%d ordu',
                        d: 'egun bat',
                        dd: '%d egun',
                        M: 'hilabete bat',
                        MM: '%d hilabete',
                        y: 'urte bat',
                        yy: '%d urte'
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var symbolMap = {
                    '1': '??',
                    '2': '??',
                    '3': '??',
                    '4': '??',
                    '5': '??',
                    '6': '??',
                    '7': '??',
                    '8': '??',
                    '9': '??',
                    '0': '??'
                }, numberMap = {
                    '??': '1',
                    '??': '2',
                    '??': '3',
                    '??': '4',
                    '??': '5',
                    '??': '6',
                    '??': '7',
                    '??': '8',
                    '??': '9',
                    '??': '0'
                };
                return moment.defineLocale('fa', {
                    months: '????????????_??????????_????????_??????????_????_????????_??????????_??????_??????????????_??????????_????????????_????????????'.split('_'),
                    monthsShort: '????????????_??????????_????????_??????????_????_????????_??????????_??????_??????????????_??????????_????????????_????????????'.split('_'),
                    weekdays: '???????????????_????????????_???????????????_????????????????_?????????????????_????????_????????'.split('_'),
                    weekdaysShort: '???????????????_????????????_???????????????_????????????????_?????????????????_????????_????????'.split('_'),
                    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 12) {
                            return '?????? ???? ??????';
                        } else {
                            return '?????? ???? ??????';
                        }
                    },
                    calendar: {
                        sameDay: '[?????????? ????????] LT',
                        nextDay: '[???????? ????????] LT',
                        nextWeek: 'dddd [????????] LT',
                        lastDay: '[?????????? ????????] LT',
                        lastWeek: 'dddd [??????] [????????] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '???? %s',
                        past: '%s ??????',
                        s: '?????????? ??????????',
                        m: '???? ??????????',
                        mm: '%d ??????????',
                        h: '???? ????????',
                        hh: '%d ????????',
                        d: '???? ??????',
                        dd: '%d ??????',
                        M: '???? ??????',
                        MM: '%d ??????',
                        y: '???? ??????',
                        yy: '%d ??????'
                    },
                    preparse: function preparse(string) {
                        return string.replace(/[??-??]/g, function(match) {
                            return numberMap[match];
                        }).replace(/??/g, ',');
                    },
                    postformat: function postformat(string) {
                        return string.replace(/\d/g, function(match) {
                            return symbolMap[match];
                        }).replace(/,/g, '??');
                    },
                    ordinal: '%d??',
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var numbersPast = 'nolla yksi kaksi kolme nelj?? viisi kuusi seitsem??n kahdeksan yhdeks??n'.split(' '), numbersFuture = [ 'nolla', 'yhden', 'kahden', 'kolmen', 'nelj??n', 'viiden', 'kuuden', numbersPast[7], numbersPast[8], numbersPast[9] ];
                function translate(number, withoutSuffix, key, isFuture) {
                    var result = '';
                    switch (key) {
                      case 's':
                        return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';

                      case 'm':
                        return isFuture ? 'minuutin' : 'minuutti';

                      case 'mm':
                        result = isFuture ? 'minuutin' : 'minuuttia';
                        break;

                      case 'h':
                        return isFuture ? 'tunnin' : 'tunti';

                      case 'hh':
                        result = isFuture ? 'tunnin' : 'tuntia';
                        break;

                      case 'd':
                        return isFuture ? 'p??iv??n' : 'p??iv??';

                      case 'dd':
                        result = isFuture ? 'p??iv??n' : 'p??iv????';
                        break;

                      case 'M':
                        return isFuture ? 'kuukauden' : 'kuukausi';

                      case 'MM':
                        result = isFuture ? 'kuukauden' : 'kuukautta';
                        break;

                      case 'y':
                        return isFuture ? 'vuoden' : 'vuosi';

                      case 'yy':
                        result = isFuture ? 'vuoden' : 'vuotta';
                        break;
                    }
                    result = verbalNumber(number, isFuture) + ' ' + result;
                    return result;
                }
                function verbalNumber(number, isFuture) {
                    return number < 10 ? isFuture ? numbersFuture[number] : numbersPast[number] : number;
                }
                return moment.defineLocale('fi', {
                    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes??kuu_hein??kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
                    monthsShort: 'tammi_helmi_maalis_huhti_touko_kes??_hein??_elo_syys_loka_marras_joulu'.split('_'),
                    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
                    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
                    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
                    longDateFormat: {
                        LT: 'HH.mm',
                        L: 'DD.MM.YYYY',
                        LL: 'Do MMMM[ta] YYYY',
                        LLL: 'Do MMMM[ta] YYYY, [klo] LT',
                        LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] LT',
                        l: 'D.M.YYYY',
                        ll: 'Do MMM YYYY',
                        lll: 'Do MMM YYYY, [klo] LT',
                        llll: 'ddd, Do MMM YYYY, [klo] LT'
                    },
                    calendar: {
                        sameDay: '[t??n????n] [klo] LT',
                        nextDay: '[huomenna] [klo] LT',
                        nextWeek: 'dddd [klo] LT',
                        lastDay: '[eilen] [klo] LT',
                        lastWeek: '[viime] dddd[na] [klo] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s p????st??',
                        past: '%s sitten',
                        s: translate,
                        m: translate,
                        mm: translate,
                        h: translate,
                        hh: translate,
                        d: translate,
                        dd: translate,
                        M: translate,
                        MM: translate,
                        y: translate,
                        yy: translate
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('fo', {
                    months: 'januar_februar_mars_apr??l_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
                    monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
                    weekdays: 'sunnudagur_m??nadagur_t??sdagur_mikudagur_h??sdagur_fr??ggjadagur_leygardagur'.split('_'),
                    weekdaysShort: 'sun_m??n_t??s_mik_h??s_fr??_ley'.split('_'),
                    weekdaysMin: 'su_m??_t??_mi_h??_fr_le'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D. MMMM, YYYY LT'
                    },
                    calendar: {
                        sameDay: '[?? dag kl.] LT',
                        nextDay: '[?? morgin kl.] LT',
                        nextWeek: 'dddd [kl.] LT',
                        lastDay: '[?? gj??r kl.] LT',
                        lastWeek: '[s????stu] dddd [kl] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'um %s',
                        past: '%s s????ani',
                        s: 'f?? sekund',
                        m: 'ein minutt',
                        mm: '%d minuttir',
                        h: 'ein t??mi',
                        hh: '%d t??mar',
                        d: 'ein dagur',
                        dd: '%d dagar',
                        M: 'ein m??na??i',
                        MM: '%d m??na??ir',
                        y: 'eitt ??r',
                        yy: '%d ??r'
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('fr-ca', {
                    months: 'janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre'.split('_'),
                    monthsShort: 'janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.'.split('_'),
                    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
                    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
                    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'YYYY-MM-DD',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Aujourd\'hui ??] LT',
                        nextDay: '[Demain ??] LT',
                        nextWeek: 'dddd [??] LT',
                        lastDay: '[Hier ??] LT',
                        lastWeek: 'dddd [dernier ??] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'dans %s',
                        past: 'il y a %s',
                        s: 'quelques secondes',
                        m: 'une minute',
                        mm: '%d minutes',
                        h: 'une heure',
                        hh: '%d heures',
                        d: 'un jour',
                        dd: '%d jours',
                        M: 'un mois',
                        MM: '%d mois',
                        y: 'un an',
                        yy: '%d ans'
                    },
                    ordinal: function ordinal(number) {
                        return number + (number === 1 ? 'er' : '');
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('fr', {
                    months: 'janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre'.split('_'),
                    monthsShort: 'janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.'.split('_'),
                    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
                    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
                    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Aujourd\'hui ??] LT',
                        nextDay: '[Demain ??] LT',
                        nextWeek: 'dddd [??] LT',
                        lastDay: '[Hier ??] LT',
                        lastWeek: 'dddd [dernier ??] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'dans %s',
                        past: 'il y a %s',
                        s: 'quelques secondes',
                        m: 'une minute',
                        mm: '%d minutes',
                        h: 'une heure',
                        hh: '%d heures',
                        d: 'un jour',
                        dd: '%d jours',
                        M: 'un mois',
                        MM: '%d mois',
                        y: 'un an',
                        yy: '%d ans'
                    },
                    ordinal: function ordinal(number) {
                        return number + (number === 1 ? 'er' : '');
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('gl', {
                    months: 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xu??o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
                    monthsShort: 'Xan._Feb._Mar._Abr._Mai._Xu??._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
                    weekdays: 'Domingo_Luns_Martes_M??rcores_Xoves_Venres_S??bado'.split('_'),
                    weekdaysShort: 'Dom._Lun._Mar._M??r._Xov._Ven._S??b.'.split('_'),
                    weekdaysMin: 'Do_Lu_Ma_M??_Xo_Ve_S??'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: function sameDay() {
                            return '[hoxe ' + (this.hours() !== 1 ? '??s' : '??') + '] LT';
                        },
                        nextDay: function nextDay() {
                            return '[ma???? ' + (this.hours() !== 1 ? '??s' : '??') + '] LT';
                        },
                        nextWeek: function nextWeek() {
                            return 'dddd [' + (this.hours() !== 1 ? '??s' : 'a') + '] LT';
                        },
                        lastDay: function lastDay() {
                            return '[onte ' + (this.hours() !== 1 ? '??' : 'a') + '] LT';
                        },
                        lastWeek: function lastWeek() {
                            return '[o] dddd [pasado ' + (this.hours() !== 1 ? '??s' : 'a') + '] LT';
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: function future(str) {
                            if (str === 'uns segundos') {
                                return 'nuns segundos';
                            }
                            return 'en ' + str;
                        },
                        past: 'hai %s',
                        s: 'uns segundos',
                        m: 'un minuto',
                        mm: '%d minutos',
                        h: 'unha hora',
                        hh: '%d horas',
                        d: 'un d??a',
                        dd: '%d d??as',
                        M: 'un mes',
                        MM: '%d meses',
                        y: 'un ano',
                        yy: '%d anos'
                    },
                    ordinal: '%d??',
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('he', {
                    months: '??????????_????????????_??????_??????????_??????_????????_????????_????????????_????????????_??????????????_????????????_??????????'.split('_'),
                    monthsShort: '????????_????????_??????_????????_??????_????????_????????_????????_????????_????????_????????_????????'.split('_'),
                    weekdays: '??????????_??????_??????????_??????????_??????????_????????_??????'.split('_'),
                    weekdaysShort: '????_????_????_????_????_????_????'.split('_'),
                    weekdaysMin: '??_??_??_??_??_??_??'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D [??]MMMM YYYY',
                        LLL: 'D [??]MMMM YYYY LT',
                        LLLL: 'dddd, D [??]MMMM YYYY LT',
                        l: 'D/M/YYYY',
                        ll: 'D MMM YYYY',
                        lll: 'D MMM YYYY LT',
                        llll: 'ddd, D MMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[???????? ????]LT',
                        nextDay: '[?????? ????]LT',
                        nextWeek: 'dddd [????????] LT',
                        lastDay: '[?????????? ????]LT',
                        lastWeek: '[????????] dddd [???????????? ????????] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '???????? %s',
                        past: '???????? %s',
                        s: '???????? ??????????',
                        m: '??????',
                        mm: '%d ????????',
                        h: '??????',
                        hh: function hh(number) {
                            if (number === 2) {
                                return '????????????';
                            }
                            return number + ' ????????';
                        },
                        d: '??????',
                        dd: function dd(number) {
                            if (number === 2) {
                                return '????????????';
                            }
                            return number + ' ????????';
                        },
                        M: '????????',
                        MM: function MM(number) {
                            if (number === 2) {
                                return '??????????????';
                            }
                            return number + ' ????????????';
                        },
                        y: '??????',
                        yy: function yy(number) {
                            if (number === 2) {
                                return '????????????';
                            }
                            return number + ' ????????';
                        }
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var symbolMap = {
                    '1': '???',
                    '2': '???',
                    '3': '???',
                    '4': '???',
                    '5': '???',
                    '6': '???',
                    '7': '???',
                    '8': '???',
                    '9': '???',
                    '0': '???'
                }, numberMap = {
                    '???': '1',
                    '???': '2',
                    '???': '3',
                    '???': '4',
                    '???': '5',
                    '???': '6',
                    '???': '7',
                    '???': '8',
                    '???': '9',
                    '???': '0'
                };
                return moment.defineLocale('hi', {
                    months: '???????????????_??????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_?????????????????????_?????????????????????_??????????????????_?????????????????????'.split('_'),
                    monthsShort: '??????._?????????._???????????????_???????????????._??????_?????????_?????????._??????._?????????._???????????????._??????._?????????.'.split('_'),
                    weekdays: '??????????????????_??????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????'.split('_'),
                    weekdaysShort: '?????????_?????????_????????????_?????????_????????????_???????????????_?????????'.split('_'),
                    weekdaysMin: '???_??????_??????_??????_??????_??????_???'.split('_'),
                    longDateFormat: {
                        LT: 'A h:mm ?????????',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY, LT',
                        LLLL: 'dddd, D MMMM YYYY, LT'
                    },
                    calendar: {
                        sameDay: '[??????] LT',
                        nextDay: '[??????] LT',
                        nextWeek: 'dddd, LT',
                        lastDay: '[??????] LT',
                        lastWeek: '[???????????????] dddd, LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s ?????????',
                        past: '%s ????????????',
                        s: '????????? ?????? ????????????',
                        m: '?????? ????????????',
                        mm: '%d ????????????',
                        h: '?????? ????????????',
                        hh: '%d ????????????',
                        d: '?????? ?????????',
                        dd: '%d ?????????',
                        M: '?????? ???????????????',
                        MM: '%d ???????????????',
                        y: '?????? ????????????',
                        yy: '%d ????????????'
                    },
                    preparse: function preparse(string) {
                        return string.replace(/[??????????????????????????????]/g, function(match) {
                            return numberMap[match];
                        });
                    },
                    postformat: function postformat(string) {
                        return string.replace(/\d/g, function(match) {
                            return symbolMap[match];
                        });
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 4) {
                            return '?????????';
                        } else if (hour < 10) {
                            return '????????????';
                        } else if (hour < 17) {
                            return '???????????????';
                        } else if (hour < 20) {
                            return '?????????';
                        } else {
                            return '?????????';
                        }
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function translate(number, withoutSuffix, key) {
                    var result = number + ' ';
                    switch (key) {
                      case 'm':
                        return withoutSuffix ? 'jedna minuta' : 'jedne minute';

                      case 'mm':
                        if (number === 1) {
                            result += 'minuta';
                        } else if (number === 2 || number === 3 || number === 4) {
                            result += 'minute';
                        } else {
                            result += 'minuta';
                        }
                        return result;

                      case 'h':
                        return withoutSuffix ? 'jedan sat' : 'jednog sata';

                      case 'hh':
                        if (number === 1) {
                            result += 'sat';
                        } else if (number === 2 || number === 3 || number === 4) {
                            result += 'sata';
                        } else {
                            result += 'sati';
                        }
                        return result;

                      case 'dd':
                        if (number === 1) {
                            result += 'dan';
                        } else {
                            result += 'dana';
                        }
                        return result;

                      case 'MM':
                        if (number === 1) {
                            result += 'mjesec';
                        } else if (number === 2 || number === 3 || number === 4) {
                            result += 'mjeseca';
                        } else {
                            result += 'mjeseci';
                        }
                        return result;

                      case 'yy':
                        if (number === 1) {
                            result += 'godina';
                        } else if (number === 2 || number === 3 || number === 4) {
                            result += 'godine';
                        } else {
                            result += 'godina';
                        }
                        return result;
                    }
                }
                return moment.defineLocale('hr', {
                    months: 'sje??anj_velja??a_o??ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
                    monthsShort: 'sje._vel._o??u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
                    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota'.split('_'),
                    weekdaysShort: 'ned._pon._uto._sri._??et._pet._sub.'.split('_'),
                    weekdaysMin: 'ne_po_ut_sr_??e_pe_su'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD. MM. YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd, D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[danas u] LT',
                        nextDay: '[sutra u] LT',
                        nextWeek: function nextWeek() {
                            switch (this.day()) {
                              case 0:
                                return '[u] [nedjelju] [u] LT';

                              case 3:
                                return '[u] [srijedu] [u] LT';

                              case 6:
                                return '[u] [subotu] [u] LT';

                              case 1:
                              case 2:
                              case 4:
                              case 5:
                                return '[u] dddd [u] LT';
                            }
                        },
                        lastDay: '[ju??er u] LT',
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 0:
                              case 3:
                                return '[pro??lu] dddd [u] LT';

                              case 6:
                                return '[pro??le] [subote] [u] LT';

                              case 1:
                              case 2:
                              case 4:
                              case 5:
                                return '[pro??li] dddd [u] LT';
                            }
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'za %s',
                        past: 'prije %s',
                        s: 'par sekundi',
                        m: translate,
                        mm: translate,
                        h: translate,
                        hh: translate,
                        d: 'dan',
                        dd: translate,
                        M: 'mjesec',
                        MM: translate,
                        y: 'godinu',
                        yy: translate
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var weekEndings = 'vas??rnap h??tf??n kedden szerd??n cs??t??rt??k??n p??nteken szombaton'.split(' ');
                function translate(number, withoutSuffix, key, isFuture) {
                    var num = number, suffix;
                    switch (key) {
                      case 's':
                        return isFuture || withoutSuffix ? 'n??h??ny m??sodperc' : 'n??h??ny m??sodperce';

                      case 'm':
                        return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');

                      case 'mm':
                        return num + (isFuture || withoutSuffix ? ' perc' : ' perce');

                      case 'h':
                        return 'egy' + (isFuture || withoutSuffix ? ' ??ra' : ' ??r??ja');

                      case 'hh':
                        return num + (isFuture || withoutSuffix ? ' ??ra' : ' ??r??ja');

                      case 'd':
                        return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');

                      case 'dd':
                        return num + (isFuture || withoutSuffix ? ' nap' : ' napja');

                      case 'M':
                        return 'egy' + (isFuture || withoutSuffix ? ' h??nap' : ' h??napja');

                      case 'MM':
                        return num + (isFuture || withoutSuffix ? ' h??nap' : ' h??napja');

                      case 'y':
                        return 'egy' + (isFuture || withoutSuffix ? ' ??v' : ' ??ve');

                      case 'yy':
                        return num + (isFuture || withoutSuffix ? ' ??v' : ' ??ve');
                    }
                    return '';
                }
                function week(isFuture) {
                    return (isFuture ? '' : '[m??lt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
                }
                return moment.defineLocale('hu', {
                    months: 'janu??r_febru??r_m??rcius_??prilis_m??jus_j??nius_j??lius_augusztus_szeptember_okt??ber_november_december'.split('_'),
                    monthsShort: 'jan_feb_m??rc_??pr_m??j_j??n_j??l_aug_szept_okt_nov_dec'.split('_'),
                    weekdays: 'vas??rnap_h??tf??_kedd_szerda_cs??t??rt??k_p??ntek_szombat'.split('_'),
                    weekdaysShort: 'vas_h??t_kedd_sze_cs??t_p??n_szo'.split('_'),
                    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'YYYY.MM.DD.',
                        LL: 'YYYY. MMMM D.',
                        LLL: 'YYYY. MMMM D., LT',
                        LLLL: 'YYYY. MMMM D., dddd LT'
                    },
                    meridiem: function meridiem(hours, minutes, isLower) {
                        if (hours < 12) {
                            return isLower === true ? 'de' : 'DE';
                        } else {
                            return isLower === true ? 'du' : 'DU';
                        }
                    },
                    calendar: {
                        sameDay: '[ma] LT[-kor]',
                        nextDay: '[holnap] LT[-kor]',
                        nextWeek: function nextWeek() {
                            return week.call(this, true);
                        },
                        lastDay: '[tegnap] LT[-kor]',
                        lastWeek: function lastWeek() {
                            return week.call(this, false);
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s m??lva',
                        past: '%s',
                        s: translate,
                        m: translate,
                        mm: translate,
                        h: translate,
                        hh: translate,
                        d: translate,
                        dd: translate,
                        M: translate,
                        MM: translate,
                        y: translate,
                        yy: translate
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function monthsCaseReplace(m, format) {
                    var months = {
                        nominative: '??????????????_??????????????_????????_??????????_??????????_????????????_????????????_??????????????_??????????????????_??????????????????_????????????????_??????????????????'.split('_'),
                        accusative: '????????????????_????????????????_??????????_????????????_????????????_??????????????_??????????????_????????????????_????????????????????_????????????????????_??????????????????_????????????????????'.split('_')
                    }, nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
                    return months[nounCase][m.month()];
                }
                function monthsShortCaseReplace(m, format) {
                    var monthsShort = '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????'.split('_');
                    return monthsShort[m.month()];
                }
                function weekdaysCaseReplace(m, format) {
                    var weekdays = '????????????_????????????????????_??????????????????_????????????????????_??????????????????_????????????_??????????'.split('_');
                    return weekdays[m.day()];
                }
                return moment.defineLocale('hy-am', {
                    months: monthsCaseReplace,
                    monthsShort: monthsShortCaseReplace,
                    weekdays: weekdaysCaseReplace,
                    weekdaysShort: '??????_??????_??????_??????_??????_????????_??????'.split('_'),
                    weekdaysMin: '??????_??????_??????_??????_??????_????????_??????'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY ??.',
                        LLL: 'D MMMM YYYY ??., LT',
                        LLLL: 'dddd, D MMMM YYYY ??., LT'
                    },
                    calendar: {
                        sameDay: '[??????????] LT',
                        nextDay: '[????????] LT',
                        lastDay: '[????????] LT',
                        nextWeek: function nextWeek() {
                            return 'dddd [?????? ????????] LT';
                        },
                        lastWeek: function lastWeek() {
                            return '[??????????] dddd [?????? ????????] LT';
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s ????????',
                        past: '%s ????????',
                        s: '???? ???????? ????????????????',
                        m: '????????',
                        mm: '%d ????????',
                        h: '??????',
                        hh: '%d ??????',
                        d: '????',
                        dd: '%d ????',
                        M: '????????',
                        MM: '%d ????????',
                        y: '????????',
                        yy: '%d ????????'
                    },
                    meridiem: function meridiem(hour) {
                        if (hour < 4) {
                            return '??????????????';
                        } else if (hour < 12) {
                            return '????????????????';
                        } else if (hour < 17) {
                            return '??????????????';
                        } else {
                            return '????????????????';
                        }
                    },
                    ordinal: function ordinal(number, period) {
                        switch (period) {
                          case 'DDD':
                          case 'w':
                          case 'W':
                          case 'DDDo':
                            if (number === 1) {
                                return number + '-????';
                            }
                            return number + '-????';

                          default:
                            return number;
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('id', {
                    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
                    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
                    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
                    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
                    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
                    longDateFormat: {
                        LT: 'HH.mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY [pukul] LT',
                        LLLL: 'dddd, D MMMM YYYY [pukul] LT'
                    },
                    meridiem: function meridiem(hours, minutes, isLower) {
                        if (hours < 11) {
                            return 'pagi';
                        } else if (hours < 15) {
                            return 'siang';
                        } else if (hours < 19) {
                            return 'sore';
                        } else {
                            return 'malam';
                        }
                    },
                    calendar: {
                        sameDay: '[Hari ini pukul] LT',
                        nextDay: '[Besok pukul] LT',
                        nextWeek: 'dddd [pukul] LT',
                        lastDay: '[Kemarin pukul] LT',
                        lastWeek: 'dddd [lalu pukul] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'dalam %s',
                        past: '%s yang lalu',
                        s: 'beberapa detik',
                        m: 'semenit',
                        mm: '%d menit',
                        h: 'sejam',
                        hh: '%d jam',
                        d: 'sehari',
                        dd: '%d hari',
                        M: 'sebulan',
                        MM: '%d bulan',
                        y: 'setahun',
                        yy: '%d tahun'
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function plural(n) {
                    if (n % 100 === 11) {
                        return true;
                    } else if (n % 10 === 1) {
                        return false;
                    }
                    return true;
                }
                function translate(number, withoutSuffix, key, isFuture) {
                    var result = number + ' ';
                    switch (key) {
                      case 's':
                        return withoutSuffix || isFuture ? 'nokkrar sek??ndur' : 'nokkrum sek??ndum';

                      case 'm':
                        return withoutSuffix ? 'm??n??ta' : 'm??n??tu';

                      case 'mm':
                        if (plural(number)) {
                            return result + (withoutSuffix || isFuture ? 'm??n??tur' : 'm??n??tum');
                        } else if (withoutSuffix) {
                            return result + 'm??n??ta';
                        }
                        return result + 'm??n??tu';

                      case 'hh':
                        if (plural(number)) {
                            return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
                        }
                        return result + 'klukkustund';

                      case 'd':
                        if (withoutSuffix) {
                            return 'dagur';
                        }
                        return isFuture ? 'dag' : 'degi';

                      case 'dd':
                        if (plural(number)) {
                            if (withoutSuffix) {
                                return result + 'dagar';
                            }
                            return result + (isFuture ? 'daga' : 'd??gum');
                        } else if (withoutSuffix) {
                            return result + 'dagur';
                        }
                        return result + (isFuture ? 'dag' : 'degi');

                      case 'M':
                        if (withoutSuffix) {
                            return 'm??nu??ur';
                        }
                        return isFuture ? 'm??nu??' : 'm??nu??i';

                      case 'MM':
                        if (plural(number)) {
                            if (withoutSuffix) {
                                return result + 'm??nu??ir';
                            }
                            return result + (isFuture ? 'm??nu??i' : 'm??nu??um');
                        } else if (withoutSuffix) {
                            return result + 'm??nu??ur';
                        }
                        return result + (isFuture ? 'm??nu??' : 'm??nu??i');

                      case 'y':
                        return withoutSuffix || isFuture ? '??r' : '??ri';

                      case 'yy':
                        if (plural(number)) {
                            return result + (withoutSuffix || isFuture ? '??r' : '??rum');
                        }
                        return result + (withoutSuffix || isFuture ? '??r' : '??ri');
                    }
                }
                return moment.defineLocale('is', {
                    months: 'jan??ar_febr??ar_mars_apr??l_ma??_j??n??_j??l??_??g??st_september_okt??ber_n??vember_desember'.split('_'),
                    monthsShort: 'jan_feb_mar_apr_ma??_j??n_j??l_??g??_sep_okt_n??v_des'.split('_'),
                    weekdays: 'sunnudagur_m??nudagur_??ri??judagur_mi??vikudagur_fimmtudagur_f??studagur_laugardagur'.split('_'),
                    weekdaysShort: 'sun_m??n_??ri_mi??_fim_f??s_lau'.split('_'),
                    weekdaysMin: 'Su_M??_??r_Mi_Fi_F??_La'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY [kl.] LT',
                        LLLL: 'dddd, D. MMMM YYYY [kl.] LT'
                    },
                    calendar: {
                        sameDay: '[?? dag kl.] LT',
                        nextDay: '[?? morgun kl.] LT',
                        nextWeek: 'dddd [kl.] LT',
                        lastDay: '[?? g??r kl.] LT',
                        lastWeek: '[s????asta] dddd [kl.] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'eftir %s',
                        past: 'fyrir %s s????an',
                        s: translate,
                        m: translate,
                        mm: translate,
                        h: 'klukkustund',
                        hh: translate,
                        d: translate,
                        dd: translate,
                        M: translate,
                        MM: translate,
                        y: translate,
                        yy: translate
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('it', {
                    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
                    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
                    weekdays: 'Domenica_Luned??_Marted??_Mercoled??_Gioved??_Venerd??_Sabato'.split('_'),
                    weekdaysShort: 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
                    weekdaysMin: 'D_L_Ma_Me_G_V_S'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Oggi alle] LT',
                        nextDay: '[Domani alle] LT',
                        nextWeek: 'dddd [alle] LT',
                        lastDay: '[Ieri alle] LT',
                        lastWeek: '[lo scorso] dddd [alle] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: function future(s) {
                            return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
                        },
                        past: '%s fa',
                        s: 'alcuni secondi',
                        m: 'un minuto',
                        mm: '%d minuti',
                        h: 'un\'ora',
                        hh: '%d ore',
                        d: 'un giorno',
                        dd: '%d giorni',
                        M: 'un mese',
                        MM: '%d mesi',
                        y: 'un anno',
                        yy: '%d anni'
                    },
                    ordinal: '%d??',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('ja', {
                    months: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split('_'),
                    monthsShort: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split('_'),
                    weekdays: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
                    weekdaysShort: '???_???_???_???_???_???_???'.split('_'),
                    weekdaysMin: '???_???_???_???_???_???_???'.split('_'),
                    longDateFormat: {
                        LT: 'Ah???m???',
                        L: 'YYYY/MM/DD',
                        LL: 'YYYY???M???D???',
                        LLL: 'YYYY???M???D???LT',
                        LLLL: 'YYYY???M???D???LT dddd'
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 12) {
                            return '??????';
                        } else {
                            return '??????';
                        }
                    },
                    calendar: {
                        sameDay: '[??????] LT',
                        nextDay: '[??????] LT',
                        nextWeek: '[??????]dddd LT',
                        lastDay: '[??????] LT',
                        lastWeek: '[??????]dddd LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s???',
                        past: '%s???',
                        s: '??????',
                        m: '1???',
                        mm: '%d???',
                        h: '1??????',
                        hh: '%d??????',
                        d: '1???',
                        dd: '%d???',
                        M: '1??????',
                        MM: '%d??????',
                        y: '1???',
                        yy: '%d???'
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function monthsCaseReplace(m, format) {
                    var months = {
                        nominative: '?????????????????????_???????????????????????????_???????????????_??????????????????_???????????????_??????????????????_??????????????????_?????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????'.split('_'),
                        accusative: '?????????????????????_???????????????????????????_???????????????_?????????????????????_???????????????_??????????????????_??????????????????_?????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????'.split('_')
                    }, nounCase = /D[oD] *MMMM?/.test(format) ? 'accusative' : 'nominative';
                    return months[nounCase][m.month()];
                }
                function weekdaysCaseReplace(m, format) {
                    var weekdays = {
                        nominative: '???????????????_????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_??????????????????'.split('_'),
                        accusative: '??????????????????_????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_??????????????????'.split('_')
                    }, nounCase = /(????????????|??????????????????)/.test(format) ? 'accusative' : 'nominative';
                    return weekdays[nounCase][m.day()];
                }
                return moment.defineLocale('ka', {
                    months: monthsCaseReplace,
                    monthsShort: '?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
                    weekdays: weekdaysCaseReplace,
                    weekdaysShort: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
                    weekdaysMin: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
                    longDateFormat: {
                        LT: 'h:mm A',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[????????????] LT[-??????]',
                        nextDay: '[????????????] LT[-??????]',
                        lastDay: '[???????????????] LT[-??????]',
                        nextWeek: '[??????????????????] dddd LT[-??????]',
                        lastWeek: '[????????????] dddd LT-??????',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: function future(s) {
                            return /(????????????|????????????|???????????????|????????????)/.test(s) ? s.replace(/???$/, '??????') : s + '??????';
                        },
                        past: function past(s) {
                            if (/(????????????|????????????|???????????????|?????????|?????????)/.test(s)) {
                                return s.replace(/(???|???)$/, '?????? ?????????');
                            }
                            if (/????????????/.test(s)) {
                                return s.replace(/????????????$/, '???????????? ?????????');
                            }
                        },
                        s: '??????????????????????????? ????????????',
                        m: '????????????',
                        mm: '%d ????????????',
                        h: '???????????????',
                        hh: '%d ???????????????',
                        d: '?????????',
                        dd: '%d ?????????',
                        M: '?????????',
                        MM: '%d ?????????',
                        y: '????????????',
                        yy: '%d ????????????'
                    },
                    ordinal: function ordinal(number) {
                        if (number === 0) {
                            return number;
                        }
                        if (number === 1) {
                            return number + '-??????';
                        }
                        if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
                            return '??????-' + number;
                        }
                        return number + '-???';
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('km', {
                    months: '????????????_??????????????????_????????????_????????????_????????????_??????????????????_??????????????????_????????????_???????????????_????????????_????????????????????????_????????????'.split('_'),
                    monthsShort: '????????????_??????????????????_????????????_????????????_????????????_??????????????????_??????????????????_????????????_???????????????_????????????_????????????????????????_????????????'.split('_'),
                    weekdays: '?????????????????????_???????????????_??????????????????_?????????_??????????????????????????????_???????????????_????????????'.split('_'),
                    weekdaysShort: '?????????????????????_???????????????_??????????????????_?????????_??????????????????????????????_???????????????_????????????'.split('_'),
                    weekdaysMin: '?????????????????????_???????????????_??????????????????_?????????_??????????????????????????????_???????????????_????????????'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[?????????????????? ????????????] LT',
                        nextDay: '[??????????????? ????????????] LT',
                        nextWeek: 'dddd [????????????] LT',
                        lastDay: '[???????????????????????? ????????????] LT',
                        lastWeek: 'dddd [??????????????????????????????] [????????????] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s?????????',
                        past: '%s?????????',
                        s: '??????????????????????????????????????????',
                        m: '?????????????????????',
                        mm: '%d ????????????',
                        h: '?????????????????????',
                        hh: '%d ????????????',
                        d: '?????????????????????',
                        dd: '%d ????????????',
                        M: '???????????????',
                        MM: '%d ??????',
                        y: '????????????????????????',
                        yy: '%d ???????????????'
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('ko', {
                    months: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split('_'),
                    monthsShort: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split('_'),
                    weekdays: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
                    weekdaysShort: '???_???_???_???_???_???_???'.split('_'),
                    weekdaysMin: '???_???_???_???_???_???_???'.split('_'),
                    longDateFormat: {
                        LT: 'A h??? m???',
                        L: 'YYYY.MM.DD',
                        LL: 'YYYY??? MMMM D???',
                        LLL: 'YYYY??? MMMM D??? LT',
                        LLLL: 'YYYY??? MMMM D??? dddd LT'
                    },
                    meridiem: function meridiem(hour, minute, isUpper) {
                        return hour < 12 ? '??????' : '??????';
                    },
                    calendar: {
                        sameDay: '?????? LT',
                        nextDay: '?????? LT',
                        nextWeek: 'dddd LT',
                        lastDay: '?????? LT',
                        lastWeek: '????????? dddd LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s ???',
                        past: '%s ???',
                        s: '??????',
                        ss: '%d???',
                        m: '??????',
                        mm: '%d???',
                        h: '?????????',
                        hh: '%d??????',
                        d: '??????',
                        dd: '%d???',
                        M: '??????',
                        MM: '%d???',
                        y: '??????',
                        yy: '%d???'
                    },
                    ordinal: '%d???',
                    meridiemParse: /(??????|??????)/,
                    isPM: function isPM(token) {
                        return token === '??????';
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function processRelativeTime(number, withoutSuffix, key, isFuture) {
                    var format = {
                        m: [ 'eng Minutt', 'enger Minutt' ],
                        h: [ 'eng Stonn', 'enger Stonn' ],
                        d: [ 'een Dag', 'engem Dag' ],
                        M: [ 'ee Mount', 'engem Mount' ],
                        y: [ 'ee Joer', 'engem Joer' ]
                    };
                    return withoutSuffix ? format[key][0] : format[key][1];
                }
                function processFutureTime(string) {
                    var number = string.substr(0, string.indexOf(' '));
                    if (eifelerRegelAppliesToNumber(number)) {
                        return 'a ' + string;
                    }
                    return 'an ' + string;
                }
                function processPastTime(string) {
                    var number = string.substr(0, string.indexOf(' '));
                    if (eifelerRegelAppliesToNumber(number)) {
                        return 'viru ' + string;
                    }
                    return 'virun ' + string;
                }
                function eifelerRegelAppliesToNumber(number) {
                    number = parseInt(number, 10);
                    if (isNaN(number)) {
                        return false;
                    }
                    if (number < 0) {
                        return true;
                    } else if (number < 10) {
                        if (4 <= number && number <= 7) {
                            return true;
                        }
                        return false;
                    } else if (number < 100) {
                        var lastDigit = number % 10, firstDigit = number / 10;
                        if (lastDigit === 0) {
                            return eifelerRegelAppliesToNumber(firstDigit);
                        }
                        return eifelerRegelAppliesToNumber(lastDigit);
                    } else if (number < 1e4) {
                        while (number >= 10) {
                            number = number / 10;
                        }
                        return eifelerRegelAppliesToNumber(number);
                    } else {
                        number = number / 1e3;
                        return eifelerRegelAppliesToNumber(number);
                    }
                }
                return moment.defineLocale('lb', {
                    months: 'Januar_Februar_M??erz_Abr??ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
                    monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
                    weekdays: 'Sonndeg_M??indeg_D??nschdeg_M??ttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
                    weekdaysShort: 'So._M??._D??._M??._Do._Fr._Sa.'.split('_'),
                    weekdaysMin: 'So_M??_D??_M??_Do_Fr_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm [Auer]',
                        L: 'DD.MM.YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd, D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Haut um] LT',
                        sameElse: 'L',
                        nextDay: '[Muer um] LT',
                        nextWeek: 'dddd [um] LT',
                        lastDay: '[G??schter um] LT',
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 2:
                              case 4:
                                return '[Leschten] dddd [um] LT';

                              default:
                                return '[Leschte] dddd [um] LT';
                            }
                        }
                    },
                    relativeTime: {
                        future: processFutureTime,
                        past: processPastTime,
                        s: 'e puer Sekonnen',
                        m: processRelativeTime,
                        mm: '%d Minutten',
                        h: processRelativeTime,
                        hh: '%d Stonnen',
                        d: processRelativeTime,
                        dd: '%d Deeg',
                        M: processRelativeTime,
                        MM: '%d M??int',
                        y: processRelativeTime,
                        yy: '%d Joer'
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var units = {
                    m: 'minut??_minut??s_minut??',
                    mm: 'minut??s_minu??i??_minutes',
                    h: 'valanda_valandos_valand??',
                    hh: 'valandos_valand??_valandas',
                    d: 'diena_dienos_dien??',
                    dd: 'dienos_dien??_dienas',
                    M: 'm??nuo_m??nesio_m??nes??',
                    MM: 'm??nesiai_m??nesi??_m??nesius',
                    y: 'metai_met??_metus',
                    yy: 'metai_met??_metus'
                }, weekDays = 'sekmadienis_pirmadienis_antradienis_tre??iadienis_ketvirtadienis_penktadienis_??e??tadienis'.split('_');
                function translateSeconds(number, withoutSuffix, key, isFuture) {
                    if (withoutSuffix) {
                        return 'kelios sekund??s';
                    } else {
                        return isFuture ? 'keli?? sekund??i??' : 'kelias sekundes';
                    }
                }
                function translateSingular(number, withoutSuffix, key, isFuture) {
                    return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
                }
                function special(number) {
                    return number % 10 === 0 || number > 10 && number < 20;
                }
                function forms(key) {
                    return units[key].split('_');
                }
                function translate(number, withoutSuffix, key, isFuture) {
                    var result = number + ' ';
                    if (number === 1) {
                        return result + translateSingular(number, withoutSuffix, key[0], isFuture);
                    } else if (withoutSuffix) {
                        return result + (special(number) ? forms(key)[1] : forms(key)[0]);
                    } else {
                        if (isFuture) {
                            return result + forms(key)[1];
                        } else {
                            return result + (special(number) ? forms(key)[1] : forms(key)[2]);
                        }
                    }
                }
                function relativeWeekDay(moment, format) {
                    var nominative = format.indexOf('dddd HH:mm') === -1, weekDay = weekDays[moment.day()];
                    return nominative ? weekDay : weekDay.substring(0, weekDay.length - 2) + '??';
                }
                return moment.defineLocale('lt', {
                    months: 'sausio_vasario_kovo_baland??io_gegu????s_bir??elio_liepos_rugpj????io_rugs??jo_spalio_lapkri??io_gruod??io'.split('_'),
                    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
                    weekdays: relativeWeekDay,
                    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_??e??'.split('_'),
                    weekdaysMin: 'S_P_A_T_K_Pn_??'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'YYYY-MM-DD',
                        LL: 'YYYY [m.] MMMM D [d.]',
                        LLL: 'YYYY [m.] MMMM D [d.], LT [val.]',
                        LLLL: 'YYYY [m.] MMMM D [d.], dddd, LT [val.]',
                        l: 'YYYY-MM-DD',
                        ll: 'YYYY [m.] MMMM D [d.]',
                        lll: 'YYYY [m.] MMMM D [d.], LT [val.]',
                        llll: 'YYYY [m.] MMMM D [d.], ddd, LT [val.]'
                    },
                    calendar: {
                        sameDay: '[??iandien] LT',
                        nextDay: '[Rytoj] LT',
                        nextWeek: 'dddd LT',
                        lastDay: '[Vakar] LT',
                        lastWeek: '[Pra??jus??] dddd LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'po %s',
                        past: 'prie?? %s',
                        s: translateSeconds,
                        m: translateSingular,
                        mm: translate,
                        h: translateSingular,
                        hh: translate,
                        d: translateSingular,
                        dd: translate,
                        M: translateSingular,
                        MM: translate,
                        y: translateSingular,
                        yy: translate
                    },
                    ordinal: function ordinal(number) {
                        return number + '-oji';
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var units = {
                    mm: 'min??ti_min??tes_min??te_min??tes',
                    hh: 'stundu_stundas_stunda_stundas',
                    dd: 'dienu_dienas_diena_dienas',
                    MM: 'm??nesi_m??ne??us_m??nesis_m??ne??i',
                    yy: 'gadu_gadus_gads_gadi'
                };
                function format(word, number, withoutSuffix) {
                    var forms = word.split('_');
                    if (withoutSuffix) {
                        return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
                    } else {
                        return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
                    }
                }
                function relativeTimeWithPlural(number, withoutSuffix, key) {
                    return number + ' ' + format(units[key], number, withoutSuffix);
                }
                return moment.defineLocale('lv', {
                    months: 'janv??ris_febru??ris_marts_apr??lis_maijs_j??nijs_j??lijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
                    monthsShort: 'jan_feb_mar_apr_mai_j??n_j??l_aug_sep_okt_nov_dec'.split('_'),
                    weekdays: 'sv??tdiena_pirmdiena_otrdiena_tre??diena_ceturtdiena_piektdiena_sestdiena'.split('_'),
                    weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
                    weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'YYYY. [gada] D. MMMM',
                        LLL: 'YYYY. [gada] D. MMMM, LT',
                        LLLL: 'YYYY. [gada] D. MMMM, dddd, LT'
                    },
                    calendar: {
                        sameDay: '[??odien pulksten] LT',
                        nextDay: '[R??t pulksten] LT',
                        nextWeek: 'dddd [pulksten] LT',
                        lastDay: '[Vakar pulksten] LT',
                        lastWeek: '[Pag??ju????] dddd [pulksten] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s v??l??k',
                        past: '%s agr??k',
                        s: 'da??as sekundes',
                        m: 'min??ti',
                        mm: relativeTimeWithPlural,
                        h: 'stundu',
                        hh: relativeTimeWithPlural,
                        d: 'dienu',
                        dd: relativeTimeWithPlural,
                        M: 'm??nesi',
                        MM: relativeTimeWithPlural,
                        y: 'gadu',
                        yy: relativeTimeWithPlural
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('mk', {
                    months: '??????????????_????????????????_????????_??????????_??????_????????_????????_????????????_??????????????????_????????????????_??????????????_????????????????'.split('_'),
                    monthsShort: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????'.split('_'),
                    weekdays: '????????????_????????????????????_??????????????_??????????_????????????????_??????????_????????????'.split('_'),
                    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
                    weekdaysMin: '??e_??o_????_????_????_????_??a'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'D.MM.YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[?????????? ????] LT',
                        nextDay: '[???????? ????] LT',
                        nextWeek: 'dddd [????] LT',
                        lastDay: '[?????????? ????] LT',
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 0:
                              case 3:
                              case 6:
                                return '[???? ????????????????????] dddd [????] LT';

                              case 1:
                              case 2:
                              case 4:
                              case 5:
                                return '[???? ????????????????????] dddd [????] LT';
                            }
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '?????????? %s',
                        past: '???????? %s',
                        s: '?????????????? ??????????????',
                        m: '????????????',
                        mm: '%d ????????????',
                        h: '??????',
                        hh: '%d ????????',
                        d: '??????',
                        dd: '%d ????????',
                        M: '??????????',
                        MM: '%d ????????????',
                        y: '????????????',
                        yy: '%d ????????????'
                    },
                    ordinal: function ordinal(number) {
                        var lastDigit = number % 10, last2Digits = number % 100;
                        if (number === 0) {
                            return number + '-????';
                        } else if (last2Digits === 0) {
                            return number + '-????';
                        } else if (last2Digits > 10 && last2Digits < 20) {
                            return number + '-????';
                        } else if (lastDigit === 1) {
                            return number + '-????';
                        } else if (lastDigit === 2) {
                            return number + '-????';
                        } else if (lastDigit === 7 || lastDigit === 8) {
                            return number + '-????';
                        } else {
                            return number + '-????';
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('ml', {
                    months: '??????????????????_???????????????????????????_?????????????????????_??????????????????_????????????_?????????_????????????_????????????????????????_??????????????????????????????_?????????????????????_???????????????_??????????????????'.split('_'),
                    monthsShort: '?????????._??????????????????._?????????._???????????????._????????????_?????????_????????????._??????._?????????????????????._???????????????._?????????._????????????.'.split('_'),
                    weekdays: '????????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????_?????????????????????????????????_????????????????????????'.split('_'),
                    weekdaysShort: '????????????_??????????????????_???????????????_????????????_??????????????????_??????????????????_?????????'.split('_'),
                    weekdaysMin: '??????_??????_??????_??????_????????????_??????_???'.split('_'),
                    longDateFormat: {
                        LT: 'A h:mm -??????',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY, LT',
                        LLLL: 'dddd, D MMMM YYYY, LT'
                    },
                    calendar: {
                        sameDay: '[???????????????] LT',
                        nextDay: '[????????????] LT',
                        nextWeek: 'dddd, LT',
                        lastDay: '[??????????????????] LT',
                        lastWeek: '[??????????????????] dddd, LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s ?????????????????????',
                        past: '%s ???????????????',
                        s: '????????? ???????????????????????????',
                        m: '????????? ????????????????????????',
                        mm: '%d ????????????????????????',
                        h: '????????? ????????????????????????',
                        hh: '%d ????????????????????????',
                        d: '????????? ???????????????',
                        dd: '%d ???????????????',
                        M: '????????? ????????????',
                        MM: '%d ????????????',
                        y: '????????? ????????????',
                        yy: '%d ????????????'
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 4) {
                            return '??????????????????';
                        } else if (hour < 12) {
                            return '??????????????????';
                        } else if (hour < 17) {
                            return '???????????? ?????????????????????';
                        } else if (hour < 20) {
                            return '??????????????????????????????';
                        } else {
                            return '??????????????????';
                        }
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var symbolMap = {
                    '1': '???',
                    '2': '???',
                    '3': '???',
                    '4': '???',
                    '5': '???',
                    '6': '???',
                    '7': '???',
                    '8': '???',
                    '9': '???',
                    '0': '???'
                }, numberMap = {
                    '???': '1',
                    '???': '2',
                    '???': '3',
                    '???': '4',
                    '???': '5',
                    '???': '6',
                    '???': '7',
                    '???': '8',
                    '???': '9',
                    '???': '0'
                };
                return moment.defineLocale('mr', {
                    months: '????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_????????????_???????????????_????????????????????????_?????????????????????_???????????????????????????_?????????????????????'.split('_'),
                    monthsShort: '????????????._??????????????????._???????????????._???????????????._??????._?????????._????????????._??????._??????????????????._???????????????._?????????????????????._???????????????.'.split('_'),
                    weekdays: '??????????????????_??????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????'.split('_'),
                    weekdaysShort: '?????????_?????????_????????????_?????????_????????????_???????????????_?????????'.split('_'),
                    weekdaysMin: '???_??????_??????_??????_??????_??????_???'.split('_'),
                    longDateFormat: {
                        LT: 'A h:mm ???????????????',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY, LT',
                        LLLL: 'dddd, D MMMM YYYY, LT'
                    },
                    calendar: {
                        sameDay: '[??????] LT',
                        nextDay: '[???????????????] LT',
                        nextWeek: 'dddd, LT',
                        lastDay: '[?????????] LT',
                        lastWeek: '[???????????????] dddd, LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s ????????????',
                        past: '%s ??????????????????',
                        s: '???????????????',
                        m: '?????? ???????????????',
                        mm: '%d ??????????????????',
                        h: '?????? ?????????',
                        hh: '%d ?????????',
                        d: '?????? ????????????',
                        dd: '%d ????????????',
                        M: '?????? ???????????????',
                        MM: '%d ???????????????',
                        y: '?????? ????????????',
                        yy: '%d ???????????????'
                    },
                    preparse: function preparse(string) {
                        return string.replace(/[??????????????????????????????]/g, function(match) {
                            return numberMap[match];
                        });
                    },
                    postformat: function postformat(string) {
                        return string.replace(/\d/g, function(match) {
                            return symbolMap[match];
                        });
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 4) {
                            return '??????????????????';
                        } else if (hour < 10) {
                            return '???????????????';
                        } else if (hour < 17) {
                            return '??????????????????';
                        } else if (hour < 20) {
                            return '????????????????????????';
                        } else {
                            return '??????????????????';
                        }
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('ms-my', {
                    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
                    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
                    weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
                    weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
                    weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
                    longDateFormat: {
                        LT: 'HH.mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY [pukul] LT',
                        LLLL: 'dddd, D MMMM YYYY [pukul] LT'
                    },
                    meridiem: function meridiem(hours, minutes, isLower) {
                        if (hours < 11) {
                            return 'pagi';
                        } else if (hours < 15) {
                            return 'tengahari';
                        } else if (hours < 19) {
                            return 'petang';
                        } else {
                            return 'malam';
                        }
                    },
                    calendar: {
                        sameDay: '[Hari ini pukul] LT',
                        nextDay: '[Esok pukul] LT',
                        nextWeek: 'dddd [pukul] LT',
                        lastDay: '[Kelmarin pukul] LT',
                        lastWeek: 'dddd [lepas pukul] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'dalam %s',
                        past: '%s yang lepas',
                        s: 'beberapa saat',
                        m: 'seminit',
                        mm: '%d minit',
                        h: 'sejam',
                        hh: '%d jam',
                        d: 'sehari',
                        dd: '%d hari',
                        M: 'sebulan',
                        MM: '%d bulan',
                        y: 'setahun',
                        yy: '%d tahun'
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var symbolMap = {
                    '1': '???',
                    '2': '???',
                    '3': '???',
                    '4': '???',
                    '5': '???',
                    '6': '???',
                    '7': '???',
                    '8': '???',
                    '9': '???',
                    '0': '???'
                }, numberMap = {
                    '???': '1',
                    '???': '2',
                    '???': '3',
                    '???': '4',
                    '???': '5',
                    '???': '6',
                    '???': '7',
                    '???': '8',
                    '???': '9',
                    '???': '0'
                };
                return moment.defineLocale('my', {
                    months: '????????????????????????_??????????????????????????????_?????????_????????????_??????_????????????_?????????????????????_??????????????????_????????????????????????_??????????????????????????????_????????????????????????_?????????????????????'.split('_'),
                    monthsShort: '?????????_??????_?????????_?????????_??????_????????????_???????????????_??????_?????????_???????????????_?????????_??????'.split('_'),
                    weekdays: '???????????????????????????_?????????????????????_??????????????????_????????????????????????_????????????????????????_??????????????????_?????????'.split('_'),
                    weekdaysShort: '?????????_??????_???????????????_?????????_?????????_?????????_??????'.split('_'),
                    weekdaysMin: '?????????_??????_???????????????_?????????_?????????_?????????_??????'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[?????????.] LT [?????????]',
                        nextDay: '[????????????????????????] LT [?????????]',
                        nextWeek: 'dddd LT [?????????]',
                        lastDay: '[?????????.???] LT [?????????]',
                        lastWeek: '[??????????????????????????????] dddd LT [?????????]',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '?????????????????? %s ?????????',
                        past: '?????????????????????????????? %s ???',
                        s: '??????????????????.????????????????????????',
                        m: '????????????????????????',
                        mm: '%d ???????????????',
                        h: '?????????????????????',
                        hh: '%d ????????????',
                        d: '??????????????????',
                        dd: '%d ?????????',
                        M: '????????????',
                        MM: '%d ???',
                        y: '?????????????????????',
                        yy: '%d ????????????'
                    },
                    preparse: function preparse(string) {
                        return string.replace(/[??????????????????????????????]/g, function(match) {
                            return numberMap[match];
                        });
                    },
                    postformat: function postformat(string) {
                        return string.replace(/\d/g, function(match) {
                            return symbolMap[match];
                        });
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('nb', {
                    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
                    monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
                    weekdays: 's??ndag_mandag_tirsdag_onsdag_torsdag_fredag_l??rdag'.split('_'),
                    weekdaysShort: 's??n_man_tirs_ons_tors_fre_l??r'.split('_'),
                    weekdaysMin: 's??_ma_ti_on_to_fr_l??'.split('_'),
                    longDateFormat: {
                        LT: 'H.mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY [kl.] LT',
                        LLLL: 'dddd D. MMMM YYYY [kl.] LT'
                    },
                    calendar: {
                        sameDay: '[i dag kl.] LT',
                        nextDay: '[i morgen kl.] LT',
                        nextWeek: 'dddd [kl.] LT',
                        lastDay: '[i g??r kl.] LT',
                        lastWeek: '[forrige] dddd [kl.] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'om %s',
                        past: 'for %s siden',
                        s: 'noen sekunder',
                        m: 'ett minutt',
                        mm: '%d minutter',
                        h: 'en time',
                        hh: '%d timer',
                        d: 'en dag',
                        dd: '%d dager',
                        M: 'en m??ned',
                        MM: '%d m??neder',
                        y: 'ett ??r',
                        yy: '%d ??r'
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var symbolMap = {
                    '1': '???',
                    '2': '???',
                    '3': '???',
                    '4': '???',
                    '5': '???',
                    '6': '???',
                    '7': '???',
                    '8': '???',
                    '9': '???',
                    '0': '???'
                }, numberMap = {
                    '???': '1',
                    '???': '2',
                    '???': '3',
                    '???': '4',
                    '???': '5',
                    '???': '6',
                    '???': '7',
                    '???': '8',
                    '???': '9',
                    '???': '0'
                };
                return moment.defineLocale('ne', {
                    months: '???????????????_???????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????????????????_?????????????????????_????????????????????????_????????????????????????'.split('_'),
                    monthsShort: '??????._??????????????????._???????????????_???????????????._??????_?????????_???????????????._??????._???????????????._???????????????._????????????._????????????.'.split('_'),
                    weekdays: '??????????????????_??????????????????_????????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????'.split('_'),
                    weekdaysShort: '?????????._?????????._???????????????._?????????._????????????._???????????????._?????????.'.split('_'),
                    weekdaysMin: '??????._??????._?????????_??????._??????._??????._???.'.split('_'),
                    longDateFormat: {
                        LT: 'A?????? h:mm ?????????',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY, LT',
                        LLLL: 'dddd, D MMMM YYYY, LT'
                    },
                    preparse: function preparse(string) {
                        return string.replace(/[??????????????????????????????]/g, function(match) {
                            return numberMap[match];
                        });
                    },
                    postformat: function postformat(string) {
                        return string.replace(/\d/g, function(match) {
                            return symbolMap[match];
                        });
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 3) {
                            return '????????????';
                        } else if (hour < 10) {
                            return '???????????????';
                        } else if (hour < 15) {
                            return '??????????????????';
                        } else if (hour < 18) {
                            return '??????????????????';
                        } else if (hour < 20) {
                            return '????????????';
                        } else {
                            return '????????????';
                        }
                    },
                    calendar: {
                        sameDay: '[??????] LT',
                        nextDay: '[????????????] LT',
                        nextWeek: '[???????????????] dddd[,] LT',
                        lastDay: '[????????????] LT',
                        lastWeek: '[????????????] dddd[,] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s??????',
                        past: '%s ???????????????',
                        s: '???????????? ?????????',
                        m: '?????? ???????????????',
                        mm: '%d ???????????????',
                        h: '?????? ???????????????',
                        hh: '%d ???????????????',
                        d: '?????? ?????????',
                        dd: '%d ?????????',
                        M: '?????? ???????????????',
                        MM: '%d ???????????????',
                        y: '?????? ????????????',
                        yy: '%d ????????????'
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
                return moment.defineLocale('nl', {
                    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
                    monthsShort: function monthsShort(m, format) {
                        if (/-MMM-/.test(format)) {
                            return monthsShortWithoutDots[m.month()];
                        } else {
                            return monthsShortWithDots[m.month()];
                        }
                    },
                    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
                    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
                    weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD-MM-YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[vandaag om] LT',
                        nextDay: '[morgen om] LT',
                        nextWeek: 'dddd [om] LT',
                        lastDay: '[gisteren om] LT',
                        lastWeek: '[afgelopen] dddd [om] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'over %s',
                        past: '%s geleden',
                        s: 'een paar seconden',
                        m: '????n minuut',
                        mm: '%d minuten',
                        h: '????n uur',
                        hh: '%d uur',
                        d: '????n dag',
                        dd: '%d dagen',
                        M: '????n maand',
                        MM: '%d maanden',
                        y: '????n jaar',
                        yy: '%d jaar'
                    },
                    ordinal: function ordinal(number) {
                        return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('nn', {
                    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
                    monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
                    weekdays: 'sundag_m??ndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
                    weekdaysShort: 'sun_m??n_tys_ons_tor_fre_lau'.split('_'),
                    weekdaysMin: 'su_m??_ty_on_to_fr_l??'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[I dag klokka] LT',
                        nextDay: '[I morgon klokka] LT',
                        nextWeek: 'dddd [klokka] LT',
                        lastDay: '[I g??r klokka] LT',
                        lastWeek: '[F??reg??ande] dddd [klokka] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'om %s',
                        past: 'for %s sidan',
                        s: 'nokre sekund',
                        m: 'eit minutt',
                        mm: '%d minutt',
                        h: 'ein time',
                        hh: '%d timar',
                        d: 'ein dag',
                        dd: '%d dagar',
                        M: 'ein m??nad',
                        MM: '%d m??nader',
                        y: 'eit ??r',
                        yy: '%d ??r'
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var monthsNominative = 'stycze??_luty_marzec_kwiecie??_maj_czerwiec_lipiec_sierpie??_wrzesie??_pa??dziernik_listopad_grudzie??'.split('_'), monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze??nia_pa??dziernika_listopada_grudnia'.split('_');
                function plural(n) {
                    return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
                }
                function translate(number, withoutSuffix, key) {
                    var result = number + ' ';
                    switch (key) {
                      case 'm':
                        return withoutSuffix ? 'minuta' : 'minut??';

                      case 'mm':
                        return result + (plural(number) ? 'minuty' : 'minut');

                      case 'h':
                        return withoutSuffix ? 'godzina' : 'godzin??';

                      case 'hh':
                        return result + (plural(number) ? 'godziny' : 'godzin');

                      case 'MM':
                        return result + (plural(number) ? 'miesi??ce' : 'miesi??cy');

                      case 'yy':
                        return result + (plural(number) ? 'lata' : 'lat');
                    }
                }
                return moment.defineLocale('pl', {
                    months: function months(momentToFormat, format) {
                        if (/D MMMM/.test(format)) {
                            return monthsSubjective[momentToFormat.month()];
                        } else {
                            return monthsNominative[momentToFormat.month()];
                        }
                    },
                    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa??_lis_gru'.split('_'),
                    weekdays: 'niedziela_poniedzia??ek_wtorek_??roda_czwartek_pi??tek_sobota'.split('_'),
                    weekdaysShort: 'nie_pon_wt_??r_czw_pt_sb'.split('_'),
                    weekdaysMin: 'N_Pn_Wt_??r_Cz_Pt_So'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Dzi?? o] LT',
                        nextDay: '[Jutro o] LT',
                        nextWeek: '[W] dddd [o] LT',
                        lastDay: '[Wczoraj o] LT',
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 0:
                                return '[W zesz???? niedziel?? o] LT';

                              case 3:
                                return '[W zesz???? ??rod?? o] LT';

                              case 6:
                                return '[W zesz???? sobot?? o] LT';

                              default:
                                return '[W zesz??y] dddd [o] LT';
                            }
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'za %s',
                        past: '%s temu',
                        s: 'kilka sekund',
                        m: translate,
                        mm: translate,
                        h: translate,
                        hh: translate,
                        d: '1 dzie??',
                        dd: '%d dni',
                        M: 'miesi??c',
                        MM: translate,
                        y: 'rok',
                        yy: translate
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('pt-br', {
                    months: 'janeiro_fevereiro_mar??o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
                    monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
                    weekdays: 'domingo_segunda-feira_ter??a-feira_quarta-feira_quinta-feira_sexta-feira_s??bado'.split('_'),
                    weekdaysShort: 'dom_seg_ter_qua_qui_sex_s??b'.split('_'),
                    weekdaysMin: 'dom_2??_3??_4??_5??_6??_s??b'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D [de] MMMM [de] YYYY',
                        LLL: 'D [de] MMMM [de] YYYY [??s] LT',
                        LLLL: 'dddd, D [de] MMMM [de] YYYY [??s] LT'
                    },
                    calendar: {
                        sameDay: '[Hoje ??s] LT',
                        nextDay: '[Amanh?? ??s] LT',
                        nextWeek: 'dddd [??s] LT',
                        lastDay: '[Ontem ??s] LT',
                        lastWeek: function lastWeek() {
                            return this.day() === 0 || this.day() === 6 ? '[??ltimo] dddd [??s] LT' : '[??ltima] dddd [??s] LT';
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'em %s',
                        past: '%s atr??s',
                        s: 'segundos',
                        m: 'um minuto',
                        mm: '%d minutos',
                        h: 'uma hora',
                        hh: '%d horas',
                        d: 'um dia',
                        dd: '%d dias',
                        M: 'um m??s',
                        MM: '%d meses',
                        y: 'um ano',
                        yy: '%d anos'
                    },
                    ordinal: '%d??'
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('pt', {
                    months: 'janeiro_fevereiro_mar??o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
                    monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
                    weekdays: 'domingo_segunda-feira_ter??a-feira_quarta-feira_quinta-feira_sexta-feira_s??bado'.split('_'),
                    weekdaysShort: 'dom_seg_ter_qua_qui_sex_s??b'.split('_'),
                    weekdaysMin: 'dom_2??_3??_4??_5??_6??_s??b'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D [de] MMMM [de] YYYY',
                        LLL: 'D [de] MMMM [de] YYYY LT',
                        LLLL: 'dddd, D [de] MMMM [de] YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Hoje ??s] LT',
                        nextDay: '[Amanh?? ??s] LT',
                        nextWeek: 'dddd [??s] LT',
                        lastDay: '[Ontem ??s] LT',
                        lastWeek: function lastWeek() {
                            return this.day() === 0 || this.day() === 6 ? '[??ltimo] dddd [??s] LT' : '[??ltima] dddd [??s] LT';
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'em %s',
                        past: 'h?? %s',
                        s: 'segundos',
                        m: 'um minuto',
                        mm: '%d minutos',
                        h: 'uma hora',
                        hh: '%d horas',
                        d: 'um dia',
                        dd: '%d dias',
                        M: 'um m??s',
                        MM: '%d meses',
                        y: 'um ano',
                        yy: '%d anos'
                    },
                    ordinal: '%d??',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function relativeTimeWithPlural(number, withoutSuffix, key) {
                    var format = {
                        mm: 'minute',
                        hh: 'ore',
                        dd: 'zile',
                        MM: 'luni',
                        yy: 'ani'
                    }, separator = ' ';
                    if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
                        separator = ' de ';
                    }
                    return number + separator + format[key];
                }
                return moment.defineLocale('ro', {
                    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
                    monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
                    weekdays: 'duminic??_luni_mar??i_miercuri_joi_vineri_s??mb??t??'.split('_'),
                    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_S??m'.split('_'),
                    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_S??'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY H:mm',
                        LLLL: 'dddd, D MMMM YYYY H:mm'
                    },
                    calendar: {
                        sameDay: '[azi la] LT',
                        nextDay: '[m??ine la] LT',
                        nextWeek: 'dddd [la] LT',
                        lastDay: '[ieri la] LT',
                        lastWeek: '[fosta] dddd [la] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'peste %s',
                        past: '%s ??n urm??',
                        s: 'c??teva secunde',
                        m: 'un minut',
                        mm: relativeTimeWithPlural,
                        h: 'o or??',
                        hh: relativeTimeWithPlural,
                        d: 'o zi',
                        dd: relativeTimeWithPlural,
                        M: 'o lun??',
                        MM: relativeTimeWithPlural,
                        y: 'un an',
                        yy: relativeTimeWithPlural
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function plural(word, num) {
                    var forms = word.split('_');
                    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
                }
                function relativeTimeWithPlural(number, withoutSuffix, key) {
                    var format = {
                        mm: withoutSuffix ? '????????????_????????????_??????????' : '????????????_????????????_??????????',
                        hh: '??????_????????_??????????',
                        dd: '????????_??????_????????',
                        MM: '??????????_????????????_??????????????',
                        yy: '??????_????????_??????'
                    };
                    if (key === 'm') {
                        return withoutSuffix ? '????????????' : '????????????';
                    } else {
                        return number + ' ' + plural(format[key], +number);
                    }
                }
                function monthsCaseReplace(m, format) {
                    var months = {
                        nominative: '????????????_??????????????_????????_????????????_??????_????????_????????_????????????_????????????????_??????????????_????????????_??????????????'.split('_'),
                        accusative: '????????????_??????????????_??????????_????????????_??????_????????_????????_??????????????_????????????????_??????????????_????????????_??????????????'.split('_')
                    }, nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
                    return months[nounCase][m.month()];
                }
                function monthsShortCaseReplace(m, format) {
                    var monthsShort = {
                        nominative: '??????_??????_??????_??????_??????_????????_????????_??????_??????_??????_??????_??????'.split('_'),
                        accusative: '??????_??????_??????_??????_??????_????????_????????_??????_??????_??????_??????_??????'.split('_')
                    }, nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
                    return monthsShort[nounCase][m.month()];
                }
                function weekdaysCaseReplace(m, format) {
                    var weekdays = {
                        nominative: '??????????????????????_??????????????????????_??????????????_??????????_??????????????_??????????????_??????????????'.split('_'),
                        accusative: '??????????????????????_??????????????????????_??????????????_??????????_??????????????_??????????????_??????????????'.split('_')
                    }, nounCase = /\[ ?[????] ?(?:??????????????|??????????????????)? ?\] ?dddd/.test(format) ? 'accusative' : 'nominative';
                    return weekdays[nounCase][m.day()];
                }
                return moment.defineLocale('ru', {
                    months: monthsCaseReplace,
                    monthsShort: monthsShortCaseReplace,
                    weekdays: weekdaysCaseReplace,
                    weekdaysShort: '????_????_????_????_????_????_????'.split('_'),
                    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
                    monthsParse: [ /^??????/i, /^??????/i, /^??????/i, /^??????/i, /^????[??|??]/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i ],
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY ??.',
                        LLL: 'D MMMM YYYY ??., LT',
                        LLLL: 'dddd, D MMMM YYYY ??., LT'
                    },
                    calendar: {
                        sameDay: '[?????????????? ??] LT',
                        nextDay: '[???????????? ??] LT',
                        lastDay: '[?????????? ??] LT',
                        nextWeek: function nextWeek() {
                            return this.day() === 2 ? '[????] dddd [??] LT' : '[??] dddd [??] LT';
                        },
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 0:
                                return '[?? ??????????????] dddd [??] LT';

                              case 1:
                              case 2:
                              case 4:
                                return '[?? ??????????????] dddd [??] LT';

                              case 3:
                              case 5:
                              case 6:
                                return '[?? ??????????????] dddd [??] LT';
                            }
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '?????????? %s',
                        past: '%s ??????????',
                        s: '?????????????????? ????????????',
                        m: relativeTimeWithPlural,
                        mm: relativeTimeWithPlural,
                        h: '??????',
                        hh: relativeTimeWithPlural,
                        d: '????????',
                        dd: relativeTimeWithPlural,
                        M: '??????????',
                        MM: relativeTimeWithPlural,
                        y: '??????',
                        yy: relativeTimeWithPlural
                    },
                    meridiemParse: /????????|????????|??????|????????????/i,
                    isPM: function isPM(input) {
                        return /^(??????|????????????)$/.test(input);
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 4) {
                            return '????????';
                        } else if (hour < 12) {
                            return '????????';
                        } else if (hour < 17) {
                            return '??????';
                        } else {
                            return '????????????';
                        }
                    },
                    ordinal: function ordinal(number, period) {
                        switch (period) {
                          case 'M':
                          case 'd':
                          case 'DDD':
                            return number + '-??';

                          case 'D':
                            return number + '-????';

                          case 'w':
                          case 'W':
                            return number + '-??';

                          default:
                            return number;
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var months = 'janu??r_febru??r_marec_apr??l_m??j_j??n_j??l_august_september_okt??ber_november_december'.split('_'), monthsShort = 'jan_feb_mar_apr_m??j_j??n_j??l_aug_sep_okt_nov_dec'.split('_');
                function plural(n) {
                    return n > 1 && n < 5;
                }
                function translate(number, withoutSuffix, key, isFuture) {
                    var result = number + ' ';
                    switch (key) {
                      case 's':
                        return withoutSuffix || isFuture ? 'p??r sek??nd' : 'p??r sekundami';

                      case 'm':
                        return withoutSuffix ? 'min??ta' : isFuture ? 'min??tu' : 'min??tou';

                      case 'mm':
                        if (withoutSuffix || isFuture) {
                            return result + (plural(number) ? 'min??ty' : 'min??t');
                        } else {
                            return result + 'min??tami';
                        }
                        break;

                      case 'h':
                        return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

                      case 'hh':
                        if (withoutSuffix || isFuture) {
                            return result + (plural(number) ? 'hodiny' : 'hod??n');
                        } else {
                            return result + 'hodinami';
                        }
                        break;

                      case 'd':
                        return withoutSuffix || isFuture ? 'de??' : 'd??om';

                      case 'dd':
                        if (withoutSuffix || isFuture) {
                            return result + (plural(number) ? 'dni' : 'dn??');
                        } else {
                            return result + 'd??ami';
                        }
                        break;

                      case 'M':
                        return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';

                      case 'MM':
                        if (withoutSuffix || isFuture) {
                            return result + (plural(number) ? 'mesiace' : 'mesiacov');
                        } else {
                            return result + 'mesiacmi';
                        }
                        break;

                      case 'y':
                        return withoutSuffix || isFuture ? 'rok' : 'rokom';

                      case 'yy':
                        if (withoutSuffix || isFuture) {
                            return result + (plural(number) ? 'roky' : 'rokov');
                        } else {
                            return result + 'rokmi';
                        }
                        break;
                    }
                }
                return moment.defineLocale('sk', {
                    months: months,
                    monthsShort: monthsShort,
                    monthsParse: function(months, monthsShort) {
                        var i, _monthsParse = [];
                        for (i = 0; i < 12; i++) {
                            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
                        }
                        return _monthsParse;
                    }(months, monthsShort),
                    weekdays: 'nede??a_pondelok_utorok_streda_??tvrtok_piatok_sobota'.split('_'),
                    weekdaysShort: 'ne_po_ut_st_??t_pi_so'.split('_'),
                    weekdaysMin: 'ne_po_ut_st_??t_pi_so'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[dnes o] LT',
                        nextDay: '[zajtra o] LT',
                        nextWeek: function nextWeek() {
                            switch (this.day()) {
                              case 0:
                                return '[v nede??u o] LT';

                              case 1:
                              case 2:
                                return '[v] dddd [o] LT';

                              case 3:
                                return '[v stredu o] LT';

                              case 4:
                                return '[vo ??tvrtok o] LT';

                              case 5:
                                return '[v piatok o] LT';

                              case 6:
                                return '[v sobotu o] LT';
                            }
                        },
                        lastDay: '[v??era o] LT',
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 0:
                                return '[minul?? nede??u o] LT';

                              case 1:
                              case 2:
                                return '[minul??] dddd [o] LT';

                              case 3:
                                return '[minul?? stredu o] LT';

                              case 4:
                              case 5:
                                return '[minul??] dddd [o] LT';

                              case 6:
                                return '[minul?? sobotu o] LT';
                            }
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'za %s',
                        past: 'pred %s',
                        s: translate,
                        m: translate,
                        mm: translate,
                        h: translate,
                        hh: translate,
                        d: translate,
                        dd: translate,
                        M: translate,
                        MM: translate,
                        y: translate,
                        yy: translate
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function translate(number, withoutSuffix, key) {
                    var result = number + ' ';
                    switch (key) {
                      case 'm':
                        return withoutSuffix ? 'ena minuta' : 'eno minuto';

                      case 'mm':
                        if (number === 1) {
                            result += 'minuta';
                        } else if (number === 2) {
                            result += 'minuti';
                        } else if (number === 3 || number === 4) {
                            result += 'minute';
                        } else {
                            result += 'minut';
                        }
                        return result;

                      case 'h':
                        return withoutSuffix ? 'ena ura' : 'eno uro';

                      case 'hh':
                        if (number === 1) {
                            result += 'ura';
                        } else if (number === 2) {
                            result += 'uri';
                        } else if (number === 3 || number === 4) {
                            result += 'ure';
                        } else {
                            result += 'ur';
                        }
                        return result;

                      case 'dd':
                        if (number === 1) {
                            result += 'dan';
                        } else {
                            result += 'dni';
                        }
                        return result;

                      case 'MM':
                        if (number === 1) {
                            result += 'mesec';
                        } else if (number === 2) {
                            result += 'meseca';
                        } else if (number === 3 || number === 4) {
                            result += 'mesece';
                        } else {
                            result += 'mesecev';
                        }
                        return result;

                      case 'yy':
                        if (number === 1) {
                            result += 'leto';
                        } else if (number === 2) {
                            result += 'leti';
                        } else if (number === 3 || number === 4) {
                            result += 'leta';
                        } else {
                            result += 'let';
                        }
                        return result;
                    }
                }
                return moment.defineLocale('sl', {
                    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
                    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
                    weekdays: 'nedelja_ponedeljek_torek_sreda_??etrtek_petek_sobota'.split('_'),
                    weekdaysShort: 'ned._pon._tor._sre._??et._pet._sob.'.split('_'),
                    weekdaysMin: 'ne_po_to_sr_??e_pe_so'.split('_'),
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD. MM. YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd, D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[danes ob] LT',
                        nextDay: '[jutri ob] LT',
                        nextWeek: function nextWeek() {
                            switch (this.day()) {
                              case 0:
                                return '[v] [nedeljo] [ob] LT';

                              case 3:
                                return '[v] [sredo] [ob] LT';

                              case 6:
                                return '[v] [soboto] [ob] LT';

                              case 1:
                              case 2:
                              case 4:
                              case 5:
                                return '[v] dddd [ob] LT';
                            }
                        },
                        lastDay: '[v??eraj ob] LT',
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 0:
                              case 3:
                              case 6:
                                return '[prej??nja] dddd [ob] LT';

                              case 1:
                              case 2:
                              case 4:
                              case 5:
                                return '[prej??nji] dddd [ob] LT';
                            }
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '??ez %s',
                        past: '%s nazaj',
                        s: 'nekaj sekund',
                        m: translate,
                        mm: translate,
                        h: translate,
                        hh: translate,
                        d: 'en dan',
                        dd: translate,
                        M: 'en mesec',
                        MM: translate,
                        y: 'eno leto',
                        yy: translate
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('sq', {
                    months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N??ntor_Dhjetor'.split('_'),
                    monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N??n_Dhj'.split('_'),
                    weekdays: 'E Diel_E H??n??_E Mart??_E M??rkur??_E Enjte_E Premte_E Shtun??'.split('_'),
                    weekdaysShort: 'Die_H??n_Mar_M??r_Enj_Pre_Sht'.split('_'),
                    weekdaysMin: 'D_H_Ma_M??_E_P_Sh'.split('_'),
                    meridiem: function meridiem(hours, minutes, isLower) {
                        return hours < 12 ? 'PD' : 'MD';
                    },
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Sot n??] LT',
                        nextDay: '[Nes??r n??] LT',
                        nextWeek: 'dddd [n??] LT',
                        lastDay: '[Dje n??] LT',
                        lastWeek: 'dddd [e kaluar n??] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'n?? %s',
                        past: '%s m?? par??',
                        s: 'disa sekonda',
                        m: 'nj?? minut??',
                        mm: '%d minuta',
                        h: 'nj?? or??',
                        hh: '%d or??',
                        d: 'nj?? dit??',
                        dd: '%d dit??',
                        M: 'nj?? muaj',
                        MM: '%d muaj',
                        y: 'nj?? vit',
                        yy: '%d vite'
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var translator = {
                    words: {
                        m: [ '?????????? ??????????', '?????????? ????????????' ],
                        mm: [ '??????????', '????????????', '????????????' ],
                        h: [ '?????????? ??????', '???????????? ????????' ],
                        hh: [ '??????', '????????', '????????' ],
                        dd: [ '??????', '????????', '????????' ],
                        MM: [ '??????????', '????????????', '????????????' ],
                        yy: [ '????????????', '????????????', '????????????' ]
                    },
                    correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
                        return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
                    },
                    translate: function translate(number, withoutSuffix, key) {
                        var wordKey = translator.words[key];
                        if (key.length === 1) {
                            return withoutSuffix ? wordKey[0] : wordKey[1];
                        } else {
                            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
                        }
                    }
                };
                return moment.defineLocale('sr-cyrl', {
                    months: [ '????????????', '??????????????', '????????', '??????????', '??????', '??????', '??????', '????????????', '??????????????????', '??????????????', '????????????????', '????????????????' ],
                    monthsShort: [ '??????.', '??????.', '??????.', '??????.', '??????', '??????', '??????', '??????.', '??????.', '??????.', '??????.', '??????.' ],
                    weekdays: [ '????????????', '??????????????????', '????????????', '??????????', '????????????????', '??????????', '????????????' ],
                    weekdaysShort: [ '??????.', '??????.', '??????.', '??????.', '??????.', '??????.', '??????.' ],
                    weekdaysMin: [ '????', '????', '????', '????', '????', '????', '????' ],
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD. MM. YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd, D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[?????????? ??] LT',
                        nextDay: '[?????????? ??] LT',
                        nextWeek: function nextWeek() {
                            switch (this.day()) {
                              case 0:
                                return '[??] [????????????] [??] LT';

                              case 3:
                                return '[??] [??????????] [??] LT';

                              case 6:
                                return '[??] [????????????] [??] LT';

                              case 1:
                              case 2:
                              case 4:
                              case 5:
                                return '[??] dddd [??] LT';
                            }
                        },
                        lastDay: '[???????? ??] LT',
                        lastWeek: function lastWeek() {
                            var lastWeekDays = [ '[????????????] [????????????] [??] LT', '[??????????????] [??????????????????] [??] LT', '[??????????????] [????????????] [??] LT', '[????????????] [??????????] [??] LT', '[??????????????] [????????????????] [??] LT', '[??????????????] [??????????] [??] LT', '[????????????] [????????????] [??] LT' ];
                            return lastWeekDays[this.day()];
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '???? %s',
                        past: '?????? %s',
                        s: '???????????????? ??????????????',
                        m: translator.translate,
                        mm: translator.translate,
                        h: translator.translate,
                        hh: translator.translate,
                        d: '??????',
                        dd: translator.translate,
                        M: '??????????',
                        MM: translator.translate,
                        y: '????????????',
                        yy: translator.translate
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var translator = {
                    words: {
                        m: [ 'jedan minut', 'jedne minute' ],
                        mm: [ 'minut', 'minute', 'minuta' ],
                        h: [ 'jedan sat', 'jednog sata' ],
                        hh: [ 'sat', 'sata', 'sati' ],
                        dd: [ 'dan', 'dana', 'dana' ],
                        MM: [ 'mesec', 'meseca', 'meseci' ],
                        yy: [ 'godina', 'godine', 'godina' ]
                    },
                    correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
                        return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
                    },
                    translate: function translate(number, withoutSuffix, key) {
                        var wordKey = translator.words[key];
                        if (key.length === 1) {
                            return withoutSuffix ? wordKey[0] : wordKey[1];
                        } else {
                            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
                        }
                    }
                };
                return moment.defineLocale('sr', {
                    months: [ 'januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar' ],
                    monthsShort: [ 'jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.' ],
                    weekdays: [ 'nedelja', 'ponedeljak', 'utorak', 'sreda', '??etvrtak', 'petak', 'subota' ],
                    weekdaysShort: [ 'ned.', 'pon.', 'uto.', 'sre.', '??et.', 'pet.', 'sub.' ],
                    weekdaysMin: [ 'ne', 'po', 'ut', 'sr', '??e', 'pe', 'su' ],
                    longDateFormat: {
                        LT: 'H:mm',
                        L: 'DD. MM. YYYY',
                        LL: 'D. MMMM YYYY',
                        LLL: 'D. MMMM YYYY LT',
                        LLLL: 'dddd, D. MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[danas u] LT',
                        nextDay: '[sutra u] LT',
                        nextWeek: function nextWeek() {
                            switch (this.day()) {
                              case 0:
                                return '[u] [nedelju] [u] LT';

                              case 3:
                                return '[u] [sredu] [u] LT';

                              case 6:
                                return '[u] [subotu] [u] LT';

                              case 1:
                              case 2:
                              case 4:
                              case 5:
                                return '[u] dddd [u] LT';
                            }
                        },
                        lastDay: '[ju??e u] LT',
                        lastWeek: function lastWeek() {
                            var lastWeekDays = [ '[pro??le] [nedelje] [u] LT', '[pro??log] [ponedeljka] [u] LT', '[pro??log] [utorka] [u] LT', '[pro??le] [srede] [u] LT', '[pro??log] [??etvrtka] [u] LT', '[pro??log] [petka] [u] LT', '[pro??le] [subote] [u] LT' ];
                            return lastWeekDays[this.day()];
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'za %s',
                        past: 'pre %s',
                        s: 'nekoliko sekundi',
                        m: translator.translate,
                        mm: translator.translate,
                        h: translator.translate,
                        hh: translator.translate,
                        d: 'dan',
                        dd: translator.translate,
                        M: 'mesec',
                        MM: translator.translate,
                        y: 'godinu',
                        yy: translator.translate
                    },
                    ordinal: '%d.',
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('sv', {
                    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
                    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
                    weekdays: 's??ndag_m??ndag_tisdag_onsdag_torsdag_fredag_l??rdag'.split('_'),
                    weekdaysShort: 's??n_m??n_tis_ons_tor_fre_l??r'.split('_'),
                    weekdaysMin: 's??_m??_ti_on_to_fr_l??'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'YYYY-MM-DD',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Idag] LT',
                        nextDay: '[Imorgon] LT',
                        lastDay: '[Ig??r] LT',
                        nextWeek: 'dddd LT',
                        lastWeek: '[F??rra] dddd[en] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'om %s',
                        past: 'f??r %s sedan',
                        s: 'n??gra sekunder',
                        m: 'en minut',
                        mm: '%d minuter',
                        h: 'en timme',
                        hh: '%d timmar',
                        d: 'en dag',
                        dd: '%d dagar',
                        M: 'en m??nad',
                        MM: '%d m??nader',
                        y: 'ett ??r',
                        yy: '%d ??r'
                    },
                    ordinal: function ordinal(number) {
                        var b = number % 10, output = ~~(number % 100 / 10) === 1 ? 'e' : b === 1 ? 'a' : b === 2 ? 'a' : b === 3 ? 'e' : 'e';
                        return number + output;
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('ta', {
                    months: '???????????????_????????????????????????_??????????????????_??????????????????_??????_????????????_????????????_??????????????????_?????????????????????????????????_???????????????????????????_?????????????????????_????????????????????????'.split('_'),
                    monthsShort: '???????????????_????????????????????????_??????????????????_??????????????????_??????_????????????_????????????_??????????????????_?????????????????????????????????_???????????????????????????_?????????????????????_????????????????????????'.split('_'),
                    weekdays: '?????????????????????????????????????????????_????????????????????????????????????_???????????????????????????????????????_??????????????????????????????_????????????????????????????????????_???????????????????????????????????????_??????????????????????????????'.split('_'),
                    weekdaysShort: '??????????????????_?????????????????????_????????????????????????_???????????????_?????????????????????_??????????????????_?????????'.split('_'),
                    weekdaysMin: '??????_??????_??????_??????_??????_??????_???'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY, LT',
                        LLLL: 'dddd, D MMMM YYYY, LT'
                    },
                    calendar: {
                        sameDay: '[???????????????] LT',
                        nextDay: '[????????????] LT',
                        nextWeek: 'dddd, LT',
                        lastDay: '[??????????????????] LT',
                        lastWeek: '[??????????????? ???????????????] dddd, LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s ?????????',
                        past: '%s ????????????',
                        s: '????????? ????????? ???????????????????????????',
                        m: '????????? ?????????????????????',
                        mm: '%d ??????????????????????????????',
                        h: '????????? ????????? ???????????????',
                        hh: '%d ????????? ???????????????',
                        d: '????????? ????????????',
                        dd: '%d ?????????????????????',
                        M: '????????? ???????????????',
                        MM: '%d ????????????????????????',
                        y: '????????? ??????????????????',
                        yy: '%d ????????????????????????'
                    },
                    ordinal: function ordinal(number) {
                        return number + '?????????';
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour >= 6 && hour <= 10) {
                            return ' ????????????';
                        } else if (hour >= 10 && hour <= 14) {
                            return ' ?????????????????????';
                        } else if (hour >= 14 && hour <= 18) {
                            return ' ?????????????????????';
                        } else if (hour >= 18 && hour <= 20) {
                            return ' ????????????';
                        } else if (hour >= 20 && hour <= 24) {
                            return ' ????????????';
                        } else if (hour >= 0 && hour <= 6) {
                            return ' ???????????????';
                        }
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('th', {
                    months: '??????????????????_??????????????????????????????_??????????????????_??????????????????_?????????????????????_????????????????????????_?????????????????????_?????????????????????_?????????????????????_??????????????????_???????????????????????????_?????????????????????'.split('_'),
                    monthsShort: '????????????_???????????????_????????????_????????????_???????????????_??????????????????_???????????????_???????????????_???????????????_????????????_?????????????????????_???????????????'.split('_'),
                    weekdays: '?????????????????????_??????????????????_??????????????????_?????????_????????????????????????_???????????????_???????????????'.split('_'),
                    weekdaysShort: '?????????????????????_??????????????????_??????????????????_?????????_???????????????_???????????????_???????????????'.split('_'),
                    weekdaysMin: '??????._???._???._???._??????._???._???.'.split('_'),
                    longDateFormat: {
                        LT: 'H ?????????????????? m ????????????',
                        L: 'YYYY/MM/DD',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY ???????????? LT',
                        LLLL: '?????????dddd????????? D MMMM YYYY ???????????? LT'
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 12) {
                            return '??????????????????????????????';
                        } else {
                            return '??????????????????????????????';
                        }
                    },
                    calendar: {
                        sameDay: '[?????????????????? ????????????] LT',
                        nextDay: '[???????????????????????? ????????????] LT',
                        nextWeek: 'dddd[???????????? ????????????] LT',
                        lastDay: '[????????????????????????????????? ????????????] LT',
                        lastWeek: '[?????????]dddd[????????????????????? ????????????] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '????????? %s',
                        past: '%s?????????????????????',
                        s: '????????????????????????????????????',
                        m: '1 ????????????',
                        mm: '%d ????????????',
                        h: '1 ?????????????????????',
                        hh: '%d ?????????????????????',
                        d: '1 ?????????',
                        dd: '%d ?????????',
                        M: '1 ???????????????',
                        MM: '%d ???????????????',
                        y: '1 ??????',
                        yy: '%d ??????'
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('tl-ph', {
                    months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
                    monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
                    weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
                    weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
                    weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'MM/D/YYYY',
                        LL: 'MMMM D, YYYY',
                        LLL: 'MMMM D, YYYY LT',
                        LLLL: 'dddd, MMMM DD, YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Ngayon sa] LT',
                        nextDay: '[Bukas sa] LT',
                        nextWeek: 'dddd [sa] LT',
                        lastDay: '[Kahapon sa] LT',
                        lastWeek: 'dddd [huling linggo] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'sa loob ng %s',
                        past: '%s ang nakalipas',
                        s: 'ilang segundo',
                        m: 'isang minuto',
                        mm: '%d minuto',
                        h: 'isang oras',
                        hh: '%d oras',
                        d: 'isang araw',
                        dd: '%d araw',
                        M: 'isang buwan',
                        MM: '%d buwan',
                        y: 'isang taon',
                        yy: '%d taon'
                    },
                    ordinal: function ordinal(number) {
                        return number;
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                var suffixes = {
                    1: '\'inci',
                    5: '\'inci',
                    8: '\'inci',
                    70: '\'inci',
                    80: '\'inci',
                    2: '\'nci',
                    7: '\'nci',
                    20: '\'nci',
                    50: '\'nci',
                    3: '\'??nc??',
                    4: '\'??nc??',
                    100: '\'??nc??',
                    6: '\'nc??',
                    9: '\'uncu',
                    10: '\'uncu',
                    30: '\'uncu',
                    60: '\'??nc??',
                    90: '\'??nc??'
                };
                return moment.defineLocale('tr', {
                    months: 'Ocak_??ubat_Mart_Nisan_May??s_Haziran_Temmuz_A??ustos_Eyl??l_Ekim_Kas??m_Aral??k'.split('_'),
                    monthsShort: 'Oca_??ub_Mar_Nis_May_Haz_Tem_A??u_Eyl_Eki_Kas_Ara'.split('_'),
                    weekdays: 'Pazar_Pazartesi_Sal??_??ar??amba_Per??embe_Cuma_Cumartesi'.split('_'),
                    weekdaysShort: 'Paz_Pts_Sal_??ar_Per_Cum_Cts'.split('_'),
                    weekdaysMin: 'Pz_Pt_Sa_??a_Pe_Cu_Ct'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd, D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[bug??n saat] LT',
                        nextDay: '[yar??n saat] LT',
                        nextWeek: '[haftaya] dddd [saat] LT',
                        lastDay: '[d??n] LT',
                        lastWeek: '[ge??en hafta] dddd [saat] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s sonra',
                        past: '%s ??nce',
                        s: 'birka?? saniye',
                        m: 'bir dakika',
                        mm: '%d dakika',
                        h: 'bir saat',
                        hh: '%d saat',
                        d: 'bir g??n',
                        dd: '%d g??n',
                        M: 'bir ay',
                        MM: '%d ay',
                        y: 'bir y??l',
                        yy: '%d y??l'
                    },
                    ordinal: function ordinal(number) {
                        if (number === 0) {
                            return number + '\'??nc??';
                        }
                        var a = number % 10, b = number % 100 - a, c = number >= 100 ? 100 : null;
                        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('tzm-latn', {
                    months: 'innayr_br??ayr??_mar??s??_ibrir_mayyw_ywnyw_ywlywz_??w??t_??wtanbir_kt??wbr??_nwwanbir_dwjnbir'.split('_'),
                    monthsShort: 'innayr_br??ayr??_mar??s??_ibrir_mayyw_ywnyw_ywlywz_??w??t_??wtanbir_kt??wbr??_nwwanbir_dwjnbir'.split('_'),
                    weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asi???yas'.split('_'),
                    weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asi???yas'.split('_'),
                    weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asi???yas'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[asdkh g] LT',
                        nextDay: '[aska g] LT',
                        nextWeek: 'dddd [g] LT',
                        lastDay: '[assant g] LT',
                        lastWeek: 'dddd [g] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'dadkh s yan %s',
                        past: 'yan %s',
                        s: 'imik',
                        m: 'minu???',
                        mm: '%d minu???',
                        h: 'sa??a',
                        hh: '%d tassa??in',
                        d: 'ass',
                        dd: '%d ossan',
                        M: 'ayowr',
                        MM: '%d iyyirn',
                        y: 'asgas',
                        yy: '%d isgasn'
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('tzm', {
                    months: '??????????????????_???????????????_????????????_???????????????_???????????????_???????????????_??????????????????_????????????_????????????????????????_???????????????_????????????????????????_?????????????????????'.split('_'),
                    monthsShort: '??????????????????_???????????????_????????????_???????????????_???????????????_???????????????_??????????????????_????????????_????????????????????????_???????????????_????????????????????????_?????????????????????'.split('_'),
                    weekdays: '??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????'.split('_'),
                    weekdaysShort: '??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????'.split('_'),
                    weekdaysMin: '??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[???????????? ???] LT',
                        nextDay: '[???????????? ???] LT',
                        nextWeek: 'dddd [???] LT',
                        lastDay: '[??????????????? ???] LT',
                        lastWeek: 'dddd [???] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '???????????? ??? ????????? %s',
                        past: '????????? %s',
                        s: '????????????',
                        m: '???????????????',
                        mm: '%d ???????????????',
                        h: '????????????',
                        hh: '%d ????????????????????????',
                        d: '?????????',
                        dd: '%d o????????????',
                        M: '??????o??????',
                        MM: '%d ??????????????????',
                        y: '???????????????',
                        yy: '%d ??????????????????'
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                function plural(word, num) {
                    var forms = word.split('_');
                    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
                }
                function relativeTimeWithPlural(number, withoutSuffix, key) {
                    var format = {
                        mm: '??????????????_??????????????_????????????',
                        hh: '????????????_????????????_??????????',
                        dd: '????????_??????_????????',
                        MM: '????????????_????????????_??????????????',
                        yy: '??????_????????_??????????'
                    };
                    if (key === 'm') {
                        return withoutSuffix ? '??????????????' : '??????????????';
                    } else if (key === 'h') {
                        return withoutSuffix ? '????????????' : '????????????';
                    } else {
                        return number + ' ' + plural(format[key], +number);
                    }
                }
                function monthsCaseReplace(m, format) {
                    var months = {
                        nominative: '????????????_??????????_????????????????_??????????????_??????????????_??????????????_????????????_??????????????_????????????????_??????????????_????????????????_??????????????'.split('_'),
                        accusative: '??????????_????????????_??????????????_????????????_????????????_????????????_??????????_????????????_??????????????_????????????_??????????????????_????????????'.split('_')
                    }, nounCase = /D[oD]? *MMMM?/.test(format) ? 'accusative' : 'nominative';
                    return months[nounCase][m.month()];
                }
                function weekdaysCaseReplace(m, format) {
                    var weekdays = {
                        nominative: '????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????'.split('_'),
                        accusative: '????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????'.split('_'),
                        genitive: '????????????_??????????????????_????????????????_????????????_????????????????_?????????????????_????????????'.split('_')
                    }, nounCase = /(\[[????????]\]) ?dddd/.test(format) ? 'accusative' : /\[?(?:??????????????|??????????????????)? ?\] ?dddd/.test(format) ? 'genitive' : 'nominative';
                    return weekdays[nounCase][m.day()];
                }
                function processHoursFunction(str) {
                    return function() {
                        return str + '??' + (this.hours() === 11 ? '??' : '') + '] LT';
                    };
                }
                return moment.defineLocale('uk', {
                    months: monthsCaseReplace,
                    monthsShort: '??????_??????_??????_????????_????????_????????_??????_????????_??????_????????_????????_????????'.split('_'),
                    weekdays: weekdaysCaseReplace,
                    weekdaysShort: '????_????_????_????_????_????_????'.split('_'),
                    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY ??.',
                        LLL: 'D MMMM YYYY ??., LT',
                        LLLL: 'dddd, D MMMM YYYY ??., LT'
                    },
                    calendar: {
                        sameDay: processHoursFunction('[???????????????? '),
                        nextDay: processHoursFunction('[???????????? '),
                        lastDay: processHoursFunction('[?????????? '),
                        nextWeek: processHoursFunction('[??] dddd ['),
                        lastWeek: function lastWeek() {
                            switch (this.day()) {
                              case 0:
                              case 3:
                              case 5:
                              case 6:
                                return processHoursFunction('[??????????????] dddd [').call(this);

                              case 1:
                              case 2:
                              case 4:
                                return processHoursFunction('[????????????????] dddd [').call(this);
                            }
                        },
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '???? %s',
                        past: '%s ????????',
                        s: '???????????????? ????????????',
                        m: relativeTimeWithPlural,
                        mm: relativeTimeWithPlural,
                        h: '????????????',
                        hh: relativeTimeWithPlural,
                        d: '????????',
                        dd: relativeTimeWithPlural,
                        M: '????????????',
                        MM: relativeTimeWithPlural,
                        y: '??????',
                        yy: relativeTimeWithPlural
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        if (hour < 4) {
                            return '????????';
                        } else if (hour < 12) {
                            return '??????????';
                        } else if (hour < 17) {
                            return '??????';
                        } else {
                            return '????????????';
                        }
                    },
                    ordinal: function ordinal(number, period) {
                        switch (period) {
                          case 'M':
                          case 'd':
                          case 'DDD':
                          case 'w':
                          case 'W':
                            return number + '-??';

                          case 'D':
                            return number + '-????';

                          default:
                            return number;
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('uz', {
                    months: '????????????_??????????????_????????_????????????_??????_????????_????????_????????????_????????????????_??????????????_????????????_??????????????'.split('_'),
                    monthsShort: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????'.split('_'),
                    weekdays: '??????????????_??????????????_??????????????_????????????????_????????????????_????????_??????????'.split('_'),
                    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
                    weekdaysMin: '????_????_????_????_????_????_????'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'D MMMM YYYY, dddd LT'
                    },
                    calendar: {
                        sameDay: '[?????????? ????????] LT [????]',
                        nextDay: '[????????????] LT [????]',
                        nextWeek: 'dddd [???????? ????????] LT [????]',
                        lastDay: '[???????? ????????] LT [????]',
                        lastWeek: '[??????????] dddd [???????? ????????] LT [????]',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '???????? %s ??????????',
                        past: '?????? ???????? %s ??????????',
                        s: '????????????',
                        m: '?????? ????????????',
                        mm: '%d ????????????',
                        h: '?????? ????????',
                        hh: '%d ????????',
                        d: '?????? ??????',
                        dd: '%d ??????',
                        M: '?????? ????',
                        MM: '%d ????',
                        y: '?????? ??????',
                        yy: '%d ??????'
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('vi', {
                    months: 'th??ng 1_th??ng 2_th??ng 3_th??ng 4_th??ng 5_th??ng 6_th??ng 7_th??ng 8_th??ng 9_th??ng 10_th??ng 11_th??ng 12'.split('_'),
                    monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
                    weekdays: 'ch??? nh???t_th??? hai_th??? ba_th??? t??_th??? n??m_th??? s??u_th??? b???y'.split('_'),
                    weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
                    weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM [n??m] YYYY',
                        LLL: 'D MMMM [n??m] YYYY LT',
                        LLLL: 'dddd, D MMMM [n??m] YYYY LT',
                        l: 'DD/M/YYYY',
                        ll: 'D MMM YYYY',
                        lll: 'D MMM YYYY LT',
                        llll: 'ddd, D MMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[H??m nay l??c] LT',
                        nextDay: '[Ng??y mai l??c] LT',
                        nextWeek: 'dddd [tu???n t???i l??c] LT',
                        lastDay: '[H??m qua l??c] LT',
                        lastWeek: 'dddd [tu???n r???i l??c] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s t???i',
                        past: '%s tr?????c',
                        s: 'v??i gi??y',
                        m: 'm???t ph??t',
                        mm: '%d ph??t',
                        h: 'm???t gi???',
                        hh: '%d gi???',
                        d: 'm???t ng??y',
                        dd: '%d ng??y',
                        M: 'm???t th??ng',
                        MM: '%d th??ng',
                        y: 'm???t n??m',
                        yy: '%d n??m'
                    },
                    ordinal: function ordinal(number) {
                        return number;
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('zh-cn', {
                    months: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????'.split('_'),
                    monthsShort: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split('_'),
                    weekdays: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
                    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
                    weekdaysMin: '???_???_???_???_???_???_???'.split('_'),
                    longDateFormat: {
                        LT: 'Ah???mm',
                        L: 'YYYY-MM-DD',
                        LL: 'YYYY???MMMD???',
                        LLL: 'YYYY???MMMD???LT',
                        LLLL: 'YYYY???MMMD???ddddLT',
                        l: 'YYYY-MM-DD',
                        ll: 'YYYY???MMMD???',
                        lll: 'YYYY???MMMD???LT',
                        llll: 'YYYY???MMMD???ddddLT'
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        var hm = hour * 100 + minute;
                        if (hm < 600) {
                            return '??????';
                        } else if (hm < 900) {
                            return '??????';
                        } else if (hm < 1130) {
                            return '??????';
                        } else if (hm < 1230) {
                            return '??????';
                        } else if (hm < 1800) {
                            return '??????';
                        } else {
                            return '??????';
                        }
                    },
                    calendar: {
                        sameDay: function sameDay() {
                            return this.minutes() === 0 ? '[??????]Ah[??????]' : '[??????]LT';
                        },
                        nextDay: function nextDay() {
                            return this.minutes() === 0 ? '[??????]Ah[??????]' : '[??????]LT';
                        },
                        lastDay: function lastDay() {
                            return this.minutes() === 0 ? '[??????]Ah[??????]' : '[??????]LT';
                        },
                        nextWeek: function nextWeek() {
                            var startOfWeek, prefix;
                            startOfWeek = moment().startOf('week');
                            prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[???]' : '[???]';
                            return this.minutes() === 0 ? prefix + 'dddAh??????' : prefix + 'dddAh???mm';
                        },
                        lastWeek: function lastWeek() {
                            var startOfWeek, prefix;
                            startOfWeek = moment().startOf('week');
                            prefix = this.unix() < startOfWeek.unix() ? '[???]' : '[???]';
                            return this.minutes() === 0 ? prefix + 'dddAh??????' : prefix + 'dddAh???mm';
                        },
                        sameElse: 'LL'
                    },
                    ordinal: function ordinal(number, period) {
                        switch (period) {
                          case 'd':
                          case 'D':
                          case 'DDD':
                            return number + '???';

                          case 'M':
                            return number + '???';

                          case 'w':
                          case 'W':
                            return number + '???';

                          default:
                            return number;
                        }
                    },
                    relativeTime: {
                        future: '%s???',
                        past: '%s???',
                        s: '??????',
                        m: '1??????',
                        mm: '%d??????',
                        h: '1??????',
                        hh: '%d??????',
                        d: '1???',
                        dd: '%d???',
                        M: '1??????',
                        MM: '%d??????',
                        y: '1???',
                        yy: '%d???'
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            });
            (function(factory) {
                factory(moment);
            })(function(moment) {
                return moment.defineLocale('zh-tw', {
                    months: '??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????'.split('_'),
                    monthsShort: '1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???'.split('_'),
                    weekdays: '?????????_?????????_?????????_?????????_?????????_?????????_?????????'.split('_'),
                    weekdaysShort: '??????_??????_??????_??????_??????_??????_??????'.split('_'),
                    weekdaysMin: '???_???_???_???_???_???_???'.split('_'),
                    longDateFormat: {
                        LT: 'Ah???mm',
                        L: 'YYYY???MMMD???',
                        LL: 'YYYY???MMMD???',
                        LLL: 'YYYY???MMMD???LT',
                        LLLL: 'YYYY???MMMD???ddddLT',
                        l: 'YYYY???MMMD???',
                        ll: 'YYYY???MMMD???',
                        lll: 'YYYY???MMMD???LT',
                        llll: 'YYYY???MMMD???ddddLT'
                    },
                    meridiem: function meridiem(hour, minute, isLower) {
                        var hm = hour * 100 + minute;
                        if (hm < 900) {
                            return '??????';
                        } else if (hm < 1130) {
                            return '??????';
                        } else if (hm < 1230) {
                            return '??????';
                        } else if (hm < 1800) {
                            return '??????';
                        } else {
                            return '??????';
                        }
                    },
                    calendar: {
                        sameDay: '[??????]LT',
                        nextDay: '[??????]LT',
                        nextWeek: '[???]ddddLT',
                        lastDay: '[??????]LT',
                        lastWeek: '[???]ddddLT',
                        sameElse: 'L'
                    },
                    ordinal: function ordinal(number, period) {
                        switch (period) {
                          case 'd':
                          case 'D':
                          case 'DDD':
                            return number + '???';

                          case 'M':
                            return number + '???';

                          case 'w':
                          case 'W':
                            return number + '???';

                          default:
                            return number;
                        }
                    },
                    relativeTime: {
                        future: '%s???',
                        past: '%s???',
                        s: '??????',
                        m: '?????????',
                        mm: '%d??????',
                        h: '?????????',
                        hh: '%d??????',
                        d: '??????',
                        dd: '%d???',
                        M: '?????????',
                        MM: '%d??????',
                        y: '??????',
                        yy: '%d???'
                    }
                });
            });
            moment.locale('en');
            function makeGlobal(shouldDeprecate) {
                if (typeof ender !== 'undefined') {
                    return;
                }
                oldGlobalMoment = globalScope.moment;
                if (shouldDeprecate) {
                    globalScope.moment = deprecate('Accessing Moment through the global scope is ' + 'deprecated, and will be removed in an upcoming ' + 'release.', moment);
                } else {
                    globalScope.moment = moment;
                }
            }
            if (hasModule) {
                module.exports = moment;
            } else if (true) {
                !(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
                    if (module.config && module.config() && module.config().noGlobal === true) {
                        globalScope.moment = oldGlobalMoment;
                    }
                    return moment;
                }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                makeGlobal(true);
            } else {
                makeGlobal();
            }
        }).call(undefined);
    }).call(exports, __webpack_require__(7), __webpack_require__(5)(module));
}, function(module, exports) {
    module.exports = function(module) {
        if (!module.webpackPolyfill) {
            module.deprecate = function() {};
            module.paths = [];
            if (!module.children) module.children = [];
            Object.defineProperty(module, 'loaded', {
                enumerable: true,
                get: function() {
                    return module.l;
                }
            });
            Object.defineProperty(module, 'id', {
                enumerable: true,
                get: function() {
                    return module.i;
                }
            });
            module.webpackPolyfill = 1;
        }
        return module;
    };
}, , function(module, exports) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || Function('return this')() || (1, eval)('this');
    } catch (e) {
        if (typeof window === 'object') g = window;
    }
    module.exports = g;
}, , , function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    var _util = __webpack_require__(0);
    var _util2 = _interopRequireDefault(_util);
    var _domUtil = __webpack_require__(2);
    var _domUtil2 = _interopRequireDefault(_domUtil);
    var _browser = __webpack_require__(1);
    var _browser2 = _interopRequireDefault(_browser);
    var _moment = __webpack_require__(4);
    var _moment2 = _interopRequireDefault(_moment);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    var SBDB, s, us;
    var app = {
        applicationException: null,
        applicationActionCoordinator: {
            isLocked: false
        },
        isDebug: false,
        getSessionCache: function getSessionCache(cb) {
            cb(localStorage.getItem('cachedSession'));
        },
        getSessionCacheTimeStamp: function getSessionCacheTimeStamp(cb) {
            cb(localStorage.getItem('cachedSessionTimeStamp'));
        },
        saveSessionCache: function saveSessionCache(wins, timeStamp) {
            if (wins) {
                localStorage.setItem('cachedSession', JSON.stringify(wins));
                localStorage.setItem('cachedSessionTimeStamp', timeStamp || new Date().toJSON());
            }
        },
        clearSessionCache: function clearSessionCache() {
            localStorage.setItem('cachedSession', '');
            localStorage.setItem('cachedSessionTimeStamp', '');
        },
        setFronts: function setFronts(sf, usf) {
            s = sf;
            us = usf;
        },
        setSbDatabase: function setSbDatabase(db) {
            SBDB = db;
        },
        setActiveAppMode: function setActiveAppMode(appMode, noReload) {
            if (appMode && appMode.trim().toLowerCase() === 'debug') {
                app.isDebug = true;
                _browser2.default.setBrowserIcon('logo_38x38_dev.png', 'logo_38x38_dev.png');
            } else {
                app.isDebug = false;
                _browser2.default.setBrowserIcon('logo_38x38.png', 'logo_38x38.png');
            }
            SBDB.isDebug = app.isDebug;
            if (!noReload) {
                _browser2.default.getAllWindowsAndTabs(function(wins) {
                    for (var i = 0; i < wins.length; i++) {
                        for (var j = 0; j < wins[i].tabs.length; j++) {
                            if (app.isSBTab(wins[i].tabs[j])) {
                                chrome.tabs.reload(wins[i].tabs[j].id);
                            }
                        }
                    }
                });
            }
        },
        unlockAction: function unlockAction() {
            app.applicationActionCoordinator.isLocked = false;
        },
        lockAction: function lockAction() {
            if (!app.applicationActionCoordinator.isLocked) {
                return app.applicationActionCoordinator.isLocked = true;
            }
            return false;
        },
        isSBTab: function isSBTab(tab) {
            return tab.url.startsWith(_browser2.default.getURL('main.html')) || tab.url.startsWith(_browser2.default.getURL('mainUI.html')) || tab.url.startsWith(_browser2.default.getURL('m.html'));
        },
        isSBOptionsTab: function isSBOptionsTab(tab) {
            return tab.url.startsWith(_browser2.default.getURL('options.html'));
        },
        isSBStatusTab: function isSBStatusTab(tab) {
            return tab.url.startsWith(_browser2.default.getURL('status.html'));
        },
        isSpecialTab: function isSpecialTab(tab) {
            return app.isSBTab(tab) || _browser2.default.isAdminTab(tab);
        },
        getFullyQualifiedUrl: function getFullyQualifiedUrl(relativePath, inRemote) {
            if (inRemote) {
                return 'https://sessionbuddy.com/' + relativePath;
            } else {
                return _browser2.default.getURL(relativePath);
            }
        },
        getAdjustedFavIconUrl: function getAdjustedFavIconUrl(tab, inRemote) {
            var r, basePath = 'images/';
            if (_domUtil2.default.getDevicePixelRatio() > 1) {
                basePath += 'retina/';
            }
            if (app.isDebug) {
                r = app.getFullyQualifiedUrl(basePath + 'default.png');
            } else {
                r = tab.favIconUrl || tab.nx_googleFallbackFavIconUrl;
            }
            if (_browser2.default.isBookmarkManagerTab(tab)) {
                r = app.getFullyQualifiedUrl(basePath + 'b.png', inRemote);
            } else if (_browser2.default.isAdminTab(tab)) {
                if (tab.url.startsWith('chrome://chrome/extensions') || tab.url.startsWith('chrome://settings/extensions') || tab.url.startsWith('chrome://extensions')) {
                    r = app.getFullyQualifiedUrl(basePath + 'e.png', inRemote);
                } else if (tab.url.startsWith('chrome://chrome/settings') || tab.url.startsWith('chrome://settings/browser') || tab.url.startsWith('chrome://settings/')) {
                    r = app.getFullyQualifiedUrl(basePath + 'sc.png', inRemote);
                } else if (tab.url.startsWith('chrome://history') || tab.url.startsWith('chrome://chrome/history')) {
                    r = app.getFullyQualifiedUrl(basePath + 'h.png', inRemote);
                } else if (tab.url.startsWith('chrome://downloads')) {
                    r = app.getFullyQualifiedUrl(basePath + 'j.png', inRemote);
                } else {
                    r = app.getFullyQualifiedUrl(basePath + 'c.png', inRemote);
                }
            } else if (app.isSBTab(tab) || app.isSBStatusTab(tab) || app.isSBOptionsTab(tab)) {
                if (_domUtil2.default.getDevicePixelRatio() > 1) {
                    r = app.getFullyQualifiedUrl('images/logo/logo_32x32.png', inRemote);
                } else {
                    r = app.getFullyQualifiedUrl('images/logo/logo_16x16.png', inRemote);
                }
            } else if (r && r.startsWith('chrome-extension://') || !r && tab.url.startsWith('chrome-extension://')) {
                r = app.getFullyQualifiedUrl(basePath + 'ex.png', inRemote);
            }
            return r || app.getFullyQualifiedUrl(basePath + 'default.png', inRemote);
        },
        reportException: function reportException(inException, inSeverity, inIsAllowLogging, inSource) {
            if (inException) {
                if (inSeverity == 0) {
                    console.log((inSource !== undefined && inSource !== null && inSource.length > 0 ? inSource + ': ' : '') + inException.message + (inException.code ? ' [EXCEPTION CODE: ' + inException.code + ']' : ''));
                } else if (inSeverity == 1) {
                    console.log((inSource !== undefined && inSource !== null && inSource.length > 0 ? inSource + ': ' : '') + inException.message + (inException.code ? ' [EXCEPTION CODE: ' + inException.code + ']' : ''));
                } else if (inSeverity == 2) {
                    var o = {};
                    Error.captureStackTrace(o, app.reportException);
                    app.applicationException = {
                        exception: inException,
                        source: inSource,
                        dateTime: new Date(),
                        trace: o.stack
                    };
                    _browser2.default.setBrowserIcon('logo_38x38_err.png', 'logo_38x38_err.png');
                    chrome.browserAction.setTitle({
                        title: 'Session Buddy encountered an error. Click for details.'
                    });
                    console.error((inSource !== undefined && inSource !== null && inSource.length > 0 ? inSource + ': ' : '') + inException.message + (inException.code ? ' [EXCEPTION CODE: ' + inException.code + ']' : ''));
                }
            }
        },
        compareWindows: function compareWindows(inWindow1, inWindow2, inWindow1TabIndex, inWindow2TabIndex, inCurrentFilterSettings, trueCallback, falseCallback) {
            if (inWindow1TabIndex == undefined) {
                inWindow1TabIndex = 0;
            }
            if (inWindow2TabIndex == undefined) {
                inWindow2TabIndex = 0;
            }
            if (inCurrentFilterSettings) {
                while (inWindow1TabIndex < inWindow1.tabs.length && app.isFilteredTab(inWindow1.tabs[inWindow1TabIndex], inCurrentFilterSettings.tabFiltering_FilterSessionBuddyTabs, inCurrentFilterSettings.tabFiltering_FilterChromeAdministrativeTabs)) {
                    inWindow1TabIndex++;
                }
                while (inWindow2TabIndex < inWindow2.tabs.length && app.isFilteredTab(inWindow2.tabs[inWindow2TabIndex], inCurrentFilterSettings.tabFiltering_FilterSessionBuddyTabs, inCurrentFilterSettings.tabFiltering_FilterChromeAdministrativeTabs)) {
                    inWindow2TabIndex++;
                }
            }
            if (inWindow1TabIndex >= inWindow1.tabs.length && inWindow2TabIndex >= inWindow2.tabs.length) {
                if (trueCallback) {
                    trueCallback();
                }
            } else if (inWindow1TabIndex >= inWindow1.tabs.length || inWindow2TabIndex >= inWindow2.tabs.length) {
                if (falseCallback) {
                    falseCallback();
                }
            } else {
                if (_browser2.default.compareTabs(inWindow1.tabs[inWindow1TabIndex], inWindow2.tabs[inWindow2TabIndex])) {
                    app.compareWindows(inWindow1, inWindow2, inWindow1TabIndex + 1, inWindow2TabIndex + 1, inCurrentFilterSettings, trueCallback, falseCallback);
                } else {
                    if (falseCallback) {
                        falseCallback();
                    }
                }
            }
        },
        compareSessions: function compareSessions(inSession1, inSession2, inSession1WindowIndex, inSession2WindowIndex, inCurrentFilterSettings, trueCallback, falseCallback) {
            if (inSession1WindowIndex == undefined) {
                inSession1WindowIndex = 0;
            }
            if (inSession2WindowIndex == undefined) {
                inSession2WindowIndex = 0;
            }
            if (inCurrentFilterSettings) {
                while (inSession1WindowIndex < inSession1.length && app.isFilteredWindow(inSession1[inSession1WindowIndex], 0, inCurrentFilterSettings.tabFiltering_FilterSessionBuddyTabs, inCurrentFilterSettings.tabFiltering_FilterChromeAdministrativeTabs)) {
                    inSession1WindowIndex++;
                }
                while (inSession2WindowIndex < inSession2.length && app.isFilteredWindow(inSession2[inSession2WindowIndex], 0, inCurrentFilterSettings.tabFiltering_FilterSessionBuddyTabs, inCurrentFilterSettings.tabFiltering_FilterChromeAdministrativeTabs)) {
                    inSession2WindowIndex++;
                }
            }
            if (inSession1WindowIndex >= inSession1.length && inSession2WindowIndex >= inSession2.length) {
                if (trueCallback) {
                    trueCallback();
                }
            } else if (inSession1WindowIndex >= inSession1.length || inSession2WindowIndex >= inSession2.length) {
                if (falseCallback) {
                    falseCallback();
                }
            } else {
                app.compareWindows(inSession1[inSession1WindowIndex], inSession2[inSession2WindowIndex], 0, 0, inCurrentFilterSettings, function() {
                    app.compareSessions(inSession1, inSession2, inSession1WindowIndex + 1, inSession2WindowIndex + 1, inCurrentFilterSettings, trueCallback, falseCallback);
                }, function() {
                    if (falseCallback) {
                        falseCallback();
                    }
                });
            }
        },
        countFilteredWindowsTabs: function countFilteredWindowsTabs(wins, cb) {
            var unfilteredWindowCount = 0, filteredWindowCount = 0, unfilteredTabCount = 0, filteredTabCount = 0, windowHasUnfilteredTabs = void 0;
            var tabFiltering_FilterSessionBuddyTabs = us('tabFiltering_FilterSessionBuddyTabs'), tabFiltering_FilterChromeAdministrativeTabs = us('tabFiltering_FilterChromeAdministrativeTabs');
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
            try {
                for (var _iterator = wins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var win = _step.value;
                    windowHasUnfilteredTabs = false;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;
                    try {
                        for (var _iterator2 = win.tabs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var tab = _step2.value;
                            if (tabFiltering_FilterSessionBuddyTabs && app.isSBTab(tab) || tabFiltering_FilterChromeAdministrativeTabs && _browser2.default.isAdminTab(tab)) {
                                filteredTabCount++;
                            } else {
                                unfilteredTabCount++;
                                windowHasUnfilteredTabs = true;
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                    if (windowHasUnfilteredTabs) {
                        unfilteredWindowCount++;
                    } else {
                        filteredWindowCount++;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            cb && cb(unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount);
        },
        countCurrentFilteredWindowsTabs: function countCurrentFilteredWindowsTabs(cb) {
            _browser2.default.getAllWindowsAndTabs(function(wins) {
                app.countFilteredWindowsTabs(wins, cb);
            });
        },
        updateAllFilterTabCounts: function updateAllFilterTabCounts(cb, force) {
            if (force || us('tabFiltering_FilterSessionBuddyTabs') !== s('tabCountsFilterSetting_SessionBuddyTabs') || us('tabFiltering_FilterChromeAdministrativeTabs') !== s('tabCountsFilterSetting_ChromeAdministrativeTabs')) {
                SBDB.sbdb.db.transaction(function(tx) {
                    SBDB.getPreviousSessionIds('', tx, function(data_previousSessionIds, tx) {
                        if (SBDB.sbdb.rowsReturned(data_previousSessionIds)) {
                            for (var i = 0; i < data_previousSessionIds.rows.length; i++) {
                                SBDB.getPreviousSessionWindows(data_previousSessionIds.rows.item(i).id, tx, function(data_previousSessionWindows, tx) {
                                    app.countFilteredWindowsTabs(_util2.default.jsonSafeParse(data_previousSessionWindows.windows), function(inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount) {
                                        if (data_previousSessionWindows.unfilteredWindowCount == null || inUnfilteredWindowCount != data_previousSessionWindows.unfilteredWindowCount || data_previousSessionWindows.filteredWindowCount == null || inFilteredWindowCount != data_previousSessionWindows.filteredWindowCount || data_previousSessionWindows.unfilteredTabCount == null || inUnfilteredTabCount != data_previousSessionWindows.unfilteredTabCount || data_previousSessionWindows.filteredTabCount == null || inFilteredTabCount != data_previousSessionWindows.filteredTabCount) {
                                            SBDB.updatePreviousSessionFilterTabCounts(data_previousSessionWindows.id, inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, tx);
                                        }
                                    });
                                });
                            }
                        }
                    });
                    SBDB.getSavedSessionIds('', tx, function(data_savedSessionIds, tx) {
                        if (SBDB.sbdb.rowsReturned(data_savedSessionIds)) {
                            for (var i = 0; i < data_savedSessionIds.rows.length; i++) {
                                SBDB.getSavedSessionWindows(data_savedSessionIds.rows.item(i).id, tx, function(data_savedSessionWindows, tx) {
                                    app.countFilteredWindowsTabs(_util2.default.jsonSafeParse(data_savedSessionWindows.windows), function(inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount) {
                                        if (data_savedSessionWindows.unfilteredWindowCount == null || inUnfilteredWindowCount != data_savedSessionWindows.unfilteredWindowCount || data_savedSessionWindows.filteredWindowCount == null || inFilteredWindowCount != data_savedSessionWindows.filteredWindowCount || data_savedSessionWindows.unfilteredTabCount == null || inUnfilteredTabCount != data_savedSessionWindows.unfilteredTabCount || data_savedSessionWindows.filteredTabCount == null || inFilteredTabCount != data_savedSessionWindows.filteredTabCount) {
                                            SBDB.updateSavedSessionFilterTabCounts(data_savedSessionWindows.id, inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, tx);
                                        }
                                    });
                                });
                            }
                        }
                    });
                }, null, function() {
                    s('tabCountsFilterSetting_SessionBuddyTabs', us('tabFiltering_FilterSessionBuddyTabs'));
                    s('tabCountsFilterSetting_ChromeAdministrativeTabs', us('tabFiltering_FilterChromeAdministrativeTabs'));
                    cb && cb();
                });
            } else {
                cb && cb();
            }
        },
        isFilteredTab: function isFilteredTab(inTab, inTabFilteringState_SB, inTabFilteringState_Admin) {
            return inTabFilteringState_SB && app.isSBTab(inTab) || inTabFilteringState_Admin && _browser2.default.isAdminTab(inTab);
        },
        isFilteredWindow: function isFilteredWindow(inWindow, tabStartIndex, inTabFilteringState_SB, inTabFilteringState_Admin) {
            if (tabStartIndex === undefined) {
                tabStartIndex = 0;
            }
            if (tabStartIndex < inWindow.tabs.length) {
                if (app.isFilteredTab(inWindow.tabs[tabStartIndex], inTabFilteringState_SB, inTabFilteringState_Admin)) {
                    return app.isFilteredWindow(inWindow, tabStartIndex + 1, inTabFilteringState_SB, inTabFilteringState_Admin);
                } else {
                    return false;
                }
            } else {
                return true;
            }
        },
        refreshBadge: function refreshBadge(inCurrentSessionUnfilteredTabCount, inCurrentSessionFilteredTabCount) {
            if (!app.applicationException) {
                if (us('sessionRender_ShowExtensionBadge')) {
                    chrome.browserAction.setBadgeText({
                        text: '' + inCurrentSessionUnfilteredTabCount
                    });
                    if (inCurrentSessionFilteredTabCount) {
                        chrome.browserAction.setTitle({
                            title: 'Session Buddy\n (' + inCurrentSessionFilteredTabCount + ' of ' + (inCurrentSessionFilteredTabCount + inCurrentSessionUnfilteredTabCount) + ' tabs hidden)'
                        });
                        chrome.browserAction.setBadgeBackgroundColor({
                            color: [ 130, 49, 0, 255 ]
                        });
                    } else {
                        chrome.browserAction.setTitle({
                            title: ''
                        });
                        chrome.browserAction.setBadgeBackgroundColor({
                            color: [ 30, 30, 30, 255 ]
                        });
                    }
                } else {
                    chrome.browserAction.setBadgeText({
                        text: ''
                    });
                    chrome.browserAction.setTitle({
                        title: ''
                    });
                }
            }
        },
        mergeWindows: function mergeWindows(wins) {
            var r = [], thisIncognitoWindow, thisCognitoWindow, tab;
            for (var i = 0; i < wins.length; i++) {
                if (wins[i].incognito && !thisIncognitoWindow) {
                    r.push(thisIncognitoWindow = JSON.parse(JSON.stringify(wins[i])));
                    thisIncognitoWindow.focused = !thisCognitoWindow;
                } else if (!wins[i].incognito && !thisCognitoWindow) {
                    r.push(thisCognitoWindow = JSON.parse(JSON.stringify(wins[i])));
                    thisCognitoWindow.focused = !thisIncognitoWindow;
                } else {
                    for (var j = 0; j < wins[i].tabs.length; j++) {
                        tab = JSON.parse(JSON.stringify(wins[i].tabs[j]));
                        (tab.incognito ? thisIncognitoWindow : thisCognitoWindow).tabs.push(tab);
                        tab.selected = tab.active = false;
                    }
                }
            }
            return r;
        },
        getEffectiveTabTitle: function getEffectiveTabTitle(o) {
            return o.nx_title || o.title || o.url;
        },
        getEffectiveWindowTitle: function getEffectiveWindowTitle(o, i, current) {
            return o.nx_title || (current ? 'Current Window' : 'Window' + (i ? ' ' + i : ''));
        },
        sortTabsByTabTitle: function sortTabsByTabTitle(wins) {
            var returnWindows = [];
            for (var i = 0; i < wins.length; i++) {
                returnWindows.push(wins[i]);
                returnWindows[i].tabs = wins[i].tabs.slice();
                returnWindows[i].tabs.sort(function(a, b) {
                    a = app.getEffectiveTabTitle(a).toLowerCase();
                    b = app.getEffectiveTabTitle(b).toLowerCase();
                    if (a < b) {
                        return -1;
                    } else if (a > b) {
                        return 1;
                    }
                    return 0;
                });
            }
            return returnWindows;
        },
        sortTabsByTabUrl: function sortTabsByTabUrl(wins) {
            var returnWindows = [];
            for (var i = 0; i < wins.length; i++) {
                returnWindows.push(wins[i]);
                returnWindows[i].tabs = wins[i].tabs.slice();
                returnWindows[i].tabs.sort(function(a, b) {
                    a = a.url.toLowerCase();
                    b = b.url.toLowerCase();
                    if (a < b) {
                        return -1;
                    } else if (a > b) {
                        return 1;
                    }
                    return 0;
                });
            }
            return returnWindows;
        },
        restoreSession: function restoreSession(wins, inRestoreType, inLimitedSetOfWindows, cb, inForceIncognito, incognitoRejectCb, currentWindowId) {
            chrome.extension.isAllowedIncognitoAccess(function(allow) {
                var i, j, w, t, isIncognito, firstPinned, firstPinnedIncognito;
                var newWin, newIncognitoWin, newTab;
                var keyWins;
                if (inForceIncognito && !allow) {
                    return incognitoRejectCb && incognitoRejectCb();
                }
                if (inRestoreType === 'RestoreSessionIntoASingleWindow' || inRestoreType === 'RestoreSessionIntoThisWindow') {
                    var winCount = 0;
                    for (i = 0; i < wins.length; i++) {
                        if (!inLimitedSetOfWindows || inLimitedSetOfWindows && _util2.default.contains(inLimitedSetOfWindows, i)) {
                            winCount++;
                            w = wins[i];
                            isIncognito = inForceIncognito || w.incognito;
                            if (isIncognito && !allow) {
                                return incognitoRejectCb && incognitoRejectCb();
                            }
                            firstPinned = firstPinnedIncognito = null;
                            for (j = 0; j < w.tabs.length; j++) {
                                t = w.tabs[j];
                                if (!app.isFilteredTab(t, us('tabFiltering_FilterSessionBuddyTabs'), us('tabFiltering_FilterChromeAdministrativeTabs'))) {
                                    if (isIncognito && (_browser2.default.isNewTab(t) || !app.isSpecialTab(t))) {
                                        if (!newIncognitoWin) {
                                            newIncognitoWin = {
                                                id: _browser2.default.WINDOW_NEW,
                                                focused: true,
                                                incognito: true,
                                                tabs: []
                                            };
                                        }
                                        newIncognitoWin.tabs.push(newTab = _util2.default.pick(t, [ 'url' ], [ 'pinned' ]));
                                        if (!firstPinnedIncognito && newTab.pinned) {
                                            newTab.active = true;
                                            firstPinnedIncognito = true;
                                        } else if (newIncognitoWin.tabs.length === 1) {
                                            newTab.active = true;
                                        }
                                    } else {
                                        if (!newWin) {
                                            newWin = {
                                                tabs: []
                                            };
                                            if (inRestoreType === 'RestoreSessionIntoASingleWindow') {
                                                newWin.id = _browser2.default.WINDOW_NEW;
                                                newWin.focused = true;
                                            } else {
                                                newWin.id = currentWindowId || _browser2.default.WINDOW_CURRENT;
                                            }
                                        }
                                        newWin.tabs.push(newTab = _util2.default.pick(t, [ 'url' ], [ 'pinned' ]));
                                        if (inRestoreType === 'RestoreSessionIntoASingleWindow') {
                                            if (!firstPinned && newTab.pinned) {
                                                newTab.active = true;
                                                firstPinned = true;
                                            } else if (newWin.tabs.length === 1) {
                                                newTab.active = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (newIncognitoWin) {
                        if (winCount === 1 && inRestoreType === 'RestoreSessionIntoASingleWindow') {
                            newIncognitoWin.left = w.left;
                            newIncognitoWin.top = w.top;
                            newIncognitoWin.width = w.width;
                            newIncognitoWin.height = w.height;
                            newIncognitoWin.state = w.state;
                            newIncognitoWin.type = w.type;
                        }
                        _browser2.default.openTab(newIncognitoWin.tabs[0], newIncognitoWin, function(t) {
                            for (var j = 1; j < newIncognitoWin.tabs.length; j++) {
                                _browser2.default.openTab(newIncognitoWin.tabs[j], {
                                    id: t.windowId,
                                    incognito: true
                                });
                            }
                        });
                    }
                    if (newWin) {
                        if (winCount === 1 && inRestoreType === 'RestoreSessionIntoASingleWindow') {
                            newWin.left = w.left;
                            newWin.top = w.top;
                            newWin.width = w.width;
                            newWin.height = w.height;
                            newWin.state = w.state;
                            newWin.type = w.type;
                        }
                        _browser2.default.openTab(newWin.tabs[0], newWin, function(t) {
                            for (var j = 1; j < newWin.tabs.length; j++) {
                                _browser2.default.openTab(newWin.tabs[j], {
                                    id: t.windowId
                                });
                            }
                        });
                    }
                } else {
                    var openWin = function openWin(w) {
                        _browser2.default.openTab(w.tabs[0], w, function(t) {
                            for (var j = 1; j < w.tabs.length; j++) {
                                _browser2.default.openTab(w.tabs[j], {
                                    id: t.windowId,
                                    incognito: !!w.incognito
                                });
                            }
                        });
                    };
                    keyWins = [];
                    for (i = 0; i < wins.length; i++) {
                        if (!inLimitedSetOfWindows || inLimitedSetOfWindows && _util2.default.contains(inLimitedSetOfWindows, i)) {
                            w = wins[i];
                            isIncognito = inForceIncognito || w.incognito;
                            if (isIncognito && !allow) {
                                return incognitoRejectCb && incognitoRejectCb();
                            }
                            firstPinned = firstPinnedIncognito = null;
                            newWin = newIncognitoWin = null;
                            for (j = 0; j < w.tabs.length; j++) {
                                t = w.tabs[j];
                                if (!app.isFilteredTab(t, us('tabFiltering_FilterSessionBuddyTabs'), us('tabFiltering_FilterChromeAdministrativeTabs'))) {
                                    if (isIncognito && (_browser2.default.isNewTab(t) || !app.isSpecialTab(t))) {
                                        if (!newIncognitoWin) {
                                            newIncognitoWin = _util2.default.pick(w, [ 'top', 'left', 'width', 'height', 'state', 'type' ]);
                                            newIncognitoWin.id = _browser2.default.WINDOW_NEW;
                                            newIncognitoWin.focused = true;
                                            newIncognitoWin.incognito = true;
                                            newIncognitoWin.tabs = [];
                                        }
                                        newIncognitoWin.tabs.push(newTab = _util2.default.pick(t, [ 'url' ], [ 'pinned' ]));
                                        if (!firstPinnedIncognito && newTab.pinned) {
                                            newTab.active = true;
                                            firstPinnedIncognito = true;
                                        } else if (newIncognitoWin.tabs.length === 1) {
                                            newTab.active = true;
                                        }
                                    } else {
                                        if (!newWin) {
                                            newWin = _util2.default.pick(w, [ 'top', 'left', 'width', 'height', 'state', 'type' ]);
                                            newWin.id = _browser2.default.WINDOW_NEW;
                                            newWin.focused = true;
                                            newWin.tabs = [];
                                        }
                                        newWin.tabs.push(newTab = _util2.default.pick(t, [ 'url' ], [ 'pinned' ]));
                                        if (!firstPinned && newTab.pinned) {
                                            newTab.active = true;
                                            firstPinned = true;
                                        } else if (newWin.tabs.length === 1) {
                                            newTab.active = true;
                                        }
                                    }
                                }
                            }
                            if (newIncognitoWin) {
                                keyWins.push(newIncognitoWin);
                            }
                            if (newWin) {
                                keyWins.push(newWin);
                            }
                        }
                    }
                    for (i = 0; i < keyWins.length; i++) {
                        openWin(keyWins[i]);
                    }
                }
            });
        },
        getPreviousSessionOrder: function getPreviousSessionOrder(inPreviousSessionId, cb) {
            if (cb) {
                SBDB.getPreviousSessionIds('', undefined, function(data, tx) {
                    for (var i = 0; i < data.rows.length; i++) {
                        if (data.rows.item(i).id && data.rows.item(i).id == inPreviousSessionId) {
                            cb(i);
                            break;
                        }
                    }
                });
            }
        },
        countStat_ChromeSessionStart: function countStat_ChromeSessionStart(cb) {
            app.countStat('seqInterpolation1', 'seqQuantifier1', cb);
        },
        countStat_SBStart: function countStat_SBStart(cb) {
            app.countStat('seqInterpolation2', 'seqQuantifier2', function() {
                app.countStat('v35Seen', 'v35SeenDate', cb);
            });
        },
        countStat_SessionSaveCurrent: function countStat_SessionSaveCurrent(cb) {
            app.countStat('seqInterpolation3', 'seqQuantifier3', cb);
        },
        countStat_SessionSavePrevious: function countStat_SessionSavePrevious(cb) {
            app.countStat('seqInterpolation7', 'seqQuantifier7', cb);
        },
        countStat_SessionSaveCombined: function countStat_SessionSaveCombined(cb) {
            app.countStat('seqInterpolation8', 'seqQuantifier8', cb);
        },
        countStat_SessionRestore: function countStat_SessionRestore(cb) {
            app.countStat('seqInterpolation4', 'seqQuantifier4', cb);
        },
        countStat_SessionImport: function countStat_SessionImport(cb) {
            app.countStat('seqInterpolation5', 'seqQuantifier5', cb);
        },
        countStat: function countStat(inStatTypeCodename, inStatDateTimeCodename, cb) {
            var updateStatDate = function updateStatDate() {
                SBDB.setSetting(inStatDateTimeCodename, new Date().toJSON(), cb);
            };
            SBDB.getSetting(inStatTypeCodename, function(value) {
                if (value && _util2.default.isNumeric(value)) {
                    SBDB.setSetting(inStatTypeCodename, parseInt(value) + 1, updateStatDate);
                } else {
                    SBDB.setSetting(inStatTypeCodename, parseInt(1), updateStatDate);
                }
            });
        },
        createSessionInfo_Current: function createSessionInfo_Current(seq, element, updated, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount) {
            return app.createSessionInfo('current', -13, seq, element, null, null, updated, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount);
        },
        createSessionInfo: function createSessionInfo(type, id, seq, element, name, created, updated, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount) {
            return {
                type: type,
                id: id,
                seq: seq,
                element: element,
                name: name,
                created: created,
                updated: updated,
                unfilteredWindowCount: unfilteredWindowCount,
                filteredWindowCount: filteredWindowCount,
                unfilteredTabCount: unfilteredTabCount,
                filteredTabCount: filteredTabCount
            };
        },
        isSessionInfo_Current: function isSessionInfo_Current(inSessionInfo) {
            return inSessionInfo.id + '' == '-13' && inSessionInfo.type === 'current';
        },
        isSessionInfo_Previous: function isSessionInfo_Previous(inSessionInfo) {
            return inSessionInfo.type === 'previous';
        },
        isSessionInfo_Saved: function isSessionInfo_Saved(inSessionInfo) {
            return inSessionInfo.type === 'saved';
        },
        getIndexOfSessionInfo: function getIndexOfSessionInfo(inSessionInfo, inSessionInfos) {
            if (inSessionInfo && inSessionInfos) {
                for (var i = inSessionInfos.length - 1; i >= 0; i--) {
                    if (app.compareSessionInfos(inSessionInfo, inSessionInfos[i])) {
                        return i;
                    }
                }
            } else {
                return undefined;
            }
            return -1;
        },
        getIndexOfSessionInfoById: function getIndexOfSessionInfoById(inId, inSessionInfos) {
            var returnIndex = -1;
            for (var i = 0; i < inSessionInfos.length; i++) {
                if (inSessionInfos[i].id + '' === inId + '') {
                    returnIndex = i;
                    break;
                }
            }
            return returnIndex;
        },
        getIndexOfSessionInfoByType: function getIndexOfSessionInfoByType(inType, inSessionInfos) {
            var returnIndex = -1;
            for (var i = 0; i < inSessionInfos.length; i++) {
                if (inSessionInfos[i].type === inType) {
                    returnIndex = i;
                    break;
                }
            }
            return returnIndex;
        },
        getIndexOfSessionInfoByIdAndType: function getIndexOfSessionInfoByIdAndType(inId, inType, inSessionInfos) {
            var returnIndex = -1;
            for (var i = 0; i < inSessionInfos.length; i++) {
                if (inSessionInfos[i].id + '' === inId + '' && inSessionInfos[i].type === inType) {
                    returnIndex = i;
                    break;
                }
            }
            return returnIndex;
        },
        findSessionInfo: function findSessionInfo(inSessionInfo, inSessionInfos) {
            var index = app.getIndexOfSessionInfo(inSessionInfo, inSessionInfos);
            if (index > -1) {
                return inSessionInfos[index];
            }
            return null;
        },
        compareSessionInfos: function compareSessionInfos(inSessionInfo1, inSessionInfo2) {
            return inSessionInfo1 && inSessionInfo2 && inSessionInfo1.id + '' === inSessionInfo2.id + '' && inSessionInfo1.type === inSessionInfo2.type;
        },
        compareSessionInfoArrays: function compareSessionInfoArrays(arr1, arr2) {
            if (arr1 && arr2 && arr1.length === arr2.length) {
                for (var i = 0; i < arr1.length; i++) {
                    if (!app.compareSessionInfos(arr1[i], arr2[i])) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        },
        pushUniqueSessionInfo: function pushUniqueSessionInfo(inSessionInfo, inSessionInfos) {
            if (inSessionInfo && inSessionInfos && app.getIndexOfSessionInfo(inSessionInfo, inSessionInfos) == -1) {
                inSessionInfos.push(inSessionInfo);
                return true;
            }
            return false;
        },
        spliceSessionInfo: function spliceSessionInfo(inSessionInfo, inSessionInfos) {
            var indexOfSessionInfo = app.getIndexOfSessionInfo(inSessionInfo, inSessionInfos);
            if (indexOfSessionInfo > -1) {
                inSessionInfos.splice(indexOfSessionInfo, 1);
            }
        },
        getTabFilteringDescriptionHTML: function getTabFilteringDescriptionHTML(unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount) {
            if (arguments.length === 2) {
                unfilteredTabCount = unfilteredWindowCount;
                filteredTabCount = filteredWindowCount;
                if (unfilteredTabCount === 0 && filteredTabCount > 0) {
                    return 'Hidden:&nbsp;&nbsp;' + _util2.default.pluralize(filteredTabCount, 'Tab', 'Tabs');
                }
                return _util2.default.pluralize(unfilteredTabCount, 'Tab', 'Tabs');
            }
            if (unfilteredWindowCount == 0 && unfilteredTabCount == 0 && filteredTabCount != 0) {
                return 'Hidden:&nbsp;&nbsp;' + _util2.default.pluralize(filteredWindowCount, 'Window', 'Windows') + '&nbsp;&nbsp;&nbsp;' + _util2.default.pluralize(filteredTabCount, 'Tab', 'Tabs');
            }
            return (unfilteredWindowCount ? _util2.default.pluralize(unfilteredWindowCount, 'Window', 'Windows') + '&nbsp;&nbsp;&nbsp;' : '') + _util2.default.pluralize(unfilteredTabCount, 'Tab', 'Tabs');
        },
        getDefaultBrowserActionIconFilenames: function getDefaultBrowserActionIconFilenames(cb) {
            if (cb) {
                if (app.isDebug) {
                    cb('logo_38x38_dev.png', 'logo_38x38_dev.png');
                } else {
                    cb('logo_38x38.png', 'logo_38x38.png');
                }
            }
        },
        updateSessionElWithDate: function updateSessionElWithDate(el, date, sessionType, isUpdatedDate) {
            if (!el || !date) return;
            el.innerHTML = app.dateToDisplayString(date, app.sessionTypeDatePrefix(sessionType, isUpdatedDate));
        },
        sessionTypeDatePrefix: function sessionTypeDatePrefix(type, isUpdatedDate) {
            switch (type) {
              case 'saved':
                return isUpdatedDate ? 'Updated' : 'Saved';

              case 'previous':
                return 'Recorded';

              case 'current':
                return 'Changed';
            }
            return '';
        },
        dateToDisplayString: function dateToDisplayString(date, prefix, type) {
            date = date || new Date();
            switch (type || us('dateDisplayType')) {
              case 'custom':
                return (0, _moment2.default)(date).format(us('customDateFormat'));

              case 'relative':
                return (prefix ? prefix + '&nbsp;' : '') + (0, _moment2.default)(date).fromNow();
            }
            return (0, _moment2.default)(date).format('L LT');
        }
    };
    exports.default = app;
}, function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    exports.default = SbDatabase;
    var _util = __webpack_require__(0);
    var _util2 = _interopRequireDefault(_util);
    var _xid = __webpack_require__(3);
    var _xid2 = _interopRequireDefault(_xid);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function WebSQLDatabase(filename, version, name, size) {
        this.db = openDatabase(filename, version, name, size);
        this.sequenceTransaction = function(inSQLStatements, done, fail) {
            this.db.transaction(function(tx) {
                var runNextQuery = function runNextQuery(lastNumberOfRowsAffected) {
                    if (inSQLStatements.length > 0) {
                        tx.executeSql(inSQLStatements.shift(), [], function(tx, data) {
                            runNextQuery((data ? data.rowsAffected : 0) + lastNumberOfRowsAffected);
                        }, fail);
                    } else {
                        done(tx, lastNumberOfRowsAffected);
                    }
                };
                runNextQuery(0);
            });
        };
        this.rowsReturned = function(data) {
            if (data && data.rows && data.rows.length > 0 && data.rows.item(0)) {
                return data.rows.length;
            } else {
                return 0;
            }
        };
        this.getSqlResultFirstRow = function(data) {
            if (data && data.rows && data.rows.length > 0 && data.rows.item(0)) {
                return data.rows.item(0);
            } else {
                return undefined;
            }
        };
    }
    function SbDatabase(app, ga, ga_segment) {
        var PREVIOUS_SESSION_QUEUE_SIZE = 500;
        this.sbdb = new WebSQLDatabase('SB', '1.0', 'Session Buddy', 5 * 1024 * 1024);
        this.isAllowLogging = false;
        this.isValid = function() {
            return this.sbdb && this.sbdb.db;
        };
        this.isConfigured = function(cb) {
            if (this.isValid()) {
                var that = this;
                try {
                    this.sbdb.db.readTransaction(function(tx) {
                        try {
                            tx.executeSql('SELECT * FROM sqlite_master WHERE type=\'table\' AND (name=\'Settings\' OR name=\'UserSettings\' OR name=\'SavedSessions\' OR name=\'PreviousSessions\')', [], function(tx, data) {
                                cb(that.sbdb.rowsReturned(data) === 4);
                            }, function(tx, err) {
                                app.reportException({
                                    message: 'SQLError: ' + err.message,
                                    type: 'SB'
                                }, 2, app.isDebug, '70395123');
                            });
                        } catch (ex) {
                            app.reportException(ex, 2, that.isAllowLogging, '322532283');
                        }
                    });
                } catch (ex) {
                    app.reportException(ex, 2, that.isAllowLogging, '99038458');
                }
            } else {
                app.reportException({
                    message: 'Invalid SBDB',
                    type: 'SB'
                }, 2, app.isDebug, '70395117');
            }
        };
        this.getSetting = function(key, cb) {
            this.getValue('Settings', key, cb);
        };
        this.setSetting = function(key, val, done, fail) {
            this.setValue('Settings', key, val, done, fail);
        };
        this.getAllSettings = function(inAreaName, cb) {
            if (this.isValid()) {
                var that = this;
                this.sbdb.db.readTransaction(function(tx) {
                    tx.executeSql('SELECT key, value FROM ' + inAreaName, [], function(tx, data) {
                        if (that.sbdb.rowsReturned(data)) {
                            cb && cb(data.rows);
                        } else {
                            cb && cb();
                        }
                    }, function(tx, err) {
                        console.error(err, inAreaName);
                        cb && cb();
                    });
                });
            }
        };
        this.getValue = function(inAreaName, key, cb) {
            if (this.isValid() && key) {
                var that = this;
                this.sbdb.db.readTransaction(function(tx) {
                    tx.executeSql('SELECT value FROM ' + inAreaName + ' WHERE key=?', [ key ], function(tx, data) {
                        if (that.sbdb.rowsReturned(data)) {
                            cb && cb(data.rows.item(0).value);
                        } else {
                            cb && cb();
                        }
                    }, function(tx, err) {
                        console.error(err, inAreaName, key);
                        cb && cb();
                    });
                });
            }
        };
        this.setValue = function(inAreaName, key, val, done, fail) {
            if (this.isValid() && key) {
                if (val === true) {
                    val = 'true';
                }
                if (val === false) {
                    val = 'false';
                }
                var that = this;
                this.sbdb.db.transaction(function(tx) {
                    tx.executeSql('SELECT value FROM ' + inAreaName + ' WHERE key=?', [ key ], function(tx, data) {
                        if (that.sbdb.rowsReturned(data)) {
                            if (data.rows.item(0).value != val) {
                                tx.executeSql('UPDATE ' + inAreaName + ' SET value=? WHERE key=?', [ val, key ], function(tx, data) {
                                    done && done(data, val);
                                }, function(tx, err) {
                                    fail && fail(err);
                                });
                            } else {
                                done && done(data, val);
                            }
                        } else {
                            tx.executeSql('INSERT INTO ' + inAreaName + ' (key, value) VALUES (?,?)', [ key, val ], function(tx, data) {
                                done && done(data, val);
                            }, function(tx, err) {
                                fail && fail(err);
                            });
                        }
                    });
                });
            }
        };
        this.getSavedSessionSummaries = function(inOrderString, inSearchTerms, cb, dontFilterSessionSummaries, limit, offset) {
            var i;
            if (!inOrderString) {
                inOrderString = 'modificationDateTime desc, id desc';
            } else {
                inOrderString = inOrderString.trim().toLowerCase();
                if (inOrderString.startsWith('order by')) {
                    inOrderString = inOrderString.substring(8);
                    inOrderString = inOrderString.trim();
                }
            }
            var dontFilterSessionIdString = '';
            if (dontFilterSessionSummaries) {
                for (i = 0; i < dontFilterSessionSummaries.length; i++) {
                    if (dontFilterSessionSummaries[i].type === 'saved') {
                        if (dontFilterSessionIdString.length > 0) {
                            dontFilterSessionIdString += ',';
                        }
                        dontFilterSessionIdString += dontFilterSessionSummaries[i].id;
                    }
                }
            }
            var searchConstraintText = '';
            if (inSearchTerms) {
                var searchSubConstraintText = '';
                var searchSubConstraintText2 = '';
                if (typeof inSearchTerms === 'string') {
                    inSearchTerms = inSearchTerms.replace(/'/g, '\'\'');
                    searchConstraintText = '(name like \'%' + inSearchTerms + '%\' OR windows like \'%' + inSearchTerms + '%\') ';
                } else if ((typeof inSearchTerms === 'undefined' ? 'undefined' : _typeof(inSearchTerms)) === 'object') {
                    searchSubConstraintText2 = '';
                    for (i = 0; i < inSearchTerms.length; i++) {
                        if (!inSearchTerms[i].type || inSearchTerms[i].type && inSearchTerms[i].type === 'saved') {
                            searchSubConstraintText = '';
                            if (inSearchTerms[i].id) {
                                if (searchSubConstraintText.length > 0) {
                                    searchSubConstraintText += ' AND ';
                                }
                                searchSubConstraintText += 'id=' + inSearchTerms[i].id;
                            }
                            if (searchSubConstraintText.length > 0) {
                                if (searchSubConstraintText2.length > 0) {
                                    searchSubConstraintText2 += ' OR ';
                                }
                                searchSubConstraintText2 += '(' + searchSubConstraintText + ')';
                            }
                        }
                    }
                    if (searchSubConstraintText2.length > 0) {
                        searchConstraintText = '(' + searchSubConstraintText2 + ') ';
                    }
                }
                if (searchConstraintText.length > 0) {
                    if (dontFilterSessionIdString.length > 0) {
                        searchConstraintText = 'AND ((id in (' + dontFilterSessionIdString + ')) OR (' + searchConstraintText + '))';
                    } else {
                        searchConstraintText = 'AND ' + searchConstraintText;
                    }
                }
            }
            if (inSearchTerms && searchConstraintText.length == 0) {
                if (cb) {
                    cb({
                        rows: []
                    });
                }
            } else {
                var that = this;
                this.sbdb.db.readTransaction(function(tx) {
                    tx.executeSql('SELECT id, name, generationDateTime, creationDateTime, modificationDateTime, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount FROM SavedSessions WHERE deleted != \'true\' ' + searchConstraintText + 'ORDER BY ' + inOrderString + (limit ? ' LIMIT ' + limit : '') + (offset ? ' OFFSET ' + offset : ''), [], function(tx, data) {
                        if (data && data.rows && cb) {
                            if (limit) {
                                tx.executeSql('SELECT count(*) as cnt FROM SavedSessions WHERE deleted != \'true\' ' + searchConstraintText, [], function(tx, data2) {
                                    if (data2 && data2.rows) {
                                        cb(data, data2.rows.item(0).cnt);
                                    }
                                }, function(tx, err) {
                                    app.reportException(err, 2, that.isAllowLogging, '6499203');
                                });
                            } else {
                                cb(data);
                            }
                        }
                    }, function(tx, err) {
                        app.reportException(err, 2, that.isAllowLogging, '3224123123');
                    });
                });
            }
        };
        this.getSavedSessionIds = function(inFilterString, tx, cb) {
            if (cb) {
                var that = this;
                var doIt = function doIt(tx) {
                    tx.executeSql('SELECT id FROM SavedSessions WHERE deleted != \'true\'', [], function(tx, data) {
                        if (data && data.rows && cb) {
                            cb(data, tx);
                        }
                    }, function(tx, err) {
                        app.reportException(err, 2, that.isAllowLogging, '892804029');
                    });
                };
                if (tx == undefined) {
                    this.sbdb.db.transaction(doIt);
                } else {
                    doIt(tx);
                }
            }
        };
        this.getSavedSessionCount = function(cb, inFilterString, tx) {
            if (cb) {
                var that = this, col_alias = 's';
                var doIt = function doIt(tx) {
                    tx.executeSql('SELECT count(*) AS ' + col_alias + ' FROM SavedSessions WHERE deleted != \'true\'', [], function(tx, data) {
                        if (data && data.rows && data.rows.length === 1) {
                            cb(data.rows.item(0)[col_alias]);
                        }
                    }, function(tx, err) {
                        app.reportException(err, 2, that.isAllowLogging, '892804034');
                    });
                };
                if (_util2.default.isUndefined(tx)) {
                    this.sbdb.db.transaction(doIt);
                } else {
                    doIt(tx);
                }
            }
        };
        this.getPreviousSessionSummaries = function(inOrderString, inSearchTerms, cb, dontFilterSessionSummaries, limit, offset) {
            var i;
            if (cb) {
                if (!inOrderString) {
                    inOrderString = 'recordingDateTime desc, id desc';
                } else {
                    inOrderString = inOrderString.trim().toLowerCase();
                    if (inOrderString.startsWith('order by')) {
                        inOrderString = inOrderString.substring(8);
                        inOrderString = inOrderString.trim();
                    }
                }
                var dontFilterSessionIdString = '';
                if (dontFilterSessionSummaries) {
                    for (i = 0; i < dontFilterSessionSummaries.length; i++) {
                        if (dontFilterSessionSummaries[i].type === 'previous') {
                            if (dontFilterSessionIdString.length > 0) {
                                dontFilterSessionIdString += ',';
                            }
                            dontFilterSessionIdString += dontFilterSessionSummaries[i].id;
                        }
                    }
                }
                var searchConstraintText = '';
                if (inSearchTerms) {
                    var searchSubConstraintText = '';
                    var searchSubConstraintText2 = '';
                    if (typeof inSearchTerms === 'string') {
                        inSearchTerms = inSearchTerms.replace(/'/g, '\'\'');
                        searchConstraintText = 'windows like \'%' + inSearchTerms + '%\' ';
                    } else if ((typeof inSearchTerms === 'undefined' ? 'undefined' : _typeof(inSearchTerms)) === 'object') {
                        searchSubConstraintText2 = '';
                        for (i = 0; i < inSearchTerms.length; i++) {
                            if (!inSearchTerms[i].type || inSearchTerms[i].type && inSearchTerms[i].type === 'previous') {
                                searchSubConstraintText = '';
                                if (inSearchTerms[i].id) {
                                    if (searchSubConstraintText.length > 0) {
                                        searchSubConstraintText += ' AND ';
                                    }
                                    searchSubConstraintText += 'id=' + inSearchTerms[i].id;
                                }
                                if (searchSubConstraintText.length > 0) {
                                    if (searchSubConstraintText2.length > 0) {
                                        searchSubConstraintText2 += ' OR ';
                                    }
                                    searchSubConstraintText2 += '(' + searchSubConstraintText + ')';
                                }
                            }
                        }
                        if (searchSubConstraintText2.length > 0) {
                            searchConstraintText = '(' + searchSubConstraintText2 + ') ';
                        }
                    }
                    if (searchConstraintText.length > 0) {
                        if (dontFilterSessionIdString.length > 0) {
                            searchConstraintText = 'AND ((id in (' + dontFilterSessionIdString + ')) OR (' + searchConstraintText + '))';
                        } else {
                            searchConstraintText = 'AND ' + searchConstraintText;
                        }
                    }
                }
                if (inSearchTerms && searchConstraintText.length == 0) {
                    cb({
                        rows: []
                    });
                } else {
                    var that = this;
                    this.sbdb.db.readTransaction(function(tx) {
                        tx.executeSql('SELECT id, recordingDateTime, creationDateTime, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount FROM PreviousSessions WHERE deleted != \'true\' ' + searchConstraintText + 'ORDER BY ' + inOrderString + (limit ? ' LIMIT ' + limit : '') + (offset ? ' OFFSET ' + offset : ''), [], function(tx, data) {
                            if (data && data.rows) {
                                if (limit) {
                                    tx.executeSql('SELECT count(*) as cnt FROM PreviousSessions WHERE deleted != \'true\' ' + searchConstraintText, [], function(tx, data2) {
                                        if (data2 && data2.rows) {
                                            cb(data, data2.rows.item(0).cnt);
                                        }
                                    }, function(tx, err) {
                                        app.reportException(err, 2, that.isAllowLogging, '647939203');
                                    });
                                } else {
                                    cb(data);
                                }
                            }
                        }, function(tx, err) {
                            app.reportException(err, 2, that.isAllowLogging, '677939203');
                        });
                    });
                }
            }
        };
        this.getPreviousSessionIds = function(inFilterString, tx, cb) {
            var that = this;
            if (cb) {
                var doIt = function doIt(tx) {
                    tx.executeSql('SELECT id FROM PreviousSessions WHERE deleted != \'true\' ORDER BY id DESC', [], function(tx, data) {
                        if (data && data.rows && cb) {
                            cb(data, tx);
                        }
                    }, function(tx, err) {
                        app.reportException(err, 2, that.isAllowLogging, '89930458');
                    });
                };
                if (tx == undefined) {
                    this.sbdb.db.transaction(doIt);
                } else {
                    doIt(tx);
                }
            }
        };
        this.saveSavedSession = function(wins, inName, inGenerationDateTime, inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, cb, inCreationDateTime, inModificationDateTime, gid, dontReportTx) {
            if (wins) {
                var that = this;
                this.sbdb.db.transaction(function(tx) {
                    var currentUTCDateStorageString = new Date().toJSON();
                    if (!inCreationDateTime) {
                        inCreationDateTime = currentUTCDateStorageString;
                    }
                    if (!inModificationDateTime) {
                        inModificationDateTime = currentUTCDateStorageString;
                    }
                    tx.executeSql('INSERT INTO SavedSessions (name, generationDateTime, creationDateTime, modificationDateTime, tags, users, deleted, thumbnail, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount, windows) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [ inName ? inName.trim() || null : null, inGenerationDateTime ? inGenerationDateTime : null, inCreationDateTime, inModificationDateTime, [], [], 'false', gid || null, inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, JSON.stringify(wins) ], function(tx, data) {
                        tx.executeSql('SELECT last_insert_rowid();', [], function(tx, data) {
                            if (that.sbdb.rowsReturned(data)) {
                                var finish = function finish() {
                                    if (cb) {
                                        cb(rowid, inModificationDateTime);
                                    }
                                    if (!dontReportTx) {
                                        ga('send', 'event', 'tx', 'add', 'lx', inUnfilteredTabCount + inFilteredTabCount);
                                        ga_segment('added_lx_tab_count', inUnfilteredTabCount + inFilteredTabCount);
                                    }
                                };
                                var rowid = that.sbdb.getSqlResultFirstRow(data)['last_insert_rowid()'];
                                if (gid) {
                                    finish();
                                } else {
                                    tx.executeSql('UPDATE SavedSessions SET thumbnail=\'' + (0, _xid2.default)() + '\' WHERE id=?', [ rowid ], finish);
                                }
                            }
                        }, function(tx, sqlErr) {
                            app.reportException(sqlErr, 2, that.isAllowLogging, '903948203');
                            cb && cb(null, null);
                            return true;
                        });
                    }, function(tx, sqlErr) {
                        app.reportException(sqlErr, 2, that.isAllowLogging, '3224123123');
                        cb && cb(null, null);
                    });
                });
            } else {
                cb && cb(null, null);
            }
        };
        this.updateSavedSessionName = function(inId, inName, cb) {
            this.updateSavedSession(inId, undefined, inName, undefined, undefined, undefined, undefined, undefined, function(inId, inIsUpdated) {
                cb(inId && inIsUpdated);
            });
        };
        this.updateSavedSession = function(inId, wins, inName, inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, inModificationUTCDateStorageString, cb) {
            if (inId) {
                this.sbdb.db.transaction(function(tx) {
                    var update_cols = [], update_vals = [];
                    if (wins) {
                        update_cols.push('windows');
                        update_vals.push(JSON.stringify(wins));
                    }
                    if (!_util2.default.isUndefined(inUnfilteredWindowCount)) {
                        update_cols.push('unfilteredWindowCount');
                        update_vals.push(inUnfilteredWindowCount);
                    }
                    if (!_util2.default.isUndefined(inFilteredWindowCount)) {
                        update_cols.push('filteredWindowCount');
                        update_vals.push(inFilteredWindowCount);
                    }
                    if (!_util2.default.isUndefined(inUnfilteredTabCount)) {
                        update_cols.push('unfilteredTabCount');
                        update_vals.push(inUnfilteredTabCount);
                    }
                    if (!_util2.default.isUndefined(inFilteredTabCount)) {
                        update_cols.push('filteredTabCount');
                        update_vals.push(inFilteredTabCount);
                    }
                    if (inModificationUTCDateStorageString || update_cols.length) {
                        update_cols.push('modificationDateTime');
                        update_vals.push(inModificationUTCDateStorageString || (inModificationUTCDateStorageString = new Date().toJSON()));
                    }
                    if (!_util2.default.isUndefined(inName)) {
                        update_cols.push('name');
                        update_vals.push(inName);
                    }
                    if (update_cols.length) {
                        update_vals.push(inId);
                        tx.executeSql('UPDATE SavedSessions SET ' + update_cols.join('=?, ') + '=? WHERE id=?', update_vals, function(tx, data) {
                            if (cb) {
                                cb(inId, data.rowsAffected, inModificationUTCDateStorageString || null);
                            }
                        }, function(tx, sqlErr) {
                            console.error('8534682039: ' + sqlErr);
                            if (cb) {
                                cb(null, 0);
                            }
                        });
                    } else if (cb) {
                        cb(inId, 0);
                    }
                });
            }
        };
        this.updatePreviousSession = function(inId, wins, inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, cb) {
            if (inId) {
                this.sbdb.db.transaction(function(tx) {
                    var update_cols = [], update_vals = [];
                    if (wins) {
                        update_cols.push('windows');
                        update_vals.push(JSON.stringify(wins));
                    }
                    if (!_util2.default.isUndefined(inUnfilteredWindowCount)) {
                        update_cols.push('unfilteredWindowCount');
                        update_vals.push(inUnfilteredWindowCount);
                    }
                    if (!_util2.default.isUndefined(inFilteredWindowCount)) {
                        update_cols.push('filteredWindowCount');
                        update_vals.push(inFilteredWindowCount);
                    }
                    if (!_util2.default.isUndefined(inUnfilteredTabCount)) {
                        update_cols.push('unfilteredTabCount');
                        update_vals.push(inUnfilteredTabCount);
                    }
                    if (!_util2.default.isUndefined(inFilteredTabCount)) {
                        update_cols.push('filteredTabCount');
                        update_vals.push(inFilteredTabCount);
                    }
                    if (update_cols.length) {
                        update_vals.push(inId);
                        tx.executeSql('UPDATE PreviousSessions SET ' + update_cols.join('=?, ') + '=? WHERE id=?', update_vals, function(tx, data) {
                            if (cb) {
                                cb(inId, data.rowsAffected);
                            }
                        }, function(tx, sqlErr) {
                            console.error('8534692994: ' + sqlErr);
                            if (cb) {
                                cb(null, 0);
                            }
                        });
                    } else if (cb) {
                        cb(inId, 0);
                    }
                });
            }
        };
        this.savePreviousSession = function(wins, inRecordingDateTime, inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, cb, inCreationDateTime, inThumbnail, dontReportTx) {
            if (wins) {
                var that = this;
                this.sbdb.db.transaction(function(tx) {
                    tx.executeSql('SELECT id FROM PreviousSessions ORDER BY id DESC', [], function(tx, data) {
                        if (that.sbdb.rowsReturned(data) >= PREVIOUS_SESSION_QUEUE_SIZE) {
                            tx.executeSql('DELETE FROM PreviousSessions WHERE id<?', [ data.rows.item(PREVIOUS_SESSION_QUEUE_SIZE - 2).id ]);
                        }
                    });
                });
                this.sbdb.db.transaction(function(tx) {
                    if (!inCreationDateTime) {
                        inCreationDateTime = new Date().toJSON();
                    }
                    tx.executeSql('INSERT into PreviousSessions (recordingDateTime, creationDateTime, users, deleted, thumbnail, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount, windows) VALUES (?,?,?,?,?,?,?,?,?,?)', [ inRecordingDateTime ? inRecordingDateTime : null, inCreationDateTime, [], 'false', inThumbnail || null, inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, JSON.stringify(wins) ], function(tx, data) {
                        tx.executeSql('SELECT last_insert_rowid();', [], function(tx, data) {
                            if (that.sbdb.rowsReturned(data)) {
                                tx.executeSql('UPDATE PreviousSessions SET thumbnail=\'' + (0, _xid2.default)() + '\' WHERE id=?', [ that.sbdb.getSqlResultFirstRow(data)['last_insert_rowid()'] ], function() {
                                    if (cb) {
                                        cb(that.sbdb.getSqlResultFirstRow(data)['last_insert_rowid()'], inRecordingDateTime);
                                    }
                                    if (!dontReportTx) {}
                                });
                            }
                        });
                    }, function(tx, sqlErr) {
                        app.reportException(sqlErr, 2, that.isAllowLogging, '72322015293');
                        if (cb) {
                            cb(null, null);
                        }
                    });
                });
            }
        };
        this.softDeleteUndeleteSessions = function(inSessionsToDeleteInfos, inIsDelete, cb) {
            if (inSessionsToDeleteInfos) {
                var previousSessionIdsToRemove = [];
                var savedSessionIdsToRemove = [];
                var i;
                for (i = 0; i < inSessionsToDeleteInfos.length; i++) {
                    if (inSessionsToDeleteInfos[i].type === 'previous') {
                        previousSessionIdsToRemove.push(inSessionsToDeleteInfos[i].id);
                    } else if (inSessionsToDeleteInfos[i].type === 'saved') {
                        savedSessionIdsToRemove.push(inSessionsToDeleteInfos[i].id);
                    }
                }
                var that = this;
                this.sbdb.db.transaction(function(tx) {
                    tx.executeSql('UPDATE SavedSessions SET deleted=\'' + (inIsDelete ? 'true' : 'false') + '\' WHERE id IN (' + savedSessionIdsToRemove.join(',') + ')', [], function(tx, data1) {
                        tx.executeSql('UPDATE PreviousSessions SET deleted=\'' + (inIsDelete ? 'true' : 'false') + '\' WHERE id IN (' + previousSessionIdsToRemove.join(',') + ')', [], function(tx, data2) {
                            if (cb) {
                                cb(data1.rowsAffected + data2.rowsAffected);
                            }
                            var delayGA = 0;
                            for (i = data1.rowsAffected; i--; ) {
                                setTimeout(function(inIsDelete) {
                                    ga('send', 'event', 'tx', inIsDelete ? 'delete' : 'undelete', 'lx');
                                }, delayGA * 1100, inIsDelete);
                                delayGA++;
                            }
                            for (i = data2.rowsAffected; i--; ) {
                                setTimeout(function(inIsDelete) {
                                    ga('send', 'event', 'tx', inIsDelete ? 'delete' : 'undelete', 'lx_previous');
                                }, delayGA * 1100, inIsDelete);
                                delayGA++;
                            }
                        }, function(tx, err) {
                            app.reportException(err, 2, that.isAllowLogging, '7213487');
                        });
                    }, function(tx, err) {
                        app.reportException(err, 2, that.isAllowLogging, '94472347');
                    });
                });
            }
        };
        this.reapSoftDeletedSessions = function(cb) {
            var that = this;
            this.sbdb.db.transaction(function(tx) {
                tx.executeSql('DELETE FROM SavedSessions WHERE deleted=\'true\'', [], function(tx, data1) {
                    tx.executeSql('DELETE FROM PreviousSessions WHERE deleted=\'true\'', [], function(tx, data2) {
                        if (cb) {
                            cb(data1.rowsAffected + data2.rowsAffected);
                        }
                    }, function(tx, sqlErr) {
                        app.reportException(sqlErr, 2, that.isAllowLogging, '489314871092');
                    });
                }, function(tx, sqlErr) {
                    app.reportException(sqlErr, 2, that.isAllowLogging, '52897234972');
                });
            });
        };
        this.deleteAllPreviousSessions = function(cb) {
            var that = this;
            this.sbdb.db.transaction(function(tx) {
                tx.executeSql('DELETE FROM PreviousSessions', [], function(tx, data2) {
                    if (cb) {
                        cb(data2.rowsAffected);
                    }
                }, function(tx, err) {
                    app.reportException(err, 2, that.isAllowLogging, '2423954');
                });
            });
        };
        this.getSavedSessionSummary = function(inId, cb) {
            var that = this;
            this.sbdb.db.readTransaction(function(tx) {
                tx.executeSql('SELECT id, name, generationDateTime, creationDateTime, modificationDateTime, deleted, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount, thumbnail AS gid FROM SavedSessions WHERE id=?', [ inId ], function(tx, data) {
                    if (that.sbdb.rowsReturned(data)) {
                        cb(data.rows.item(0));
                    } else {
                        cb(undefined);
                    }
                });
            });
        };
        this.getSessionSummaryByGid = function(inGid, cb) {
            var that = this;
            this.sbdb.db.readTransaction(function(tx) {
                tx.executeSql('SELECT id, \'saved\' AS type, name, generationDateTime, creationDateTime, modificationDateTime, deleted, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount FROM SavedSessions WHERE deleted != \'true\' AND thumbnail=?', [ inGid ], function(tx, data) {
                    if (that.sbdb.rowsReturned(data)) {
                        cb(data.rows.item(0));
                    } else {
                        tx.executeSql('SELECT id, \'previous\' AS type, recordingDateTime, creationDateTime, deleted, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount FROM PreviousSessions WHERE thumbnail=?', [ inGid ], function(tx, data) {
                            if (that.sbdb.rowsReturned(data)) {
                                cb(data.rows.item(0));
                            } else {
                                cb(undefined);
                            }
                        });
                    }
                });
            });
        };
        this.getPreviousSessionSummary = function(inId, cb) {
            var that = this;
            this.sbdb.db.readTransaction(function(tx) {
                tx.executeSql('SELECT id, recordingDateTime, creationDateTime, deleted, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount, thumbnail AS gid FROM PreviousSessions WHERE id=?', [ inId ], function(tx, data) {
                    if (that.sbdb.rowsReturned(data)) {
                        cb(data.rows.item(0));
                    } else {
                        cb(undefined);
                    }
                });
            });
        };
        this.getPreviousSessionWindows = function(inIds, tx, cb) {
            if (cb) {
                var whereClause, that = this;
                if (inIds === void 0) {
                    whereClause = 'deleted != \'true\'';
                } else if (toString.call(inIds) === '[object Array]') {
                    whereClause = 'id in (' + inIds.join(',') + ')';
                } else {
                    whereClause = 'id=' + inIds;
                }
                var doIt = function doIt(tx) {
                    tx.executeSql('SELECT id, thumbnail, recordingDateTime, creationDateTime, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount, windows FROM PreviousSessions WHERE ' + whereClause + ' ORDER BY id DESC', [], function(tx, data) {
                        if (that.sbdb.rowsReturned(data)) {
                            if (inIds === void 0 || toString.call(inIds) === '[object Array]') {
                                cb(data.rows, tx);
                            } else {
                                cb(data.rows.item(0), tx);
                            }
                        } else {
                            cb(undefined);
                        }
                    });
                };
                if (tx) {
                    doIt(tx);
                } else {
                    this.sbdb.db.transaction(doIt);
                }
            }
        };
        this.getSavedSessionWindows = function(inIds, tx, cb) {
            if (cb) {
                var whereClause, that = this;
                if (inIds === void 0) {
                    whereClause = 'deleted != \'true\'';
                } else if (_util2.default.isArray(inIds)) {
                    whereClause = 'id in (' + inIds.join(',') + ')';
                } else {
                    whereClause = 'id=' + inIds;
                }
                var doIt = function doIt(tx) {
                    tx.executeSql('SELECT id, thumbnail, name, generationDateTime, creationDateTime, modificationDateTime, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount, windows, tags FROM SavedSessions WHERE ' + whereClause + ' ORDER BY id DESC', [], function(tx, data) {
                        if (that.sbdb.rowsReturned(data)) {
                            if (inIds === void 0 || _util2.default.isArray(inIds)) {
                                cb(data.rows, tx);
                            } else {
                                cb(data.rows.item(0), tx);
                            }
                        } else {
                            cb(undefined);
                        }
                    });
                };
                if (tx) {
                    doIt(tx);
                } else {
                    this.sbdb.db.transaction(doIt);
                }
            }
        };
        this.updatePreviousSessionFilterTabCounts = function(inId, inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, tx, cb) {
            var that = this;
            var doIt = function doIt(tx) {
                tx.executeSql('UPDATE PreviousSessions SET unfilteredWindowCount=?, filteredWindowCount=?, unfilteredTabCount=?, filteredTabCount=? WHERE id=?', [ inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, inId ], function(tx, data) {
                    if (cb) {
                        cb(tx);
                    }
                }, function(tx, err) {
                    app.reportException(err, 2, that.isAllowLogging, '4290842');
                });
            };
            if (tx == undefined) {
                this.sbdb.db.transaction(doIt);
            } else {
                doIt(tx);
            }
        };
        this.updateSavedSessionFilterTabCounts = function(inId, inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, tx, cb) {
            var that = this;
            var doIt = function doIt(tx) {
                tx.executeSql('UPDATE SavedSessions SET unfilteredWindowCount=?, filteredWindowCount=?, unfilteredTabCount=?, filteredTabCount=? WHERE id=?', [ inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, inId ], function(tx, data) {
                    if (cb) {
                        cb(tx);
                    }
                }, function(tx, err) {
                    app.reportException(err, 2, that.isAllowLogging, '94776492');
                });
            };
            if (tx == undefined) {
                this.sbdb.db.transaction(doIt);
            } else {
                doIt(tx);
            }
        };
        this.insertUndoAction = function(openTabId, inAction, inDescription, cb, inRegisterValue1, inRegisterValue2, inRegisterValue3, inRegisterValue4, inRegisterValue5) {
            if (inAction && openTabId) {
                if (!inRegisterValue1) {
                    inRegisterValue1 = null;
                }
                if (!inRegisterValue2) {
                    inRegisterValue2 = null;
                }
                if (!inRegisterValue3) {
                    inRegisterValue3 = null;
                }
                if (!inRegisterValue4) {
                    inRegisterValue4 = null;
                }
                if (!inRegisterValue5) {
                    inRegisterValue5 = null;
                }
                var that = this;
                this.sbdb.db.transaction(function(tx) {
                    tx.executeSql('INSERT INTO Undo (creationDateTime, tabIdentifier, action, description, register1, register2, register3, register4, register5) VALUES (?,?,?,?,?,?,?,?,?)', [ new Date().toJSON(), openTabId, inAction, inDescription, inRegisterValue1, inRegisterValue2, inRegisterValue3, inRegisterValue4, inRegisterValue5 ], function(tx, data) {
                        if (cb) {
                            cb();
                        }
                    }, function(tx, sqlErr) {
                        app.reportException(sqlErr, 2, that.isAllowLogging, '0398373');
                    });
                });
            }
        };
        this.getNextUndoAction = function(openTabId, cb) {
            var sqlString = '';
            var sqlParmArray = [];
            var that = this;
            if (openTabId) {
                sqlString = 'SELECT id, action FROM Undo WHERE tabIdentifier=? ORDER BY creationDateTime DESC, id DESC';
                sqlParmArray = [ openTabId ];
            } else {
                sqlString = 'SELECT id, action FROM Undo ORDER BY creationDateTime DESC, id DESC';
                sqlParmArray = [];
            }
            this.sbdb.db.transaction(function(tx) {
                tx.executeSql(sqlString, sqlParmArray, function(tx, data) {
                    if (that.sbdb.rowsReturned(data)) {
                        if (cb) {
                            cb(data.rows.item(0));
                        }
                    } else {
                        if (cb) {
                            cb(null);
                        }
                    }
                }, function(tx, sqlErr) {
                    app.reportException(sqlErr, 2, that.isAllowLogging, '7298372');
                });
            });
        };
        this.popUndoAction = function(openTabId, cb) {
            var sqlString = '';
            var sqlParmArray = [];
            var that = this;
            if (openTabId) {
                sqlString = 'SELECT id FROM Undo WHERE tabIdentifier=? ORDER BY creationDateTime DESC, id DESC';
                sqlParmArray = [ openTabId ];
            } else {
                sqlString = 'SELECT id FROM Undo ORDER BY creationDateTime DESC, id DESC';
                sqlParmArray = [];
            }
            this.sbdb.db.transaction(function(tx) {
                tx.executeSql(sqlString, sqlParmArray, function(tx, data) {
                    if (that.sbdb.rowsReturned(data)) {
                        tx.executeSql('SELECT * FROM Undo WHERE id=?', [ data.rows.item(0).id ], function(tx, data2) {
                            if (that.sbdb.rowsReturned(data2)) {
                                tx.executeSql('DELETE FROM Undo WHERE id=?', [ data.rows.item(0).id ], function(tx, data3) {
                                    if (cb) {
                                        cb(data2.rows.item(0));
                                    }
                                }, function(tx, sqlErr) {
                                    app.reportException(sqlErr, 2, that.isAllowLogging, '83409345');
                                });
                            } else {
                                if (cb) {
                                    cb(null);
                                }
                            }
                        }, function(tx, sqlErr) {
                            app.reportException(sqlErr, 2, that.isAllowLogging, '8923483');
                        });
                    } else {
                        if (cb) {
                            cb(null);
                        }
                    }
                }, function(tx, sqlErr) {
                    app.reportException(sqlErr, 2, that.isAllowLogging, '0398373');
                });
            });
        };
    }
}, function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    exports.default = front;
    var _util = __webpack_require__(0);
    var _util2 = _interopRequireDefault(_util);
    var _domUtil = __webpack_require__(2);
    var _domUtil2 = _interopRequireDefault(_domUtil);
    var _haps = __webpack_require__(20);
    var _haps2 = _interopRequireDefault(_haps);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function front(db, scope, meta, cb) {
        db.getAllSettings(scope, function(rows) {
            var r = function r() {
                return multi.apply(r, arguments);
            };
            r._haps = new _haps2.default();
            r._db = db;
            r._scope = scope;
            r._meta = meta;
            r._map = {};
            if (rows) {
                for (var i = 0; i < rows.length; i++) {
                    r._map[rows.item(i).key] = decode(rows.item(i).value, meta[rows.item(i).key]);
                }
            }
            r.get = get;
            r.on = on;
            r.off = off;
            r.uninit = uninit;
            cb(r);
        });
        function decode(v, meta) {
            if (meta) {
                if (_util2.default.isArray(meta.type)) {
                    if (meta.type.indexOf(v) > -1) {
                        return v;
                    }
                    return meta.def;
                } else {
                    switch (meta.type) {
                      case 'boolean':
                        if (meta.def === true) {
                            return v !== 'false' && v !== false;
                        }
                        return v === 'true' || v === true;

                      case 'date':
                        if (v) {
                            return new Date(v);
                        }
                        return meta.def;

                      case 'number':
                        if (_util2.default.isNumeric(v) && (!meta || !meta.constraint || meta.constraint(v))) {
                            return parseInt(v);
                        }
                        return meta.def;
                    }
                }
            }
            if (!meta || !meta.constraint || meta.constraint(v)) {
                return v;
            }
            return meta.def;
        }
        function encode(v, meta) {
            if (meta && _util2.default.isArray(meta.type)) {
                if (meta.type.indexOf(v) > -1) {
                    return encode(v);
                } else {
                    return encode(meta.def);
                }
            }
            switch (meta && meta.type || _util2.default.type(v)) {
              case 'boolean':
                return !!v + '';

              case 'date':
                return v ? new Date(v).toJSON() : new Date().toJSON();

              case 'number':
                if (_util2.default.isNumeric(v) && (!meta || !meta.constraint || meta.constraint(v))) {
                    return parseInt(v);
                }
                return meta.def;
            }
            if (!meta || !meta.constraint || meta.constraint(v)) {
                return v;
            } else {
                return meta.def;
            }
        }
        function get(k) {
            if (!this._map.hasOwnProperty(k)) {
                this._map[k] = decode(undefined, this._meta[k]);
            }
            return this._map[k];
        }
        function set(k, v, source) {
            if (_domUtil2.default.isControlEl(v)) {
                if (arguments.length < 3) {
                    source = v;
                }
                v = _domUtil2.default.getControlValue(v);
            }
            var oldVal = this._map[k], newVal = this._map[k] = decode(v, this._meta[k]);
            if (oldVal !== newVal) {
                var that = this;
                this._db.setValue(this._scope, k, encode(newVal, this._meta[k]), function() {
                    var o = {
                        key: k,
                        oldVal: oldVal,
                        newVal: newVal
                    };
                    if (!_util2.default.isUndefined(source)) {
                        o.source = source;
                    }
                    that._haps.emit('set', o);
                });
            }
            return newVal;
        }
        function on(handler) {
            return this._haps.on('set', handler);
        }
        function off(handler) {
            return this._haps.off('set', handler);
        }
        function uninit() {
            this._haps = null;
            this._db = null;
            this._scope = null;
            this._map = null;
            this._meta = null;
        }
        function multi() {
            if (!arguments.length) {
                return this._map;
            }
            return (arguments.length > 1 ? set : get).apply(this, arguments);
        }
    }
}, , function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    var SETTINGS_META = {
        installationID: {
            type: 'string'
        },
        installationTimeStamp: {
            type: 'date'
        },
        versionMessageReceived: {
            type: 'string',
            def: ''
        },
        suppressOneTimeStartupMessageForLongTermUser: {
            type: 'boolean',
            def: false
        },
        tabCountsFilterSetting_SessionBuddyTabs: {
            type: 'boolean',
            def: true
        },
        tabCountsFilterSetting_ChromeAdministrativeTabs: {
            type: 'boolean',
            def: false
        }
    };
    exports.default = SETTINGS_META;
}, , function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    var PREVIOUS_SESSION_QUEUE_SIZE = 500;
    var USERSETTINGS_META = {
        tabFiltering_FilterSessionBuddyTabs: {
            type: 'boolean',
            def: true
        },
        tabFiltering_FilterChromeAdministrativeTabs: {
            type: 'boolean',
            def: false
        },
        sessionRender_RenderSessionURL: {
            type: 'boolean',
            def: false
        },
        sessionRender_ShowAdminTabsInItalic: {
            type: 'boolean',
            def: false
        },
        sessionSave_AskForName: {
            type: 'boolean',
            def: true
        },
        app_useClassicFont: {
            type: 'boolean',
            def: false
        },
        ignoreURLParmsForSearch: {
            type: 'boolean',
            def: true
        },
        sessionRender_ShowExtensionBadge: {
            type: 'boolean',
            def: false
        },
        sessionRender_ShowSessionCountsInNavigationPane: {
            type: 'boolean',
            def: false
        },
        enableKeyboardShortcuts: {
            type: 'boolean',
            def: true
        },
        sessionEdit_IgnoreUrlParamsInTabCompare: {
            type: 'boolean',
            def: false
        },
        automaticallyRecordSessions: {
            type: 'boolean',
            def: true
        },
        sessionSave_ConfirmClose: {
            type: 'boolean',
            def: true
        },
        sessionEdit_HideDuplicateTabsInMerge: {
            type: 'boolean',
            def: true
        },
        sessionSummaryRender_PreviousSessionQueueSize: {
            type: 'number',
            def: 3,
            constraint: function constraint(val) {
                return parseInt(val) > -1 && parseInt(val) <= PREVIOUS_SESSION_QUEUE_SIZE;
            }
        },
        showWindowCounts: {
            type: 'boolean',
            def: true
        },
        sessionMerge_WarnOnMerge: {
            type: 'boolean',
            def: true
        },
        sessionSummaryRender_PanelWidth: {
            type: 'number',
            def: 260
        },
        appMode: {
            def: ''
        },
        customDateFormat: {
            def: 'LLLL',
            constraint: function constraint(val) {
                return val && val.trim().length;
            }
        },
        dateDisplayType: {
            type: [ 'custom', 'standard' ],
            def: 'relative'
        },
        sessionExport_Format: {
            type: [ 'CSV', 'JSON', 'HTML', 'Markdown' ],
            def: 'Text'
        },
        sessionExport_Scope: {
            type: [ 'all', 'previous', 'saved' ],
            def: 'selected'
        },
        sessionExport_ShowURLs: {
            type: 'boolean',
            def: true
        },
        sessionExport_ShowWindows: {
            type: 'boolean',
            def: false
        },
        sessionExport_ShowSessions: {
            type: 'boolean',
            def: false
        },
        sessionExport_ShowTitles: {
            type: 'boolean',
            def: false
        }
    };
    exports.default = USERSETTINGS_META;
}, , , function(module, exports, __webpack_require__) {
    'use strict';
    var _util = __webpack_require__(0);
    var _util2 = _interopRequireDefault(_util);
    var _browser = __webpack_require__(1);
    var _browser2 = _interopRequireDefault(_browser);
    var _xid = __webpack_require__(3);
    var _xid2 = _interopRequireDefault(_xid);
    var _moment = __webpack_require__(4);
    var _moment2 = _interopRequireDefault(_moment);
    var _db = __webpack_require__(11);
    var _db2 = _interopRequireDefault(_db);
    var _app = __webpack_require__(10);
    var _app2 = _interopRequireDefault(_app);
    var _front = __webpack_require__(12);
    var _front2 = _interopRequireDefault(_front);
    var _settingsMeta = __webpack_require__(14);
    var _settingsMeta2 = _interopRequireDefault(_settingsMeta);
    var _usersettingsMeta = __webpack_require__(16);
    var _usersettingsMeta2 = _interopRequireDefault(_usersettingsMeta);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    console.log('LOAD ' + new Date().toLocaleTimeString());
    console.log('-----------------------------');
    var api = {
        getSettingsFront: getSettingsFront,
        getUserSettingsFront: getUserSettingsFront,
        getDB: getDB,
        getApp: getApp,
        getGA: getGA,
        isAppReady: isAppReady,
        copyToClipboard: copyToClipboard,
        applyDefaultTheme: applyDefaultTheme,
        executeUndoAction: executeUndoAction,
        sendRequestToAllSBTabs: sendRequestToAllSBTabs,
        pushUndoActionAndClearAllActions: pushUndoActionAndClearAllActions,
        pushUndoActionAndClearSBTabActions: pushUndoActionAndClearSBTabActions,
        recountCurrentSessionTabs: recountCurrentSessionTabs,
        cacheSession: cacheSession,
        clearCacheSessionTimer: clearCacheSessionTimer,
        getPHStatus_Between: getPHStatus_Between
    };
    window.getAPI = function() {
        return api;
    };
    var ga_segment, installationID, cacheSessionTimerId, notifySBTabsOfSessionChangeTimerId, countGlobalTabsTimerId, db, s, us, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount, _isAppReady = false, triggerPreviousSessionGen = false;
    var manifest = chrome.runtime.getManifest(), ga_segment_thresholds = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1e3, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3, 1e4, 11e3, 12e3, 13e3, 14e3, 15e3, 16e3, 17e3, 18e3, 19e3, 2e4, 3e4, 4e4, 5e4 ];
    var csp = manifest && manifest.content_security_policy && manifest.content_security_policy.match('https?://.*?(?=;)');
    if (csp && csp.length && csp[0].length) {
        (function(i, y, o, g, r, a, z) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
            a = y.createElement(o), z = y.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            z.parentNode.insertBefore(a, z);
        })(window, document, 'script', csp[0] + '/analytics.js', 'ga');
        ga('create', 'UA-57872757-3', 'auto');
        ga('set', 'checkProtocolTask', function() {});
        ga_segment = function ga_segment(name, value) {
            if (value) {
                var label = void 0;
                for (var i = 0; i < ga_segment_thresholds.length; i++) {
                    if (value <= ga_segment_thresholds[i]) {
                        label = (i === 0 ? '1' : ga_segment_thresholds[i - 1] + 1) + '-' + ga_segment_thresholds[i];
                        break;
                    }
                }
                if (!label) {
                    label = ga_segment_thresholds[ga_segment_thresholds.length - 1] + '+';
                }
                ga('send', 'event', 'segment', name, label, value, {
                    nonInteraction: 1
                });
                return true;
            }
        };
    }
    ga = window.ga || function() {};
    ga_segment = ga_segment || function() {};
    chrome.browserAction.onClicked.addListener(openSessionBuddyMainUI);
    try {
        _app2.default.setSbDatabase(db = new _db2.default(_app2.default, ga, ga_segment));
        db.isConfigured(function(c) {
            if (c) {
                db.getSetting('dbSetupStatus', function(v) {
                    if (v == 20 || v == 22 || v == 25) {
                        finalizeAppInitialization();
                    } else {
                        _app2.default.reportException({
                            message: 'Unexpected dbSetupStatus: ' + v,
                            type: 'SB'
                        }, 2, _app2.default.isDebug, '703095823');
                    }
                });
            } else {
                setUpSBDB(db, function() {
                    return finalizeAppInitialization(true);
                });
            }
        });
    } catch (ex) {
        _app2.default.reportException(ex, 2, _app2.default.isDebug, '103948101');
    }
    function isAppReady() {
        return _isAppReady;
    }
    function getSettingsFront() {
        return s;
    }
    function getUserSettingsFront() {
        return us;
    }
    function getDB() {
        return db;
    }
    function getGA() {
        return {
            ga: ga,
            ga_segment: ga_segment
        };
    }
    function getPHStatus_Between() {
        var now = (0, _moment2.default)();
        return (0, _moment2.default)('2017-07-11T01:00:00-07').diff(now) < 0 && now.diff('2017-07-16T01:00:00-07') < 0;
    }
    function getApp() {
        return _app2.default;
    }
    function executeUndoAction(openTabId) {
        db.popUndoAction(undefined, function(sqlResultRow) {
            if (sqlResultRow) {
                if (sqlResultRow.action === 'sessionDelete') {
                    sendRequestToAllSBTabs({
                        id: 'hideActionStatus'
                    });
                    db.softDeleteUndeleteSessions(_util2.default.jsonSafeParse(sqlResultRow.register1), false, function(inRowsAffected) {
                        db.getSavedSessionSummaries(undefined, _util2.default.jsonSafeParse(sqlResultRow.register1), function(data1) {
                            var thisSessionInfos = getSavedSessionInfosFromDatabaseRows(data1.rows);
                            db.getPreviousSessionSummaries(undefined, _util2.default.jsonSafeParse(sqlResultRow.register1), function(data2) {
                                thisSessionInfos = thisSessionInfos.concat(getPreviousSessionInfosFromDatabaseRows(data2.rows));
                                sendRequestToAllSBTabs({
                                    id: 'addSessions',
                                    data: {
                                        sessionInfos: thisSessionInfos,
                                        alsoSelect: false,
                                        selectedHeadInfo: _util2.default.jsonSafeParse(sqlResultRow.register2),
                                        selectedTailInfos: _util2.default.jsonSafeParse(sqlResultRow.register3)
                                    },
                                    targetTab: openTabId
                                });
                                sendRequestToAllSBTabs({
                                    id: 'addSessions',
                                    data: {
                                        sessionInfos: thisSessionInfos
                                    },
                                    excludeTab: openTabId
                                });
                            });
                        });
                    });
                } else if (sqlResultRow.action === 'sessionMerge') {
                    sendRequestToAllSBTabs({
                        id: 'hideActionStatus'
                    });
                    db.softDeleteUndeleteSessions([ _util2.default.jsonSafeParse(sqlResultRow.register2) ], true, function(inRowsAffected) {
                        db.softDeleteUndeleteSessions(_util2.default.jsonSafeParse(sqlResultRow.register1), false, function(inRowsAffected) {
                            db.getSavedSessionSummaries(undefined, _util2.default.jsonSafeParse(sqlResultRow.register1), function(data1) {
                                var thisSessionInfos = getSavedSessionInfosFromDatabaseRows(data1.rows);
                                db.getPreviousSessionSummaries(undefined, _util2.default.jsonSafeParse(sqlResultRow.register1), function(data2) {
                                    thisSessionInfos = thisSessionInfos.concat(getPreviousSessionInfosFromDatabaseRows(data2.rows));
                                    sendRequestToAllSBTabs({
                                        id: 'removeAddSessions',
                                        data: {
                                            removeSessionInfos: [ _util2.default.jsonSafeParse(sqlResultRow.register2) ],
                                            addSessionInfos: thisSessionInfos,
                                            alsoSelect: true,
                                            selectedHeadInfo: _util2.default.jsonSafeParse(sqlResultRow.register2),
                                            selectedTailInfos: _util2.default.jsonSafeParse(sqlResultRow.register3),
                                            alsoFocusNavigationPanel: true
                                        },
                                        targetTab: openTabId
                                    });
                                    sendRequestToAllSBTabs({
                                        id: 'removeAddSessions',
                                        data: {
                                            removeSessionInfos: [ _util2.default.jsonSafeParse(sqlResultRow.register2) ],
                                            addSessionInfos: thisSessionInfos
                                        },
                                        excludeTab: openTabId
                                    });
                                });
                            });
                        });
                    });
                } else if (sqlResultRow.action === 'sessionEdit') {
                    sendRequestToAllSBTabs({
                        id: 'undoSessionEdit',
                        data: {
                            windows: _util2.default.jsonSafeParse(sqlResultRow.register1),
                            sessionInfo: _util2.default.jsonSafeParse(sqlResultRow.register2)
                        },
                        targetTab: openTabId
                    });
                    sendRequestToAllSBTabs({
                        id: 'hideActionStatus'
                    });
                }
            }
        });
    }
    function clearUndoStack(openTabId, cb) {
        var sqlString = '';
        var sqlParmArray = [];
        if (openTabId) {
            sqlString = 'DELETE FROM Undo WHERE tabIdentifier=?';
            sqlParmArray = [ openTabId ];
        } else {
            sqlString = 'DELETE FROM Undo';
            sqlParmArray = [];
        }
        db.sbdb.db.transaction(function(tx) {
            tx.executeSql(sqlString, sqlParmArray, function(tx, data1) {
                if (cb) {
                    cb();
                }
            }, function(tx, sqlErr) {
                _app2.default.reportException(sqlErr, 2, _app2.default.isDebug, '87534360394');
            });
        });
    }
    function pushUndoActionAndClearAllActions(openTabId, inAction, inDescription, cb, inRegisterValue1, inRegisterValue2, inRegisterValue3, inRegisterValue4, inRegisterValue5) {
        clearUndoStack(undefined, function() {
            pushUndoAction(openTabId, inAction, inDescription, cb, inRegisterValue1, inRegisterValue2, inRegisterValue3, inRegisterValue4, inRegisterValue5);
        });
    }
    function pushUndoActionAndClearSBTabActions(openTabId, inAction, inDescription, cb, inRegisterValue1, inRegisterValue2, inRegisterValue3, inRegisterValue4, inRegisterValue5) {
        clearUndoStack(openTabId, function() {
            pushUndoAction(openTabId, inAction, inDescription, cb, inRegisterValue1, inRegisterValue2, inRegisterValue3, inRegisterValue4, inRegisterValue5);
        });
    }
    function pushUndoAction(openTabId, inAction, inDescription, cb, inRegisterValue1, inRegisterValue2, inRegisterValue3, inRegisterValue4, inRegisterValue5) {
        db.insertUndoAction(openTabId, inAction, inDescription, cb, inRegisterValue1, inRegisterValue2, inRegisterValue3, inRegisterValue4, inRegisterValue5);
    }
    function getPreviousSessionInfosFromDatabaseRows(inRows) {
        var r = [], item;
        if (inRows) {
            for (var i = 0; i < inRows.length; i++) {
                item = inRows.item(i);
                r.push(_app2.default.createSessionInfo('previous', item.id, undefined, undefined, undefined, item.creationDateTime, item.recordingDateTime, item.unfilteredWindowCount, item.filteredWindowCount, item.unfilteredTabCount, item.filteredTabCount));
            }
        }
        return r;
    }
    function getSavedSessionInfosFromDatabaseRows(inRows) {
        var r = [], item;
        if (inRows) {
            for (var i = 0; i < inRows.length; i++) {
                item = inRows.item(i);
                r.push(_app2.default.createSessionInfo('saved', item.id, undefined, undefined, item.name, item.creationDateTime, item.modificationDateTime, item.unfilteredWindowCount, item.filteredWindowCount, item.unfilteredTabCount, item.filteredTabCount));
            }
        }
        return r;
    }
    function setUpSBDB(inSBDB, inSuccessCallback) {
        var arr = [];
        arr.push('CREATE TABLE IF NOT EXISTS Settings (key TEXT PRIMARY KEY, value NUMERIC)');
        arr.push(sSet('dbSetupStatus', 10, true));
        arr.push(sSet('dbSetupStatusTimeStamp', new Date().toJSON(), true));
        arr.push(sSet('installationID', (0, _xid2.default)()));
        arr.push(sSet('installationTimeStamp', new Date().toJSON()));
        arr.push('CREATE TABLE IF NOT EXISTS UserSettings (key TEXT PRIMARY KEY, value NUMERIC)');
        arr.push('CREATE TABLE IF NOT EXISTS Undo (id INTEGER PRIMARY KEY AUTOINCREMENT, creationDateTime NUMERIC, tabIdentifier TEXT, action TEXT, description TEXT, register1 TEXT, register2 TEXT, register3 TEXT, register4 TEXT, register5 TEXT)');
        arr.push('CREATE TABLE IF NOT EXISTS SavedSessions (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, generationDateTime NUMERIC, creationDateTime NUMERIC, modificationDateTime NUMERIC, tags TEXT, users TEXT, deleted TEXT, thumbnail TEXT, windows TEXT, unfilteredWindowCount INTEGER, filteredWindowCount INTEGER, unfilteredTabCount INTEGER, filteredTabCount INTEGER)');
        arr.push('CREATE TABLE IF NOT EXISTS PreviousSessions (id INTEGER PRIMARY KEY AUTOINCREMENT, recordingDateTime NUMERIC, creationDateTime NUMERIC, users TEXT, deleted TEXT, thumbnail TEXT, windows TEXT, unfilteredWindowCount INTEGER, filteredWindowCount INTEGER, unfilteredTabCount INTEGER, filteredTabCount INTEGER)');
        arr.push('UPDATE Settings SET value=20 WHERE key=\'dbSetupStatus\'');
        arr.push('UPDATE Settings SET value=\'' + new Date().toJSON() + '\' WHERE key=\'dbSetupStatusTimeStamp\'');
        var currentUTCDateStorageString = new Date().toJSON();
        arr.push('INSERT INTO SavedSessions (name, generationDateTime, creationDateTime, modificationDateTime, tags, users, deleted, thumbnail, windows, unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount) VALUES (\'Session Buddy\', \'' + currentUTCDateStorageString + '\', \'' + currentUTCDateStorageString + '\', \'' + currentUTCDateStorageString + '\', \'This session contains some bookmarks related to Session Buddy that may come in handy.\', null, \'false\', \'' + (0, 
        _xid2.default)() + '\', \'[{"nx_title":"About","state": "normal","type": "normal","tabs":[{"title":"sessionbuddy.com","url":"https://sessionbuddy.com/","favIconUrl":"https://sessionbuddy.com/wp-content/uploads/2017/04/cropped-Session-Buddy-32x32.png","pinned":false},{"title":"Session Buddy in the Chrome Web Store","url":"https://chrome.google.com/webstore/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko","favIconUrl":"https://www.google.com/images/icons/product/chrome_web_store-32.png","pinned":false}]},{"nx_title":"Support","state": "normal","type": "normal","tabs":[{"title":"Support hub","url":"https://sessionbuddy.com/support/","favIconUrl":"https://sessionbuddy.com/wp-content/uploads/2017/04/cropped-Session-Buddy-32x32.png","pinned":false},{"title":"Session Buddy forum","url":"https://groups.google.com/forum/?fromgroups#!forum/sessionbuddy-discuss","favIconUrl":"https://groups.google.com/forum/favicon.ico","pinned":false}]},{"nx_title":"Manage","state": "normal","type": "normal","tabs":[{"title":"Session Buddy settings","url":"chrome-extension://edacconmaakjimmfgnblocblbcdcpbko/options.html","pinned":false},{"title":"Manage extension","url":"chrome://extensions/?id=edacconmaakjimmfgnblocblbcdcpbko","favIconUrl":"chrome://theme/IDR_EXTENSIONS_FAVICON@2x","pinned":false},{"title":"How to back up Session Buddy data","url":"https://sessionbuddy.com/backup-restore/","favIconUrl":"https://sessionbuddy.com/images/favicon.png","pinned":false}]},{"nx_title":"Help us out","state": "normal","type": "normal","tabs":[{"title":"Have a sec? Rate us!","url":"https://chrome.google.com/webstore/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko/reviews","favIconUrl":"https://www.google.com/images/icons/product/chrome_web_store-32.png","pinned":false},{"title":"Love Session Buddy? Support us with a donation.","url":"https://sessionbuddy.com/donate/","favIconUrl":"https://sessionbuddy.com/wp-content/uploads/2017/04/cropped-Session-Buddy-32x32.png","pinned":false}]}]\', 3, 0, 8, 0)');
        inSBDB.sbdb.sequenceTransaction(arr, inSuccessCallback, function(tx, err) {
            _app2.default.reportException(err, 2, _app2.default.isDebug, '489302834');
            return true;
        });
        function sSet(k, v, overwrite) {
            return kvInsert(k, v, 'Settings', overwrite);
        }
        function usSet(k, v) {
            return kvInsert(k, v, 'UserSettings');
        }
        function kvInsert(k, v, table, overwrite) {
            if (_util2.default.isString(v)) {
                v = '\'' + v + '\'';
            }
            return 'INSERT OR ' + (overwrite ? 'REPLACE' : 'IGNORE') + ' INTO ' + table + ' (key, value) VALUES (\'' + k + '\', ' + v + ')';
        }
    }
    function finalizeAppInitialization(newInstall) {
        try {
            (0, _front2.default)(db, 'Settings', _settingsMeta2.default, function(sf) {
                s = sf;
                (0, _front2.default)(db, 'UserSettings', _usersettingsMeta2.default, function(usf) {
                    us = usf;
                    _app2.default.setFronts(s, us);
                    _moment2.default.locale([ window.navigator.language, 'en-US' ]);
                    cleanUpDB(function(instID) {
                        installationID = instID;
                        db.installationID = instID;
                        clearUndoStack(undefined, function() {
                            generatePreviousSession(function(newSessionId) {
                                _app2.default.updateAllFilterTabCounts(function() {
                                    db.reapSoftDeletedSessions(function(deletedSessionCount) {
                                        if (deletedSessionCount > 0) {
                                            console.log(deletedSessionCount + (deletedSessionCount === 1 ? ' session reaped.' : ' sessions reaped.'));
                                        }
                                        _app2.default.countStat_ChromeSessionStart(function() {
                                            addListeners();
                                            _isAppReady = true;
                                            if (!_app2.default.applicationException) {
                                                applyDefaultTheme(function() {
                                                    recountCurrentSessionTabs(cacheSession);
                                                });
                                            }
                                        });
                                    });
                                }, newInstall);
                            });
                        });
                    });
                });
            });
        } catch (ex) {
            _app2.default.reportException(ex, 2, _app2.default.isDebug, '20349802938');
        }
    }
    function cleanUpDB(cb) {
        var installationID = s('installationID');
        var needsInstallationId = !installationID || installationID.length < 32;
        if (needsInstallationId) installationID = (0, _xid2.default)();
        db.getSetting('guidGen', function(value_guidGen) {
            if (!value_guidGen) {
                db.sbdb.db.transaction(function(tx) {
                    tx.executeSql('SELECT id FROM PreviousSessions', null, function(tx, data) {
                        var arr = [];
                        for (var i = 0; i < data.rows.length; i++) {
                            arr.push('UPDATE PreviousSessions SET thumbnail=\'' + (0, _xid2.default)() + '\' WHERE id=' + data.rows.item(i).id + ' AND (thumbnail IS NULL OR thumbnail=\'\')');
                        }
                        db.sbdb.sequenceTransaction(arr, function(tx, rowsAffected) {
                            console.log('Generated ' + rowsAffected + ' Previous Session guids');
                            tx.executeSql('SELECT id FROM SavedSessions', null, function(tx, data) {
                                var arr = [];
                                for (var i = 0; i < data.rows.length; i++) {
                                    arr.push('UPDATE SavedSessions SET thumbnail=\'' + (0, _xid2.default)() + '\' WHERE id=' + data.rows.item(i).id + ' AND (thumbnail IS NULL OR thumbnail=\'\')');
                                }
                                db.sbdb.sequenceTransaction(arr, function(tx, rowsAffected) {
                                    console.log('Generated ' + rowsAffected + ' Saved Session guids');
                                    db.setSetting('guidGen', +new Date());
                                    finish(needsInstallationId ? s('installationID', installationID) : installationID);
                                }, function(tx, sqlErr) {
                                    _app2.default.reportException(sqlErr, 2, _app2.default.isDebug, '28942348');
                                });
                            }, function(tx, sqlErr) {
                                _app2.default.reportException(sqlErr, 2, _app2.default.isDebug, '28942347');
                            });
                        }, function(tx, sqlErr) {
                            _app2.default.reportException(sqlErr, 2, _app2.default.isDebug, '28942350');
                        });
                    }, function(tx, sqlErr) {
                        _app2.default.reportException(sqlErr, 2, _app2.default.isDebug, '28942349');
                    });
                });
            } else {
                finish(needsInstallationId ? s('installationID', installationID) : installationID);
            }
        });
        function finish(installationID) {
            db.getSetting('userDistributionIndex', function(value_userDistributionIndex) {
                if (!value_userDistributionIndex) {
                    db.setSetting('userDistributionIndex', Math.floor(Math.random() * 100) + 1);
                }
            });
            if (cb) {
                cb(installationID);
            }
        }
    }
    function generatePreviousSession(cb) {
        var wins;
        if (us('automaticallyRecordSessions')) {
            _app2.default.getSessionCache(function(session) {
                if (session && session !== '[]' && (wins = _util2.default.jsonSafeParse(session)) && _util2.default.isArray(wins) && wins.length && wins[0].hasOwnProperty('tabs') && wins[0].tabs.length) {
                    _app2.default.getSessionCacheTimeStamp(function(recorded) {
                        _app2.default.countFilteredWindowsTabs(wins, function(inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount) {
                            db.savePreviousSession(wins, recorded, inUnfilteredWindowCount, inFilteredWindowCount, inUnfilteredTabCount, inFilteredTabCount, function(newSessionId) {
                                if (newSessionId || newSessionId === 0) {
                                    console.log('Generated Previous Session ' + newSessionId + '; unfiltered windows: ' + inUnfilteredWindowCount + ', filtered windows: ' + inFilteredWindowCount + ', unfiltered tabs: ' + inUnfilteredTabCount + ', filtered tabs: ' + inFilteredTabCount);
                                }
                                cb && cb(newSessionId);
                            });
                        });
                    });
                } else {
                    cb && cb(null);
                }
            });
        } else {
            cb && cb(null);
        }
    }
    function applyDefaultTheme(cb) {
        _app2.default.getDefaultBrowserActionIconFilenames(function(inIconFilename19x19, inIconFilename38x38) {
            _browser2.default.setBrowserIcon(inIconFilename19x19, inIconFilename38x38);
            if (cb) {
                cb();
            }
        });
    }
    function addListeners() {
        chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
            if (request.id === 'selectThisTab') {
                chrome.tabs.update(sender.tab.id, {
                    active: true
                });
            }
        });
        chrome.tabs.onAttached.addListener(respondToPotentialCurrentSessionChange);
        chrome.tabs.onDetached.addListener(function() {
            respondToPotentialCurrentSessionChange();
            delayedRecountCurrentSessionTabs();
        });
        chrome.tabs.onMoved.addListener(respondToPotentialCurrentSessionChange);
        chrome.tabs.onCreated.addListener(function() {
            respondToPotentialCurrentSessionChange();
            delayedRecountCurrentSessionTabs();
        });
        chrome.tabs.onRemoved.addListener(function() {
            respondToPotentialCurrentSessionChange_ExtendedCacheSessionDelay();
            delayedRecountCurrentSessionTabs();
        });
        chrome.tabs.onUpdated.addListener(function() {
            respondToPotentialCurrentSessionChange();
            delayedRecountCurrentSessionTabs();
        });
        chrome.windows.onCreated.addListener(function() {
            if (triggerPreviousSessionGen) {
                triggerPreviousSessionGen = false;
                generatePreviousSession(respondToPotentialCurrentSessionChange);
            } else {
                respondToPotentialCurrentSessionChange();
            }
        });
        chrome.windows.onRemoved.addListener(function() {
            _browser2.default.getAllWindows(function(wins) {
                if (wins.length === 0) {
                    clearTimeout(cacheSessionTimerId);
                    triggerPreviousSessionGen = true;
                } else {
                    respondToPotentialCurrentSessionChange_ExtendedCacheSessionDelay();
                }
            });
        });
    }
    function respondToPotentialCurrentSessionChange(extendedDelay) {
        clearTimeout(cacheSessionTimerId);
        clearTimeout(notifySBTabsOfSessionChangeTimerId);
        if (us('automaticallyRecordSessions')) {
            cacheSessionTimerId = setTimeout(cacheSession, extendedDelay ? 3e4 : 2e3);
        }
        notifySBTabsOfSessionChangeTimerId = setTimeout(notifySBTabsOfSessionChange, 300);
    }
    function respondToPotentialCurrentSessionChange_ExtendedCacheSessionDelay() {
        respondToPotentialCurrentSessionChange(true);
    }
    function cacheSession() {
        clearTimeout(cacheSessionTimerId);
        _browser2.default.getAllWindowsAndTabs(saveWindowsToSessionCache);
    }
    function clearCacheSessionTimer() {
        clearTimeout(cacheSessionTimerId);
    }
    function saveWindowsToSessionCache(wins) {
        _app2.default.saveSessionCache(wins);
    }
    function notifySBTabsOfSessionChange() {
        _browser2.default.getAllWindowsAndTabs(sendCurrentSessionChangeNotification);
    }
    function sendCurrentSessionChangeNotification(wins) {
        chrome.extension.sendMessage({
            id: 'currentSessionChangeNotification',
            data: {
                date: +new Date()
            }
        });
    }
    function delayedRecountCurrentSessionTabs() {
        clearTimeout(countGlobalTabsTimerId);
        countGlobalTabsTimerId = setTimeout(recountCurrentSessionTabs, 300);
    }
    function recountCurrentSessionTabs(cb) {
        clearTimeout(countGlobalTabsTimerId);
        if (cb) {
            _app2.default.countCurrentFilteredWindowsTabs(function(unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount) {
                processCurrentSessionCountsChange(unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount);
                cb();
            });
        } else {
            _app2.default.countCurrentFilteredWindowsTabs(processCurrentSessionCountsChange);
        }
    }
    function processCurrentSessionCountsChange(unfilteredWindowCount, filteredWindowCount, unfilteredTabCount, filteredTabCount) {
        if (unfilteredWindowCount != window.unfilteredWindowCount || filteredWindowCount != window.filteredWindowCount || unfilteredTabCount != window.unfilteredTabCount || filteredTabCount != window.filteredTabCount) {
            _app2.default.refreshBadge(unfilteredTabCount, filteredTabCount);
            chrome.extension.sendMessage({
                id: 'currentSessionCountsChangeNotification',
                data: {
                    unfilteredWindowCount: unfilteredWindowCount,
                    filteredWindowCount: filteredWindowCount,
                    unfilteredTabCount: unfilteredTabCount,
                    filteredTabCount: filteredTabCount,
                    date: +new Date()
                }
            });
            window.unfilteredWindowCount = unfilteredWindowCount;
            window.filteredWindowCount = filteredWindowCount;
            window.unfilteredTabCount = unfilteredTabCount;
            window.filteredTabCount = filteredTabCount;
        }
    }
    function openSessionBuddyMainUI() {
        if (_app2.default.applicationException) {
            return chrome.tabs.create({
                url: 'status.html'
            });
        }
        if (!_isAppReady) return;
        _browser2.default.getCurrentWindowAndTabs(function(cwin) {
            if (cwin.incognito) {
                return _browser2.default.getAllWindowsAndTabs(function(wins) {
                    var targetWid;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = wins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var win = _step.value;
                            if (!win.incognito) {
                                var _iteratorNormalCompletion2 = true;
                                var _didIteratorError2 = false;
                                var _iteratorError2 = undefined;
                                try {
                                    for (var _iterator2 = win.tabs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                        var tab = _step2.value;
                                        if (_app2.default.isSBTab(tab)) {
                                            return _browser2.default.activateFocusTab(tab);
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                            _iterator2.return();
                                        }
                                    } finally {
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }
                                targetWid = targetWid || win.id;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    _browser2.default.openTab({
                        url: 'main.html',
                        active: true
                    }, {
                        id: targetWid == null ? _browser2.default.WINDOW_NEW : targetWid,
                        focused: true
                    });
                });
            }
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;
            try {
                for (var _iterator3 = cwin.tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var tab = _step3.value;
                    if (_app2.default.isSBTab(tab)) {
                        return _browser2.default.activateTab(tab);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;
            try {
                for (var _iterator4 = cwin.tabs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _tab = _step4.value;
                    if (_tab.active) {
                        if (_browser2.default.isNewTab(_tab)) {
                            return chrome.tabs.update({
                                url: 'main.html'
                            });
                        }
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
            return chrome.tabs.create({
                url: 'main.html'
            });
        });
    }
    function copyToClipboard(txt) {
        var copyBuffer = document.getElementById('b');
        if (copyBuffer.value = txt) {
            copyBuffer.select();
            document.execCommand('copy');
            return true;
        }
    }
    function sendRequestToAllSBTabs(inRequest, cb) {
        if (cb) {
            chrome.extension.sendMessage(inRequest, cb);
        } else {
            chrome.extension.sendMessage(inRequest);
        }
    }
    function debug() {
        _app2.default.setActiveAppMode('debug');
    }
    function nodebug() {
        _app2.default.setActiveAppMode('');
    }
}, function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    exports.default = Haps;
    var _util = __webpack_require__(0);
    var _util2 = _interopRequireDefault(_util);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    var _eventSeq = 0, _bufferIdSeq = 0, _listenerIdSeq = 0;
    function Haps(opts) {
        this._listeners = {};
        this._subBuffers = {};
        if (_util2.default.isObject(opts)) {
            this._options = opts;
        }
    }
    Haps.prototype.on = function(eventType, handler, options) {
        if (eventType && _util2.default.isString(eventType) && _util2.default.isFunction(handler)) {
            if (!this._listeners.hasOwnProperty(eventType)) {
                this._listeners[eventType] = [];
            }
            if (!this._options || !this._options.unique || !this.hasListener(eventType, handler)) {
                var listener = {
                    id: ++_listenerIdSeq,
                    h: handler
                };
                if (options) {
                    listener.o = _util2.default.deepClone(options);
                }
                this._listeners[eventType].push(listener);
                return listener.id;
            }
        }
    };
    Haps.prototype.off = function(listenerId) {
        var idx, predicate = function predicate(listener) {
            return listener.id === listenerId;
        };
        for (var eventType in this._listeners) {
            if ((idx = _util2.default.findIndex(this._listeners[eventType], predicate)) > -1) {
                this._listeners[eventType].splice(idx, 1);
                return eventType;
            }
        }
    };
    Haps.prototype.emit = function(type, e) {
        if (!_util2.default.isString(type)) {
            e = type;
            type = null;
        }
        if (this.buffering()) {
            _bufferEmitArgsArr.call(this, [ [ e, type ] ]);
        } else {
            _stageOrEmit.call(this, e, type);
        }
    };
    Haps.prototype.buffer = function() {
        var subBuffNode = {
            subBuff: []
        };
        if (this.buffering()) {
            this._subBuffers[subBuffNode.pid = this._currentSubBuffId].subBuff.push(subBuffNode);
        }
        this._subBuffers[++_bufferIdSeq] = subBuffNode;
        return this._currentSubBuffId = _bufferIdSeq;
    };
    Haps.prototype.release = function(emitArgsArr, subBufferId) {
        if (_util2.default.isNumber(emitArgsArr)) {
            subBufferId = emitArgsArr;
            emitArgsArr = undefined;
        }
        var emitCount = 0;
        if (this.buffering()) {
            var subBuffer = this._subBuffers[subBufferId = subBufferId || this._currentSubBuffId];
            if (subBuffer && !subBuffer.released) {
                _bufferEmitArgsArr.call(this, emitArgsArr, true, subBufferId);
                subBuffer.released = true;
                var pid = subBuffer.pid;
                while (pid && this._subBuffers[pid].released) {
                    pid = this._subBuffers[pid].pid;
                }
                if (!pid) {
                    emitCount = _emitArgTree.call(this, subBuffer.subBuff);
                }
                if (subBufferId === this._currentSubBuffId && !(this._currentSubBuffId = pid)) {
                    this._subBuffers = {};
                }
            }
        } else {
            emitCount = _emitArgTree.call(this, emitArgsArr);
        }
        return emitCount;
    };
    Haps.prototype.buffering = function() {
        return !!this._currentSubBuffId;
    };
    Haps.prototype.flush = function(emitArgsArr) {
        var emitCount = _emitArgTree.call(this, emitArgsArr);
        while (this.buffering()) {
            emitCount += this.release();
        }
        return emitCount;
    };
    Haps.prototype.listenerCount = function(eventType) {
        if (eventType) {
            return this._listeners.hasOwnProperty(eventType) ? this._listeners[eventType].length : 0;
        }
        var r = 0;
        for (eventType in this._listeners) {
            r += this.listenerCount(eventType);
        }
        return r;
    };
    Haps.prototype.hasListeners = function(eventType) {
        return !!this.listenerCount(eventType);
    };
    Haps.prototype.willEmit = function(eventType) {
        return this.hasListeners('any') || this.hasListeners(eventType);
    };
    Haps.prototype.hasListener = function(eventType, handler) {
        if (eventType && handler) {
            return _util2.default.findIndex(this._listeners[eventType], function(listener) {
                return listener.h === handler;
            }) > -1;
        }
    };
    function _stageOrEmit(e, type) {
        if (!e) {
            if (!type) {
                throw 'no event type provided';
            }
            e = {
                type: type
            };
        } else {
            if (type) e.type = type;
            if (!e.type) {
                throw 'no event type provided';
            }
        }
        if (!_util2.default.isString(e.type) || e.type === 'any') {
            throw 'invalid event type "' + e.type + '"';
        }
        e.timeStamp = performance.now();
        e.seq = ++_eventSeq;
        var limit;
        if (this._options && (limit = this._options.limit)) {
            clearTimeout(limit._timerId);
            if (limit.type === 'debounce') {
                limit._timerId = setTimeout(_emitNormalizedEvent, limit.delay || 300, e, true, this);
            } else {
                (limit._queue = limit._queue || []).push(e);
                limit._timerId = setTimeout(_emitNormalizedEventQueue, limit.delay || 300, limit, this);
            }
        } else {
            _emitNormalizedEvent(e, false, this);
        }
    }
    function _emitNormalizedEvent(e, immediate, context) {
        context = context || this;
        _callListeners(context._listeners[e.type], e, immediate, context);
        _callListeners(context._listeners['any'], e, immediate, context);
    }
    function _emitNormalizedEventQueue(limit, context, listener) {
        if (limit.normalize) {
            limit._queue = limit.normalize(limit._queue);
        }
        if (limit._queue.length) {
            context = context || this;
            if (listener) {
                _callListeners([ listener ], limit._queue, true, context);
            } else {
                var e, subQueues = {};
                for (var i = 0; i < limit._queue.length; i++) {
                    e = limit._queue[i];
                    (subQueues[e.type] = subQueues[e.type] || []).push(e);
                }
                for (var eventType in subQueues) {
                    _callListeners(context._listeners[eventType], subQueues[eventType], true, context);
                }
                _callListeners(context._listeners['any'], limit._queue, true, context);
            }
            limit._queue = [];
        }
    }
    function _callListeners(listeners, eventOrQueue, immediate, context) {
        if (listeners) {
            context = context || this;
            var i, listener, limit, turnOffs;
            for (i = 0; i < listeners.length; i++) {
                listener = listeners[i];
                if (!immediate && listener.o && (limit = listener.o.limit)) {
                    clearTimeout(limit._timerId);
                    if (limit.type === 'debounce') {
                        limit._timerId = setTimeout(_callListeners, limit.delay || 300, [ listener ], eventOrQueue, true, context);
                    } else {
                        (limit._queue = limit._queue || []).push(eventOrQueue);
                        limit._timerId = setTimeout(_emitNormalizedEventQueue, limit.delay || 300, limit, context, listener);
                    }
                } else if (listener.h.call(listener.o && listener.o.context, eventOrQueue) === false) {
                    (turnOffs = turnOffs || []).push(listener.id);
                }
            }
            if (turnOffs) {
                for (i = turnOffs.length; i--; ) {
                    context.off(turnOffs[i]);
                }
            }
        }
    }
    function _bufferEmitArgsArr(emitArgsArr, prepend, subBufferId) {
        if (emitArgsArr) {
            var subBuffer = this._subBuffers[subBufferId || this._currentSubBuffId].subBuff;
            if (subBuffer) {
                (prepend ? Array.prototype.unshift : Array.prototype.push).apply(subBuffer, emitArgsArr);
            }
        }
    }
    function _emitArgTree(arr) {
        var emitCount = 0;
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                if (_util2.default.isArray(arr[i])) {
                    _stageOrEmit.apply(this, arr[i]);
                    emitCount++;
                } else if (arr[i].released) {
                    emitCount += _emitArgTree.call(this, arr[i].subBuff);
                    arr[i].subBuff = null;
                }
                arr[i] = null;
            }
        }
        return emitCount;
    }
} ]);