(() => {
  "use strict";
  const e = {};
  let t = (e, t = 500, s = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = s ? `${s}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !s),
            !s && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !s && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide"),
            document.dispatchEvent(
              new CustomEvent("slideUpDone", { detail: { target: e } })
            );
        }, t));
    },
    s = (e, t = 500, s = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          s && e.style.removeProperty("height");
        let i = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = i + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideDownDone", { detail: { target: e } })
              );
          }, t);
      }
    },
    i = (e, i = 500) => (e.hidden ? s(e, i) : t(e, i));
  let n = {
    getErrors(e) {
      let t = 0,
        s = e.querySelectorAll("*[data-required]");
      return (
        s.length &&
          s.forEach((e) => {
            (null === e.offsetParent && "SELECT" !== e.tagName) ||
              e.disabled ||
              (t += this.validateInput(e));
          }),
        t
      );
    },
    validateInput(e) {
      let t = 0;
      return (
        "email" === e.dataset.required
          ? ((e.value = e.value.replace(" ", "")),
            this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
          : ("checkbox" !== e.type || e.checked) && e.value
          ? this.removeError(e)
          : (this.addError(e), t++),
        t
      );
    },
    addError(e) {
      e.classList.add("_form-error"),
        e.parentElement.classList.add("_form-error");
      let t = e.parentElement.querySelector(".form__error");
      t && e.parentElement.removeChild(t),
        e.dataset.error &&
          e.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${e.dataset.error}</div>`
          );
    },
    removeError(e) {
      e.classList.remove("_form-error"),
        e.parentElement.classList.remove("_form-error"),
        e.parentElement.querySelector(".form__error") &&
          e.parentElement.removeChild(
            e.parentElement.querySelector(".form__error")
          );
    },
    formClean(t) {
      t.reset(),
        setTimeout(() => {
          let s = t.querySelectorAll("input,textarea");
          for (let e = 0; e < s.length; e++) {
            const t = s[e];
            t.parentElement.classList.remove("_form-focus"),
              t.classList.remove("_form-focus"),
              n.removeError(t);
          }
          let i = t.querySelectorAll(".checkbox__input");
          if (i.length > 0)
            for (let e = 0; e < i.length; e++) {
              i[e].checked = !1;
            }
          if (e.select) {
            let s = t.querySelectorAll(".select");
            if (s.length)
              for (let t = 0; t < s.length; t++) {
                const i = s[t].querySelector("select");
                e.select.selectBuild(i);
              }
          }
        }, 0);
    },
    emailTest: (e) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
  };
  function a(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function r(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && r(e[s], t[s]);
    });
  }
  e.select = new (class {
    constructor(e, t = null) {
      if (
        ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
        (this.selectClasses = {
          classSelect: "select",
          classSelectBody: "select__body",
          classSelectTitle: "select__title",
          classSelectValue: "select__value",
          classSelectLabel: "select__label",
          classSelectInput: "select__input",
          classSelectText: "select__text",
          classSelectLink: "select__link",
          classSelectOptions: "select__options",
          classSelectOptionsScroll: "select__scroll",
          classSelectOption: "select__option",
          classSelectContent: "select__content",
          classSelectRow: "select__row",
          classSelectData: "select__asset",
          classSelectDisabled: "_select-disabled",
          classSelectTag: "_select-tag",
          classSelectOpen: "_select-open",
          classSelectActive: "_select-active",
          classSelectFocus: "_select-focus",
          classSelectMultiple: "_select-multiple",
          classSelectCheckBox: "_select-checkbox",
          classSelectOptionSelected: "_select-selected",
          classSelectPseudoLabel: "_select-pseudo-label",
        }),
        (this._this = this),
        this.config.init)
      ) {
        const e = t
          ? document.querySelectorAll(t)
          : document.querySelectorAll("select");
        e.length
          ? (this.selectsInit(e),
            this.setLogging(`??????????????????, ???????????????? ????????????????: (${e.length})`))
          : this.setLogging("????????, ?????? ???? ???????????? select zzZZZzZZz");
      }
    }
    getSelectClass(e) {
      return `.${e}`;
    }
    getSelectElement(e, t) {
      return {
        originalSelect: e.querySelector("select"),
        selectElement: e.querySelector(this.getSelectClass(t)),
      };
    }
    selectsInit(e) {
      e.forEach((e, t) => {
        this.selectInit(e, t + 1);
      }),
        document.addEventListener(
          "click",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "keydown",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "focusin",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "focusout",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        );
    }
    selectInit(e, t) {
      const s = this;
      let i = document.createElement("div");
      if (
        (i.classList.add(this.selectClasses.classSelect),
        e.parentNode.insertBefore(i, e),
        i.appendChild(e),
        (e.hidden = !0),
        t && (e.dataset.id = t),
        this.getSelectPlaceholder(e) &&
          ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
          this.getSelectPlaceholder(e).label.show))
      ) {
        this.getSelectElement(
          i,
          this.selectClasses.classSelectTitle
        ).selectElement.insertAdjacentHTML(
          "afterbegin",
          `<span class="${this.selectClasses.classSelectLabel}">${
            this.getSelectPlaceholder(e).label.text
              ? this.getSelectPlaceholder(e).label.text
              : this.getSelectPlaceholder(e).value
          }</span>`
        );
      }
      i.insertAdjacentHTML(
        "beforeend",
        `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
      ),
        this.selectBuild(e),
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
        e.addEventListener("change", function (e) {
          s.selectChange(e);
        });
    }
    selectBuild(e) {
      const t = e.parentElement;
      (t.dataset.id = e.dataset.id),
        t.classList.add(
          e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
        ),
        e.multiple
          ? t.classList.add(this.selectClasses.classSelectMultiple)
          : t.classList.remove(this.selectClasses.classSelectMultiple),
        e.hasAttribute("data-checkbox") && e.multiple
          ? t.classList.add(this.selectClasses.classSelectCheckBox)
          : t.classList.remove(this.selectClasses.classSelectCheckBox),
        this.setSelectTitleValue(t, e),
        this.setOptions(t, e),
        e.hasAttribute("data-search") && this.searchActions(t),
        e.hasAttribute("data-open") && this.selectAction(t),
        this.selectDisabled(t, e);
    }
    selectsActions(e) {
      const t = e.target,
        s = e.type;
      if (
        t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
        t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
      ) {
        const i = t.closest(".select")
            ? t.closest(".select")
            : document.querySelector(
                `.${this.selectClasses.classSelect}[data-id="${
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ).dataset.selectId
                }"]`
              ),
          n = this.getSelectElement(i).originalSelect;
        if ("click" === s) {
          if (!n.disabled)
            if (
              t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
            ) {
              const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                ),
                s = document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                );
              this.optionAction(i, n, s);
            } else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectTitle)
              )
            )
              this.selectAction(i);
            else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              )
            ) {
              const e = t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              );
              this.optionAction(i, n, e);
            }
        } else
          "focusin" === s || "focusout" === s
            ? t.closest(this.getSelectClass(this.selectClasses.classSelect)) &&
              ("focusin" === s
                ? i.classList.add(this.selectClasses.classSelectFocus)
                : i.classList.remove(this.selectClasses.classSelectFocus))
            : "keydown" === s && "Escape" === e.code && this.selects??lose();
      } else this.selects??lose();
    }
    selects??lose(e) {
      const t = (e || document).querySelectorAll(
        `${this.getSelectClass(
          this.selectClasses.classSelect
        )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
      );
      t.length &&
        t.forEach((e) => {
          this.select??lose(e);
        });
    }
    select??lose(e) {
      const s = this.getSelectElement(e).originalSelect,
        i = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement;
      i.classList.contains("_slide") ||
        (e.classList.remove(this.selectClasses.classSelectOpen),
        t(i, s.dataset.speed));
    }
    selectAction(e) {
      const t = this.getSelectElement(e).originalSelect,
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement;
      if (t.closest("[data-one-select]")) {
        const e = t.closest("[data-one-select]");
        this.selects??lose(e);
      }
      s.classList.contains("_slide") ||
        (e.classList.toggle(this.selectClasses.classSelectOpen),
        i(s, t.dataset.speed));
    }
    setSelectTitleValue(e, t) {
      const s = this.getSelectElement(
          e,
          this.selectClasses.classSelectBody
        ).selectElement,
        i = this.getSelectElement(
          e,
          this.selectClasses.classSelectTitle
        ).selectElement;
      i && i.remove(),
        s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
    }
    getSelectTitleValue(e, t) {
      let s = this.getSelectedOptionsData(t, 2).html;
      t.multiple &&
        t.hasAttribute("data-tags") &&
        ((s = this.getSelectedOptionsData(t)
          .elements.map(
            (t) =>
              `<span role="button" data-select-id="${
                e.dataset.id
              }" data-value="${
                t.value
              }" class="_select-tag">${this.getSelectElementContent(t)}</span>`
          )
          .join("")),
        t.dataset.tags &&
          document.querySelector(t.dataset.tags) &&
          ((document.querySelector(t.dataset.tags).innerHTML = s),
          t.hasAttribute("data-search") && (s = !1))),
        (s = s.length ? s : t.dataset.placeholder ? t.dataset.placeholder : "");
      let i = "",
        n = "";
      if (
        (t.hasAttribute("data-pseudo-label") &&
          ((i = t.dataset.pseudoLabel
            ? ` data-pseudo-label="${t.dataset.pseudoLabel}"`
            : ' data-pseudo-label="?????????????????? ??????????????"'),
          (n = ` ${this.selectClasses.classSelectPseudoLabel}`)),
        this.getSelectedOptionsData(t).values.length
          ? e.classList.add(this.selectClasses.classSelectActive)
          : e.classList.remove(this.selectClasses.classSelectActive),
        t.hasAttribute("data-search"))
      )
        return `<div class="${this.selectClasses.classSelectTitle}"><span${i} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
      {
        const e =
          this.getSelectedOptionsData(t).elements.length &&
          this.getSelectedOptionsData(t).elements[0].dataset.class
            ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
            : "";
        return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${i} class="${this.selectClasses.classSelectValue}${n}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
      }
    }
    getSelectElementContent(e) {
      const t = e.dataset.asset ? `${e.dataset.asset}` : "",
        s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
      let i = "";
      return (
        (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
        (i += t ? `<span class="${this.selectClasses.classSelectData}">` : ""),
        (i += t ? s : ""),
        (i += t ? "</span>" : ""),
        (i += t ? `<span class="${this.selectClasses.classSelectText}">` : ""),
        (i += e.textContent),
        (i += t ? "</span>" : ""),
        (i += t ? "</span>" : ""),
        i
      );
    }
    getSelectPlaceholder(e) {
      const t = Array.from(e.options).find((e) => !e.value);
      if (t)
        return {
          value: t.textContent,
          show: t.hasAttribute("data-show"),
          label: { show: t.hasAttribute("data-label"), text: t.dataset.label },
        };
    }
    getSelectedOptionsData(e, t) {
      let s = [];
      return (
        e.multiple
          ? (s = Array.from(e.options)
              .filter((e) => e.value)
              .filter((e) => e.selected))
          : s.push(e.options[e.selectedIndex]),
        {
          elements: s.map((e) => e),
          values: s.filter((e) => e.value).map((e) => e.value),
          html: s.map((e) => this.getSelectElementContent(e)),
        }
      );
    }
    getOptions(e) {
      let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
        s = e.dataset.scroll ? `style="max-height:${e.dataset.scroll}px"` : "",
        i = Array.from(e.options);
      if (i.length > 0) {
        let n = "";
        return (
          ((this.getSelectPlaceholder(e) &&
            !this.getSelectPlaceholder(e).show) ||
            e.multiple) &&
            (i = i.filter((e) => e.value)),
          (n += t
            ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
            : ""),
          i.forEach((t) => {
            n += this.getOption(t, e);
          }),
          (n += t ? "</div>" : ""),
          n
        );
      }
    }
    getOption(e, t) {
      const s =
          e.selected && t.multiple
            ? ` ${this.selectClasses.classSelectOptionSelected}`
            : "",
        i =
          !e.selected || t.hasAttribute("data-show-selected") || t.multiple
            ? ""
            : "hidden",
        n = e.dataset.class ? ` ${e.dataset.class}` : "",
        a = !!e.dataset.href && e.dataset.href,
        r = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
      let l = "";
      return (
        (l += a
          ? `<a ${r} ${i} href="${a}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
          : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
        (l += this.getSelectElementContent(e)),
        (l += a ? "</a>" : "</button>"),
        l
      );
    }
    setOptions(e, t) {
      this.getSelectElement(
        e,
        this.selectClasses.classSelectOptions
      ).selectElement.innerHTML = this.getOptions(t);
    }
    optionAction(e, t, s) {
      if (t.multiple) {
        s.classList.toggle(this.selectClasses.classSelectOptionSelected);
        this.getSelectedOptionsData(t).elements.forEach((e) => {
          e.removeAttribute("selected");
        });
        e.querySelectorAll(
          this.getSelectClass(this.selectClasses.classSelectOptionSelected)
        ).forEach((e) => {
          t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
            "selected",
            "selected"
          );
        });
      } else
        t.hasAttribute("data-show-selected") ||
          (e.querySelector(
            `${this.getSelectClass(
              this.selectClasses.classSelectOption
            )}[hidden]`
          ) &&
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ).hidden = !1),
          (s.hidden = !0)),
          (t.value = s.hasAttribute("data-value")
            ? s.dataset.value
            : s.textContent),
          this.selectAction(e);
      this.setSelectTitleValue(e, t), this.setSelectChange(t);
    }
    selectChange(e) {
      const t = e.target;
      this.selectBuild(t), this.setSelectChange(t);
    }
    setSelectChange(e) {
      if (
        (e.hasAttribute("data-validate") && n.validateInput(e),
        e.hasAttribute("data-submit") && e.value)
      ) {
        let t = document.createElement("button");
        (t.type = "submit"), e.closest("form").append(t), t.click(), t.remove();
      }
      const t = e.parentElement;
      this.selectCallback(t, e);
    }
    selectDisabled(e, t) {
      t.disabled
        ? (e.classList.add(this.selectClasses.classSelectDisabled),
          (this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = !0))
        : (e.classList.remove(this.selectClasses.classSelectDisabled),
          (this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = !1));
    }
    searchActions(e) {
      this.getSelectElement(e).originalSelect;
      const t = this.getSelectElement(
          e,
          this.selectClasses.classSelectInput
        ).selectElement,
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement,
        i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
        n = this;
      t.addEventListener("input", function () {
        i.forEach((e) => {
          e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
            ? (e.hidden = !1)
            : (e.hidden = !0);
        }),
          !0 === s.hidden && n.selectAction(e);
      });
    }
    selectCallback(e, t) {
      document.dispatchEvent(
        new CustomEvent("selectCallback", { detail: { select: t } })
      );
    }
    setLogging(e) {
      this.config.logging &&
        (function (e) {
          setTimeout(() => {
            window.FLS && console.log(e);
          }, 0);
        })(`[select]: ${e}`);
    }
  })({});
  const l = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function o() {
    const e = "undefined" != typeof document ? document : {};
    return r(e, l), e;
  }
  const d = {
    document: l,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function c() {
    const e = "undefined" != typeof window ? window : {};
    return r(e, d), e;
  }
  class u extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function p(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...p(e)) : t.push(e);
      }),
      t
    );
  }
  function h(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function f(e, t) {
    const s = c(),
      i = o();
    let n = [];
    if (!t && e instanceof u) return e;
    if (!e) return new u(n);
    if ("string" == typeof e) {
      const s = e.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"),
          0 === s.indexOf("<tr") && (e = "tbody"),
          (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
          0 === s.indexOf("<tbody") && (e = "table"),
          0 === s.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          n.push(t.childNodes[e]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          const s = [],
            i = t.querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) s.push(i[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof u) return e;
      n = e;
    }
    return new u(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(n)
    );
  }
  f.fn = u.prototype;
  const m = "resize scroll".split(" ");
  function g(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          m.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : f(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  g("click"),
    g("blur"),
    g("focus"),
    g("focusin"),
    g("focusout"),
    g("keyup"),
    g("keydown"),
    g("keypress"),
    g("submit"),
    g("change"),
    g("mousedown"),
    g("mousemove"),
    g("mouseup"),
    g("mouseenter"),
    g("mouseleave"),
    g("mouseout"),
    g("mouseover"),
    g("touchstart"),
    g("touchend"),
    g("touchmove"),
    g("resize"),
    g("scroll");
  const v = {
    addClass: function (...e) {
      const t = p(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = p(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = p(e.map((e) => e.split(" ")));
      return (
        h(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = p(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, s, i, n] = e;
      function a(e) {
        const t = e.target;
        if (!t) return;
        const n = e.target.dom7EventData || [];
        if ((n.indexOf(e) < 0 && n.unshift(e), f(t).is(s))) i.apply(t, n);
        else {
          const e = f(t).parents();
          for (let t = 0; t < e.length; t += 1)
            f(e[t]).is(s) && i.apply(e[t], n);
        }
      }
      function r(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const l = t.split(" ");
      let o;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (s)
          for (o = 0; o < l.length; o += 1) {
            const e = l[o];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: i, proxyListener: a }),
              t.addEventListener(e, a, n);
          }
        else
          for (o = 0; o < l.length; o += 1) {
            const e = l[o];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: i, proxyListener: r }),
              t.addEventListener(e, r, n);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, s, i, n] = e;
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const a = t.split(" ");
      for (let e = 0; e < a.length; e += 1) {
        const t = a[e];
        for (let e = 0; e < this.length; e += 1) {
          const a = this[e];
          let r;
          if (
            (!s && a.dom7Listeners
              ? (r = a.dom7Listeners[t])
              : s && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]),
            r && r.length)
          )
            for (let e = r.length - 1; e >= 0; e -= 1) {
              const s = r[e];
              (i && s.listener === i) ||
              (i &&
                s.listener &&
                s.listener.dom7proxy &&
                s.listener.dom7proxy === i)
                ? (a.removeEventListener(t, s.proxyListener, n), r.splice(e, 1))
                : i ||
                  (a.removeEventListener(t, s.proxyListener, n),
                  r.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = c(),
        s = e[0].split(" "),
        i = e[1];
      for (let n = 0; n < s.length; n += 1) {
        const a = s[n];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s];
          if (t.CustomEvent) {
            const s = new t.CustomEvent(a, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(s),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function s(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = c();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = c(),
          t = o(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          a = s.clientTop || n.clientTop || 0,
          r = s.clientLeft || n.clientLeft || 0,
          l = s === e ? e.scrollY : s.scrollTop,
          d = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + l - a, left: i.left + d - r };
      }
      return null;
    },
    css: function (e, t) {
      const s = c();
      let i;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1)
            for (const t in e) this[i].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = c(),
        s = o(),
        i = this[0];
      let n, a;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (n = f(e), a = 0; a < n.length; a += 1) if (n[a] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof u) {
        for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1)
          if (n[a] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return f([]);
      if (e < 0) {
        const s = t + e;
        return f(s < 0 ? [] : [this[s]]);
      }
      return f([this[e]]);
    },
    append: function (...e) {
      let t;
      const s = o();
      for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const i = s.createElement("div");
            for (i.innerHTML = t; i.firstChild; )
              this[e].appendChild(i.firstChild);
          } else if (t instanceof u)
            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = o();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          const n = t.createElement("div");
          for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof u)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && f(this[0].nextElementSibling).is(e)
            ? f([this[0].nextElementSibling])
            : f([])
          : this[0].nextElementSibling
          ? f([this[0].nextElementSibling])
          : f([])
        : f([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return f([]);
      for (; s.nextElementSibling; ) {
        const i = s.nextElementSibling;
        e ? f(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return f(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && f(t.previousElementSibling).is(e)
            ? f([t.previousElementSibling])
            : f([])
          : t.previousElementSibling
          ? f([t.previousElementSibling])
          : f([]);
      }
      return f([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return f([]);
      for (; s.previousElementSibling; ) {
        const i = s.previousElementSibling;
        e ? f(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return f(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? f(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return f(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let i = this[s].parentNode;
        for (; i; ) e ? f(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      }
      return f(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? f([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].querySelectorAll(e);
        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
      }
      return f(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].children;
        for (let s = 0; s < i.length; s += 1)
          (e && !f(i[s]).is(e)) || t.push(i[s]);
      }
      return f(t);
    },
    filter: function (e) {
      return f(h(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(v).forEach((e) => {
    Object.defineProperty(f.fn, e, { value: v[e], writable: !0 });
  });
  const S = f;
  function b(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function w() {
    return Date.now();
  }
  function y(e, t) {
    void 0 === t && (t = "x");
    const s = c();
    let i, n, a;
    const r = (function (e) {
      const t = c();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((n = r.transform || r.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (a = new s.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((a =
            r.MozTransform ||
            r.OTransform ||
            r.MsTransform ||
            r.msTransform ||
            r.transform ||
            r
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = a.toString().split(","))),
      "x" === t &&
        (n = s.WebKitCSSMatrix
          ? a.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (n = s.WebKitCSSMatrix
          ? a.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      n || 0
    );
  }
  function C(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function T(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function E() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < arguments.length; s += 1) {
      const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
      if (null != i && !T(i)) {
        const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, n = s.length; t < n; t += 1) {
          const n = s[t],
            a = Object.getOwnPropertyDescriptor(i, n);
          void 0 !== a &&
            a.enumerable &&
            (C(e[n]) && C(i[n])
              ? i[n].__swiper__
                ? (e[n] = i[n])
                : E(e[n], i[n])
              : !C(e[n]) && C(i[n])
              ? ((e[n] = {}), i[n].__swiper__ ? (e[n] = i[n]) : E(e[n], i[n]))
              : (e[n] = i[n]));
        }
      }
    }
    return e;
  }
  function x(e, t, s) {
    e.style.setProperty(t, s);
  }
  function M(e) {
    let { swiper: t, targetPosition: s, side: i } = e;
    const n = c(),
      a = -t.translate;
    let r,
      l = null;
    const o = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(t.cssModeFrameID);
    const d = s > a ? "next" : "prev",
      u = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      p = () => {
        (r = new Date().getTime()), null === l && (l = r);
        const e = Math.max(Math.min((r - l) / o, 1), 0),
          d = 0.5 - Math.cos(e * Math.PI) / 2;
        let c = a + d * (s - a);
        if ((u(c, s) && (c = s), t.wrapperEl.scrollTo({ [i]: c }), u(c, s)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [i]: c });
            }),
            void n.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = n.requestAnimationFrame(p);
      };
    p();
  }
  let L, k, P;
  function D() {
    return (
      L ||
        (L = (function () {
          const e = c(),
            t = o();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      L
    );
  }
  function O(e) {
    return (
      void 0 === e && (e = {}),
      k ||
        (k = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const s = D(),
            i = c(),
            n = i.navigator.platform,
            a = t || i.navigator.userAgent,
            r = { ios: !1, android: !1 },
            l = i.screen.width,
            o = i.screen.height,
            d = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = a.match(/(iPad).*OS\s([\d_]+)/);
          const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            f = "Win32" === n;
          let m = "MacIntel" === n;
          return (
            !u &&
              m &&
              s.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${l}x${o}`) >= 0 &&
              ((u = a.match(/(Version)\/([\d.]+)/)),
              u || (u = [0, 1, "13_0_0"]),
              (m = !1)),
            d && !f && ((r.os = "android"), (r.android = !0)),
            (u || h || p) && ((r.os = "ios"), (r.ios = !0)),
            r
          );
        })(e)),
      k
    );
  }
  function A() {
    return (
      P ||
        (P = (function () {
          const e = c();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      P
    );
  }
  const q = {
    on(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      const n = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][n](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      function n() {
        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
        for (var s = arguments.length, a = new Array(s), r = 0; r < s; r++)
          a[r] = arguments[r];
        t.apply(i, a);
      }
      return (n.__emitterProxy = t), i.on(e, n, s);
    },
    onAny(e, t) {
      const s = this;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, n) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(n, 1);
                });
          }),
          s)
        : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners) return e;
      let t, s, i;
      for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
        a[r] = arguments[r];
      "string" == typeof a[0] || Array.isArray(a[0])
        ? ((t = a[0]), (s = a.slice(1, a.length)), (i = e))
        : ((t = a[0].events), (s = a[0].data), (i = a[0].context || e)),
        s.unshift(i);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(i, [t, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(i, s);
              });
        }),
        e
      );
    },
  };
  const _ = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i[0].clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(i.css("padding-left") || 0, 10) -
            parseInt(i.css("padding-right") || 0, 10)),
          (s =
            s -
            parseInt(i.css("padding-top") || 0, 10) -
            parseInt(i.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        { $wrapperEl: n, size: a, rtlTranslate: r, wrongRTL: l } = e,
        o = e.virtual && i.virtual.enabled,
        d = o ? e.virtual.slides.length : e.slides.length,
        c = n.children(`.${e.params.slideClass}`),
        u = o ? e.virtual.slides.length : c.length;
      let p = [];
      const h = [],
        f = [];
      let m = i.slidesOffsetBefore;
      "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
      let g = i.slidesOffsetAfter;
      "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        S = e.slidesGrid.length;
      let b = i.spaceBetween,
        w = -m,
        y = 0,
        C = 0;
      if (void 0 === a) return;
      "string" == typeof b &&
        b.indexOf("%") >= 0 &&
        (b = (parseFloat(b.replace("%", "")) / 100) * a),
        (e.virtualSize = -b),
        r
          ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        i.centeredSlides &&
          i.cssMode &&
          (x(e.wrapperEl, "--swiper-centered-offset-before", ""),
          x(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const T = i.grid && i.grid.rows > 1 && e.grid;
      let E;
      T && e.grid.initSlides(u);
      const M =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < u; n += 1) {
        E = 0;
        const r = c.eq(n);
        if (
          (T && e.grid.updateSlide(n, r, u, t), "none" !== r.css("display"))
        ) {
          if ("auto" === i.slidesPerView) {
            M && (c[n].style[t("width")] = "");
            const a = getComputedStyle(r[0]),
              l = r[0].style.transform,
              o = r[0].style.webkitTransform;
            if (
              (l && (r[0].style.transform = "none"),
              o && (r[0].style.webkitTransform = "none"),
              i.roundLengths)
            )
              E = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
            else {
              const e = s(a, "width"),
                t = s(a, "padding-left"),
                i = s(a, "padding-right"),
                n = s(a, "margin-left"),
                l = s(a, "margin-right"),
                o = a.getPropertyValue("box-sizing");
              if (o && "border-box" === o) E = e + n + l;
              else {
                const { clientWidth: s, offsetWidth: a } = r[0];
                E = e + t + i + n + l + (a - s);
              }
            }
            l && (r[0].style.transform = l),
              o && (r[0].style.webkitTransform = o),
              i.roundLengths && (E = Math.floor(E));
          } else
            (E = (a - (i.slidesPerView - 1) * b) / i.slidesPerView),
              i.roundLengths && (E = Math.floor(E)),
              c[n] && (c[n].style[t("width")] = `${E}px`);
          c[n] && (c[n].swiperSlideSize = E),
            f.push(E),
            i.centeredSlides
              ? ((w = w + E / 2 + y / 2 + b),
                0 === y && 0 !== n && (w = w - a / 2 - b),
                0 === n && (w = w - a / 2 - b),
                Math.abs(w) < 0.001 && (w = 0),
                i.roundLengths && (w = Math.floor(w)),
                C % i.slidesPerGroup == 0 && p.push(w),
                h.push(w))
              : (i.roundLengths && (w = Math.floor(w)),
                (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                  e.params.slidesPerGroup ==
                  0 && p.push(w),
                h.push(w),
                (w = w + E + b)),
            (e.virtualSize += E + b),
            (y = E),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, a) + g),
        r &&
          l &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
        i.setWrapperSize &&
          n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
        T && e.grid.updateWrapperSize(E, p, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < p.length; s += 1) {
          let n = p[s];
          i.roundLengths && (n = Math.floor(n)),
            p[s] <= e.virtualSize - a && t.push(n);
        }
        (p = t),
          Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 &&
            p.push(e.virtualSize - a);
      }
      if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
        const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
        c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
          [s]: `${b}px`,
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        f.forEach((t) => {
          e += t + (i.spaceBetween ? i.spaceBetween : 0);
        }),
          (e -= i.spaceBetween);
        const t = e - a;
        p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (e -= i.spaceBetween),
          e < a)
        ) {
          const t = (a - e) / 2;
          p.forEach((e, s) => {
            p[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: p,
          slidesGrid: h,
          slidesSizesGrid: f,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        x(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
          x(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - f[f.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (u !== d && e.emit("slidesLengthChange"),
        p.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== S && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset(),
        !(o || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
      ) {
        const t = `${i.containerModifierClass}backface-hidden`,
          s = e.$el.hasClass(t);
        u <= i.maxBackfaceHiddenSlides
          ? s || e.$el.addClass(t)
          : s && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let n,
        a = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const r = (e) =>
        i
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            s.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !i) break;
            s.push(r(e));
          }
      else s.push(r(t.activeIndex));
      for (n = 0; n < s.length; n += 1)
        if (void 0 !== s[n]) {
          const e = s[n].offsetHeight;
          a = e > a ? e : a;
        }
      (a || 0 === a) && t.$wrapperEl.css("height", `${a}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = e.isHorizontal()
          ? t[s].offsetLeft
          : t[s].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: n, snapGrid: a } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let r = -e;
      n && (r = e),
        i.removeClass(s.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < i.length; e += 1) {
        const l = i[e];
        let o = l.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
        const d =
            (r + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          c =
            (r - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          u = -(r - o),
          p = u + t.slidesSizesGrid[e];
        ((u >= 0 && u < t.size - 1) ||
          (p > 1 && p <= t.size) ||
          (u <= 0 && p >= t.size)) &&
          (t.visibleSlides.push(l),
          t.visibleSlidesIndexes.push(e),
          i.eq(e).addClass(s.slideVisibleClass)),
          (l.progress = n ? -d : d),
          (l.originalProgress = n ? -c : c);
      }
      t.visibleSlides = S(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: a, isEnd: r } = t;
      const l = a,
        o = r;
      0 === i
        ? ((n = 0), (a = !0), (r = !0))
        : ((n = (e - t.minTranslate()) / i), (a = n <= 0), (r = n >= 1)),
        Object.assign(t, { progress: n, isBeginning: a, isEnd: r }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        a && !l && t.emit("reachBeginning toEdge"),
        r && !o && t.emit("reachEnd toEdge"),
        ((l && !a) || (o && !r)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          $wrapperEl: i,
          activeIndex: n,
          realIndex: a,
        } = e,
        r = e.virtual && s.virtual.enabled;
      let l;
      t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
      ),
        (l = r
          ? e.$wrapperEl.find(
              `.${s.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : t.eq(n)),
        l.addClass(s.slideActiveClass),
        s.loop &&
          (l.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                )
                .addClass(s.slideDuplicateActiveClass)
            : i
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                )
                .addClass(s.slideDuplicateActiveClass));
      let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
      let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop &&
        0 === d.length &&
        ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
        s.loop &&
          (o.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${o.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${o.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass),
          d.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: i,
          snapGrid: n,
          params: a,
          activeIndex: r,
          realIndex: l,
          snapIndex: o,
        } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < i.length; e += 1)
          void 0 !== i[e + 1]
            ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
              ? (c = e)
              : s >= i[e] && s < i[e + 1] && (c = e + 1)
            : s >= i[e] && (c = e);
        a.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (n.indexOf(s) >= 0) d = n.indexOf(s);
      else {
        const e = Math.min(a.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / a.slidesPerGroup);
      }
      if ((d >= n.length && (d = n.length - 1), c === r))
        return void (d !== o && ((t.snapIndex = d), t.emit("snapIndexChange")));
      const u = parseInt(
        t.slides.eq(c).attr("data-swiper-slide-index") || c,
        10
      );
      Object.assign(t, {
        snapIndex: d,
        realIndex: u,
        previousIndex: r,
        activeIndex: c,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        l !== u && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = S(e).closest(`.${s.slideClass}`)[0];
      let n,
        a = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (a = !0), (n = e);
            break;
          }
      if (!i || !a)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              S(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const I = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: s, translate: i, $wrapperEl: n } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let a = y(n[0], e);
      return s && (a = -a), a || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: i,
          params: n,
          $wrapperEl: a,
          wrapperEl: r,
          progress: l,
        } = s;
      let o,
        d = 0,
        c = 0;
      s.isHorizontal() ? (d = i ? -e : e) : (c = e),
        n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        n.cssMode
          ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -d
              : -c)
          : n.virtualTranslate ||
            a.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? d : c);
      const u = s.maxTranslate() - s.minTranslate();
      (o = 0 === u ? 0 : (e - s.minTranslate()) / u),
        o !== l && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, i, n) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === i && (i = !0);
      const a = this,
        { params: r, wrapperEl: l } = a;
      if (a.animating && r.preventInteractionOnTransition) return !1;
      const o = a.minTranslate(),
        d = a.maxTranslate();
      let c;
      if (
        ((c = i && e > o ? o : i && e < d ? d : e),
        a.updateProgress(c),
        r.cssMode)
      ) {
        const e = a.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!a.support.smoothScroll)
            return (
              M({ swiper: a, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (a.setTransition(0),
            a.setTranslate(c),
            s &&
              (a.emit("beforeTransitionStart", t, n), a.emit("transitionEnd")))
          : (a.setTransition(t),
            a.setTranslate(c),
            s &&
              (a.emit("beforeTransitionStart", t, n),
              a.emit("transitionStart")),
            a.animating ||
              ((a.animating = !0),
              a.onTranslateToWrapperTransitionEnd ||
                (a.onTranslateToWrapperTransitionEnd = function (e) {
                  a &&
                    !a.destroyed &&
                    e.target === this &&
                    (a.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    a.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    (a.onTranslateToWrapperTransitionEnd = null),
                    delete a.onTranslateToWrapperTransitionEnd,
                    s && a.emit("transitionEnd"));
                }),
              a.$wrapperEl[0].addEventListener(
                "transitionend",
                a.onTranslateToWrapperTransitionEnd
              ),
              a.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                a.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function z(e) {
    let { swiper: t, runCallbacks: s, direction: i, step: n } = e;
    const { activeIndex: a, previousIndex: r } = t;
    let l = i;
    if (
      (l || (l = a > r ? "next" : a < r ? "prev" : "reset"),
      t.emit(`transition${n}`),
      s && a !== r)
    ) {
      if ("reset" === l) return void t.emit(`slideResetTransition${n}`);
      t.emit(`slideChangeTransition${n}`),
        "next" === l
          ? t.emit(`slideNextTransition${n}`)
          : t.emit(`slidePrevTransition${n}`);
    }
  }
  const N = {
    slideTo: function (e, t, s, i, n) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        "number" != typeof e && "string" != typeof e)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const a = this;
      let r = e;
      r < 0 && (r = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: u,
        rtlTranslate: p,
        wrapperEl: h,
        enabled: f,
      } = a;
      if ((a.animating && l.preventInteractionOnTransition) || (!f && !i && !n))
        return !1;
      const m = Math.min(a.params.slidesPerGroupSkip, r);
      let g = m + Math.floor((r - m) / a.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1),
        (u || l.initialSlide || 0) === (c || 0) &&
          s &&
          a.emit("beforeSlideChangeStart");
      const v = -o[g];
      if ((a.updateProgress(v), l.normalizeSlideIndex))
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * d[e]),
            i = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (r = e)
              : t >= s && t < i && (r = e + 1)
            : t >= s && (r = e);
        }
      if (a.initialized && r !== u) {
        if (!a.allowSlideNext && v < a.translate && v < a.minTranslate())
          return !1;
        if (
          !a.allowSlidePrev &&
          v > a.translate &&
          v > a.maxTranslate() &&
          (u || 0) !== r
        )
          return !1;
      }
      let S;
      if (
        ((S = r > u ? "next" : r < u ? "prev" : "reset"),
        (p && -v === a.translate) || (!p && v === a.translate))
      )
        return (
          a.updateActiveIndex(r),
          l.autoHeight && a.updateAutoHeight(),
          a.updateSlidesClasses(),
          "slide" !== l.effect && a.setTranslate(v),
          "reset" !== S && (a.transitionStart(s, S), a.transitionEnd(s, S)),
          !1
        );
      if (l.cssMode) {
        const e = a.isHorizontal(),
          s = p ? v : -v;
        if (0 === t) {
          const t = a.virtual && a.params.virtual.enabled;
          t &&
            ((a.wrapperEl.style.scrollSnapType = "none"),
            (a._immediateVirtual = !0)),
            (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (a.wrapperEl.style.scrollSnapType = ""),
                  (a._swiperImmediateVirtual = !1);
              });
        } else {
          if (!a.support.smoothScroll)
            return (
              M({ swiper: a, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        a.setTransition(t),
        a.setTranslate(v),
        a.updateActiveIndex(r),
        a.updateSlidesClasses(),
        a.emit("beforeTransitionStart", t, i),
        a.transitionStart(s, S),
        0 === t
          ? a.transitionEnd(s, S)
          : a.animating ||
            ((a.animating = !0),
            a.onSlideToWrapperTransitionEnd ||
              (a.onSlideToWrapperTransitionEnd = function (e) {
                a &&
                  !a.destroyed &&
                  e.target === this &&
                  (a.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  a.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  (a.onSlideToWrapperTransitionEnd = null),
                  delete a.onSlideToWrapperTransitionEnd,
                  a.transitionEnd(s, S));
              }),
            a.$wrapperEl[0].addEventListener(
              "transitionend",
              a.onSlideToWrapperTransitionEnd
            ),
            a.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              a.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0);
      const n = this;
      let a = e;
      return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, s, i);
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        { animating: n, enabled: a, params: r } = i;
      if (!a) return i;
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l;
      if (r.loop) {
        if (n && r.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      return r.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        {
          params: n,
          animating: a,
          snapGrid: r,
          slidesGrid: l,
          rtlTranslate: o,
          enabled: d,
        } = i;
      if (!d) return i;
      if (n.loop) {
        if (a && n.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = c(o ? i.translate : -i.translate),
        p = r.map((e) => c(e));
      let h = r[p.indexOf(u) - 1];
      if (void 0 === h && n.cssMode) {
        let e;
        r.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (
        (void 0 !== h &&
          ((f = l.indexOf(h)),
          f < 0 && (f = i.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
            (f = Math.max(f, 0)))),
        n.rewind && i.isBeginning)
      ) {
        const n =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(n, e, t, s);
      }
      return i.slideTo(f, e, t, s);
    },
    slideReset: function (e, t, s) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, s)
      );
    },
    slideToClosest: function (e, t, s, i) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === i && (i = 0.5);
      const n = this;
      let a = n.activeIndex;
      const r = Math.min(n.params.slidesPerGroupSkip, a),
        l = r + Math.floor((a - r) / n.params.slidesPerGroup),
        o = n.rtlTranslate ? n.translate : -n.translate;
      if (o >= n.snapGrid[l]) {
        const e = n.snapGrid[l];
        o - e > (n.snapGrid[l + 1] - e) * i && (a += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[l - 1];
        o - e <= (n.snapGrid[l] - e) * i && (a -= n.params.slidesPerGroup);
      }
      return (
        (a = Math.max(a, 0)),
        (a = Math.min(a, n.slidesGrid.length - 1)),
        n.slideTo(a, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        a = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(S(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? a < e.loopedSlides - i / 2 ||
              a > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (a = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                b(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a)
            : a > e.slides.length - i
            ? (e.loopFix(),
              (a = s
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              b(() => {
                e.slideTo(a);
              }))
            : e.slideTo(a);
      } else e.slideTo(a);
    },
  };
  const B = {
    loopCreate: function () {
      const e = this,
        t = o(),
        { params: s, $wrapperEl: i } = e,
        n = i.children().length > 0 ? S(i.children()[0].parentNode) : i;
      n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let a = n.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (a.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let i = 0; i < e; i += 1) {
            const e = S(t.createElement("div")).addClass(
              `${s.slideClass} ${s.slideBlankClass}`
            );
            n.append(e);
          }
          a = n.children(`.${s.slideClass}`);
        }
      }
      "auto" !== s.slidesPerView ||
        s.loopedSlides ||
        (s.loopedSlides = a.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(s.loopedSlides || s.slidesPerView, 10)
        )),
        (e.loopedSlides += s.loopAdditionalSlides),
        e.loopedSlides > a.length && (e.loopedSlides = a.length);
      const r = [],
        l = [];
      a.each((t, s) => {
        const i = S(t);
        s < e.loopedSlides && l.push(t),
          s < a.length && s >= a.length - e.loopedSlides && r.push(t),
          i.attr("data-swiper-slide-index", s);
      });
      for (let e = 0; e < l.length; e += 1)
        n.append(S(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = r.length - 1; e >= 0; e -= 1)
        n.prepend(S(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: i,
        allowSlidePrev: n,
        allowSlideNext: a,
        snapGrid: r,
        rtlTranslate: l,
      } = e;
      let o;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -r[t] - e.getTranslate();
      if (t < i) {
        (o = s.length - 3 * i + t), (o += i);
        e.slideTo(o, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((l ? -e.translate : e.translate) - d);
      } else if (t >= s.length - i) {
        (o = -s.length + t + i), (o += i);
        e.slideTo(o, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((l ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = n), (e.allowSlideNext = a), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: s } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        s.removeAttr("data-swiper-slide-index");
    },
  };
  function H(e) {
    const t = this,
      s = o(),
      i = c(),
      n = t.touchEventsData,
      { params: a, touches: r, enabled: l } = t;
    if (!l) return;
    if (t.animating && a.preventInteractionOnTransition) return;
    !t.animating && a.cssMode && a.loop && t.loopFix();
    let d = e;
    d.originalEvent && (d = d.originalEvent);
    let u = S(d.target);
    if ("wrapper" === a.touchEventsTarget && !u.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === d.type),
      !n.isTouchEvent && "which" in d && 3 === d.which)
    )
      return;
    if (!n.isTouchEvent && "button" in d && d.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!a.noSwipingClass &&
      "" !== a.noSwipingClass &&
      d.target &&
      d.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (u = S(e.path[0]));
    const p = a.noSwipingSelector
        ? a.noSwipingSelector
        : `.${a.noSwipingClass}`,
      h = !(!d.target || !d.target.shadowRoot);
    if (
      a.noSwiping &&
      (h
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(s) {
                return s && s !== o() && s !== c()
                  ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host))
                  : null;
              })(t)
            );
          })(p, d.target)
        : u.closest(p)[0])
    )
      return void (t.allowClick = !0);
    if (a.swipeHandler && !u.closest(a.swipeHandler)[0]) return;
    (r.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
      (r.currentY =
        "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
    const f = r.currentX,
      m = r.currentY,
      g = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
      v = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
    if (g && (f <= v || f >= i.innerWidth - v)) {
      if ("prevent" !== g) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (r.startX = f),
      (r.startY = m),
      (n.touchStartTime = w()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      a.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== d.type)
    ) {
      let e = !0;
      u.is(n.focusableElements) &&
        ((e = !1), "SELECT" === u[0].nodeName && (n.isTouched = !1)),
        s.activeElement &&
          S(s.activeElement).is(n.focusableElements) &&
          s.activeElement !== u[0] &&
          s.activeElement.blur();
      const i = e && t.allowTouchMove && a.touchStartPreventDefault;
      (!a.touchStartForcePreventDefault && !i) ||
        u[0].isContentEditable ||
        d.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !a.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", d);
  }
  function G(e) {
    const t = o(),
      s = this,
      i = s.touchEventsData,
      { params: n, touches: a, rtlTranslate: r, enabled: l } = s;
    if (!l) return;
    let d = e;
    if ((d.originalEvent && (d = d.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", d)
      );
    if (i.isTouchEvent && "touchmove" !== d.type) return;
    const c =
        "touchmove" === d.type &&
        d.targetTouches &&
        (d.targetTouches[0] || d.changedTouches[0]),
      u = "touchmove" === d.type ? c.pageX : d.pageX,
      p = "touchmove" === d.type ? c.pageY : d.pageY;
    if (d.preventedByNestedSwiper) return (a.startX = u), void (a.startY = p);
    if (!s.allowTouchMove)
      return (
        S(d.target).is(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(a, { startX: u, startY: p, currentX: u, currentY: p }),
          (i.touchStartTime = w()))
        )
      );
    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
      if (s.isVertical()) {
        if (
          (p < a.startY && s.translate <= s.maxTranslate()) ||
          (p > a.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (u < a.startX && s.translate <= s.maxTranslate()) ||
        (u > a.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      d.target === t.activeElement &&
      S(d.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", d),
      d.targetTouches && d.targetTouches.length > 1)
    )
      return;
    (a.currentX = u), (a.currentY = p);
    const h = a.currentX - a.startX,
      f = a.currentY - a.startY;
    if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && a.currentY === a.startY) ||
      (s.isVertical() && a.currentX === a.startX)
        ? (i.isScrolling = !1)
        : h * h + f * f >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", d),
      void 0 === i.startMoving &&
        ((a.currentX === a.startX && a.currentY === a.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !n.cssMode && d.cancelable && d.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
      i.isMoved ||
        (n.loop && !n.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", d)),
      s.emit("sliderMove", d),
      (i.isMoved = !0);
    let m = s.isHorizontal() ? h : f;
    (a.diff = m),
      (m *= n.touchRatio),
      r && (m = -m),
      (s.swipeDirection = m > 0 ? "prev" : "next"),
      (i.currentTranslate = m + i.startTranslate);
    let g = !0,
      v = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (v = 0),
      m > 0 && i.currentTranslate > s.minTranslate()
        ? ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + m) ** v))
        : m < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - m) ** v)),
      g && (d.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(m) > n.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (i.currentTranslate = i.startTranslate),
          void (a.diff = s.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
        n.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        n.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function j(e) {
    const t = this,
      s = t.touchEventsData,
      { params: i, touches: n, rtlTranslate: a, slidesGrid: r, enabled: l } = t;
    if (!l) return;
    let o = e;
    if (
      (o.originalEvent && (o = o.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", o),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    i.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = w(),
      c = d - s.touchStartTime;
    if (t.allowClick) {
      const e = o.path || (o.composedPath && o.composedPath());
      t.updateClickedSlide((e && e[0]) || o.target),
        t.emit("tap click", o),
        c < 300 &&
          d - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", o);
    }
    if (
      ((s.lastClickTime = w()),
      b(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === n.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let u;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (u = i.followFinger
        ? a
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      i.cssMode)
    )
      return;
    if (t.params.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: u });
    let p = 0,
      h = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < r.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== r[e + t]
        ? u >= r[e] && u < r[e + t] && ((p = e), (h = r[e + t] - r[e]))
        : u >= r[e] && ((p = e), (h = r[r.length - 1] - r[r.length - 2]));
    }
    let f = null,
      m = null;
    i.rewind &&
      (t.isBeginning
        ? (m =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (f = 0));
    const g = (u - r[p]) / h,
      v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (c > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (g >= i.longSwipesRatio
          ? t.slideTo(i.rewind && t.isEnd ? f : p + v)
          : t.slideTo(p)),
        "prev" === t.swipeDirection &&
          (g > 1 - i.longSwipesRatio
            ? t.slideTo(p + v)
            : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio
            ? t.slideTo(m)
            : t.slideTo(p));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
        ? o.target === t.navigation.nextEl
          ? t.slideTo(p + v)
          : t.slideTo(p)
        : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v),
          "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
    }
  }
  function V() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: n, snapGrid: a } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = i),
      e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
  }
  function F(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function R() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const a = e.maxTranslate() - e.minTranslate();
    (n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
      n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let Y = !1;
  function W() {}
  const X = (e, t) => {
    const s = o(),
      {
        params: i,
        touchEvents: n,
        el: a,
        wrapperEl: r,
        device: l,
        support: d,
      } = e,
      c = !!i.nested,
      u = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;
    if (d.touch) {
      const t = !(
        "touchstart" !== n.start ||
        !d.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      a[u](n.start, e.onTouchStart, t),
        a[u](
          n.move,
          e.onTouchMove,
          d.passiveListener ? { passive: !1, capture: c } : c
        ),
        a[u](n.end, e.onTouchEnd, t),
        n.cancel && a[u](n.cancel, e.onTouchEnd, t);
    } else
      a[u](n.start, e.onTouchStart, !1),
        s[u](n.move, e.onTouchMove, c),
        s[u](n.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      a[u]("click", e.onClick, !0),
      i.cssMode && r[u]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[p](
            l.ios || l.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            V,
            !0
          )
        : e[p]("observerUpdate", V, !0);
  };
  const U = {
      attachEvents: function () {
        const e = this,
          t = o(),
          { params: s, support: i } = e;
        (e.onTouchStart = H.bind(e)),
          (e.onTouchMove = G.bind(e)),
          (e.onTouchEnd = j.bind(e)),
          s.cssMode && (e.onScroll = R.bind(e)),
          (e.onClick = F.bind(e)),
          i.touch && !Y && (t.addEventListener("touchstart", W), (Y = !0)),
          X(e, "on");
      },
      detachEvents: function () {
        X(this, "off");
      },
    },
    J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const K = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: s,
          loopedSlides: i = 0,
          params: n,
          $el: a,
        } = e,
        r = n.breakpoints;
      if (!r || (r && 0 === Object.keys(r).length)) return;
      const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
      if (!l || e.currentBreakpoint === l) return;
      const o = (l in r ? r[l] : void 0) || e.originalParams,
        d = J(e, n),
        c = J(e, o),
        u = n.enabled;
      d && !c
        ? (a.removeClass(
            `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !d &&
          c &&
          (a.addClass(`${n.containerModifierClass}grid`),
          ((o.grid.fill && "column" === o.grid.fill) ||
            (!o.grid.fill && "column" === n.grid.fill)) &&
            a.addClass(`${n.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const p = o.direction && o.direction !== n.direction,
        h = n.loop && (o.slidesPerView !== n.slidesPerView || p);
      p && s && e.changeDirection(), E(e.params, o);
      const f = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        u && !f ? e.disable() : !u && f && e.enable(),
        (e.currentBreakpoint = l),
        e.emit("_beforeBreakpoint", o),
        h &&
          s &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - i + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", o);
    },
    getBreakpoint: function (e, t, s) {
      if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
        return;
      let i = !1;
      const n = c(),
        a = "window" === t ? n.innerHeight : s.clientHeight,
        r = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: a * t, point: e };
          }
          return { value: e, point: e };
        });
      r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < r.length; e += 1) {
        const { point: a, value: l } = r[e];
        "window" === t
          ? n.matchMedia(`(min-width: ${l}px)`).matches && (i = a)
          : l <= s.clientWidth && (i = a);
      }
      return i || "max";
    },
  };
  const Z = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: i, $el: n, device: a, support: r } = e,
        l = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((i) => {
                    e[i] && s.push(t + i);
                  })
                : "string" == typeof e && s.push(t + e);
            }),
            s
          );
        })(
          [
            "initialized",
            s.direction,
            { "pointer-events": !r.touch },
            { "free-mode": e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: i },
            { grid: s.grid && s.grid.rows > 1 },
            {
              "grid-column":
                s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
            },
            { android: a.android },
            { ios: a.ios },
            { "css-mode": s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
          ],
          s.containerModifierClass
        );
      t.push(...l), n.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const Q = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function ee(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const i = Object.keys(s)[0],
        n = s[i];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in n
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              E(t, s))
            : E(t, s))
        : E(t, s);
    };
  }
  const te = {
      eventsEmitter: q,
      update: _,
      translate: I,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            z({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              z({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: N,
      loop: B,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = "move"),
            (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (s.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: U,
      breakpoints: K,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: Z,
      images: {
        loadImage: function (e, t, s, i, n, a) {
          const r = c();
          let l;
          function o() {
            a && a();
          }
          S(e).parent("picture")[0] || (e.complete && n)
            ? o()
            : t
            ? ((l = new r.Image()),
              (l.onload = o),
              (l.onerror = o),
              i && (l.sizes = i),
              s && (l.srcset = s),
              t && (l.src = t))
            : o();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const i = e.imagesToLoad[s];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    se = {};
  class ie {
    constructor() {
      let e, t;
      for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++)
        i[n] = arguments[n];
      if (
        (1 === i.length &&
        i[0].constructor &&
        "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
          ? (t = i[0])
          : ([e, t] = i),
        t || (t = {}),
        (t = E({}, t)),
        e && !t.el && (t.el = e),
        t.el && S(t.el).length > 1)
      ) {
        const e = [];
        return (
          S(t.el).each((s) => {
            const i = E({}, t, { el: s });
            e.push(new ie(i));
          }),
          e
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = D()),
        (a.device = O({ userAgent: t.userAgent })),
        (a.browser = A()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
      const r = {};
      a.modules.forEach((e) => {
        e({
          swiper: a,
          extendParams: ee(t, r),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const l = E({}, Q, r);
      return (
        (a.params = E({}, l, se, t)),
        (a.originalParams = E({}, a.params)),
        (a.passedParams = E({}, t)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((e) => {
            a.on(e, a.params.on[e]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        (a.$ = S),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: e,
          classNames: [],
          slides: S(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === a.params.direction,
          isVertical: () => "vertical" === a.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (a.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (a.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              a.support.touch || !a.params.simulateTouch
                ? a.touchEventsTouch
                : a.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: w(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        n = (s.maxTranslate() - i) * e + i;
      s.translateTo(n, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: i,
        slidesGrid: n,
        slidesSizesGrid: a,
        size: r,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = i[l].swiperSlideSize;
        for (let s = l + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < i.length; e += 1) {
          (t ? n[e] + a[e] - n[l] < r : n[e] - n[l] < r) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          n[l] - n[e] < r && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (i(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || i()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${i}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = S(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = S(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children(i());
      })();
      if (0 === n.length && t.params.createElements) {
        const e = o().createElement("div");
        (n = S(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            n.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: i, $el: n, $wrapperEl: a, slides: r } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            n.removeAttr("style"),
            a.removeAttr("style"),
            r &&
              r.length &&
              r
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      E(se, e);
    }
    static get extendedDefaults() {
      return se;
    }
    static get defaults() {
      return Q;
    }
    static installModule(e) {
      ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
      const t = ie.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => ie.installModule(e)), ie)
        : (ie.installModule(e), ie);
    }
  }
  Object.keys(te).forEach((e) => {
    Object.keys(te[e]).forEach((t) => {
      ie.prototype[t] = te[e][t];
    });
  }),
    ie.use([
      function (e) {
        let { swiper: t, on: s, emit: i } = e;
        const n = c();
        let a = null,
          r = null;
        const l = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (i("beforeResize"), i("resize"));
          },
          o = () => {
            t && !t.destroyed && t.initialized && i("orientationchange");
          };
        s("init", () => {
          t.params.resizeObserver && void 0 !== n.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((a = new ResizeObserver((e) => {
                r = n.requestAnimationFrame(() => {
                  const { width: s, height: i } = t;
                  let n = s,
                    a = i;
                  e.forEach((e) => {
                    let { contentBoxSize: s, contentRect: i, target: r } = e;
                    (r && r !== t.el) ||
                      ((n = i ? i.width : (s[0] || s).inlineSize),
                      (a = i ? i.height : (s[0] || s).blockSize));
                  }),
                    (n === s && a === i) || l();
                });
              })),
              a.observe(t.el))
            : (n.addEventListener("resize", l),
              n.addEventListener("orientationchange", o));
        }),
          s("destroy", () => {
            r && n.cancelAnimationFrame(r),
              a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
              n.removeEventListener("resize", l),
              n.removeEventListener("orientationchange", o);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: i, emit: n } = e;
        const a = [],
          r = c(),
          l = function (e, t) {
            void 0 === t && (t = {});
            const s = new (r.MutationObserver || r.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void n("observerUpdate", e[0]);
                const t = function () {
                  n("observerUpdate", e[0]);
                };
                r.requestAnimationFrame
                  ? r.requestAnimationFrame(t)
                  : r.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              a.push(s);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          i("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) l(e[t]);
              }
              l(t.$el[0], { childList: t.params.observeSlideChildren }),
                l(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          i("destroy", () => {
            a.forEach((e) => {
              e.disconnect();
            }),
              a.splice(0, a.length);
          });
      },
    ]);
  const ne = ie;
  function ae(e) {
    let { swiper: t, extendParams: s, on: i, emit: n } = e;
    function a(e) {
      let s;
      return (
        e &&
          ((s = S(e)),
          t.params.uniqueNavElements &&
            "string" == typeof e &&
            s.length > 1 &&
            1 === t.$el.find(e).length &&
            (s = t.$el.find(e))),
        s
      );
    }
    function r(e, s) {
      const i = t.params.navigation;
      e &&
        e.length > 0 &&
        (e[s ? "addClass" : "removeClass"](i.disabledClass),
        e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
        t.params.watchOverflow &&
          t.enabled &&
          e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
    }
    function l() {
      if (t.params.loop) return;
      const { $nextEl: e, $prevEl: s } = t.navigation;
      r(s, t.isBeginning && !t.params.rewind),
        r(e, t.isEnd && !t.params.rewind);
    }
    function d(e) {
      e.preventDefault(),
        (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
    }
    function c(e) {
      e.preventDefault(),
        (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
    }
    function u() {
      const e = t.params.navigation;
      if (
        ((t.params.navigation = (function (e, t, s, i) {
          const n = o();
          return (
            e.params.createElements &&
              Object.keys(i).forEach((a) => {
                if (!s[a] && !0 === s.auto) {
                  let r = e.$el.children(`.${i[a]}`)[0];
                  r ||
                    ((r = n.createElement("div")),
                    (r.className = i[a]),
                    e.$el.append(r)),
                    (s[a] = r),
                    (t[a] = r);
                }
              }),
            s
          );
        })(t, t.originalParams.navigation, t.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        })),
        !e.nextEl && !e.prevEl)
      )
        return;
      const s = a(e.nextEl),
        i = a(e.prevEl);
      s && s.length > 0 && s.on("click", c),
        i && i.length > 0 && i.on("click", d),
        Object.assign(t.navigation, {
          $nextEl: s,
          nextEl: s && s[0],
          $prevEl: i,
          prevEl: i && i[0],
        }),
        t.enabled ||
          (s && s.addClass(e.lockClass), i && i.addClass(e.lockClass));
    }
    function p() {
      const { $nextEl: e, $prevEl: s } = t.navigation;
      e &&
        e.length &&
        (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
        s &&
          s.length &&
          (s.off("click", d), s.removeClass(t.params.navigation.disabledClass));
    }
    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    }),
      (t.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      i("init", () => {
        u(), l();
      }),
      i("toEdge fromEdge lock unlock", () => {
        l();
      }),
      i("destroy", () => {
        p();
      }),
      i("enable disable", () => {
        const { $nextEl: e, $prevEl: s } = t.navigation;
        e &&
          e[t.enabled ? "removeClass" : "addClass"](
            t.params.navigation.lockClass
          ),
          s &&
            s[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            );
      }),
      i("click", (e, s) => {
        const { $nextEl: i, $prevEl: a } = t.navigation,
          r = s.target;
        if (t.params.navigation.hideOnClick && !S(r).is(a) && !S(r).is(i)) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === r || t.pagination.el.contains(r))
          )
            return;
          let e;
          i
            ? (e = i.hasClass(t.params.navigation.hiddenClass))
            : a && (e = a.hasClass(t.params.navigation.hiddenClass)),
            n(!0 === e ? "navigationShow" : "navigationHide"),
            i && i.toggleClass(t.params.navigation.hiddenClass),
            a && a.toggleClass(t.params.navigation.hiddenClass);
        }
      }),
      Object.assign(t.navigation, { update: l, init: u, destroy: p });
  }
  function re(e) {
    let { swiper: t, extendParams: s, on: i, emit: n } = e;
    s({
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader",
      },
    }),
      (t.lazy = {});
    let a = !1,
      r = !1;
    function l(e, s) {
      void 0 === s && (s = !0);
      const i = t.params.lazy;
      if (void 0 === e) return;
      if (0 === t.slides.length) return;
      const a =
          t.virtual && t.params.virtual.enabled
            ? t.$wrapperEl.children(
                `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
              )
            : t.slides.eq(e),
        r = a.find(
          `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
        );
      !a.hasClass(i.elementClass) ||
        a.hasClass(i.loadedClass) ||
        a.hasClass(i.loadingClass) ||
        r.push(a[0]),
        0 !== r.length &&
          r.each((e) => {
            const r = S(e);
            r.addClass(i.loadingClass);
            const o = r.attr("data-background"),
              d = r.attr("data-src"),
              c = r.attr("data-srcset"),
              u = r.attr("data-sizes"),
              p = r.parent("picture");
            t.loadImage(r[0], d || o, c, u, !1, () => {
              if (null != t && t && (!t || t.params) && !t.destroyed) {
                if (
                  (o
                    ? (r.css("background-image", `url("${o}")`),
                      r.removeAttr("data-background"))
                    : (c && (r.attr("srcset", c), r.removeAttr("data-srcset")),
                      u && (r.attr("sizes", u), r.removeAttr("data-sizes")),
                      p.length &&
                        p.children("source").each((e) => {
                          const t = S(e);
                          t.attr("data-srcset") &&
                            (t.attr("srcset", t.attr("data-srcset")),
                            t.removeAttr("data-srcset"));
                        }),
                      d && (r.attr("src", d), r.removeAttr("data-src"))),
                  r.addClass(i.loadedClass).removeClass(i.loadingClass),
                  a.find(`.${i.preloaderClass}`).remove(),
                  t.params.loop && s)
                ) {
                  const e = a.attr("data-swiper-slide-index");
                  if (a.hasClass(t.params.slideDuplicateClass)) {
                    l(
                      t.$wrapperEl
                        .children(
                          `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                        )
                        .index(),
                      !1
                    );
                  } else {
                    l(
                      t.$wrapperEl
                        .children(
                          `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                        )
                        .index(),
                      !1
                    );
                  }
                }
                n("lazyImageReady", a[0], r[0]),
                  t.params.autoHeight && t.updateAutoHeight();
              }
            }),
              n("lazyImageLoad", a[0], r[0]);
          });
    }
    function o() {
      const { $wrapperEl: e, params: s, slides: i, activeIndex: n } = t,
        a = t.virtual && s.virtual.enabled,
        o = s.lazy;
      let d = s.slidesPerView;
      function c(t) {
        if (a) {
          if (
            e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`)
              .length
          )
            return !0;
        } else if (i[t]) return !0;
        return !1;
      }
      function u(e) {
        return a ? S(e).attr("data-swiper-slide-index") : S(e).index();
      }
      if (
        ("auto" === d && (d = 0), r || (r = !0), t.params.watchSlidesProgress)
      )
        e.children(`.${s.slideVisibleClass}`).each((e) => {
          l(a ? S(e).attr("data-swiper-slide-index") : S(e).index());
        });
      else if (d > 1) for (let e = n; e < n + d; e += 1) c(e) && l(e);
      else l(n);
      if (o.loadPrevNext)
        if (d > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
          const e = o.loadPrevNextAmount,
            t = d,
            s = Math.min(n + t + Math.max(e, t), i.length),
            a = Math.max(n - Math.max(t, e), 0);
          for (let e = n + d; e < s; e += 1) c(e) && l(e);
          for (let e = a; e < n; e += 1) c(e) && l(e);
        } else {
          const t = e.children(`.${s.slideNextClass}`);
          t.length > 0 && l(u(t));
          const i = e.children(`.${s.slidePrevClass}`);
          i.length > 0 && l(u(i));
        }
    }
    function d() {
      const e = c();
      if (!t || t.destroyed) return;
      const s = t.params.lazy.scrollingElement
          ? S(t.params.lazy.scrollingElement)
          : S(e),
        i = s[0] === e,
        n = i ? e.innerWidth : s[0].offsetWidth,
        r = i ? e.innerHeight : s[0].offsetHeight,
        l = t.$el.offset(),
        { rtlTranslate: u } = t;
      let p = !1;
      u && (l.left -= t.$el[0].scrollLeft);
      const h = [
        [l.left, l.top],
        [l.left + t.width, l.top],
        [l.left, l.top + t.height],
        [l.left + t.width, l.top + t.height],
      ];
      for (let e = 0; e < h.length; e += 1) {
        const t = h[e];
        if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= r) {
          if (0 === t[0] && 0 === t[1]) continue;
          p = !0;
        }
      }
      const f = !(
        "touchstart" !== t.touchEvents.start ||
        !t.support.passiveListener ||
        !t.params.passiveListeners
      ) && { passive: !0, capture: !1 };
      p ? (o(), s.off("scroll", d, f)) : a || ((a = !0), s.on("scroll", d, f));
    }
    i("beforeInit", () => {
      t.params.lazy.enabled &&
        t.params.preloadImages &&
        (t.params.preloadImages = !1);
    }),
      i("init", () => {
        t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : o());
      }),
      i("scroll", () => {
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          !t.params.freeMode.sticky &&
          o();
      }),
      i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
        t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : o());
      }),
      i("transitionStart", () => {
        t.params.lazy.enabled &&
          (t.params.lazy.loadOnTransitionStart ||
            (!t.params.lazy.loadOnTransitionStart && !r)) &&
          (t.params.lazy.checkInView ? d() : o());
      }),
      i("transitionEnd", () => {
        t.params.lazy.enabled &&
          !t.params.lazy.loadOnTransitionStart &&
          (t.params.lazy.checkInView ? d() : o());
      }),
      i("slideChange", () => {
        const {
          lazy: e,
          cssMode: s,
          watchSlidesProgress: i,
          touchReleaseOnEdges: n,
          resistanceRatio: a,
        } = t.params;
        e.enabled && (s || (i && (n || 0 === a))) && o();
      }),
      Object.assign(t.lazy, { load: o, loadInSlide: l });
  }
  function le(e) {
    let t,
      { swiper: s, extendParams: i, on: n, emit: a } = e;
    function r() {
      const e = s.slides.eq(s.activeIndex);
      let i = s.params.autoplay.delay;
      e.attr("data-swiper-autoplay") &&
        (i = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
        clearTimeout(t),
        (t = b(() => {
          let e;
          s.params.autoplay.reverseDirection
            ? s.params.loop
              ? (s.loopFix(),
                (e = s.slidePrev(s.params.speed, !0, !0)),
                a("autoplay"))
              : s.isBeginning
              ? s.params.autoplay.stopOnLastSlide
                ? d()
                : ((e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0)),
                  a("autoplay"))
              : ((e = s.slidePrev(s.params.speed, !0, !0)), a("autoplay"))
            : s.params.loop
            ? (s.loopFix(),
              (e = s.slideNext(s.params.speed, !0, !0)),
              a("autoplay"))
            : s.isEnd
            ? s.params.autoplay.stopOnLastSlide
              ? d()
              : ((e = s.slideTo(0, s.params.speed, !0, !0)), a("autoplay"))
            : ((e = s.slideNext(s.params.speed, !0, !0)), a("autoplay")),
            ((s.params.cssMode && s.autoplay.running) || !1 === e) && r();
        }, i));
    }
    function l() {
      return (
        void 0 === t &&
        !s.autoplay.running &&
        ((s.autoplay.running = !0), a("autoplayStart"), r(), !0)
      );
    }
    function d() {
      return (
        !!s.autoplay.running &&
        void 0 !== t &&
        (t && (clearTimeout(t), (t = void 0)),
        (s.autoplay.running = !1),
        a("autoplayStop"),
        !0)
      );
    }
    function c(e) {
      s.autoplay.running &&
        (s.autoplay.paused ||
          (t && clearTimeout(t),
          (s.autoplay.paused = !0),
          0 !== e && s.params.autoplay.waitForTransition
            ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                s.$wrapperEl[0].addEventListener(e, p);
              })
            : ((s.autoplay.paused = !1), r())));
    }
    function u() {
      const e = o();
      "hidden" === e.visibilityState && s.autoplay.running && c(),
        "visible" === e.visibilityState &&
          s.autoplay.paused &&
          (r(), (s.autoplay.paused = !1));
    }
    function p(e) {
      s &&
        !s.destroyed &&
        s.$wrapperEl &&
        e.target === s.$wrapperEl[0] &&
        (["transitionend", "webkitTransitionEnd"].forEach((e) => {
          s.$wrapperEl[0].removeEventListener(e, p);
        }),
        (s.autoplay.paused = !1),
        s.autoplay.running ? r() : d());
    }
    function h() {
      s.params.autoplay.disableOnInteraction ? d() : (a("autoplayPause"), c()),
        ["transitionend", "webkitTransitionEnd"].forEach((e) => {
          s.$wrapperEl[0].removeEventListener(e, p);
        });
    }
    function f() {
      s.params.autoplay.disableOnInteraction ||
        ((s.autoplay.paused = !1), a("autoplayResume"), r());
    }
    (s.autoplay = { running: !1, paused: !1 }),
      i({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      }),
      n("init", () => {
        if (s.params.autoplay.enabled) {
          l();
          o().addEventListener("visibilitychange", u),
            s.params.autoplay.pauseOnMouseEnter &&
              (s.$el.on("mouseenter", h), s.$el.on("mouseleave", f));
        }
      }),
      n("beforeTransitionStart", (e, t, i) => {
        s.autoplay.running &&
          (i || !s.params.autoplay.disableOnInteraction
            ? s.autoplay.pause(t)
            : d());
      }),
      n("sliderFirstMove", () => {
        s.autoplay.running &&
          (s.params.autoplay.disableOnInteraction ? d() : c());
      }),
      n("touchEnd", () => {
        s.params.cssMode &&
          s.autoplay.paused &&
          !s.params.autoplay.disableOnInteraction &&
          r();
      }),
      n("destroy", () => {
        s.$el.off("mouseenter", h),
          s.$el.off("mouseleave", f),
          s.autoplay.running && d();
        o().removeEventListener("visibilitychange", u);
      }),
      Object.assign(s.autoplay, { pause: c, run: r, start: l, stop: d });
  }
  function oe(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : t;
  }
  function de(e) {
    let { swiper: t, extendParams: s, on: i } = e;
    s({ fadeEffect: { crossFade: !1, transformEl: null } });
    !(function (e) {
      const {
        effect: t,
        swiper: s,
        on: i,
        setTranslate: n,
        setTransition: a,
        overwriteParams: r,
        perspective: l,
      } = e;
      let o;
      i("beforeInit", () => {
        if (s.params.effect !== t) return;
        s.classNames.push(`${s.params.containerModifierClass}${t}`),
          l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
        const e = r ? r() : {};
        Object.assign(s.params, e), Object.assign(s.originalParams, e);
      }),
        i("setTranslate", () => {
          s.params.effect === t && n();
        }),
        i("setTransition", (e, i) => {
          s.params.effect === t && a(i);
        }),
        i("virtualUpdate", () => {
          s.slides.length || (o = !0),
            requestAnimationFrame(() => {
              o && s.slides.length && (n(), (o = !1));
            });
        });
    })({
      effect: "fade",
      swiper: t,
      on: i,
      setTranslate: () => {
        const { slides: e } = t,
          s = t.params.fadeEffect;
        for (let i = 0; i < e.length; i += 1) {
          const e = t.slides.eq(i);
          let n = -e[0].swiperSlideOffset;
          t.params.virtualTranslate || (n -= t.translate);
          let a = 0;
          t.isHorizontal() || ((a = n), (n = 0));
          const r = t.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(e[0].progress), 0)
            : 1 + Math.min(Math.max(e[0].progress, -1), 0);
          oe(s, e)
            .css({ opacity: r })
            .transform(`translate3d(${n}px, ${a}px, 0px)`);
        }
      },
      setTransition: (e) => {
        const { transformEl: s } = t.params.fadeEffect;
        (s ? t.slides.find(s) : t.slides).transition(e),
          (function (e) {
            let { swiper: t, duration: s, transformEl: i, allSlides: n } = e;
            const { slides: a, activeIndex: r, $wrapperEl: l } = t;
            if (t.params.virtualTranslate && 0 !== s) {
              let e,
                s = !1;
              (e = n ? (i ? a.find(i) : a) : i ? a.eq(r).find(i) : a.eq(r)),
                e.transitionEnd(() => {
                  if (s) return;
                  if (!t || t.destroyed) return;
                  (s = !0), (t.animating = !1);
                  const e = ["webkitTransitionEnd", "transitionend"];
                  for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
                });
            }
          })({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode,
      }),
    });
  }
  window.addEventListener("load", function (e) {
    document.querySelector(".swiper") &&
      new ne(".swiper", {
        modules: [ae, le, de, re],
        observer: !0,
        observeParents: !0,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 800,
        loop: !0,
        lazy: !0,
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
          768: { slidesPerView: 1, spaceBetween: 20 },
        },
        on: {},
      });
  });
  let ce = !1;
  var ue, pe;
  setTimeout(() => {
    if (ce) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (ue = window),
    (pe = function () {
      return (function (e) {
        var t = {};
        function s(i) {
          if (t[i]) return t[i].exports;
          var n = (t[i] = { i, l: !1, exports: {} });
          return e[i].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
        }
        return (
          (s.m = e),
          (s.c = t),
          (s.d = function (e, t, i) {
            s.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: i });
          }),
          (s.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (s.t = function (e, t) {
            if ((1 & t && (e = s(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (
              (s.r(i),
              Object.defineProperty(i, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var n in e)
                s.d(
                  i,
                  n,
                  function (t) {
                    return e[t];
                  }.bind(null, n)
                );
            return i;
          }),
          (s.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return s.d(t, "a", t), t;
          }),
          (s.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (s.p = ""),
          s((s.s = 0))
        );
      })([
        function (e, t, s) {
          s(1);
          var i = [],
            n = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            a = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            r = { t: "top", r: "right", b: "bottom", l: "left", c: "centered" };
          function l() {}
          var o = ["click", "focusin", "keydown", "input"];
          function d(e) {
            return Array.isArray(e)
              ? e.map(d)
              : "[object Object]" === {}.toString.call(e)
              ? Object.keys(e).reduce(function (t, s) {
                  return (t[s] = d(e[s])), t;
                }, {})
              : e;
          }
          function c(e, t) {
            var s = e.calendar.querySelector(".qs-overlay"),
              i = s && !s.classList.contains("qs-hidden");
            (t = t || new Date(e.currentYear, e.currentMonth)),
              (e.calendar.innerHTML = [u(t, e, i), p(t, e, i), h(e, i)].join(
                ""
              )),
              i &&
                setTimeout(function () {
                  T(!0, e);
                }, 10);
          }
          function u(e, t, s) {
            return [
              '<div class="qs-controls' + (s ? " qs-blur" : "") + '">',
              '<div class="qs-arrow qs-left"></div>',
              '<div class="qs-month-year">',
              '<span class="qs-month">' + t.months[e.getMonth()] + "</span>",
              '<span class="qs-year">' + e.getFullYear() + "</span>",
              "</div>",
              '<div class="qs-arrow qs-right"></div>',
              "</div>",
            ].join("");
          }
          function p(e, t, s) {
            var i = t.currentMonth,
              n = t.currentYear,
              a = t.dateSelected,
              r = t.maxDate,
              l = t.minDate,
              o = t.showAllDates,
              d = t.days,
              c = t.disabledDates,
              u = t.disabler,
              p = t.noWeekends,
              h = t.startDay,
              f = t.weekendIndices,
              m = t.events,
              g = t.getRange ? t.getRange() : {},
              v = +g.start,
              S = +g.end,
              b = new Date(),
              y = n === b.getFullYear() && i === b.getMonth(),
              C = w(new Date(e).setDate(1)),
              T = C.getDay() - h,
              E = T < 0 ? 7 : 0;
            C.setMonth(C.getMonth() + 1), C.setDate(0);
            var x = C.getDate(),
              M = [],
              L = E + 7 * (((T + x) / 7) | 0);
            (L += (T + x) % 7 ? 7 : 0), 0 !== h && 0 === T && (L += 7);
            for (var k = 1; k <= L; k++) {
              var $ = (k - 1) % 7,
                P = d[$],
                D = k - (T >= 0 ? T : 7 + T),
                O = new Date(n, i, D),
                A = m[+O],
                q = "qs-num",
                _ = '<span class="qs-num">' + O.getDate() + "</span>",
                I = v && S && +O >= v && +O <= S;
              D < 1 || D > x
                ? ((q = "qs-empty qs-outside-current-month"),
                  o
                    ? (A && (q += " qs-event"), (q += " qs-disabled"))
                    : (_ = ""))
                : (((l && O < l) ||
                    (r && O > r) ||
                    u(O) ||
                    c.some(function (e) {
                      return e === +O;
                    }) ||
                    (p &&
                      f.some(function (e) {
                        return e === $;
                      }))) &&
                    (q = "qs-disabled"),
                  A && (q += " qs-event"),
                  y && D === b.getDate() && (q += " qs-current"),
                  +O == +a && (q += " qs-active"),
                  I &&
                    ((q += " qs-range-date-" + $),
                    v !== S &&
                      (q +=
                        +O === v
                          ? " qs-range-date-start qs-active"
                          : +O === S
                          ? " qs-range-date-end qs-active"
                          : " qs-range-date-middle"))),
                M.push(
                  '<div class="qs-square ' + q + " " + P + '">' + _ + "</div>"
                );
            }
            var z = d
              .map(function (e) {
                return '<div class="qs-square qs-day">' + e + "</div>";
              })
              .concat(M);
            if (z.length % 7 != 0)
              throw "Calendar not constructed properly. The # of squares should be a multiple of 7.";
            return (
              z.unshift(
                '<div class="qs-squares' + (s ? " qs-blur" : "") + '">'
              ),
              z.push("</div>"),
              z.join("")
            );
          }
          function h(e, t) {
            var s = e.overlayPlaceholder,
              i = e.overlayButton;
            return [
              '<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">',
              "<div>",
              '<input class="qs-overlay-year" placeholder="' + s + '" />',
              '<div class="qs-close">&#10005;</div>',
              "</div>",
              '<div class="qs-overlay-month-container">' +
                e.overlayMonths
                  .map(function (e, t) {
                    return [
                      '<div class="qs-overlay-month" data-month-num="' +
                        t +
                        '">',
                      '<span data-month-num="' + t + '">' + e + "</span>",
                      "</div>",
                    ].join("");
                  })
                  .join("") +
                "</div>",
              '<div class="qs-submit qs-disabled">' + i + "</div>",
              "</div>",
            ].join("");
          }
          function f(e, t, s) {
            var i = t.el,
              n = t.calendar.querySelector(".qs-active"),
              a = e.textContent,
              r = t.sibling;
            ((i.disabled || i.readOnly) && t.respectDisabledReadOnly) ||
              ((t.dateSelected = s
                ? void 0
                : new Date(t.currentYear, t.currentMonth, a)),
              n && n.classList.remove("qs-active"),
              s || e.classList.add("qs-active"),
              g(i, t, s),
              s || y(t),
              r &&
                (m({ instance: t, deselect: s }),
                t.first &&
                  !r.dateSelected &&
                  ((r.currentYear = t.currentYear),
                  (r.currentMonth = t.currentMonth),
                  (r.currentMonthName = t.currentMonthName)),
                c(t),
                c(r)),
              t.onSelect(t, s ? void 0 : new Date(t.dateSelected)));
          }
          function m(e) {
            var t = e.instance.first ? e.instance : e.instance.sibling,
              s = t.sibling;
            t === e.instance
              ? e.deselect
                ? ((t.minDate = t.originalMinDate),
                  (s.minDate = s.originalMinDate))
                : (s.minDate = t.dateSelected)
              : e.deselect
              ? ((s.maxDate = s.originalMaxDate),
                (t.maxDate = t.originalMaxDate))
              : (t.maxDate = s.dateSelected);
          }
          function g(e, t, s) {
            if (!t.nonInput)
              return s
                ? (e.value = "")
                : t.formatter !== l
                ? t.formatter(e, t.dateSelected, t)
                : void (e.value = t.dateSelected.toDateString());
          }
          function v(e, t, s, i) {
            s || i
              ? (s && (t.currentYear = +s), i && (t.currentMonth = +i))
              : ((t.currentMonth += e.contains("qs-right") ? 1 : -1),
                12 === t.currentMonth
                  ? ((t.currentMonth = 0), t.currentYear++)
                  : -1 === t.currentMonth &&
                    ((t.currentMonth = 11), t.currentYear--)),
              (t.currentMonthName = t.months[t.currentMonth]),
              c(t),
              t.onMonthChange(t);
          }
          function S(e) {
            if (!e.noPosition) {
              var t = e.position.top,
                s = e.position.right;
              if (e.position.centered)
                return e.calendarContainer.classList.add("qs-centered");
              var i = [e.parent, e.el, e.calendarContainer].map(function (e) {
                  return e.getBoundingClientRect();
                }),
                n = i[0],
                a = i[1],
                r = i[2],
                l =
                  a.top -
                  n.top +
                  e.parent.scrollTop -
                  (t ? r.height : -1 * a.height) +
                  "px",
                o = a.left - n.left + (s ? a.width - r.width : 0) + "px";
              e.calendarContainer.style.setProperty("top", l),
                e.calendarContainer.style.setProperty("left", o);
            }
          }
          function b(e) {
            return (
              "[object Date]" === {}.toString.call(e) &&
              "Invalid Date" !== e.toString()
            );
          }
          function w(e) {
            if (b(e) || ("number" == typeof e && !isNaN(e))) {
              var t = new Date(+e);
              return new Date(t.getFullYear(), t.getMonth(), t.getDate());
            }
          }
          function y(e) {
            e.disabled ||
              (!e.calendarContainer.classList.contains("qs-hidden") &&
                !e.alwaysShow &&
                (T(!0, e),
                e.calendarContainer.classList.add("qs-hidden"),
                e.onHide(e)));
          }
          function C(e) {
            e.disabled ||
              (e.calendarContainer.classList.remove("qs-hidden"),
              S(e),
              e.onShow(e));
          }
          function T(e, t) {
            var s = t.calendar;
            if (s) {
              var i = s.querySelector(".qs-overlay"),
                n = i.querySelector(".qs-overlay-year"),
                a = s.querySelector(".qs-controls"),
                r = s.querySelector(".qs-squares");
              e
                ? (i.classList.add("qs-hidden"),
                  a.classList.remove("qs-blur"),
                  r.classList.remove("qs-blur"),
                  (n.value = ""))
                : (i.classList.remove("qs-hidden"),
                  a.classList.add("qs-blur"),
                  r.classList.add("qs-blur"),
                  n.focus());
            }
          }
          function E(e, t, s, i) {
            var n = isNaN(+new Date().setFullYear(t.value || void 0)),
              a = n ? null : t.value;
            13 === (e.which || e.keyCode) || "click" === e.type
              ? i
                ? v(null, s, a, i)
                : n || t.classList.contains("qs-disabled") || v(null, s, a, i)
              : s.calendar.contains(t) &&
                s.calendar
                  .querySelector(".qs-submit")
                  .classList[n ? "add" : "remove"]("qs-disabled");
          }
          function x(e) {
            var t = e.type,
              s = e.target,
              n = s.classList,
              a = i.filter(function (e) {
                return e.calendar.contains(s) || e.el === s;
              })[0],
              r = a && a.calendar.contains(s);
            if (!(a && a.isMobile && a.disableMobile))
              if ("click" === t) {
                if (!a) return i.forEach(y);
                if (a.disabled) return;
                var l = a.calendar,
                  o = a.calendarContainer,
                  d = a.disableYearOverlay,
                  c = a.nonInput,
                  u = l.querySelector(".qs-overlay-year"),
                  p = !!l.querySelector(".qs-hidden"),
                  h = l.querySelector(".qs-month-year").contains(s),
                  m = s.dataset.monthNum;
                if (a.noPosition && !r)
                  (o.classList.contains("qs-hidden") ? C : y)(a);
                else if (n.contains("qs-arrow")) v(n, a);
                else if (h || n.contains("qs-close")) d || T(!p, a);
                else if (m) E(e, u, a, m);
                else {
                  if (n.contains("qs-num")) {
                    var g = "SPAN" === s.nodeName ? s.parentNode : s;
                    return void (g.classList.contains("qs-active")
                      ? f(g, a, !0)
                      : g.classList.contains("qs-disabled") || f(g, a));
                  }
                  n.contains("qs-submit") && !n.contains("qs-disabled")
                    ? E(e, u, a)
                    : c && s === a.el && C(a);
                }
              } else if ("focusin" === t && a)
                C(a),
                  i.forEach(function (e) {
                    e !== a && y(e);
                  });
              else if ("keydown" === t && a && !a.disabled) {
                var S = !a.calendar
                  .querySelector(".qs-overlay")
                  .classList.contains("qs-hidden");
                13 === (e.which || e.keyCode) && S && r
                  ? E(e, s, a)
                  : 27 === (e.which || e.keyCode) && S && r && T(!0, a);
              } else if ("input" === t) {
                if (!a || !a.calendar.contains(s)) return;
                var b = a.calendar.querySelector(".qs-submit"),
                  w = s.value
                    .split("")
                    .reduce(function (e, t) {
                      return e || "0" !== t
                        ? e + (t.match(/[0-9]/) ? t : "")
                        : "";
                    }, "")
                    .slice(0, 4);
                (s.value = w),
                  b.classList[4 === w.length ? "remove" : "add"]("qs-disabled");
              }
          }
          function M() {
            C(this);
          }
          function L() {
            y(this);
          }
          function k(e, t) {
            var s = w(e),
              i = this.currentYear,
              n = this.currentMonth,
              a = this.sibling;
            if (null == e)
              return (
                (this.dateSelected = void 0),
                g(this.el, this, !0),
                a && (m({ instance: this, deselect: !0 }), c(a)),
                c(this),
                this
              );
            if (!b(e)) throw "`setDate` needs a JavaScript Date object.";
            if (
              this.disabledDates.some(function (e) {
                return +e == +s;
              }) ||
              s < this.minDate ||
              s > this.maxDate
            )
              throw "You can't manually set a date that's disabled.";
            return (
              (this.dateSelected = s),
              t &&
                ((this.currentYear = s.getFullYear()),
                (this.currentMonth = s.getMonth()),
                (this.currentMonthName = this.months[s.getMonth()])),
              g(this.el, this),
              a && (m({ instance: this }), c(a)),
              ((i === s.getFullYear() && n === s.getMonth()) || t) &&
                c(this, s),
              this
            );
          }
          function $(e) {
            return D(this, e, !0);
          }
          function P(e) {
            return D(this, e);
          }
          function D(e, t, s) {
            var i = e.dateSelected,
              n = e.first,
              a = e.sibling,
              r = e.minDate,
              l = e.maxDate,
              o = w(t),
              d = s ? "Min" : "Max";
            function u() {
              return "original" + d + "Date";
            }
            function p() {
              return d.toLowerCase() + "Date";
            }
            function h() {
              return "set" + d;
            }
            function f() {
              throw "Out-of-range date passed to " + h();
            }
            if (null == t)
              (e[u()] = void 0),
                a
                  ? ((a[u()] = void 0),
                    s
                      ? ((n && !i) || (!n && !a.dateSelected)) &&
                        ((e.minDate = void 0), (a.minDate = void 0))
                      : ((n && !a.dateSelected) || (!n && !i)) &&
                        ((e.maxDate = void 0), (a.maxDate = void 0)))
                  : (e[p()] = void 0);
            else {
              if (!b(t)) throw "Invalid date passed to " + h();
              a
                ? (((n && s && o > (i || l)) ||
                    (n && !s && o < (a.dateSelected || r)) ||
                    (!n && s && o > (a.dateSelected || l)) ||
                    (!n && !s && o < (i || r))) &&
                    f(),
                  (e[u()] = o),
                  (a[u()] = o),
                  ((s && ((n && !i) || (!n && !a.dateSelected))) ||
                    (!s && ((n && !a.dateSelected) || (!n && !i)))) &&
                    ((e[p()] = o), (a[p()] = o)))
                : (((s && o > (i || l)) || (!s && o < (i || r))) && f(),
                  (e[p()] = o));
            }
            return a && c(a), c(e), e;
          }
          function O() {
            var e = this.first ? this : this.sibling,
              t = e.sibling;
            return { start: e.dateSelected, end: t.dateSelected };
          }
          function A() {
            var e = this.inlinePosition,
              t = this.parent,
              s = this.calendarContainer,
              n = this.el,
              a = this.sibling,
              r = this;
            for (var l in (e &&
              (i.some(function (e) {
                return e !== r && e.parent === t;
              }) ||
                t.style.setProperty("position", null)),
            s.remove(),
            (i = i.filter(function (e) {
              return e.el !== n;
            })),
            a && delete a.sibling,
            this))
              delete this[l];
            i.length ||
              o.forEach(function (e) {
                document.removeEventListener(e, x);
              });
          }
          e.exports = function (e, t) {
            i.length ||
              o.forEach(function (e) {
                document.addEventListener(e, x);
              });
            var s = (function (e, t) {
              var s = e;
              if (
                ("string" == typeof s &&
                  (s =
                    "#" === s[0]
                      ? document.getElementById(s.slice(1))
                      : document.querySelector(s)),
                !s)
              )
                throw "No selector / element found.";
              var o = (function (e, t) {
                  if (
                    i.some(function (e) {
                      return e.el === t;
                    })
                  )
                    throw "A datepicker already exists on that element.";
                  var s = d(e);
                  s.events &&
                    (s.events = s.events.reduce(function (e, t) {
                      if (!b(t))
                        throw '"options.events" must only contain valid JavaScript Date objects.';
                      return (e[+w(t)] = !0), e;
                    }, {})),
                    ["startDate", "dateSelected", "minDate", "maxDate"].forEach(
                      function (e) {
                        var t = s[e];
                        if (t && !b(t))
                          throw (
                            '"options.' +
                            e +
                            '" needs to be a valid JavaScript Date object.'
                          );
                        s[e] = w(t);
                      }
                    );
                  var a = s.position,
                    o = s.maxDate,
                    c = s.minDate,
                    u = s.dateSelected,
                    p = s.overlayPlaceholder,
                    h = s.overlayButton,
                    f = s.startDay,
                    m = s.id;
                  if (
                    ((s.startDate = w(s.startDate || u || new Date())),
                    (s.disabledDates = (s.disabledDates || []).map(function (
                      e
                    ) {
                      var t = +w(e);
                      if (!b(e))
                        throw 'You supplied an invalid date to "options.disabledDates".';
                      if (t === +w(u))
                        throw '"disabledDates" cannot contain the same date as "dateSelected".';
                      return t;
                    })),
                    s.hasOwnProperty("id") && null == m)
                  )
                    throw "Id cannot be `null` or `undefined`";
                  if (null != m) {
                    var g = i.filter(function (e) {
                      return e.id === m;
                    });
                    if (g.length > 1)
                      throw "Only two datepickers can share an id.";
                    g.length
                      ? ((s.second = !0), (s.sibling = g[0]))
                      : (s.first = !0);
                  }
                  var v = ["tr", "tl", "br", "bl", "c"].some(function (e) {
                    return a === e;
                  });
                  if (a && !v)
                    throw '"options.position" must be one of the following: tl, tr, bl, br, or c.';
                  if (
                    ((s.position = (function (e) {
                      var t = e[0],
                        s = e[1],
                        i = {};
                      return (i[r[t]] = 1), s && (i[r[s]] = 1), i;
                    })(a || "bl")),
                    o < c)
                  )
                    throw '"maxDate" in options is less than "minDate".';
                  if (u) {
                    function C(e) {
                      throw (
                        '"dateSelected" in options is ' +
                        (e ? "less" : "greater") +
                        ' than "' +
                        (e || "max") +
                        'Date".'
                      );
                    }
                    c > u && C("min"), o < u && C();
                  }
                  if (
                    ([
                      "onSelect",
                      "onShow",
                      "onHide",
                      "onMonthChange",
                      "formatter",
                      "disabler",
                    ].forEach(function (e) {
                      "function" != typeof s[e] && (s[e] = l);
                    }),
                    [
                      "customDays",
                      "customMonths",
                      "customOverlayMonths",
                    ].forEach(function (e, t) {
                      var i = s[e],
                        n = t ? 12 : 7;
                      if (i) {
                        if (
                          !Array.isArray(i) ||
                          i.length !== n ||
                          i.some(function (e) {
                            return "string" != typeof e;
                          })
                        )
                          throw (
                            '"' + e + '" must be an array with ${num} strings.'
                          );
                        s[t ? (t < 2 ? "months" : "overlayMonths") : "days"] =
                          i;
                      }
                    }),
                    f && f > 0 && f < 7)
                  ) {
                    var S = (s.customDays || n).slice(),
                      y = S.splice(0, f);
                    (s.customDays = S.concat(y)),
                      (s.startDay = +f),
                      (s.weekendIndices = [S.length - 1, S.length]);
                  } else (s.startDay = 0), (s.weekendIndices = [6, 0]);
                  return (
                    "string" != typeof p && delete s.overlayPlaceholder,
                    "string" != typeof h && delete s.overlayButton,
                    s
                  );
                })(t || { startDate: w(new Date()), position: "bl" }, s),
                c = s === document.body,
                u = c ? document.body : s.parentElement,
                p = document.createElement("div"),
                h = document.createElement("div");
              (p.className = "qs-datepicker-container qs-hidden"),
                (h.className = "qs-datepicker");
              var f = {
                el: s,
                parent: u,
                nonInput: "INPUT" !== s.nodeName,
                noPosition: c,
                position: !c && o.position,
                startDate: o.startDate,
                dateSelected: o.dateSelected,
                disabledDates: o.disabledDates,
                minDate: o.minDate,
                maxDate: o.maxDate,
                noWeekends: !!o.noWeekends,
                weekendIndices: o.weekendIndices,
                calendarContainer: p,
                calendar: h,
                currentMonth: (o.startDate || o.dateSelected).getMonth(),
                currentMonthName: (o.months || a)[
                  (o.startDate || o.dateSelected).getMonth()
                ],
                currentYear: (o.startDate || o.dateSelected).getFullYear(),
                events: o.events || {},
                setDate: k,
                remove: A,
                setMin: $,
                setMax: P,
                show: M,
                hide: L,
                onSelect: o.onSelect,
                onShow: o.onShow,
                onHide: o.onHide,
                onMonthChange: o.onMonthChange,
                formatter: o.formatter,
                disabler: o.disabler,
                months: o.months || a,
                days: o.customDays || n,
                startDay: o.startDay,
                overlayMonths:
                  o.overlayMonths ||
                  (o.months || a).map(function (e) {
                    return e.slice(0, 3);
                  }),
                overlayPlaceholder: o.overlayPlaceholder || "4-digit year",
                overlayButton: o.overlayButton || "Submit",
                disableYearOverlay: !!o.disableYearOverlay,
                disableMobile: !!o.disableMobile,
                isMobile: "ontouchstart" in window,
                alwaysShow: !!o.alwaysShow,
                id: o.id,
                showAllDates: !!o.showAllDates,
                respectDisabledReadOnly: !!o.respectDisabledReadOnly,
                first: o.first,
                second: o.second,
              };
              if (o.sibling) {
                var m = o.sibling,
                  v = f,
                  S = m.minDate || v.minDate,
                  y = m.maxDate || v.maxDate;
                (v.sibling = m),
                  (m.sibling = v),
                  (m.minDate = S),
                  (m.maxDate = y),
                  (v.minDate = S),
                  (v.maxDate = y),
                  (m.originalMinDate = S),
                  (m.originalMaxDate = y),
                  (v.originalMinDate = S),
                  (v.originalMaxDate = y),
                  (m.getRange = O),
                  (v.getRange = O);
              }
              o.dateSelected && g(s, f);
              var T = getComputedStyle(u).position;
              return (
                c ||
                  (T && "static" !== T) ||
                  ((f.inlinePosition = !0),
                  u.style.setProperty("position", "relative")),
                f.inlinePosition &&
                  i.forEach(function (e) {
                    e.parent === f.parent && (e.inlinePosition = !0);
                  }),
                i.push(f),
                p.appendChild(h),
                u.appendChild(p),
                f.alwaysShow && C(f),
                f
              );
            })(e, t);
            if (s.second) {
              var u = s.sibling;
              m({ instance: s, deselect: !s.dateSelected }),
                m({ instance: u, deselect: !u.dateSelected }),
                c(u);
            }
            return c(s, s.startDate || s.dateSelected), s.alwaysShow && S(s), s;
          };
        },
        function (e, t, s) {},
      ]);
    }),
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = pe())
      : "function" == typeof define && define.amd
      ? define([], pe)
      : "object" == typeof exports
      ? (exports.datepicker = pe())
      : (ue.datepicker = pe());
  let he = document.querySelectorAll(".booking__btn-Add"),
    fe = document.querySelectorAll(".booking__btn-Remove"),
    me = document.querySelector(".booking__parents"),
    ge = document.querySelector(".booking__childrens"),
    ve = document.querySelector(".booking__persons");
  window.addEventListener("click", (e) => {
    e.target == ve && ve.classList.toggle("_active");
  });
  let Se = document.querySelector(".booking__count-persons span");
  he.forEach((e) => {
    e.addEventListener("click", () => {
      let t = document.querySelectorAll(".booking__counts");
      if (e.parentElement.parentElement == me) {
        let e,
          s = t[0];
        (e = Number(t[0].innerHTML) + 1), (s.innerHTML = `${e}`);
      }
      if (e.parentElement.parentElement == ge) {
        let e,
          s = t[1];
        (e = Number(t[1].innerHTML) + 1), (s.innerHTML = `${e}`);
      }
      let s = document.querySelectorAll(".booking__counts"),
        i = Number(s[0].innerHTML) + Number(s[1].innerHTML);
      Se.innerHTML = `${i}`;
    });
  }),
    fe.forEach((e) => {
      e.addEventListener("click", () => {
        let t = document.querySelectorAll(".booking__counts");
        if (e.parentElement.parentElement == me) {
          let e = t[0];
          if (e.innerHTML > 1) {
            let t;
            (t = Number(e.innerHTML) - 1), (e.innerHTML = `${t}`);
          }
        }
        if (e.parentElement.parentElement == ge) {
          let e = t[1];
          if (e.innerHTML > 0) {
            let t;
            (t = Number(e.innerHTML) - 1), (e.innerHTML = `${t}`);
          }
        }
        let s = document.querySelectorAll(".booking__counts"),
          i = Number(s[0].innerHTML) + Number(s[1].innerHTML);
        Se.innerHTML = `${i}`;
      });
    }),
    $(function () {
      var e = $("#from")
          .datepicker({
            defaultDate: "+1w",
            changeMonth: !0,
            numberOfMonths: 2,
            minDate: 0,
          })
          .on("change", function () {
            t.datepicker("option", "minDate", s(this));
          }),
        t = $("#to")
          .datepicker({
            defaultDate: "+1w",
            changeMonth: !0,
            numberOfMonths: 2,
            minDate: 0,
          })
          .on("change", function () {
            e.datepicker("option", "maxDate", s(this));
          });
      function s(e) {
        var t;
        try {
          t = $.datepicker.parseDate("mm/dd/yy", e.value);
        } catch (e) {
          t = null;
        }
        return t;
      }
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
