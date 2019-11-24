import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from "./app.routing"
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { MangaComponent } from './manga/manga.component';
import { ListMangaComponentComponent } from './list-manga-component/list-manga-component.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MangaComponent,
    ListMangaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
