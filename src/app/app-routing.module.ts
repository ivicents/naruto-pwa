import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './components/anime/anime.component';
import { AnimesComponent } from './components/animes/animes.component';

const routes: Routes = [
  {
    path: '',
    component: AnimesComponent,
  },
  {
    path: 'image/:id',
    component: AnimeComponent,
  },
  {
    path: '**',
    component: AnimesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
