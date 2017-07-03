import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {FetchData} from '../../../services/FetchData.service'

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css'],
  providers: [FetchData],
})
export class ListPatientsComponent implements OnInit {

  data = "" ;
  Http = null;
  Response = null;
  items = "" ;
  count = 0 ;
  itemCount = 0 ;

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    this.Http = Http ;
    this.Response = Response ;
    let endPoint = 'api/v1/patients/list/' ;

    this.fetchData.get(endPoint)
    .subscribe(
      (data) => {
        // we assign the tab now
        this.items = data ;
        this.itemCount = this.count = this.items.length ;
      },
      (error) => {
        console.error(error);
      });
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

}
