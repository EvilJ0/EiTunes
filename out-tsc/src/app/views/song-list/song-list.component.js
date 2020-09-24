import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/i-tunes.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/menu";
const _c0 = function () { return { "backgroundImage": "url(assets/png/songBackgraund.png)", "background-size": "cover" }; };
const _c1 = function (a0) { return { "background-image": a0, "background-size": "cover" }; };
function SongListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function SongListComponent_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); const song_r1 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.songClick(song_r1); });
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵelementStart(7, "button", 7);
    i0.ɵɵtext(8, "Info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-menu", 8, 9);
    i0.ɵɵelementStart(11, "div", 10);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 10);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const song_r1 = ctx.$implicit;
    const _r2 = i0.ɵɵreference(10);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(7, _c1, "url(" + song_r1.artworkUrl100 + ")"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", song_r1.trackName, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matMenuTriggerFor", _r2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Artist name: ", song_r1.artistName, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Collection name: ", song_r1.collectionName, "");
} }
export class SongListComponent {
    constructor(iTunesService) {
        this.iTunesService = iTunesService;
        this.eventItem = new EventEmitter();
    }
    ngOnInit() {
    }
    songClick(value) {
        this.eventItem.emit(value);
        this.iTunesService.songSelected = value;
        console.log("Song click work");
    }
}
SongListComponent.ɵfac = function SongListComponent_Factory(t) { return new (t || SongListComponent)(i0.ɵɵdirectiveInject(i1.ITunesService)); };
SongListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SongListComponent, selectors: [["app-song-list"]], outputs: { eventItem: "eventItem" }, decls: 1, vars: 1, consts: [["class", "songWrap", 3, "click", 4, "ngFor", "ngForOf"], [1, "songWrap", 3, "click"], [1, "contentSongPhotoshop", 3, "ngStyle"], [1, "song-img", 3, "ngStyle"], [1, "songRight"], [1, "songNameN"], [1, "artistName"], ["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "below"], ["belowMenu", "matMenu"], ["mat-menu-item", ""], [1, "artistNameN"]], template: function SongListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SongListComponent_div_0_Template, 16, 9, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.iTunesService.songs);
    } }, directives: [i2.NgForOf, i2.NgStyle, i3.MatMenuTrigger, i3._MatMenu, i3.MatMenuItem], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SongListComponent, [{
        type: Component,
        args: [{
                selector: 'app-song-list',
                templateUrl: './song-list.component.html',
                styleUrls: ['./song-list.component.css']
            }]
    }], function () { return [{ type: i1.ITunesService }]; }, { eventItem: [{
            type: Output
        }] }); })();
//# sourceMappingURL=song-list.component.js.map