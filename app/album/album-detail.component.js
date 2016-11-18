"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var album_service_1 = require('./album.service');
var AlbumDetailComponent = (function () {
    function AlbumDetailComponent(route, albumService) {
        this.route = route;
        this.albumService = albumService;
        this.album = {
            artist: {}
        };
    }
    AlbumDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            //this.album = this.albumService.getAlbum(params['albumId']);
            _this.albumService.getAlbum(params['albumId'])
                .subscribe(function (p) {
                _this.album = p[params['albumId']];
                console.log(' this.album =', _this.album);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AlbumDetailComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    AlbumDetailComponent = __decorate([
        core_1.Component({
            selector: 'album-detail',
            templateUrl: '../app/album/album-detail.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, album_service_1.AlbumService])
    ], AlbumDetailComponent);
    return AlbumDetailComponent;
    var _a;
}());
exports.AlbumDetailComponent = AlbumDetailComponent;
//# sourceMappingURL=album-detail.component.js.map