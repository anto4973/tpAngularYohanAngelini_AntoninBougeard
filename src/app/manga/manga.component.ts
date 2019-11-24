import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Manga } from "../manga";
import { trigger, state, style, transition, animate } from '@angular/animations';

const ANIMATION_TIME = 300
@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})


export class MangaComponent{
  @Output()
  update = new EventEmitter<Manga>();
  
  @Input()
  manga: Manga;

  udpdated(){
    this.update.emit(this.manga);
  }

  get currentManga(){
    return localStorage.getItem;
    console.log(localStorage.getItem);
  }
}