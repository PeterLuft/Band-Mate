import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from "./editor/editor.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SongListComponent} from "./song-list/song-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'editor/:id', component: EditorComponent},
  {path: 'mysongs', component: SongListComponent},
  {path: 'home', component: DashboardComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {




}
