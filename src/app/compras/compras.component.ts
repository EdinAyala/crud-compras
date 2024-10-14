import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComprasService } from '../compras.service'; // Importa el servicio

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  compras: any[] = []; // Inicializa el array vacío
  categorias: string[] = ['Electrónica', 'Muebles', 'Alimentos', 'Ropa', 'Hogar']; // Lista de categorías

  compra = {
    nombre: '',
    cantidad: '',
    precio: '',
    fecha: '',
    proveedor: '',
    categoria: ''
  };

  modoEdicion = false;
  indiceEdicion: number | null = null;

  constructor(private comprasService: ComprasService) {
    this.compras = this.comprasService.getCompras(); // Carga las compras desde el servicio
  }

  agregarCompra() {
    if (this.modoEdicion && this.indiceEdicion !== null) {
      this.comprasService.updateCompra(this.indiceEdicion, { ...this.compra });
    } else {
      this.comprasService.addCompra({ ...this.compra });
    }

    this.limpiarFormulario();
  }

  eliminarCompra(index: number) {
    this.comprasService.deleteCompra(index);
  }

  editarCompra(index: number) {
    this.compra = { ...this.compras[index] };
    this.indiceEdicion = index;
    this.modoEdicion = true;
  }

  limpiarFormulario() {
    this.compra = { nombre: '', cantidad: '', precio: '', fecha: '', proveedor: '', categoria: '' };
    this.indiceEdicion = null;
    this.modoEdicion = false;
  }
}
