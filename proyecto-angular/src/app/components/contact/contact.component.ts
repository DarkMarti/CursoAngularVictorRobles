import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  public widthSlider : number;
  public anchuraToSlider: number;
  public captions : boolean;
  public autor: any;

  public telefono: number = 696337347;
  public email: string = "marti_bk@hotmail.com";


  @ViewChild('textos') textos: any;

  constructor() {
    this.widthSlider = 0;
    this.anchuraToSlider = 0;
    this.captions = true;
   }

  ngOnInit(): void {
    var opcion_clasica = document.querySelector('#texto')?.innerHTML;
    //console.log(this.textos);
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = 0;
  }

  getAutor(event:any){
    this.autor = event;
  }

}
