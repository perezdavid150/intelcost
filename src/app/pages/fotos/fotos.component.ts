import { Component, OnInit } from '@angular/core';
import { FotosService } from '../../services/fotos.service';
import { FotoModel } from '../../models/foto.model';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  fotos: FotoModel[] = [];

  constructor(
    private fotosService: FotosService
  ) { }

  ngOnInit(): void {

    this.fotosService.getFotos()
        .subscribe( resp => {
          this.fotos = resp;
        } );

  }

}
