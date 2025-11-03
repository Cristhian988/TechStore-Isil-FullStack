import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Feature } from '../../components/feature/feature';
import { Newsletter } from '../../components/newsletter/newsletter';
import { Banner } from '../../components/banner/banner';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  imports: [RouterModule, Hero, Feature, Newsletter, Banner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
