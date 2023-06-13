import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirsttask';

  name="";
  email="";
  number="";
  password="";


  textbox1="";
  textbox2="";
  textbox3="";
  textbox4="";

  clicked(){
    this.textbox1=this.name;
    this.textbox2=this.email;
    this.textbox3=this.number;
    this.textbox4=this.password;
  }
}
