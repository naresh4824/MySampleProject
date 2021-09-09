import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  public uploader:FileUploader;
  fileToUpload: File | null = null;
  constructor() { 
    this.uploader = new FileUploader({

    });
  }

  ngOnInit(): void {
  }
  handleFileInput($event:any){
    console.log($event.target.files);
    //this.fileToUpload = files.item(0);
  }
  onFileSelected(formData:any){
    console.log(formData);
    console.log("this.uploader" + this.uploader);
  }
  removeFile(){
    this.uploader.queue = [];
  }

}
