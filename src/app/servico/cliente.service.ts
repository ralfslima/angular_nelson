import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // url da API
  private url:string = "http://localhost:8090";

  constructor(private http:HttpClient) { }

  // Método para buscar clientes
  selecionar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  // Método para cadastrar clientes
  cadastrar(obj: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, obj);
  }

  
}
