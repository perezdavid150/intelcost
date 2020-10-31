import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  // Declaración de variables a usar en todo el servicio

  private url = 'https://pixabay.com/api';
  private key = '13119377-fc7e10c6305a7de49da6ecb25';

  constructor(
    private http: HttpClient
  ) { }

  // Get inicial

  getFotos(){
    return this.http.get(`${ this.url }/?key=${ this.key }`)
                    .pipe( map ( data => data['hits'] ) );
  }

  // Aplicar filtro

  filtrar( tag: string, tipo: string ){

    tipo = ( tipo ) ? '&category=' + tipo : '';

    return this.http.get(`${ this.url }/?key=${ this.key }&q=${tag}${tipo}`)
                    .pipe( map ( data => data['hits'] ) );
  }

}
