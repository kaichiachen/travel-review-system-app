webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_post__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__post_post__["a" /* PostPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="主页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="发文" tabIcon="create"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="个人" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoData; });
var UserInfoData = (function () {
    function UserInfoData(id, username, name, role) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.role = role;
    }
    UserInfoData.prototype.toJsonStr = function () {
        return '{"id":' + '"' + this.id + '"' +
            ',"username":' + '"' + this.username + '"' +
            ',"name":' + '"' + this.name + '"' +
            ',"role":' + this.role +
            '}';
    };
    UserInfoData.prototype.roleToStr = function () {
        switch (this.role) {
            case 0: return "管理员";
            case 1: return "终审员";
            case 2: return "初审员";
            case 3: return "普通用户";
            default:
                return "???";
        }
    };
    return UserInfoData;
}());

//# sourceMappingURL=UserInfoData.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.write = function (key, value) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    StorageService.prototype.read = function (key) {
        var value = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            var str = String(JSON.parse(value));
            return JSON.parse(str);
        }
        return null;
    };
    StorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=StorageService.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelNotesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_StorageService__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TravelNotesService = (function () {
    function TravelNotesService(storageService) {
        this.storageService = storageService;
    }
    TravelNotesService.prototype.getLocation = function () {
        return [["Shanghai", "上海"],
            ["Taipei", "台北"],
            ["NewYork", "纽约"],
            ["London", "伦敦"]
        ];
    };
    TravelNotesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_StorageService__["a" /* StorageService */]])
    ], TravelNotesService);
    return TravelNotesService;
}());

//# sourceMappingURL=TravelNotesService.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetch__ = __webpack_require__(284);



// user
const loginReq = (username, pwd) => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])(`user/?User.username=${username}&User.pwd=${pwd}`,
  {}, 'GET',
);
/* harmony export (immutable) */ __webpack_exports__["a"] = loginReq;

const userRegister = userInfo => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])('user/',
  userInfo, 'POST',
);
/* harmony export (immutable) */ __webpack_exports__["c"] = userRegister;

const deleteUserReq = userid => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])(`user/${userid}`,
  {}, 'DELETE',
);
/* unused harmony export deleteUserReq */


const userListReq = () => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])('user',
  {}, 'GET',
);
/* unused harmony export userListReq */


// post
const addDraftPostReq = postInfo => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])('draftpost',
  {
    tile: postInfo.title,
    content: postInfo.content,
    submittime: postInfo.time,
    location: postInfo.location,
    author: postInfo.author,
  }, 'POST',
);
/* unused harmony export addDraftPostReq */


const updateDraftPostReq = postInfo => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])(`draftpost/${postInfo.id}`,
  {
    tile: postInfo.title,
    content: postInfo.content,
    posttime: postInfo.time,
    location: postInfo.location,
    submittime: postInfo.author,
  }, 'PUT',
);
/* unused harmony export updateDraftPostReq */


const deleteDraftPostReq = postid => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])(`draftpost/${postid}`,
  {}, 'DELETE',
);
/* unused harmony export deleteDraftPostReq */


const reviewPostListReq = () => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])('reviewpost',
  {}, 'GET',
);
/* unused harmony export reviewPostListReq */


const addReviewPostReq = postInfo => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])('reviewpost',
  {
    tile: postInfo.title,
    content: postInfo.content,
    submittime: postInfo.time,
    location: postInfo.location,
    author: postInfo.author,
    count: 0,
    status: 0,
    reviewnum: 0,
  }, 'POST',
);
/* unused harmony export addReviewPostReq */


const updateReviewPostReq = postInfo => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])(`reviewpost/${postInfo.id}`,
  postInfo, 'PUT',
);
/* unused harmony export updateReviewPostReq */


const deleteReviewPostReq = postid => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])(`reviewpost/${postid}`,
  {}, 'DELETE',
);
/* unused harmony export deleteReviewPostReq */


const addPostReq = postInfo => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])('post',
  postInfo, 'POST',
);
/* unused harmony export addPostReq */


const deletePostReq = postid => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])(`post/${postid}`,
  {}, 'DELETE',
);
/* unused harmony export deletePostReq */


const postListReq = () => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])('post',
  {}, 'GET',
);
/* harmony export (immutable) */ __webpack_exports__["b"] = postListReq;


// review
const reviewListReq = () => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])('review',
  {}, 'GET',
);
/* unused harmony export reviewListReq */


const addReviewReq = (reviewInfo, postID, name) => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])('review',
  {
    content: reviewInfo.content,
    ispass: reviewInfo.ispass,
    author: name,
    postid: postID,
  }, 'POST',
);
/* unused harmony export addReviewReq */


const updateReviewReq = reviewInfo => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])('review',
  reviewInfo, 'PUT',
);
/* unused harmony export updateReviewReq */


const deleteReviewReq = reviewid => Object(__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */])(`review/${reviewid}`,
  {}, 'DELETE',
);
/* unused harmony export deleteReviewReq */



/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlidesPage = (function () {
    function SlidesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/imgs/slide.JPG",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/imgs/slide.jpg",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/imgs/slide.jpg",
            }
        ];
    }
    SlidesPage.prototype.login = function () {
        console.log('Go to LoginPage.');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SlidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/slides/slides.html"*/'<ion-header>\n	<ion-navbar>\n    	<ion-title>Tutorial</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content class="tutorial-page">\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n          <ion-buttons end>\n            <button ion-button color="primary" (click)="login()">Skip</button>\n          </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="../../assets/imgs/slide.jpg" class="slide-image"/>\n      <h2 class="slide-title">Slide 3</h2>\n      <button ion-button large clear icon-end color="primary" (click)="login()">\n          Continue\n          <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/slides/slides.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SlidesPage);
    return SlidesPage;
}());

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_UserInfoService__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_UserInfoData__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__req__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, formBuilder, toastCtrl, userInfoService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.userInfoService = userInfoService;
        this.loadingCtrl = loadingCtrl;
        this.loginForm = this.formBuilder.group({
            'username': ['wzx', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,]],
            'password': ['wzx', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,]]
        });
    }
    LoginPage.prototype.login = function (data) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_7__req__["a" /* loginReq */])(data.username, data.password).then(function (success) {
            /* eslint no-console: ["error", { allow: ["debug"] }] */
            // console.debug(success.User);
            var loader = _this.loadingCtrl.create({
                content: "Loading...",
            });
            loader.present();
            if (success.User !== undefined && success.User.length === 1) {
                var userInfo = new __WEBPACK_IMPORTED_MODULE_4__model_UserInfoData__["a" /* UserInfoData */](success.User[0].id, success.User[0].name, data.username, success.User[0].role);
                _this.userInfoService.setUserInfo(userInfo);
                console.log("loginReq: success! -> " + userInfo.toJsonStr());
                loader.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                console.log("loginReq: fail!");
                loader.dismiss();
                _this.showToast("登录失败！");
            }
        }, function (error) {
            /* eslint no-console: ["error", { allow: ["debug"] }] */
            console.debug("loginReq:" + error);
            _this.showToast(error);
        });
    };
    LoginPage.prototype.signup = function () {
        console.log("Go to SignUpPage.");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignUpPage */]);
    };
    LoginPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'button'
        });
        toast.present(toast);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>登入</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="loginForm">\n    <ion-list inset>\n      \n      <ion-item>\n        <ion-label floating>账号</ion-label>\n        <ion-input type="text" clearInput formControlName="username"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>密码</ion-label>\n        <ion-input type="password" clearInput formControlName="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full (click)="login(loginForm.value)" [disabled]="!loginForm.valid">登入</button>\n    <button ion-button full color="danger" (click)="signup()">注册</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_UserInfoService__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_UserInfoService__["a" /* UserInfoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_UserInfoService__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl, userInfoService) {
        this.navCtrl = navCtrl;
        this.userInfoService = userInfoService;
        this.listItems = [
            ["ID", ""],
            ["名称", ""],
            ["账号", ""],
            ["权限", ""],
        ];
        var userInfo = this.userInfoService.getUserInfo();
        console.log("Contacts: get userInfo -> " + userInfo.toJsonStr());
        this.listItems[0][1] = userInfo.id.toString();
        this.listItems[1][1] = userInfo.name;
        this.listItems[2][1] = userInfo.username;
        this.listItems[3][1] = userInfo.roleToStr();
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- <ion-list-header>User Information</ion-list-header> -->\n    <ion-item *ngFor="let item of listItems">\n      <h1>{{ item[0] }}</h1>\n      <p id="itemValue">{{ item[1] }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_UserInfoService__["a" /* UserInfoService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_TravelNotesService__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_notes__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, travelNotesService) {
        this.navCtrl = navCtrl;
        this.cards = [];
        this.cards = travelNotesService.getLocation();
    }
    HomePage.prototype.push = function (location) {
        console.log(location);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notes_notes__["a" /* TravelNotesPage */], { 'location': location });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="card-background-page">\n  <ion-card *ngFor="let item of cards"  button (click)="push(item)">\n    <img src="../../assets/imgs/{{item[0]}}.jpg">\n    <div class="card-title">{{item[0]}}</div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_TravelNotesService__["a" /* TravelNotesService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_TravelNotesService__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_TravelNotesData__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__req_index__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TravelNotesPage = (function () {
    function TravelNotesPage(navCtrl, navParams, travelNotesService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.travelNotesService = travelNotesService;
        this.loadingCtrl = loadingCtrl;
        this.notes = [];
        this.window = 1;
        this.bufIndex = 0;
        this.location = this.navParams.get('location');
        this.getNotes(this.location[1]);
    }
    TravelNotesPage.prototype.push = function (note) {
        console.log(note);
    };
    TravelNotesPage.prototype.getNotes = function (location) {
        var _this = this;
        var datas = [];
        Object(__WEBPACK_IMPORTED_MODULE_4__req_index__["b" /* postListReq */])().then(function (success) {
            var loader = _this.loadingCtrl.create({
                content: "Loading...",
            });
            loader.present();
            // console.log("postListReq" + success.Post)
            for (var i in success.Post) {
                if (success.Post[i].location == location) {
                    var data = new __WEBPACK_IMPORTED_MODULE_3__model_TravelNotesData__["a" /* TravelNotesData */](success.Post[i].title, success.Post[i].content, success.Post[i].author, success.Post[i].location, success.Post[i].submittime);
                    datas.push(data);
                }
            }
            _this.notesBuf = datas;
            _this.pushNotes();
            loader.dismiss();
        }, function (error) {
            console.debug("loginReq:" + error);
        });
    };
    TravelNotesPage.prototype.pushNotes = function () {
        for (var i = 0; this.bufIndex < this.notesBuf.length && i < this.window; this.bufIndex++, i++) {
            console.log(this.bufIndex);
            console.log(this.notesBuf[this.bufIndex]);
            this.notes.push(this.notesBuf[this.bufIndex]);
        }
    };
    TravelNotesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            console.log('Begin infinite');
            _this.pushNotes();
            console.log('End infinite');
            infiniteScroll.complete();
        }, 500);
    };
    TravelNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/notes/notes.html"*/'<ion-header>\n        <ion-navbar>\n          <ion-title>Notes</ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n    <ion-content padding class="card-background-page">\n        \n\n        <ion-card *ngFor="let note of notes"  button (click)="push(note)">\n            <ion-item>\n                <ion-avatar item-start>\n                    <img src="../../assets/imgs/user.jpg">\n                </ion-avatar>\n                <h2>{{note.author}}</h2>\n                <p>{{note.submittime}}</p>\n            </ion-item>\n            <ion-card-header>{{note.title}}</ion-card-header>\n            <ion-card-content>\n                {{note.content}}\n            </ion-card-content>\n        </ion-card>\n        <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </ion-content>\n      '/*ion-inline-end:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/notes/notes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_TravelNotesService__["a" /* TravelNotesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], TravelNotesPage);
    return TravelNotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_UserInfoService__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_UserInfoData__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__req_index__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignUpPage = (function () {
    function SignUpPage(navCtrl, formBuilder, toastCtrl, loadingCtrl, userInfoService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userInfoService = userInfoService;
        this.signUpForm = this.formBuilder.group({
            'name': ['Johnson', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,]],
            'username': ['wuchunghsuan', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,]],
            'password': ['123456', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,]],
            'rpassword': ['123456', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,]],
        });
    }
    SignUpPage.prototype.signup = function () {
        var _this = this;
        if (this.signUpForm.value.password != this.signUpForm.value.rpassword) {
            this.showToast("密码不一致！");
            return;
        }
        var loader = this.loadingCtrl.create({
            content: "Loading...",
        });
        loader.present();
        Object(__WEBPACK_IMPORTED_MODULE_6__req_index__["c" /* userRegister */])({
            name: this.signUpForm.value.name,
            username: this.signUpForm.value.username,
            pwd: this.signUpForm.value.password,
            role: 3,
        }).then(function (success) {
            if (success !== null && success.id != null) {
                var userInfo = new __WEBPACK_IMPORTED_MODULE_4__model_UserInfoData__["a" /* UserInfoData */](success.id, success.name, success.username, success.role);
                _this.userInfoService.setUserInfo(userInfo);
                loader.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.showToast("注册失败！");
                loader.dismiss();
            }
        }, function (error) {
            loader.dismiss();
            console.debug(error);
            _this.showToast(error);
        });
    };
    SignUpPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'button'
        });
        toast.present(toast);
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/signup/signup.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>注册</ion-title>\n    </ion-navbar>\n</ion-header>\n        \n<ion-content padding>\n    <form [formGroup]="signUpForm">\n        <ion-list>\n            <ion-item>\n                <ion-label fixed>名称</ion-label>\n                <ion-input type="text" formControlName="name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>账号</ion-label>\n                <ion-input type="text"  formControlName="username"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label fixed>密码</ion-label>\n                <ion-input type="password" formControlName="password"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label fixed>确认密码</ion-label>\n                <ion-input type="password" formControlName="rpassword"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button full (click)="signup()" [disabled]="!signUpForm.valid">创建账户</button>\n    </form>\n</ion-content>\n        '/*ion-inline-end:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_UserInfoService__["a" /* UserInfoService */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_slides_slides__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notes_notes__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_post_post__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_UserInfoService__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_StorageService__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_TravelNotesService__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_slides_slides__["a" /* SlidesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notes_notes__["a" /* TravelNotesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_post_post__["a" /* PostPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_slides_slides__["a" /* SlidesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notes_notes__["a" /* TravelNotesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_post_post__["a" /* PostPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_UserInfoService__["a" /* UserInfoService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_StorageService__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_TravelNotesService__["a" /* TravelNotesService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_slides_slides__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_slides_slides__["a" /* SlidesPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/GitHub/travel-review-system-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/travel-review-system-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelNotesData; });
var TravelNotesData = (function () {
    function TravelNotesData(title, content, author, location, submittime) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.location = location;
        this.submittime = submittime;
    }
    return TravelNotesData;
}());

//# sourceMappingURL=TravelNotesData.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(285);


/* harmony default export */ __webpack_exports__["a"] = (async (router = '', data = {}, method = 'GET', type = 'json') => {
  const reqMethod = method.toUpperCase();
  const reqUrl = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* default */] + router;
  const requestConfig = {
    method: reqMethod,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (type === 'json') {
    if (method === 'POST' || method === 'PUT') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data),
      });
    }
  }

  let responseJson = {};
  let response;
  try {
    response = await fetch(reqUrl, requestConfig);
    responseJson = await response.json();
  } catch (error) {
    /* if response body is null, it will catch error */
    /* eslint no-empty: "error" */
  }
  return new Promise((resolve, reject) => {
    if (response.status === 200) {
      resolve(responseJson);
    } else {
      reject(responseJson);
    }
  });
});


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const baseUrl = 'http://106.14.222.99:8080/Entity/U822032c5848a/trapro/';

/* harmony default export */ __webpack_exports__["a"] = (baseUrl);


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_TravelNotesService__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostPage = (function () {
    function PostPage(navCtrl, formBuilder, travelNotesService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.locations = [];
        this.PostForm = this.formBuilder.group({
            'title': ['两人游', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,]],
            'content': ['纽约市（City of New York，简称NYC），位于美国纽约州东南部大西洋沿岸，是美国第一大城市及第一大港。\
                    纽约坐拥大纽约都会区的核心地带，是一座世界级国际化大都市，也是世界第一大经济中心，其GDP于2013年超越东京，位居世界第\
                    一。截至2010年，纽约的财产所有总值为813万亿美元，直接影响着全球的金融、媒体、政治、娱乐以及时尚界。', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,]],
            'location': ['Shanghai', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,]],
        });
        this.locations = travelNotesService.getLocation();
    }
    PostPage.prototype.post = function () {
    };
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/post/post.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Post</ion-title>\n    </ion-navbar>\n</ion-header>\n            \n<ion-content padding>\n    <form [formGroup]="PostForm">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>名称</ion-label>\n                <ion-input type="text" formControlName="title"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>地点</ion-label>\n                <ion-select formControlName="location">\n                    <ion-option *ngFor="let item of locations" value={{item[0]}}>{{item[1]}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>内容</ion-label>\n                <ion-textarea formControlName="content"></ion-textarea>\n            </ion-item>\n        </ion-list>\n        <button ion-button full (click)="post()" [disabled]="!PostForm.valid">创建游记</button>\n    </form>\n</ion-content>\n            '/*ion-inline-end:"/Users/admin/Documents/GitHub/travel-review-system-app/src/pages/post/post.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_TravelNotesService__["a" /* TravelNotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_TravelNotesService__["a" /* TravelNotesService */]) === "function" && _c || Object])
    ], PostPage);
    return PostPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_UserInfoData__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_StorageService__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoService = (function () {
    function UserInfoService(storageService) {
        this.storageService = storageService;
    }
    UserInfoService.prototype.setUserInfo = function (userInfo) {
        this.storageService.write("userInfo", userInfo.toJsonStr());
    };
    UserInfoService.prototype.getUserInfo = function () {
        var data = this.storageService.read("userInfo");
        if (data == null) {
            console.log("getUserInfo: no info.");
            return null;
        }
        var userInfo = new __WEBPACK_IMPORTED_MODULE_1__model_UserInfoData__["a" /* UserInfoData */](data.id, data.username, data.name, data.role);
        console.log("getUserInfo: " + data);
        return userInfo;
    };
    UserInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_StorageService__["a" /* StorageService */]])
    ], UserInfoService);
    return UserInfoService;
}());

//# sourceMappingURL=UserInfoService.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map