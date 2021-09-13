import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public title: string;
  public project!: Project;
  public save_project: any;
  public status:string = "";
  public filesToUpload: Array<File> = [];
  public url:string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router,
  )
  {
    this.title = 'Editar projecto';
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getProject(id);
    });
  }

  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  //prueba
  onSubmit(form:any){

    //Guardar datos básicos.
    this._projectService.updateProject(this.project).subscribe(
      response => {
          if(response.project){

            if(this.filesToUpload){

                //Subir imagen
                this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
                .then((result:any) => {

                  this.save_project = result.project;

                  this.status = 'success';

                });
            }else{
              this.save_project = response.project;

              this.status = 'success';
            }

          }else{
              this.status = 'failed';
          }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
