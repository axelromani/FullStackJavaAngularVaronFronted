
import { Component, OnInit } from '@angular/core';

import { VaronService } from '../../serviciosz/varon.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {

  varonesX: any = [];


  constructor(private varonServiceX : VaronService){} 


  //INVOCO/EJECUTO - INICIALIZO
  ngOnInit(): void {

    this.getVaronX();
      
  }



  /* Lista Varones! */
  getVaronX() {

    this.varonServiceX.getVarones()
      
    /* forma ANTIGUA!
      .subscribe(
        respuesta => {
          this.varonesX = respuesta;
        },
        err => console.error(err)
      );*/

      .subscribe({

        next: respuesta => {
          this.varonesX = respuesta; //La respuesta da un ARREGLO y los guardo en "varonesX"
        },
        error: errorX => {
          console.error(errorX)
        }
      });
  }


  /* Eliminar Varones! */


  deleteVaronX(id: number) {

    this.varonServiceX.deleteVaron(id)

      /*
      .subscribe(
        res => {
          console.log(res);
          this.getAlumnos();
        },
        err => console.error(err)
      )*/

      .subscribe({

        next: respuestax =>{

          console.log(respuestax);
          this.getVaronX();
        },
        error: errorX => {
          console.error(errorX)
        }
      });
  }



}
