import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-timmer',
  templateUrl: './timmer.component.html',
  styleUrls: ['./timmer.component.css']
})
export class TimmerComponent implements OnInit {

  @Input() timmer : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
