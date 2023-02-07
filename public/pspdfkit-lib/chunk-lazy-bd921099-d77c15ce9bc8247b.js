/*!
 * PSPDFKit for Web 2023.1.0 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2023 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
(self.webpackChunkPSPDFKit = self.webpackChunkPSPDFKit || []).push([
  [5747],
  {
    88609: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => T });
      var n = a(96156),
        s = a(67294),
        o = a(94184),
        r = a.n(o),
        l = a(35369),
        i = a(78509),
        c = a(67366),
        d = a(70545),
        m = a(78248),
        u = a(49477),
        p = a(80614),
        g = a(46525),
        f = a(24956),
        P = a(33502),
        y = a(41371),
        v = a(2316),
        b = a(49332),
        h = a(96456),
        I = a(15435),
        w = a(65827),
        E = a(8891),
        k = a(81253),
        N = a(22122),
        D = a(88594);
      const x = ["type"];
      function S(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(a), !0).forEach(function (t) {
                (0, n.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : S(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      const O = s.memo((e) => {
          let {
            items: t,
            builtInItems: n,
            moveDialog: o,
            CSS_HACK: {
              components: { ToolbarButtonComponent: l },
              styles: i,
            },
          } = e;
          return t.map((e, t) => {
            const c = n.find((t) => t.type === e.type);
            if ("spacer" === e.type)
              return s.createElement("div", {
                style: { flex: 1 },
                className: e.className,
                key: `spacer-${t}`,
              });
            if ("move" === e.type && c)
              return s.createElement(
                "div",
                { key: c.type, className: i.moveButtonContainer },
                s.createElement(
                  l,
                  (0, N.Z)({}, c, {
                    icon: a(72303),
                    className: r()(c.className, e.className),
                    onPress: (e) => {
                      c && c.onPress && c.onPress(e);
                    },
                  })
                ),
                o
              );
            if (c) {
              const n = (0, D.zW)(c.type);
              return s.createElement(
                l,
                (0, N.Z)({}, c, {
                  key: c.type || t,
                  icon: a(33720)(`./${n}.svg`),
                  onPress: (e) => {
                    c && c.onPress && c.onPress(e);
                  },
                  className: r()(c.className, e.className),
                })
              );
            }
            if ("custom" === e.type && e.node) {
              const { type: a } = e,
                n = (0, k.Z)(e, x);
              return s.createElement(
                E.Z,
                (0, N.Z)({}, n, {
                  onPress: (t) => e.onPress && e.onPress(t, e.id),
                  key: e.id || t,
                })
              );
            }
            return s.createElement(
              l,
              (0, N.Z)({}, e, {
                key: (c && c.type) || t,
                onPress: (t) => e.onPress && e.onPress(t, e.id),
              })
            );
          });
        }),
        M = s.memo((e) => {
          let {
            items: t,
            builtInItems: n,
            CSS_HACK: {
              components: {
                ToolbarDropdownGroupComponent: o,
                ToolbarButtonComponent: l,
              },
              styles: i,
            },
            frameWindow: c,
          } = e;
          const d = t.map((e) => {
            let { item: t, index: a } = e;
            const s = n.find((e) => e.type === t.type);
            return s
              ? {
                  index: a,
                  item: C(
                    C({}, s),
                    {},
                    {
                      className: r()(s.className, t.className),
                      onPress: (e) => {
                        s.onPress && s.onPress(e);
                      },
                    }
                  ),
                }
              : { item: t, index: a };
          });
          return (
            d.length > 0 &&
            s.createElement(
              s.Fragment,
              null,
              s.createElement("div", {
                style: { flex: 1 },
                key: "spacer-responsive",
              }),
              s.createElement(o, {
                icon: { type: "more", size: { width: 20, height: 20 } },
                items: d,
                discreteDropdown: !0,
                caretDirection: "down",
                role: "menu",
                ItemComponent: (e) => {
                  let {
                    item: t,
                    isSelectedItem: o,
                    state: c,
                    itemComponentProps: d,
                  } = e;
                  const m = !o && n.find((e) => e.type === t.item.type);
                  if (o) return null;
                  const u = m && m.type ? (0, D.zW)(m.type) : "";
                  return t.item.node
                    ? s.createElement(
                        E.Z,
                        (0, N.Z)({}, t.item, {
                          onPress: t.item.onPress
                            ? (e) => t.item.onPress(e, t.id)
                            : void 0,
                          key: t.item.id || t.index,
                        })
                      )
                    : s.createElement(
                        l,
                        (0, N.Z)({}, t.item, {
                          role: "menuitem",
                          className: r()(
                            t.item.className,
                            i.toolbar.dropdownButton,
                            "Focused" === c && i.toolbar["dropdownButton" + c]
                          ),
                          icon: m ? a(33720)(`./${u}.svg`) : t.item.icon,
                          itemComponentProps: d,
                        })
                      );
                },
                onSelect: (e, t) => {
                  const { onPress: a, disabled: n } = t.item;
                  n || (a && a(e));
                },
                noinitialSelection: !0,
                frameWindow: c,
              })
            )
          );
        });
      var z, A;
      function K(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(a), !0).forEach(function (t) {
                (0, n.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : K(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      const F = new P.$u({ width: p.zA, height: p._2 }),
        G = (e) => {
          const { styles: t, formatMessage: n, movePreview: o } = e;
          return s.createElement(
            "div",
            {
              style: { width: e.width, height: e.height },
              className: r()(t.importedDocument, {
                [t.importedDocumentMovePreview]: o,
              }),
            },
            s.createElement(
              "div",
              { className: t.importedDocumentIconCircle },
              s.createElement(h.Z, { src: a(42900) })
            ),
            s.createElement(
              "span",
              { className: t.importedDocumentInfo },
              n(j.documentMergedHere)
            )
          );
        },
        L = (e, t, a, n) => {
          const s = t.flatten();
          let o = e.map((e) => ({
            type: "page",
            page: e,
            rotation: 0,
            label: e.pageLabel,
          }));
          const r = (e) => {
            const t = e.dupeOf || e.label;
            let a = 0;
            for (const e of o)
              "dupeOf" in e &&
                null != e.dupeOf &&
                e.dupeOf === t &&
                null != e.dupeNumber &&
                e.dupeNumber > a &&
                (a = e.dupeNumber);
            return a + 1;
          };
          let l = 0;
          for (const e of s)
            switch (e.type) {
              case "addPage": {
                let t;
                null != e.afterPageIndex
                  ? (t = e.afterPageIndex + 1)
                  : ((0, d.kG)(null != e.beforePageIndex),
                    (t = e.beforePageIndex)),
                  ++l,
                  (o = o.insert(t, {
                    type: "newPage",
                    label: `${a(j.newPage)} ${l}`,
                    rotation: 0,
                    size: new P.$u({
                      width: e.pageWidth,
                      height: e.pageHeight,
                    }),
                  }));
                break;
              }
              case "removePages": {
                const t = e.pageIndexes.map((e) => o.get(e));
                for (const e of t) {
                  (0, d.kG)(null != e);
                  const t = o.indexOf(e);
                  o = o.delete(t);
                }
                break;
              }
              case "rotatePages":
                for (const t of e.pageIndexes) {
                  const a = o.get(t);
                  let n, s;
                  (0, d.kG)(null != a),
                    (0, d.kG)("page" === a.type || "newPage" === a.type);
                  const r = a.rotation;
                  if (
                    ((s =
                      90 === e.rotateBy
                        ? 270 === r
                          ? 0
                          : r + e.rotateBy
                        : 90 === r
                        ? 0
                        : 180 === r
                        ? 90
                        : 270 === r
                        ? 180
                        : r + e.rotateBy),
                    (0, d.kG)(0 === s || 90 === s || 180 === s || 270 === s),
                    "page" === a.type)
                  )
                    n = B(B({}, a), {}, { rotation: s });
                  else {
                    if ("newPage" !== a.type)
                      throw new d.p2(
                        "Rotation is not allowed on imported documents"
                      );
                    n = B(B({}, a), {}, { rotation: s });
                  }
                  o = o.set(t, n);
                }
                break;
              case "duplicatePages": {
                const t = e.pageIndexes.map((e) => o.get(e));
                for (const e of t) {
                  (0, d.kG)(null != e), (0, d.kG)("page" === e.type);
                  const t = r(e),
                    a = e.dupeOf || e.label,
                    n = o.indexOf(e);
                  o = o.insert(
                    n + 1,
                    Object.assign({}, e, {
                      label: `${a} (${t})`,
                      dupeOf: a,
                      dupeNumber: t,
                    })
                  );
                }
                break;
              }
              case "movePages": {
                const t = e.pageIndexes;
                if (1 === t.length) {
                  const a = t[0];
                  let n;
                  null != e.beforePageIndex
                    ? (n = e.beforePageIndex)
                    : ((0, d.kG)(null != e.afterPageIndex),
                      (n = e.afterPageIndex + 1));
                  const s = o.get(a);
                  (0, d.kG)(null != s);
                  const r = o.get(n),
                    l = o.size;
                  (o = o.delete(a)),
                    n === l
                      ? (o = o.push(s))
                      : 0 === n
                      ? (o = o.unshift(s))
                      : ((0, d.kG)(null != r), (o = o.insert(o.indexOf(r), s)));
                } else {
                  const a = t.slice().sort();
                  if (null != e.beforePageIndex) {
                    (0, d.kG)(0 === e.beforePageIndex);
                    const t = a.map((e) => o.get(e)).reverse();
                    for (const e of t)
                      (0, d.kG)(null != e),
                        (o = o.delete(o.indexOf(e))),
                        (o = o.unshift(e));
                  } else {
                    (0, d.kG)(null != e.afterPageIndex);
                    const t = o.get(e.afterPageIndex);
                    (0, d.kG)(null != t);
                    const n = a.map((e) => o.get(e)).reverse();
                    for (const e of n)
                      (0, d.kG)(null != e),
                        (o = o.delete(o.indexOf(e))),
                        (o = o.insert(o.indexOf(t) + 1, e));
                  }
                }
                break;
              }
              case "importDocument": {
                let t, a;
                if (
                  ("beforePageIndex" in e && null != e.beforePageIndex
                    ? (t = e.beforePageIndex)
                    : ((0, d.kG)(
                        "afterPageIndex" in e && null != e.afterPageIndex
                      ),
                      (t = e.afterPageIndex + 1)),
                  "string" == typeof e.document)
                ) {
                  const t = e.document;
                  (0, d.kG)(n.has(t)), (a = n.get(t, "Imported Document"));
                } else
                  (0, d.kG)("string" == typeof e.document.name),
                    (a = e.document.name);
                o = o.insert(t, { type: "importedDocument", label: a });
                break;
              }
              case "keepPages":
              case "applyInstantJson":
              case "applyXfdf":
              case "flattenAnnotations":
              case "performOcr":
              case "setPageLabel":
              case "applyRedactions":
              case "updateMetadata":
              case "cropPages":
                throw Error("Unknown document operation");
              default:
                (0, d.Rz)(e.type);
            }
          return o;
        },
        R = (e) => {
          const { pages: t, style: a, styles: n, previewCount: o } = e;
          return s.createElement(
            "div",
            { className: n.movePreview },
            s.createElement(
              "div",
              {
                className: r()(n.movePreviewPages, {
                  [n.movePreviewPagesLoose]: "loose" === a,
                }),
              },
              t
            ),
            s.createElement(
              "div",
              { className: n.movePreviewCount },
              o || t.length
            )
          );
        },
        T = (e) => {
          const { onCancel: t, onDialog: n } = e,
            {
              pages: o,
              backend: k,
              frameWindow: N,
              footerItems: D,
              toolbarItems: x,
            } = (0, c.v9)((e) => {
              let {
                pages: t,
                backend: a,
                frameWindow: n,
                documentEditorFooterItems: s,
                documentEditorToolbarItems: o,
              } = e;
              return {
                pages: t,
                backend: a,
                frameWindow: n,
                footerItems: s.toJS(),
                toolbarItems: o.toJS(),
              };
            }, c.wU),
            S = (0, c.I0)(),
            { formatMessage: C } = (0, i.YB)(),
            { styles: K } = e.CSS_HACK,
            [T, Z] = s.useState((0, l.D5)()),
            [H, W] = s.useState((0, l.aV)()),
            [_, $] = s.useState(0),
            V = H.slice(0, H.size - _),
            U = L(o, V, C, T),
            [Y, J] = s.useState((0, l.l4)()),
            [X, q] = s.useState(!1),
            [Q, ee] = s.useState(!1),
            te = s.useRef(null),
            ae = s.useRef(null),
            [ne, se] = s.useState(!1),
            [oe, re] = s.useState(""),
            le = s.useCallback(() => {
              const e = ae.current;
              null != e &&
                (ne && e.ownerDocument.activeElement !== e
                  ? e.focus()
                  : ne || e.ownerDocument.activeElement !== e || e.blur());
            }, [ne]),
            ie = s.useCallback(
              (e) => {
                se(e), le(), n(e);
              },
              [n, le]
            );
          s.useEffect(() => {
            le();
          }, [le]);
          const ce = s.useCallback(
              (e) => {
                W(V.push(e)), $(0);
              },
              [V]
            ),
            de = s.useRef(!0);
          s.useLayoutEffect(
            () => () => {
              de.current && (de.current = !1);
            },
            []
          );
          const me = s.useCallback(() => {
              const e = o.get(0),
                t = e ? e.pageSize : F,
                a = {
                  type: "addPage",
                  backgroundColor: P.Il.WHITE,
                  pageWidth: t.width,
                  pageHeight: t.height,
                  rotateBy: 0,
                };
              1 === Y.size
                ? (a.afterPageIndex = Y.first())
                : (a.beforePageIndex = 0),
                ce(a),
                J(Y.clear());
            }, [o, Y, ce]),
            ue = s.useCallback(() => {
              ce({ type: "removePages", pageIndexes: Y.toArray() }),
                J(Y.clear());
            }, [ce, Y]),
            pe = s.useCallback(() => {
              ce({ type: "duplicatePages", pageIndexes: Y.toArray() }),
                J(Y.clear());
            }, [ce, Y]),
            ge = s.useCallback(() => {
              ce({
                type: "rotatePages",
                pageIndexes: Y.toArray(),
                rotateBy: 270,
              });
            }, [ce, Y]),
            fe = s.useCallback(() => {
              ce({
                type: "rotatePages",
                pageIndexes: Y.toArray(),
                rotateBy: 90,
              });
            }, [ce, Y]),
            Pe = s.useCallback(() => {
              ie(!ne);
            }, [ne, ie]),
            ye = s.useCallback(
              (e) => {
                const t = e.target.value;
                let a = t;
                const n = parseInt(t, 10);
                isNaN(n) || (a = Math.min(Math.max(n, 0), U.size).toString()),
                  re(a);
              },
              [U.size]
            ),
            ve = parseInt(oe, 10),
            be = s.useCallback((e) => {
              let t;
              return (
                1 === e.size ||
                null ==
                  e.sort().find((e) => {
                    let a = !1;
                    return null != t && (a = e !== t + 1), (t = e), a;
                  })
              );
            }, []),
            he = s.useCallback(
              (e, t) => {
                const a = null != t ? t : Y,
                  n = be(a);
                return !(
                  a.includes(e - 1) ||
                  (0 === e && n && a.includes(0)) ||
                  (n && a.sort().first() === e)
                );
              },
              [Y, be]
            ),
            Ie = !isNaN(ve) && he(ve),
            we = s.useCallback(
              (e, t) => {
                const a = null != t ? t : Y,
                  n = e - 1;
                ce(
                  B(
                    { type: "movePages", pageIndexes: a.toArray() },
                    0 === e ? { beforePageIndex: 0 } : { afterPageIndex: n }
                  )
                );
                let s = (0, l.l4)(),
                  o = 0;
                0 !== e &&
                  ((o = n + 1),
                  a.forEach((e) => {
                    e < n && --o;
                  }));
                let r = o;
                a.forEach(() => {
                  (s = s.add(r)), ++r;
                }),
                  J(s);
              },
              [Y, ce, J]
            ),
            Ee = s.useCallback(
              (e) => {
                e.preventDefault(), Ie && (we(ve), ie(!1));
              },
              [Ie, ve, ie, we]
            ),
            ke = s.useCallback(
              (e) => {
                const t = e.target;
                if (!ne || t.classList.contains(K.moveToolbarButton)) return;
                const a = te.current;
                (0, d.kG)(null != a), a.contains(t) || ie(!1);
              },
              [ne, ie, K.moveToolbarButton]
            ),
            Ne = s.useCallback(() => {
              const e = Y.sort()
                .toList()
                .map((e) => ({
                  type: "movePages",
                  pageIndexes: [e],
                  beforePageIndex: e - 1,
                }));
              ce(e), J((0, l.l4)(Y.toArray().map((e) => e - 1)));
            }, [ce, Y]),
            De = s.useCallback(() => {
              const e = Y.sort()
                .toList()
                .map((e) => ({
                  type: "movePages",
                  pageIndexes: [e],
                  afterPageIndex: e + 1,
                }));
              ce(e), J((0, l.l4)(Y.toArray().map((e) => e + 1)));
            }, [ce, Y]),
            xe = s.useCallback(() => {
              J(Y.clear()), $(_ + 1);
            }, [Y, _]),
            Se = s.useCallback(() => {
              J(Y.clear()), $(_ - 1);
            }, [Y, _]),
            Ce = s.useCallback(async () => {
              const e = {};
              1 === Y.size
                ? (e.afterPageIndex = Y.first())
                : (e.beforePageIndex = 0);
              {
                const t = document.createElement("input");
                (t.type = "file"),
                  (t.accept = "application/pdf"),
                  (t.onclick = (e) => {
                    (0, d.kG)(e.target instanceof HTMLInputElement),
                      (e.target.value = "");
                  }),
                  (t.onchange = (t) => {
                    var a;
                    if (
                      ((0, d.kG)(t.target instanceof HTMLInputElement),
                      0 ===
                        (null === (a = t.target.files) || void 0 === a
                          ? void 0
                          : a.length))
                    )
                      return;
                    let n = V;
                    for (const a of t.target.files) {
                      if ("string" != typeof a.name || 0 === a.name.length)
                        return;
                      if ("application/pdf" !== a.type)
                        return void (0, d.wp)(
                          "The uploaded file must be a PDF."
                        );
                      if (
                        -1 !==
                        U.findIndex(
                          (e) =>
                            "importedDocument" === e.type && e.label === a.name
                        )
                      )
                        return;
                      n = n.push(
                        B(
                          {
                            type: "importDocument",
                            treatImportedDocumentAsOnePage: !0,
                            document: a,
                          },
                          e
                        )
                      );
                    }
                    W(n), $(0), J(Y.clear());
                  }),
                  t.click();
              }
            }, [Y, T, ce, V, U]),
            Oe = s.useCallback(() => {
              J(U.keySeq().toSet());
            }, [U, J]),
            Me = s.useCallback(() => {
              J(Y.clear());
            }, [Y, J]),
            ze = s.useCallback(
              (e) => {
                Y.has(e) ? J(Y.delete(e)) : J(Y.add(e));
              },
              [Y, J]
            ),
            Ae = s.useCallback(() => {
              t();
            }, [t]),
            Ke = s.useCallback(() => {
              q(!0),
                S(
                  (0, g.b_)(
                    V.flatten().toArray(),
                    () => {
                      de.current && q(!1);
                    },
                    (e) => {
                      throw (de.current && q(!1), e);
                    }
                  )
                );
            }, [S, V]),
            Be = s.useCallback(async () => {
              q(!0);
              try {
                const e = await k.exportPDFWithOperations(
                  V.flatten().toArray().map(y.kg)
                );
                (0, f.cR)(e, N);
              } catch (e) {
                throw e;
              } finally {
                de.current && q(!1);
              }
            }, [k, V, N]),
            Fe = (e, t, a, n) => {
              const o = U.get(e);
              let r;
              switch (((0, d.kG)(null != o), o.type)) {
                case "page":
                  r = s.createElement(u.Z, {
                    key: `page-${o.label}`,
                    page: o.page,
                    size: t,
                    maxSize: a,
                    rotation: o.rotation,
                  });
                  break;
                case "newPage": {
                  const { rotatedWidth: e, rotatedHeight: n } = (0, u.X)(
                    o.size,
                    o.rotation,
                    t,
                    a
                  );
                  r = s.createElement("div", {
                    key: `newPage-${o.label}`,
                    className: K.newPage,
                    style: { width: e, height: n },
                  });
                  break;
                }
                case "importedDocument": {
                  const { containerWidth: e, containerHeight: l } = (0, u.X)(
                    F,
                    0,
                    t,
                    a
                  );
                  r = s.createElement(G, {
                    width: e,
                    height: l,
                    movePreview: n,
                    key: `importedDoc-${o.label}`,
                    styles: K,
                    formatMessage: C,
                  });
                  break;
                }
                default:
                  (r = s.createElement(s.Fragment, null)), (0, d.Rz)(o.type);
              }
              return {
                item: r,
                label: o.label,
                props:
                  "page" === o.type
                    ? { "data-original-page-index": o.page.pageIndex }
                    : {},
              };
            },
            Ge = Y.size > 0 && Y.size !== U.size && !X,
            Le =
              Y.size > 0 &&
              void 0 ===
                Y.find((e) => {
                  const t = U.get(e);
                  return (
                    (0, d.kG)(null != t),
                    "page" !== t.type && "newPage" !== t.type
                  );
                }),
            Re =
              Y.size > 0 &&
              void 0 ===
                Y.find((e) => {
                  const t = U.get(e);
                  return (0, d.kG)(null != t), "page" !== t.type;
                }),
            Te = !Y.isEmpty() && Y.size !== U.size && !X,
            je = !Y.isEmpty() && !Y.includes(0),
            Ze = !Y.isEmpty() && !Y.includes(U.size - 1),
            He = _ < H.size,
            We = _ > 0,
            _e = Y.size < U.size && !X,
            $e = !Y.isEmpty() && !X,
            Ve = s.useRef(null),
            Ue = s.useRef(!1);
          s.useLayoutEffect(() => {
            const e = Ve.current;
            if (null == e) return;
            Ue.current || (e.focus(), (Ue.current = !0));
            const t = (e) => {
              if (
                null != document.activeElement &&
                "INPUT" === document.activeElement.tagName
              )
                return;
              if (X) return;
              const t = e.key.toLowerCase(),
                a = e.metaKey || e.ctrlKey,
                n = a && !e.shiftKey && !e.altKey,
                s = e.altKey && !a && !e.shiftKey,
                o = !a && !e.shiftKey && !e.altKey;
              if (e.altKey && e.shiftKey && !a && "arrowleft" === t && Le) ge();
              else if (e.altKey && e.shiftKey && !a && "arrowright" === t && Le)
                fe();
              else if (s && "arrowleft" === t && je) Ne();
              else if (s && "arrowright" === t && Ze) De();
              else if (a && e.shiftKey && !e.altKey && "z" === t && We) Se();
              else if (n && "z" === t && He) xe();
              else if (n && "a" === t && _e) Oe();
              else if (n && "d" === t && $e) Me();
              else if (o && "n" === t) me();
              else if (o && "d" === t && Ge) ue();
              else if (o && "c" === t && Re) pe();
              else if (o && "l" === t && Le) ge();
              else if (o && "r" === t && Le) fe();
              else if (o && "m" === t && Te) ie(!0);
              else {
                if (!o || "i" !== t) return;
                Ce();
              }
              e.preventDefault();
            };
            return (
              e.addEventListener("keydown", t),
              () => {
                e.removeEventListener("keydown", t);
              }
            );
          }, [
            Re,
            Te,
            je,
            Ze,
            We,
            Ge,
            Le,
            _e,
            $e,
            He,
            me,
            pe,
            Ce,
            Ne,
            De,
            Se,
            ue,
            ge,
            fe,
            Oe,
            Me,
            xe,
            X,
            ie,
          ]);
          const Ye = K.toolbar.toolbarButton,
            Je = [
              {
                type: "add",
                onPress: me,
                className: Ye,
                disabled: X,
                children: C(j.newPage),
              },
              {
                type: "remove",
                onPress: ue,
                className: Ye,
                disabled: !Ge,
                children: C(j.removePage),
              },
              {
                type: "duplicate",
                onPress: pe,
                className: Ye,
                children: C(j.duplicatePage),
                disabled: !Re || X,
              },
              {
                type: "rotate-left",
                onPress: ge,
                className: Ye,
                children: C(j.rotatePageLeft),
                disabled: !Le || X,
              },
              {
                type: "rotate-right",
                onPress: fe,
                className: Ye,
                children: C(j.rotatePageRight),
                disabled: !Le || X,
              },
              {
                type: "move",
                onPress: Pe,
                className: r()(Ye, K.moveToolbarButton),
                children: C(j.openMoveDialog),
                disabled: !Te,
              },
              {
                type: "move-left",
                onPress: Ne,
                className: K.toolbar.toolbarButton,
                children: C(j.moveBefore),
                disabled: !je || X,
              },
              {
                type: "move-right",
                onPress: De,
                className: Ye,
                children: C(j.moveAfter),
                disabled: !Ze || X,
              },
              {
                type: "import-document",
                onPress: Ce,
                className: Ye,
                children: C(j.mergeDocument),
                disabled: X,
              },
              { type: "spacer" },
              {
                type: "undo",
                onPress: xe,
                className: Ye,
                children: C(v.Z.undo),
                disabled: !He || X,
              },
              {
                type: "redo",
                onPress: Se,
                className: Ye,
                children: C(v.Z.redo),
                disabled: !We || X,
              },
              {
                type: "select-all",
                onPress: Oe,
                className: Ye,
                children: C(j.selectAll),
                disabled: !_e,
              },
              {
                type: "select-none",
                onPress: Me,
                className: Ye,
                children: C(j.selectNone),
                disabled: !$e,
              },
            ],
            [Xe, qe] = s.useState(Number.POSITIVE_INFINITY),
            [Qe, et] = s.useMemo(
              () =>
                Xe === Number.POSITIVE_INFINITY
                  ? [x, []]
                  : [
                      x.slice(0, Xe),
                      x
                        .slice(Xe)
                        .filter((e) => "spacer" !== e.type)
                        .map((e, t) => ({
                          index: t,
                          item: B(
                            B({}, e),
                            {},
                            { dropdownGroup: "documentEditor" }
                          ),
                        })),
                    ],
              [x, Xe]
            ),
            [tt, at] = s.useState(new P.$u()),
            nt = s.useCallback(
              (e) => {
                at(
                  (t) => (
                    t.width !== e.width && qe(Number.POSITIVE_INFINITY),
                    new P.$u({ width: e.width, height: e.height })
                  )
                );
              },
              [at, qe]
            ),
            st = s.useRef(null);
          s.useLayoutEffect(() => {
            const e = st.current;
            if (!e || 0 === tt.width) return;
            const t = e.children;
            if (t.length === Xe) return;
            const a = e.ownerDocument.defaultView.getComputedStyle(e);
            let n =
              44 +
              (parseInt(a.getPropertyValue("padding-left")) || 0) +
              (parseInt(a.getPropertyValue("padding-right")) || 0);
            const s = [].findIndex.call(
              t,
              (e, t) =>
                "spacer" !== x[t].type && ((n += e.clientWidth), n > tt.width)
            );
            qe(-1 === s ? Number.POSITIVE_INFINITY : s);
            e.ownerDocument.defaultView.innerWidth >= p.Fg ? ee(!0) : ee(!1);
          }, [tt, Xe, qe, x]);
          const ot = s.useCallback(
              (e) => {
                "Escape" === e.key && ne && (ie(!1), e.stopPropagation());
              },
              [ne, ie]
            ),
            rt = s.useMemo(
              () => null != Qe.find((e) => "move" === e.type),
              [Qe]
            ),
            lt = s.createElement(
              "div",
              {
                className: r()(
                  K.moveDialog,
                  { [K.moveDialogShown]: ne, [K.moveDialogDetached]: !rt },
                  "PSPDFKit-DocumentEditor-MoveDialog"
                ),
                ref: te,
              },
              s.createElement(
                "form",
                { onSubmit: Ee, className: K.moveDialogForm },
                s.createElement(
                  "span",
                  { className: K.moveDialogFormLabel },
                  C(j.insertAfterPage)
                ),
                s.createElement("input", {
                  className: K.moveDialogFormInput,
                  type: "number",
                  min: "0",
                  max: U.size,
                  value: oe,
                  onChange: ye,
                  ref: ae,
                }),
                s.createElement(
                  m.zx,
                  {
                    type: "submit",
                    className: K.moveDialogMoveButton,
                    disabled: !Ie,
                  },
                  C(j.move)
                )
              ),
              s.createElement(
                "div",
                { className: K.moveDialogHint },
                s.createElement(
                  "p",
                  { className: K.moveDialogHintText },
                  C(j.docEditorMoveBeginningHint)
                )
              )
            ),
            it = s.useCallback(
              (e, t) => {
                const a = (0, l.l4)(e);
                he(t, a) && we(t, a);
              },
              [we, he]
            );
          let ct;
          const dt = ne && !isNaN(ve);
          if (dt) {
            const e = Y.toList()
                .sort()
                .map((e) => Fe(e, 160, 160, !0).item)
                .toArray(),
              t = s.createElement(R, {
                pages: e,
                style: "straight",
                styles: K,
              });
            dt &&
              ((ct =
                0 === ve
                  ? { previewContent: t, pageIndex: 0, position: "left" }
                  : {
                      previewContent: t,
                      pageIndex: ve - 1,
                      position: "right",
                    }),
              Ie || (ct.disabled = !0));
          }
          const mt = s.useMemo(
              () => ({
                cancel: {
                  element: s.createElement(m.zx, null, C(v.Z.cancel)),
                  onPress: Ae,
                  className: "PSPDFKit-DocumentEditor-CancelButton",
                },
                "selected-pages": {
                  element: s.createElement(
                    "div",
                    null,
                    s.createElement(
                      "div",
                      { className: K.pagesSelectedIcon },
                      s.createElement(h.Z, { src: a(17233) })
                    ),
                    C(j.pagesSelected, { arg0: Y.size })
                  ),
                  className: r()({
                    [K.pagesSelectedIndicator]: !0,
                    [K.pagesSelectedIndicatorShown]: Y.size > 0,
                    "PSPDFKit-DocumentEditor-PagesSelectedIndicator": !0,
                  }),
                },
                spacer: {
                  element: z || (z = s.createElement("div", null)),
                  className: r()({
                    [K.spacer]: !0,
                    "PSPDFKit-DocumentEditor-Spacer": !0,
                  }),
                },
                "loading-indicator": {
                  element: A || (A = s.createElement(I.Z, null)),
                  hide: !X,
                  className: "PSPDFKit-DocumentEditor-LoadingIndicator",
                },
                "save-as": {
                  element: s.createElement(m.zx, null, C(v.Z.saveAs)),
                  onPress: Be,
                  disabled: X,
                  className: "PSPDFKit-DocumentEditor-SaveAsButton",
                },
                save: {
                  element: s.createElement(m.zx, { primary: !0 }, C(v.Z.save)),
                  disabled: V.isEmpty() || X,
                  onPress: Ke,
                  className: "PSPDFKit-DocumentEditor-SaveButton",
                },
              }),
              [K, C, Ae, Be, Ke, X, V, Y]
            ),
            ut = s.useMemo(
              () =>
                D.map((e, t) => {
                  const {
                    onPress: a,
                    className: n,
                    type: o,
                    node: l,
                    id: i,
                  } = e;
                  if (((0, d.kG)(o), "custom" === o))
                    return l
                      ? s.createElement(E.Z, {
                          className: n,
                          onPress: a ? (e) => a(e, i) : void 0,
                          key: i || t,
                          node: l,
                        })
                      : null;
                  {
                    const e = mt[o];
                    return e.hide
                      ? null
                      : s.cloneElement(e.element, {
                          onClick: (t) => {
                            e.onPress && e.onPress(t);
                          },
                          key: o,
                          disabled: e.disabled,
                          className: r()(e.className, n),
                        });
                  }
                }),
              [D, mt]
            );
          return s.createElement(
            "div",
            {
              className: r()(K.docEditor, "PSPDFKit-DocumentEditor"),
              onClick: ke,
              onKeyDown: ot,
              tabIndex: "-1",
              ref: Ve,
            },
            s.createElement(
              "div",
              {
                className: r()(
                  K.toolbar.root,
                  K.toolbarRoot,
                  "PSPDFKit-DocumentEditor-Toolbar"
                ),
                style: { flex: 0 },
              },
              s.createElement(
                "div",
                { ref: st, className: K.toolbarContainer },
                s.createElement(O, {
                  items: Qe,
                  builtInItems: Je,
                  moveDialog: lt,
                  CSS_HACK: e.CSS_HACK,
                })
              ),
              s.createElement(M, {
                builtInItems: Je,
                items: et,
                CSS_HACK: e.CSS_HACK,
                frameWindow: N,
              })
            ),
            s.createElement(
              "div",
              { className: K.pagesView },
              s.createElement(w.Z, { onResize: nt }),
              !rt && lt,
              s.createElement(
                "div",
                {
                  className: r()(K.pagesGrid, {
                    [K.pagesGridLargeThumbnails]: Q,
                  }),
                },
                s.createElement(b.Z, {
                  canInsert: (e, t) => he(t, (0, l.l4)(e)),
                  totalItems: U.size,
                  width: tt.width,
                  height: tt.height,
                  itemScale: e.scale,
                  renderItemCallback: Fe,
                  renderDragPreviewCallback: (e, t, a, n) => {
                    const o = (0, l.aV)(e)
                      .filter((e) => e !== t)
                      .sort()
                      .push(t)
                      .slice(-5)
                      .map((e) => Fe(e, a, n, !0).item)
                      .toArray();
                    return s.createElement(R, {
                      pages: o,
                      style: "straight",
                      styles: K,
                      previewCount: e.length,
                    });
                  },
                  onItemPress: ze,
                  selectedItemIndexes: Y,
                  cssPrefix: "PSPDFKit-DocumentEditor",
                  moveCursor: null != ct ? ct : void 0,
                  onItemsMove: ne ? void 0 : it,
                })
              )
            ),
            s.createElement(
              "div",
              { className: r()(K.bottomBar, "PSPDFKit-DocumentEditor-Footer") },
              ut
            )
          );
        },
        j = (0, i.vU)({
          newPage: {
            id: "newPage",
            defaultMessage: "New Page",
            description: "Add new page",
          },
          removePage: {
            id: "removePage",
            defaultMessage: "Remove Page",
            description: "Remove page",
          },
          duplicatePage: {
            id: "duplicatePage",
            defaultMessage: "Duplicate Page",
            description: "Duplicate page",
          },
          rotatePageLeft: {
            id: "rotatePageLeft",
            defaultMessage: "Rotate Page Left",
            description: "Rotate Page Left",
          },
          rotatePageRight: {
            id: "rotatePageRight",
            defaultMessage: "Rotate Page Right",
            description: "Rotate Page Right",
          },
          mergeDocument: {
            id: "mergeDocument",
            defaultMessage: "Merge Document",
            description: "Merge Document",
          },
          selectAll: {
            id: "selectAll",
            defaultMessage: "Select All",
            description: "Select All Pages",
          },
          selectNone: {
            id: "selectNone",
            defaultMessage: "Select None",
            description: "Deselect All Pages",
          },
          openMoveDialog: {
            id: "openMoveDialog",
            defaultMessage: "Move…",
            description:
              "Open dialog for moving pages to specific location in the document",
          },
          move: {
            id: "move",
            defaultMessage: "Move",
            description: "Move pages to specific location in the document",
          },
          moveBefore: {
            id: "moveBefore",
            defaultMessage: "Move Before",
            description: "Move page before previous one",
          },
          moveAfter: {
            id: "moveAfter",
            defaultMessage: "Move After",
            description: "Move page after next one",
          },
          documentMergedHere: {
            id: "documentMergedHere",
            defaultMessage: "Document will be merged here",
            description: "Placeholder for the imported document",
          },
          pagesSelected: {
            id: "pagesSelected",
            defaultMessage:
              "{arg0, plural,\n      =0 {{arg0} Pages}\n      one {{arg0} Page}\n      two {{arg0} Pages}\n      other {{arg0} Pages}\n    }",
            description: "Number of pages selected.",
          },
          insertAfterPage: {
            id: "insertAfterPage",
            defaultMessage: "Insert after page",
            description: "Move selected pages after designated page index.",
          },
          docEditorMoveBeginningHint: {
            id: "docEditorMoveBeginningHint",
            defaultMessage:
              "Type “0” to move selected pages to the beginning of the document.",
            description:
              "Instructions for how to move pages to the beginning of the document when using the Move button in the Document Editor.",
          },
        });
    },
    33720: (e, t, a) => {
      var n = {
        "./add.svg": 14809,
        "./duplicate.svg": 89950,
        "./extract.svg": 61030,
        "./help.svg": 19774,
        "./importDocument.svg": 42900,
        "./move.svg": 72303,
        "./moveLeft.svg": 40020,
        "./moveRight.svg": 46716,
        "./multiplePages.svg": 17233,
        "./redo.svg": 68433,
        "./remove.svg": 89316,
        "./rotateLeft.svg": 10003,
        "./rotateRight.svg": 17756,
        "./selectAll.svg": 56070,
        "./selectNone.svg": 48767,
        "./undo.svg": 16751,
      };
      function s(e) {
        var t = o(e);
        return a(t);
      }
      function o(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (s.keys = function () {
        return Object.keys(n);
      }),
        (s.resolve = o),
        (e.exports = s),
        (s.id = 33720);
    },
  },
]);
