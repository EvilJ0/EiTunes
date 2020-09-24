import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayOutComponent } from './views/lay-out/lay-out.component';
import { SongListComponent } from './views/song-list/song-list.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { EditProfileViewComponent } from './components/edit-profile-view/edit-profile-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxAudioPlayerModule} from "ngx-audio-player";
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
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
})
export class AppModule { }
