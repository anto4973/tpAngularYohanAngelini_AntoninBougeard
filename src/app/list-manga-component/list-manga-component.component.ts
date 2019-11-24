import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Manga } from '../manga';

@Component({
  selector: 'app-list-manga-component',
  templateUrl: './list-manga-component.component.html',
  styleUrls: ['./list-manga-component.component.css']
})
export class ListMangaComponentComponent implements OnInit {

  mangas:Manga[] = [];

  isActive: boolean = true;
  nameManga:string;
  categorie:string;
  genre: string;
  note : number

  constructor(private router: Router){ }

  ngOnInit(){
    this.refreshManga();  
  }

  private refreshManga(){
    const mangas = localStorage.getItem('manga')
    this.mangas = mangas ? JSON.parse(mangas) : []
  }

  saveManga(){
    localStorage.setItem('manga', JSON.stringify(this.mangas))
    console.log(localStorage.getItem);
  } 

  addManga(){
    this.mangas.push({
      name: this.nameManga,
      categorie : this.categorie,
      genre : this.genre,
      note : this.note
    })
    console.log(this.mangas)
    this.saveManga();
    this.isActive = false
    //this.router.navigate(['app-manga'], {state: {data: {this:this.nameManga}}});
  }
  clearStorage(){
    localStorage.clear();
    console.log(localStorage)
  }
}
