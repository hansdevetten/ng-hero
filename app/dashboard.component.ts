import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
    moduleId : module.id,
    providers: [HeroService],
    selector : 'dashboard',
    templateUrl : 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    heroes : Hero[] = [];
    ngOnInit() : void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }
    constructor(private heroService : HeroService) {}

}