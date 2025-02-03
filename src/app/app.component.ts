import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio3';

  //propiedades 
producto = {
  id: 0,
  descripcion :'',
  precio: 0
 }

 //arreglo de productos
 productos =[
  {id: 1, descripcion:'Galletas principe',precio:16.50},
  {id: 2, descripcion:'Takis Fuego',precio:15},
  {id: 3, descripcion:'Bonafont 600',precio:20.50},
  {id: 4, descripcion:'Sabritas',precio:22.70},
  {id: 5, descripcion:'Santa Clara',precio:35.20},

 ];
 
 //metodo que determina si hay productos en el arreglo
 hayProducto(){
  return this.productos.length > 0;
 }

 //funcion que agrega productos al arreglo
 agregarProducto(){
  if(this.producto.id == 0){
    alert('El ID del productoss debe de ser diferente a de CERO');
    return;
  }
  for(let i=0; i< this.productos.length; i++){
    if(this.producto.id == this.productos[i].id){
      alert('Ya existe un pordicto con ese ID');
      return
    }
  }
  this.productos.push({
    id:this.producto.id,
    descripcion: this.producto.descripcion,
    precio: this.producto.precio

   });
   this.producto.id = 0;
   this.producto.descripcion = '';
   this.producto.precio = 0;
 }

 //Metodo para seleccionar un producto
 seleccionarProducto(productoSeleccionado:{id:number; descripcion:string; precio:number}){
  this.producto.id = productoSeleccionado.id;
  this.producto.descripcion = productoSeleccionado.descripcion;
  this.producto.precio = productoSeleccionado.precio;
 }

 //funcion para modificar un producto(el producto seleccionado)
 modificarProducto(){
  for(let i=0; i< this.productos.length; i++){
    if(this.producto.id == this.productos[i].id){
      this.productos[i].descripcion=this.producto.descripcion;
      this.productos[i].precio=this.producto.precio;

      this.producto.id = 0;
      this.producto.descripcion = '';
      this.producto.precio = 0;
      return;

    }
  }
   alert('No existe el ID');
 }

 //funcion para eliminar un producto
 eliminarProducto(id:number){
  for(let i=0; i< this.productos.length; i++){
    if(id == this.productos[i].id){
      this.productos.splice(i,1);
      return;
    }

  }
 }
}

