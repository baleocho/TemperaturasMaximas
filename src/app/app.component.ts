import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  temperaturaCount: any = [];
  //VARIABLE PARA MANEJAR/ORGANIZAR LAS TEMPERATURAS INGRESAR
  temperaturas: any = [];
  //SEMANAS, PARA LA TABLA MODIFICABLE
  semanas: any = [
    { semana: "1", lunes: 30, martes: 31, miercoles: 36, jueves: 38, viernes: 38 },
    { semana: "2", lunes: 31, martes: 36, miercoles: 38, jueves: 30, viernes: 31 },
    { semana: "3", lunes: 32, martes: 34, miercoles: 34, jueves: 37, viernes: 38 },
    { semana: "4", lunes: 33, martes: 35, miercoles: 35, jueves: 35, viernes: 36 }
  ];
  //COLUMNAS DE LA TABLA MODIFICABLE
  cols = [
    { field: 'semana', header: 'Semanas' },
    { field: 'lunes', header: 'Lunes' },
    { field: 'martes', header: 'Martes' },
    { field: 'miercoles', header: 'Miércoles' },
    { field: 'jueves', header: 'Jueves' },
    { field: 'viernes', header: 'Viernes' },
  ];
  //DEFINICION DE VARIABLE PARA LA GRAFICA DEL TIPO PIE
  dataChart: any;
  optionsChart: any;

  constructor() {
  }

  //FUNCION LLAMADA CON BOTON CALCULAR
  calcular() {

    //CONTADOR INDEPENDIENTE PARA AGREGAR AL ARRAY
    let countTemperaturas = 0;
    //TAMAÑO DEL ARREGLO PARA LA TABLA MODIFICABLE, ACCEDE A LA SEMANA
    for (let i = 0; i < this.semanas.length; i++) {
      //AGREGAR TEMPERATURA DEL DIA DE LA SEMANA EN EL ARRAY -> this.temperaturas = [31,30,28,30 ...]
      this.temperaturas[countTemperaturas] = this.semanas[i].lunes; countTemperaturas++;
      this.temperaturas[countTemperaturas] = this.semanas[i].martes; countTemperaturas++;
      this.temperaturas[countTemperaturas] = this.semanas[i].miercoles; countTemperaturas++;
      this.temperaturas[countTemperaturas] = this.semanas[i].jueves; countTemperaturas++;
      this.temperaturas[countTemperaturas] = this.semanas[i].viernes; countTemperaturas++;
    }

    //TOTAL DE NUMEROS DE LA LISTA
    let total_numeros = this.temperaturas.length;
    //Cuenta la cantidad de numeros repetidos dentro del for
    let contador = 0;
    //ALMACENA LOS NUMERO REPETIDOS TEMPORALMENTE
    let repetidos = [];
    //CONTADOR PARA ALMACENAR EN ARRAYS FINALES
    let contadorDatoFinal = 0;
    //VARIABLES PARA GRAFICA
    let labelsforPie = [];
    let dataforPie = [];

    for (var i = 0; i < total_numeros; i++) {
      for (var j = 0; j < total_numeros; j++) {
        if (parseInt(this.temperaturas[i]) == parseInt(this.temperaturas[j])) {
          contador++;
        }
      }

      if (contador > 1 && repetidos.indexOf(parseInt(this.temperaturas[i])) === -1) {
        repetidos.push(parseInt(this.temperaturas[i]));
        this.temperaturaCount[contadorDatoFinal] = {
          xi: this.temperaturas[i],
          fi: contador,
          hi: contador / this.temperaturas.length,
          hiP: ((contador * 100) / this.temperaturas.length)+"%"
        };
        dataforPie[contadorDatoFinal] = ((contador * 100) / this.temperaturas.length );
        labelsforPie[contadorDatoFinal] = ((contador * 100) / this.temperaturas.length )+ "% - ["+ this.temperaturas[i] + " grados]";
        contadorDatoFinal++;
      } else if (contador == 1) {
        this.temperaturaCount[contadorDatoFinal] = {
          xi: this.temperaturas[i],
          fi: contador,
          hi: contador / this.temperaturas.length,
          hiP: ((contador * 100) / this.temperaturas.length)+"%"
        };
        dataforPie[contadorDatoFinal] = ((contador * 100) / this.temperaturas.length );
        labelsforPie[contadorDatoFinal] =((contador * 100) / this.temperaturas.length )+ "% - ["+ this.temperaturas[i] + " grados]";
        contadorDatoFinal++;
      }
      contador = 0;
    }

    this.optionsChart = {
      legend: {
        position: 'right'
      }

    };
    this.dataChart = {
      labels: labelsforPie,
      datasets: [
        {
          data: dataforPie,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#E85C4F",
            "#E84FBD",
            "#EB57FF",
            "#FF7D57",
            "#3D92B3",
            "#FFF87D",
            "#B3344F",
            "#63FF7C",
            "#22B339",
            "#B3344F",
            "#CC5C3B",
            "#998079",
            "#84CC3B",
            "#401921",
            "#9B34B3",
            "#70FFCE",
            "#B38C2B"
          ],
        }]
    };

  }




}
