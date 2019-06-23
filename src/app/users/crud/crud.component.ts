import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersCrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.less']
})
export class UsersCrudComponent implements OnInit {

  constructor(
    private router: Router
    ,private usersCrudService: UsersCrudService
  ) { }

  ngOnInit() {
  }

  // private loginToGreenTreeCardinalConnect_httpClient() {
  //   this.usersCrudService.loginToGreenTreeCardinalConnect();
  // }

  // private loginToGreenTreeCardinalConnect() {
  //   this.usersCrudService.loginToGreenTreeCardinalConnect();
  // }

  public loginToGreenTreeCardinalConnect(): void {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'https://customer.cfd.co.nz/eService/Login.asp');

    /**
     * body.set('CoyOrg', 'laskyb@cardinallogistics.co.nz');
    body.set('Password', 'cardinal');
    body.set('SubmitLogin', 'True');
    body.set('submit1', 'Log In');
     */
    var hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', 'CoyOrg');
    hiddenField.setAttribute('value', 'laskyb@cardinallogistics.co.nz');
    form.appendChild(hiddenField);

    hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', 'Password');
    hiddenField.setAttribute('value', 'cardinal');
    form.appendChild(hiddenField);

    hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', 'SubmitLogin');
    hiddenField.setAttribute('value', 'True');
    form.appendChild(hiddenField);

    hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', 'submit1');
    hiddenField.setAttribute('value', 'Log In');
    form.appendChild(hiddenField);
    form.target = '_blank';

    document.body.appendChild(form);
    
    form.submit();

  }

  public loginToPitanWMS(): void {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');

    //form.setAttribute('action', 'https://wms.cardinallogistics.co.nz/Account/LogOn?ReturnUrl=%2fOrder%2fTransNo%2f441741');

    //works:
    //form.setAttribute('action', 'https://wms.cardinallogistics.co.nz/Account/LogOn?ReturnUrl=%2fOrder%2fTransNo%2f');

    form.setAttribute('action', 'https://wms.cardinallogistics.co.nz/Account/LogOn?ReturnUrl=%2fHome');

    //form.setAttribute('action', 'https://wms.cardinallogistics.co.nz/Account/LogOn');
    //form.setAttribute('action', 'https://wms.cardinallogistics.co.nz/Select/Warehouses');
    //form.setAttribute('action', 'https://wms.cardinallogistics.co.nz');
    //form.setAttribute('action', 'https://wms.cardinallogistics.co.nz/Home/About');

    /**
     * body.set('CoyOrg', 'laskyb@cardinallogistics.co.nz');
    body.set('Password', 'cardinal');
    body.set('SubmitLogin', 'True');
    body.set('submit1', 'Log In');
      */
    var hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', 'UserName');
    hiddenField.setAttribute('value', 'laskyb');
    form.appendChild(hiddenField);

    hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', 'Password');
    hiddenField.setAttribute('value', 'Monday18');
    form.appendChild(hiddenField);

    form.target = '_blank';

    document.body.appendChild(form);
    
    form.submit();
  }

  public loginToOceanBridge(): void {
    var form = document.createElement('form');
    form.name = 'Form1';
    form.id = 'Form1';
    form.setAttribute('method', 'post');

    //form.setAttribute('action', 'http://ediweb.oceanbridge.co.nz/Login/Login.aspx?ReturnUrl=%2fDefault.aspx');
    //form.setAttribute('action', 'https://cardinallogistics.oceanbridge.co.nz/quote/');
    form.setAttribute('action', 'https://ediweb.oceanbridge.co.nz/Login/Login.aspx?ReturnUrl=%2fOrders%2fOrders.aspx');

    var hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', 'LoginNameTextBox');
    hiddenField.setAttribute('id', 'LoginNameTextBox');
    hiddenField.setAttribute('value', 'leightonf@cardinallogistics.co.nz');
    form.appendChild(hiddenField);

    hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', 'PasswordTextBox');
    hiddenField.setAttribute('id', 'PasswordTextBox');
    hiddenField.setAttribute('value', 'fisher');
    form.appendChild(hiddenField);

    form.target = '_blank';

    document.body.appendChild(form);
    
    form.submit();
  }

}
