import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {Car} from '../model/cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'parking-udistrital-frontend';
  cars: Car[];
  cols: any[];
  username = '';

  ngOnInit() {

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }
}
