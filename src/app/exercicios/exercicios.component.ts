import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {
  frase: string = 'ola mundo';
  link: string = 'https://www.youtube.com/@renatocariani';
  color: string = 'green'
  colorText: string = 'white'
  bool: boolean = true
  textoUnico: string = ''

  changeColor(){
    if (this.bool){
      this.color = 'black'
      this.colorText = 'orange'
    } else{
      this.color = 'green'
      this.colorText = 'white'
    }
    this.bool = !this.bool
    
  }
  setTexto(value:string){
    this.textoUnico = value
  }
}