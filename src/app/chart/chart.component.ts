import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import "chart.js/auto";
import {Chart} from "chart.js";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit{
  @Input() data: any;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;


  ngAfterViewInit() {

    const canvas = this.canvas.nativeElement;
    new Chart(canvas, {
      type: "line",
      data:{
      labels: this.data[0].data.labels,
        datasets: [{
        label: 'kWh',
        data: this.data[0].data["datasets"][0].data
      }]
    },
      options: this.data.options
    });
  }



}

