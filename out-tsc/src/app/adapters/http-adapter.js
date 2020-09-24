import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class HttpAdapter {
    constructor(http) {
        this.http = http;
    }
    get(url) {
        console.log("get working");
        return this
            .http
            .get(url)
            .toPromise();
    }
}
HttpAdapter.ɵfac = function HttpAdapter_Factory(t) { return new (t || HttpAdapter)(i0.ɵɵinject(i1.HttpClient)); };
HttpAdapter.ɵprov = i0.ɵɵdefineInjectable({ token: HttpAdapter, factory: HttpAdapter.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpAdapter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=http-adapter.js.map