import { Component, Input, OnInit } from '@angular/core';
import { Portal } from '../portal-model';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  @Input() portal: Portal;

  constructor() { }

  ngOnInit(): void {
  }

}
