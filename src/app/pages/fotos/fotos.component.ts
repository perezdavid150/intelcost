import { Component, OnInit } from '@angular/core';
import { FotosService } from '../../services/fotos.service';
import { FotoModel } from '../../models/foto.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  public formSubmitted = false;

  // Modelo
  fotos: FotoModel[] = [];

  // Declaración de formulario reactivo

  public filtroForm = this.fb.group({
    tag: ['', [Validators.maxLength(100), Validators.required]],
    tipo: ['']
  });

  constructor(
    private fotosService: FotosService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    // Llamado inicial para tener imagenes

    this.fotosService.getFotos()
        .subscribe( resp => {
          this.fotos = resp;
        } );

  }

  // Aplicamos filtro

  aplicarFiltro(){
    this.formSubmitted = true;
    if ( this.filtroForm.valid ){
      this.fotosService.filtrar(this.filtroForm.value.tag, this.filtroForm.value.tipo)
                        .subscribe( resp => {
                          this.fotos = resp;
                        });
    }
  }

  // Validación de formulario

  campoNoValido( campo: string ): boolean{
    return ( this.filtroForm.get(campo).invalid && this.formSubmitted ) ? true : false;
  }

}
