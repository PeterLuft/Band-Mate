import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

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
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDataService }  from './in-memory-data.service';
import { SongSearchComponent } from './song-search/song-search.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    PartDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SongListComponent,
    SongSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // ),
    AppRoutingModule
  ],
  providers: [SongService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
