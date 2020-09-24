import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { MockSongs } from "../data/mock-songs";
import * as i0 from "@angular/core";
import * as i1 from "../adapters/http-adapter";
export class ITunesService {
    constructor(httpAdapter) {
        this.httpAdapter = httpAdapter;
        this.use_mocks = false;
        this.songs = [];
        this.iTunesApiUrl = "https://itunes.apple.com/search?term=";
        window['iTunesService'] = this;
        // this.getSongs().then(songs => {
        //   // debugger;
        //   this.songs = songs;
        //   console.log(songs)
        //
        // })
    }
    getSongs(url, search) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.use_mocks) {
                return MockSongs;
            }
            return this
                .httpAdapter
                .get(url + search);
            // console.log(this.songs);
            // return this.songs
        });
    }
    saveSongs(searchSong) {
        this.getSongs(this.iTunesApiUrl, searchSong)
            .then(songs => {
            console.log('get working');
            this.songs = songs.results;
        });
    }
}
ITunesService.ɵfac = function ITunesService_Factory(t) { return new (t || ITunesService)(i0.ɵɵinject(i1.HttpAdapter)); };
ITunesService.ɵprov = i0.ɵɵdefineInjectable({ token: ITunesService, factory: ITunesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ITunesService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpAdapter }]; }, null); })();
//# sourceMappingURL=i-tunes.service.js.map