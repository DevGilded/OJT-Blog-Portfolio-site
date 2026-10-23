import * as __ext0 from "react";
import * as __ext1 from "react-dom";
import * as __ext2 from "react/jsx-runtime";
import * as __ext3 from "react-router-dom";
import * as __ext4 from "@emotion/is-prop-valid";
var require = (m) => {
  var __mods = {
    react: __ext0,
    "react-dom": __ext1,
    "react/jsx-runtime": __ext2,
    "react-router-dom": __ext3,
    "@emotion/is-prop-valid": __ext4,
  };
  if (__mods[m]) return __mods[m];
  throw new Error("Cannot require " + m);
};
var A0 = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, a) => (typeof require < "u" ? require : t)[a] })
      : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
import { useState as Z0 } from "react";
import { jsx as v1, jsxs as q0 } from "react/jsx-runtime";
var D0 = {
    xs: "h-6 w-6 text-[10px]",
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-base",
    xl: "h-20 w-20 text-xl",
    "2xl": "h-40 w-40 text-4xl",
  },
  O0 = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3",
    xl: "h-4 w-4",
    "2xl": "h-6 w-6 bottom-2 right-2",
  },
  F0 = {
    online: "bg-emerald-500",
    offline: "bg-slate-400",
    busy: "bg-rose-500",
  };
function $0(e) {
  if (!e) return "";
  let t = e.trim().split(/\s+/).filter(Boolean);
  return t.length === 0
    ? ""
    : t.length === 1
      ? t[0].charAt(0).toUpperCase()
      : (t[0].charAt(0) + t[t.length - 1].charAt(0)).toUpperCase();
}
function j0({
  src: e,
  alt: t = "",
  initials: a,
  size: o = "md",
  ring: r = !1,
  status: i,
  className: l = "",
  ...s
}) {
  let [n, d] = Z0(!1),
    u = !!e && !n,
    c = a ?? $0(t);
  return q0("span", {
    className: `relative inline-flex shrink-0 ${l}`,
    ...s,
    "data-id": "element-13",
    "data-mp": "3j8m4pe9csajt",
    children: [
      v1("span", {
        className: `inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-100 font-semibold text-slate-600 select-none ${r ? "ring-2 ring-white" : ""} ${D0[o]}`,
        role: u ? void 0 : "img",
        "aria-label": u ? void 0 : t || void 0,
        "data-id": "element-14",
        "data-mp": "1jxbh7fy8nfwy",
        children: u
          ? v1("img", {
              src: e,
              alt: t,
              className: "h-full w-full object-cover",
              onError: () => d(!0),
              "data-id": "element-15",
              "data-mp": "1qsuxgb9jr7f2",
            })
          : c
            ? v1("span", {
                "aria-hidden": "true",
                "data-id": "element-16",
                "data-mp": "1zsreprtlx403",
                children: c,
              })
            : v1("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 24 24",
                className: "h-3/5 w-3/5 text-slate-400",
                fill: "currentColor",
                "data-id": "element-17",
                "data-mp": "1zqwu6em8zdwj",
                children: v1("path", {
                  d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.76-3.58-5-8-5Z",
                  "data-id": "element-18",
                  "data-mp": "29ijb8rl9o777",
                }),
              }),
      }),
      i &&
        v1("span", {
          className: `absolute bottom-0 right-0 block rounded-full ring-2 ring-white ${F0[i]} ${O0[o]}`,
          "aria-label": i,
          role: "status",
          "data-id": "element-19",
          "data-mp": "2ikagjvbwac0j",
        }),
    ],
  });
}
import { jsx as _r, jsxs as _0 } from "react/jsx-runtime";
var N0 = {
    neutral: "bg-slate-100 text-slate-700 ring-slate-200",
    primary: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    warning: "bg-amber-50 text-amber-800 ring-amber-200",
    danger: "bg-rose-50 text-rose-700 ring-rose-200",
    info: "bg-sky-50 text-sky-700 ring-sky-200",
    outline: "bg-white text-slate-700 ring-slate-300",
  },
  E0 = {
    neutral: "bg-slate-500",
    primary: "bg-indigo-500",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-rose-500",
    info: "bg-sky-500",
    outline: "bg-slate-500",
  },
  U0 = {
    sm: "px-2 py-0.5 text-[11px] gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
  };
function z0({
  variant: e = "neutral",
  size: t = "md",
  dot: a = !1,
  icon: o,
  className: r = "",
  children: i,
  ...l
}) {
  return _0("span", {
    className: [
      "inline-flex items-center whitespace-nowrap rounded-full font-medium leading-none ring-1 ring-inset",
      N0[e],
      U0[t],
      r,
    ]
      .filter(Boolean)
      .join(" "),
    ...l,
    "data-id": "element-20",
    "data-mp": "vp7fya6ssdh6",
    children: [
      a &&
        _r("span", {
          "aria-hidden": "true",
          className: `h-1.5 w-1.5 shrink-0 rounded-full ${E0[e]}`,
          "data-id": "element-21",
          "data-mp": "qu1j4gbuxeeb",
        }),
      o &&
        _r("span", {
          "aria-hidden": "true",
          className: "inline-flex shrink-0 [&>svg]:h-3 [&>svg]:w-3",
          "data-id": "element-22",
          "data-mp": "1jdgv4t9ia2zc",
          children: o,
        }),
      i,
    ],
  });
}
import hi from "react";
import { forwardRef as W0, createElement as K0 } from "react";
var la = (...e) =>
  e
    .filter((t, a, o) => !!t && t.trim() !== "" && o.indexOf(t) === a)
    .join(" ")
    .trim();
var Gr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var Wr = (e) =>
  e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, a, o) =>
    o ? o.toUpperCase() : a.toLowerCase(),
  );
var Zo = (e) => {
  let t = Wr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
import { forwardRef as G0, createElement as Qr } from "react";
var Kr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
var Xr = (e) => {
  for (let t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  return !1;
};
var Yr = G0(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: r = "",
      children: i,
      iconNode: l,
      ...s
    },
    n,
  ) =>
    Qr(
      "svg",
      {
        ref: n,
        ...Kr,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: o ? (Number(a) * 24) / Number(t) : a,
        className: la("lucide", r),
        ...(!i && !Xr(s) && { "aria-hidden": "true" }),
        ...s,
      },
      [...l.map(([d, u]) => Qr(d, u)), ...(Array.isArray(i) ? i : [i])],
    ),
);
var S = (e, t) => {
  let a = W0(({ className: o, ...r }, i) =>
    K0(Yr, {
      ref: i,
      iconNode: t,
      className: la(`lucide-${Gr(Zo(e))}`, `lucide-${e}`, o),
      ...r,
    }),
  );
  return ((a.displayName = Zo(e)), a);
};
var X0 = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  Je = S("arrow-up-right", X0);
var Q0 = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  pt = S("award", Q0);
var Y0 = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  mt = S("calendar", Y0);
var J0 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Ct = S("check", J0);
var ei = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ],
  ht = S("circle-dot", ei);
var ti = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]],
  gt = S("circle", ti);
var ai = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ],
  xt = S("clock", ai);
var oi = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  L1 = S("download", oi);
var ri = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  w1 = S("external-link", ri);
var li = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  vt = S("globe", li);
var ii = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  Lt = S("heart", ii);
var si = [
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
    ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
    ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
    ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
    [
      "path",
      {
        d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
        key: "mmje98",
      },
    ],
    ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }],
  ],
  e1 = S("image-off", si);
var ni = [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ],
  t1 = S("image", ni);
var di = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  a1 = S("mail", di);
var ui = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  wt = S("map-pin", ui);
var ci = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "m21 3-7 7", key: "1l2asr" }],
    ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
    ["path", { d: "M9 21H3v-6", key: "wtvkvv" }],
  ],
  It = S("maximize-2", ci);
var fi = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  bt = S("menu", fi);
var pi = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  yt = S("phone", pi);
var mi = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  Mt = S("quote", mi);
var Ci = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  o1 = S("x", Ci);
import { jsx as q, jsxs as fe } from "react/jsx-runtime";
function gi({
  title: e,
  excerpt: t,
  date: a,
  thumbnailUrl: o,
  thumbnailAlt: r = "",
  tags: i = [],
  readTime: l,
  href: s,
  onClick: n,
  layout: d = "vertical",
  maxTags: u = 3,
  loading: c = !1,
  className: f = "",
}) {
  let p = d === "horizontal",
    [m, C] = hi.useState(!1);
  if (c)
    return q(xi, {
      layout: d,
      className: f,
      "data-id": "element-23",
      "data-mp": "x86jff7adiva",
    });
  let h = i.slice(0, u),
    g = i.length - h.length,
    { iso: x, label: L } = vi(a),
    v = !!(s || n),
    w = s ? "a" : n ? "button" : "div";
  return q("article", {
    className: `group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 ${v ? "hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" : ""} ${f}`,
    "data-id": "element-24",
    "data-mp": "sw6ynd15yf4s",
    children: fe(w, {
      ...(s ? { href: s } : {}),
      ...(n ? { onClick: n, type: "button" } : {}),
      className: `flex h-full w-full text-left focus:outline-none ${p ? "flex-col sm:flex-row" : "flex-col"}`,
      "data-id": "element-25",
      "data-mp": "1gongpnkwi743",
      children: [
        q("div", {
          className: `relative shrink-0 overflow-hidden bg-slate-100 ${p ? "aspect-video sm:aspect-auto sm:w-2/5" : "aspect-video w-full"}`,
          "data-id": "element-26",
          "data-mp": "1ln78i4m6ed4d",
          children:
            o && !m
              ? q("img", {
                  src: o,
                  alt: r,
                  loading: "lazy",
                  onError: () => C(!0),
                  className:
                    "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
                  "data-id": "element-27",
                  "data-mp": "22n9ymwvetbg8",
                })
              : q("div", {
                  className:
                    "flex h-full w-full items-center justify-center text-slate-400",
                  "aria-hidden": "true",
                  "data-id": "element-28",
                  "data-mp": "2geojl98vnmpx",
                  children: q(t1, {
                    className: "h-8 w-8",
                    "data-id": "element-29",
                    "data-mp": "2le15nrrxcprg",
                  }),
                }),
        }),
        fe("div", {
          className: "flex flex-1 flex-col gap-3 p-5",
          "data-id": "element-30",
          "data-mp": "2qcuhlfrkc8pi",
          children: [
            fe("div", {
              className:
                "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500",
              "data-id": "element-31",
              "data-mp": "2qccfw3m4t2a7",
              children: [
                fe("span", {
                  className: "inline-flex items-center gap-1.5",
                  "data-id": "element-32",
                  "data-mp": "r1l24yqijpqa",
                  children: [
                    q(mt, {
                      className: "h-3.5 w-3.5",
                      "aria-hidden": "true",
                      "data-id": "element-33",
                      "data-mp": "vy1slzl6qg6j",
                    }),
                    q("time", {
                      dateTime: x,
                      "data-id": "element-34",
                      "data-mp": "398urwj2nddih",
                      children: L,
                    }),
                  ],
                }),
                l &&
                  fe("span", {
                    className: "inline-flex items-center gap-1.5",
                    "data-id": "element-35",
                    "data-mp": "34imrcquy8x7b",
                    children: [
                      q(xt, {
                        className: "h-3.5 w-3.5",
                        "aria-hidden": "true",
                        "data-id": "element-36",
                        "data-mp": "34h376p66a209",
                      }),
                      l,
                    ],
                  }),
              ],
            }),
            fe("h3", {
              className:
                "flex items-start justify-between gap-2 text-lg font-semibold leading-snug text-slate-900",
              "data-id": "element-37",
              "data-mp": "2vi825gev6xyj",
              children: [
                q("span", {
                  className: "line-clamp-2",
                  "data-id": "element-38",
                  "data-mp": "3s6xn5flsg6oq",
                  children: e,
                }),
                v &&
                  q(Je, {
                    className:
                      "mt-1 h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-600",
                    "aria-hidden": "true",
                    "data-id": "element-39",
                    "data-mp": "3o63z8m8cirvu",
                  }),
              ],
            }),
            t &&
              q("p", {
                className:
                  "line-clamp-3 text-sm leading-relaxed text-slate-600",
                "data-id": "element-40",
                "data-mp": "3e7xxc4mjhlqz",
                children: t,
              }),
            i.length > 0 &&
              fe("ul", {
                className: "mt-auto flex flex-wrap gap-1.5 pt-1",
                "aria-label": "Tags",
                "data-id": "element-41",
                "data-mp": "27prbwikz3zo5",
                children: [
                  h.map((I) =>
                    q(
                      "li",
                      {
                        className:
                          "rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-100",
                        "data-id": "element-42",
                        "data-mp": "3qp712hxh3dau",
                        children: I,
                      },
                      I,
                    ),
                  ),
                  g > 0 &&
                    fe("li", {
                      className:
                        "rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600",
                      title: i.slice(u).join(", "),
                      "data-id": "element-43",
                      "data-mp": "3mnc2vmau9g1a",
                      children: ["+", g],
                    }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
}
function xi({ layout: e = "vertical", className: t = "" }) {
  let a = e === "horizontal";
  return fe("div", {
    role: "status",
    "aria-label": "Loading post",
    className: `flex w-full animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white ${a ? "flex-col sm:flex-row" : "flex-col"} ${t}`,
    "data-id": "element-44",
    "data-mp": "2oz1yx1rhsi7j",
    children: [
      q("div", {
        className: `bg-slate-200 ${a ? "aspect-video sm:aspect-auto sm:w-2/5" : "aspect-video w-full"}`,
        "data-id": "element-45",
        "data-mp": "2hhn8wiem03kg",
      }),
      fe("div", {
        className: "flex flex-1 flex-col gap-3 p-5",
        "data-id": "element-46",
        "data-mp": "2vfbyu4nja0wd",
        children: [
          q("div", {
            className: "h-3 w-24 rounded bg-slate-200",
            "data-id": "element-47",
            "data-mp": "2qhs8459nfvnj",
          }),
          q("div", {
            className: "h-5 w-4/5 rounded bg-slate-200",
            "data-id": "element-48",
            "data-mp": "2qibovinkcdzz",
          }),
          fe("div", {
            className: "space-y-2",
            "data-id": "element-49",
            "data-mp": "22r6az916nvsb",
            children: [
              q("div", {
                className: "h-3 w-full rounded bg-slate-200",
                "data-id": "element-50",
                "data-mp": "22shgpee6vdm2",
              }),
              q("div", {
                className: "h-3 w-2/3 rounded bg-slate-200",
                "data-id": "element-51",
                "data-mp": "1yr5kgq0t7u4w",
              }),
            ],
          }),
          fe("div", {
            className: "flex gap-1.5 pt-1",
            "data-id": "element-52",
            "data-mp": "2chr78ptdwo82",
            children: [
              q("div", {
                className: "h-5 w-14 rounded-full bg-slate-200",
                "data-id": "element-53",
                "data-mp": "2cij381qw8nyv",
              }),
              q("div", {
                className: "h-5 w-16 rounded-full bg-slate-200",
                "data-id": "element-54",
                "data-mp": "27ras919x0ujl",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function vi(e) {
  let t = typeof e == "string" ? new Date(e) : e;
  return Number.isNaN(t.getTime())
    ? { iso: String(e), label: String(e) }
    : {
        iso: t.toISOString().slice(0, 10),
        label: t.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      };
}
import { forwardRef as Qi } from "react";
var Fo = "-",
  Li = (e) => {
    let t = Ii(e),
      { conflictingClassGroups: a, conflictingClassGroupModifiers: o } = e;
    return {
      getClassGroupId: (l) => {
        let s = l.split(Fo);
        return (s[0] === "" && s.length !== 1 && s.shift(), t2(s, t) || wi(l));
      },
      getConflictingClassGroupIds: (l, s) => {
        let n = a[l] || [];
        return s && o[l] ? [...n, ...o[l]] : n;
      },
    };
  },
  t2 = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    let a = e[0],
      o = t.nextPart.get(a),
      r = o ? t2(e.slice(1), o) : void 0;
    if (r) return r;
    if (t.validators.length === 0) return;
    let i = e.join(Fo);
    return t.validators.find(({ validator: l }) => l(i))?.classGroupId;
  },
  Jr = /^\[(.+)\]$/,
  wi = (e) => {
    if (Jr.test(e)) {
      let t = Jr.exec(e)[1],
        a = t?.substring(0, t.indexOf(":"));
      if (a) return "arbitrary.." + a;
    }
  },
  Ii = (e) => {
    let { theme: t, prefix: a } = e,
      o = { nextPart: new Map(), validators: [] };
    return (
      yi(Object.entries(e.classGroups), a).forEach(([i, l]) => {
        Oo(l, o, i, t);
      }),
      o
    );
  },
  Oo = (e, t, a, o) => {
    e.forEach((r) => {
      if (typeof r == "string") {
        let i = r === "" ? t : e2(t, r);
        i.classGroupId = a;
        return;
      }
      if (typeof r == "function") {
        if (bi(r)) {
          Oo(r(o), t, a, o);
          return;
        }
        t.validators.push({ validator: r, classGroupId: a });
        return;
      }
      Object.entries(r).forEach(([i, l]) => {
        Oo(l, e2(t, i), a, o);
      });
    });
  },
  e2 = (e, t) => {
    let a = e;
    return (
      t.split(Fo).forEach((o) => {
        (a.nextPart.has(o) ||
          a.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (a = a.nextPart.get(o)));
      }),
      a
    );
  },
  bi = (e) => e.isThemeGetter,
  yi = (e, t) =>
    t
      ? e.map(([a, o]) => {
          let r = o.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([l, s]) => [t + l, s]),
                  )
                : i,
          );
          return [a, r];
        })
      : e,
  Mi = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      a = new Map(),
      o = new Map(),
      r = (i, l) => {
        (a.set(i, l), t++, t > e && ((t = 0), (o = a), (a = new Map())));
      };
    return {
      get(i) {
        let l = a.get(i);
        if (l !== void 0) return l;
        if ((l = o.get(i)) !== void 0) return (r(i, l), l);
      },
      set(i, l) {
        a.has(i) ? a.set(i, l) : r(i, l);
      },
    };
  },
  a2 = "!",
  Si = (e) => {
    let { separator: t, experimentalParseClassName: a } = e,
      o = t.length === 1,
      r = t[0],
      i = t.length,
      l = (s) => {
        let n = [],
          d = 0,
          u = 0,
          c;
        for (let h = 0; h < s.length; h++) {
          let g = s[h];
          if (d === 0) {
            if (g === r && (o || s.slice(h, h + i) === t)) {
              (n.push(s.slice(u, h)), (u = h + i));
              continue;
            }
            if (g === "/") {
              c = h;
              continue;
            }
          }
          g === "[" ? d++ : g === "]" && d--;
        }
        let f = n.length === 0 ? s : s.substring(u),
          p = f.startsWith(a2),
          m = p ? f.substring(1) : f,
          C = c && c > u ? c - u : void 0;
        return {
          modifiers: n,
          hasImportantModifier: p,
          baseClassName: m,
          maybePostfixModifierPosition: C,
        };
      };
    return a ? (s) => a({ className: s, parseClassName: l }) : l;
  },
  Vi = (e) => {
    if (e.length <= 1) return e;
    let t = [],
      a = [];
    return (
      e.forEach((o) => {
        o[0] === "[" ? (t.push(...a.sort(), o), (a = [])) : a.push(o);
      }),
      t.push(...a.sort()),
      t
    );
  },
  Ri = (e) => ({ cache: Mi(e.cacheSize), parseClassName: Si(e), ...Li(e) }),
  Hi = /\s+/,
  Pi = (e, t) => {
    let {
        parseClassName: a,
        getClassGroupId: o,
        getConflictingClassGroupIds: r,
      } = t,
      i = [],
      l = e.trim().split(Hi),
      s = "";
    for (let n = l.length - 1; n >= 0; n -= 1) {
      let d = l[n],
        {
          modifiers: u,
          hasImportantModifier: c,
          baseClassName: f,
          maybePostfixModifierPosition: p,
        } = a(d),
        m = !!p,
        C = o(m ? f.substring(0, p) : f);
      if (!C) {
        if (!m) {
          s = d + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((C = o(f)), !C)) {
          s = d + (s.length > 0 ? " " + s : s);
          continue;
        }
        m = !1;
      }
      let h = Vi(u).join(":"),
        g = c ? h + a2 : h,
        x = g + C;
      if (i.includes(x)) continue;
      i.push(x);
      let L = r(C, m);
      for (let v = 0; v < L.length; ++v) {
        let w = L[v];
        i.push(g + w);
      }
      s = d + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function ki() {
  let e = 0,
    t,
    a,
    o = "";
  for (; e < arguments.length;)
    (t = arguments[e++]) && (a = o2(t)) && (o && (o += " "), (o += a));
  return o;
}
var o2 = (e) => {
  if (typeof e == "string") return e;
  let t,
    a = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = o2(e[o])) && (a && (a += " "), (a += t));
  return a;
};
function Bi(e, ...t) {
  let a,
    o,
    r,
    i = l;
  function l(n) {
    let d = t.reduce((u, c) => c(u), e());
    return ((a = Ri(d)), (o = a.cache.get), (r = a.cache.set), (i = s), s(n));
  }
  function s(n) {
    let d = o(n);
    if (d) return d;
    let u = Pi(n, a);
    return (r(n, u), u);
  }
  return function () {
    return i(ki.apply(null, arguments));
  };
}
var A = (e) => {
    let t = (a) => a[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  r2 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Ti = /^\d+\/\d+$/,
  Ai = new Set(["px", "full", "screen"]),
  Zi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Di =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Oi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Fi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  $i =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  we = (e) => I1(e) || Ai.has(e) || Ti.test(e),
  Te = (e) => b1(e, "length", Gi),
  I1 = (e) => !!e && !Number.isNaN(Number(e)),
  Do = (e) => b1(e, "number", I1),
  St = (e) => !!e && Number.isInteger(Number(e)),
  ji = (e) => e.endsWith("%") && I1(e.slice(0, -1)),
  M = (e) => r2.test(e),
  Ae = (e) => Zi.test(e),
  qi = new Set(["length", "size", "percentage"]),
  Ni = (e) => b1(e, qi, l2),
  Ei = (e) => b1(e, "position", l2),
  Ui = new Set(["image", "url"]),
  zi = (e) => b1(e, Ui, Ki),
  _i = (e) => b1(e, "", Wi),
  Vt = () => !0,
  b1 = (e, t, a) => {
    let o = r2.exec(e);
    return o
      ? o[1]
        ? typeof t == "string"
          ? o[1] === t
          : t.has(o[1])
        : a(o[2])
      : !1;
  },
  Gi = (e) => Di.test(e) && !Oi.test(e),
  l2 = () => !1,
  Wi = (e) => Fi.test(e),
  Ki = (e) => $i.test(e);
var Xi = () => {
  let e = A("colors"),
    t = A("spacing"),
    a = A("blur"),
    o = A("brightness"),
    r = A("borderColor"),
    i = A("borderRadius"),
    l = A("borderSpacing"),
    s = A("borderWidth"),
    n = A("contrast"),
    d = A("grayscale"),
    u = A("hueRotate"),
    c = A("invert"),
    f = A("gap"),
    p = A("gradientColorStops"),
    m = A("gradientColorStopPositions"),
    C = A("inset"),
    h = A("margin"),
    g = A("opacity"),
    x = A("padding"),
    L = A("saturate"),
    v = A("scale"),
    w = A("sepia"),
    I = A("skew"),
    R = A("space"),
    y = A("translate"),
    k = () => ["auto", "contain", "none"],
    j = () => ["auto", "hidden", "clip", "visible", "scroll"],
    ce = () => ["auto", M, t],
    P = () => [M, t],
    ra = () => ["", we, Te],
    Ye = () => ["auto", I1, M],
    Ao = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    ft = () => ["solid", "dashed", "dotted", "double", "none"],
    U = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    ae = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    ve = () => ["", "0", M],
    x1 = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    Le = () => [I1, M];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Vt],
      spacing: [we, Te],
      blur: ["none", "", Ae, M],
      brightness: Le(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ae, M],
      borderSpacing: P(),
      borderWidth: ra(),
      contrast: Le(),
      grayscale: ve(),
      hueRotate: Le(),
      invert: ve(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ji, Te],
      inset: ce(),
      margin: ce(),
      opacity: Le(),
      padding: P(),
      saturate: Le(),
      scale: Le(),
      sepia: ve(),
      skew: Le(),
      space: P(),
      translate: P(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", M] }],
      container: ["container"],
      columns: [{ columns: [Ae] }],
      "break-after": [{ "break-after": x1() }],
      "break-before": [{ "break-before": x1() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...Ao(), M] }],
      overflow: [{ overflow: j() }],
      "overflow-x": [{ "overflow-x": j() }],
      "overflow-y": [{ "overflow-y": j() }],
      overscroll: [{ overscroll: k() }],
      "overscroll-x": [{ "overscroll-x": k() }],
      "overscroll-y": [{ "overscroll-y": k() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [C] }],
      "inset-x": [{ "inset-x": [C] }],
      "inset-y": [{ "inset-y": [C] }],
      start: [{ start: [C] }],
      end: [{ end: [C] }],
      top: [{ top: [C] }],
      right: [{ right: [C] }],
      bottom: [{ bottom: [C] }],
      left: [{ left: [C] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", St, M] }],
      basis: [{ basis: ce() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", M] }],
      grow: [{ grow: ve() }],
      shrink: [{ shrink: ve() }],
      order: [{ order: ["first", "last", "none", St, M] }],
      "grid-cols": [{ "grid-cols": [Vt] }],
      "col-start-end": [{ col: ["auto", { span: ["full", St, M] }, M] }],
      "col-start": [{ "col-start": Ye() }],
      "col-end": [{ "col-end": Ye() }],
      "grid-rows": [{ "grid-rows": [Vt] }],
      "row-start-end": [{ row: ["auto", { span: [St, M] }, M] }],
      "row-start": [{ "row-start": Ye() }],
      "row-end": [{ "row-end": Ye() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", M] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", M] }],
      gap: [{ gap: [f] }],
      "gap-x": [{ "gap-x": [f] }],
      "gap-y": [{ "gap-y": [f] }],
      "justify-content": [{ justify: ["normal", ...ae()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...ae(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...ae(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [x] }],
      px: [{ px: [x] }],
      py: [{ py: [x] }],
      ps: [{ ps: [x] }],
      pe: [{ pe: [x] }],
      pt: [{ pt: [x] }],
      pr: [{ pr: [x] }],
      pb: [{ pb: [x] }],
      pl: [{ pl: [x] }],
      m: [{ m: [h] }],
      mx: [{ mx: [h] }],
      my: [{ my: [h] }],
      ms: [{ ms: [h] }],
      me: [{ me: [h] }],
      mt: [{ mt: [h] }],
      mr: [{ mr: [h] }],
      mb: [{ mb: [h] }],
      ml: [{ ml: [h] }],
      "space-x": [{ "space-x": [R] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [R] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, t] }],
      "min-w": [{ "min-w": [M, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            M,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Ae] },
            Ae,
          ],
        },
      ],
      h: [{ h: [M, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [M, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Ae, Te] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Do,
          ],
        },
      ],
      "font-family": [{ font: [Vt] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            M,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", I1, Do] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            we,
            M,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", M] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", M] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [g] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [g] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...ft(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", we, Te] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", we, M] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: P() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            M,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", M] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [g] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...Ao(), Ei] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Ni] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            zi,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [m] }],
      "gradient-via-pos": [{ via: [m] }],
      "gradient-to-pos": [{ to: [m] }],
      "gradient-from": [{ from: [p] }],
      "gradient-via": [{ via: [p] }],
      "gradient-to": [{ to: [p] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [s] }],
      "border-w-x": [{ "border-x": [s] }],
      "border-w-y": [{ "border-y": [s] }],
      "border-w-s": [{ "border-s": [s] }],
      "border-w-e": [{ "border-e": [s] }],
      "border-w-t": [{ "border-t": [s] }],
      "border-w-r": [{ "border-r": [s] }],
      "border-w-b": [{ "border-b": [s] }],
      "border-w-l": [{ "border-l": [s] }],
      "border-opacity": [{ "border-opacity": [g] }],
      "border-style": [{ border: [...ft(), "hidden"] }],
      "divide-x": [{ "divide-x": [s] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [s] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [g] }],
      "divide-style": [{ divide: ft() }],
      "border-color": [{ border: [r] }],
      "border-color-x": [{ "border-x": [r] }],
      "border-color-y": [{ "border-y": [r] }],
      "border-color-s": [{ "border-s": [r] }],
      "border-color-e": [{ "border-e": [r] }],
      "border-color-t": [{ "border-t": [r] }],
      "border-color-r": [{ "border-r": [r] }],
      "border-color-b": [{ "border-b": [r] }],
      "border-color-l": [{ "border-l": [r] }],
      "divide-color": [{ divide: [r] }],
      "outline-style": [{ outline: ["", ...ft()] }],
      "outline-offset": [{ "outline-offset": [we, M] }],
      "outline-w": [{ outline: [we, Te] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: ra() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [g] }],
      "ring-offset-w": [{ "ring-offset": [we, Te] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Ae, _i] }],
      "shadow-color": [{ shadow: [Vt] }],
      opacity: [{ opacity: [g] }],
      "mix-blend": [{ "mix-blend": [...U(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": U() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [a] }],
      brightness: [{ brightness: [o] }],
      contrast: [{ contrast: [n] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Ae, M] }],
      grayscale: [{ grayscale: [d] }],
      "hue-rotate": [{ "hue-rotate": [u] }],
      invert: [{ invert: [c] }],
      saturate: [{ saturate: [L] }],
      sepia: [{ sepia: [w] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [a] }],
      "backdrop-brightness": [{ "backdrop-brightness": [o] }],
      "backdrop-contrast": [{ "backdrop-contrast": [n] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
      "backdrop-invert": [{ "backdrop-invert": [c] }],
      "backdrop-opacity": [{ "backdrop-opacity": [g] }],
      "backdrop-saturate": [{ "backdrop-saturate": [L] }],
      "backdrop-sepia": [{ "backdrop-sepia": [w] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [l] }],
      "border-spacing-x": [{ "border-spacing-x": [l] }],
      "border-spacing-y": [{ "border-spacing-y": [l] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            M,
          ],
        },
      ],
      duration: [{ duration: Le() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", M] }],
      delay: [{ delay: Le() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", M] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [v] }],
      "scale-x": [{ "scale-x": [v] }],
      "scale-y": [{ "scale-y": [v] }],
      rotate: [{ rotate: [St, M] }],
      "translate-x": [{ "translate-x": [y] }],
      "translate-y": [{ "translate-y": [y] }],
      "skew-x": [{ "skew-x": [I] }],
      "skew-y": [{ "skew-y": [I] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            M,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            M,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": P() }],
      "scroll-mx": [{ "scroll-mx": P() }],
      "scroll-my": [{ "scroll-my": P() }],
      "scroll-ms": [{ "scroll-ms": P() }],
      "scroll-me": [{ "scroll-me": P() }],
      "scroll-mt": [{ "scroll-mt": P() }],
      "scroll-mr": [{ "scroll-mr": P() }],
      "scroll-mb": [{ "scroll-mb": P() }],
      "scroll-ml": [{ "scroll-ml": P() }],
      "scroll-p": [{ "scroll-p": P() }],
      "scroll-px": [{ "scroll-px": P() }],
      "scroll-py": [{ "scroll-py": P() }],
      "scroll-ps": [{ "scroll-ps": P() }],
      "scroll-pe": [{ "scroll-pe": P() }],
      "scroll-pt": [{ "scroll-pt": P() }],
      "scroll-pr": [{ "scroll-pr": P() }],
      "scroll-pb": [{ "scroll-pb": P() }],
      "scroll-pl": [{ "scroll-pl": P() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", M] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [we, Te, Do] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-s",
        "border-color-e",
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
};
var Z = Bi(Xi);
import { jsx as Rt, jsxs as s2 } from "react/jsx-runtime";
var Yi =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-colors duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  Ji = {
    primary:
      "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 active:bg-emerald-800 focus-visible:ring-emerald-500",
    secondary:
      "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 active:bg-emerald-200 focus-visible:ring-emerald-500",
    gold: "bg-amber-400 text-amber-950 shadow-sm hover:bg-amber-500 active:bg-amber-600 focus-visible:ring-amber-400",
    ghost:
      "bg-transparent text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 active:bg-emerald-100 focus-visible:ring-emerald-500",
  },
  e5 = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  },
  i2 = Qi(
    (
      {
        variant: e = "primary",
        size: t = "md",
        leftIcon: a,
        rightIcon: o,
        loading: r = !1,
        fullWidth: i = !1,
        disabled: l,
        className: s,
        children: n,
        type: d = "button",
        ...u
      },
      c,
    ) =>
      s2("button", {
        ref: c,
        type: d,
        disabled: l || r,
        "aria-busy": r || void 0,
        className: Z(Yi, Ji[e], e5[t], i && "w-full", s),
        ...u,
        "data-id": "element-55",
        "data-mp": "2tdguq1lxxc62",
        children: [
          r
            ? Rt(t5, { "data-id": "element-56", "data-mp": "1v0kz0decgrh1" })
            : a &&
              Rt("span", {
                className: "inline-flex shrink-0",
                "aria-hidden": "true",
                "data-id": "element-57",
                "data-mp": "1uz04uovxzajp",
                children: a,
              }),
          n,
          !r &&
            o &&
            Rt("span", {
              className: "inline-flex shrink-0",
              "aria-hidden": "true",
              "data-id": "element-58",
              "data-mp": "24qo2j7j3dntm",
              children: o,
            }),
        ],
      }),
  );
i2.displayName = "Button";
function t5() {
  return s2("svg", {
    className: "h-4 w-4 animate-spin",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    "data-id": "element-59",
    "data-mp": "2emzic7hw4vst",
    children: [
      Rt("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "3",
        className: "opacity-25",
        "data-id": "element-60",
        "data-mp": "kbcbtnpmz6wl",
      }),
      Rt("path", {
        d: "M22 12a10 10 0 0 0-10-10",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        "data-id": "element-61",
        "data-mp": "od653axi58mq",
      }),
    ],
  });
}
import { jsx as Ht, jsxs as jo } from "react/jsx-runtime";
var a5 = {
    default: "bg-white border border-slate-200 shadow-sm",
    muted: "bg-slate-50 border border-slate-200",
    outline: "bg-transparent border border-dashed border-slate-300",
  },
  $o = { none: "p-0", sm: "px-4 py-3", md: "px-5 py-4", lg: "px-6 py-5" };
function o5({
  title: e,
  description: t,
  header: a,
  actions: o,
  footer: r,
  variant: i = "default",
  padding: l = "md",
  interactive: s = !1,
  as: n = "div",
  className: d = "",
  children: u,
  ...c
}) {
  let f = n,
    p = !!(a || e || t || o),
    m = l === "none" ? $o.md : $o[l];
  return jo(f, {
    className: [
      "flex flex-col overflow-hidden rounded-xl text-slate-900 transition-all duration-200",
      a5[i],
      s
        ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        : "",
      d,
    ].join(" "),
    tabIndex: s ? 0 : void 0,
    ...c,
    "data-id": "element-62",
    "data-mp": "5koxsan07lbf",
    children: [
      p &&
        jo("header", {
          className: [
            "flex items-start justify-between gap-4 border-b border-slate-100",
            m,
          ].join(" "),
          "data-id": "element-63",
          "data-mp": "1h9a3x6rcmyq8",
          children: [
            jo("div", {
              className: "min-w-0 flex-1",
              "data-id": "element-64",
              "data-mp": "17fte0duc23ru",
              children: [
                a,
                e &&
                  Ht("h3", {
                    className:
                      "truncate text-base font-semibold leading-6 text-slate-900",
                    "data-id": "element-65",
                    "data-mp": "tgtq58en9swq",
                    children: e,
                  }),
                t &&
                  Ht("p", {
                    className: "mt-0.5 text-sm leading-5 text-slate-500",
                    "data-id": "element-66",
                    "data-mp": "khorm2331zkk",
                    children: t,
                  }),
              ],
            }),
            o &&
              Ht("div", {
                className: "flex shrink-0 items-center gap-2",
                "data-id": "element-67",
                "data-mp": "oj0isc1lusuv",
                children: o,
              }),
          ],
        }),
      u != null &&
        Ht("div", {
          className: ["flex-1 text-sm leading-6 text-slate-700", $o[l]].join(
            " ",
          ),
          "data-id": "element-68",
          "data-mp": "2ix1guupbzbtw",
          children: u,
        }),
      r &&
        Ht("footer", {
          className: [
            "flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/60 text-sm text-slate-500",
            m,
          ].join(" "),
          "data-id": "element-69",
          "data-mp": "76tn01kzkl1x",
          children: r,
        }),
    ],
  });
}
import { useState as n2 } from "react";
import { Fragment as l5, jsx as z, jsxs as oe } from "react/jsx-runtime";
function r5({
  imageSrc: e,
  imageAlt: t,
  title: a,
  issuer: o,
  issuedDate: r,
  caption: i,
  viewHref: l,
  downloadHref: s,
  downloadFileName: n,
  onView: d,
  onDownload: u,
  loading: c = !1,
  className: f,
}) {
  let [p, m] = n2(!1),
    [C, h] = n2(!1);
  if (c)
    return oe("div", {
      "aria-busy": "true",
      "aria-label": "Loading certificate",
      className: Z(
        "w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
        f,
      ),
      "data-id": "element-70",
      "data-mp": "1xfg00gqzc105",
      children: [
        z("div", {
          className:
            "aspect-[4/3] w-full animate-pulse rounded-xl bg-slate-100",
          "data-id": "element-71",
          "data-mp": "27b9h8dfn8io9",
        }),
        oe("div", {
          className: "mt-4 space-y-2",
          "data-id": "element-72",
          "data-mp": "2c4vlpibnlg8z",
          children: [
            z("div", {
              className: "h-4 w-2/3 animate-pulse rounded bg-slate-100",
              "data-id": "element-73",
              "data-mp": "1enwwm8t1mkxl",
            }),
            z("div", {
              className: "h-3 w-1/3 animate-pulse rounded bg-slate-100",
              "data-id": "element-74",
              "data-mp": "1elsw80ucs422",
            }),
          ],
        }),
      ],
    });
  let g = [o, r].filter(Boolean).join(" \xB7 "),
    x = e && !p,
    L = !!(l || d),
    v = !!(s || u),
    w =
      "inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
    I = `${w} bg-slate-900 text-white hover:bg-slate-800`,
    R = `${w} border border-slate-200 bg-white text-slate-700 hover:bg-slate-50`;
  return oe("figure", {
    className: Z(
      "w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
      f,
    ),
    "data-id": "element-75",
    "data-mp": "12m5fxq66zv3f",
    children: [
      z("div", {
        className:
          "rounded-xl border-4 border-double border-amber-300 bg-amber-50 p-2",
        "data-id": "element-76",
        "data-mp": "2e0smrynkphfn",
        children: z("div", {
          className:
            "relative aspect-[4/3] w-full overflow-hidden rounded-md bg-white",
          "data-id": "element-77",
          "data-mp": "2e2ly3r94sptz",
          children: x
            ? oe(l5, {
                children: [
                  !C &&
                    z("div", {
                      className: "absolute inset-0 animate-pulse bg-slate-100",
                      "data-id": "element-78",
                      "data-mp": "3qy9s2yay731p",
                    }),
                  z("img", {
                    src: e,
                    alt: t ?? a,
                    onLoad: () => h(!0),
                    onError: () => m(!0),
                    className: "h-full w-full object-contain",
                    "data-id": "element-79",
                    "data-mp": "3vyxgrdbpf7sr",
                  }),
                ],
              })
            : oe("div", {
                className:
                  "flex h-full w-full flex-col items-center justify-center gap-2 text-slate-400",
                "data-id": "element-80",
                "data-mp": "ehe6vn3xknba",
                children: [
                  z(e1, {
                    className: "h-8 w-8",
                    "aria-hidden": "true",
                    "data-id": "element-81",
                    "data-mp": "ijrbg86xyf6h",
                  }),
                  z("span", {
                    className: "text-sm",
                    "data-id": "element-82",
                    "data-mp": "4s4ee656d2mn",
                    children: p
                      ? "Certificate image failed to load"
                      : "No certificate image",
                  }),
                ],
              }),
        }),
      }),
      oe("figcaption", {
        className:
          "mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        "data-id": "element-83",
        "data-mp": "xgs5iiclum84",
        children: [
          oe("div", {
            className: "flex min-w-0 items-start gap-3",
            "data-id": "element-84",
            "data-mp": "127icg00oix4x",
            children: [
              z("span", {
                className:
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700",
                "data-id": "element-85",
                "data-mp": "1291p7gn4mq1y",
                children: z(pt, {
                  className: "h-5 w-5",
                  "aria-hidden": "true",
                  "data-id": "element-86",
                  "data-mp": "39oz2c7d1o6em",
                }),
              }),
              oe("div", {
                className: "min-w-0",
                "data-id": "element-87",
                "data-mp": "34qnprovd7hsp",
                children: [
                  z("h3", {
                    className: "text-base font-semibold text-slate-900",
                    "data-id": "element-88",
                    "data-mp": "30qdhu6o0ihb7",
                    children: a,
                  }),
                  g &&
                    z("p", {
                      className: "mt-0.5 text-sm text-slate-500",
                      "data-id": "element-89",
                      "data-mp": "30s85hsqo4niz",
                      children: g,
                    }),
                  i &&
                    z("p", {
                      className: "mt-1.5 text-sm text-slate-600",
                      "data-id": "element-90",
                      "data-mp": "2vt53yi9wczfr",
                      children: i,
                    }),
                ],
              }),
            ],
          }),
          (L || v) &&
            oe("div", {
              className: "flex shrink-0 gap-2",
              "data-id": "element-91",
              "data-mp": "3offzvfmk6c68",
              children: [
                L &&
                  (l
                    ? oe("a", {
                        href: l,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: R,
                        "data-id": "element-92",
                        "data-mp": "3jopsxxyhi19f",
                        children: [
                          z(w1, {
                            className: "h-4 w-4",
                            "aria-hidden": "true",
                            "data-id": "element-93",
                            "data-mp": "3eqy45ct4yv9g",
                          }),
                          "View",
                        ],
                      })
                    : oe("button", {
                        type: "button",
                        onClick: d,
                        className: R,
                        "data-id": "element-94",
                        "data-mp": "g1h5ujj5d0vd",
                        children: [
                          z(w1, {
                            className: "h-4 w-4",
                            "aria-hidden": "true",
                            "data-id": "element-95",
                            "data-mp": "b8o29yzezykv",
                          }),
                          "View",
                        ],
                      })),
                v &&
                  (s
                    ? oe("a", {
                        href: s,
                        download: n ?? !0,
                        className: I,
                        "data-id": "element-96",
                        "data-mp": "nkgouo2p4qe7",
                        children: [
                          z(L1, {
                            className: "h-4 w-4",
                            "aria-hidden": "true",
                            "data-id": "element-97",
                            "data-mp": "shyw8a12exk3",
                          }),
                          "Download",
                        ],
                      })
                    : oe("button", {
                        type: "button",
                        onClick: u,
                        className: I,
                        "data-id": "element-98",
                        "data-mp": "wi0tm6zrp4tk",
                        children: [
                          z(L1, {
                            className: "h-4 w-4",
                            "aria-hidden": "true",
                            "data-id": "element-99",
                            "data-mp": "11hcbxkfs8id9",
                          }),
                          "Download",
                        ],
                      })),
              ],
            }),
        ],
      }),
    ],
  });
}
import { jsx as re, jsxs as qo } from "react/jsx-runtime";
var d2 = {
    green: "border-green-200",
    gold: "border-amber-300",
    purple: "border-purple-200",
  },
  i5 = {
    green: "text-green-500",
    gold: "text-amber-500",
    purple: "text-purple-500",
  },
  s5 = {
    green: "bg-green-50 text-green-700 ring-green-200",
    gold: "bg-amber-50 text-amber-700 ring-amber-200",
    purple: "bg-purple-50 text-purple-700 ring-purple-200",
  },
  u2 = { sm: "my-3", md: "my-6", lg: "my-10" };
function n5({
  tone: e = "green",
  ornament: t = "none",
  label: a,
  spacing: o = "md",
  dashed: r = !1,
  className: i = "",
}) {
  let l = `flex-1 border-t ${r ? "border-dashed" : "border-solid"} ${d2[e]}`;
  return t !== "none" && !(t === "label" && !a)
    ? qo("div", {
        role: "separator",
        "aria-orientation": "horizontal",
        "aria-label": t === "label" ? a : void 0,
        className: `flex w-full items-center gap-3 ${u2[o]} ${i}`,
        "data-id": "element-138",
        "data-mp": "1svqxhsobaswi",
        children: [
          re("span", {
            className: l,
            "aria-hidden": "true",
            "data-id": "element-139",
            "data-mp": "10ck29ipwptry",
          }),
          re("span", {
            className: `flex shrink-0 items-center ${i5[e]}`,
            "aria-hidden": t !== "label",
            "data-id": "element-140",
            "data-mp": "sd739guznxnh",
            children: d5(t, e, a),
          }),
          re("span", {
            className: l,
            "aria-hidden": "true",
            "data-id": "element-141",
            "data-mp": "123ig5swnhh6i",
          }),
        ],
      })
    : re("hr", {
        className: `w-full border-0 border-t ${r ? "border-dashed" : "border-solid"} ${d2[e]} ${u2[o]} ${i}`,
        "data-id": "element-137",
        "data-mp": "1j5fj1c7051bd",
      });
}
function d5(e, t, a) {
  switch (e) {
    case "diamond":
      return qo("svg", {
        width: "20",
        height: "10",
        viewBox: "0 0 20 10",
        fill: "none",
        "data-id": "element-142",
        "data-mp": "9eb5xwnu335f",
        children: [
          re("circle", {
            cx: "2",
            cy: "5",
            r: "1.5",
            fill: "currentColor",
            opacity: "0.5",
            "data-id": "element-143",
            "data-mp": "9gny12nb2tw7",
          }),
          re("path", {
            d: "M10 1L14 5L10 9L6 5Z",
            fill: "currentColor",
            "data-id": "element-144",
            "data-mp": "5f2dqw8fzdbz",
          }),
          re("circle", {
            cx: "18",
            cy: "5",
            r: "1.5",
            fill: "currentColor",
            opacity: "0.5",
            "data-id": "element-145",
            "data-mp": "jdagjks5t8v2",
          }),
        ],
      });
    case "dot":
      return qo("span", {
        className: "flex items-center gap-1.5",
        "data-id": "element-146",
        "data-mp": "eccqkm0wraj0",
        children: [
          re("span", {
            className: "h-1 w-1 rounded-full bg-current opacity-50",
            "data-id": "element-147",
            "data-mp": "1urxknli5oh3l",
          }),
          re("span", {
            className: "h-1.5 w-1.5 rounded-full bg-current",
            "data-id": "element-148",
            "data-mp": "1uu0gwn9wj6gr",
          }),
          re("span", {
            className: "h-1 w-1 rounded-full bg-current opacity-50",
            "data-id": "element-149",
            "data-mp": "1pskvgu3taxxu",
          }),
        ],
      });
    case "leaf":
      return re("svg", {
        width: "20",
        height: "14",
        viewBox: "0 0 20 14",
        fill: "none",
        "data-id": "element-150",
        "data-mp": "37stvoxdbdzee",
        children: re("path", {
          d: "M10 13C10 13 3 10 3 5C3 2.5 5 1 7 1C8.5 1 9.5 2 10 3C10.5 2 11.5 1 13 1C15 1 17 2.5 17 5C17 10 10 13 10 13Z",
          fill: "currentColor",
          opacity: "0.85",
          "data-id": "element-151",
          "data-mp": "3cqlt26wqadpz",
        }),
      });
    case "label":
      return re("span", {
        className: `rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-inset ${s5[t]}`,
        "data-id": "element-152",
        "data-mp": "3re6tft27xyu7",
        children: a,
      });
    default:
      return null;
  }
}
import { forwardRef as ia, createElement as Ze } from "react";
function sa(e, t) {
  if (e == null) return {};
  var a = {},
    o = Object.keys(e),
    r,
    i;
  for (i = 0; i < o.length; i++)
    ((r = o[i]), !(t.indexOf(r) >= 0) && (a[r] = e[r]));
  return a;
}
var u5 = ["color"],
  c2 = ia(function (e, t) {
    var a = e.color,
      o = a === void 0 ? "currentColor" : a,
      r = sa(e, u5);
    return Ze(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r,
        { ref: t },
      ),
      Ze("path", {
        d: "M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z",
        fill: o,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  });
var c5 = ["color"],
  f2 = ia(function (e, t) {
    var a = e.color,
      o = a === void 0 ? "currentColor" : a,
      r = sa(e, c5);
    return Ze(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r,
        { ref: t },
      ),
      Ze("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z",
        fill: o,
      }),
    );
  });
var f5 = ["color"],
  p2 = ia(function (e, t) {
    var a = e.color,
      o = a === void 0 ? "currentColor" : a,
      r = sa(e, f5);
    return Ze(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r,
        { ref: t },
      ),
      Ze("path", {
        d: "M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z",
        fill: o,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  });
var p5 = ["color"],
  m2 = ia(function (e, t) {
    var a = e.color,
      o = a === void 0 ? "currentColor" : a,
      r = sa(e, p5);
    return Ze(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r,
        { ref: t },
      ),
      Ze("path", {
        d: "M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z",
        fill: o,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  });
import { jsx as Q, jsxs as Ie } from "react/jsx-runtime";
var m5 = { github: c2, linkedin: p2, instagram: f2, twitter: m2 },
  C5 = {
    github: "GitHub",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    twitter: "Twitter",
  };
function h5({
  name: e = "Your Name",
  tagline: t = "On-the-Job Training Portfolio",
  contact: a,
  socials: o = [],
  dedication: r,
  year: i = new Date().getFullYear(),
  variant: l = "light",
  compact: s = !1,
  className: n = "",
}) {
  let d = l === "dark",
    u = d ? "bg-slate-900 text-slate-300" : "bg-white text-slate-600",
    c = d ? "border-slate-800" : "border-slate-200",
    f = d ? "text-white" : "text-slate-900",
    p = d
      ? "hover:text-white focus-visible:ring-slate-500 focus-visible:ring-offset-slate-900"
      : "hover:text-slate-900 focus-visible:ring-slate-400 focus-visible:ring-offset-white",
    m = d
      ? "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:ring-offset-slate-900"
      : "border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-offset-white",
    C = [
      a?.email && {
        key: "email",
        icon: a1,
        text: a.email,
        href: `mailto:${a.email}`,
      },
      a?.phone && {
        key: "phone",
        icon: yt,
        text: a.phone,
        href: `tel:${a.phone.replace(/[^\d+]/g, "")}`,
      },
      a?.location && {
        key: "location",
        icon: wt,
        text: a.location,
        href: void 0,
      },
    ].filter(Boolean),
    h =
      o.length > 0 &&
      Q("ul", {
        className: "flex flex-wrap items-center gap-2",
        "aria-label": "Social links",
        "data-id": "element-153",
        "data-mp": "kwjeq2idao9b",
        children: o.map((g) => {
          let x = m5[g.platform],
            L = g.label ?? C5[g.platform];
          return Q(
            "li",
            {
              "data-id": "element-154",
              "data-mp": "tuva0hu6ia83",
              children: Q("a", {
                href: g.href,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": L,
                className: `inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 ${m}`,
                "data-id": "element-155",
                "data-mp": "ymv9yaa9134o",
                children: Q(x, {
                  className: "h-4 w-4",
                  "data-id": "element-156",
                  "data-mp": "1hm0r10buv8jz",
                }),
              }),
            },
            `${g.platform}-${g.href}`,
          );
        }),
      });
  return Q("footer", {
    className: `w-full border-t ${c} ${u} ${n}`,
    "data-id": "element-157",
    "data-mp": "3eej3rwtyufj9",
    children: Ie("div", {
      className: "mx-auto max-w-6xl px-6",
      "data-id": "element-158",
      "data-mp": "3egng935xkmv5",
      children: [
        !s &&
          Ie("div", {
            className: "grid gap-10 py-12 md:grid-cols-3",
            "data-id": "element-159",
            "data-mp": "3jdvyt4uzqswx",
            children: [
              Ie("div", {
                className: "space-y-3",
                "data-id": "element-160",
                "data-mp": "2o2o0yi1b9m6g",
                children: [
                  Q("p", {
                    className: `text-lg font-semibold tracking-tight ${f}`,
                    "data-id": "element-161",
                    "data-mp": "2o1mi3re1zve6",
                    children: e,
                  }),
                  t &&
                    Q("p", {
                      className: "text-sm leading-relaxed",
                      "data-id": "element-162",
                      "data-mp": "2j3uo8rtulz7c",
                      children: t,
                    }),
                ],
              }),
              C.length > 0 &&
                Ie("div", {
                  className: "space-y-3",
                  "data-id": "element-163",
                  "data-mp": "2t2ahb0cfrijh",
                  children: [
                    Q("h2", {
                      className: `text-xs font-semibold uppercase tracking-wider ${f}`,
                      "data-id": "element-164",
                      "data-mp": "2t3bupbgxch4d",
                      children: "Contact",
                    }),
                    Q("ul", {
                      className: "space-y-2.5 text-sm",
                      "data-id": "element-165",
                      "data-mp": "25all38whu9x9",
                      children: C.map(({ key: g, icon: x, text: L, href: v }) =>
                        Ie(
                          "li",
                          {
                            className: "flex items-center gap-2.5",
                            "data-id": "element-166",
                            "data-mp": "2f2972uaa6yrc",
                            children: [
                              Q(x, {
                                className: "h-4 w-4 shrink-0 opacity-70",
                                "aria-hidden": "true",
                                "data-id": "element-167",
                                "data-mp": "2f4c5a1ll7y75",
                              }),
                              v
                                ? Q("a", {
                                    href: v,
                                    className: `rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${p}`,
                                    "data-id": "element-168",
                                    "data-mp": "1mlygeri8bmk7",
                                    children: L,
                                  })
                                : Q("span", {
                                    "data-id": "element-169",
                                    "data-mp": "1wun78wq7gjo",
                                    children: L,
                                  }),
                            ],
                          },
                          g,
                        ),
                      ),
                    }),
                  ],
                }),
              h &&
                Ie("div", {
                  className: "space-y-3",
                  "data-id": "element-170",
                  "data-mp": "3oam2hkswafv4",
                  children: [
                    Q("h2", {
                      className: `text-xs font-semibold uppercase tracking-wider ${f}`,
                      "data-id": "element-171",
                      "data-mp": "3o9b2zx6hfu9t",
                      children: "Connect",
                    }),
                    h,
                  ],
                }),
            ],
          }),
        Ie("div", {
          className: `flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between ${s ? "" : `border-t ${c}`}`,
          "data-id": "element-172",
          "data-mp": "6uw3xn6oj3rz",
          children: [
            Ie("p", {
              "data-id": "element-173",
              "data-mp": "2rl4rcqb581m1",
              children: ["\xA9 ", i, " ", e, ". All rights reserved."],
            }),
            r &&
              Ie("p", {
                className: "flex items-center gap-1.5",
                "data-id": "element-174",
                "data-mp": "2vmq84mqst01i",
                children: [
                  Q(Lt, {
                    className: "h-3.5 w-3.5 fill-rose-500 text-rose-500",
                    "aria-hidden": "true",
                    "data-id": "element-175",
                    "data-mp": "2vo9qqjzxfn6g",
                  }),
                  Q("span", {
                    "data-id": "element-176",
                    "data-mp": "123gaknxbueqf",
                    children: r,
                  }),
                ],
              }),
            s && h,
          ],
        }),
      ],
    }),
  });
}
import { forwardRef as g5, useId as x5 } from "react";
import { jsx as na, jsxs as C2 } from "react/jsx-runtime";
var v5 = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-3.5 text-sm",
    lg: "h-12 px-4 text-base",
  },
  L5 = g5(function (
    {
      label: t,
      hint: a,
      error: o,
      size: r = "md",
      fullWidth: i = !0,
      required: l,
      disabled: s,
      id: n,
      className: d = "",
      wrapperClassName: u = "",
      ...c
    },
    f,
  ) {
    let p = x5(),
      m = n ?? `input-${p}`,
      C = a ? `${m}-hint` : void 0,
      h = o ? `${m}-error` : void 0,
      g = [h, C].filter(Boolean).join(" ") || void 0,
      x = !!o;
    return C2("div", {
      className: `flex flex-col gap-1.5 ${i ? "w-full" : "w-72"} ${u}`,
      "data-id": "element-177",
      "data-mp": "2koye65ugkoge",
      children: [
        t &&
          C2("label", {
            htmlFor: m,
            className: `text-sm font-medium ${s ? "text-gray-400" : "text-gray-900"}`,
            "data-id": "element-178",
            "data-mp": "1x05djw2w5sfg",
            children: [
              t,
              l &&
                na("span", {
                  className: "ml-0.5 text-red-600",
                  "aria-hidden": "true",
                  "data-id": "element-179",
                  "data-mp": "26q72eq32jevf",
                  children: "*",
                }),
            ],
          }),
        na("input", {
          ref: f,
          id: m,
          required: l,
          disabled: s,
          "aria-invalid": x || void 0,
          "aria-describedby": g,
          className: [
            "w-full rounded-lg border bg-white text-gray-900 placeholder:text-gray-400",
            "shadow-sm transition-colors duration-150 outline-none",
            "focus:ring-4",
            "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400 disabled:shadow-none",
            x
              ? "border-red-500 focus:border-red-500 focus:ring-red-100"
              : "border-gray-300 hover:border-gray-400 focus:border-gray-900 focus:ring-gray-200",
            v5[r],
            d,
          ].join(" "),
          ...c,
          "data-id": "element-180",
          "data-mp": "21wvs2ez1sfyr",
        }),
        x
          ? na("p", {
              id: h,
              role: "alert",
              className: "text-xs text-red-600",
              "data-id": "element-181",
              "data-mp": "2vecj79r8pxad",
              children: o,
            })
          : a &&
            na("p", {
              id: C,
              className: "text-xs text-gray-500",
              "data-id": "element-182",
              "data-mp": "34dg5emlpest3",
              children: a,
            }),
      ],
    });
  });
import { Fragment as M5, jsx as Pt, jsxs as No } from "react/jsx-runtime";
var w5 = {
    sm: "h-8 w-8 text-sm rounded-lg",
    md: "h-10 w-10 text-base rounded-xl",
    lg: "h-14 w-14 text-xl rounded-2xl",
  },
  I5 = { sm: "text-sm", md: "text-base", lg: "text-xl" },
  b5 = { sm: "text-[10px]", md: "text-xs", lg: "text-sm" };
function y5({
  variant: e = "full",
  size: t = "md",
  tone: a = "light",
  initials: o = "MJ",
  name: r = "MJ Portfolio",
  tagline: i,
  href: l,
  className: s = "",
}) {
  let n = a === "dark",
    d = No("span", {
      "aria-hidden": e === "full" ? !0 : void 0,
      className: `relative inline-flex shrink-0 items-center justify-center font-extrabold tracking-tight ring-2 ring-amber-400 ${n ? "bg-amber-400 text-purple-900" : "bg-purple-800 text-amber-300"} ${w5[t]}`,
      "data-id": "element-183",
      "data-mp": "3lxueodd52bxl",
      children: [
        o,
        Pt("span", {
          className: `absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full ${n ? "bg-purple-400" : "bg-amber-400"}`,
          "data-id": "element-184",
          "data-mp": "3h1m6jjxczizx",
        }),
      ],
    }),
    u = No(M5, {
      children: [
        d,
        e === "full" &&
          No("span", {
            className: "flex flex-col leading-tight",
            "data-id": "element-185",
            "data-mp": "2t9oubrpzyoya",
            children: [
              Pt("span", {
                className: `font-bold tracking-tight ${I5[t]} ${n ? "text-white" : "text-purple-900"}`,
                "data-id": "element-186",
                "data-mp": "2tcb0po15iyex",
                children: r,
              }),
              i &&
                Pt("span", {
                  className: `font-medium uppercase tracking-widest ${b5[t]} ${n ? "text-amber-300" : "text-amber-600"}`,
                  "data-id": "element-187",
                  "data-mp": "z1kysvwjcfra",
                  children: i,
                }),
            ],
          }),
      ],
    }),
    c = `inline-flex items-center gap-3 select-none ${s}`,
    f = e === "mark" ? r : void 0;
  return l
    ? Pt("a", {
        href: l,
        "aria-label": e === "mark" ? `${r} home` : void 0,
        className: `${c} rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 ${n ? "focus-visible:ring-offset-purple-950" : "focus-visible:ring-offset-white"}`,
        "data-id": "element-188",
        "data-mp": "1htdr0o3s5wxy",
        children: u,
      })
    : Pt("span", {
        role: f ? "img" : void 0,
        "aria-label": f,
        className: c,
        "data-id": "element-189",
        "data-mp": "3tk80fr99kcoe",
        children: u,
      });
}
import { useEffect as Er, useState as Ur } from "react";
import { jsx as I2, Fragment as z5 } from "react/jsx-runtime";
import {
  useMemo as _5,
  useRef as b2,
  useState as y2,
  useContext as G5,
} from "react";
import { createContext as S5 } from "react";
var y1 = S5({});
import { useRef as V5 } from "react";
function M1(e) {
  let t = V5(null);
  return (t.current === null && (t.current = e()), t.current);
}
import { jsx as x2 } from "react/jsx-runtime";
import * as L2 from "react";
import { useId as A5, useCallback as Z5, useMemo as v2 } from "react";
import { createContext as R5 } from "react";
var De = R5(null);
import { jsx as P5 } from "react/jsx-runtime";
import * as da from "react";
import {
  useId as k5,
  useRef as h2,
  useContext as B5,
  useInsertionEffect as T5,
} from "react";
import { createContext as H5 } from "react";
var S1 = H5({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never",
});
var Eo = class extends da.Component {
  getSnapshotBeforeUpdate(t) {
    let a = this.props.childRef.current;
    if (a && t.isPresent && !this.props.isPresent) {
      let o = this.props.sizeRef.current;
      ((o.height = a.offsetHeight || 0),
        (o.width = a.offsetWidth || 0),
        (o.top = a.offsetTop),
        (o.left = a.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function g2({ children: e, isPresent: t }) {
  let a = k5(),
    o = h2(null),
    r = h2({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = B5(S1);
  return (
    T5(() => {
      let { width: l, height: s, top: n, left: d } = r.current;
      if (t || !o.current || !l || !s) return;
      o.current.dataset.motionPopId = a;
      let u = document.createElement("style");
      return (
        i && (u.nonce = i),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${s}px !important;
            top: ${n}px !important;
            left: ${d}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    P5(Eo, {
      isPresent: t,
      childRef: o,
      sizeRef: r,
      children: da.cloneElement(e, { ref: o }),
    })
  );
}
var w2 = ({
  children: e,
  initial: t,
  isPresent: a,
  onExitComplete: o,
  custom: r,
  presenceAffectsLayout: i,
  mode: l,
}) => {
  let s = M1(D5),
    n = A5(),
    d = Z5(
      (c) => {
        s.set(c, !0);
        for (let f of s.values()) if (!f) return;
        o && o();
      },
      [s, o],
    ),
    u = v2(
      () => ({
        id: n,
        initial: t,
        isPresent: a,
        custom: r,
        onExitComplete: d,
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      i ? [Math.random(), d] : [a, d],
    );
  return (
    v2(() => {
      s.forEach((c, f) => s.set(f, !1));
    }, [a]),
    L2.useEffect(() => {
      !a && !s.size && o && o();
    }, [a]),
    l === "popLayout" && (e = x2(g2, { isPresent: a, children: e })),
    x2(De.Provider, { value: u, children: e })
  );
};
function D5() {
  return new Map();
}
import {
  useContext as O5,
  useId as F5,
  useEffect as $5,
  useCallback as j5,
} from "react";
function ua(e = !0) {
  let t = O5(De);
  if (t === null) return [!0, null];
  let { isPresent: a, onExitComplete: o, register: r } = t,
    i = F5();
  $5(() => {
    e && r(i);
  }, [e]);
  let l = j5(() => e && o && o(i), [i, o, e]);
  return !a && o ? [!1, l] : [!0];
}
import { Children as q5, isValidElement as N5 } from "react";
var kt = (e) => e.key || "";
function Uo(e) {
  let t = [];
  return (
    q5.forEach(e, (a) => {
      N5(a) && t.push(a);
    }),
    t
  );
}
import { useLayoutEffect as E5, useEffect as U5 } from "react";
var V1 = typeof window < "u";
var ca = V1 ? E5 : U5;
var zo = ({
  children: e,
  custom: t,
  initial: a = !0,
  onExitComplete: o,
  presenceAffectsLayout: r = !0,
  mode: i = "sync",
  propagate: l = !1,
}) => {
  let [s, n] = ua(l),
    d = _5(() => Uo(e), [e]),
    u = l && !s ? [] : d.map(kt),
    c = b2(!0),
    f = b2(d),
    p = M1(() => new Map()),
    [m, C] = y2(d),
    [h, g] = y2(d);
  ca(() => {
    ((c.current = !1), (f.current = d));
    for (let v = 0; v < h.length; v++) {
      let w = kt(h[v]);
      u.includes(w) ? p.delete(w) : p.get(w) !== !0 && p.set(w, !1);
    }
  }, [h, u.length, u.join("-")]);
  let x = [];
  if (d !== m) {
    let v = [...d];
    for (let w = 0; w < h.length; w++) {
      let I = h[w],
        R = kt(I);
      u.includes(R) || (v.splice(w, 0, I), x.push(I));
    }
    (i === "wait" && x.length && (v = x), g(Uo(v)), C(d));
    return;
  }
  let { forceRender: L } = G5(y1);
  return I2(z5, {
    children: h.map((v) => {
      let w = kt(v),
        I = l && !s ? !1 : d === h || u.includes(w),
        R = () => {
          if (p.has(w)) p.set(w, !0);
          else return;
          let y = !0;
          (p.forEach((k) => {
            k || (y = !1);
          }),
            y && (L?.(), g(f.current), l && n?.(), o && o()));
        };
      return I2(
        w2,
        {
          isPresent: I,
          initial: !c.current || a ? void 0 : !1,
          custom: I ? void 0 : t,
          presenceAffectsLayout: r,
          mode: i,
          onExitComplete: I ? void 0 : R,
          children: v,
        },
        w,
      );
    }),
  });
};
var B = (e) => e;
var be = B,
  pe = B;
function r1(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var le = (e, t, a) => {
  let o = t - e;
  return o === 0 ? 1 : (a - e) / o;
};
var F = (e) => e * 1e3,
  G = (e) => e / 1e3;
var R1 = { skipAnimations: !1, useManualTiming: !1 };
function M2(e) {
  let t = new Set(),
    a = new Set(),
    o = !1,
    r = !1,
    i = new WeakSet(),
    l = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(d) {
    (i.has(d) && (n.schedule(d), e()), d(l));
  }
  let n = {
    schedule: (d, u = !1, c = !1) => {
      let p = c && o ? t : a;
      return (u && i.add(d), p.has(d) || p.add(d), d);
    },
    cancel: (d) => {
      (a.delete(d), i.delete(d));
    },
    process: (d) => {
      if (((l = d), o)) {
        r = !0;
        return;
      }
      ((o = !0),
        ([t, a] = [a, t]),
        t.forEach(s),
        t.clear(),
        (o = !1),
        r && ((r = !1), n.process(d)));
    },
  };
  return n;
}
var fa = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  W5 = 40;
function pa(e, t) {
  let a = !1,
    o = !0,
    r = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (a = !0),
    l = fa.reduce((g, x) => ((g[x] = M2(i)), g), {}),
    {
      read: s,
      resolveKeyframes: n,
      update: d,
      preRender: u,
      render: c,
      postRender: f,
    } = l,
    p = () => {
      let g = R1.useManualTiming ? r.timestamp : performance.now();
      ((a = !1),
        (r.delta = o ? 1e3 / 60 : Math.max(Math.min(g - r.timestamp, W5), 1)),
        (r.timestamp = g),
        (r.isProcessing = !0),
        s.process(r),
        n.process(r),
        d.process(r),
        u.process(r),
        c.process(r),
        f.process(r),
        (r.isProcessing = !1),
        a && t && ((o = !1), e(p)));
    },
    m = () => {
      ((a = !0), (o = !0), r.isProcessing || e(p));
    };
  return {
    schedule: fa.reduce((g, x) => {
      let L = l[x];
      return (
        (g[x] = (v, w = !1, I = !1) => (a || m(), L.schedule(v, w, I))),
        g
      );
    }, {}),
    cancel: (g) => {
      for (let x = 0; x < fa.length; x++) l[fa[x]].cancel(g);
    },
    state: r,
    steps: l,
  };
}
var {
  schedule: V,
  cancel: ie,
  state: $,
  steps: ma,
} = pa(typeof requestAnimationFrame < "u" ? requestAnimationFrame : B, !0);
import { createContext as K5 } from "react";
var Ca = K5({ strict: !1 });
var S2 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ye = {};
for (let e in S2) ye[e] = { isEnabled: (t) => S2[e].some((a) => !!t[a]) };
function V2(e) {
  for (let t in e) ye[t] = { ...ye[t], ...e[t] };
}
var X5 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Bt(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    X5.has(e)
  );
}
var R2 = (e) => !Bt(e);
function Q5(e) {
  e && (R2 = (t) => (t.startsWith("on") ? !Bt(t) : e(t)));
}
try {
  Q5(A0("@emotion/is-prop-valid").default);
} catch {}
function H2(e, t, a) {
  let o = {};
  for (let r in e)
    (r === "values" && typeof e.values == "object") ||
      ((R2(r) ||
        (a === !0 && Bt(r)) ||
        (!t && !Bt(r)) ||
        (e.draggable && r.startsWith("onDrag"))) &&
        (o[r] = e[r]));
  return o;
}
function P2(e) {
  if (typeof Proxy > "u") return e;
  let t = new Map(),
    a = (...o) => e(...o);
  return new Proxy(a, {
    get: (o, r) =>
      r === "create" ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
  });
}
import { jsxs as ss, jsx as ns } from "react/jsx-runtime";
import { forwardRef as ds, useContext as Go } from "react";
import { createContext as Y5 } from "react";
var Oe = Y5({});
import { useContext as J5, useMemo as es } from "react";
function Me(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Fe(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
var ha = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Tt = ["initial", ...ha];
function l1(e) {
  return Fe(e.animate) || Tt.some((t) => Me(e[t]));
}
function ga(e) {
  return !!(l1(e) || e.variants);
}
function k2(e, t) {
  if (l1(e)) {
    let { initial: a, animate: o } = e;
    return {
      initial: a === !1 || Me(a) ? a : void 0,
      animate: Me(o) ? o : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function T2(e) {
  let { initial: t, animate: a } = k2(e, J5(Oe));
  return es(() => ({ initial: t, animate: a }), [B2(t), B2(a)]);
}
function B2(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var A2 = Symbol.for("motionComponentSymbol");
import { useCallback as ts } from "react";
function Se(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Z2(e, t, a) {
  return ts(
    (o) => {
      (o && e.onMount && e.onMount(o),
        t && (o ? t.mount(o) : t.unmount()),
        a && (typeof a == "function" ? a(o) : Se(a) && (a.current = o)));
    },
    [t],
  );
}
import {
  useContext as At,
  useRef as _o,
  useInsertionEffect as rs,
  useEffect as ls,
} from "react";
var H1 = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
var as = "framerAppearId",
  xa = "data-" + H1(as);
var { schedule: P1, cancel: mu } = pa(queueMicrotask, !1);
import { createContext as os } from "react";
var va = os({});
function D2(e, t, a, o, r) {
  var i, l;
  let { visualElement: s } = At(Oe),
    n = At(Ca),
    d = At(De),
    u = At(S1).reducedMotion,
    c = _o(null);
  ((o = o || n.renderer),
    !c.current &&
      o &&
      (c.current = o(e, {
        visualState: t,
        parent: s,
        props: a,
        presenceContext: d,
        blockInitialAnimation: d ? d.initial === !1 : !1,
        reducedMotionConfig: u,
      })));
  let f = c.current,
    p = At(va);
  f &&
    !f.projection &&
    r &&
    (f.type === "html" || f.type === "svg") &&
    is(c.current, a, r, p);
  let m = _o(!1);
  rs(() => {
    f && m.current && f.update(a, d);
  });
  let C = a[xa],
    h = _o(
      !!C &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, C)
        ) &&
        ((l = window.MotionHasOptimisedAnimation) === null || l === void 0
          ? void 0
          : l.call(window, C)),
    );
  return (
    ca(() => {
      f &&
        ((m.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        P1.render(f.render),
        h.current && f.animationState && f.animationState.animateChanges());
    }),
    ls(() => {
      f &&
        (!h.current && f.animationState && f.animationState.animateChanges(),
        h.current &&
          (queueMicrotask(() => {
            var g;
            (g = window.MotionHandoffMarkAsComplete) === null ||
              g === void 0 ||
              g.call(window, C);
          }),
          (h.current = !1)));
    }),
    f
  );
}
function is(e, t, a, o) {
  let {
    layoutId: r,
    layout: i,
    drag: l,
    dragConstraints: s,
    layoutScroll: n,
    layoutRoot: d,
  } = t;
  ((e.projection = new a(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : O2(e.parent),
  )),
    e.projection.setOptions({
      layoutId: r,
      layout: i,
      alwaysMeasureLayout: !!l || (s && Se(s)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: o,
      layoutScroll: n,
      layoutRoot: d,
    }));
}
function O2(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : O2(e.parent);
}
function F2({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: a,
  useVisualState: o,
  Component: r,
}) {
  var i, l;
  e && V2(e);
  function s(d, u) {
    let c,
      f = { ...Go(S1), ...d, layoutId: us(d) },
      { isStatic: p } = f,
      m = T2(d),
      C = o(d, p);
    if (!p && V1) {
      cs(f, e);
      let h = fs(f);
      ((c = h.MeasureLayout),
        (m.visualElement = D2(r, C, f, t, h.ProjectionNode)));
    }
    return ss(Oe.Provider, {
      value: m,
      children: [
        c && m.visualElement
          ? ns(c, { visualElement: m.visualElement, ...f })
          : null,
        a(r, d, Z2(C, m.visualElement, u), C, p, m.visualElement),
      ],
    });
  }
  s.displayName = `motion.${typeof r == "string" ? r : `create(${(l = (i = r.displayName) !== null && i !== void 0 ? i : r.name) !== null && l !== void 0 ? l : ""})`}`;
  let n = ds(s);
  return ((n[A2] = r), n);
}
function us({ layoutId: e }) {
  let t = Go(y1).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function cs(e, t) {
  let a = Go(Ca).strict;
}
function fs(e) {
  let { drag: t, layout: a } = ye;
  if (!t && !a) return {};
  let o = { ...t, ...a };
  return {
    MeasureLayout:
      t?.isEnabled(e) || a?.isEnabled(e) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode,
  };
}
var $2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function k1(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!($2.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
import { useContext as E2 } from "react";
function j2(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((a, o) => {
      ((t[0][o] = a.get()), (t[1][o] = a.getVelocity()));
    }),
    t
  );
}
function B1(e, t, a, o) {
  if (typeof t == "function") {
    let [r, i] = j2(o);
    t = t(a !== void 0 ? a : e.custom, r, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    let [r, i] = j2(o);
    t = t(a !== void 0 ? a : e.custom, r, i);
  }
  return t;
}
var Zt = (e) => Array.isArray(e);
var q2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  N2 = (e) => (Zt(e) ? e[e.length - 1] || 0 : e);
var T = (e) => !!(e && e.getVelocity);
function T1(e) {
  let t = T(e) ? e.get() : e;
  return q2(t) ? t.toValue() : t;
}
function ps(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: a },
  o,
  r,
  i,
) {
  let l = { latestValues: ms(o, r, i, e), renderState: t() };
  return (
    a &&
      ((l.onMount = (s) => a({ props: o, current: s, ...l })),
      (l.onUpdate = (s) => a(s))),
    l
  );
}
var La = (e) => (t, a) => {
  let o = E2(Oe),
    r = E2(De),
    i = () => ps(e, t, o, r);
  return a ? i() : M1(i);
};
function ms(e, t, a, o) {
  let r = {},
    i = o(e, {});
  for (let f in i) r[f] = T1(i[f]);
  let { initial: l, animate: s } = e,
    n = l1(e),
    d = ga(e);
  t &&
    d &&
    !n &&
    e.inherit !== !1 &&
    (l === void 0 && (l = t.initial), s === void 0 && (s = t.animate));
  let u = a ? a.initial === !1 : !1;
  u = u || l === !1;
  let c = u ? s : l;
  if (c && typeof c != "boolean" && !Fe(c)) {
    let f = Array.isArray(c) ? c : [c];
    for (let p = 0; p < f.length; p++) {
      let m = B1(e, f[p]);
      if (m) {
        let { transitionEnd: C, transition: h, ...g } = m;
        for (let x in g) {
          let L = g[x];
          if (Array.isArray(L)) {
            let v = u ? L.length - 1 : 0;
            L = L[v];
          }
          L !== null && (r[x] = L);
        }
        for (let x in C) r[x] = C[x];
      }
    }
  }
  return r;
}
var me = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ee = new Set(me);
var U2 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  wa = U2("--"),
  Cs = U2("var(--"),
  A1 = (e) => (Cs(e) ? hs.test(e.split("/*")[0].trim()) : !1),
  hs =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
var Ia = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
var W = (e, t, a) => (a > t ? t : a < e ? e : a);
var Ce = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ve = { ...Ce, transform: (e) => W(0, 1, e) },
  Dt = { ...Ce, default: 1 };
var Ot = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  he = Ot("deg"),
  Y = Ot("%"),
  b = Ot("px"),
  z2 = Ot("vh"),
  _2 = Ot("vw"),
  Wo = {
    ...Y,
    parse: (e) => Y.parse(e) / 100,
    transform: (e) => Y.transform(e * 100),
  };
var G2 = {
  borderWidth: b,
  borderTopWidth: b,
  borderRightWidth: b,
  borderBottomWidth: b,
  borderLeftWidth: b,
  borderRadius: b,
  radius: b,
  borderTopLeftRadius: b,
  borderTopRightRadius: b,
  borderBottomRightRadius: b,
  borderBottomLeftRadius: b,
  width: b,
  maxWidth: b,
  height: b,
  maxHeight: b,
  top: b,
  right: b,
  bottom: b,
  left: b,
  padding: b,
  paddingTop: b,
  paddingRight: b,
  paddingBottom: b,
  paddingLeft: b,
  margin: b,
  marginTop: b,
  marginRight: b,
  marginBottom: b,
  marginLeft: b,
  backgroundPositionX: b,
  backgroundPositionY: b,
};
var W2 = {
  rotate: he,
  rotateX: he,
  rotateY: he,
  rotateZ: he,
  scale: Dt,
  scaleX: Dt,
  scaleY: Dt,
  scaleZ: Dt,
  skew: he,
  skewX: he,
  skewY: he,
  distance: b,
  translateX: b,
  translateY: b,
  translateZ: b,
  x: b,
  y: b,
  z: b,
  perspective: b,
  transformPerspective: b,
  opacity: Ve,
  originX: Wo,
  originY: Wo,
  originZ: b,
};
var Ko = { ...Ce, transform: Math.round };
var Z1 = {
  ...G2,
  ...W2,
  zIndex: Ko,
  size: b,
  fillOpacity: Ve,
  strokeOpacity: Ve,
  numOctaves: Ko,
};
var gs = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  xs = me.length;
function K2(e, t, a) {
  let o = "",
    r = !0;
  for (let i = 0; i < xs; i++) {
    let l = me[i],
      s = e[l];
    if (s === void 0) continue;
    let n = !0;
    if (
      (typeof s == "number"
        ? (n = s === (l.startsWith("scale") ? 1 : 0))
        : (n = parseFloat(s) === 0),
      !n || a)
    ) {
      let d = Ia(s, Z1[l]);
      if (!n) {
        r = !1;
        let u = gs[l] || l;
        o += `${u}(${d}) `;
      }
      a && (t[l] = d);
    }
  }
  return ((o = o.trim()), a ? (o = a(t, r ? "" : o)) : r && (o = "none"), o);
}
function D1(e, t, a) {
  let { style: o, vars: r, transformOrigin: i } = e,
    l = !1,
    s = !1;
  for (let n in t) {
    let d = t[n];
    if (ee.has(n)) {
      l = !0;
      continue;
    } else if (wa(n)) {
      r[n] = d;
      continue;
    } else {
      let u = Ia(d, Z1[n]);
      n.startsWith("origin") ? ((s = !0), (i[n] = u)) : (o[n] = u);
    }
  }
  if (
    (t.transform ||
      (l || a
        ? (o.transform = K2(t, e.transform, a))
        : o.transform && (o.transform = "none")),
    s)
  ) {
    let { originX: n = "50%", originY: d = "50%", originZ: u = 0 } = i;
    o.transformOrigin = `${n} ${d} ${u}`;
  }
}
var vs = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Ls = { offset: "strokeDashoffset", array: "strokeDasharray" };
function X2(e, t, a = 1, o = 0, r = !0) {
  e.pathLength = 1;
  let i = r ? vs : Ls;
  e[i.offset] = b.transform(-o);
  let l = b.transform(t),
    s = b.transform(a);
  e[i.array] = `${l} ${s}`;
}
function Q2(e, t, a) {
  return typeof e == "string" ? e : b.transform(t + a * e);
}
function Y2(e, t, a) {
  let o = Q2(t, e.x, e.width),
    r = Q2(a, e.y, e.height);
  return `${o} ${r}`;
}
function O1(
  e,
  {
    attrX: t,
    attrY: a,
    attrScale: o,
    originX: r,
    originY: i,
    pathLength: l,
    pathSpacing: s = 1,
    pathOffset: n = 0,
    ...d
  },
  u,
  c,
) {
  if ((D1(e, d, c), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: f, style: p, dimensions: m } = e;
  (f.transform && (m && (p.transform = f.transform), delete f.transform),
    m &&
      (r !== void 0 || i !== void 0 || p.transform) &&
      (p.transformOrigin = Y2(
        m,
        r !== void 0 ? r : 0.5,
        i !== void 0 ? i : 0.5,
      )),
    t !== void 0 && (f.x = t),
    a !== void 0 && (f.y = a),
    o !== void 0 && (f.scale = o),
    l !== void 0 && X2(f, l, s, n, !1));
}
var F1 = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
var ba = () => ({ ...F1(), attrs: {} });
var $1 = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function ya(e, { style: t, vars: a }, o, r) {
  Object.assign(e.style, t, r && r.getProjectionStyles(o));
  for (let i in a) e.style.setProperty(i, a[i]);
}
var Ma = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Sa(e, t, a, o) {
  ya(e, t, void 0, o);
  for (let r in t.attrs) e.setAttribute(Ma.has(r) ? r : H1(r), t.attrs[r]);
}
var j1 = {};
function J2(e) {
  Object.assign(j1, e);
}
function Va(e, { layout: t, layoutId: a }) {
  return (
    ee.has(e) ||
    e.startsWith("origin") ||
    ((t || a !== void 0) && (!!j1[e] || e === "opacity"))
  );
}
function q1(e, t, a) {
  var o;
  let { style: r } = e,
    i = {};
  for (let l in r)
    (T(r[l]) ||
      (t.style && T(t.style[l])) ||
      Va(l, e) ||
      ((o = a?.getValue(l)) === null || o === void 0 ? void 0 : o.liveStyle) !==
        void 0) &&
      (i[l] = r[l]);
  return i;
}
function Ra(e, t, a) {
  let o = q1(e, t, a);
  for (let r in e)
    if (T(e[r]) || T(t[r])) {
      let i =
        me.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      o[i] = e[r];
    }
  return o;
}
function ws(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
var e9 = ["x", "y", "width", "height", "cx", "cy", "r"],
  t9 = {
    useVisualState: La({
      scrapeMotionValuesFromProps: Ra,
      createRenderState: ba,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: a,
        renderState: o,
        latestValues: r,
      }) => {
        if (!a) return;
        let i = !!e.drag;
        if (!i) {
          for (let s in r)
            if (ee.has(s)) {
              i = !0;
              break;
            }
        }
        if (!i) return;
        let l = !t;
        if (t)
          for (let s = 0; s < e9.length; s++) {
            let n = e9[s];
            e[n] !== t[n] && (l = !0);
          }
        l &&
          V.read(() => {
            (ws(a, o),
              V.render(() => {
                (O1(o, r, $1(a.tagName), e.transformTemplate), Sa(a, o));
              }));
          });
      },
    }),
  };
var a9 = {
  useVisualState: La({
    scrapeMotionValuesFromProps: q1,
    createRenderState: F1,
  }),
};
import { Fragment as Ss, useMemo as Vs, createElement as Rs } from "react";
import { useMemo as Is } from "react";
function Xo(e, t, a) {
  for (let o in t) !T(t[o]) && !Va(o, a) && (e[o] = t[o]);
}
function bs({ transformTemplate: e }, t) {
  return Is(() => {
    let a = F1();
    return (D1(a, t, e), Object.assign({}, a.vars, a.style));
  }, [t]);
}
function ys(e, t) {
  let a = e.style || {},
    o = {};
  return (Xo(o, a, e), Object.assign(o, bs(e, t)), o);
}
function o9(e, t) {
  let a = {},
    o = ys(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((a.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (a.tabIndex = 0),
    (a.style = o),
    a
  );
}
import { useMemo as Ms } from "react";
function r9(e, t, a, o) {
  let r = Ms(() => {
    let i = ba();
    return (
      O1(i, t, $1(o), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    let i = {};
    (Xo(i, e.style, e), (r.style = { ...i, ...r.style }));
  }
  return r;
}
function l9(e = !1) {
  return (a, o, r, { latestValues: i }, l) => {
    let n = (k1(a) ? r9 : o9)(o, i, l, a),
      d = H2(o, typeof a == "string", e),
      u = a !== Ss ? { ...d, ...n, ref: r } : {},
      { children: c } = o,
      f = Vs(() => (T(c) ? c.get() : c), [c]);
    return Rs(a, { ...u, children: f });
  };
}
function i9(e, t) {
  return function (o, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
    let l = {
      ...(k1(o) ? t9 : a9),
      preloadedFeatures: e,
      useRender: l9(r),
      createVisualElement: t,
      Component: o,
    };
    return F2(l);
  };
}
function Qo(e, t) {
  if (!Array.isArray(t)) return !1;
  let a = t.length;
  if (a !== e.length) return !1;
  for (let o = 0; o < a; o++) if (t[o] !== e[o]) return !1;
  return !0;
}
function $e(e, t, a) {
  let o = e.getProps();
  return B1(o, t, a !== void 0 ? a : o.custom, e);
}
var Yo = r1(() => window.ScrollTimeline !== void 0);
var Ft = class {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, a) {
    for (let o = 0; o < this.animations.length; o++) this.animations[o][t] = a;
  }
  attachTimeline(t, a) {
    let o = this.animations.map((r) => {
      if (Yo() && r.attachTimeline) return r.attachTimeline(t);
      if (typeof a == "function") return a(r);
    });
    return () => {
      o.forEach((r, i) => {
        (r && r(), this.animations[i].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let a = 0; a < this.animations.length; a++)
      t = Math.max(t, this.animations[a].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((a) => a[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
};
var $t = class extends Ft {
  then(t, a) {
    return Promise.all(this.animations).then(t).catch(a);
  }
};
function je(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
function N1(e) {
  let t = 0,
    a = 50,
    o = e.next(t);
  for (; !o.done && t < 2e4;) ((t += a), (o = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function qe(e) {
  return typeof e == "function";
}
function jt(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
var E1 = (e) => Array.isArray(e) && typeof e[0] == "number";
var er = { linearEasing: void 0 };
function s9(e, t) {
  let a = r1(e);
  return () => {
    var o;
    return (o = er[t]) !== null && o !== void 0 ? o : a();
  };
}
var Ne = s9(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
var qt = (e, t, a = 10) => {
  let o = "",
    r = Math.max(Math.round(t / a), 2);
  for (let i = 0; i < r; i++) o += e(le(0, r - 1, i)) + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
};
function Pa(e) {
  return !!(
    (typeof e == "function" && Ne()) ||
    !e ||
    (typeof e == "string" && (e in Ha || Ne())) ||
    E1(e) ||
    (Array.isArray(e) && e.every(Pa))
  );
}
var U1 = ([e, t, a, o]) => `cubic-bezier(${e}, ${t}, ${a}, ${o})`,
  Ha = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: U1([0, 0.65, 0.55, 1]),
    circOut: U1([0.55, 0, 1, 0.45]),
    backIn: U1([0.31, 0.01, 0.66, -0.59]),
    backOut: U1([0.33, 1.53, 0.69, 0.99]),
  };
function z1(e, t) {
  if (e)
    return typeof e == "function" && Ne()
      ? qt(e, t)
      : E1(e)
        ? U1(e)
        : Array.isArray(e)
          ? e.map((a) => z1(a, t) || Ha.easeOut)
          : Ha[e];
}
var se = { x: !1, y: !1 };
function _1() {
  return se.x || se.y;
}
function tr(e, t, a) {
  var o;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let r = document;
    t && (r = t.current);
    let i = (o = a?.[e]) !== null && o !== void 0 ? o : r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function ka(e, t) {
  let a = tr(e),
    o = new AbortController(),
    r = { passive: !0, ...t, signal: o.signal };
  return [a, r, () => o.abort()];
}
function n9(e) {
  return (t) => {
    t.pointerType === "touch" || _1() || e(t);
  };
}
function ar(e, t, a = {}) {
  let [o, r, i] = ka(e, a),
    l = n9((s) => {
      let { target: n } = s,
        d = t(s);
      if (typeof d != "function" || !n) return;
      let u = n9((c) => {
        (d(c), n.removeEventListener("pointerleave", u));
      });
      n.addEventListener("pointerleave", u, r);
    });
  return (
    o.forEach((s) => {
      s.addEventListener("pointerenter", l, r);
    }),
    i
  );
}
var Ba = (e, t) => (t ? (e === t ? !0 : Ba(e, t.parentElement)) : !1);
var i1 = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
var Hs = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function d9(e) {
  return Hs.has(e.tagName) || e.tabIndex !== -1;
}
var s1 = new WeakSet();
function u9(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function or(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
var c9 = (e, t) => {
  let a = e.currentTarget;
  if (!a) return;
  let o = u9(() => {
    if (s1.has(a)) return;
    or(a, "down");
    let r = u9(() => {
        or(a, "up");
      }),
      i = () => or(a, "cancel");
    (a.addEventListener("keyup", r, t), a.addEventListener("blur", i, t));
  });
  (a.addEventListener("keydown", o, t),
    a.addEventListener("blur", () => a.removeEventListener("keydown", o), t));
};
function f9(e) {
  return i1(e) && !_1();
}
function rr(e, t, a = {}) {
  let [o, r, i] = ka(e, a),
    l = (s) => {
      let n = s.currentTarget;
      if (!f9(s) || s1.has(n)) return;
      s1.add(n);
      let d = t(s),
        u = (p, m) => {
          (window.removeEventListener("pointerup", c),
            window.removeEventListener("pointercancel", f),
            !(!f9(p) || !s1.has(n)) &&
              (s1.delete(n), typeof d == "function" && d(p, { success: m })));
        },
        c = (p) => {
          u(p, a.useGlobalTarget || Ba(n, p.target));
        },
        f = (p) => {
          u(p, !1);
        };
      (window.addEventListener("pointerup", c, r),
        window.addEventListener("pointercancel", f, r));
    };
  return (
    o.forEach((s) => {
      (!d9(s) && s.getAttribute("tabindex") === null && (s.tabIndex = 0),
        (a.useGlobalTarget ? window : s).addEventListener("pointerdown", l, r),
        s.addEventListener("focus", (d) => c9(d, r), r));
    }),
    i
  );
}
function lr(e) {
  return e === "x" || e === "y"
    ? se[e]
      ? null
      : ((se[e] = !0),
        () => {
          se[e] = !1;
        })
    : se.x || se.y
      ? null
      : ((se.x = se.y = !0),
        () => {
          se.x = se.y = !1;
        });
}
var Ta = new Set(["width", "height", "top", "left", "right", "bottom", ...me]);
var Aa;
function ks() {
  Aa = void 0;
}
var X = {
  now: () => (
    Aa === void 0 &&
      X.set(
        $.isProcessing || R1.useManualTiming ? $.timestamp : performance.now(),
      ),
    Aa
  ),
  set: (e) => {
    ((Aa = e), queueMicrotask(ks));
  },
};
function G1(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function W1(e, t) {
  let a = e.indexOf(t);
  a > -1 && e.splice(a, 1);
}
var Ee = class {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (G1(this.subscriptions, t), () => W1(this.subscriptions, t));
  }
  notify(t, a, o) {
    let r = this.subscriptions.length;
    if (r)
      if (r === 1) this.subscriptions[0](t, a, o);
      else
        for (let i = 0; i < r; i++) {
          let l = this.subscriptions[i];
          l && l(t, a, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
function Za(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var m9 = 30,
  Bs = (e) => !isNaN(parseFloat(e)),
  C9 = { current: void 0 },
  ir = class {
    constructor(t, a = {}) {
      ((this.version = "11.18.2"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (o, r = !0) => {
          let i = X.now();
          (this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(o),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            r &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current));
        }),
        (this.hasAnimated = !1),
        this.setCurrent(t),
        (this.owner = a.owner));
    }
    setCurrent(t) {
      ((this.current = t),
        (this.updatedAt = X.now()),
        this.canTrackVelocity === null &&
          t !== void 0 &&
          (this.canTrackVelocity = Bs(this.current)));
    }
    setPrevFrameValue(t = this.current) {
      ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(t) {
      return this.on("change", t);
    }
    on(t, a) {
      this.events[t] || (this.events[t] = new Ee());
      let o = this.events[t].add(a);
      return t === "change"
        ? () => {
            (o(),
              V.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : o;
    }
    clearListeners() {
      for (let t in this.events) this.events[t].clear();
    }
    attach(t, a) {
      ((this.passiveEffect = t), (this.stopPassiveEffect = a));
    }
    set(t, a = !0) {
      !a || !this.passiveEffect
        ? this.updateAndNotify(t, a)
        : this.passiveEffect(t, this.updateAndNotify);
    }
    setWithVelocity(t, a, o) {
      (this.set(a),
        (this.prev = void 0),
        (this.prevFrameValue = t),
        (this.prevUpdatedAt = this.updatedAt - o));
    }
    jump(t, a = !0) {
      (this.updateAndNotify(t),
        (this.prev = t),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        a && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    get() {
      return (C9.current && C9.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let t = X.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        t - this.updatedAt > m9
      )
        return 0;
      let a = Math.min(this.updatedAt - this.prevUpdatedAt, m9);
      return Za(parseFloat(this.current) - parseFloat(this.prevFrameValue), a);
    }
    start(t) {
      return (
        this.stop(),
        new Promise((a) => {
          ((this.hasAnimated = !0),
            (this.animation = t(a)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function Re(e, t) {
  return new ir(e, t);
}
function Ts(e, t, a) {
  e.hasValue(t) ? e.getValue(t).set(a) : e.addValue(t, Re(a));
}
function h9(e, t) {
  let a = $e(e, t),
    { transitionEnd: o = {}, transition: r = {}, ...i } = a || {};
  i = { ...i, ...o };
  for (let l in i) {
    let s = N2(i[l]);
    Ts(e, l, s);
  }
}
function g9(e) {
  return !!(T(e) && e.add);
}
function Nt(e, t) {
  let a = e.getValue("willChange");
  if (g9(a)) return a.add(t);
}
function Da(e) {
  return e.props[xa];
}
var Oa = { current: !1 };
var x9 = (e, t, a) =>
    (((1 - 3 * a + 3 * t) * e + (3 * a - 6 * t)) * e + 3 * t) * e,
  As = 1e-7,
  Zs = 12;
function Ds(e, t, a, o, r) {
  let i,
    l,
    s = 0;
  do ((l = t + (a - t) / 2), (i = x9(l, o, r) - e), i > 0 ? (a = l) : (t = l));
  while (Math.abs(i) > As && ++s < Zs);
  return l;
}
function Ue(e, t, a, o) {
  if (e === t && a === o) return B;
  let r = (i) => Ds(i, 0, 1, e, a);
  return (i) => (i === 0 || i === 1 ? i : x9(r(i), t, o));
}
var Fa = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2);
var $a = (e) => (t) => 1 - e(1 - t);
var sr = Ue(0.33, 1.53, 0.69, 0.99),
  Et = $a(sr),
  ja = Fa(Et);
var qa = (e) =>
  (e *= 2) < 1 ? 0.5 * Et(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
var Na = (e) => 1 - Math.sin(Math.acos(e)),
  Ea = $a(Na),
  Ua = Fa(Na);
var za = (e) => /^0[^.\s]+$/u.test(e);
function v9(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || za(e)
      : !0;
}
var ze = (e) => Math.round(e * 1e5) / 1e5;
var K1 = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function L9(e) {
  return e == null;
}
var w9 =
  /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
var X1 = (e, t) => (a) =>
    !!(
      (typeof a == "string" && w9.test(a) && a.startsWith(e)) ||
      (t && !L9(a) && Object.prototype.hasOwnProperty.call(a, t))
    ),
  _a = (e, t, a) => (o) => {
    if (typeof o != "string") return o;
    let [r, i, l, s] = o.match(K1);
    return {
      [e]: parseFloat(r),
      [t]: parseFloat(i),
      [a]: parseFloat(l),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  };
var Os = (e) => W(0, 255, e),
  nr = { ...Ce, transform: (e) => Math.round(Os(e)) },
  ge = {
    test: X1("rgb", "red"),
    parse: _a("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: a, alpha: o = 1 }) =>
      "rgba(" +
      nr.transform(e) +
      ", " +
      nr.transform(t) +
      ", " +
      nr.transform(a) +
      ", " +
      ze(Ve.transform(o)) +
      ")",
  };
function Fs(e) {
  let t = "",
    a = "",
    o = "",
    r = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (a = e.substring(3, 5)),
        (o = e.substring(5, 7)),
        (r = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (a = e.substring(2, 3)),
        (o = e.substring(3, 4)),
        (r = e.substring(4, 5)),
        (t += t),
        (a += a),
        (o += o),
        (r += r)),
    {
      red: parseInt(t, 16),
      green: parseInt(a, 16),
      blue: parseInt(o, 16),
      alpha: r ? parseInt(r, 16) / 255 : 1,
    }
  );
}
var Ut = { test: X1("#"), parse: Fs, transform: ge.transform };
var _e = {
  test: X1("hsl", "hue"),
  parse: _a("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: a, alpha: o = 1 }) =>
    "hsla(" +
    Math.round(e) +
    ", " +
    Y.transform(ze(t)) +
    ", " +
    Y.transform(ze(a)) +
    ", " +
    ze(Ve.transform(o)) +
    ")",
};
var N = {
  test: (e) => ge.test(e) || Ut.test(e) || _e.test(e),
  parse: (e) =>
    ge.test(e) ? ge.parse(e) : _e.test(e) ? _e.parse(e) : Ut.parse(e),
  transform: (e) =>
    typeof e == "string"
      ? e
      : e.hasOwnProperty("red")
        ? ge.transform(e)
        : _e.transform(e),
};
var I9 =
  /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function $s(e) {
  var t, a;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(K1)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((a = e.match(I9)) === null || a === void 0 ? void 0 : a.length) || 0) >
      0
  );
}
var y9 = "number",
  M9 = "color",
  js = "var",
  qs = "var(",
  b9 = "${}",
  Ns =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function n1(e) {
  let t = e.toString(),
    a = [],
    o = { color: [], number: [], var: [] },
    r = [],
    i = 0,
    s = t
      .replace(
        Ns,
        (n) => (
          N.test(n)
            ? (o.color.push(i), r.push(M9), a.push(N.parse(n)))
            : n.startsWith(qs)
              ? (o.var.push(i), r.push(js), a.push(n))
              : (o.number.push(i), r.push(y9), a.push(parseFloat(n))),
          ++i,
          b9
        ),
      )
      .split(b9);
  return { values: a, split: s, indexes: o, types: r };
}
function S9(e) {
  return n1(e).values;
}
function V9(e) {
  let { split: t, types: a } = n1(e),
    o = t.length;
  return (r) => {
    let i = "";
    for (let l = 0; l < o; l++)
      if (((i += t[l]), r[l] !== void 0)) {
        let s = a[l];
        s === y9
          ? (i += ze(r[l]))
          : s === M9
            ? (i += N.transform(r[l]))
            : (i += r[l]);
      }
    return i;
  };
}
var Es = (e) => (typeof e == "number" ? 0 : e);
function Us(e) {
  let t = S9(e);
  return V9(e)(t.map(Es));
}
var J = { test: $s, parse: S9, createTransformer: V9, getAnimatableNone: Us };
var zs = new Set(["brightness", "contrast", "saturate", "opacity"]);
function _s(e) {
  let [t, a] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  let [o] = a.match(K1) || [];
  if (!o) return e;
  let r = a.replace(o, ""),
    i = zs.has(t) ? 1 : 0;
  return (o !== a && (i *= 100), t + "(" + i + r + ")");
}
var Gs = /\b([a-z-]*)\(.*?\)/gu,
  zt = {
    ...J,
    getAnimatableNone: (e) => {
      let t = e.match(Gs);
      return t ? t.map(_s).join(" ") : e;
    },
  };
var Ws = {
    ...Z1,
    color: N,
    backgroundColor: N,
    outlineColor: N,
    fill: N,
    stroke: N,
    borderColor: N,
    borderTopColor: N,
    borderRightColor: N,
    borderBottomColor: N,
    borderLeftColor: N,
    filter: zt,
    WebkitFilter: zt,
  },
  Q1 = (e) => Ws[e];
function Ga(e, t) {
  let a = Q1(e);
  return (
    a !== zt && (a = J),
    a.getAnimatableNone ? a.getAnimatableNone(t) : void 0
  );
}
var Ks = new Set(["auto", "none", "0"]);
function R9(e, t, a) {
  let o = 0,
    r;
  for (; o < e.length && !r;) {
    let i = e[o];
    (typeof i == "string" && !Ks.has(i) && n1(i).values.length && (r = e[o]),
      o++);
  }
  if (r && a) for (let i of t) e[i] = Ga(a, r);
}
var dr = (e) => e === Ce || e === b,
  H9 = (e, t) => parseFloat(e.split(", ")[t]),
  P9 =
    (e, t) =>
    (a, { transform: o }) => {
      if (o === "none" || !o) return 0;
      let r = o.match(/^matrix3d\((.+)\)$/u);
      if (r) return H9(r[1], t);
      {
        let i = o.match(/^matrix\((.+)\)$/u);
        return i ? H9(i[1], e) : 0;
      }
    },
  Xs = new Set(["x", "y", "z"]),
  Qs = me.filter((e) => !Xs.has(e));
function k9(e) {
  let t = [];
  return (
    Qs.forEach((a) => {
      let o = e.getValue(a);
      o !== void 0 &&
        (t.push([a, o.get()]), o.set(a.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
var d1 = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: a = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(a),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: a = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(a),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: P9(4, 13),
  y: P9(5, 14),
};
d1.translateX = d1.x;
d1.translateY = d1.y;
var u1 = new Set(),
  ur = !1,
  cr = !1;
function B9() {
  if (cr) {
    let e = Array.from(u1).filter((o) => o.needsMeasurement),
      t = new Set(e.map((o) => o.element)),
      a = new Map();
    (t.forEach((o) => {
      let r = k9(o);
      r.length && (a.set(o, r), o.render());
    }),
      e.forEach((o) => o.measureInitialState()),
      t.forEach((o) => {
        o.render();
        let r = a.get(o);
        r &&
          r.forEach(([i, l]) => {
            var s;
            (s = o.getValue(i)) === null || s === void 0 || s.set(l);
          });
      }),
      e.forEach((o) => o.measureEndState()),
      e.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      }));
  }
  ((cr = !1), (ur = !1), u1.forEach((e) => e.complete()), u1.clear());
}
function T9() {
  u1.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (cr = !0));
  });
}
function A9() {
  (T9(), B9());
}
var Ge = class {
  constructor(t, a, o, r, i, l = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = a),
      (this.name = o),
      (this.motionValue = r),
      (this.element = i),
      (this.isAsync = l));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (u1.add(this), ur || ((ur = !0), V.read(T9), V.resolveKeyframes(B9)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    let { unresolvedKeyframes: t, name: a, element: o, motionValue: r } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          let l = r?.get(),
            s = t[t.length - 1];
          if (l !== void 0) t[0] = l;
          else if (o && a) {
            let n = o.readValue(a, s);
            n != null && (t[0] = n);
          }
          (t[0] === void 0 && (t[0] = s), r && l === void 0 && r.set(t[0]));
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      u1.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), u1.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
};
var Wa = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
var Ys = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Js(e) {
  let t = Ys.exec(e);
  if (!t) return [,];
  let [, a, o, r] = t;
  return [`--${a ?? o}`, r];
}
var en = 4;
function fr(e, t, a = 1) {
  pe(
    a <= en,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
  );
  let [o, r] = Js(e);
  if (!o) return;
  let i = window.getComputedStyle(t).getPropertyValue(o);
  if (i) {
    let l = i.trim();
    return Wa(l) ? parseFloat(l) : l;
  }
  return A1(r) ? fr(r, t, a + 1) : r;
}
var Ka = (e) => (t) => t.test(e);
var Z9 = { test: (e) => e === "auto", parse: (e) => e };
var pr = [Ce, b, Y, he, _2, z2, Z9],
  mr = (e) => pr.find(Ka(e));
var Y1 = class extends Ge {
  constructor(t, a, o, r, i) {
    super(t, a, o, r, i, !0);
  }
  readKeyframes() {
    let { unresolvedKeyframes: t, element: a, name: o } = this;
    if (!a || !a.current) return;
    super.readKeyframes();
    for (let n = 0; n < t.length; n++) {
      let d = t[n];
      if (typeof d == "string" && ((d = d.trim()), A1(d))) {
        let u = fr(d, a.current);
        (u !== void 0 && (t[n] = u),
          n === t.length - 1 && (this.finalKeyframe = d));
      }
    }
    if ((this.resolveNoneKeyframes(), !Ta.has(o) || t.length !== 2)) return;
    let [r, i] = t,
      l = mr(r),
      s = mr(i);
    if (l !== s)
      if (dr(l) && dr(s))
        for (let n = 0; n < t.length; n++) {
          let d = t[n];
          typeof d == "string" && (t[n] = parseFloat(d));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: t, name: a } = this,
      o = [];
    for (let r = 0; r < t.length; r++) v9(t[r]) && o.push(r);
    o.length && R9(t, o, a);
  }
  measureInitialState() {
    let { element: t, unresolvedKeyframes: a, name: o } = this;
    if (!t || !t.current) return;
    (o === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = d1[o](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (a[0] = this.measuredOrigin));
    let r = a[a.length - 1];
    r !== void 0 && t.getValue(o, r).jump(r, !1);
  }
  measureEndState() {
    var t;
    let { element: a, name: o, unresolvedKeyframes: r } = this;
    if (!a || !a.current) return;
    let i = a.getValue(o);
    i && i.jump(this.measuredOrigin, !1);
    let l = r.length - 1,
      s = r[l];
    ((r[l] = d1[o](a.measureViewportBox(), window.getComputedStyle(a.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([n, d]) => {
          a.getValue(n).set(d);
        }),
      this.resolveNoneKeyframes());
  }
};
var Cr = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (J.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function tn(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let a = 0; a < e.length; a++) if (e[a] !== t) return !0;
}
function D9(e, t, a, o) {
  let r = e[0];
  if (r === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  let i = e[e.length - 1],
    l = Cr(r, t),
    s = Cr(i, t);
  return (
    be(
      l === s,
      `You are trying to animate ${t} from "${r}" to "${i}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${i} via the \`style\` property.`,
    ),
    !l || !s ? !1 : tn(e) || ((a === "spring" || qe(a)) && o)
  );
}
var an = (e) => e !== null;
function We(e, { repeat: t, repeatType: a = "loop" }, o) {
  let r = e.filter(an),
    i = t && a !== "loop" && t % 2 === 1 ? 0 : r.length - 1;
  return !i || o === void 0 ? r[i] : o;
}
var on = 40,
  J1 = class {
    constructor({
      autoplay: t = !0,
      delay: a = 0,
      type: o = "keyframes",
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: l = "loop",
      ...s
    }) {
      ((this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = X.now()),
        (this.options = {
          autoplay: t,
          delay: a,
          type: o,
          repeat: r,
          repeatDelay: i,
          repeatType: l,
          ...s,
        }),
        this.updateFinishedPromise());
    }
    calcStartTime() {
      return this.resolvedAt
        ? this.resolvedAt - this.createdAt > on
          ? this.resolvedAt
          : this.createdAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && A9(),
        this._resolved
      );
    }
    onKeyframesResolved(t, a) {
      ((this.resolvedAt = X.now()), (this.hasAttemptedResolve = !0));
      let {
        name: o,
        type: r,
        velocity: i,
        delay: l,
        onComplete: s,
        onUpdate: n,
        isGenerator: d,
      } = this.options;
      if (!d && !D9(t, o, r, i))
        if (Oa.current || !l) {
          (n && n(We(t, this.options, a)),
            s && s(),
            this.resolveFinishedPromise());
          return;
        } else this.options.duration = 0;
      let u = this.initPlayback(t, a);
      u !== !1 &&
        ((this._resolved = { keyframes: t, finalKeyframe: a, ...u }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(t, a) {
      return this.currentFinishedPromise.then(t, a);
    }
    flatten() {
      ((this.options.type = "keyframes"), (this.options.ease = "linear"));
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((t) => {
        this.resolveFinishedPromise = t;
      });
    }
  };
var H = (e, t, a) => e + (t - e) * a;
function hr(e, t, a) {
  return (
    a < 0 && (a += 1),
    a > 1 && (a -= 1),
    a < 1 / 6
      ? e + (t - e) * 6 * a
      : a < 1 / 2
        ? t
        : a < 2 / 3
          ? e + (t - e) * (2 / 3 - a) * 6
          : e
  );
}
function O9({ hue: e, saturation: t, lightness: a, alpha: o }) {
  ((e /= 360), (t /= 100), (a /= 100));
  let r = 0,
    i = 0,
    l = 0;
  if (!t) r = i = l = a;
  else {
    let s = a < 0.5 ? a * (1 + t) : a + t - a * t,
      n = 2 * a - s;
    ((r = hr(n, s, e + 1 / 3)), (i = hr(n, s, e)), (l = hr(n, s, e - 1 / 3)));
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(i * 255),
    blue: Math.round(l * 255),
    alpha: o,
  };
}
function et(e, t) {
  return (a) => (a > 0 ? t : e);
}
var gr = (e, t, a) => {
    let o = e * e,
      r = a * (t * t - o) + o;
    return r < 0 ? 0 : Math.sqrt(r);
  },
  rn = [Ut, ge, _e],
  ln = (e) => rn.find((t) => t.test(e));
function F9(e) {
  let t = ln(e);
  if (
    (be(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
    ),
    !t)
  )
    return !1;
  let a = t.parse(e);
  return (t === _e && (a = O9(a)), a);
}
var xr = (e, t) => {
  let a = F9(e),
    o = F9(t);
  if (!a || !o) return et(e, t);
  let r = { ...a };
  return (i) => (
    (r.red = gr(a.red, o.red, i)),
    (r.green = gr(a.green, o.green, i)),
    (r.blue = gr(a.blue, o.blue, i)),
    (r.alpha = H(a.alpha, o.alpha, i)),
    ge.transform(r)
  );
};
var sn = (e, t) => (a) => t(e(a)),
  xe = (...e) => e.reduce(sn);
var Xa = new Set(["none", "hidden"]);
function $9(e, t) {
  return Xa.has(e) ? (a) => (a <= 0 ? e : t) : (a) => (a >= 1 ? t : e);
}
function nn(e, t) {
  return (a) => H(e, t, a);
}
function Qa(e) {
  return typeof e == "number"
    ? nn
    : typeof e == "string"
      ? A1(e)
        ? et
        : N.test(e)
          ? xr
          : cn
      : Array.isArray(e)
        ? j9
        : typeof e == "object"
          ? N.test(e)
            ? xr
            : dn
          : et;
}
function j9(e, t) {
  let a = [...e],
    o = a.length,
    r = e.map((i, l) => Qa(i)(i, t[l]));
  return (i) => {
    for (let l = 0; l < o; l++) a[l] = r[l](i);
    return a;
  };
}
function dn(e, t) {
  let a = { ...e, ...t },
    o = {};
  for (let r in a)
    e[r] !== void 0 && t[r] !== void 0 && (o[r] = Qa(e[r])(e[r], t[r]));
  return (r) => {
    for (let i in o) a[i] = o[i](r);
    return a;
  };
}
function un(e, t) {
  var a;
  let o = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let l = t.types[i],
      s = e.indexes[l][r[l]],
      n = (a = e.values[s]) !== null && a !== void 0 ? a : 0;
    ((o[i] = n), r[l]++);
  }
  return o;
}
var cn = (e, t) => {
  let a = J.createTransformer(t),
    o = n1(e),
    r = n1(t);
  return o.indexes.var.length === r.indexes.var.length &&
    o.indexes.color.length === r.indexes.color.length &&
    o.indexes.number.length >= r.indexes.number.length
    ? (Xa.has(e) && !r.values.length) || (Xa.has(t) && !o.values.length)
      ? $9(e, t)
      : xe(j9(un(o, r), r.values), a)
    : (be(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
      ),
      et(e, t));
};
function Ya(e, t, a) {
  return typeof e == "number" && typeof t == "number" && typeof a == "number"
    ? H(e, t, a)
    : Qa(e)(e, t);
}
var fn = 5;
function Ja(e, t, a) {
  let o = Math.max(t - fn, 0);
  return Za(a - e(o), t - o);
}
var D = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
var vr = 0.001;
function q9({
  duration: e = D.duration,
  bounce: t = D.bounce,
  velocity: a = D.velocity,
  mass: o = D.mass,
}) {
  let r, i;
  be(e <= F(D.maxDuration), "Spring duration must be 10 seconds or less");
  let l = 1 - t;
  ((l = W(D.minDamping, D.maxDamping, l)),
    (e = W(D.minDuration, D.maxDuration, G(e))),
    l < 1
      ? ((r = (d) => {
          let u = d * l,
            c = u * e,
            f = u - a,
            p = eo(d, l),
            m = Math.exp(-c);
          return vr - (f / p) * m;
        }),
        (i = (d) => {
          let c = d * l * e,
            f = c * a + a,
            p = Math.pow(l, 2) * Math.pow(d, 2) * e,
            m = Math.exp(-c),
            C = eo(Math.pow(d, 2), l);
          return ((-r(d) + vr > 0 ? -1 : 1) * ((f - p) * m)) / C;
        }))
      : ((r = (d) => {
          let u = Math.exp(-d * e),
            c = (d - a) * e + 1;
          return -vr + u * c;
        }),
        (i = (d) => {
          let u = Math.exp(-d * e),
            c = (a - d) * (e * e);
          return u * c;
        })));
  let s = 5 / e,
    n = mn(r, i, s);
  if (((e = F(e)), isNaN(n)))
    return { stiffness: D.stiffness, damping: D.damping, duration: e };
  {
    let d = Math.pow(n, 2) * o;
    return { stiffness: d, damping: l * 2 * Math.sqrt(o * d), duration: e };
  }
}
var pn = 12;
function mn(e, t, a) {
  let o = a;
  for (let r = 1; r < pn; r++) o = o - e(o) / t(o);
  return o;
}
function eo(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var Cn = ["duration", "bounce"],
  hn = ["stiffness", "damping", "mass"];
function N9(e, t) {
  return t.some((a) => e[a] !== void 0);
}
function gn(e) {
  let t = {
    velocity: D.velocity,
    stiffness: D.stiffness,
    damping: D.damping,
    mass: D.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!N9(e, hn) && N9(e, Cn))
    if (e.visualDuration) {
      let a = e.visualDuration,
        o = (2 * Math.PI) / (a * 1.2),
        r = o * o,
        i = 2 * W(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(r);
      t = { ...t, mass: D.mass, stiffness: r, damping: i };
    } else {
      let a = q9(e);
      ((t = { ...t, ...a, mass: D.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function to(e = D.visualDuration, t = D.bounce) {
  let a =
      typeof e != "object"
        ? { visualDuration: e, keyframes: [0, 1], bounce: t }
        : e,
    { restSpeed: o, restDelta: r } = a,
    i = a.keyframes[0],
    l = a.keyframes[a.keyframes.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: n,
      damping: d,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: p,
    } = gn({ ...a, velocity: -G(a.velocity || 0) }),
    m = f || 0,
    C = d / (2 * Math.sqrt(n * u)),
    h = l - i,
    g = G(Math.sqrt(n / u)),
    x = Math.abs(h) < 5;
  (o || (o = x ? D.restSpeed.granular : D.restSpeed.default),
    r || (r = x ? D.restDelta.granular : D.restDelta.default));
  let L;
  if (C < 1) {
    let w = eo(g, C);
    L = (I) => {
      let R = Math.exp(-C * g * I);
      return (
        l - R * (((m + C * g * h) / w) * Math.sin(w * I) + h * Math.cos(w * I))
      );
    };
  } else if (C === 1) L = (w) => l - Math.exp(-g * w) * (h + (m + g * h) * w);
  else {
    let w = g * Math.sqrt(C * C - 1);
    L = (I) => {
      let R = Math.exp(-C * g * I),
        y = Math.min(w * I, 300);
      return (
        l - (R * ((m + C * g * h) * Math.sinh(y) + w * h * Math.cosh(y))) / w
      );
    };
  }
  let v = {
    calculatedDuration: (p && c) || null,
    next: (w) => {
      let I = L(w);
      if (p) s.done = w >= c;
      else {
        let R = 0;
        C < 1 && (R = w === 0 ? F(m) : Ja(L, w, I));
        let y = Math.abs(R) <= o,
          k = Math.abs(l - I) <= r;
        s.done = y && k;
      }
      return ((s.value = s.done ? l : I), s);
    },
    toString: () => {
      let w = Math.min(N1(v), 2e4),
        I = qt((R) => v.next(w * R).value, w, 30);
      return w + "ms " + I;
    },
  };
  return v;
}
function Lr({
  keyframes: e,
  velocity: t = 0,
  power: a = 0.8,
  timeConstant: o = 325,
  bounceDamping: r = 10,
  bounceStiffness: i = 500,
  modifyTarget: l,
  min: s,
  max: n,
  restDelta: d = 0.5,
  restSpeed: u,
}) {
  let c = e[0],
    f = { done: !1, value: c },
    p = (y) => (s !== void 0 && y < s) || (n !== void 0 && y > n),
    m = (y) =>
      s === void 0
        ? n
        : n === void 0 || Math.abs(s - y) < Math.abs(n - y)
          ? s
          : n,
    C = a * t,
    h = c + C,
    g = l === void 0 ? h : l(h);
  g !== h && (C = g - c);
  let x = (y) => -C * Math.exp(-y / o),
    L = (y) => g + x(y),
    v = (y) => {
      let k = x(y),
        j = L(y);
      ((f.done = Math.abs(k) <= d), (f.value = f.done ? g : j));
    },
    w,
    I,
    R = (y) => {
      p(f.value) &&
        ((w = y),
        (I = to({
          keyframes: [f.value, m(f.value)],
          velocity: Ja(L, y, f.value),
          damping: r,
          stiffness: i,
          restDelta: d,
          restSpeed: u,
        })));
    };
  return (
    R(0),
    {
      calculatedDuration: null,
      next: (y) => {
        let k = !1;
        return (
          !I && w === void 0 && ((k = !0), v(y), R(y)),
          w !== void 0 && y >= w ? I.next(y - w) : (!k && v(y), f)
        );
      },
    }
  );
}
var E9 = Ue(0.42, 0, 1, 1),
  U9 = Ue(0, 0, 0.58, 1),
  ao = Ue(0.42, 0, 0.58, 1);
var z9 = (e) => Array.isArray(e) && typeof e[0] != "number";
var _9 = {
    linear: B,
    easeIn: E9,
    easeInOut: ao,
    easeOut: U9,
    circIn: Na,
    circInOut: Ua,
    circOut: Ea,
    backIn: Et,
    backInOut: ja,
    backOut: sr,
    anticipate: qa,
  },
  wr = (e) => {
    if (E1(e)) {
      pe(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
      );
      let [t, a, o, r] = e;
      return Ue(t, a, o, r);
    } else if (typeof e == "string")
      return (pe(_9[e] !== void 0, `Invalid easing type '${e}'`), _9[e]);
    return e;
  };
function xn(e, t, a) {
  let o = [],
    r = a || Ya,
    i = e.length - 1;
  for (let l = 0; l < i; l++) {
    let s = r(e[l], e[l + 1]);
    if (t) {
      let n = Array.isArray(t) ? t[l] || B : t;
      s = xe(n, s);
    }
    o.push(s);
  }
  return o;
}
function G9(e, t, { clamp: a = !0, ease: o, mixer: r } = {}) {
  let i = e.length;
  if (
    (pe(i === t.length, "Both input and output ranges must be the same length"),
    i === 1)
  )
    return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  let l = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = xn(t, o, r),
    n = s.length,
    d = (u) => {
      if (l && u < e[0]) return t[0];
      let c = 0;
      if (n > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      let f = le(e[c], e[c + 1], u);
      return s[c](f);
    };
  return a ? (u) => d(W(e[0], e[i - 1], u)) : d;
}
function W9(e, t) {
  let a = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    let r = le(0, t, o);
    e.push(H(a, 1, r));
  }
}
function K9(e) {
  let t = [0];
  return (W9(t, e.length - 1), t);
}
function X9(e, t) {
  return e.map((a) => a * t);
}
function vn(e, t) {
  return e.map(() => t || ao).splice(0, e.length - 1);
}
function _t({
  duration: e = 300,
  keyframes: t,
  times: a,
  ease: o = "easeInOut",
}) {
  let r = z9(o) ? o.map(wr) : wr(o),
    i = { done: !1, value: t[0] },
    l = X9(a && a.length === t.length ? a : K9(t), e),
    s = G9(l, t, { ease: Array.isArray(r) ? r : vn(t, r) });
  return {
    calculatedDuration: e,
    next: (n) => ((i.value = s(n)), (i.done = n >= e), i),
  };
}
var Q9 = (e) => {
  let t = ({ timestamp: a }) => e(a);
  return {
    start: () => V.update(t, !0),
    stop: () => ie(t),
    now: () => ($.isProcessing ? $.timestamp : X.now()),
  };
};
var Ln = { decay: Lr, inertia: Lr, tween: _t, keyframes: _t, spring: to },
  wn = (e) => e / 100,
  c1 = class extends J1 {
    constructor(t) {
      (super(t),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.startTime = null),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
          )
            return;
          this.teardown();
          let { onStop: n } = this.options;
          n && n();
        }));
      let { name: a, motionValue: o, element: r, keyframes: i } = this.options,
        l = r?.KeyframeResolver || Ge,
        s = (n, d) => this.onKeyframesResolved(n, d);
      ((this.resolver = new l(i, s, a, o, r)), this.resolver.scheduleResolve());
    }
    flatten() {
      (super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes),
          ));
    }
    initPlayback(t) {
      let {
          type: a = "keyframes",
          repeat: o = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: l = 0,
        } = this.options,
        s = qe(a) ? a : Ln[a] || _t,
        n,
        d;
      s !== _t &&
        typeof t[0] != "number" &&
        ((n = xe(wn, Ya(t[0], t[1]))), (t = [0, 100]));
      let u = s({ ...this.options, keyframes: t });
      (i === "mirror" &&
        (d = s({ ...this.options, keyframes: [...t].reverse(), velocity: -l })),
        u.calculatedDuration === null && (u.calculatedDuration = N1(u)));
      let { calculatedDuration: c } = u,
        f = c + r,
        p = f * (o + 1) - r;
      return {
        generator: u,
        mirroredGenerator: d,
        mapPercentToKeyframes: n,
        calculatedDuration: c,
        resolvedDuration: f,
        totalDuration: p,
      };
    }
    onPostResolved() {
      let { autoplay: t = !0 } = this.options;
      (this.play(),
        this.pendingPlayState === "paused" || !t
          ? this.pause()
          : (this.state = this.pendingPlayState));
    }
    tick(t, a = !1) {
      let { resolved: o } = this;
      if (!o) {
        let { keyframes: y } = this.options;
        return { done: !0, value: y[y.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: l,
        mapPercentToKeyframes: s,
        keyframes: n,
        calculatedDuration: d,
        totalDuration: u,
        resolvedDuration: c,
      } = o;
      if (this.startTime === null) return i.next(0);
      let {
        delay: f,
        repeat: p,
        repeatType: m,
        repeatDelay: C,
        onUpdate: h,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, t))
        : this.speed < 0 &&
          (this.startTime = Math.min(t - u / this.speed, this.startTime)),
        a
          ? (this.currentTime = t)
          : this.holdTime !== null
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = Math.round(t - this.startTime) * this.speed));
      let g = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
        x = this.speed >= 0 ? g < 0 : g > u;
      ((this.currentTime = Math.max(g, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = u));
      let L = this.currentTime,
        v = i;
      if (p) {
        let y = Math.min(this.currentTime, u) / c,
          k = Math.floor(y),
          j = y % 1;
        (!j && y >= 1 && (j = 1),
          j === 1 && k--,
          (k = Math.min(k, p + 1)),
          !!(k % 2) &&
            (m === "reverse"
              ? ((j = 1 - j), C && (j -= C / c))
              : m === "mirror" && (v = l)),
          (L = W(0, 1, j) * c));
      }
      let w = x ? { done: !1, value: n[0] } : v.next(L);
      s && (w.value = s(w.value));
      let { done: I } = w;
      !x &&
        d !== null &&
        (I = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
      let R =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && I));
      return (
        R && r !== void 0 && (w.value = We(n, this.options, r)),
        h && h(w.value),
        R && this.finish(),
        w
      );
    }
    get duration() {
      let { resolved: t } = this;
      return t ? G(t.calculatedDuration) : 0;
    }
    get time() {
      return G(this.currentTime);
    }
    set time(t) {
      ((t = F(t)),
        (this.currentTime = t),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = t)
          : this.driver &&
            (this.startTime = this.driver.now() - t / this.speed));
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t) {
      let a = this.playbackSpeed !== t;
      ((this.playbackSpeed = t), a && (this.time = G(this.currentTime)));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      let { driver: t = Q9, onPlay: a, startTime: o } = this.options;
      (this.driver || (this.driver = t((i) => this.tick(i))), a && a());
      let r = this.driver.now();
      (this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime
          ? this.state === "finished" && (this.startTime = r)
          : (this.startTime = o ?? this.calcStartTime()),
        this.state === "finished" && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start());
    }
    pause() {
      var t;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      ((this.state = "paused"),
        (this.holdTime =
          (t = this.currentTime) !== null && t !== void 0 ? t : 0));
    }
    complete() {
      (this.state !== "running" && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null));
    }
    finish() {
      (this.teardown(), (this.state = "finished"));
      let { onComplete: t } = this.options;
      t && t();
    }
    cancel() {
      (this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise());
    }
    teardown() {
      ((this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel());
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(t) {
      return ((this.startTime = 0), this.tick(t, !0));
    }
  };
var Y9 = new Set(["opacity", "clipPath", "filter", "transform"]);
function J9(
  e,
  t,
  a,
  {
    delay: o = 0,
    duration: r = 300,
    repeat: i = 0,
    repeatType: l = "loop",
    ease: s = "easeInOut",
    times: n,
  } = {},
) {
  let d = { [t]: a };
  n && (d.offset = n);
  let u = z1(s, r);
  return (
    Array.isArray(u) && (d.easing = u),
    e.animate(d, {
      delay: o,
      duration: r,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: i + 1,
      direction: l === "reverse" ? "alternate" : "normal",
    })
  );
}
var el = r1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
var oo = 10,
  In = 2e4;
function bn(e) {
  return qe(e.type) || e.type === "spring" || !Pa(e.ease);
}
function yn(e, t) {
  let a = new c1({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    o = { done: !1, value: e[0] },
    r = [],
    i = 0;
  for (; !o.done && i < In;) ((o = a.sample(i)), r.push(o.value), (i += oo));
  return { times: void 0, keyframes: r, duration: i - oo, ease: "linear" };
}
var tl = { anticipate: qa, backInOut: ja, circInOut: Ua };
function Mn(e) {
  return e in tl;
}
var Gt = class extends J1 {
  constructor(t) {
    super(t);
    let { name: a, motionValue: o, element: r, keyframes: i } = this.options;
    ((this.resolver = new Y1(
      i,
      (l, s) => this.onKeyframesResolved(l, s),
      a,
      o,
      r,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, a) {
    let {
      duration: o = 300,
      times: r,
      ease: i,
      type: l,
      motionValue: s,
      name: n,
      startTime: d,
    } = this.options;
    if (!s.owner || !s.owner.current) return !1;
    if (
      (typeof i == "string" && Ne() && Mn(i) && (i = tl[i]), bn(this.options))
    ) {
      let {
          onComplete: c,
          onUpdate: f,
          motionValue: p,
          element: m,
          ...C
        } = this.options,
        h = yn(t, C);
      ((t = h.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = h.duration),
        (r = h.times),
        (i = h.ease),
        (l = "keyframes"));
    }
    let u = J9(s.owner.current, n, t, {
      ...this.options,
      duration: o,
      times: r,
      ease: i,
    });
    return (
      (u.startTime = d ?? this.calcStartTime()),
      this.pendingTimeline
        ? (jt(u, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            let { onComplete: c } = this.options;
            (s.set(We(t, this.options, a)),
              c && c(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: u, duration: o, times: r, type: l, ease: i, keyframes: t }
    );
  }
  get duration() {
    let { resolved: t } = this;
    if (!t) return 0;
    let { duration: a } = t;
    return G(a);
  }
  get time() {
    let { resolved: t } = this;
    if (!t) return 0;
    let { animation: a } = t;
    return G(a.currentTime || 0);
  }
  set time(t) {
    let { resolved: a } = this;
    if (!a) return;
    let { animation: o } = a;
    o.currentTime = F(t);
  }
  get speed() {
    let { resolved: t } = this;
    if (!t) return 1;
    let { animation: a } = t;
    return a.playbackRate;
  }
  set speed(t) {
    let { resolved: a } = this;
    if (!a) return;
    let { animation: o } = a;
    o.playbackRate = t;
  }
  get state() {
    let { resolved: t } = this;
    if (!t) return "idle";
    let { animation: a } = t;
    return a.playState;
  }
  get startTime() {
    let { resolved: t } = this;
    if (!t) return null;
    let { animation: a } = t;
    return a.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      let { resolved: a } = this;
      if (!a) return B;
      let { animation: o } = a;
      jt(o, t);
    }
    return B;
  }
  play() {
    if (this.isStopped) return;
    let { resolved: t } = this;
    if (!t) return;
    let { animation: a } = t;
    (a.playState === "finished" && this.updateFinishedPromise(), a.play());
  }
  pause() {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: a } = t;
    a.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    let { resolved: t } = this;
    if (!t) return;
    let {
      animation: a,
      keyframes: o,
      duration: r,
      type: i,
      ease: l,
      times: s,
    } = t;
    if (a.playState === "idle" || a.playState === "finished") return;
    if (this.time) {
      let {
          motionValue: d,
          onUpdate: u,
          onComplete: c,
          element: f,
          ...p
        } = this.options,
        m = new c1({
          ...p,
          keyframes: o,
          duration: r,
          type: i,
          ease: l,
          times: s,
          isGenerator: !0,
        }),
        C = F(this.time);
      d.setWithVelocity(m.sample(C - oo).value, m.sample(C).value, oo);
    }
    let { onStop: n } = this.options;
    (n && n(), this.cancel());
  }
  complete() {
    let { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    let { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    let {
      motionValue: a,
      name: o,
      repeatDelay: r,
      repeatType: i,
      damping: l,
      type: s,
    } = t;
    if (!a || !a.owner || !(a.owner.current instanceof HTMLElement)) return !1;
    let { onUpdate: n, transformTemplate: d } = a.owner.getProps();
    return (
      el() &&
      o &&
      Y9.has(o) &&
      !n &&
      !d &&
      !r &&
      i !== "mirror" &&
      l !== 0 &&
      s !== "inertia"
    );
  }
};
var Sn = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Vn = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Rn = { type: "keyframes", duration: 0.8 },
  Hn = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  al = (e, { keyframes: t }) =>
    t.length > 2
      ? Rn
      : ee.has(e)
        ? e.startsWith("scale")
          ? Vn(t[1])
          : Sn
        : Hn;
function ol({
  when: e,
  delay: t,
  delayChildren: a,
  staggerChildren: o,
  staggerDirection: r,
  repeat: i,
  repeatType: l,
  repeatDelay: s,
  from: n,
  elapsed: d,
  ...u
}) {
  return !!Object.keys(u).length;
}
var tt =
  (e, t, a, o = {}, r, i) =>
  (l) => {
    let s = je(o, e) || {},
      n = s.delay || o.delay || 0,
      { elapsed: d = 0 } = o;
    d = d - F(n);
    let u = {
      keyframes: Array.isArray(a) ? a : [null, a],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...s,
      delay: -d,
      onUpdate: (f) => {
        (t.set(f), s.onUpdate && s.onUpdate(f));
      },
      onComplete: () => {
        (l(), s.onComplete && s.onComplete());
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : r,
    };
    (ol(s) || (u = { ...u, ...al(e, u) }),
      u.duration && (u.duration = F(u.duration)),
      u.repeatDelay && (u.repeatDelay = F(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from));
    let c = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (c = !0)),
      (Oa.current || R1.skipAnimations) &&
        ((c = !0), (u.duration = 0), (u.delay = 0)),
      c && !i && t.get() !== void 0)
    ) {
      let f = We(u.keyframes, s);
      if (f !== void 0)
        return (
          V.update(() => {
            (u.onUpdate(f), u.onComplete());
          }),
          new $t([])
        );
    }
    return !i && Gt.supports(u) ? new Gt(u) : new c1(u);
  };
function Pn({ protectedKeys: e, needsAnimating: t }, a) {
  let o = e.hasOwnProperty(a) && t[a] !== !0;
  return ((t[a] = !1), o);
}
function ro(e, t, { delay: a = 0, transitionOverride: o, type: r } = {}) {
  var i;
  let { transition: l = e.getDefaultTransition(), transitionEnd: s, ...n } = t;
  o && (l = o);
  let d = [],
    u = r && e.animationState && e.animationState.getState()[r];
  for (let c in n) {
    let f = e.getValue(
        c,
        (i = e.latestValues[c]) !== null && i !== void 0 ? i : null,
      ),
      p = n[c];
    if (p === void 0 || (u && Pn(u, c))) continue;
    let m = { delay: a, ...je(l || {}, c) },
      C = !1;
    if (window.MotionHandoffAnimation) {
      let g = Da(e);
      if (g) {
        let x = window.MotionHandoffAnimation(g, c, V);
        x !== null && ((m.startTime = x), (C = !0));
      }
    }
    (Nt(e, c),
      f.start(
        tt(c, f, p, e.shouldReduceMotion && Ta.has(c) ? { type: !1 } : m, e, C),
      ));
    let h = f.animation;
    h && d.push(h);
  }
  return (
    s &&
      Promise.all(d).then(() => {
        V.update(() => {
          s && h9(e, s);
        });
      }),
    d
  );
}
function lo(e, t, a = {}) {
  var o;
  let r = $e(
      e,
      t,
      a.type === "exit"
        ? (o = e.presenceContext) === null || o === void 0
          ? void 0
          : o.custom
        : void 0,
    ),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  a.transitionOverride && (i = a.transitionOverride);
  let l = r ? () => Promise.all(ro(e, r, a)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (d = 0) => {
            let {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return kn(e, t, u + d, c, f, a);
          }
        : () => Promise.resolve(),
    { when: n } = i;
  if (n) {
    let [d, u] = n === "beforeChildren" ? [l, s] : [s, l];
    return d().then(() => u());
  } else return Promise.all([l(), s(a.delay)]);
}
function kn(e, t, a = 0, o = 0, r = 1, i) {
  let l = [],
    s = (e.variantChildren.size - 1) * o,
    n = r === 1 ? (d = 0) => d * o : (d = 0) => s - d * o;
  return (
    Array.from(e.variantChildren)
      .sort(Bn)
      .forEach((d, u) => {
        (d.notify("AnimationStart", t),
          l.push(
            lo(d, t, { ...i, delay: a + n(u) }).then(() =>
              d.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(l)
  );
}
function Bn(e, t) {
  return e.sortNodePosition(t);
}
function rl(e, t, a = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    let r = t.map((i) => lo(e, i, a));
    o = Promise.all(r);
  } else if (typeof t == "string") o = lo(e, t, a);
  else {
    let r = typeof t == "function" ? $e(e, t, a.custom) : t;
    o = Promise.all(ro(e, r, a));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
var Tn = Tt.length;
function Ir(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let a = e.parent ? Ir(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (a.initial = e.props.initial), a);
  }
  let t = {};
  for (let a = 0; a < Tn; a++) {
    let o = Tt[a],
      r = e.props[o];
    (Me(r) || r === !1) && (t[o] = r);
  }
  return t;
}
var An = [...ha].reverse(),
  Zn = ha.length;
function Dn(e) {
  return (t) =>
    Promise.all(t.map(({ animation: a, options: o }) => rl(e, a, o)));
}
function il(e) {
  let t = Dn(e),
    a = ll(),
    o = !0,
    r = (n) => (d, u) => {
      var c;
      let f = $e(
        e,
        u,
        n === "exit"
          ? (c = e.presenceContext) === null || c === void 0
            ? void 0
            : c.custom
          : void 0,
      );
      if (f) {
        let { transition: p, transitionEnd: m, ...C } = f;
        d = { ...d, ...C, ...m };
      }
      return d;
    };
  function i(n) {
    t = n(e);
  }
  function l(n) {
    let { props: d } = e,
      u = Ir(e.parent) || {},
      c = [],
      f = new Set(),
      p = {},
      m = 1 / 0;
    for (let h = 0; h < Zn; h++) {
      let g = An[h],
        x = a[g],
        L = d[g] !== void 0 ? d[g] : u[g],
        v = Me(L),
        w = g === n ? x.isActive : null;
      w === !1 && (m = h);
      let I = L === u[g] && L !== d[g] && v;
      if (
        (I && o && e.manuallyAnimateOnMount && (I = !1),
        (x.protectedKeys = { ...p }),
        (!x.isActive && w === null) ||
          (!L && !x.prevProp) ||
          Fe(L) ||
          typeof L == "boolean")
      )
        continue;
      let R = On(x.prevProp, L),
        y = R || (g === n && x.isActive && !I && v) || (h > m && v),
        k = !1,
        j = Array.isArray(L) ? L : [L],
        ce = j.reduce(r(g), {});
      w === !1 && (ce = {});
      let { prevResolvedValues: P = {} } = x,
        ra = { ...P, ...ce },
        Ye = (U) => {
          ((y = !0),
            f.has(U) && ((k = !0), f.delete(U)),
            (x.needsAnimating[U] = !0));
          let ae = e.getValue(U);
          ae && (ae.liveStyle = !1);
        };
      for (let U in ra) {
        let ae = ce[U],
          ve = P[U];
        if (p.hasOwnProperty(U)) continue;
        let x1 = !1;
        (Zt(ae) && Zt(ve) ? (x1 = !Qo(ae, ve)) : (x1 = ae !== ve),
          x1
            ? ae != null
              ? Ye(U)
              : f.add(U)
            : ae !== void 0 && f.has(U)
              ? Ye(U)
              : (x.protectedKeys[U] = !0));
      }
      ((x.prevProp = L),
        (x.prevResolvedValues = ce),
        x.isActive && (p = { ...p, ...ce }),
        o && e.blockInitialAnimation && (y = !1),
        y &&
          (!(I && R) || k) &&
          c.push(...j.map((U) => ({ animation: U, options: { type: g } }))));
    }
    if (f.size) {
      let h = {};
      (f.forEach((g) => {
        let x = e.getBaseTarget(g),
          L = e.getValue(g);
        (L && (L.liveStyle = !0), (h[g] = x ?? null));
      }),
        c.push({ animation: h }));
    }
    let C = !!c.length;
    return (
      o &&
        (d.initial === !1 || d.initial === d.animate) &&
        !e.manuallyAnimateOnMount &&
        (C = !1),
      (o = !1),
      C ? t(c) : Promise.resolve()
    );
  }
  function s(n, d) {
    var u;
    if (a[n].isActive === d) return Promise.resolve();
    ((u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((f) => {
        var p;
        return (p = f.animationState) === null || p === void 0
          ? void 0
          : p.setActive(n, d);
      }),
      (a[n].isActive = d));
    let c = l(n);
    for (let f in a) a[f].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: l,
    setActive: s,
    setAnimateFunction: i,
    getState: () => a,
    reset: () => {
      ((a = ll()), (o = !0));
    },
  };
}
function On(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Qo(t, e) : !1;
}
function f1(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function ll() {
  return {
    animate: f1(!0),
    whileInView: f1(),
    whileHover: f1(),
    whileTap: f1(),
    whileDrag: f1(),
    whileFocus: f1(),
    exit: f1(),
  };
}
var _ = class {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
};
var io = class extends _ {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = il(t)));
  }
  updateAnimationControlsSubscription() {
    let { animate: t } = this.node.getProps();
    Fe(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    let { animate: t } = this.node.getProps(),
      { animate: a } = this.node.prevProps || {};
    t !== a && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
};
var Fn = 0,
  so = class extends _ {
    constructor() {
      (super(...arguments), (this.id = Fn++));
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: t, onExitComplete: a } = this.node.presenceContext,
        { isPresent: o } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === o) return;
      let r = this.node.animationState.setActive("exit", !t);
      a && !t && r.then(() => a(this.id));
    }
    mount() {
      let { register: t } = this.node.presenceContext || {};
      t && (this.unmount = t(this.id));
    }
    unmount() {}
  };
var sl = { animation: { Feature: io }, exit: { Feature: so } };
function He(e, t, a, o = { passive: !0 }) {
  return (e.addEventListener(t, a, o), () => e.removeEventListener(t, a));
}
function Pe(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var nl = (e) => (t) => i1(t) && e(t, Pe(t));
function Ke(e, t, a, o) {
  return He(e, t, nl(a), o);
}
var dl = (e, t) => Math.abs(e - t);
function ul(e, t) {
  let a = dl(e.x, t.x),
    o = dl(e.y, t.y);
  return Math.sqrt(a ** 2 + o ** 2);
}
var at = class {
  constructor(
    t,
    a,
    { transformPagePoint: o, contextWindow: r, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let c = yr(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          p = ul(c.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !p) return;
        let { point: m } = c,
          { timestamp: C } = $;
        this.history.push({ ...m, timestamp: C });
        let { onStart: h, onMove: g } = this.handlers;
        (f ||
          (h && h(this.lastMoveEvent, c),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, c));
      }),
      (this.handlePointerMove = (c, f) => {
        ((this.lastMoveEvent = c),
          (this.lastMoveEventInfo = br(f, this.transformPagePoint)),
          V.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (c, f) => {
        this.end();
        let { onEnd: p, onSessionEnd: m, resumeAnimation: C } = this.handlers;
        if (
          (this.dragSnapToOrigin && C && C(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        let h = yr(
          c.type === "pointercancel"
            ? this.lastMoveEventInfo
            : br(f, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && p && p(c, h), m && m(c, h));
      }),
      !i1(t))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = a),
      (this.transformPagePoint = o),
      (this.contextWindow = r || window));
    let l = Pe(t),
      s = br(l, this.transformPagePoint),
      { point: n } = s,
      { timestamp: d } = $;
    this.history = [{ ...n, timestamp: d }];
    let { onSessionStart: u } = a;
    (u && u(t, yr(s, this.history)),
      (this.removeListeners = xe(
        Ke(this.contextWindow, "pointermove", this.handlePointerMove),
        Ke(this.contextWindow, "pointerup", this.handlePointerUp),
        Ke(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), ie(this.updatePoint));
  }
};
function br(e, t) {
  return t ? { point: t(e.point) } : e;
}
function cl(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function yr({ point: e }, t) {
  return {
    point: e,
    delta: cl(e, fl(t)),
    offset: cl(e, $n(t)),
    velocity: jn(t, 0.1),
  };
}
function $n(e) {
  return e[0];
}
function fl(e) {
  return e[e.length - 1];
}
function jn(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let a = e.length - 1,
    o = null,
    r = fl(e);
  for (; a >= 0 && ((o = e[a]), !(r.timestamp - o.timestamp > F(t)));) a--;
  if (!o) return { x: 0, y: 0 };
  let i = G(r.timestamp - o.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  let l = { x: (r.x - o.x) / i, y: (r.y - o.y) / i };
  return (l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l);
}
var hl = 1e-4,
  qn = 1 - hl,
  Nn = 1 + hl,
  gl = 0.01,
  En = 0 - gl,
  Un = 0 + gl;
function K(e) {
  return e.max - e.min;
}
function xl(e, t, a) {
  return Math.abs(e - t) <= a;
}
function pl(e, t, a, o = 0.5) {
  ((e.origin = o),
    (e.originPoint = H(t.min, t.max, e.origin)),
    (e.scale = K(a) / K(t)),
    (e.translate = H(a.min, a.max, e.origin) - e.originPoint),
    ((e.scale >= qn && e.scale <= Nn) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= En && e.translate <= Un) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function ot(e, t, a, o) {
  (pl(e.x, t.x, a.x, o ? o.originX : void 0),
    pl(e.y, t.y, a.y, o ? o.originY : void 0));
}
function ml(e, t, a) {
  ((e.min = a.min + t.min), (e.max = e.min + K(t)));
}
function vl(e, t, a) {
  (ml(e.x, t.x, a.x), ml(e.y, t.y, a.y));
}
function Cl(e, t, a) {
  ((e.min = t.min - a.min), (e.max = e.min + K(t)));
}
function rt(e, t, a) {
  (Cl(e.x, t.x, a.x), Cl(e.y, t.y, a.y));
}
function yl(e, { min: t, max: a }, o) {
  return (
    t !== void 0 && e < t
      ? (e = o ? H(t, e, o.min) : Math.max(e, t))
      : a !== void 0 && e > a && (e = o ? H(a, e, o.max) : Math.min(e, a)),
    e
  );
}
function Ll(e, t, a) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: a !== void 0 ? e.max + a - (e.max - e.min) : void 0,
  };
}
function Ml(e, { top: t, left: a, bottom: o, right: r }) {
  return { x: Ll(e.x, a, r), y: Ll(e.y, t, o) };
}
function wl(e, t) {
  let a = t.min - e.min,
    o = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([a, o] = [o, a]),
    { min: a, max: o }
  );
}
function Sl(e, t) {
  return { x: wl(e.x, t.x), y: wl(e.y, t.y) };
}
function Vl(e, t) {
  let a = 0.5,
    o = K(e),
    r = K(t);
  return (
    r > o
      ? (a = le(t.min, t.max - o, e.min))
      : o > r && (a = le(e.min, e.max - r, t.min)),
    W(0, 1, a)
  );
}
function Rl(e, t) {
  let a = {};
  return (
    t.min !== void 0 && (a.min = t.min - e.min),
    t.max !== void 0 && (a.max = t.max - e.min),
    a
  );
}
var no = 0.35;
function Hl(e = no) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = no),
    { x: Il(e, "left", "right"), y: Il(e, "top", "bottom") }
  );
}
function Il(e, t, a) {
  return { min: bl(e, t), max: bl(e, a) };
}
function bl(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
var Pl = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  p1 = () => ({ x: Pl(), y: Pl() }),
  kl = () => ({ min: 0, max: 0 }),
  O = () => ({ x: kl(), y: kl() });
function te(e) {
  return [e("x"), e("y")];
}
function uo({ top: e, left: t, right: a, bottom: o }) {
  return { x: { min: t, max: a }, y: { min: e, max: o } };
}
function Bl({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Tl(e, t) {
  if (!t) return e;
  let a = t({ x: e.left, y: e.top }),
    o = t({ x: e.right, y: e.bottom });
  return { top: a.y, left: a.x, bottom: o.y, right: o.x };
}
function Mr(e) {
  return e === void 0 || e === 1;
}
function co({ scale: e, scaleX: t, scaleY: a }) {
  return !Mr(e) || !Mr(t) || !Mr(a);
}
function ke(e) {
  return (
    co(e) ||
    Sr(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Sr(e) {
  return Al(e.x) || Al(e.y);
}
function Al(e) {
  return e && e !== "0%";
}
function Wt(e, t, a) {
  let o = e - a,
    r = t * o;
  return a + r;
}
function Zl(e, t, a, o, r) {
  return (r !== void 0 && (e = Wt(e, r, o)), Wt(e, a, o) + t);
}
function Vr(e, t = 0, a = 1, o, r) {
  ((e.min = Zl(e.min, t, a, o, r)), (e.max = Zl(e.max, t, a, o, r)));
}
function Rr(e, { x: t, y: a }) {
  (Vr(e.x, t.translate, t.scale, t.originPoint),
    Vr(e.y, a.translate, a.scale, a.originPoint));
}
var Dl = 0.999999999999,
  Ol = 1.0000000000001;
function $l(e, t, a, o = !1) {
  let r = a.length;
  if (!r) return;
  t.x = t.y = 1;
  let i, l;
  for (let s = 0; s < r; s++) {
    ((i = a[s]), (l = i.projectionDelta));
    let { visualElement: n } = i.options;
    (n && n.props.style && n.props.style.display === "contents") ||
      (o &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        m1(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      l && ((t.x *= l.x.scale), (t.y *= l.y.scale), Rr(e, l)),
      o && ke(i.latestValues) && m1(e, i.latestValues));
  }
  (t.x < Ol && t.x > Dl && (t.x = 1), t.y < Ol && t.y > Dl && (t.y = 1));
}
function Xe(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Fl(e, t, a, o, r = 0.5) {
  let i = H(e.min, e.max, r);
  Vr(e, t, a, i, o);
}
function m1(e, t) {
  (Fl(e.x, t.x, t.scaleX, t.scale, t.originX),
    Fl(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Hr(e, t) {
  return uo(Tl(e.getBoundingClientRect(), t));
}
function jl(e, t, a) {
  let o = Hr(e, a),
    { scroll: r } = t;
  return (r && (Xe(o.x, r.offset.x), Xe(o.y, r.offset.y)), o);
}
var fo = ({ current: e }) => (e ? e.ownerDocument.defaultView : null);
var zn = new WeakMap(),
  mo = class {
    constructor(t) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = O()),
        (this.visualElement = t));
    }
    start(t, { snapToCursor: a = !1 } = {}) {
      let { presenceContext: o } = this.visualElement;
      if (o && o.isPresent === !1) return;
      let r = (u) => {
          let { dragSnapToOrigin: c } = this.getProps();
          (c ? this.pauseAnimation() : this.stopAnimation(),
            a && this.snapToCursor(Pe(u).point));
        },
        i = (u, c) => {
          let { drag: f, dragPropagation: p, onDragStart: m } = this.getProps();
          if (
            f &&
            !p &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = lr(f)),
            !this.openDragLock)
          )
            return;
          ((this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            te((h) => {
              let g = this.getAxisMotionValue(h).get() || 0;
              if (Y.test(g)) {
                let { projection: x } = this.visualElement;
                if (x && x.layout) {
                  let L = x.layout.layoutBox[h];
                  L && (g = K(L) * (parseFloat(g) / 100));
                }
              }
              this.originPoint[h] = g;
            }),
            m && V.postRender(() => m(u, c)),
            Nt(this.visualElement, "transform"));
          let { animationState: C } = this.visualElement;
          C && C.setActive("whileDrag", !0);
        },
        l = (u, c) => {
          let {
            dragPropagation: f,
            dragDirectionLock: p,
            onDirectionLock: m,
            onDrag: C,
          } = this.getProps();
          if (!f && !this.openDragLock) return;
          let { offset: h } = c;
          if (p && this.currentDirection === null) {
            ((this.currentDirection = _n(h)),
              this.currentDirection !== null && m && m(this.currentDirection));
            return;
          }
          (this.updateAxis("x", c.point, h),
            this.updateAxis("y", c.point, h),
            this.visualElement.render(),
            C && C(u, c));
        },
        s = (u, c) => this.stop(u, c),
        n = () =>
          te((u) => {
            var c;
            return (
              this.getAnimationState(u) === "paused" &&
              ((c = this.getAxisMotionValue(u).animation) === null ||
              c === void 0
                ? void 0
                : c.play())
            );
          }),
        { dragSnapToOrigin: d } = this.getProps();
      this.panSession = new at(
        t,
        {
          onSessionStart: r,
          onStart: i,
          onMove: l,
          onSessionEnd: s,
          resumeAnimation: n,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: d,
          contextWindow: fo(this.visualElement),
        },
      );
    }
    stop(t, a) {
      let o = this.isDragging;
      if ((this.cancel(), !o)) return;
      let { velocity: r } = a;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && V.postRender(() => i(t, a));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: t, animationState: a } = this.visualElement;
      (t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0));
      let { dragPropagation: o } = this.getProps();
      (!o &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        a && a.setActive("whileDrag", !1));
    }
    updateAxis(t, a, o) {
      let { drag: r } = this.getProps();
      if (!o || !po(t, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(t),
        l = this.originPoint[t] + o[t];
      (this.constraints &&
        this.constraints[t] &&
        (l = yl(l, this.constraints[t], this.elastic[t])),
        i.set(l));
    }
    resolveConstraints() {
      var t;
      let { dragConstraints: a, dragElastic: o } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (t = this.visualElement.projection) === null || t === void 0
              ? void 0
              : t.layout,
        i = this.constraints;
      (a && Se(a)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : a && r
          ? (this.constraints = Ml(r.layoutBox, a))
          : (this.constraints = !1),
        (this.elastic = Hl(o)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          te((l) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(l) &&
              (this.constraints[l] = Rl(r.layoutBox[l], this.constraints[l]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: t, onMeasureDragConstraints: a } = this.getProps();
      if (!t || !Se(t)) return !1;
      let o = t.current;
      pe(
        o !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = jl(o, r.root, this.visualElement.getTransformPagePoint()),
        l = Sl(r.layout.layoutBox, i);
      if (a) {
        let s = a(Bl(l));
        ((this.hasMutatedConstraints = !!s), s && (l = uo(s)));
      }
      return l;
    }
    startAnimation(t) {
      let {
          drag: a,
          dragMomentum: o,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: l,
          onDragTransitionEnd: s,
        } = this.getProps(),
        n = this.constraints || {},
        d = te((u) => {
          if (!po(u, a, this.currentDirection)) return;
          let c = (n && n[u]) || {};
          l && (c = { min: 0, max: 0 });
          let f = r ? 200 : 1e6,
            p = r ? 40 : 1e7,
            m = {
              type: "inertia",
              velocity: o ? t[u] : 0,
              bounceStiffness: f,
              bounceDamping: p,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(u, m);
        });
      return Promise.all(d).then(s);
    }
    startAxisValueAnimation(t, a) {
      let o = this.getAxisMotionValue(t);
      return (
        Nt(this.visualElement, t),
        o.start(tt(t, o, 0, a, this.visualElement, !1))
      );
    }
    stopAnimation() {
      te((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      te((t) => {
        var a;
        return (a = this.getAxisMotionValue(t).animation) === null ||
          a === void 0
          ? void 0
          : a.pause();
      });
    }
    getAnimationState(t) {
      var a;
      return (a = this.getAxisMotionValue(t).animation) === null || a === void 0
        ? void 0
        : a.state;
    }
    getAxisMotionValue(t) {
      let a = `_drag${t.toUpperCase()}`,
        o = this.visualElement.getProps(),
        r = o[a];
      return (
        r ||
        this.visualElement.getValue(t, (o.initial ? o.initial[t] : void 0) || 0)
      );
    }
    snapToCursor(t) {
      te((a) => {
        let { drag: o } = this.getProps();
        if (!po(a, o, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(a);
        if (r && r.layout) {
          let { min: l, max: s } = r.layout.layoutBox[a];
          i.set(t[a] - H(l, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: t, dragConstraints: a } = this.getProps(),
        { projection: o } = this.visualElement;
      if (!Se(a) || !o || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      te((l) => {
        let s = this.getAxisMotionValue(l);
        if (s && this.constraints !== !1) {
          let n = s.get();
          r[l] = Vl({ min: n, max: n }, this.constraints[l]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        te((l) => {
          if (!po(l, t, null)) return;
          let s = this.getAxisMotionValue(l),
            { min: n, max: d } = this.constraints[l];
          s.set(H(n, d, r[l]));
        }));
    }
    addListeners() {
      if (!this.visualElement.current) return;
      zn.set(this.visualElement, this);
      let t = this.visualElement.current,
        a = Ke(t, "pointerdown", (n) => {
          let { drag: d, dragListener: u = !0 } = this.getProps();
          d && u && this.start(n);
        }),
        o = () => {
          let { dragConstraints: n } = this.getProps();
          Se(n) &&
            n.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener("measure", o);
      (r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        V.read(o));
      let l = He(window, "resize", () => this.scalePositionWithinConstraints()),
        s = r.addEventListener(
          "didUpdate",
          ({ delta: n, hasLayoutChanged: d }) => {
            this.isDragging &&
              d &&
              (te((u) => {
                let c = this.getAxisMotionValue(u);
                c &&
                  ((this.originPoint[u] += n[u].translate),
                  c.set(c.get() + n[u].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (l(), a(), i(), s && s());
      };
    }
    getProps() {
      let t = this.visualElement.getProps(),
        {
          drag: a = !1,
          dragDirectionLock: o = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: l = no,
          dragMomentum: s = !0,
        } = t;
      return {
        ...t,
        drag: a,
        dragDirectionLock: o,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: l,
        dragMomentum: s,
      };
    }
  };
function po(e, t, a) {
  return (t === !0 || t === e) && (a === null || a === e);
}
function _n(e, t = 10) {
  let a = null;
  return (Math.abs(e.y) > t ? (a = "y") : Math.abs(e.x) > t && (a = "x"), a);
}
var Co = class extends _ {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = B),
      (this.removeListeners = B),
      (this.controls = new mo(t)));
  }
  mount() {
    let { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || B));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
};
var ql = (e) => (t, a) => {
    e && V.postRender(() => e(t, a));
  },
  ho = class extends _ {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = B));
    }
    onPointerDown(t) {
      this.session = new at(t, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: fo(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: t,
        onPanStart: a,
        onPan: o,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: ql(t),
        onStart: ql(a),
        onMove: o,
        onEnd: (i, l) => {
          (delete this.session, r && V.postRender(() => r(i, l)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Ke(
        this.node.current,
        "pointerdown",
        (t) => this.onPointerDown(t),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  };
import { jsx as Gn } from "react/jsx-runtime";
import { useContext as Ul, Component as Wn } from "react";
var lt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Nl(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var it = {
  correct: (e, t) => {
    if (!t.target) return e;
    if (typeof e == "string")
      if (b.test(e)) e = parseFloat(e);
      else return e;
    let a = Nl(e, t.target.x),
      o = Nl(e, t.target.y);
    return `${a}% ${o}%`;
  },
};
var El = {
  correct: (e, { treeScale: t, projectionDelta: a }) => {
    let o = e,
      r = J.parse(e);
    if (r.length > 5) return o;
    let i = J.createTransformer(e),
      l = typeof r[0] != "number" ? 1 : 0,
      s = a.x.scale * t.x,
      n = a.y.scale * t.y;
    ((r[0 + l] /= s), (r[1 + l] /= n));
    let d = H(s, n, 0.5);
    return (
      typeof r[2 + l] == "number" && (r[2 + l] /= d),
      typeof r[3 + l] == "number" && (r[3 + l] /= d),
      i(r)
    );
  },
};
var Pr = class extends Wn {
  componentDidMount() {
    let {
        visualElement: t,
        layoutGroup: a,
        switchLayoutGroup: o,
        layoutId: r,
      } = this.props,
      { projection: i } = t;
    (J2(Kn),
      i &&
        (a.group && a.group.add(i),
        o && o.register && r && o.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (lt.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    let {
        layoutDependency: a,
        visualElement: o,
        drag: r,
        isPresent: i,
      } = this.props,
      l = o.projection;
    return (
      l &&
        ((l.isPresent = i),
        r || t.layoutDependency !== a || a === void 0
          ? l.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? l.promote()
            : l.relegate() ||
              V.postRender(() => {
                let s = l.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    let { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      P1.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    let { visualElement: t, layoutGroup: a, switchLayoutGroup: o } = this.props,
      { projection: r } = t;
    r &&
      (r.scheduleCheckAfterUnmount(),
      a && a.group && a.group.remove(r),
      o && o.deregister && o.deregister(r));
  }
  safeToRemove() {
    let { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
};
function go(e) {
  let [t, a] = ua(),
    o = Ul(y1);
  return Gn(Pr, {
    ...e,
    layoutGroup: o,
    switchLayoutGroup: Ul(va),
    isPresent: t,
    safeToRemove: a,
  });
}
var Kn = {
  borderRadius: {
    ...it,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: it,
  borderTopRightRadius: it,
  borderBottomLeftRadius: it,
  borderBottomRightRadius: it,
  boxShadow: El,
};
function zl(e, t, a) {
  let o = T(e) ? e : Re(e);
  return (o.start(tt("", o, t, a)), o.animation);
}
function _l(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
var Gl = (e, t) => e.depth - t.depth;
var xo = class {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (G1(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (W1(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(Gl),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
};
function Wl(e, t) {
  let a = X.now(),
    o = ({ timestamp: r }) => {
      let i = r - a;
      i >= t && (ie(o), e(i - t));
    };
  return (V.read(o, !0), () => ie(o));
}
var Yl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Xn = Yl.length,
  Kl = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Xl = (e) => typeof e == "number" || b.test(e);
function Jl(e, t, a, o, r, i) {
  r
    ? ((e.opacity = H(0, a.opacity !== void 0 ? a.opacity : 1, Qn(o))),
      (e.opacityExit = H(t.opacity !== void 0 ? t.opacity : 1, 0, Yn(o))))
    : i &&
      (e.opacity = H(
        t.opacity !== void 0 ? t.opacity : 1,
        a.opacity !== void 0 ? a.opacity : 1,
        o,
      ));
  for (let l = 0; l < Xn; l++) {
    let s = `border${Yl[l]}Radius`,
      n = Ql(t, s),
      d = Ql(a, s);
    if (n === void 0 && d === void 0) continue;
    (n || (n = 0),
      d || (d = 0),
      n === 0 || d === 0 || Xl(n) === Xl(d)
        ? ((e[s] = Math.max(H(Kl(n), Kl(d), o), 0)),
          (Y.test(d) || Y.test(n)) && (e[s] += "%"))
        : (e[s] = d));
  }
  (t.rotate || a.rotate) && (e.rotate = H(t.rotate || 0, a.rotate || 0, o));
}
function Ql(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
var Qn = e0(0, 0.5, Ea),
  Yn = e0(0.5, 0.95, B);
function e0(e, t, a) {
  return (o) => (o < e ? 0 : o > t ? 1 : a(le(e, t, o)));
}
function t0(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function ne(e, t) {
  (t0(e.x, t.x), t0(e.y, t.y));
}
function kr(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function a0(e, t, a, o, r) {
  return (
    (e -= t),
    (e = Wt(e, 1 / a, o)),
    r !== void 0 && (e = Wt(e, 1 / r, o)),
    e
  );
}
function Jn(e, t = 0, a = 1, o = 0.5, r, i = e, l = e) {
  if (
    (Y.test(t) && ((t = parseFloat(t)), (t = H(l.min, l.max, t / 100) - l.min)),
    typeof t != "number")
  )
    return;
  let s = H(i.min, i.max, o);
  (e === i && (s -= t),
    (e.min = a0(e.min, t, a, s, r)),
    (e.max = a0(e.max, t, a, s, r)));
}
function o0(e, t, [a, o, r], i, l) {
  Jn(e, t[a], t[o], t[r], t.scale, i, l);
}
var e3 = ["x", "scaleX", "originX"],
  t3 = ["y", "scaleY", "originY"];
function Br(e, t, a, o) {
  (o0(e.x, t, e3, a ? a.x : void 0, o ? o.x : void 0),
    o0(e.y, t, t3, a ? a.y : void 0, o ? o.y : void 0));
}
function r0(e) {
  return e.translate === 0 && e.scale === 1;
}
function Tr(e) {
  return r0(e.x) && r0(e.y);
}
function l0(e, t) {
  return e.min === t.min && e.max === t.max;
}
function s0(e, t) {
  return l0(e.x, t.x) && l0(e.y, t.y);
}
function i0(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Ar(e, t) {
  return i0(e.x, t.x) && i0(e.y, t.y);
}
function Zr(e) {
  return K(e.x) / K(e.y);
}
function Dr(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
var vo = class {
  constructor() {
    this.members = [];
  }
  add(t) {
    (G1(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (W1(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      let a = this.members[this.members.length - 1];
      a && this.promote(a);
    }
  }
  relegate(t) {
    let a = this.members.findIndex((r) => t === r);
    if (a === 0) return !1;
    let o;
    for (let r = a; r >= 0; r--) {
      let i = this.members[r];
      if (i.isPresent !== !1) {
        o = i;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(t, a) {
    let o = this.lead;
    if (t !== o && ((this.prevLead = o), (this.lead = t), t.show(), o)) {
      (o.instance && o.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = o),
        a && (t.resumeFrom.preserveOpacity = !0),
        o.snapshot &&
          ((t.snapshot = o.snapshot),
          (t.snapshot.latestValues = o.animationValues || o.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      let { crossfade: r } = t.options;
      r === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      let { options: a, resumingFrom: o } = t;
      (a.onExitComplete && a.onExitComplete(),
        o && o.options.onExitComplete && o.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function n0(e, t, a) {
  let o = "",
    r = e.x.translate / t.x,
    i = e.y.translate / t.y,
    l = a?.z || 0;
  if (
    ((r || i || l) && (o = `translate3d(${r}px, ${i}px, ${l}px) `),
    (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `),
    a)
  ) {
    let {
      transformPerspective: d,
      rotate: u,
      rotateX: c,
      rotateY: f,
      skewX: p,
      skewY: m,
    } = a;
    (d && (o = `perspective(${d}px) ${o}`),
      u && (o += `rotate(${u}deg) `),
      c && (o += `rotateX(${c}deg) `),
      f && (o += `rotateY(${f}deg) `),
      p && (o += `skewX(${p}deg) `),
      m && (o += `skewY(${m}deg) `));
  }
  let s = e.x.scale * t.x,
    n = e.y.scale * t.y;
  return ((s !== 1 || n !== 1) && (o += `scale(${s}, ${n})`), o || "none");
}
var C1 = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Kt = typeof window < "u" && window.MotionDebug !== void 0,
  Or = ["", "X", "Y", "Z"],
  a3 = { visibility: "hidden" },
  d0 = 1e3,
  o3 = 0;
function Fr(e, t, a, o) {
  let { latestValues: r } = t;
  r[e] && ((a[e] = r[e]), t.setStaticValue(e, 0), o && (o[e] = 0));
}
function g0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let a = Da(t);
  if (window.MotionHasOptimisedAnimation(a, "transform")) {
    let { layout: r, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(a, "transform", V, !(r || i));
  }
  let { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && g0(o);
}
function Lo({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: a,
  checkIsScrollRoot: o,
  resetTransform: r,
}) {
  return class {
    constructor(l = {}, s = t?.()) {
      ((this.id = o3++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Kt &&
              (C1.totalNodes =
                C1.resolvedTargetDeltas =
                C1.recalculatedProjection =
                  0),
            this.nodes.forEach(i3),
            this.nodes.forEach(c3),
            this.nodes.forEach(f3),
            this.nodes.forEach(s3),
            Kt && window.MotionDebug.record(C1));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = l),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0));
      for (let n = 0; n < this.path.length; n++)
        this.path[n].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xo());
    }
    addEventListener(l, s) {
      return (
        this.eventHandlers.has(l) || this.eventHandlers.set(l, new Ee()),
        this.eventHandlers.get(l).add(s)
      );
    }
    notifyListeners(l, ...s) {
      let n = this.eventHandlers.get(l);
      n && n.notify(...s);
    }
    hasListeners(l) {
      return this.eventHandlers.has(l);
    }
    mount(l, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = _l(l)), (this.instance = l));
      let { layoutId: n, layout: d, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(l),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (d || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          f = () => (this.root.updateBlockedByResize = !1);
        e(l, () => {
          ((this.root.updateBlockedByResize = !0),
            c && c(),
            (c = Wl(f, 250)),
            lt.hasAnimatedSinceResize &&
              ((lt.hasAnimatedSinceResize = !1), this.nodes.forEach(c0)));
        });
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          u &&
          (n || d) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: p,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let C = this.options.transition || u.getDefaultTransition() || g3,
                { onLayoutAnimationStart: h, onLayoutAnimationComplete: g } =
                  u.getProps(),
                x = !this.targetLayout || !Ar(this.targetLayout, m) || p,
                L = !f && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                L ||
                (f && (x || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(c, L));
                let v = { ...je(C, "layout"), onPlay: h, onComplete: g };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((v.delay = 0), (v.type = !1)),
                  this.startAnimation(v));
              } else
                (f || c0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = m;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let l = this.getStack();
      (l && l.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        ie(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(p3),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: l } = this.options;
      return l && l.getProps().transformTemplate;
    }
    willUpdate(l = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          g0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let c = this.path[u];
        ((c.shouldResetTransform = !0),
          c.updateScroll("snapshot"),
          c.options.layoutRoot && c.willUpdate(!1));
      }
      let { layoutId: s, layout: n } = this.options;
      if (s === void 0 && !n) return;
      let d = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = d
        ? d(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        l && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(u0));
        return;
      }
      (this.isUpdating || this.nodes.forEach(d3),
        (this.isUpdating = !1),
        this.nodes.forEach(u3),
        this.nodes.forEach(r3),
        this.nodes.forEach(l3),
        this.clearAllSnapshots());
      let s = X.now();
      (($.delta = W(0, 1e3 / 60, s - $.timestamp)),
        ($.timestamp = s),
        ($.isProcessing = !0),
        ma.update.process($),
        ma.preRender.process($),
        ma.render.process($),
        ($.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), P1.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(n3), this.sharedNodes.forEach(m3));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        V.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let n = 0; n < this.path.length; n++) this.path[n].updateScroll();
      let l = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = O()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      let { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          l ? l.layoutBox : void 0,
        );
    }
    updateScroll(l = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === l &&
          (s = !1),
        s)
      ) {
        let n = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: l,
          isRoot: n,
          offset: a(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : n,
        };
      }
    }
    resetTransform() {
      if (!r) return;
      let l =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        s = this.projectionDelta && !Tr(this.projectionDelta),
        n = this.getTransformTemplate(),
        d = n ? n(this.latestValues, "") : void 0,
        u = d !== this.prevTransformTemplateValue;
      l &&
        (s || ke(this.latestValues) || u) &&
        (r(this.instance, d),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(l = !0) {
      let s = this.measurePageBox(),
        n = this.removeElementScroll(s);
      return (
        l && (n = this.removeTransform(n)),
        x3(n),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var l;
      let { visualElement: s } = this.options;
      if (!s) return O();
      let n = s.measureViewportBox();
      if (!(
        ((l = this.scroll) === null || l === void 0 ? void 0 : l.wasRoot) ||
        this.path.some(v3)
      )) {
        let { scroll: u } = this.root;
        u && (Xe(n.x, u.offset.x), Xe(n.y, u.offset.y));
      }
      return n;
    }
    removeElementScroll(l) {
      var s;
      let n = O();
      if (
        (ne(n, l), !((s = this.scroll) === null || s === void 0) && s.wasRoot)
      )
        return n;
      for (let d = 0; d < this.path.length; d++) {
        let u = this.path[d],
          { scroll: c, options: f } = u;
        u !== this.root &&
          c &&
          f.layoutScroll &&
          (c.wasRoot && ne(n, l), Xe(n.x, c.offset.x), Xe(n.y, c.offset.y));
      }
      return n;
    }
    applyTransform(l, s = !1) {
      let n = O();
      ne(n, l);
      for (let d = 0; d < this.path.length; d++) {
        let u = this.path[d];
        (!s &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          m1(n, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          ke(u.latestValues) && m1(n, u.latestValues));
      }
      return (ke(this.latestValues) && m1(n, this.latestValues), n);
    }
    removeTransform(l) {
      let s = O();
      ne(s, l);
      for (let n = 0; n < this.path.length; n++) {
        let d = this.path[n];
        if (!d.instance || !ke(d.latestValues)) continue;
        co(d.latestValues) && d.updateSnapshot();
        let u = O(),
          c = d.measurePageBox();
        (ne(u, c),
          Br(s, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, u));
      }
      return (ke(this.latestValues) && Br(s, this.latestValues), s);
    }
    setTargetDelta(l) {
      ((this.targetDelta = l),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(l) {
      this.options = {
        ...this.options,
        ...l,
        crossfade: l.crossfade !== void 0 ? l.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== $.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(l = !1) {
      var s;
      let n = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = n.isSharedProjectionDirty));
      let d = !!this.resumingFrom || this !== n;
      if (!(
        l ||
        (d && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        (!((s = this.parent) === null || s === void 0) &&
          s.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      let { layout: c, layoutId: f } = this.options;
      if (!(!this.layout || !(c || f))) {
        if (
          ((this.resolvedRelativeTargetAt = $.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = O()),
              (this.relativeTargetOrigin = O()),
              rt(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox,
              ),
              ne(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = O()), (this.targetWithTransforms = O())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                vl(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : ne(this.target, this.layout.layoutBox),
                  Rr(this.target, this.targetDelta))
                : ne(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = O()),
                (this.relativeTargetOrigin = O()),
                rt(this.relativeTargetOrigin, this.target, p.target),
                ne(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Kt && C1.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        co(this.parent.latestValues) ||
        Sr(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var l;
      let s = this.getLead(),
        n = !!this.resumingFrom || this !== s,
        d = !0;
      if (
        ((this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty)) &&
          (d = !1),
        n &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (d = !1),
        this.resolvedRelativeTargetAt === $.timestamp && (d = !1),
        d)
      )
        return;
      let { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      ne(this.layoutCorrected, this.layout.layoutBox);
      let f = this.treeScale.x,
        p = this.treeScale.y;
      ($l(this.layoutCorrected, this.treeScale, this.path, n),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = O())));
      let { target: m } = s;
      if (!m) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (kr(this.prevProjectionDelta.x, this.projectionDelta.x),
          kr(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ot(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== p ||
          !Dr(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Dr(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        Kt && C1.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(l = !0) {
      var s;
      if (
        ((s = this.options.visualElement) === null ||
          s === void 0 ||
          s.scheduleRender(),
        l)
      ) {
        let n = this.getStack();
        n && n.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = p1()),
        (this.projectionDelta = p1()),
        (this.projectionDeltaWithTransform = p1()));
    }
    setAnimationOrigin(l, s = !1) {
      let n = this.snapshot,
        d = n ? n.latestValues : {},
        u = { ...this.latestValues },
        c = p1();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s));
      let f = O(),
        p = n ? n.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        C = p !== m,
        h = this.getStack(),
        g = !h || h.members.length <= 1,
        x = !!(C && !g && this.options.crossfade === !0 && !this.path.some(h3));
      this.animationProgress = 0;
      let L;
      ((this.mixTargetDelta = (v) => {
        let w = v / 1e3;
        (f0(c.x, l.x, w),
          f0(c.y, l.y, w),
          this.setTargetDelta(c),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (rt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            C3(this.relativeTarget, this.relativeTargetOrigin, f, w),
            L && s0(this.relativeTarget, L) && (this.isProjectionDirty = !1),
            L || (L = O()),
            ne(L, this.relativeTarget)),
          C &&
            ((this.animationValues = u), Jl(u, d, this.latestValues, w, x, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(l) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (ie(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = V.update(() => {
          ((lt.hasAnimatedSinceResize = !0),
            (this.currentAnimation = zl(0, d0, {
              ...l,
              onUpdate: (s) => {
                (this.mixTargetDelta(s), l.onUpdate && l.onUpdate(s));
              },
              onComplete: () => {
                (l.onComplete && l.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let l = this.getStack();
      (l && l.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(d0),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let l = this.getLead(),
        { targetWithTransforms: s, target: n, layout: d, latestValues: u } = l;
      if (!(!s || !n || !d)) {
        if (
          this !== l &&
          this.layout &&
          d &&
          x0(this.options.animationType, this.layout.layoutBox, d.layoutBox)
        ) {
          n = this.target || O();
          let c = K(this.layout.layoutBox.x);
          ((n.x.min = l.target.x.min), (n.x.max = n.x.min + c));
          let f = K(this.layout.layoutBox.y);
          ((n.y.min = l.target.y.min), (n.y.max = n.y.min + f));
        }
        (ne(s, n),
          m1(s, u),
          ot(this.projectionDeltaWithTransform, this.layoutCorrected, s, u));
      }
    }
    registerSharedNode(l, s) {
      (this.sharedNodes.has(l) || this.sharedNodes.set(l, new vo()),
        this.sharedNodes.get(l).add(s));
      let d = s.options.initialPromotionConfig;
      s.promote({
        transition: d ? d.transition : void 0,
        preserveFollowOpacity:
          d && d.shouldPreserveFollowOpacity
            ? d.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      let l = this.getStack();
      return l ? l.lead === this : !0;
    }
    getLead() {
      var l;
      let { layoutId: s } = this.options;
      return s
        ? ((l = this.getStack()) === null || l === void 0 ? void 0 : l.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var l;
      let { layoutId: s } = this.options;
      return s
        ? (l = this.getStack()) === null || l === void 0
          ? void 0
          : l.prevLead
        : void 0;
    }
    getStack() {
      let { layoutId: l } = this.options;
      if (l) return this.root.sharedNodes.get(l);
    }
    promote({ needsReset: l, transition: s, preserveFollowOpacity: n } = {}) {
      let d = this.getStack();
      (d && d.promote(this, n),
        l && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s }));
    }
    relegate() {
      let l = this.getStack();
      return l ? l.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: l } = this.options;
      if (!l) return;
      let s = !1,
        { latestValues: n } = l;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (s = !0),
        !s)
      )
        return;
      let d = {};
      n.z && Fr("z", l, d, this.animationValues);
      for (let u = 0; u < Or.length; u++)
        (Fr(`rotate${Or[u]}`, l, d, this.animationValues),
          Fr(`skew${Or[u]}`, l, d, this.animationValues));
      l.render();
      for (let u in d)
        (l.setStaticValue(u, d[u]),
          this.animationValues && (this.animationValues[u] = d[u]));
      l.scheduleRender();
    }
    getProjectionStyles(l) {
      var s, n;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return a3;
      let d = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (d.opacity = ""),
          (d.pointerEvents = T1(l?.pointerEvents) || ""),
          (d.transform = u ? u(this.latestValues, "") : "none"),
          d
        );
      let c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        let C = {};
        return (
          this.options.layoutId &&
            ((C.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (C.pointerEvents = T1(l?.pointerEvents) || "")),
          this.hasProjected &&
            !ke(this.latestValues) &&
            ((C.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          C
        );
      }
      let f = c.animationValues || c.latestValues;
      (this.applyTransformsToTarget(),
        (d.transform = n0(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        u && (d.transform = u(f, d.transform)));
      let { x: p, y: m } = this.projectionDelta;
      ((d.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`),
        c.animationValues
          ? (d.opacity =
              c === this
                ? (n =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && n !== void 0
                  ? n
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (d.opacity =
              c === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0));
      for (let C in j1) {
        if (f[C] === void 0) continue;
        let { correct: h, applyTo: g } = j1[C],
          x = d.transform === "none" ? f[C] : h(f[C], c);
        if (g) {
          let L = g.length;
          for (let v = 0; v < L; v++) d[g[v]] = x;
        } else d[C] = x;
      }
      return (
        this.options.layoutId &&
          (d.pointerEvents = c === this ? T1(l?.pointerEvents) || "" : "none"),
        d
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((l) => {
        var s;
        return (s = l.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(u0),
        this.root.sharedNodes.clear());
    }
  };
}
function r3(e) {
  e.updateLayout();
}
function l3(e) {
  var t;
  let a =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
    let { layoutBox: o, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      l = a.source !== e.layout.source;
    i === "size"
      ? te((c) => {
          let f = l ? a.measuredBox[c] : a.layoutBox[c],
            p = K(f);
          ((f.min = o[c].min), (f.max = f.min + p));
        })
      : x0(i, a.layoutBox, o) &&
        te((c) => {
          let f = l ? a.measuredBox[c] : a.layoutBox[c],
            p = K(o[c]);
          ((f.max = f.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[c].max = e.relativeTarget[c].min + p)));
        });
    let s = p1();
    ot(s, o, a.layoutBox);
    let n = p1();
    l ? ot(n, e.applyTransform(r, !0), a.measuredBox) : ot(n, o, a.layoutBox);
    let d = !Tr(s),
      u = !1;
    if (!e.resumeFrom) {
      let c = e.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        let { snapshot: f, layout: p } = c;
        if (f && p) {
          let m = O();
          rt(m, a.layoutBox, f.layoutBox);
          let C = O();
          (rt(C, o, p.layoutBox),
            Ar(m, C) || (u = !0),
            c.options.layoutRoot &&
              ((e.relativeTarget = C),
              (e.relativeTargetOrigin = m),
              (e.relativeParent = c)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: o,
      snapshot: a,
      delta: n,
      layoutDelta: s,
      hasLayoutChanged: d,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    let { onExitComplete: o } = e.options;
    o && o();
  }
  e.options.transition = void 0;
}
function i3(e) {
  (Kt && C1.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function s3(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function n3(e) {
  e.clearSnapshot();
}
function u0(e) {
  e.clearMeasurements();
}
function d3(e) {
  e.isLayoutDirty = !1;
}
function u3(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function c0(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function c3(e) {
  e.resolveTargetDelta();
}
function f3(e) {
  e.calcProjection();
}
function p3(e) {
  e.resetSkewAndRotation();
}
function m3(e) {
  e.removeLeadSnapshot();
}
function f0(e, t, a) {
  ((e.translate = H(t.translate, 0, a)),
    (e.scale = H(t.scale, 1, a)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function p0(e, t, a, o) {
  ((e.min = H(t.min, a.min, o)), (e.max = H(t.max, a.max, o)));
}
function C3(e, t, a, o) {
  (p0(e.x, t.x, a.x, o), p0(e.y, t.y, a.y, o));
}
function h3(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var g3 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  m0 = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  C0 = m0("applewebkit/") && !m0("chrome/") ? Math.round : B;
function h0(e) {
  ((e.min = C0(e.min)), (e.max = C0(e.max)));
}
function x3(e) {
  (h0(e.x), h0(e.y));
}
function x0(e, t, a) {
  return (
    e === "position" || (e === "preserve-aspect" && !xl(Zr(t), Zr(a), 0.2))
  );
}
function v3(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
var v0 = Lo({
  attachResizeListener: (e, t) => He(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop,
  }),
  checkIsScrollRoot: () => !0,
});
var $r = { current: void 0 },
  wo = Lo({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!$r.current) {
        let e = new v0({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), ($r.current = e));
      }
      return $r.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  });
var L0 = {
  pan: { Feature: ho },
  drag: { Feature: Co, ProjectionNode: wo, MeasureLayout: go },
};
function w0(e, t, a) {
  let { props: o } = e;
  e.animationState &&
    o.whileHover &&
    e.animationState.setActive("whileHover", a === "Start");
  let r = "onHover" + a,
    i = o[r];
  i && V.postRender(() => i(t, Pe(t)));
}
var Io = class extends _ {
  mount() {
    let { current: t } = this.node;
    t &&
      (this.unmount = ar(
        t,
        (a) => (w0(this.node, a, "Start"), (o) => w0(this.node, o, "End")),
      ));
  }
  unmount() {}
};
var bo = class extends _ {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = xe(
      He(this.node.current, "focus", () => this.onFocus()),
      He(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
};
function I0(e, t, a) {
  let { props: o } = e;
  e.animationState &&
    o.whileTap &&
    e.animationState.setActive("whileTap", a === "Start");
  let r = "onTap" + (a === "End" ? "" : a),
    i = o[r];
  i && V.postRender(() => i(t, Pe(t)));
}
var yo = class extends _ {
  mount() {
    let { current: t } = this.node;
    t &&
      (this.unmount = rr(
        t,
        (a) => (
          I0(this.node, a, "Start"),
          (o, { success: r }) => I0(this.node, o, r ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
};
var qr = new WeakMap(),
  jr = new WeakMap(),
  L3 = (e) => {
    let t = qr.get(e.target);
    t && t(e);
  },
  w3 = (e) => {
    e.forEach(L3);
  };
function I3({ root: e, ...t }) {
  let a = e || document;
  jr.has(a) || jr.set(a, {});
  let o = jr.get(a),
    r = JSON.stringify(t);
  return (
    o[r] || (o[r] = new IntersectionObserver(w3, { root: e, ...t })),
    o[r]
  );
}
function b0(e, t, a) {
  let o = I3(t);
  return (
    qr.set(e, a),
    o.observe(e),
    () => {
      (qr.delete(e), o.unobserve(e));
    }
  );
}
var b3 = { some: 0, all: 1 },
  Mo = class extends _ {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.unmount();
      let { viewport: t = {} } = this.node.getProps(),
        { root: a, margin: o, amount: r = "some", once: i } = t,
        l = {
          root: a ? a.current : void 0,
          rootMargin: o,
          threshold: typeof r == "number" ? r : b3[r],
        },
        s = (n) => {
          let { isIntersecting: d } = n;
          if (
            this.isInView === d ||
            ((this.isInView = d), i && !d && this.hasEnteredView)
          )
            return;
          (d && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", d));
          let { onViewportEnter: u, onViewportLeave: c } = this.node.getProps(),
            f = d ? u : c;
          f && f(n);
        };
      return b0(this.node.current, l, s);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: t, prevProps: a } = this.node;
      ["amount", "margin", "root"].some(y3(t, a)) && this.startObserver();
    }
    unmount() {}
  };
function y3({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (a) => e[a] !== t[a];
}
var y0 = {
  inView: { Feature: Mo },
  tap: { Feature: yo },
  focus: { Feature: bo },
  hover: { Feature: Io },
};
var M0 = { layout: { ProjectionNode: wo, MeasureLayout: go } };
import { Fragment as V3 } from "react";
var Xt = { current: null },
  So = { current: !1 };
function S0() {
  if (((So.current = !0), !!V1))
    if (window.matchMedia) {
      let e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Xt.current = e.matches);
      (e.addListener(t), t());
    } else Xt.current = !1;
}
var M3 = [...pr, N, J],
  V0 = (e) => M3.find(Ka(e));
var Nr = new WeakMap();
function R0(e, t, a) {
  for (let o in t) {
    let r = t[o],
      i = a[o];
    if (T(r)) e.addValue(o, r);
    else if (T(i)) e.addValue(o, Re(r, { owner: e }));
    else if (i !== r)
      if (e.hasValue(o)) {
        let l = e.getValue(o);
        l.liveStyle === !0 ? l.jump(r) : l.hasAnimated || l.set(r);
      } else {
        let l = e.getStaticValue(o);
        e.addValue(o, Re(l !== void 0 ? l : r, { owner: e }));
      }
  }
  for (let o in a) t[o] === void 0 && e.removeValue(o);
  return t;
}
var H0 = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Vo = class {
    scrapeMotionValuesFromProps(t, a, o) {
      return {};
    }
    constructor(
      {
        parent: t,
        props: a,
        presenceContext: o,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: l,
      },
      s = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Ge),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let p = X.now();
          this.renderScheduledAt < p &&
            ((this.renderScheduledAt = p), V.render(this.render, !1, !0));
        }));
      let { latestValues: n, renderState: d, onUpdate: u } = l;
      ((this.onUpdate = u),
        (this.latestValues = n),
        (this.baseTarget = { ...n }),
        (this.initialValues = a.initial ? { ...n } : {}),
        (this.renderState = d),
        (this.parent = t),
        (this.props = a),
        (this.presenceContext = o),
        (this.depth = t ? t.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = s),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = l1(a)),
        (this.isVariantNode = ga(a)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(t && t.current)));
      let { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
        a,
        {},
        this,
      );
      for (let p in f) {
        let m = f[p];
        n[p] !== void 0 && T(m) && m.set(n[p], !1);
      }
    }
    mount(t) {
      ((this.current = t),
        Nr.set(t, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(t),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((a, o) => this.bindToMotionValue(o, a)),
        So.current || S0(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
              ? !0
              : Xt.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext));
    }
    unmount() {
      (Nr.delete(this.current),
        this.projection && this.projection.unmount(),
        ie(this.notifyUpdate),
        ie(this.render),
        this.valueSubscriptions.forEach((t) => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this));
      for (let t in this.events) this.events[t].clear();
      for (let t in this.features) {
        let a = this.features[t];
        a && (a.unmount(), (a.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(t, a) {
      this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
      let o = ee.has(t),
        r = a.on("change", (s) => {
          ((this.latestValues[t] = s),
            this.props.onUpdate && V.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0));
        }),
        i = a.on("renderRequest", this.scheduleRender),
        l;
      (window.MotionCheckAppearSync &&
        (l = window.MotionCheckAppearSync(this, t, a)),
        this.valueSubscriptions.set(t, () => {
          (r(), i(), l && l(), a.owner && a.stop());
        }));
    }
    sortNodePosition(t) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== t.type
        ? 0
        : this.sortInstanceNodePosition(this.current, t.current);
    }
    updateFeatures() {
      let t = "animation";
      for (t in ye) {
        let a = ye[t];
        if (!a) continue;
        let { isEnabled: o, Feature: r } = a;
        if (
          (!this.features[t] &&
            r &&
            o(this.props) &&
            (this.features[t] = new r(this)),
          this.features[t])
        ) {
          let i = this.features[t];
          i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : O();
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, a) {
      this.latestValues[t] = a;
    }
    update(t, a) {
      ((t.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = t),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = a));
      for (let o = 0; o < H0.length; o++) {
        let r = H0[o];
        this.propEventSubscriptions[r] &&
          (this.propEventSubscriptions[r](),
          delete this.propEventSubscriptions[r]);
        let i = "on" + r,
          l = t[i];
        l && (this.propEventSubscriptions[r] = this.on(r, l));
      }
      ((this.prevMotionValues = R0(
        this,
        this.scrapeMotionValuesFromProps(t, this.prevProps, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this));
    }
    getProps() {
      return this.props;
    }
    getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(t) {
      let a = this.getClosestVariantNode();
      if (a)
        return (
          a.variantChildren && a.variantChildren.add(t),
          () => a.variantChildren.delete(t)
        );
    }
    addValue(t, a) {
      let o = this.values.get(t);
      a !== o &&
        (o && this.removeValue(t),
        this.bindToMotionValue(t, a),
        this.values.set(t, a),
        (this.latestValues[t] = a.get()));
    }
    removeValue(t) {
      this.values.delete(t);
      let a = this.valueSubscriptions.get(t);
      (a && (a(), this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState));
    }
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, a) {
      if (this.props.values && this.props.values[t])
        return this.props.values[t];
      let o = this.values.get(t);
      return (
        o === void 0 &&
          a !== void 0 &&
          ((o = Re(a === null ? void 0 : a, { owner: this })),
          this.addValue(t, o)),
        o
      );
    }
    readValue(t, a) {
      var o;
      let r =
        this.latestValues[t] !== void 0 || !this.current
          ? this.latestValues[t]
          : (o = this.getBaseTargetFromProps(this.props, t)) !== null &&
              o !== void 0
            ? o
            : this.readValueFromInstance(this.current, t, this.options);
      return (
        r != null &&
          (typeof r == "string" && (Wa(r) || za(r))
            ? (r = parseFloat(r))
            : !V0(r) && J.test(a) && (r = Ga(t, a)),
          this.setBaseTarget(t, T(r) ? r.get() : r)),
        T(r) ? r.get() : r
      );
    }
    setBaseTarget(t, a) {
      this.baseTarget[t] = a;
    }
    getBaseTarget(t) {
      var a;
      let { initial: o } = this.props,
        r;
      if (typeof o == "string" || typeof o == "object") {
        let l = B1(
          this.props,
          o,
          (a = this.presenceContext) === null || a === void 0
            ? void 0
            : a.custom,
        );
        l && (r = l[t]);
      }
      if (o && r !== void 0) return r;
      let i = this.getBaseTargetFromProps(this.props, t);
      return i !== void 0 && !T(i)
        ? i
        : this.initialValues[t] !== void 0 && r === void 0
          ? void 0
          : this.baseTarget[t];
    }
    on(t, a) {
      return (
        this.events[t] || (this.events[t] = new Ee()),
        this.events[t].add(a)
      );
    }
    notify(t, ...a) {
      this.events[t] && this.events[t].notify(...a);
    }
  };
var st = class extends Vo {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Y1));
  }
  sortInstanceNodePosition(t, a) {
    return t.compareDocumentPosition(a) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, a) {
    return t.style ? t.style[a] : void 0;
  }
  removeValueFromRenderState(t, { vars: a, style: o }) {
    (delete a[t], delete o[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    let { children: t } = this.props;
    T(t) &&
      (this.childSubscription = t.on("change", (a) => {
        this.current && (this.current.textContent = `${a}`);
      }));
  }
};
function S3(e) {
  return window.getComputedStyle(e);
}
var Ro = class extends st {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = ya));
  }
  readValueFromInstance(t, a) {
    if (ee.has(a)) {
      let o = Q1(a);
      return (o && o.default) || 0;
    } else {
      let o = S3(t),
        r = (wa(a) ? o.getPropertyValue(a) : o[a]) || 0;
      return typeof r == "string" ? r.trim() : r;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: a }) {
    return Hr(t, a);
  }
  build(t, a, o) {
    D1(t, a, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, a, o) {
    return q1(t, a, o);
  }
};
var Ho = class extends st {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = O));
  }
  getBaseTargetFromProps(t, a) {
    return t[a];
  }
  readValueFromInstance(t, a) {
    if (ee.has(a)) {
      let o = Q1(a);
      return (o && o.default) || 0;
    }
    return ((a = Ma.has(a) ? a : H1(a)), t.getAttribute(a));
  }
  scrapeMotionValuesFromProps(t, a, o) {
    return Ra(t, a, o);
  }
  build(t, a, o) {
    O1(t, a, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, a, o, r) {
    Sa(t, a, o, r);
  }
  mount(t) {
    ((this.isSVGTag = $1(t.tagName)), super.mount(t));
  }
};
var P0 = (e, t) =>
  k1(e) ? new Ho(t) : new Ro(t, { allowProjection: e !== V3 });
var k0 = i9({ ...sl, ...y0, ...L0, ...M0 }, P0);
var nt = P2(k0);
import { jsx as de, jsxs as Po } from "react/jsx-runtime";
var R3 = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Weekly Logs", href: "#weekly-logs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reflection", href: "#reflection" },
  { label: "Contact", href: "#contact" },
];
function H3({
  links: e = R3,
  activeHref: t,
  monogram: a = "MJ",
  brandName: o,
  onNavigate: r,
  sticky: i = !0,
  className: l = "",
}) {
  let [s, n] = Ur(!1),
    [d, u] = Ur(!1),
    [c, f] = Ur(t ?? e[0]?.href);
  (Er(() => {
    t !== void 0 && f(t);
  }, [t]),
    Er(() => {
      let m = () => u(window.scrollY > 8);
      return (
        m(),
        window.addEventListener("scroll", m, { passive: !0 }),
        () => window.removeEventListener("scroll", m)
      );
    }, []),
    Er(() => {
      if (!s) return;
      let m = (C) => {
        C.key === "Escape" && n(!1);
      };
      return (
        window.addEventListener("keydown", m),
        () => window.removeEventListener("keydown", m)
      );
    }, [s]));
  let p = (m, C) => {
    (f(C), n(!1), r && (m.preventDefault(), r(C)));
  };
  return Po("header", {
    className: `${i ? "sticky top-0" : "relative"} z-50 w-full border-b transition-colors duration-200 ${d ? "border-slate-200 bg-white/90 backdrop-blur-md" : "border-transparent bg-white"} ${l}`,
    "data-id": "element-190",
    "data-mp": "2ldgp7k266cz3",
    children: [
      Po("nav", {
        "aria-label": "Primary",
        className:
          "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8",
        "data-id": "element-191",
        "data-mp": "3i37k3kedi25f",
        children: [
          Po("a", {
            href: e[0]?.href ?? "#",
            onClick: (m) => p(m, e[0]?.href ?? "#"),
            className:
              "group flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
            "aria-label": o ? `${o} \u2013 home` : "Home",
            "data-id": "element-192",
            "data-mp": "34b16a4yp0795",
            children: [
              de("span", {
                className:
                  "flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold tracking-wider text-white transition-transform duration-200 group-hover:scale-105",
                "data-id": "element-193",
                "data-mp": "ezkvupjvpjt2",
                children: a,
              }),
              o &&
                de("span", {
                  className:
                    "hidden text-sm font-semibold text-slate-900 sm:inline",
                  "data-id": "element-194",
                  "data-mp": "orqnfy67xz7q",
                  children: o,
                }),
            ],
          }),
          de("ul", {
            className: "hidden items-center gap-1 md:flex",
            "data-id": "element-195",
            "data-mp": "3s7e8smv2n61y",
            children: e.map((m) => {
              let C = c === m.href;
              return de(
                "li",
                {
                  "data-id": "element-196",
                  "data-mp": "5zxuu4v2ag0j",
                  children: Po("a", {
                    href: m.href,
                    onClick: (h) => p(h, m.href),
                    "aria-current": C ? "page" : void 0,
                    className: `relative block rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${C ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`,
                    "data-id": "element-197",
                    "data-mp": "607lzvruet7t",
                    children: [
                      m.label,
                      C &&
                        de(nt.span, {
                          layoutId: "navbar-active-indicator",
                          className:
                            "absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-slate-900",
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 40,
                          },
                          "data-id": "element-198",
                          "data-mp": "3s15i07ir0thk",
                        }),
                    ],
                  }),
                },
                m.href,
              );
            }),
          }),
          de("button", {
            type: "button",
            onClick: () => n((m) => !m),
            "aria-expanded": s,
            "aria-controls": "navbar-mobile-menu",
            "aria-label": s ? "Close menu" : "Open menu",
            className:
              "inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 md:hidden",
            "data-id": "element-199",
            "data-mp": "emserq202273",
            children: s
              ? de(o1, {
                  className: "h-5 w-5",
                  "data-id": "element-200",
                  "data-mp": "2d65l5yq878la",
                })
              : de(bt, {
                  className: "h-5 w-5",
                  "data-id": "element-201",
                  "data-mp": "285rae8x8pkjk",
                }),
          }),
        ],
      }),
      de(zo, {
        initial: !1,
        "data-id": "element-202",
        "data-mp": "284g9cgv6iqw5",
        children:
          s &&
          de(nt.div, {
            id: "navbar-mobile-menu",
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.2, ease: "easeOut" },
            className:
              "overflow-hidden border-t border-slate-200 bg-white md:hidden",
            "data-id": "element-203",
            "data-mp": "243e8xwpj08sl",
            children: de("ul", {
              className: "flex flex-col gap-1 px-4 py-3",
              "data-id": "element-204",
              "data-mp": "2n31wec7ie8tj",
              children: e.map((m) => {
                let C = c === m.href;
                return de(
                  "li",
                  {
                    "data-id": "element-205",
                    "data-mp": "2i1up0e9a3bne",
                    children: de("a", {
                      href: m.href,
                      onClick: (h) => p(h, m.href),
                      "aria-current": C ? "page" : void 0,
                      className: `block rounded-md px-3 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${C ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`,
                      "data-id": "element-206",
                      "data-mp": "3fjuqpwojz1im",
                      children: m.label,
                    }),
                  },
                  m.href,
                );
              }),
            }),
          }),
      }),
    ],
  });
}
import { useState as P3 } from "react";
import { jsx as E, jsxs as dt } from "react/jsx-runtime";
var k3 = {
    2: "columns-1 sm:columns-2",
    3: "columns-1 sm:columns-2 lg:columns-3",
    4: "columns-2 md:columns-3 lg:columns-4",
  },
  B3 = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },
  B0 = ["h-48", "h-64", "h-40", "h-56", "h-72", "h-44"];
function T3({
  photos: e,
  layout: t = "masonry",
  columns: a = 3,
  showCaptions: o = !0,
  loading: r = !1,
  skeletonCount: i = 6,
  emptyTitle: l = "No photos yet",
  emptyDescription: s = "Photo documentation will appear here once uploaded.",
  onPhotoClick: n,
  className: d = "",
}) {
  let u = t === "masonry",
    c = u ? `${k3[a]} gap-4 [&>*]:mb-4` : `grid ${B3[a]} gap-4`;
  return r
    ? E("div", {
        className: `${c} w-full ${d}`,
        "aria-busy": "true",
        "aria-label": "Loading photos",
        "data-id": "element-207",
        "data-mp": "66rd2acgi1wn",
        children: Array.from({ length: i }).map((f, p) =>
          E(
            "div",
            {
              className: `break-inside-avoid animate-pulse rounded-xl bg-gray-200 ${u ? B0[p % B0.length] : "aspect-square"}`,
              "data-id": "element-208",
              "data-mp": "3tfcueahhojlr",
              "data-mpi": p,
            },
            p,
          ),
        ),
      })
    : e.length === 0
      ? dt("div", {
          className: `flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center ${d}`,
          "data-id": "element-209",
          "data-mp": "34sn98g1wbe80",
          children: [
            E("div", {
              className:
                "mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm ring-1 ring-gray-200",
              "data-id": "element-210",
              "data-mp": "39tujclrigphu",
              children: E(t1, {
                className: "h-6 w-6",
                "aria-hidden": "true",
                "data-id": "element-211",
                "data-mp": "6bayi4b5wlx2",
              }),
            }),
            E("p", {
              className: "text-sm font-semibold text-gray-900",
              "data-id": "element-212",
              "data-mp": "3nrj1vmy3vkjq",
              children: l,
            }),
            E("p", {
              className: "mt-1 max-w-sm text-sm text-gray-500",
              "data-id": "element-213",
              "data-mp": "3npf1vg3bv5oq",
              children: s,
            }),
          ],
        })
      : E("ul", {
          className: `${c} w-full ${d}`,
          role: "list",
          "data-id": "element-214",
          "data-mp": "3so9jiepk6o79",
          children: e.map((f, p) =>
            E(
              A3,
              {
                photo: f,
                index: p,
                square: !u,
                showCaption: o,
                onClick: n,
                "data-id": "element-215",
                "data-mp": "p195eh3848z4",
                "data-mpi": p,
              },
              f.id,
            ),
          ),
        });
}
function A3({ photo: e, index: t, square: a, showCaption: o, onClick: r }) {
  let [i, l] = P3("loading"),
    s = !!r,
    n = o && (e.caption || e.date || e.category),
    d = dt("div", {
      className: `relative w-full overflow-hidden bg-gray-100 ${a ? "aspect-square" : i === "loaded" ? "" : "min-h-[10rem]"}`,
      "data-id": "element-216",
      "data-mp": "1zujnmkqnotjz",
      children: [
        i === "loading" &&
          E("div", {
            className: "absolute inset-0 animate-pulse bg-gray-200",
            "aria-hidden": "true",
            "data-id": "element-217",
            "data-mp": "3b7m1h81df50g",
          }),
        i === "error"
          ? dt("div", {
              className:
                "absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-400",
              "data-id": "element-218",
              "data-mp": "36bwzky1vpc0z",
              children: [
                E(e1, {
                  className: "h-6 w-6",
                  "aria-hidden": "true",
                  "data-id": "element-219",
                  "data-mp": "5gzbc1tgfmmz",
                }),
                E("span", {
                  className: "text-xs font-medium",
                  "data-id": "element-220",
                  "data-mp": "aehefbksj7n2",
                  children: "Image unavailable",
                }),
              ],
            })
          : E("img", {
              src: e.src,
              alt: e.alt,
              loading: "lazy",
              onLoad: () => l("loaded"),
              onError: () => l("error"),
              className: `block w-full transition duration-300 ease-out ${a ? "h-full object-cover" : "h-auto"} ${i === "loaded" ? "opacity-100" : "opacity-0"} ${s ? "group-hover:scale-[1.03]" : ""}`,
              "data-id": "element-221",
              "data-mp": "fbzpb7idbwxp",
            }),
        e.category &&
          E("span", {
            className:
              "absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur",
            "data-id": "element-222",
            "data-mp": "131bwk1u4xuxd",
            children: e.category,
          }),
        s &&
          i !== "error" &&
          E("div", {
            className:
              "pointer-events-none absolute inset-0 flex items-center justify-center bg-gray-900/0 transition-colors duration-200 group-hover:bg-gray-900/30 group-focus-visible:bg-gray-900/30",
            "data-id": "element-223",
            "data-mp": "1c0p4ur6iwdgi",
            children: E("span", {
              className:
                "flex h-10 w-10 scale-90 items-center justify-center rounded-full bg-white text-gray-900 opacity-0 shadow-md transition duration-200 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100",
              "data-id": "element-224",
              "data-mp": "2slv6ck516ay0",
              children: E(It, {
                className: "h-4 w-4",
                "aria-hidden": "true",
                "data-id": "element-225",
                "data-mp": "3g8jwft4719pp",
              }),
            }),
          }),
      ],
    }),
    u = n
      ? dt("div", {
          className: "px-3 py-2.5 text-left",
          "data-id": "element-226",
          "data-mp": "36j09ocdd0vpk",
          children: [
            e.caption &&
              E("p", {
                className: "line-clamp-2 text-sm font-medium text-gray-900",
                "data-id": "element-227",
                "data-mp": "36h712rj6s1ex",
                children: e.caption,
              }),
            e.date &&
              E("p", {
                className: "mt-0.5 text-xs text-gray-500",
                "data-id": "element-228",
                "data-mp": "31ici9pl7ycut",
                children: e.date,
              }),
          ],
        })
      : null,
    c =
      "group block w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200";
  return E(nt.li, {
    className: "break-inside-avoid",
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.25,
      delay: Math.min(t * 0.04, 0.4),
      ease: "easeOut",
    },
    "data-id": "element-229",
    "data-mp": "1scdeexy2tptu",
    children: s
      ? dt("button", {
          type: "button",
          onClick: () => r?.(e, t),
          "aria-label": `Open photo: ${e.caption ?? e.alt}`,
          className: `${c} cursor-zoom-in hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2`,
          "data-id": "element-230",
          "data-mp": "1ijoe8z7z7ydt",
          children: [d, u],
        })
      : dt("figure", {
          className: c,
          "data-id": "element-231",
          "data-mp": "zozo3iovvsip",
          children: [
            d,
            u &&
              E("figcaption", {
                "data-id": "element-232",
                "data-mp": "14mj4ao556fda",
                children: u,
              }),
          ],
        }),
  });
}
import { jsx as Yt, jsxs as Jt } from "react/jsx-runtime";
var Z3 = { sm: "h-1.5", md: "h-2.5", lg: "h-4" },
  D3 = {
    default: "bg-blue-600",
    success: "bg-emerald-600",
    warning: "bg-amber-500",
  };
function O3({
  rendered: e,
  required: t,
  label: a = "Internship hours",
  showValues: o = !0,
  size: r = "md",
  tone: i,
  unit: l = "hrs",
  className: s = "",
}) {
  let n = Math.max(t, 0),
    d = Math.max(e, 0),
    u = n > 0 ? d / n : 0,
    c = Math.min(Math.round(u * 100), 100),
    f = n > 0 && d >= n,
    p = Math.max(n - d, 0),
    m = i ?? (f ? "success" : "default");
  return Jt("div", {
    className: `w-full ${s}`,
    "data-id": "element-233",
    "data-mp": "2sjp7622yvh62",
    children: [
      (a || o) &&
        Jt("div", {
          className: "mb-2 flex items-baseline justify-between gap-4",
          "data-id": "element-234",
          "data-mp": "2nhzs8bcmijcp",
          children: [
            a &&
              Yt("span", {
                className: "text-sm font-medium text-slate-900",
                "data-id": "element-235",
                "data-mp": "31gzi1mbvh4ag",
                children: a,
              }),
            o &&
              Jt("span", {
                className: "text-sm tabular-nums text-slate-600",
                "data-id": "element-236",
                "data-mp": "2xi0di2u1z9jj",
                children: [
                  Yt("span", {
                    className: "font-semibold text-slate-900",
                    "data-id": "element-237",
                    "data-mp": "173q51kk4b0ng",
                    children: Qt(d),
                  }),
                  " / ",
                  Qt(n),
                  " ",
                  l,
                ],
              }),
          ],
        }),
      Yt("div", {
        role: "progressbar",
        "aria-label": a,
        "aria-valuemin": 0,
        "aria-valuemax": n,
        "aria-valuenow": Math.min(d, n),
        "aria-valuetext": `${Qt(d)} of ${Qt(n)} ${l} (${c}%)`,
        className: `w-full overflow-hidden rounded-full bg-slate-200 ${Z3[r]}`,
        "data-id": "element-238",
        "data-mp": "328hf27b0jyaj",
        children: Yt("div", {
          className: `h-full rounded-full transition-[width] duration-500 ease-out ${D3[m]}`,
          style: { width: `${c}%` },
          "data-id": "element-239",
          "data-mp": "3l58si03vjj6o",
        }),
      }),
      o &&
        Jt("div", {
          className:
            "mt-1.5 flex items-center justify-between text-xs text-slate-500",
          "data-id": "element-240",
          "data-mp": "3uwlmoyd5alfv",
          children: [
            Jt("span", {
              className: "tabular-nums",
              "data-id": "element-241",
              "data-mp": "3ohb3bueigb9",
              children: [c, "% complete"],
            }),
            Yt("span", {
              className: "tabular-nums",
              "data-id": "element-242",
              "data-mp": "8pf0a8dtwam9",
              children: f ? "Requirement met" : `${Qt(p)} ${l} remaining`,
            }),
          ],
        }),
    ],
  });
}
function Qt(e) {
  return Number.isInteger(e)
    ? e.toLocaleString()
    : e.toLocaleString(void 0, { maximumFractionDigits: 1 });
}
import { jsx as ut, jsxs as ea } from "react/jsx-runtime";
var F3 = {
    default: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm",
    accent: "bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-6",
    minimal: "border-l-2 border-slate-300 pl-5 py-1",
  },
  $3 = {
    sm: "text-sm leading-relaxed",
    md: "text-base leading-relaxed",
    lg: "text-xl leading-relaxed font-medium",
  };
function j3({
  children: e,
  author: t,
  role: a,
  source: o,
  avatarSrc: r,
  variant: i = "default",
  size: l = "md",
  cite: s,
  className: n = "",
}) {
  let d = !!(t || a || o);
  return ea("figure", {
    className: `relative w-full max-w-2xl ${F3[i]} ${n}`,
    "data-id": "element-243",
    "data-mp": "22jykpv427k99",
    children: [
      i !== "minimal" &&
        ut(Mt, {
          "aria-hidden": "true",
          className: `mb-3 h-6 w-6 ${i === "accent" ? "text-indigo-400" : "text-slate-300"}`,
          "data-id": "element-244",
          "data-mp": "27aevt8keqtsg",
        }),
      ut("blockquote", {
        cite: s,
        className: `text-slate-800 italic ${$3[l]}`,
        "data-id": "element-245",
        "data-mp": "2be38u6rt6hl3",
        children: e,
      }),
      d &&
        ea("figcaption", {
          className: "mt-4 flex items-center gap-3",
          "data-id": "element-246",
          "data-mp": "2lb7w69xe4j3h",
          children: [
            r &&
              ut("img", {
                src: r,
                alt: "",
                className:
                  "h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-white",
                "data-id": "element-247",
                "data-mp": "l989u3812bn2",
              }),
            ea("div", {
              className: "min-w-0 text-sm",
              "data-id": "element-248",
              "data-mp": "uy9pfsanur0i",
              children: [
                t &&
                  ea("p", {
                    className: "font-semibold text-slate-900",
                    "data-id": "element-249",
                    "data-mp": "q79swo5geayj",
                    children: [
                      ut("span", {
                        "aria-hidden": "true",
                        "data-id": "element-250",
                        "data-mp": "q5ozx2ysf02s",
                        children: "\u2014 ",
                      }),
                      t,
                    ],
                  }),
                (a || o) &&
                  ea("p", {
                    className: "text-slate-500",
                    "data-id": "element-251",
                    "data-mp": "zx343o1ooo29",
                    children: [
                      a,
                      a &&
                        o &&
                        ut("span", {
                          "aria-hidden": "true",
                          "data-id": "element-252",
                          "data-mp": "zzfhdnwhya8z",
                          children: " \xB7 ",
                        }),
                      o &&
                        ut("cite", {
                          className: "not-italic",
                          "data-id": "element-253",
                          "data-mp": "1dwc87pcm7rpv",
                          children: o,
                        }),
                    ],
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
import { jsx as h1, jsxs as ko } from "react/jsx-runtime";
var q3 = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl lg:text-5xl",
  },
  N3 = { sm: "text-sm", md: "text-base", lg: "text-base sm:text-lg" };
function E3({
  eyebrow: e,
  title: t,
  subtitle: a,
  align: o = "left",
  size: r = "md",
  as: i = "h2",
  action: l,
  id: s,
  className: n = "",
}) {
  let d = o === "center",
    u = ko("div", {
      className: d ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
      "data-id": "element-254",
      "data-mp": "2sjdh92hfb3o7",
      children: [
        e &&
          ko("div", {
            className: `mb-3 flex items-center gap-2 ${d ? "justify-center" : ""}`,
            "data-id": "element-255",
            "data-mp": "2oibguibrslkn",
            children: [
              h1("span", {
                "aria-hidden": "true",
                className: "h-px w-6 bg-indigo-500",
                "data-id": "element-256",
                "data-mp": "3g7ekpwzqvtwr",
              }),
              h1("p", {
                className:
                  "text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600",
                "data-id": "element-257",
                "data-mp": "3g97sxgq0am6v",
                children: e,
              }),
              d &&
                h1("span", {
                  "aria-hidden": "true",
                  className: "h-px w-6 bg-indigo-500",
                  "data-id": "element-258",
                  "data-mp": "37fmb1oijoot8",
                }),
            ],
          }),
        h1(i, {
          id: s,
          className: `font-bold tracking-tight text-slate-900 ${q3[r]}`,
          "data-id": "element-259",
          "data-mp": "7scympn9ya4e",
          children: t,
        }),
        a &&
          h1("p", {
            className: `mt-3 leading-relaxed text-slate-600 ${N3[r]}`,
            "data-id": "element-260",
            "data-mp": "1x7x59sclm1ra",
            children: a,
          }),
      ],
    });
  return d
    ? ko("header", {
        className: `w-full ${n}`,
        "data-id": "element-261",
        "data-mp": "229e31ezsd83n",
        children: [
          u,
          l &&
            h1("div", {
              className: "mt-6 flex justify-center",
              "data-id": "element-262",
              "data-mp": "1nidmsnsss9wy",
              children: l,
            }),
        ],
      })
    : ko("header", {
        className: `flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${n}`,
        "data-id": "element-263",
        "data-mp": "1sfxd4m2rsd59",
        children: [
          u,
          l &&
            h1("div", {
              className: "shrink-0",
              "data-id": "element-264",
              "data-mp": "1jhbvqu91b462",
              children: l,
            }),
        ],
      });
}
import { Fragment as X3, jsx as Bo, jsxs as Q3 } from "react/jsx-runtime";
var U3 = {
    sm: "h-7 gap-1.5 px-2.5 text-xs",
    md: "h-8 gap-2 px-3 text-sm",
    lg: "h-10 gap-2 px-4 text-base",
  },
  z3 = {
    sm: "[&>svg]:h-3.5 [&>svg]:w-3.5",
    md: "[&>svg]:h-4 [&>svg]:w-4",
    lg: "[&>svg]:h-5 [&>svg]:w-5",
  },
  _3 = {
    soft: "bg-slate-100 text-slate-700 border border-transparent",
    outline: "bg-white text-slate-700 border border-slate-200",
    solid: "bg-slate-900 text-white border border-slate-900",
  },
  G3 = {
    soft: "hover:bg-slate-200",
    outline: "hover:border-slate-300 hover:bg-slate-50",
    solid: "hover:bg-slate-800",
  },
  W3 =
    "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100";
function K3({
  label: e,
  icon: t,
  variant: a = "soft",
  size: o = "md",
  selected: r = !1,
  disabled: i = !1,
  onClick: l,
  className: s,
  ...n
}) {
  let d = typeof l == "function",
    u = Z(
      "inline-flex shrink-0 select-none items-center whitespace-nowrap rounded-full font-medium leading-none transition-colors duration-150",
      U3[o],
      _3[a],
      d && !i && G3[a],
      r && W3,
      d &&
        "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
      i && "cursor-not-allowed opacity-50",
      s,
    ),
    c = Q3(X3, {
      children: [
        t
          ? Bo("span", {
              "aria-hidden": "true",
              className: Z(
                "inline-flex shrink-0 items-center justify-center",
                z3[o],
              ),
              "data-id": "element-265",
              "data-mp": "2p2xl2gm132ie",
              children: t,
            })
          : null,
        Bo("span", {
          "data-id": "element-266",
          "data-mp": "2acyp8khy4363",
          children: e,
        }),
      ],
    });
  return d
    ? Bo("button", {
        type: "button",
        className: u,
        onClick: l,
        disabled: i,
        "aria-pressed": r,
        ...n,
        "data-id": "element-267",
        "data-mp": "2aam1trtf50ln",
        children: c,
      })
    : Bo("span", {
        className: u,
        ...n,
        "data-id": "element-268",
        "data-mp": "gtq0w6a9zzk8",
        children: c,
      });
}
import { jsx as Be, jsxs as t7 } from "react/jsx-runtime";
var Y3 = {
  github: "GitHub",
  linkedin: "LinkedIn",
  email: "Email",
  website: "Website",
};
function J3({
  platform: e,
  href: t,
  label: a,
  variant: o = "inline",
  size: r = "md",
  showExternalIcon: i = !1,
  className: l,
  ...s
}) {
  let n = a ?? Y3[e],
    d = e === "email",
    u = d && !t.startsWith("mailto:") ? `mailto:${t}` : t,
    c = d ? {} : { target: "_blank", rel: "noopener noreferrer" },
    f = r === "sm" ? "h-4 w-4" : "h-5 w-5",
    p =
      "group inline-flex items-center font-medium text-slate-700 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
    m = {
      inline: Z(
        "rounded-md hover:text-slate-950",
        r === "sm" ? "gap-1.5 text-sm" : "gap-2 text-base",
      ),
      pill: Z(
        "rounded-full border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950",
        r === "sm" ? "gap-1.5 px-3 py-1.5 text-sm" : "gap-2 px-4 py-2 text-sm",
      ),
      icon: Z(
        "justify-center rounded-full border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950",
        r === "sm" ? "h-8 w-8" : "h-10 w-10",
      ),
    },
    C =
      o === "icon"
        ? `${n}${d ? "" : " (opens in a new tab)"}`
        : d
          ? void 0
          : `${n} (opens in a new tab)`;
  return t7("a", {
    href: u,
    "aria-label": C,
    className: Z(p, m[o], l),
    ...c,
    ...s,
    "data-id": "element-269",
    "data-mp": "4ygjz8065gl8",
    children: [
      Be(e7, {
        platform: e,
        className: Z(f, "shrink-0"),
        "data-id": "element-270",
        "data-mp": "5x9ijws31kn",
      }),
      o !== "icon" &&
        Be("span", {
          className: "underline-offset-4 group-hover:underline",
          "data-id": "element-271",
          "data-mp": "3s9pz8560zc50",
          children: n,
        }),
      o !== "icon" &&
        i &&
        !d &&
        Be(Je, {
          "aria-hidden": "true",
          className:
            "h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-700",
          "data-id": "element-272",
          "data-mp": "nw9m482yxmhk",
        }),
    ],
  });
}
function e7({ platform: e, className: t }) {
  switch (e) {
    case "github":
      return Be("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        className: t,
        "data-id": "element-273",
        "data-mp": "2khr0v9931ek0",
        children: Be("path", {
          d: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z",
          "data-id": "element-274",
          "data-mp": "2pgu8n1gg5yvo",
        }),
      });
    case "linkedin":
      return Be("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        className: t,
        "data-id": "element-275",
        "data-mp": "2umz3fg1gw2vm",
        children: Be("path", {
          d: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
          "data-id": "element-276",
          "data-mp": "39blqy51900xx",
        }),
      });
    case "email":
      return Be(a1, {
        "aria-hidden": "true",
        className: t,
        "data-id": "element-277",
        "data-mp": "2qm5ecjcagi15",
      });
    case "website":
      return Be(vt, {
        "aria-hidden": "true",
        className: t,
        "data-id": "element-278",
        "data-mp": "2llrhzyk1uwiy",
      });
  }
}
import { jsx as Qe, jsxs as ta } from "react/jsx-runtime";
var a7 = {
  default: {
    card: "bg-white border-slate-200",
    icon: "bg-slate-100 text-slate-700",
    value: "text-slate-900",
    bar: "bg-slate-900",
    label: "text-slate-500",
    desc: "text-slate-500",
    track: "bg-slate-100",
  },
  accent: {
    card: "bg-indigo-600 border-indigo-600",
    icon: "bg-white/15 text-white",
    value: "text-white",
    bar: "bg-white",
    label: "text-indigo-100",
    desc: "text-indigo-100",
    track: "bg-white/20",
  },
  success: {
    card: "bg-emerald-50 border-emerald-200",
    icon: "bg-emerald-100 text-emerald-700",
    value: "text-emerald-900",
    bar: "bg-emerald-600",
    label: "text-emerald-700",
    desc: "text-emerald-700",
    track: "bg-emerald-100",
  },
  muted: {
    card: "bg-slate-50 border-slate-200",
    icon: "bg-white text-slate-600",
    value: "text-slate-800",
    bar: "bg-slate-500",
    label: "text-slate-500",
    desc: "text-slate-500",
    track: "bg-slate-200",
  },
};
function o7({
  label: e,
  value: t,
  unit: a,
  description: o,
  icon: r,
  tone: i = "default",
  progress: l,
  loading: s = !1,
  className: n = "",
}) {
  let d = a7[i],
    u = l !== void 0 ? Math.min(100, Math.max(0, l)) : void 0;
  return ta("article", {
    className: `flex w-full min-w-[200px] flex-col gap-4 rounded-2xl border p-5 shadow-sm ${d.card} ${n}`,
    "aria-busy": s || void 0,
    "data-id": "element-279",
    "data-mp": "zxj5ngcpq5zu",
    children: [
      ta("div", {
        className: "flex items-center justify-between gap-3",
        "data-id": "element-280",
        "data-mp": "19qq9uxvpvfyc",
        children: [
          Qe("p", {
            className: `text-xs font-semibold uppercase tracking-wider ${d.label}`,
            "data-id": "element-281",
            "data-mp": "1ep1f0vb2h2a8",
            children: e,
          }),
          r &&
            Qe("span", {
              className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${d.icon}`,
              "aria-hidden": "true",
              "data-id": "element-282",
              "data-mp": "h1t1pnl7yzjb",
              children: r,
            }),
        ],
      }),
      s
        ? ta("div", {
            className: "flex flex-col gap-2",
            "data-id": "element-283",
            "data-mp": "qxw2ap0faq45",
            children: [
              Qe("div", {
                className: `h-9 w-28 animate-pulse rounded-lg ${d.track}`,
                "data-id": "element-284",
                "data-mp": "r10b5zou2a15",
              }),
              Qe("div", {
                className: `h-3 w-40 animate-pulse rounded ${d.track}`,
                "data-id": "element-285",
                "data-mp": "vzlei7zdt9tt",
              }),
            ],
          })
        : ta("div", {
            className: "flex flex-col gap-1",
            "data-id": "element-286",
            "data-mp": "22dko3d1xxj3d",
            children: [
              ta("p", {
                className: `flex items-baseline gap-1.5 text-4xl font-bold tracking-tight tabular-nums ${d.value}`,
                "data-id": "element-287",
                "data-mp": "27cxajwowgo5f",
                children: [
                  t,
                  a &&
                    Qe("span", {
                      className: `text-base font-medium ${d.label}`,
                      "data-id": "element-288",
                      "data-mp": "3rtwt1yc8xmk8",
                      children: a,
                    }),
                ],
              }),
              o &&
                Qe("p", {
                  className: `text-sm ${d.desc}`,
                  "data-id": "element-289",
                  "data-mp": "3mwn40jsrrcwx",
                  children: o,
                }),
            ],
          }),
      u !== void 0 &&
        !s &&
        Qe("div", {
          className: `h-1.5 w-full overflow-hidden rounded-full ${d.track}`,
          role: "progressbar",
          "aria-valuenow": Math.round(u),
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-label": `${e} progress`,
          "data-id": "element-290",
          "data-mp": "3d6bnzyvt9d9o",
          children: Qe("div", {
            className: `h-full rounded-full transition-all duration-500 ${d.bar}`,
            style: { width: `${u}%` },
            "data-id": "element-291",
            "data-mp": "344c8xc4cwj9d",
          }),
        }),
    ],
  });
}
import { useId as r7, useRef as l7, useState as i7 } from "react";
import { jsx as aa, jsxs as T0 } from "react/jsx-runtime";
function s7({
  items: e,
  value: t,
  defaultValue: a,
  onValueChange: o,
  variant: r = "underline",
  size: i = "md",
  fullWidth: l = !1,
  ariaLabel: s = "Tabs",
  className: n = "",
  panelClassName: d = "",
}) {
  let u = r7(),
    c = e.find((v) => !v.disabled)?.value ?? "",
    [f, p] = i7(a ?? c),
    m = t !== void 0,
    C = m ? t : f,
    h = l7([]),
    g = (v) => {
      (m || p(v), o?.(v));
    },
    x = (v, w) => {
      let I = e
          .map((k, j) => ({ item: k, i: j }))
          .filter(({ item: k }) => !k.disabled),
        R = I.findIndex(({ i: k }) => k === w),
        y;
      (v.key === "ArrowRight"
        ? (y = I[(R + 1) % I.length]?.i)
        : v.key === "ArrowLeft"
          ? (y = I[(R - 1 + I.length) % I.length]?.i)
          : v.key === "Home"
            ? (y = I[0]?.i)
            : v.key === "End" && (y = I[I.length - 1]?.i),
        y !== void 0 &&
          (v.preventDefault(), h.current[y]?.focus(), g(e[y].value)));
    },
    L = e.find((v) => v.value === C);
  return T0("div", {
    className: `w-full ${n}`,
    "data-id": "element-292",
    "data-mp": "3cwm84cuhajy5",
    children: [
      aa("div", {
        role: "tablist",
        "aria-label": s,
        className: n7(r, l),
        "data-id": "element-293",
        "data-mp": "3cvkm5dbxcd1n",
        children: e.map((v, w) => {
          let I = v.value === C;
          return T0(
            "button",
            {
              ref: (R) => {
                h.current[w] = R;
              },
              type: "button",
              role: "tab",
              id: `${u}-tab-${v.value}`,
              "aria-selected": I,
              "aria-controls": `${u}-panel-${v.value}`,
              tabIndex: I ? 0 : -1,
              disabled: v.disabled,
              onClick: () => g(v.value),
              onKeyDown: (R) => x(R, w),
              className: d7(r, i, I, l),
              "data-id": "element-294",
              "data-mp": "3rkgxpkd6w870",
              "data-mpi": w,
              children: [
                v.icon &&
                  aa("span", {
                    className: "inline-flex shrink-0 [&>svg]:h-4 [&>svg]:w-4",
                    "aria-hidden": "true",
                    "data-id": "element-295",
                    "data-mp": "o26ykeaurpm4",
                    children: v.icon,
                  }),
                aa("span", {
                  className: "truncate",
                  "data-id": "element-296",
                  "data-mp": "23o0r961oep7k",
                  children: v.label,
                }),
                v.badge !== void 0 &&
                  aa("span", {
                    className: `ml-0.5 inline-flex min-w-[1.25rem] items-center justify-center rounded-full px-1.5 text-xs font-medium leading-5 ${I ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"} ${r === "pills" && I ? "bg-white text-slate-900" : ""}`,
                    "data-id": "element-297",
                    "data-mp": "1yuy87ruiyy5m",
                    children: v.badge,
                  }),
              ],
            },
            v.value,
          );
        }),
      }),
      L?.content !== void 0 &&
        aa("div", {
          role: "tabpanel",
          id: `${u}-panel-${L.value}`,
          "aria-labelledby": `${u}-tab-${L.value}`,
          tabIndex: 0,
          className: `mt-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${d}`,
          "data-id": "element-298",
          "data-mp": "1b0er67rnq2pg",
          children: L.content,
        }),
    ],
  });
}
function n7(e, t) {
  let a = t ? "flex w-full" : "inline-flex max-w-full";
  switch (e) {
    case "pills":
      return `${a} flex-wrap items-center gap-2`;
    case "segmented":
      return `${a} items-center gap-1 rounded-lg bg-slate-100 p-1`;
    default:
      return "flex w-full items-center gap-6 overflow-x-auto border-b border-slate-200";
  }
}
function d7(e, t, a, o) {
  let r =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40",
    i = o ? "flex-1" : "",
    l = t === "sm" ? "text-sm" : "text-sm md:text-base";
  return e === "pills"
    ? `${r} ${i} ${t === "sm" ? "h-8 px-3" : "h-10 px-4"} ${l} rounded-full ${a ? "bg-slate-900 text-white shadow-sm" : "bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 hover:text-slate-900"}`
    : e === "segmented"
      ? `${r} ${i} ${t === "sm" ? "h-7 px-3" : "h-9 px-4"} ${l} rounded-md ${a ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"}`
      : `${r} ${i} ${t === "sm" ? "pb-2 pt-1" : "pb-3 pt-1"} ${l} -mb-px rounded-t-sm border-b-2 ${a ? "border-slate-900 text-slate-900" : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"}`;
}
import u7 from "react";
import { Fragment as m7, jsx as g1, jsxs as zr } from "react/jsx-runtime";
var c7 = {
    neutral: {
      subtle: "bg-slate-100 text-slate-700",
      outline: "border-slate-300 text-slate-700",
      solid: "bg-slate-800 text-white",
    },
    blue: {
      subtle: "bg-blue-50 text-blue-700",
      outline: "border-blue-300 text-blue-700",
      solid: "bg-blue-600 text-white",
    },
    green: {
      subtle: "bg-emerald-50 text-emerald-700",
      outline: "border-emerald-300 text-emerald-700",
      solid: "bg-emerald-600 text-white",
    },
    amber: {
      subtle: "bg-amber-50 text-amber-800",
      outline: "border-amber-300 text-amber-800",
      solid: "bg-amber-500 text-white",
    },
    purple: {
      subtle: "bg-violet-50 text-violet-700",
      outline: "border-violet-300 text-violet-700",
      solid: "bg-violet-600 text-white",
    },
    rose: {
      subtle: "bg-rose-50 text-rose-700",
      outline: "border-rose-300 text-rose-700",
      solid: "bg-rose-600 text-white",
    },
  },
  f7 = { sm: "h-6 gap-1 px-2 text-xs", md: "h-7 gap-1.5 px-2.5 text-sm" };
function p7({
  children: e,
  variant: t = "subtle",
  color: a = "neutral",
  size: o = "sm",
  icon: r,
  hash: i = !1,
  onClick: l,
  selected: s = !1,
  onRemove: n,
  disabled: d = !1,
  className: u,
  ...c
}) {
  let f = !!l,
    p = f && s ? "solid" : t,
    m = Z(
      "inline-flex max-w-full items-center whitespace-nowrap rounded-md border border-transparent font-medium leading-none transition-colors",
      f7[o],
      c7[a][p],
      p === "outline" && "bg-white",
      f &&
        "cursor-pointer hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1",
      d && "pointer-events-none opacity-50",
      n && (o === "sm" ? "pr-1" : "pr-1.5"),
      u,
    ),
    C = o === "sm" ? "h-3 w-3" : "h-3.5 w-3.5",
    h = zr(m7, {
      children: [
        r &&
          g1("span", {
            className: Z(
              "flex shrink-0 items-center [&>svg]:h-full [&>svg]:w-full",
              C,
            ),
            "aria-hidden": "true",
            "data-id": "element-299",
            "data-mp": "25j6efge1psma",
            children: r,
          }),
        zr("span", {
          className: "truncate",
          "data-id": "element-300",
          "data-mp": "1t62lqktujgyo",
          children: [
            i &&
              g1("span", {
                className: "opacity-60",
                "data-id": "element-301",
                "data-mp": "1t519id13gofd",
                children: "#",
              }),
            e,
          ],
        }),
      ],
    }),
    g = n
      ? g1("button", {
          type: "button",
          onClick: (x) => {
            (x.stopPropagation(), n());
          },
          disabled: d,
          "aria-label": `Remove ${typeof e == "string" ? e : "tag"}`,
          className:
            "ml-0.5 inline-flex shrink-0 items-center justify-center rounded p-0.5 opacity-70 transition-opacity hover:bg-black/10 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
          "data-id": "element-302",
          "data-mp": "1j96nr91kqd8d",
          children: g1(o1, {
            className: C,
            "data-id": "element-303",
            "data-mp": "22we4vem3pwq5",
          }),
        })
      : null;
  return f && !n
    ? g1("button", {
        type: "button",
        onClick: l,
        disabled: d,
        "aria-pressed": s,
        className: m,
        ...c,
        "data-id": "element-304",
        "data-mp": "vgzkrr1cf7zz",
        children: h,
      })
    : zr("span", {
        className: m,
        onClick: l,
        ...c,
        "data-id": "element-305",
        "data-mp": "2k6hoi5xv7ody",
        children: [h, g],
      });
}
function _y({ children: e, className: t, ...a }) {
  return g1("div", {
    role: "list",
    className: Z("flex flex-wrap items-center gap-1.5", t),
    ...a,
    "data-id": "element-306",
    "data-mp": "2y5hhfpseupfx",
    children: u7.Children.map(e, (o) =>
      o
        ? g1("div", {
            role: "listitem",
            className: "contents",
            "data-id": "element-307",
            "data-mp": "2p4roctujbd5w",
            children: o,
          })
        : null,
    ),
  });
}
import { forwardRef as C7, useId as h7, useState as g7 } from "react";
import { jsx as oa, jsxs as To } from "react/jsx-runtime";
var x7 = C7(function (
  {
    label: t,
    hint: a,
    error: o,
    showCount: r = !1,
    resizable: i = !0,
    containerClassName: l = "",
    className: s = "",
    id: n,
    rows: d = 5,
    maxLength: u,
    disabled: c,
    required: f,
    value: p,
    defaultValue: m,
    onChange: C,
    ...h
  },
  g,
) {
  let x = h7(),
    L = n ?? `textarea-${x}`,
    v = `${L}-hint`,
    w = `${L}-error`,
    [I, R] = g7(String(m ?? "").length),
    y = p !== void 0 ? String(p).length : I,
    k = (P) => {
      (p === void 0 && R(P.target.value.length), C?.(P));
    },
    j = [o ? w : null, a && !o ? v : null].filter(Boolean).join(" ") || void 0,
    ce = o
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
      : "border-gray-300 hover:border-gray-400 focus:border-gray-900 focus:ring-gray-900/10";
  return To("div", {
    className: `flex w-full flex-col gap-1.5 ${l}`,
    "data-id": "element-308",
    "data-mp": "3fpqxe48xhjuk",
    children: [
      t &&
        To("label", {
          htmlFor: L,
          className: `text-sm font-medium ${c ? "text-gray-400" : "text-gray-900"}`,
          "data-id": "element-309",
          "data-mp": "3bmktv4d7a6rs",
          children: [
            t,
            f &&
              oa("span", {
                className: "ml-0.5 text-red-500",
                "aria-hidden": "true",
                "data-id": "element-310",
                "data-mp": "3i2bb2obrox1j",
                children: "*",
              }),
          ],
        }),
      oa("textarea", {
        ref: g,
        id: L,
        rows: d,
        maxLength: u,
        disabled: c,
        required: f,
        value: p,
        defaultValue: m,
        onChange: k,
        "aria-invalid": o ? !0 : void 0,
        "aria-describedby": j,
        className: `w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm leading-relaxed text-gray-900 placeholder:text-gray-400 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-400 ${i ? "resize-y" : "resize-none"} ${ce} ${s}`,
        ...h,
        "data-id": "element-311",
        "data-mp": "385galzvxomkm",
      }),
      (o || a || (r && u)) &&
        To("div", {
          className: "flex items-start justify-between gap-3",
          "data-id": "element-312",
          "data-mp": "1ruyq4stmxkmx",
          children: [
            o
              ? oa("p", {
                  id: w,
                  role: "alert",
                  className: "text-xs text-red-600",
                  "data-id": "element-313",
                  "data-mp": "25tyd7w1i1rgz",
                  children: o,
                })
              : a
                ? oa("p", {
                    id: v,
                    className: "text-xs text-gray-500",
                    "data-id": "element-314",
                    "data-mp": "2frcutyz5smav",
                    children: a,
                  })
                : oa("span", {
                    "data-id": "element-315",
                    "data-mp": "2asrv00ntk4my",
                  }),
            r &&
              u &&
              To("span", {
                className: `shrink-0 text-xs tabular-nums ${y >= u ? "text-red-600" : "text-gray-500"}`,
                "aria-live": "polite",
                "data-id": "element-316",
                "data-mp": "2ojn51ga20rs4",
                children: [y, "/", u],
              }),
          ],
        }),
    ],
  });
});
import { Fragment as w7, jsx as ue, jsxs as ct } from "react/jsx-runtime";
var v7 = {
  completed: {
    label: "Completed",
    marker: "bg-emerald-600 text-white ring-emerald-100",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    Icon: Ct,
  },
  "in-progress": {
    label: "In progress",
    marker: "bg-blue-600 text-white ring-blue-100",
    badge: "bg-blue-50 text-blue-700 ring-blue-200",
    Icon: ht,
  },
  upcoming: {
    label: "Upcoming",
    marker: "bg-white text-slate-400 ring-slate-200 border border-slate-300",
    badge: "bg-slate-50 text-slate-600 ring-slate-200",
    Icon: gt,
  },
};
function L7({
  week: e,
  dateRange: t,
  title: a,
  summary: o,
  highlights: r,
  status: i = "completed",
  isLast: l = !1,
  onSelect: s,
  className: n,
}) {
  let d = v7[i],
    { Icon: u } = d,
    c = typeof s == "function",
    f = Z(
      "w-full rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-colors sm:p-5",
      i === "in-progress" && "border-blue-200",
      i === "upcoming" && "bg-slate-50/60",
      c &&
        "cursor-pointer hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    ),
    p = ct(w7, {
      children: [
        ct("div", {
          className: "flex flex-wrap items-center justify-between gap-2",
          "data-id": "element-317",
          "data-mp": "3irlxn58f076b",
          children: [
            ct("div", {
              className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
              "data-id": "element-318",
              "data-mp": "3itopzvx1ice7",
              children: [
                ct("h3", {
                  className: "text-base font-semibold text-slate-900",
                  "data-id": "element-319",
                  "data-mp": "3npx7hfypmhoj",
                  children: ["Week ", e],
                }),
                ue("time", {
                  className: "text-sm text-slate-500",
                  "data-id": "element-320",
                  "data-mp": "2r1hk9qj2okel",
                  children: t,
                }),
              ],
            }),
            ue("span", {
              className: Z(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                d.badge,
              ),
              "data-id": "element-321",
              "data-mp": "2v0zthp1j771l",
              children: d.label,
            }),
          ],
        }),
        a &&
          ue("p", {
            className: "mt-2 text-sm font-medium text-slate-800",
            "data-id": "element-322",
            "data-mp": "34xuq22e8uxd8",
            children: a,
          }),
        ue("div", {
          className: Z(
            "mt-1.5 text-sm leading-relaxed",
            i === "upcoming" ? "text-slate-500" : "text-slate-600",
          ),
          "data-id": "element-323",
          "data-mp": "fa3u39zodmbp",
          children: o,
        }),
        r &&
          r.length > 0 &&
          ue("ul", {
            className: "mt-3 flex flex-wrap gap-1.5",
            "aria-label": "Highlights",
            "data-id": "element-324",
            "data-mp": "1zsxwcmmk46t0",
            children: r.map((m) =>
              ue(
                "li",
                {
                  className:
                    "rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700",
                  "data-id": "element-325",
                  "data-mp": "1v162o383tkyn",
                  children: m,
                },
                m,
              ),
            ),
          }),
      ],
    });
  return ct("li", {
    className: Z("relative flex gap-4 pb-8 last:pb-0", l && "pb-0", n),
    "data-id": "element-326",
    "data-mp": "1m2ubo03bsl5o",
    children: [
      !l &&
        ue("span", {
          "aria-hidden": "true",
          className: Z(
            "absolute left-4 top-9 -ml-px h-[calc(100%-2.25rem)] w-0.5",
            i === "completed" ? "bg-emerald-200" : "bg-slate-200",
          ),
          "data-id": "element-327",
          "data-mp": "1h49b1zk5vzgp",
        }),
      ue("div", {
        className: "relative flex-none",
        "data-id": "element-328",
        "data-mp": "36hcrq7upbsfa",
        children: ct("span", {
          className: Z(
            "flex h-8 w-8 items-center justify-center rounded-full ring-4",
            d.marker,
          ),
          "data-id": "element-329",
          "data-mp": "36f0eg7zw268k",
          children: [
            ue(u, {
              className: "h-4 w-4",
              "aria-hidden": "true",
              "data-id": "element-330",
              "data-mp": "39k0vy5cw513x",
            }),
            ue("span", {
              className: "sr-only",
              "data-id": "element-331",
              "data-mp": "3ehiud1ta7xxo",
              children: d.label,
            }),
          ],
        }),
      }),
      ue("div", {
        className: "min-w-0 flex-1",
        "data-id": "element-332",
        "data-mp": "3efg6ooflqgw4",
        children: c
          ? ue("button", {
              type: "button",
              onClick: s,
              className: f,
              "data-id": "element-333",
              "data-mp": "2zjqjimyojxpt",
              children: p,
            })
          : ue("article", {
              className: f,
              "data-id": "element-334",
              "data-mp": "34lfts0e2w7cu",
              children: p,
            }),
      }),
    ],
  });
}
export {
  j0 as Avatar,
  z0 as Badge,
  gi as BlogPostCard,
  xi as BlogPostCardSkeleton,
  i2 as Button,
  o5 as Card,
  r5 as CertificateCard,
  n5 as Divider,
  h5 as Footer,
  L5 as Input,
  y5 as Logo,
  H3 as Navbar,
  T3 as PhotoGalleryGrid,
  A3 as PhotoGalleryItem,
  e7 as PlatformIcon,
  O3 as ProgressBar,
  j3 as QuoteBlock,
  E3 as SectionHeader,
  K3 as SkillChip,
  J3 as SocialLink,
  o7 as StatCard,
  s7 as Tabs,
  p7 as Tag,
  _y as TagGroup,
  x7 as Textarea,
  L7 as WeekTimelineItem,
  R3 as defaultNavbarLinks,
  vi as formatDate,
  $0 as getInitials,
};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/arrow-up-right.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/award.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/calendar.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle-dot.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/clock.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/download.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/external-link.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/globe.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/heart.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/image-off.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/image.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/mail.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/map-pin.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/maximize-2.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/menu.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/phone.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/quote.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/x.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
