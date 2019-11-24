import { RouterModule, Routes } from '@angular/router';
import {MangaComponent} from "./manga/manga.component";
import {ListMangaComponentComponent} from "./list-manga-component/list-manga-component.component";

const routes : Routes = [
    { path: 'app-manga', component: MangaComponent},
    { path: '', component:ListMangaComponentComponent}
]

export const routing = RouterModule.forRoot(routes);