import { Component, OnInit} from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // NOT instantiated variable
  selectedHero?: Hero;

  // Instantiated variable
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero.id);
    this.messageService.add(`HeroesComponent: Selected hero id=${ hero.id }`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}

/*
public
private
protected
 */

/*
static
readonly
 */
