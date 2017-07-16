import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-md-navbar',
  templateUrl: './md-navbar.component.html',
  styleUrls: ['./md-navbar.component.css'],
})
export class MdNavbarComponent implements OnInit {

  dato = 'Creando componentes';
  arrayClases: Preguntas[] = [{
    pregunta: 'Se ve esta pregunta?',
    afirmativo: 12,
    negativo: 21,
  }];

  constructor() {
  }

  ngOnInit() {
    console.log('Componente creado');
  }

}

interface Preguntas {
  pregunta: string;
  afirmativo: number;
  negativo: number;
}
