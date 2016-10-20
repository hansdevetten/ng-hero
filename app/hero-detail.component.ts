import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero'

import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  providers: [HeroService],
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  public static idRouteParam: string = 'id';

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params[HeroDetailComponent.idRouteParam];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
