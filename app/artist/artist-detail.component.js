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
var artist_service_1 = require('./artist.service');
var ArtistDetailComponent = (function () {
    function ArtistDetailComponent(route, artistService) {
        this.route = route;
        this.artistService = artistService;
        this.artist = {};
    }
    ArtistDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var artistId = this.route.snapshot.params["artistId"];
        // this.artist = this.artistService.getArtist(artistId);
        this.artistService.getArtist(this.route.snapshot.params["artistId"])
            .subscribe(function (artist) { return _this.artist = artist[artistId]; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    ArtistDetailComponent = __decorate([
        core_1.Component({
            selector: 'artist-detail',
            templateUrl: '../app/artist/artist-detail.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, artist_service_1.ArtistService])
    ], ArtistDetailComponent);
    return ArtistDetailComponent;
    var _a;
}());
exports.ArtistDetailComponent = ArtistDetailComponent;
//# sourceMappingURL=artist-detail.component.js.map