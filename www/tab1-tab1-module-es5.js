function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"end\">{{ sc.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form>\n          <ion-list>\n            <ion-item>\n              <ion-row\n                style=\"\n                  display: block;\n                  flex: 1 1 0%;\n                  flex-direction: inherit;\n                  align-items: inherit;\n                  align-self: stretch;\n                  text-overflow: ellipsis;\n                  overflow: inherit;\n                  box-sizing: border-box;\n                \"\n              >\n                <ion-col size-xs=\"6\">\n                  <ion-select\n                    style=\"max-width: 100%\"\n                    name=\"month\"\n                    id=\"month\"\n                    placeholder=\"Select month\"\n                  >\n                    <ion-select-option value=\"January\"\n                      >January</ion-select-option\n                    >\n                    <ion-select-option value=\"February\"\n                      >February</ion-select-option\n                    >\n                    <ion-select-option value=\"March\">March</ion-select-option>\n                    <ion-select-option value=\"April\">April</ion-select-option>\n                    <ion-select-option value=\"May\">May</ion-select-option>\n                    <ion-select-option value=\"June\">June</ion-select-option>\n                    <ion-select-option value=\"July\">July</ion-select-option>\n                    <ion-select-option value=\"August\">August</ion-select-option>\n                    <ion-select-option value=\"September\"\n                      >September</ion-select-option\n                    >\n                    <ion-select-option value=\"October\"\n                      >October</ion-select-option\n                    >\n                    <ion-select-option value=\"November\"\n                      >November</ion-select-option\n                    >\n                    <ion-select-option value=\"December\"\n                      >December</ion-select-option\n                    >\n                  </ion-select>\n                </ion-col>\n                <ion-col size-xs=\"6\">\n                  <ion-select\n                    style=\"max-width: 100%\"\n                    name=\"year\"\n                    id=\"year\"\n                    placeholder=\"Select year\"\n                  >\n                    <ion-select-option value=\"2022\">2022</ion-select-option>\n                    <ion-select-option value=\"2023\">2023</ion-select-option>\n                    <ion-select-option value=\"2024\">2024</ion-select-option>\n                    <ion-select-option value=\"2025\">2025</ion-select-option>\n                    <ion-select-option value=\"2026\">2026</ion-select-option>\n                  </ion-select>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #1. Proportion of pregnant women register who recieved ANC as\n                per scheduled due date\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of pregnant women who recieved ANC services (as per\n                    schedule) in a month</ion-label\n                  >\n                  <p></p>\n                  <ion-input\n                    type=\"number\"\n                    name=\"1a\"\n                    id=\"1a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >Total no. of registered pregnant women whose ANC is due\n                    that month</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"1b\"\n                    id=\"1b\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #2. Proportion of new-borns who recieved HBNC services\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of newborns who recieved visits (as per schedule) as\n                    per HBNC schedule</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"2a\"\n                    id=\"2a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >Total no. of new-borns due for visit that month</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"2b\"\n                    id=\"2b\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #3. Proportion of cases referred for TB screening\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of individuals screened for TB</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"3a\"\n                    id=\"3a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >Target individuals per month (3% of the total\n                    population)</ion-label\n                  >\n                  <ion-input\n                    disabled\n                    type=\"number\"\n                    name=\"3b\"\n                    id=\"3b\"\n                    placeholder=\"0\"\n                    value=\"{{ (3/100)*sc.population |number: '1.0-0' }}\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\"\n                >#4. Number of footfalls in the month</ion-card-header\n              >\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of OPD cases including new and old cases</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"4a\"\n                    id=\"4a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #5. Proportion of individuals 30 years and above whose CBAC form\n                was filled\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of CBAC form filled</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"5a\"\n                    id=\"5a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >Total population of 30 years and above of age\n                  </ion-label>\n                  <ion-input\n                    disabled\n                    type=\"number\"\n                    name=\"5b\"\n                    id=\"5b\"\n                    placeholder=\"0\"\n                    value=\"{{ sc.thirtyAbove }}\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #6. Proportion of individuals 30 years and above screened for\n                Hypertension\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of individuals screened for Hypertension</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"6a\"\n                    id=\"6a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >Total population of 30 years and above of age\n                  </ion-label>\n                  <ion-input\n                    disabled\n                    type=\"number\"\n                    name=\"6b\"\n                    id=\"6b\"\n                    placeholder=\"0\"\n                    value=\"{{ sc.thirtyAbove }}\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #7. Proportion of individuals 30 years and above screened for\n                Diabetes\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of individuals screened for Diabetes</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"7a\"\n                    id=\"7a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >Total population of 30 years and above of age\n                  </ion-label>\n                  <ion-input\n                  disabled\n                    type=\"number\"\n                    name=\"7b\"\n                    id=\"7b\"\n                    placeholder=\"0\"\n                    value=\"{{ sc.thirtyAbove }}\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #8. Teleconsultation Services\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >Teleconsultation services provided to the patients by\n                    CHO</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"8a\"\n                    id=\"8a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #9. Wellness session organized at HWCs\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of Wellness sessions organized at HWC</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"9a\"\n                    id=\"9a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #10. Wellness activities held as per annual health calendar\n                during the month\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of wellness activities held as per annual health\n                    calendar during the month</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"10a\"\n                    id=\"10a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >Total no. of wellness activities to be held in a month as\n                    per annual health calendar</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"10b\"\n                    id=\"10b\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #11. VHSND held against plan\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of VHSND held</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"11a\"\n                    id=\"11a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >Total no. of VHSNC planned in the HWC catchment area (1\n                    VHSND/village/month)</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"11b\"\n                    id=\"11b\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #12. Village meetings (VHSNC, JAS, MAS)\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of VHSNC/JAS meetings held as per monthly\n                    plan</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"12a\"\n                    id=\"12a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >Total no. of VHSNC planned in the HWC catchment area (1\n                    meeting/VHSNC or JAS/month)</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"12b\"\n                    id=\"12b\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-card *ngIf=\"sc.isAyush == true\" style=\"margin: 0\">\n              <ion-card-header style=\"font-weight: 600; color: black\">\n                #13. AYUSH\n              </ion-card-header>\n              <ion-card-content>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >No. of VHSNC/JAS meetings held as per monthly\n                    plan</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"13a\"\n                    id=\"13a\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label\n                    position=\"floating\"\n                    text-wrap\n                    style=\"text-align: justify\"\n                    >Total no. of VHSNC planned in the HWC catchment area (1\n                    meeting/VHSNC or JAS/month)</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    name=\"13b\"\n                    id=\"13b\"\n                    placeholder=\"0\"\n                  ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n            <ion-button color=\"primary\" (click)=\"save()\"\n              >Save & Submit</ion-button\n            ></ion-list\n          >\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab1/tab1-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab1/tab1-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");

    var routes = [{
      path: '',
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/tab1/tab1-routing.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(authService, router, alertController) {
        _classCallCheck(this, Tab1Page);

        this.authService = authService;
        this.router = router;
        this.alertController = alertController;
        this.sc = {
          name: "Ailawng SC",
          population: 2311,
          thirtyAbove: 1562,
          isActive: true,
          isAyush: true
        };
      }

      _createClass(Tab1Page, [{
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.authService.logout();

                  case 2:
                    this.router.navigateByUrl("/", {
                      replaceUrl: true
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.getData();
                    console.log('Get Data: ', this.data);
                    this.firstCal();
                    console.log('First Data: ', this.firstCalculation);
                    this.secondCal();
                    console.log('Second Data: ', this.secondCalculation);
                    this.thirdCal();
                    console.log('Final Data(Amount): ', this.thirdCalculation);
                    _context2.next = 10;
                    return this.alertController.create({
                      header: 'Alert!',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: 'OK',
                        role: 'confirm',
                        handler: function handler() {}
                      }]
                    });

                  case 10:
                    alert = _context2.sent;
                    _context2.next = 13;
                    return alert.present();

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getData",
        value: function getData() {
          this.data = {
            month: document.getElementById("month").value,
            year: document.getElementById("year").value,
            a1: +document.getElementById("1a").value,
            b1: +document.getElementById("1b").value,
            a2: +document.getElementById("2a").value,
            b2: +document.getElementById("2b").value,
            a3: +document.getElementById("3a").value,
            b3: +document.getElementById("3b").value,
            a4: +document.getElementById("4a").value,
            a5: +document.getElementById("5a").value,
            b5: +document.getElementById("5b").value,
            a6: +document.getElementById("6a").value,
            b6: +document.getElementById("6b").value,
            a7: +document.getElementById("7a").value,
            b7: +document.getElementById("7b").value,
            a8: +document.getElementById("8a").value,
            a9: +document.getElementById("9a").value,
            a10: +document.getElementById("10a").value,
            b10: +document.getElementById("10b").value,
            a11: +document.getElementById("11a").value,
            b11: +document.getElementById("11b").value,
            a12: +document.getElementById("12a").value,
            b12: +document.getElementById("12b").value
          };
        }
      }, {
        key: "firstCal",
        value: function firstCal() {
          this.firstCalculation = {
            date: this.data.month + this.data.year,
            ind1: this.data.a1 / this.data.b1 * 100,
            ind2: this.data.a2 / this.data.b2 * 100,
            ind3: this.data.a3 / this.data.b3 * 100,
            ind4: this.data.a4 / +this.sc.population * 100,
            ind5: this.data.a5 / this.data.b5 * 100,
            ind6: this.data.a6 / this.data.b6 * 100,
            ind7: this.data.a7 / this.data.b7 * 100,
            ind8: this.data.a8 / 25 * 100,
            ind9: this.data.a9 / 10 * 100,
            ind10: this.data.a10 / this.data.b10 * 100,
            ind11: this.data.a11 / this.data.b11 * 100,
            ind12: this.data.a12 / this.data.b12 * 100
          };
        }
      }, {
        key: "secondCal",
        value: function secondCal() {
          this.secondCalculation = {
            date: this.firstCalculation.date,
            ind1: this.firstCalculation.ind1 < 80 ? this.firstCalculation.ind1 / 80 * 100 : 100,
            ind2: this.firstCalculation.ind2 < 80 ? this.firstCalculation.ind2 / 80 * 100 : 100,
            ind3: this.firstCalculation.ind3 < 100 ? this.firstCalculation.ind3 / 100 * 100 : 100,
            ind4: this.firstCalculation.ind4 < 6 ? this.firstCalculation.ind4 / 6 * 100 : 100,
            ind5: this.firstCalculation.ind5 < 3 ? this.firstCalculation.ind5 / 3 * 100 : 100,
            ind6: this.firstCalculation.ind6 < 3 ? this.firstCalculation.ind6 / 3 * 100 : 100,
            ind7: this.firstCalculation.ind7 < 3 ? this.firstCalculation.ind7 / 3 * 100 : 100,
            ind8: this.firstCalculation.ind8,
            ind9: this.firstCalculation.ind9,
            ind10: this.firstCalculation.ind10 < 100 ? this.firstCalculation.ind10 / 100 * 100 : 100,
            ind11: this.firstCalculation.ind11 < 100 ? this.firstCalculation.ind11 / 100 * 100 : 100,
            ind12: this.firstCalculation.ind12 < 100 ? this.firstCalculation.ind12 / 100 * 100 : 100
          };
        }
      }, {
        key: "thirdCal",
        value: function thirdCal() {
          this.thirdCalculation = {
            date: this.secondCalculation.date,
            amnt1: this.secondCalculation.ind1 / 100 * 500,
            amnt2: this.secondCalculation.ind2 / 100 * 500,
            amnt3: this.secondCalculation.ind3 / 100 * 1000,
            amnt4: this.secondCalculation.ind4 / 100 * 3000,
            amnt5: this.secondCalculation.ind5 / 100 * 1000,
            amnt6: this.secondCalculation.ind6 / 100 * 1000,
            amnt7: this.secondCalculation.ind7 / 100 * 1000,
            amnt8: this.secondCalculation.ind8 / 100 * 1500,
            amnt9: this.secondCalculation.ind9 / 100 * 2000,
            amnt10: this.secondCalculation.ind10 / 100 * 2000,
            amnt11: this.secondCalculation.ind11 / 100 * 1000,
            amnt12: this.secondCalculation.ind12 / 100 * 500
          };
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tab1",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    })], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map