import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private compras: any[] = [
    {
      nombre: 'Laptop',
      cantidad: 2,
      precio: 1500,
      fecha: '2024-10-01',
      proveedor: 'Tech Supplier',
      categoria: 'Electrónica'
    },
    {
      nombre: 'Silla ergonómica',
      cantidad: 5,
      precio: 120,
      fecha: '2024-09-21',
      proveedor: 'Office Depot',
      categoria: 'Muebles'
    },
    {
      nombre: 'Café',
      cantidad: 20,
      precio: 10,
      fecha: '2024-10-10',
      proveedor: 'Coffee Store',
      categoria: 'Alimentos'
    }
  ];

  constructor() {}

  getCompras() {
    return this.compras;
  }

  addCompra(compra: any) {
    this.compras.push(compra);
  }

  updateCompra(index: number, compra: any) {
    this.compras[index] = compra;
  }

  deleteCompra(index: number) {
    this.compras.splice(index, 1);
  }
}
