import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-telephone-component',
  templateUrl: './telephone-component.component.html',
  styleUrls: ['./telephone-component.component.scss']
})
export class TelephoneComponentComponent implements OnInit {
  @Output() getPhoneNumber = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getNumber(event:any){
    console.log(event);
      }
      
      onCountryChange(event:any){
        console.log(event);
      }
      hasError(event:any){
        console.log(event);
      }
      telInputObject(obj:any) {
        
        console.log(obj);
        obj.setCountry('in');
      }
      numberOnly(event:any): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
        }
        return true;
    
      }
}
