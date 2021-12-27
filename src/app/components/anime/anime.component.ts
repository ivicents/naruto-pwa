import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/models.ts/anime.interface';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
})
export class AnimeComponent implements OnInit {
  panelOpenState = false;
  anime: Anime | undefined;

  constructor(
    private animeService: AnimesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    this.animeService.getAnimeById(identifier!).subscribe((anime) => {
      if (!anime) {
        return this.router.navigateByUrl('/');
      }

      this.anime = anime;
      return;
    });
  }
}
