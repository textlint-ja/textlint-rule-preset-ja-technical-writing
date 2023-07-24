var se = [
  "direction",
  // RTL support
  "boxSizing",
  "width",
  // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
  "height",
  "overflowX",
  "overflowY",
  // copy the scrollbar for IE
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderTopStyle",
  "borderRightStyle",
  "borderBottomStyle",
  "borderLeftStyle",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  // https://developer.mozilla.org/en-US/docs/Web/CSS/font
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSize",
  "fontSizeAdjust",
  "lineHeight",
  "fontFamily",
  "textAlign",
  "textTransform",
  "textIndent",
  "textDecoration",
  // might not make a difference, but better be safe
  "letterSpacing",
  "wordSpacing",
  "tabSize",
  "MozTabSize"
], Ve = [
  { n: "direction", v: "inherit" },
  // RTL support
  { n: "boxSizing", v: "inherit" },
  { n: "width", v: "auto" },
  { n: "height", v: "auto" },
  { n: "height", v: "auto" },
  { n: "borderTopWidth", v: "0px" },
  { n: "borderRightWidth", v: "0px" },
  { n: "borderBottomWidth", v: "0px" },
  { n: "borderLeftWidth", v: "0px" },
  { n: "borderStyle", v: "none" },
  { n: "paddingTop", v: "0px" },
  { n: "paddingRight", v: "0px" },
  { n: "paddingBottom", v: "0px" },
  { n: "paddingLeft", v: "0px" },
  { n: "marginTop", v: "0px" },
  { n: "maringRight", v: "0px" },
  { n: "maringBottom", v: "0px" },
  { n: "maringLeft", v: "0px" },
  { n: "fontStyle", v: "inherit" },
  { n: "fontVariant", v: "inherit" },
  { n: "fontWeight", v: "inherit" },
  { n: "fontStretch", v: "inherit" },
  { n: "fontSize", v: "inherit" },
  { n: "fontSizeAdjust", v: "inherit" },
  { n: "lineHeight", v: "inherit" },
  { n: "fontFamily", v: "inherit" },
  { n: "textAlign", v: "inherit" },
  { n: "textTransform", v: "inherit" },
  { n: "textIndent", v: "inherit" },
  { n: "textDecoration", v: "inherit" },
  // might not make a difference, but better be safe
  { n: "letterSpacing", v: "inherit" },
  { n: "wordSpacing", v: "inherit" },
  { n: "tabSize", v: "inherit" }
], Ce = typeof window < "u", Pe = Ce && globalThis.mozInnerScreenX != null, z = globalThis.getComputedStyle ? globalThis.getComputedStyle : function(n) {
  return n.currentStyle;
}, B;
function $e(n) {
  var e = n && n.id || "input-textarea-caret-position-mirror-div", t = n && n.debug || !1, i = t || n && n.reuse || !1, o;
  return i && (o = document.getElementById(e)), o || (o = document.createElement("div"), o.id = e, document.body.appendChild(o), B = void 0), o;
}
function Ae() {
  var n = document.createElement("span"), e = n.style;
  e.position = "absolute", e.visibility = "hidden", e.fontSize = "100px", document.body.appendChild(n);
  var t = parseFloat(z(n).getPropertyValue("font-size"));
  return n.parentNode !== null && n.parentNode.removeChild(n), isFinite(t) ? t / 100 : 1;
}
function Be(n, e, t, i) {
  var o = i && i.debug || !1, l = o || i && i.reuse || !1;
  if (l) {
    var c = i && i.forceUpdateStyle || !1;
    !c && i && !i.reuse && (c = !0);
    var u;
    if (c ? u = !1 : u = i && i.guessIfUpdateStyle || !1, u && (typeof u == "function" && !u(t) || B === n.tagName))
      return;
    B = n.tagName;
  } else
    B = void 0;
  var a = t.style, h = z(n), r = n.nodeName === "INPUT";
  a.whiteSpace = "pre-wrap", r ? (!i || !i.allowInputWrap) && (a.wordWrap = "normal") : a.wordWrap = "break-word", a.position = "absolute", o || (a.visibility = "hidden"), i && i.fontZoom === !0 && (i.fontZoom = 1 / Ae());
  var s = i && i.additionalStyles ? se.concat(i.additionalStyles) : se;
  s.forEach(function(d) {
    if (r && d === "lineHeight") {
      var v = h;
      if (h.lineHeight === "normal" && (a.lineHeight = "1em", a.height = h.height, v = z(t)), h.boxSizing === "border-box") {
        var p = parseInt(h.height), f = parseInt(h.paddingTop) + parseInt(h.paddingBottom) + parseInt(h.borderTopWidth) + parseInt(h.borderBottomWidth), g = f + parseInt(v.lineHeight);
        p > g ? a.lineHeight = p - f + "px" : p === g ? a.lineHeight = v.lineHeight : a.lineHeight = 0;
      } else {
        var x, m, C = 0;
        isFinite(parseFloat(v.lineHeight)) && isFinite(x = parseFloat(h.height)) ? (["borderTop", "borderBottom", "paddingTop", "paddingBottom", "marginTop", "marginBottom"].forEach(
          function(_) {
            m = parseFloat(h[_]), isFinite(m) && (C += m);
          }
        ), C === 0 ? a.lineHeight = h.height : (m = Math.max(x - C, 0), a.lineHeight = (m > 0 ? m : x) + "px")) : a[d] = v[d];
      }
    } else if (i && typeof i.fontZoom == "number" && (d === "fontSize" || d === "lineHeight")) {
      var b;
      isFinite(b = parseFloat(h[d])) ? a[d] = b * i.fontZoom + "px" : a[d] = h[d];
    } else
      a[d] = h[d];
  }), Pe && n.scrollHeight > parseInt(h.height) && (a.overflowY = "scroll");
}
function Re() {
  B = void 0;
}
function re(n, e) {
  return e && e.text ? typeof e.text == "function" ? e.text(n, e) : e.text : n.value;
}
const We = () => {
  let n = "", e = null;
  return (t) => {
    const i = t.value;
    return n === i || (n = i, e = z(t)), e;
  };
}, ze = We();
function Oe(n, e, t, i) {
  n.scrollLeft && (t.scrollLeft = n.scrollLeft), n.scrollTop && (t.scrollTop = n.scrollTop), n.dir && (t.dir = n.dir), i && i.additionalAttributes && i.additionalAttributes.forEach(function(h) {
    t[h] = n[h];
  });
  var o = ze(n), l = n.nodeName === "INPUT";
  t.textContent = re(n, i).substring(0, e), l && (!i || !i.allowInputWrap) && (t.textContent = t.textContent.replace(/\s/g, " "));
  var c = document.createElement("span");
  if (c.textContent = re(n, i).substring(e) || ".", i.fauxId && (c.id = i.fauxId), i.forceClearFauxStyle) {
    var u = c.style;
    Ve.forEach(function(h) {
      u[h.n] = h.v;
    });
  }
  t.appendChild(c);
  var a = {
    top: c.offsetTop + parseInt(o.borderTopWidth),
    left: c.offsetLeft + parseInt(o.borderLeftWidth),
    height: parseInt(o.lineHeight)
  };
  return i && i.returnHeight && (a.height = c.offsetHeight), a;
}
function ae(n, e, t) {
  if (!Ce)
    throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");
  var i = t && t.debug || !1, o = i || t && t.reuse || !1, l = $e(t);
  Be(n, e, l, t);
  var c = Oe(n, e, l, t);
  i && (l.style.backgroundColor = "#aaa", c._div = l);
  var u = t && t.returnDiv;
  return !o && !u ? (Re(), document.body.removeChild(l)) : u && (c._div = l), c;
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const De = /* @__PURE__ */ new WeakMap(), R = (n) => typeof n == "function" && De.has(n);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const le = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, be = (n, e, t = null) => {
  for (; e !== t; ) {
    const i = e.nextSibling;
    n.removeChild(e), e = i;
  }
};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const T = {}, de = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const H = `{{lit-${String(Math.random()).slice(2)}}}`, ye = `<!--${H}-->`, ce = new RegExp(`${H}|${ye}`), A = "$lit$";
class je {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const i = [], o = [], l = document.createTreeWalker(t.content, 133, null, !1);
    let c = 0, u = -1, a = 0;
    const { strings: h, values: { length: r } } = e;
    for (; a < r; ) {
      const s = l.nextNode();
      if (s === null) {
        l.currentNode = o.pop();
        continue;
      }
      if (u++, s.nodeType === 1) {
        if (s.hasAttributes()) {
          const d = s.attributes, { length: v } = d;
          let p = 0;
          for (let f = 0; f < v; f++)
            ue(d[f].name, A) && p++;
          for (; p-- > 0; ) {
            const f = h[a], g = U.exec(f)[2], x = g.toLowerCase() + A, m = s.getAttribute(x);
            s.removeAttribute(x);
            const C = m.split(ce);
            this.parts.push({ type: "attribute", index: u, name: g, strings: C }), a += C.length - 1;
          }
        }
        s.tagName === "TEMPLATE" && (o.push(s), l.currentNode = s.content);
      } else if (s.nodeType === 3) {
        const d = s.data;
        if (d.indexOf(H) >= 0) {
          const v = s.parentNode, p = d.split(ce), f = p.length - 1;
          for (let g = 0; g < f; g++) {
            let x, m = p[g];
            if (m === "")
              x = M();
            else {
              const C = U.exec(m);
              C !== null && ue(C[2], A) && (m = m.slice(0, C.index) + C[1] + C[2].slice(0, -A.length) + C[3]), x = document.createTextNode(m);
            }
            v.insertBefore(x, s), this.parts.push({ type: "node", index: ++u });
          }
          p[f] === "" ? (v.insertBefore(M(), s), i.push(s)) : s.data = p[f], a += f;
        }
      } else if (s.nodeType === 8)
        if (s.data === H) {
          const d = s.parentNode;
          (s.previousSibling === null || u === c) && (u++, d.insertBefore(M(), s)), c = u, this.parts.push({ type: "node", index: u }), s.nextSibling === null ? s.data = "" : (i.push(s), u--), a++;
        } else {
          let d = -1;
          for (; (d = s.data.indexOf(H, d + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), a++;
        }
    }
    for (const s of i)
      s.parentNode.removeChild(s);
  }
}
const ue = (n, e) => {
  const t = n.length - e.length;
  return t >= 0 && n.slice(t) === e;
}, Ze = (n) => n.index !== -1, M = () => document.createComment(""), U = (
  // eslint-disable-next-line no-control-regex
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class he {
  constructor(e, t, i) {
    this.__parts = [], this.template = e, this.processor = t, this.options = i;
  }
  update(e) {
    let t = 0;
    for (const i of this.__parts)
      i !== void 0 && i.setValue(e[t]), t++;
    for (const i of this.__parts)
      i !== void 0 && i.commit();
  }
  _clone() {
    const e = le ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], i = this.template.parts, o = document.createTreeWalker(e, 133, null, !1);
    let l = 0, c = 0, u, a = o.nextNode();
    for (; l < i.length; ) {
      if (u = i[l], !Ze(u)) {
        this.__parts.push(void 0), l++;
        continue;
      }
      for (; c < u.index; )
        c++, a.nodeName === "TEMPLATE" && (t.push(a), o.currentNode = a.content), (a = o.nextNode()) === null && (o.currentNode = t.pop(), a = o.nextNode());
      if (u.type === "node") {
        const h = this.processor.handleTextExpression(this.options);
        h.insertAfterNode(a.previousSibling), this.__parts.push(h);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(a, u.name, u.strings, this.options));
      l++;
    }
    return le && (document.adoptNode(e), customElements.upgrade(e)), e;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const pe = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (n) => n }), Ue = ` ${H} `;
class we {
  constructor(e, t, i, o) {
    this.strings = e, this.values = t, this.type = i, this.processor = o;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", i = !1;
    for (let o = 0; o < e; o++) {
      const l = this.strings[o], c = l.lastIndexOf("<!--");
      i = (c > -1 || i) && l.indexOf("-->", c + 1) === -1;
      const u = U.exec(l);
      u === null ? t += l + (i ? Ue : ye) : t += l.substr(0, u.index) + u[1] + u[2] + A + u[3] + H;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return pe !== void 0 && (t = pe.createHTML(t)), e.innerHTML = t, e;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const G = (n) => n === null || !(typeof n == "object" || typeof n == "function"), X = (n) => Array.isArray(n) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(n && n[Symbol.iterator]);
class Le {
  constructor(e, t, i) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = i, this.parts = [];
    for (let o = 0; o < i.length - 1; o++)
      this.parts[o] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Fe(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, i = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const l = i[0].value;
      if (typeof l == "symbol")
        return String(l);
      if (typeof l == "string" || !X(l))
        return l;
    }
    let o = "";
    for (let l = 0; l < t; l++) {
      o += e[l];
      const c = i[l];
      if (c !== void 0) {
        const u = c.value;
        if (G(u) || !X(u))
          o += typeof u == "string" ? u : String(u);
        else
          for (const a of u)
            o += typeof a == "string" ? a : String(a);
      }
    }
    return o += e[t], o;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class Fe {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== T && (!G(e) || e !== this.value) && (this.value = e, R(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; R(this.value); ) {
      const e = this.value;
      this.value = T, e(this);
    }
    this.value !== T && this.committer.commit();
  }
}
class O {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(M()), this.endNode = e.appendChild(M());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterNode(e) {
    this.startNode = e, this.endNode = e.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendIntoPart(e) {
    e.__insert(this.startNode = M()), e.__insert(this.endNode = M());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = M()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; R(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = T, t(this);
    }
    const e = this.__pendingValue;
    e !== T && (G(e) ? e !== this.value && this.__commitText(e) : e instanceof we ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : X(e) ? this.__commitIterable(e) : e === de ? (this.value = de, this.clear()) : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }
  __commitText(e) {
    const t = this.startNode.nextSibling;
    e = e ?? "";
    const i = typeof e == "string" ? e : String(e);
    t === this.endNode.previousSibling && t.nodeType === 3 ? t.data = i : this.__commitNode(document.createTextNode(i)), this.value = e;
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof he && this.value.template === t)
      this.value.update(e.values);
    else {
      const i = new he(t, e.processor, this.options), o = i._clone();
      i.update(e.values), this.__commitNode(o), this.value = i;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let i = 0, o;
    for (const l of e)
      o = t[i], o === void 0 && (o = new O(this.options), t.push(o), i === 0 ? o.appendIntoPart(this) : o.insertAfterPart(t[i - 1])), o.setValue(l), o.commit(), i++;
    i < t.length && (t.length = i, this.clear(o && o.endNode));
  }
  clear(e = this.startNode) {
    be(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class Xe {
  constructor(e, t, i) {
    if (this.value = void 0, this.__pendingValue = void 0, i.length !== 2 || i[0] !== "" || i[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = i;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; R(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = T, t(this);
    }
    if (this.__pendingValue === T)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = T;
  }
}
class qe extends Le {
  constructor(e, t, i) {
    super(e, t, i), this.single = i.length === 2 && i[0] === "" && i[1] === "";
  }
  _createPart() {
    return new Je(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Je extends Fe {
}
let Ee = !1;
(() => {
  try {
    const n = {
      get capture() {
        return Ee = !0, !1;
      }
    };
    window.addEventListener("test", n, n), window.removeEventListener("test", n, n);
  } catch {
  }
})();
class Ye {
  constructor(e, t, i) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = i, this.__boundHandleEvent = (o) => this.handleEvent(o);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; R(this.__pendingValue); ) {
      const l = this.__pendingValue;
      this.__pendingValue = T, l(this);
    }
    if (this.__pendingValue === T)
      return;
    const e = this.__pendingValue, t = this.value, i = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), o = e != null && (t == null || i);
    i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), o && (this.__options = Ge(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = T;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Ge = (n) => n && (Ee ? { capture: n.capture, passive: n.passive, once: n.once } : n.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Ke {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, t, i, o) {
    const l = t[0];
    return l === "." ? new qe(e, t.slice(1), i).parts : l === "@" ? [new Ye(e, t.slice(1), o.eventContext)] : l === "?" ? [new Xe(e, t.slice(1), i)] : new Le(e, t, i).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new O(e);
  }
}
const Qe = new Ke();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function et(n) {
  let e = fe.get(n.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, fe.set(n.type, e));
  let t = e.stringsArray.get(n.strings);
  if (t !== void 0)
    return t;
  const i = n.strings.join(H);
  return t = e.keyString.get(i), t === void 0 && (t = new je(n, n.getTemplateElement()), e.keyString.set(i, t)), e.stringsArray.set(n.strings, t), t;
}
const fe = /* @__PURE__ */ new Map();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ge = /* @__PURE__ */ new WeakMap(), q = (n, e, t) => {
  let i = ge.get(e);
  i === void 0 && (be(e, e.firstChild), ge.set(e, i = new O(Object.assign({ templateFactory: et }, t))), i.appendInto(e)), i.setValue(n), i.commit();
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
typeof window < "u" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.3.0");
const E = (n, ...e) => new we(n, e, "html", Qe);
var Ie = function() {
  var n = /* @__PURE__ */ new Set();
  return { on: function(e) {
    n.add(e);
  }, off: function(e) {
    n.delete(e);
  }, offAll: function() {
    n.clear();
  }, emit: function(e) {
    n.forEach(function(t) {
      return t(e);
    });
  } };
};
const tt = (n) => {
  let e = {
    visibleTop: 0,
    visibleLeft: 0,
    visibleWidth: 0,
    visibleHeight: 0,
    rectItems: [],
    annotationItems: [],
    highlightRectIdSet: /* @__PURE__ */ new Set(),
    mouseHoverRectIdMap: /* @__PURE__ */ new Map(),
    ...n
  };
  const t = Ie();
  return {
    get() {
      return e;
    },
    onChange(i) {
      t.on(i);
    },
    dispose() {
      t.offAll();
    },
    highlightRectIndexes(i) {
      e = {
        ...e,
        highlightRectIdSet: new Set(i)
      }, t.emit();
    },
    update(i) {
      e = {
        ...e,
        ...i
      }, t.emit();
    },
    clear() {
      e = {
        ...e,
        rectItems: [],
        annotationItems: [],
        highlightRectIdSet: /* @__PURE__ */ new Set(),
        mouseHoverRectIdMap: /* @__PURE__ */ new Map()
      }, t.emit();
    },
    clearHoverState() {
      e = {
        ...e,
        highlightRectIdSet: /* @__PURE__ */ new Set(),
        mouseHoverRectIdMap: /* @__PURE__ */ new Map()
      }, t.emit();
    }
  };
};
function K(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var nt = function(e, t) {
  t || (t = [0, ""]), e = String(e);
  var i = parseFloat(e, 10);
  return t[0] = i, t[1] = e.match(/[\d.\-\+]*\s*(.*)/)[1] || "", t;
}, _e = nt, it = Q, P = Te("in", document.body);
function J(n, e) {
  var t = _e(getComputedStyle(n).getPropertyValue(e));
  return t[0] * Q(t[1], n);
}
function Te(n, e) {
  var t = document.createElement("div");
  t.style.height = "128" + n, e.appendChild(t);
  var i = J(t, "height") / 128;
  return e.removeChild(t), i;
}
function Q(n, e) {
  if (!n)
    return null;
  switch (e = e || document.body, n = (n + "" || "px").trim().toLowerCase(), (e === window || e === document) && (e = document.body), n) {
    case "%":
      return e.clientHeight / 100;
    case "ch":
    case "ex":
      return Te(n, e);
    case "em":
      return J(e, "font-size");
    case "rem":
      return J(document.body, "font-size");
    case "vw":
      return window.innerWidth / 100;
    case "vh":
      return window.innerHeight / 100;
    case "vmin":
      return Math.min(window.innerWidth, window.innerHeight) / 100;
    case "vmax":
      return Math.max(window.innerWidth, window.innerHeight) / 100;
    case "in":
      return P;
    case "cm":
      return P / 2.54;
    case "mm":
      return P / 25.4;
    case "pt":
      return P / 72;
    case "pc":
      return P / 6;
    case "px":
      return 1;
  }
  var t = _e(n);
  if (!isNaN(t[0]) && t[1]) {
    var i = Q(t[1], e);
    return typeof i == "number" ? t[0] * i : null;
  }
  return null;
}
const N = /* @__PURE__ */ K(it), ot = (n, e = !1) => e ? E`<span
            style="pointer-events: none; border: 2px dotted red; position: absolute; left: ${n.left}px; top: ${n.top}px; width: ${n.width}px; height: ${n.height}px;"
        ></span>` : E`<span
            style="pointer-events: none; border-bottom: 2px dotted red; position: absolute; left: ${n.left}px; top: ${n.top}px; width: ${n.width}px; height: ${n.height}px;"
        ></span>`;
class Se extends HTMLElement {
  constructor(e) {
    super(), this.hoverPadding = 8, this.isFocus = !1, this.isHovering = !1, this.attributeChangedCallback = (t, i, o) => {
      this[t] && (this[t] = o, t === "target" && (this.targetElement = document.querySelector(o)));
    }, this.onMouseEnter = () => {
      var t;
      this.isHovering = !0, (t = this.onEnter) == null || t.call(this);
    }, this.onMouseLeave = () => {
      var t;
      this.isHovering = !1, (t = this.onLeave) == null || t.call(this), this.resetHoverState();
    }, this.renderAnnotationMarkers = (t) => {
      const i = t.rectItems.map((o) => ot(o, t.highlightRectIdSet.has(o.id)));
      q(i, this.annotationBox);
    }, this.onFocus = () => {
      this.isFocus = !0;
    }, this.onBlur = () => {
      this.isFocus = !1;
    }, this.isHoverRectItem = (t) => !!this.store.get().mouseHoverRectIdMap.get(t.id), this.onMouseUpdate = (t) => {
      const i = this.store.get(), o = this.hoverPadding, l = i.rectItems.filter((c) => {
        const u = {
          x: t.clientX - c.boxAbsoluteX,
          y: t.clientY - c.boxAbsoluteY
        };
        return c.left - o <= u.x && c.left + c.width + o >= u.x && c.top - o <= u.y && c.top + c.height + o >= u.y;
      }).map((c) => c.id);
      i.rectItems.forEach((c) => {
        var h, r;
        const u = i.mouseHoverRectIdMap.get(c.id), a = l.includes(c.id);
        !u && a ? (h = i.annotationItems.find((s) => s.id === c.id)) == null || h.onMouseEnter({
          rectItem: c
        }) : u && !a && ((r = i.annotationItems.find((s) => s.id === c.id)) == null || r.onMouseLeave({
          rectItem: c
        })), i.mouseHoverRectIdMap.set(c.id, a);
      }), this.store.highlightRectIndexes(l);
    }, this.store = tt(), this.targetElement = e == null ? void 0 : e.targetElement, this.onEnter = e == null ? void 0 : e.onEnter, this.onLeave = e == null ? void 0 : e.onLeave, this.hoverPadding = (e == null ? void 0 : e.hoverPadding) ?? 8;
  }
  static get observedAttributes() {
    return ["target", "hoverPadding"];
  }
  connectedCallback() {
    if (!this.targetElement)
      throw new Error("target element is not found");
    const t = this.attachShadow({ mode: "closed" }), i = document.createElement("div");
    i.className = "overlay", i.setAttribute(
      "style",
      "color: transparent; border: position: absolute; top: 0px; left: 0px; pointer-events: none;"
    );
    const o = document.createElement("div");
    o.className = "annotationBox", i.append(o), t.append(i), this.annotationBox = o, this.targetElement.dataset.attachedTextCheckerElement = "true", this.targetElement.addEventListener("mousemove", this.onMouseUpdate), this.targetElement.addEventListener("focus", this.onFocus), this.targetElement.addEventListener("blur", this.onBlur), this.targetElement.addEventListener("mouseenter", this.onMouseEnter), this.targetElement.addEventListener("mouseleave", this.onMouseLeave), this.store.onChange(() => {
      this.renderAnnotationMarkers(this.store.get());
    });
  }
  disconnectedCallback() {
    this.targetElement.removeEventListener("mousemove", this.onMouseUpdate), this.targetElement.removeEventListener("focus", this.onFocus), this.targetElement.removeEventListener("blur", this.onBlur), this.targetElement.removeEventListener("mouseenter", this.onMouseEnter), this.targetElement.removeEventListener("mouseleave", this.onMouseLeave);
  }
  resetAnnotations() {
    this.store.clear();
  }
  resetHoverState() {
    this.store.clearHoverState();
  }
  updateAnnotations(e) {
    const t = this.targetElement, i = window.getComputedStyle(t), l = ["box-sizing"].map((S) => `${S}: ${i.getPropertyValue(S)};`).join("");
    this.annotationBox.setAttribute(
      "style",
      `color: transparent; overflow:hidden; position: absolute; pointer-events: none; ${l}`
    );
    const c = t.offsetTop, u = t.offsetLeft, a = t.offsetHeight, h = t.clientWidth + parseInt(i.borderLeftWidth || "0", 10) + parseInt(i.borderRightWidth || "0", 10), r = i.zIndex !== null && i.zIndex !== "auto" ? +i.zIndex : 0;
    this.annotationBox.style.zIndex = `${r + 1}`, this.annotationBox.style.left = `${u}px`, this.annotationBox.style.top = `${c}px`, this.annotationBox.style.height = `${a}px`, this.annotationBox.style.width = `${h}px`;
    const s = N(i.getPropertyValue("font-size")) ?? 16.123, d = N(i.getPropertyValue("margin-top")) ?? 0, v = N(i.getPropertyValue("margin-bottom")) ?? 0, p = N(i.getPropertyValue("border-width")) ?? 0, f = N(i.getPropertyValue("padding-top")) ?? 0, g = N(i.getPropertyValue("padding-bottom")) ?? 0, x = t.getBoundingClientRect(), m = x.x, C = x.y, b = x.width, _ = x.height, L = {
      top: t.scrollTop,
      left: t.scrollLeft,
      width: b,
      height: _
    };
    this.annotationBox.scrollTop = t.scrollTop, this.annotationBox.scrollLeft = t.scrollLeft;
    const w = e.slice().reverse();
    let y = !1;
    const V = w.flatMap((S) => {
      var te, ne, ie, oe;
      if (y)
        return [];
      const Ne = S.start, ke = S.end, F = ae(this.targetElement, Ne, {
        reuse: !0,
        returnHeight: !0,
        returnDiv: !1,
        debug: !1
      });
      if (F.top + s < L.top)
        return y = !0, [];
      const W = ae(this.targetElement, ke, {
        reuse: !0,
        returnHeight: !0,
        returnDiv: !0,
        debug: !1
      });
      return F.top === W.top ? [
        {
          id: S.id,
          // left and top is visible position
          // annotationBox(textarea) also scroll with same position of actual textarea
          left: F.left - L.left,
          top: F.top - L.top,
          height: s,
          //startCoordinate.height,
          width: W.left - F.left,
          boxMarginTop: d,
          boxMarginBottom: v,
          boxBorderWidth: p,
          boxAbsoluteX: m,
          boxAbsoluteY: C,
          boxWidth: b,
          boxHeight: _,
          boxPaddingTop: f,
          boxPaddingBottom: g
        }
      ] : (
        // two line
        [
          {
            id: S.id,
            left: F.left - L.left,
            top: F.top - L.top,
            height: s,
            //startCoordinate.height,
            width: (((ne = (te = F == null ? void 0 : F._div) == null ? void 0 : te.getBoundingClientRect()) == null ? void 0 : ne.width) ?? 0) - F.left,
            boxMarginTop: d,
            boxMarginBottom: v,
            boxBorderWidth: p,
            boxAbsoluteX: m,
            boxAbsoluteY: C,
            boxWidth: b,
            boxHeight: _,
            boxPaddingTop: f,
            boxPaddingBottom: g
          },
          {
            id: S.id,
            left: -L.left,
            top: W.top - L.top,
            height: s,
            width: (((oe = (ie = F == null ? void 0 : F._div) == null ? void 0 : ie.getBoundingClientRect()) == null ? void 0 : oe.left) ?? 0) + W.left,
            boxMarginTop: d,
            boxMarginBottom: v,
            boxBorderWidth: p,
            boxAbsoluteX: m,
            boxAbsoluteY: C,
            boxWidth: b,
            boxHeight: _,
            boxPaddingTop: f,
            boxPaddingBottom: g
          }
        ]
      );
    });
    this.store.update({
      annotationItems: e,
      rectItems: V
    });
  }
}
window.customElements.get("text-checker-element") || window.customElements.define("text-checker-element", Se);
const st = (n) => {
  let e = {
    ...n
  };
  const t = Ie();
  return {
    get() {
      return e;
    },
    onChange(i) {
      t.on(i);
    },
    dispose() {
      t.offAll();
    },
    update(i) {
      e = {
        ...e,
        ...i
      }, t.emit();
    },
    removeCardById(i) {
      var o;
      ((o = e == null ? void 0 : e.card) == null ? void 0 : o.id) === i && (e = {
        ...e,
        card: void 0
      }, t.emit());
    },
    removeAllCard() {
      e = {
        ...e,
        card: void 0
      }, t.emit();
    }
  };
};
class Me extends HTMLElement {
  constructor(e) {
    super(), this.isHovering = !1, this.onMouseEnter = () => {
      var t;
      this.isHovering = !0, (t = this.onEnter) == null || t.call(this);
    }, this.onMouseLeave = () => {
      var t;
      this.isHovering = !1, (t = this.onLeave) == null || t.call(this);
    }, this.renderAnnotationMarkers = (t) => {
      var r, s, d, v;
      const i = t.targetRect;
      if (!i)
        return;
      if (!t.card) {
        q("", this.overlay);
        return;
      }
      const o = 16, l = t.card.message.split(/\n/)[0], c = E` <svg
            class="popup-listItem--icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.5 5.6L5 7L6.4 4.5L5 2L7.5 3.4L10 2L8.6 4.5L10 7L7.5 5.6ZM19.5 15.4L22 14L20.6 16.5L22 19L19.5 17.6L17 19L18.4 16.5L17 14L19.5 15.4ZM22 2L20.6 4.5L22 7L19.5 5.6L17 7L18.4 4.5L17 2L19.5 3.4L22 2ZM13.34 12.78L15.78 10.34L13.66 8.22L11.22 10.66L13.34 12.78ZM14.37 7.29L16.71 9.63C17.1 10 17.1 10.65 16.71 11.04L5.04 22.71C4.65 23.1 4 23.1 3.63 22.71L1.29 20.37C0.899998 20 0.899998 19.35 1.29 18.96L12.96 7.29C13.35 6.9 14 6.9 14.37 7.29Z"
            />
        </svg>`, u = [
        t.card.fixable ? {
          message: l,
          label: E`Fix it!`,
          onClick: (r = t.handlers) == null ? void 0 : r.onFixText,
          icon: c
        } : {
          message: t.card.message
        },
        ...t.card.fixable ? [
          {
            label: E`Fix
                              <span class="popup-listItem--ruleName">${t.card.messageRuleId}</span> problems`,
            onClick: (s = t.handlers) == null ? void 0 : s.onFixRule,
            icon: c
          }
        ] : [],
        ...t.card.fixable ? [
          {
            label: E`Fix all problems`,
            onClick: (d = t.handlers) == null ? void 0 : d.onFixAll,
            icon: c
          }
        ] : [],
        {
          label: E`Ignore`,
          onClick: () => {
            var p, f;
            (f = (p = t.handlers) == null ? void 0 : p.onIgnore) == null || f.call(p);
          },
          icon: E`
                    <svg
                        class="popup-listItem--icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.00299 20C5.00299 21.103 5.89999 22 7.00299 22H17.003C18.106 22 19.003 21.103 19.003 20V8H21.003V6H17.003V4C17.003 2.897 16.106 2 15.003 2H9.00299C7.89999 2 7.00299 2.897 7.00299 4V6H3.00299V8H5.00299V20ZM9.00299 4H15.003V6H9.00299V4ZM8.00299 8H17.003L17.004 20H7.00299V8H8.00299Z"
                            fill="#9095AA"
                        />
                        <path d="M9.00299 10H11.003V18H9.00299V10ZM13.003 10H15.003V18H13.003V10Z" />
                    </svg>
                `
        },
        {
          label: E`Rule <span class="popup-listItem--ruleName">${t.card.messageRuleId}</span>`,
          onClick: (v = t.handlers) == null ? void 0 : v.onSeeDocument,
          icon: E` <svg
                    class="popup-listItem--iconImage"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                        fill="#F4F4F4"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.33502 8.33504H5.39325V18.6067H18.6067V8.33504L18.6067 15.665H8.33502V8.33504Z"
                        fill="#878787"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.39325 5.39326H18.6067V8.33504H13.4831V18.6067L18.6067 18.6067H5.39325L10.5168 18.6067V8.33504H5.39325V5.39326Z"
                        fill="black"
                    />
                </svg>`
        }
      ], a = E` <ul class="popoup-list" style="--padding: ${o}px">
            ${u.map((p) => {
        const f = {
          handleEvent: p.onClick
        };
        return p.message ? p.onClick ? E` <li
                            @click=${f}
                            class="popup-listItem"
                            style="--padding: ${o}px;"
                            tabindex="0"
                        >
                            <p class="popup-listItem-message">${p.message}</p>
                            <p class="popup-listItem-content">${p.icon}${p.label}</p>
                        </li>` : E` <li
                            class="popup-listItem"
                            style="--padding: ${o}px; padding-bottom: 0;"
                            tabindex="0"
                        >
                            <p class="popup-listItem-message">${p.message}</p>
                            <p class="popup-listItem-content">${p.icon}${p.label}</p>
                        </li>` : E` <li
                    @click=${f}
                    class="popup-listItem"
                    style="--padding: ${o}px;"
                    tabindex="0"
                >
                    <p class="popup-listItem-content">${p.icon}${p.label}</p>
                </li>`;
      })}
        </ul>`, h = `position: fixed; z-index: 2147483644; min-width: 300px; max-width: 800px; top: ${i.top}px; left: ${i.left - o}px;`;
      this.overlay.setAttribute("style", h), q(a, this.overlay);
    }, this.onEnter = e.onEnter, this.onLeave = e.onLeave, this.store = st();
  }
  connectedCallback() {
    const e = this.attachShadow({ mode: "closed" }), t = document.createElement("div");
    t.className = "popup";
    const i = document.createElement("style"), o = "#F35373", l = "#9095AA";
    i.textContent = `
:root {
    --highlight-color: ${o};
    --highlight-textColor: ${l};
}
.popup {
  color: #000;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
  padding: 0; 
}
.popoup-list {
    margin: 0;
    padding: 0 0 var(--padding) 0;
    list-style: none;
}
.popup-listItem {
    padding: var(--padding);
    cursor: pointer;
}

.popup-listItem--icon, .popup-listItem--iconImage {
    padding-right: 12px; 
    fill: ${l};
    width: 24px;
    height: 24px;
    min-height: 24px;
    min-width: 24px;
}

.popup-listItem:first-child {
    padding-top: var(--padding);
    padding-bottom: var(--padding);
}

.popup-listItem-message {
    font-size: 12px;
    margin: 0;
    padding: 0 0 6px 0;
}

.popup-listItem--ruleName {
    font-size: 12px;
    margin: 0 0.5em;
}

.popup-listItem-content {
    font-size: 16px;
    /* align icon + text */
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
}
.popup-listItem:hover {
    color: #fff;
    background-color: ${o};
}
.popup-listItem:hover .popup-listItem--icon {
    fill: #ffffff !important;
    stroke: #ffffff !important;
}
`, this.overlay = t, this.overlay.addEventListener("mouseenter", this.onMouseEnter), this.overlay.addEventListener("mouseleave", this.onMouseLeave), e.append(i), e.append(t), this.store.onChange(() => {
      this.renderAnnotationMarkers(this.store.get());
    });
  }
  disconnectedCallback() {
    this.overlay.removeEventListener("mouseenter", this.onMouseEnter), this.overlay.removeEventListener("mouseleave", this.onMouseLeave);
  }
  updateCard({
    card: e,
    rect: t,
    handlers: i
  }) {
    this.store.update({
      card: e,
      targetRect: t,
      handlers: i
    });
  }
  dismissCard(e) {
    this.store.removeCardById(e.id);
  }
  dismissCards() {
    this.store.removeAllCard();
  }
}
window.customElements.get("textchecker-popoup-element") || window.customElements.define("textchecker-popoup-element", Me);
var ee = { exports: {} };
const He = (n, e, t = {}) => {
  if (!Number.isFinite(e))
    throw new TypeError("Expected `wait` to be a finite number");
  let i, o, l = [];
  return function(...c) {
    return new Promise((u) => {
      const a = t.leading && !o;
      clearTimeout(o), o = setTimeout(() => {
        o = null;
        const h = t.leading ? i : n.apply(this, c);
        for (u of l)
          u(h);
        l = [];
      }, e), a ? (i = n.apply(this, c), u(i)) : l.push(u);
    });
  };
};
ee.exports = He;
ee.exports.default = He;
var rt = ee.exports;
const at = /* @__PURE__ */ K(rt), lt = localStorage.DEBUG ?? "", dt = lt === "*", I = (...n) => {
  dt && console.log("[textchecker-element]", ...n);
}, ct = () => {
  let n = !1;
  return {
    onComposition: n,
    handleEvent: (e) => {
      e.type === "compositionend" ? n = !1 : e.type === "compositionstart" && (n = !0);
    }
  };
}, ut = (n) => {
  const e = new Me(n);
  return document.body.append(e), e;
};
function ht(n) {
  const e = window.getComputedStyle(n);
  if (e.display === "none" || e.visibility === "hidden")
    return !1;
  const t = n.getBoundingClientRect();
  return t.height === 0 || t.width === 0 ? !1 : t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
}
const pt = ({
  textAreaElement: n,
  lintingDebounceMs: e,
  lintEngine: t
}) => {
  if (!n)
    return I("Can not attach. No textarea", n), () => {
    };
  if (n.readOnly)
    return I("Can not attach textarea that is readonly", n), () => {
    };
  if (n.dataset.attachedTextCheckerElement === "true")
    return I("Can not attach textarea that is already attached", n), () => {
    };
  const i = () => {
    I("dismissCards", {
      textCheckerPopup: o.isHovering,
      textChecker: l.isHovering,
      textCheckerF: l.isFocus
    }), !o.isHovering && !l.isHovering && !l.isFocus && (o.dismissCards(), l.resetHoverState());
  }, o = ut({
    onLeave() {
      i();
    }
  }), l = new Se({
    targetElement: n,
    hoverPadding: 20,
    onLeave() {
      i();
    }
  });
  n.before(l);
  const c = ct(), u = at(async () => {
    if (!ht(n) || c.onComposition)
      return;
    const v = n.value, p = await t.lintText({
      text: v
    });
    I("lint results", p);
    const f = async (x, m) => {
      const C = n.value;
      C === v && C !== x && (n.value = x, await a(), o.dismissCard(m));
    }, g = p.flatMap((x) => x.messages.map((m) => {
      var L;
      const C = m.range ?? ((L = m.fix) == null ? void 0 : L.range) ?? [m.index, m.index + 1], b = {
        id: `${m.ruleId}::${C[0]}-${C[1]}`,
        message: m.message,
        messageRuleId: m.ruleId,
        fixable: !!m.fix
      };
      let _ = null;
      return {
        id: `${m.ruleId}::${C[0]}-${C[1]}`,
        start: C[0],
        end: C[1],
        onMouseEnter: ({ rectItem: w }) => {
          I("annotation - onMouseEnter"), _ && clearTimeout(_), o.updateCard({
            card: b,
            rect: {
              top: w.boxBorderWidth + w.boxMarginTop + w.boxPaddingTop + w.boxAbsoluteY + w.top + w.height,
              left: w.boxAbsoluteX + w.left,
              width: w.width
            },
            handlers: {
              async onFixText() {
                const y = await t.fixText({
                  text: v,
                  messages: [m]
                });
                await f(y.output, b);
              },
              async onFixAll() {
                const y = await t.fixText({
                  text: v,
                  messages: x.messages
                });
                await f(y.output, b);
              },
              async onFixRule() {
                const y = x.messages.filter(
                  (S) => S.ruleId === m.ruleId
                ), V = await t.fixText({
                  text: v,
                  messages: y
                });
                await f(V.output, b);
              },
              async onIgnore() {
                await t.ignoreText({
                  text: v,
                  message: m
                }), await a();
              },
              onSeeDocument() {
                const y = m.ruleId.includes("/") ? m.ruleId.split("/")[1] : m.ruleId;
                window.open(
                  `https://github.com/search?q=textlint ${encodeURIComponent(y)}`,
                  "_blank",
                  "noopener"
                );
              }
            }
          });
        },
        async onMouseLeave({ rectItem: w }) {
          try {
            I("annotation - onMouseLeave"), _ = setTimeout(() => {
              const y = l.isHoverRectItem(w);
              I("dismiss", {
                textCheckerPopup: o.isHovering,
                isRectElementHover: y
              }), !(o.isHovering || y) && o.dismissCard(b);
            }, 500);
          } catch (y) {
            I("Abort dismiss popup", y);
          }
        }
      };
    }));
    I("annotations", g), l.updateAnnotations(g);
  }, e), a = async () => {
    try {
      await u();
    } catch (v) {
      I("update error", v), l.updateAnnotations([]);
    }
  }, h = new ResizeObserver(() => {
    I("ResizeObserver do update"), o.dismissCards(), l.resetAnnotations(), a();
  });
  h.observe(n);
  const r = () => {
    o.dismissCards(), l.resetAnnotations(), a();
  }, s = () => {
    o.dismissCards(), a();
  }, d = (v) => {
    v.relatedTarget === l || v.relatedTarget === o || o.dismissCards();
  };
  return n.addEventListener("compositionstart", c), n.addEventListener("compositionend", c), n.addEventListener("input", u), n.addEventListener("focus", s), n.addEventListener("blur", d), n.addEventListener("focusout", i), window.addEventListener("scroll", r), n.addEventListener("scroll", r), a(), () => {
    window.removeEventListener("scroll", r), n.removeEventListener("scroll", r), n.removeEventListener("compositionstart", c), n.removeEventListener("compositionend", c), n.removeEventListener("input", u), n.removeEventListener("focus", s), n.removeEventListener("blur", d), h.disconnect();
  };
};
var Y = { exports: {} }, D, me;
function ft() {
  if (me)
    return D;
  me = 1;
  var n = 1e3, e = n * 60, t = e * 60, i = t * 24, o = i * 7, l = i * 365.25;
  D = function(r, s) {
    s = s || {};
    var d = typeof r;
    if (d === "string" && r.length > 0)
      return c(r);
    if (d === "number" && isFinite(r))
      return s.long ? a(r) : u(r);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(r)
    );
  };
  function c(r) {
    if (r = String(r), !(r.length > 100)) {
      var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        r
      );
      if (s) {
        var d = parseFloat(s[1]), v = (s[2] || "ms").toLowerCase();
        switch (v) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * l;
          case "weeks":
          case "week":
          case "w":
            return d * o;
          case "days":
          case "day":
          case "d":
            return d * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * t;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * n;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function u(r) {
    var s = Math.abs(r);
    return s >= i ? Math.round(r / i) + "d" : s >= t ? Math.round(r / t) + "h" : s >= e ? Math.round(r / e) + "m" : s >= n ? Math.round(r / n) + "s" : r + "ms";
  }
  function a(r) {
    var s = Math.abs(r);
    return s >= i ? h(r, s, i, "day") : s >= t ? h(r, s, t, "hour") : s >= e ? h(r, s, e, "minute") : s >= n ? h(r, s, n, "second") : r + " ms";
  }
  function h(r, s, d, v) {
    var p = s >= d * 1.5;
    return Math.round(r / d) + " " + v + (p ? "s" : "");
  }
  return D;
}
function gt(n) {
  t.debug = t, t.default = t, t.coerce = a, t.disable = l, t.enable = o, t.enabled = c, t.humanize = ft(), t.destroy = h, Object.keys(n).forEach((r) => {
    t[r] = n[r];
  }), t.names = [], t.skips = [], t.formatters = {};
  function e(r) {
    let s = 0;
    for (let d = 0; d < r.length; d++)
      s = (s << 5) - s + r.charCodeAt(d), s |= 0;
    return t.colors[Math.abs(s) % t.colors.length];
  }
  t.selectColor = e;
  function t(r) {
    let s, d = null, v, p;
    function f(...g) {
      if (!f.enabled)
        return;
      const x = f, m = Number(/* @__PURE__ */ new Date()), C = m - (s || m);
      x.diff = C, x.prev = s, x.curr = m, s = m, g[0] = t.coerce(g[0]), typeof g[0] != "string" && g.unshift("%O");
      let b = 0;
      g[0] = g[0].replace(/%([a-zA-Z%])/g, (L, w) => {
        if (L === "%%")
          return "%";
        b++;
        const y = t.formatters[w];
        if (typeof y == "function") {
          const V = g[b];
          L = y.call(x, V), g.splice(b, 1), b--;
        }
        return L;
      }), t.formatArgs.call(x, g), (x.log || t.log).apply(x, g);
    }
    return f.namespace = r, f.useColors = t.useColors(), f.color = t.selectColor(r), f.extend = i, f.destroy = t.destroy, Object.defineProperty(f, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => d !== null ? d : (v !== t.namespaces && (v = t.namespaces, p = t.enabled(r)), p),
      set: (g) => {
        d = g;
      }
    }), typeof t.init == "function" && t.init(f), f;
  }
  function i(r, s) {
    const d = t(this.namespace + (typeof s > "u" ? ":" : s) + r);
    return d.log = this.log, d;
  }
  function o(r) {
    t.save(r), t.namespaces = r, t.names = [], t.skips = [];
    let s;
    const d = (typeof r == "string" ? r : "").split(/[\s,]+/), v = d.length;
    for (s = 0; s < v; s++)
      d[s] && (r = d[s].replace(/\*/g, ".*?"), r[0] === "-" ? t.skips.push(new RegExp("^" + r.slice(1) + "$")) : t.names.push(new RegExp("^" + r + "$")));
  }
  function l() {
    const r = [
      ...t.names.map(u),
      ...t.skips.map(u).map((s) => "-" + s)
    ].join(",");
    return t.enable(""), r;
  }
  function c(r) {
    if (r[r.length - 1] === "*")
      return !0;
    let s, d;
    for (s = 0, d = t.skips.length; s < d; s++)
      if (t.skips[s].test(r))
        return !1;
    for (s = 0, d = t.names.length; s < d; s++)
      if (t.names[s].test(r))
        return !0;
    return !1;
  }
  function u(r) {
    return r.toString().substring(2, r.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function a(r) {
    return r instanceof Error ? r.stack || r.message : r;
  }
  function h() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return t.enable(t.load()), t;
}
var mt = gt;
(function(n, e) {
  e.formatArgs = i, e.save = o, e.load = l, e.useColors = t, e.storage = c(), e.destroy = (() => {
    let a = !1;
    return () => {
      a || (a = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function t() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function i(a) {
    if (a[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + a[0] + (this.useColors ? "%c " : " ") + "+" + n.exports.humanize(this.diff), !this.useColors)
      return;
    const h = "color: " + this.color;
    a.splice(1, 0, h, "color: inherit");
    let r = 0, s = 0;
    a[0].replace(/%[a-zA-Z%]/g, (d) => {
      d !== "%%" && (r++, d === "%c" && (s = r));
    }), a.splice(s, 0, h);
  }
  e.log = console.debug || console.log || (() => {
  });
  function o(a) {
    try {
      a ? e.storage.setItem("debug", a) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function l() {
    let a;
    try {
      a = e.storage.getItem("debug");
    } catch {
    }
    return !a && typeof process < "u" && "env" in process && (a = process.env.DEBUG), a;
  }
  function c() {
    try {
      return localStorage;
    } catch {
    }
  }
  n.exports = mt(e);
  const { formatters: u } = n.exports;
  u.j = function(a) {
    try {
      return JSON.stringify(a);
    } catch (h) {
      return "[UnexpectedJSONParseError]: " + h.message;
    }
  };
})(Y, Y.exports);
var vt = Y.exports;
const xt = /* @__PURE__ */ K(vt), j = xt("textlint:source-code-fixer"), Z = "\uFEFF";
function Ct(n, e) {
  const t = n.line - e.line;
  return t === 0 ? n.column - e.column : t;
}
function bt(n) {
  return JSON.parse(JSON.stringify(n));
}
function yt(n, e) {
  const t = n.charCodeAt(0) === 65279;
  return wt({
    text: n,
    hasBOM: t
  }, e).output;
}
function wt(n, e) {
  j("Applying fixes");
  const t = n.text, i = [], o = [], l = e.slice(), c = [];
  let u = t.length, a = n.hasBOM ? Z : "";
  if (l.forEach((h) => {
    h && h.fix !== void 0 ? c.push(h) : i.push(h);
  }), c.length) {
    j("Found fixes to apply"), c.sort((r, s) => s.fix.range[1] - r.fix.range[1] || s.fix.range[0] - r.fix.range[0]);
    const h = t.split("");
    return c.forEach((r) => {
      const s = r.fix;
      let d = s.range[0];
      const v = s.range[1];
      let p = s.text;
      if (v <= u) {
        d < 0 && (a = "", d = 0), d === 0 && p[0] === Z && (a = Z, p = p.slice(1));
        const f = h.splice(d, v - d, p);
        u = d;
        const g = bt(r);
        g.fix = {
          range: [d, d + p.length],
          text: f.join("")
        }, o.push(g);
      } else
        i.push(r);
    }), {
      fixed: !0,
      messages: l,
      applyingMessages: o.reverse(),
      remainingMessages: i.sort(Ct),
      output: a + h.join("")
    };
  } else
    return j("No fixes to apply"), {
      fixed: !1,
      messages: l,
      applyingMessages: o,
      remainingMessages: i,
      output: a + t
    };
}
const ve = document.querySelector("#js-status"), k = (n) => {
  ve && (ve.textContent = n);
}, Lt = (n) => {
  let e = null;
  const t = new Promise((i) => {
    e = i;
  });
  return n.addEventListener(
    "message",
    function(i) {
      const o = i.data;
      o.command === "init" && e && e(o.metadata);
    },
    {
      once: !0
    }
  ), {
    ready() {
      return t;
    }
  };
}, xe = () => crypto.randomUUID(), Ft = ({ worker: n, ext: e }) => ({
  lintText: async ({ text: o }) => {
    k("linting...");
    const l = new AbortController(), c = new Promise((u, a) => {
      const h = xe();
      return n.addEventListener(
        "message",
        (r) => {
          const s = r.data;
          s.command === "error" && (!("id" in s) || s.id === h) ? a(s.error) : s.command === "lint:result" && s.id === h && u([s.result]);
        },
        { signal: l.signal }
      ), n.postMessage({
        id: h,
        command: "lint",
        text: o,
        ext: e
      });
    });
    return c.then(() => {
      k("linted");
    }).catch(() => {
      k("failed to lint");
    }).finally(() => {
      l.abort();
    }), c;
  },
  fixText: async ({
    text: o,
    message: l
  }) => {
    k("fixing...");
    const c = new AbortController(), u = new Promise((a, h) => {
      const r = xe();
      return n.addEventListener(
        "message",
        (s) => {
          const d = s.data;
          d.command === "error" && (!("id" in d) || d.id === r) ? h(d.error) : d.command === "fix:result" && d.id === r && a(d.result);
        },
        { signal: c.signal }
      ), n.postMessage({
        id: r,
        command: "fix",
        text: o,
        ruleId: l == null ? void 0 : l.ruleId,
        ext: e
      });
    });
    return u.then(() => {
      k("fixed");
    }).catch(() => {
      k("failed to fix");
    }).finally(() => {
      c.abort();
    }), u;
  }
});
function $(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
async function It(n) {
  var d, v;
  const e = new Worker(n), t = Lt(e), i = new URL(location.href).searchParams.get("text"), o = document.querySelectorAll("textarea"), l = Ft({ worker: e, ext: ".md" }), c = await t.ready(), u = /* @__PURE__ */ new Map(), a = (p, f) => {
    var x;
    const g = f.range ?? ((x = f == null ? void 0 : f.fix) == null ? void 0 : x.range) ?? [f.index, f.index + 1];
    return p.slice(g[0], g[1]);
  }, h = ({ text: p, message: f }) => {
    const g = u.get(f.ruleId);
    return g ? g.has(a(p, f)) : !1;
  }, r = {
    async lintText({ text: p }) {
      return (await l.lintText({ text: p })).map((g) => ({
        filePath: g.filePath,
        messages: g.messages.filter((x) => !h({ text: p, message: x }))
      }));
    },
    async fixText({ text: p, messages: f }) {
      const g = f.filter((x) => !h({ text: p, message: x }));
      return {
        output: yt(p, g)
      };
    },
    async ignoreText({ text: p, message: f }) {
      const g = u.get(f.ruleId) ?? /* @__PURE__ */ new Set();
      return g.add(a(p, f)), u.set(f.ruleId, g), !0;
    }
  };
  o.forEach((p) => {
    i && (p.value = i), pt({
      textAreaElement: p,
      lintingDebounceMs: 200,
      lintEngine: r
    });
  });
  const s = document.createElement("div");
  s.innerHTML = `
<h3>Script metadata</h3>
<ul>
    ${Object.entries(c).map(([p, f]) => {
    const g = (x, m) => x === "homepage" ? `<a href="${$(m)}">${$(m)}</a>` : typeof m == "object" ? `<pre>${$(JSON.stringify(m, null, 4))}</pre>` : $(m);
    return `<dt>${$(p)}</dt><dd>${g(p, f)}</dd>`;
  }).join(`
`)}
</ul>`, (d = document.querySelector("#metadata")) == null || d.append(s), (v = document.querySelector("#install")) == null || v.addEventListener("click", () => {
    window.open("textlint-worker.js", "_blank");
  });
}
export {
  It as run
};
