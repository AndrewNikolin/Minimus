import {Component, OnInit} from '@angular/core';
import {FbService} from '../../services/fb/fb.service';
import { NgFor, AsyncPipe } from '@angular/common';
import { WeatherCardComponent } from '../../ui/weather-card/weather-card.component';
import { AddCardComponent } from '../../ui/add-card/add-card.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [NgFor, WeatherCardComponent, AddCardComponent, AsyncPipe]
})
export class HomeComponent implements OnInit {
  cities;

  constructor(public fb: FbService) {
  }

  ngOnInit() {
    this.cities = this.fb.getCities();
  }
}
