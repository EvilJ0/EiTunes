import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SongListComponent} from "./views/song-list/song-list.component";
import {EditProfileViewComponent} from "./components/edit-profile-view/edit-profile-view.component";
import {FooterComponent} from "./components/footer/footer/footer.component";


const routes: Routes = [{
  path: "songs",
  component: SongListComponent
},
  {
    path: "profile",
    component: EditProfileViewComponent
  },
  {
    path: "footer",
    component: FooterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
