import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/i-tunes.service";
import * as i2 from "../../components/logo/logo.component";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "../../components/footer/footer/footer.component";
const _c0 = function () { return { "backgroundImage": "url(assets/png/fonContent.png)", "background-size": "cover" }; };
const _c1 = function () { return { "backgroundImage": "url(assets/png/footerBackgraund.png)", "background-size": "cover" }; };
export class LayOutComponent {
    constructor(iTunesService) {
        this.iTunesService = iTunesService;
    }
    ngOnInit() {
    }
}
LayOutComponent.ɵfac = function LayOutComponent_Factory(t) { return new (t || LayOutComponent)(i0.ɵɵdirectiveInject(i1.ITunesService)); };
LayOutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayOutComponent, selectors: [["app-lay-out"]], decls: 25, vars: 8, consts: [[1, "app-wrap"], [1, "main"], [1, "menu"], [1, "Logo"], [1, "searchArea"], [1, "searchInput", 3, "ngModel", "ngModelChange", "keyup"], [1, "search", 3, "click"], [1, "buttonTrey"], [1, "buttonTreyColor"], [1, "menuButton", 3, "routerLink"], [1, "content", 3, "ngStyle"], [1, "footer"], [1, "footerBack", 3, "ngStyle"]], template: function LayOutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "header");
        i0.ɵɵtext(2, "iTunes App ");
        i0.ɵɵelement(3, "br");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵelementStart(5, "div", 2);
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵelement(7, "app-logo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 4);
        i0.ɵɵelementStart(9, "input", 5);
        i0.ɵɵlistener("ngModelChange", function LayOutComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchSong = $event; })("keyup", function LayOutComponent_Template_input_keyup_9_listener() { return ctx.iTunesService.saveSongs(ctx.searchSong); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 6);
        i0.ɵɵlistener("click", function LayOutComponent_Template_button_click_10_listener() { return ctx.iTunesService.saveSongs(ctx.searchSong); });
        i0.ɵɵtext(11, "search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 7);
        i0.ɵɵelementStart(13, "div", 8);
        i0.ɵɵelementStart(14, "button", 9);
        i0.ɵɵtext(15, " Edit User Profile ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "button", 9);
        i0.ɵɵtext(17, " Songs ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 9);
        i0.ɵɵtext(19, " Favorite ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 10);
        i0.ɵɵelement(21, "router-outlet");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "footer", 11);
        i0.ɵɵelementStart(23, "div", 12);
        i0.ɵɵelement(24, "app-footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngModel", ctx.searchSong);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("routerLink", "profile");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("routerLink", "songs");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("routerLink", "favorite");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(6, _c0));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(7, _c1));
    } }, directives: [i2.LogoComponent, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.RouterLink, i5.NgStyle, i4.RouterOutlet, i6.FooterComponent], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayOutComponent, [{
        type: Component,
        args: [{
                selector: 'app-lay-out',
                templateUrl: './lay-out.component.html',
                styleUrls: ['./lay-out.component.css']
            }]
    }], function () { return [{ type: i1.ITunesService }]; }, null); })();
//# sourceMappingURL=lay-out.component.js.map