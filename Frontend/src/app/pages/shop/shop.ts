import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Products } from '../../components/products/products';

@Component({
  selector: 'app-shop',
  imports: [RouterModule, Products],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {}
