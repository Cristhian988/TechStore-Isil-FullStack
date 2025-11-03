import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from '../card/card';
import { Product } from '../../types/product';
import { ProductsService } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, Card],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private productService = inject(ProductsService);
  productos: Product[] = [];
  cargando = false;
  error = false;

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productService.obtenerProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.cargando = false;
        this.error = false;
        console.log('Productos Cargados:', productos);
      },
      error: (error) => {
        console.error('Error Cargando Productos', error);
        this.cargando = false;
        this.error = true;
        this.productos = [];
      },
    });
  }
}
