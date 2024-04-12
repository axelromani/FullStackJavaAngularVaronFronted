import { Component, OnInit } from '@angular/core';

import { VaronService } from '../../serviciosz/varon.service';
import { Varon } from '../../modelsz/varon';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grabar',
  templateUrl: './grabar.component.html',
  styleUrl: './grabar.component.css'
})
export class GrabarComponent implements OnInit {


  //Inicializo el OBJETO "Varon"
  varonq: Varon = {
    id: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    email: '',
    pais: {
      id:0,
      nombre:''
    }
  };


  //Al momento de "Grabar" deberia listar el listado de "Paises" meidante un "COMBO" ya q no cuento API paises
  listPaises = [
    { id: 1, nombre: "Peru" },
    { id: 2, nombre: "Argentina" },
    { id: 3, nombre: "Brasil" },
  ];

  //defino una variable, para indicar q si esta en "false" lo grabe y si es true lo edite. Ese boolean se utiliza en 'grabar.html'
  edit: boolean = false;


  constructor(private varonServiceX: VaronService, private router: Router, private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {

    //si es q viene el id q cargue al ALUMNO para editar

    const params = this.activatedRoute.snapshot.params;//esto permite capturar parametros

    if (params?.['id']) {//si el parametro es un "id"

      this.varonServiceX.getVaron(params?.['id'])

        .subscribe({

          next: respuestaZ => {

            console.log(respuestaZ);
            this.varonq = respuestaZ;//toda la rpta lo guardo en objeto 'varonq'

            this.edit = true;// si le paso el parametro del Varon ahi es "true"
          },
          error: errorX => {
            console.error(errorX)
          }
        });
    }
  }





  saveNewVaronX() {

    delete this.varonq.id;// No se envia el id para nada al momento de grabar xq el id es AutoGenerado
    
    this.varonServiceX.saveVaron(this.varonq)

      /* FORMA ANTIGUA
      .subscribe(
        res => {
          console.log(res);
          //router -> Se necesita para ir al listadoVaron y regrese, se hace para refrescar la pag
          this.router.navigate(['/alumnos']);
        },
        err => console.error(err)
      )*/

      .subscribe({

        next: respuestaQ => {

          console.log(respuestaQ);

          this.router.navigate(['/varones'])
        },
        error: errorX => {
          console.error(errorX)
        }
      });
  }
  /* ------------------------------------------------------------------ */




  updateVaronX() {

    this.varonServiceX.updateVaron(this.varonq)

      .subscribe({

        next: respuestaP => {

          console.log(respuestaP);

          this.router.navigate(['/varones'])
        },
        error: errorX => {
          console.error(errorX)
        }
      });
  }





}
