import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
//ESTAS DOS LIBRERIAS PARA LOS PARAMETROS
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit {
  public doble!: number;
  public numero!: number;

  //RECIBIMOS EL OBJETO INYECTADO DE LAS RUTAS
  constructor
  (private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {
    this.doble = 0;
  }

  redirect(num: number): void {
    this._router.navigate(["/doble", num]);
  }

  goToHome(): void {
    this._router.navigate(["/"]);
  }

  ngOnInit(): void {
    //aqui nos subscribimos a la recuperacion del parametro
    this._activeRoute.params.subscribe((parametros: Params) => {
      //dentro de params es donde recibimos los parametros por su :name
      //la sintaxis es parametros['parametername']
      //el parametro es opcional, por lo que preguntamos
      if (parametros['numero'] != null){
        //parametros siempre son string
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
        this._cdr.detectChanges();
      }
    })
  }
}
