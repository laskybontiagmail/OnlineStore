import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable()
export class UsersCrudService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
      ,'Content-Type': 'application/json'
  }),
  params: new HttpParams()
  };

  constructor(private http: HttpClient) {

  }

  public loginToGreenTreeCardinalConnect() {
    var finalUrl = "/eService/Login.asp";

    var localHttpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
      ,params: new HttpParams()
    };

    var body: URLSearchParams = new URLSearchParams();
    body.set('CoyOrg', 'laskyb@cardinallogistics.co.nz');
    body.set('Password', 'cardinal');
    body.set('SubmitLogin', 'True');
    body.set('submit1', 'Log In');

    this.http.post<Response>(finalUrl, body.toString(), localHttpOptions)
      .subscribe(
        response => {
          console.log("respone from loginToGreenTreeCardinalConnect()");
          console.log(response);
          window.location.href = 'https://customer.cfd.co.nz/eService/Home.asp';
        }
        ,error => {
          window.location.href = 'https://customer.cfd.co.nz/eService/Home.asp';
        }
      );
  }
}

