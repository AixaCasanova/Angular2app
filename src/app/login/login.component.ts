import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario = {nombre:""};
  constructor() { }
  
  ngOnInit() {
  }
 
  loguear(event){
    console.log(event);
    alert("usuario: "+ event.nombre+ "  " + "password: "+ event.password);
   
      
  }

}
