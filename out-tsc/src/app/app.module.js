import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayOutComponent } from './views/lay-out/lay-out.component';
import { SongListComponent } from './views/song-list/song-list.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { EditProfileViewComponent } from './components/edit-profile-view/edit-profile-view.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './components/footer/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAudioPlayerModule } from "ngx-audio-player";
import { _MatMenuDirectivesModule, MatMenuModule } from "@angular/material/menu";
import { LogoComponent } from './components/logo/logo.component';
import * as i0 from "@angular/core";
export class AppModule {
}
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [LayOutComponent] });
AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [HttpClientModule], imports: [[
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            NgxAudioPlayerModule,
            _MatMenuDirectivesModule,
            MatMenuModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [LayOutComponent,
        SongListComponent,
        EditProfileViewComponent,
        FooterComponent,
        LogoComponent], imports: [BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxAudioPlayerModule,
        _MatMenuDirectivesModule,
        MatMenuModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LayOutComponent,
                    SongListComponent,
                    EditProfileViewComponent,
                    FooterComponent,
                    LogoComponent
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BrowserAnimationsModule,
                    NgxAudioPlayerModule,
                    _MatMenuDirectivesModule,
                    MatMenuModule
                ],
                providers: [HttpClientModule],
                bootstrap: [LayOutComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=app.module.js.map