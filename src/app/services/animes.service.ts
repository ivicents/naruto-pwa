import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../models.ts/anime.interface';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  constructor(private http: HttpClient) {}

  getAllAnimes(): Observable<any> {
    return this.http.get<any>('https://api.jikan.moe/v3/search/anime?q=naruto');
  }

  getAnimeById(id: string): Observable<Anime> {
    return this.http.get<Anime>('https://api.jikan.moe/v3/anime/' + id);
  }
}
