import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Portal } from './portal-model';
import { TableService } from './table-service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {

  listaDePortais$!: Observable<Portal[]>

  constructor(private service: TableService) { }

  ngOnInit() {
   
  }


  listar(){
   
      this.listaDePortais$ = this.service.buscar();
      console.log(this.listaDePortais$);
  }

}
