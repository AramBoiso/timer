import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minutos:number;
  segundos:number;
  isPaused:boolean;
  buttonLabel:string;

    constructor(){
      this.resetTimer();
      setInterval(()=> this.tick(), 1000);
    }

    resetTimer():void{ // Primera funcion que se ejecuta
      this.minutos = 24;
      this.segundos = 59;
      this.buttonLabel = "  Empezar";
      this.togglePause();
    }

    tick():void{ //Segunda funcion que se ejecuta
      if(!this.isPaused){ 
          this.buttonLabel = "Detener";
  
      if(--this.segundos < 0){
        this.segundos = 59;
        if(--this.minutos < 0){
          this.minutos = 24;
          this.segundos = 59;
        }
      } 
    } 
     
    }

    togglePause():void{ // boton de pausa
        
        this.isPaused = !this.isPaused;  // = true
      
        if(this.minutos < 24 || this.segundos < 59){
          this.buttonLabel = this.isPaused ? "Reaunudar" : "Detener";
        }

    } 

}
