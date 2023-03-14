import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Portal } from "./portal-model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TableService{
    private readonly API = 'https://localhost:7007/Portal';

    constructor(private http: HttpClient) { }

    buscar(): Observable<Portal[]>{
        return this.http.get<Portal[]>(this.API);
      }
}

