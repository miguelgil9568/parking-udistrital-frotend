import {Component, Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.css']
})
export class IndicadorComponent implements OnInit {

  ariaHidden= false;
  display= 'none';

  constructor() { }

  ngOnInit(): void {
  }

  showSpinner(show) {
    const spinner = document.querySelector('.spinner-modal-govco');
    this.ariaHidden = !this.ariaHidden;
    this.display = this.ariaHidden ? "flex" : "none";
    // @ts-ignore
    spinner.style.display = this.display;
    // @ts-ignore
    spinner.setAttribute("aria-hidden", this.ariaHidden);

    if(this.ariaHidden) {
      const backdrop = document.createElement('div');
      backdrop.classList.add('modal-backdrop', 'fade', 'show', 'backdrop-govco');
      document.body.appendChild(backdrop);
    } else {
      const element = document.querySelector('.backdrop-govco');
      document.body.removeChild(element);
    }
  }
}
