import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent implements OnInit {
  public numeros!: Array<number>;

  constructor(private _activeRouter: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {  
    this.numeros = [];
  }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params) => {
      let numero = parseInt(params["valor"]);
      let aux = [];
      for (let i = 1; i <= 10; i++){
        let op = numero * i;
        aux.push(op);
      }
      this.numeros = aux;
      this._cdr.detectChanges();
    })  
  }
}
