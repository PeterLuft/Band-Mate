import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule} from "@angular/forms";
import { PartDetailComponent } from './part-detail/part-detail.component';
import {SongService} from "./song.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SongListComponent } from './song-list/song-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    PartDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SongService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
