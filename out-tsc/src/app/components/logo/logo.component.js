import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function () { return { "backgroundImage": "url(assets/png/logoTopFront.png)", "background-size": "cover" }; };
const _c1 = function () { return { "backgroundImage": "url(assets/png/logoTopBack.png)", "background-size": "cover" }; };
const _c2 = function () { return { "backgroundImage": "url(assets/png/logoBottom.png)", "background-size": "cover" }; };
export class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LogoComponent, selectors: [["app-logo"]], decls: 5, vars: 6, consts: [[1, "logoWrap"], [1, "logoTopFront", 3, "ngStyle"], [1, "logoTopBack"], [1, "logoTopBackBackground", 3, "ngStyle"], [1, "Bottom", 3, "ngStyle"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(3, _c0));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(4, _c1));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(5, _c2));
    } }, directives: [i1.NgStyle], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LogoComponent, [{
        type: Component,
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=logo.component.js.map