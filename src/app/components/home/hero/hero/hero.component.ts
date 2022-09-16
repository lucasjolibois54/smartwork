import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  title="Smart platform to"
  titletwo="help you find work."

  constructor() { }

  ngOnInit() {}

}
