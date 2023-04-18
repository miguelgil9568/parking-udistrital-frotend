import { Component, OnInit } from '@angular/core';
import {IndicadoresService} from '../../service/Indicadores.service';
import {Message, MessageService} from 'primeng';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataUsuarios: any;
  dataParkings: any[] = [];

  constructor(private indicadoresService: IndicadoresService,
              private messageService: MessageService) { }

  ngOnInit(): void {

    this.indicadoresService.capacity().subscribe(
      (result: any) => {
        console.log(result);
        let capa: any;
        for (let capacity of result.stattusCapacity ){
          capa = {
            name: capacity.nameParking,
            labels: ['Disponible', 'Ocupado', 'Agendado'],
            datasets: [
              {
                data: [capacity.available, capacity.busy, capacity.reserved],
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ],
                hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ]
              }]
          };
          this.dataParkings.push(capa);
        }

      },error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: error.error.mensaje});
      }
    );
    this.indicadoresService.usuarios().subscribe(
      result => {
            this.dataUsuarios = {
              labels: ['Disponible','Ocupado','Agendado'],
              datasets: [
                {
                  data: [300, 50, 100],
                  backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                  ]
                }]
            };
      });
  }

}
