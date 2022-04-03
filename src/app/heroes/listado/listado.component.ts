import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

 heroes: string[] = 
 ['spiderman','Ironman','Hulk','Thor'];
 
 heroeBorrado:String = "";

 borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || "";
  
 }

 

}
