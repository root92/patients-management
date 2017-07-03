import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import {FetchData} from '../../../services/FetchData.service';
@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css'],
  providers: [FetchData]
})
export class NewPatientComponent implements OnInit {
  show: boolean = false;

  data = "" ;
  Http = null;
  Response = null;
  items = ['initial'] ;
  count = 0 ;
  itemCount = 0 ;

  lstName:string;
  frstName: any;
  sexe: string;
  phone1: string;
  phone2: string;
  dtOfBrth: string;
  email: string;
  bloodtyp: string;

  insID : string;

  constructor(private fetchData: FetchData) { }

  ngOnInit() {

  }

   reloadItems(params) {
    // just reinit the component that gonna fetch and reload the data
    this.ngOnInit() ;
    }
  rowClick(param){

  }
  rowDoubleClick(){

  }
  getData(){
    /*
  return this.Http.get(BASE_URL + '/people?' + paramsToQueryString(params)).toPromise()
            .then((resp: Response) => ({
                items: resp.json(),
                count: Number(resp.headers.get('X-Total-Count'))
            }));
  */
    }
    OnIDChange(){
      this.show = !this.show;
      
      this.Http = Http ;
      this.Response = Response ;
      let endPoint = 'api/v1/patients/list/' + this.insID;

      this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          // we assign the tab now
          // console.log('1 ',this.items);
          // this.items = data ;
          this.setItems(data);
          // console.log('2 ',this.items);
          

          // console.log(data[0].firstName);
          // this.itemCount = this.count = this.items.length ;
        },
        (error) => {
          console.error(error);
        });

        console.log('3 ',this.items);
        

    }
  setItems(item){
    this.items = item;
    // this.frstName = this.items[0].firstName;
    console.log('ok ',this.items);
  }

}
