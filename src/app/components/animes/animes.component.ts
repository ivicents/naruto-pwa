import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/models.ts/anime.interface';
import { AnimesService } from 'src/app/services/animes.service';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('60ms', animate('600ms ease-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('200ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css'],
  animations: [listAnimation],
})
export class AnimesComponent implements OnInit {
  animes: Anime[] = [];
  isLoading = true;

  constructor(private animesService: AnimesService) {}

  ngOnInit(): void {
    this.animesService.getAllAnimes().subscribe(
      (response) => {
        this.isLoading = false;
        this.animes = response?.results;
      },
      (error) => (this.isLoading = false)
    );
  }
}
