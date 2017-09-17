webpackJsonp([1],{

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingPageModule", function() { return UpcomingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upcoming__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpcomingPageModule = (function () {
    function UpcomingPageModule() {
    }
    return UpcomingPageModule;
}());
UpcomingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__upcoming__["a" /* UpcomingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upcoming__["a" /* UpcomingPage */]),
        ],
    })
], UpcomingPageModule);

//# sourceMappingURL=upcoming.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id = this.navParams.get('id');
        this.displayData = [
            {
                "id": 1,
                "song": "Hotline Bling",
                "artist": "Drake",
                "album": "./assets/img/drake.png"
            },
            {
                "id": 2,
                "song": "AAA",
                "artist": "Drake",
                "album": "./assets/img/drake.png"
            },
            {
                "id": 3,
                "song": "BB",
                "artist": "Drake",
                "album": "./assets/img/drake.png"
            },
            {
                "id": 4,
                "song": "HCCC",
                "artist": "Drake",
                "album": "./assets/img/drake.png"
            },
            {
                "id": 5,
                "song": "DDD",
                "artist": "Drake",
                "album": "./assets/img/drake.png"
            }
        ];
        this.data = this.displayData[this.id];
        for (var _i = 0, _a = this.displayData; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.id == this.id)
                this.data = this.data;
        }
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"C:\Users\Payton.Garland\dev\github\htn\src\pages\detail\detail.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>\n\n			Jukebox\n\n		</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<!-- <h1>Hello {{displayName}}</h1> -->\n\n\n\n	<div class=\'box\'>\n\n		<div class="blur">\n\n			<div class=\'wave -one\'></div>\n\n			<div class=\'wave -two\'></div>\n\n			<div class=\'wave -three\'></div>\n\n		</div>\n\n		<div class=\'title\' id="poof">{{data.song}}</div> <div class=\'title\' id="poofer"> {{data.artist}} </div>\n\n		<ion-img class="center" width="100" height="100" src={{data.album}}></ion-img>\n\n		<br>\n\n		<!-- <h1>Pendulum</h1> <br><img class="vert-center" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/626071/line-logo.svg"> -->\n\n	</div>\n\n	<!-- <button ion-button outline (click)="signInWithEmail()">Login</button>\n\n	<button ion-button outline (click)="signOut()">Logout</button> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Payton.Garland\dev\github\htn\src\pages\detail\detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpcomingPage = (function () {
    function UpcomingPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.detailPage = __WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */];
        this.options = {};
        this.http.get("http://f155ae88.ngrok.io/songs/?format=json").subscribe(function (res) {
            _this.songs = res.json();
        });
    }
    UpcomingPage.prototype.more = function (id) {
        this.navCtrl.push('DetailPage', { id: id });
        console.log({ id: id });
    };
    UpcomingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpcomingPage');
    };
    return UpcomingPage;
}());
UpcomingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    /**
     * Generated class for the UpcomingPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    ,
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-upcoming',template:/*ion-inline-start:"C:\Users\Payton.Garland\dev\github\htn\src\pages\upcoming\upcoming.html"*/'<!--\n\n  Generated template for the UpcomingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Song Queue</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <ion-list>\n\n        <a *ngFor="let song of songs"><ion-item (click)="more(song.id)">{{song.name}}</ion-item></a>\n\n    </ion-list>\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="light"><ion-icon name="share-alt"></ion-icon></button>\n\n        <ion-fab-list side="left">\n\n          <button ion-fab onclick="window.plugins.socialsharing.shareViaSMS(\'Send me song recommendations at: 778-888-8888\', null /* see the note below */, function(msg) {console.log(\'ok: \' + msg)}, function(msg) {alert(\'error: \' + msg)})"><ion-icon name="send"></ion-icon></button>\n\n          <button ion-fab onclick="window.plugins.socialsharing.shareViaFacebook(\'Send me song recommendations at: 778-888-8888\', null /* img */, null /* url */, function() {console.log(\'share ok\')}, function(errormsg){alert(errormsg)})"><ion-icon name="logo-facebook"></ion-icon></button>\n\n        </ion-fab-list>\n\n      </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Payton.Garland\dev\github\htn\src\pages\upcoming\upcoming.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], UpcomingPage);

//# sourceMappingURL=upcoming.js.map

/***/ })

});
//# sourceMappingURL=1.js.map