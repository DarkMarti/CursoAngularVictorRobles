import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura : number;
  @Input('etiquetas') captions: boolean;
  @Output() conseguirAutor = new EventEmitter();


  public autor: any;

  constructor() {
    this.anchura = 0;
    this.captions = false;

    this.autor = {
      nombre: "Victor Robles",
      website: "victorroblesweb.es",
      youtube: "Victor Robles Web"
    }
   }

  ngOnInit(): void {
    $("#logo").click(function(){
      $("header").css("background","green")
                .css("height","50px");

    });

      (<any>$('.galeria')).bxSlider({
        mode: 'fade',
        captions: this.captions,
        slideWidth: this.anchura
      });
  }

  lanzar(event : any){
    console.log(event);
    this.conseguirAutor.emit(this.autor);
  }

 }


