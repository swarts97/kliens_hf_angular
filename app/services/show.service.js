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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ShowService = (function () {
    function ShowService(http) {
        this.http = http;
        this.headers = new http_1.HttpHeaders({
            "Content-type": "application/json",
            "trakt-api-key": "161402e97f36ba2419b888c48e2ad67cb54cb4d3fc0c4daa8d79c24c9d23b7df",
            "trakt-api-version": "2"
        });
    }
    /*
    *   Amennyiben érkeztek paraméterek, úgy azok segítségével, amennyiben nem,
    *   úgy alapértelmezett értékekkel végez el egy API hívást, melynek következtében
    *   json formátumban megérkeznek a megfelelő sorozatok adatai.
    *   Kéréskor elküldjük fejlécben az api verzióját, az egyedi azonosítónkat valamint
    *   hogy milyen formátumban várjuk a választ (json).
    */
    ShowService.prototype.getShows = function (options) {
        var page = (options && options.page) || 1;
        var pageSize = (options && options.pageSize) || 10;
        var query = (options && options.query) || "";
        return this.http.get("https://api.trakt.tv/shows/popular?extended=full&page=" + page + "&limit=" + pageSize + "&query=" + query, { headers: this.headers });
    };
    /*
    *   Hálózaton keresztül, az API segítségével a megadott paraméter alapján
    *   json formátumban lekéri az adott azonosítójú sorozathoz tartozó évadokat
    *   melyek taratlmazzák az epizódokhoz tartozó információkat is.
    *   Kéréskor elküldjük fejlécben az api verzióját, az egyedi azonosítónkat valamint
    *   hogy milyen formátumban várjuk a választ (json).
    */
    ShowService.prototype.getEpisodesForShow = function (showId) {
        return this.http.get("https://api.trakt.tv/shows/" + showId + "/seasons?extended=episodes", { headers: this.headers });
    };
    return ShowService;
}());
ShowService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ShowService);
exports.ShowService = ShowService;
//# sourceMappingURL=show.service.js.map