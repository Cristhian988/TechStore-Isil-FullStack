import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../types/product';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() product!: Product;

  count = 0;
  stars = Array(5).fill('');

  // Calcular rating basado en precio (ejemplo - ajusta según tu lógica)
  get rating(): number {
    const discount = ((this.product.price - this.product.offerPrice) / this.product.price) * 100;
    if (discount >= 20) return 5;
    if (discount >= 15) return 4;
    if (discount >= 10) return 3;
    return 4; // default
  }

  addToCart() {
    this.count = 1;
    console.log('Producto agregado:', this.product.name);
  }

  increaseCount() {
    this.count++;
  }

  decreaseCount() {
    this.count = Math.max(this.count - 1, 0);
  }
}
