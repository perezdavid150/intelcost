import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  private url = 'https://pixabay.com/api';
  private key = '13119377-fc7e10c6305a7de49da6ecb25';

  constructor(
    private http: HttpClient
  ) { }

  getFotos(){
    return this.http.get(`${ this.url }/?key=${ this.key }`)
                        .pipe( map ( data => data['hits'] ) );
  }

}
