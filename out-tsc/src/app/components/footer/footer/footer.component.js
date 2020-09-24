import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/i-tunes.service";
import * as i2 from "@angular/common";
import * as i3 from "ngx-audio-player";
const _c0 = function (a0) { return { "background-image": a0, "background-size": "cover" }; };
function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "div", 4);
    i0.ɵɵelement(2, "mat-basic-audio-player", 5);
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵelementStart(5, "span", 8);
    i0.ɵɵtext(6, "artist name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 9);
    i0.ɵɵelementStart(9, "span", 8);
    i0.ɵɵtext(10, "collection name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 10);
    i0.ɵɵelementStart(13, "span", 8);
    i0.ɵɵtext(14, "song name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c0, "url(" + ctx_r0.iTunesService.songSelected.artworkUrl100 + ")"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("audioUrl", ctx_r0.iTunesService.songSelected.previewUrl)("autoPlay", false)("displayTitle", false)("displayVolumeControls", true);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.iTunesService.songSelected.artistName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.iTunesService.songSelected.collectionName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.iTunesService.songSelected.trackName);
} }
function FooterComponent_ng_template_1_Template(rf, ctx) { }
export class FooterComponent {
    constructor(iTunesService) {
        this.iTunesService = iTunesService;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(i0.ɵɵdirectiveInject(i1.ITunesService)); };
FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 2, consts: [["class", "player", 4, "ngIf", "ngIfElse"], ["class", "footerAnimation"], ["enjoySong", ""], [1, "player"], [1, "imgPlayer", 3, "ngStyle"], ["muted", "muted", 1, "audioPlayer", 3, "audioUrl", "autoPlay", "displayTitle", "displayVolumeControls"], [1, "selectedInfo"], [1, "selectedInfoArtist", "selected"], [1, "spanInfo"], [1, "selectedInfoCollection", "selected"], [1, "selectedInfoSong", "selected"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FooterComponent_div_0_Template, 16, 10, "div", 0);
        i0.ɵɵtemplate(1, FooterComponent_ng_template_1_Template, 0, 0, "ng-template", 1, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.iTunesService.songSelected)("ngIfElse", _r1);
    } }, directives: [i2.NgIf, i2.NgStyle, i3.MatBasicAudioPlayerComponent], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: i1.ITunesService }]; }, null); })();
//# sourceMappingURL=footer.component.js.map