"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [{
        isActive: true,
        age: 40,
        name: {
          first: "Dickerson",
          last: "Macdonald"
        }
      }, {
        isActive: false,
        age: 21,
        name: {
          first: "Larsen",
          last: "Shaw"
        }
      }, {
        isActive: false,
        age: 9,
        name: {
          first: "Mini",
          last: "Navarro"
        },
        _rowVariant: "success"
      }, {
        isActive: false,
        age: 89,
        name: {
          first: "Geneva",
          last: "Wilson"
        }
      }, {
        isActive: true,
        age: 38,
        name: {
          first: "Jami",
          last: "Carney"
        }
      }, {
        isActive: false,
        age: 27,
        name: {
          first: "Essie",
          last: "Dunlap"
        }
      }, {
        isActive: true,
        age: 40,
        name: {
          first: "Thor",
          last: "Macdonald"
        }
      }, {
        isActive: true,
        age: 87,
        name: {
          first: "Larsen",
          last: "Shaw"
        },
        _cellVariants: {
          age: "danger",
          isActive: "warning"
        }
      }, {
        isActive: false,
        age: 26,
        name: {
          first: "Mitzi",
          last: "Navarro"
        }
      }, {
        isActive: false,
        age: 22,
        name: {
          first: "Genevieve",
          last: "Wilson"
        }
      }, {
        isActive: true,
        age: 38,
        name: {
          first: "John",
          last: "Carney"
        }
      }, {
        isActive: false,
        age: 29,
        name: {
          first: "Dick",
          last: "Dunlap"
        }
      }],
      fields: [{
        key: "task_name",
        label: "Task Name",
        sortable: true,
        sortDirection: "desc"
      }, {
        key: "task_description",
        label: "Task Description",
        sortable: true,
        "class": "text-center"
      }, {
        key: "iscompleted",
        label: "Is Completed",
        formatter: function formatter(value, key, item) {
          return value ? "Yes" : "No";
        },
        sortable: true,
        sortByFormatted: true,
        filterByFormatted: true
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {
        value: 100,
        text: "Show a lot"
      }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      }
    };
  },
  computed: {
    sortOptions: function sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    }
  },
  mounted: function mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info: function info(item, index, button) {
      this.infoModal.title = "Row index: ".concat(index);
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal: function resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/pages/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/views/pages/Dashboard.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_04d4e0ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=04d4e0ba& */ "./resources/js/views/pages/Dashboard.vue?vue&type=template&id=04d4e0ba&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_04d4e0ba___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_04d4e0ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Dashboard.vue?vue&type=template&id=04d4e0ba&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/Dashboard.vue?vue&type=template&id=04d4e0ba& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_04d4e0ba___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_04d4e0ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_04d4e0ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=04d4e0ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Dashboard.vue?vue&type=template&id=04d4e0ba&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Dashboard.vue?vue&type=template&id=04d4e0ba&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Dashboard.vue?vue&type=template&id=04d4e0ba& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { lg: "6" } },
            [
              _c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Sort",
                  "label-for": "sort-by-select",
                  "label-cols-sm": "3",
                  "label-align-sm": "right",
                  "label-size": "sm",
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var ariaDescribedby = ref.ariaDescribedby
                      return [
                        _c(
                          "b-input-group",
                          { attrs: { size: "sm" } },
                          [
                            _c("b-form-select", {
                              staticClass: "w-75",
                              attrs: {
                                id: "sort-by-select",
                                options: _vm.sortOptions,
                                "aria-describedby": ariaDescribedby,
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "first",
                                    fn: function () {
                                      return [
                                        _c("option", { attrs: { value: "" } }, [
                                          _vm._v("-- none --"),
                                        ]),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ],
                                null,
                                true
                              ),
                              model: {
                                value: _vm.sortBy,
                                callback: function ($$v) {
                                  _vm.sortBy = $$v
                                },
                                expression: "sortBy",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "b-form-select",
                              {
                                staticClass: "w-25",
                                attrs: {
                                  disabled: !_vm.sortBy,
                                  "aria-describedby": ariaDescribedby,
                                  size: "sm",
                                },
                                model: {
                                  value: _vm.sortDesc,
                                  callback: function ($$v) {
                                    _vm.sortDesc = $$v
                                  },
                                  expression: "sortDesc",
                                },
                              },
                              [
                                _c("option", { domProps: { value: false } }, [
                                  _vm._v("Asc"),
                                ]),
                                _vm._v(" "),
                                _c("option", { domProps: { value: true } }, [
                                  _vm._v("Desc"),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { lg: "6" } },
            [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "Initial sort",
                    "label-for": "initial-sort-select",
                    "label-cols-sm": "3",
                    "label-align-sm": "right",
                    "label-size": "sm",
                  },
                },
                [
                  _c("b-form-select", {
                    attrs: {
                      id: "initial-sort-select",
                      options: ["asc", "desc", "last"],
                      size: "sm",
                    },
                    model: {
                      value: _vm.sortDirection,
                      callback: function ($$v) {
                        _vm.sortDirection = $$v
                      },
                      expression: "sortDirection",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { lg: "6" } },
            [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "Filter",
                    "label-for": "filter-input",
                    "label-cols-sm": "3",
                    "label-align-sm": "right",
                    "label-size": "sm",
                  },
                },
                [
                  _c(
                    "b-input-group",
                    { attrs: { size: "sm" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "filter-input",
                          type: "search",
                          placeholder: "Type to Search",
                        },
                        model: {
                          value: _vm.filter,
                          callback: function ($$v) {
                            _vm.filter = $$v
                          },
                          expression: "filter",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { disabled: !_vm.filter },
                              on: {
                                click: function ($event) {
                                  _vm.filter = ""
                                },
                              },
                            },
                            [_vm._v("Clear")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { lg: "6" } },
            [
              _c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Filter On",
                  description: "Leave all unchecked to filter on all data",
                  "label-cols-sm": "3",
                  "label-align-sm": "right",
                  "label-size": "sm",
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var ariaDescribedby = ref.ariaDescribedby
                      return [
                        _c(
                          "b-form-checkbox-group",
                          {
                            staticClass: "mt-1",
                            attrs: { "aria-describedby": ariaDescribedby },
                            model: {
                              value: _vm.filterOn,
                              callback: function ($$v) {
                                _vm.filterOn = $$v
                              },
                              expression: "filterOn",
                            },
                          },
                          [
                            _c(
                              "b-form-checkbox",
                              { attrs: { value: "name" } },
                              [_vm._v("Name")]
                            ),
                            _vm._v(" "),
                            _c("b-form-checkbox", { attrs: { value: "age" } }, [
                              _vm._v("Age"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-form-checkbox",
                              { attrs: { value: "isActive" } },
                              [_vm._v("Active")]
                            ),
                          ],
                          1
                        ),
                      ]
                    },
                  },
                ]),
                model: {
                  value: _vm.sortDirection,
                  callback: function ($$v) {
                    _vm.sortDirection = $$v
                  },
                  expression: "sortDirection",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { sm: "5", md: "6" } },
            [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "Per page",
                    "label-for": "per-page-select",
                    "label-cols-sm": "6",
                    "label-cols-md": "4",
                    "label-cols-lg": "3",
                    "label-align-sm": "right",
                    "label-size": "sm",
                  },
                },
                [
                  _c("b-form-select", {
                    attrs: {
                      id: "per-page-select",
                      options: _vm.pageOptions,
                      size: "sm",
                    },
                    model: {
                      value: _vm.perPage,
                      callback: function ($$v) {
                        _vm.perPage = $$v
                      },
                      expression: "perPage",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { sm: "7", md: "6" } },
            [
              _c("b-pagination", {
                staticClass: "my-0",
                attrs: {
                  "total-rows": _vm.totalRows,
                  "per-page": _vm.perPage,
                  align: "fill",
                  size: "sm",
                },
                model: {
                  value: _vm.currentPage,
                  callback: function ($$v) {
                    _vm.currentPage = $$v
                  },
                  expression: "currentPage",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          items: _vm.items,
          fields: _vm.fields,
          "current-page": _vm.currentPage,
          "per-page": _vm.perPage,
          filter: _vm.filter,
          "filter-included-fields": _vm.filterOn,
          "sort-by": _vm.sortBy,
          "sort-desc": _vm.sortDesc,
          "sort-direction": _vm.sortDirection,
          stacked: "md",
          "show-empty": "",
          small: "",
        },
        on: {
          "update:sortBy": function ($event) {
            _vm.sortBy = $event
          },
          "update:sort-by": function ($event) {
            _vm.sortBy = $event
          },
          "update:sortDesc": function ($event) {
            _vm.sortDesc = $event
          },
          "update:sort-desc": function ($event) {
            _vm.sortDesc = $event
          },
          filtered: _vm.onFiltered,
        },
        scopedSlots: _vm._u([
          {
            key: "cell(name)",
            fn: function (row) {
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(row.value.first) +
                    " " +
                    _vm._s(row.value.last) +
                    "\n        "
                ),
              ]
            },
          },
          {
            key: "cell(actions)",
            fn: function (row) {
              return [
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1",
                    attrs: { size: "sm" },
                    on: {
                      click: function ($event) {
                        return _vm.info(row.item, row.index, $event.target)
                      },
                    },
                  },
                  [_vm._v("\n                Info modal\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { attrs: { size: "sm" }, on: { click: row.toggleDetails } },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.detailsShowing ? "Hide" : "Show") +
                        " Details\n            "
                    ),
                  ]
                ),
              ]
            },
          },
          {
            key: "row-details",
            fn: function (row) {
              return [
                _c("b-card", [
                  _c(
                    "ul",
                    _vm._l(row.item, function (value, key) {
                      return _c("li", { key: key }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(key) +
                            ": " +
                            _vm._s(value) +
                            "\n                    "
                        ),
                      ])
                    }),
                    0
                  ),
                ]),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.infoModal.id,
            title: _vm.infoModal.title,
            "ok-only": "",
          },
          on: { hide: _vm.resetInfoModal },
        },
        [_c("pre", [_vm._v(_vm._s(_vm.infoModal.content))])]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);