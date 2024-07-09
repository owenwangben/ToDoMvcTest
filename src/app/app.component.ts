import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoMVC-test';

  toDoList = [
    { status:false,thing:'first'},
    { status:false,thing:'second'},
    { status:false,thing:'third'},
  ];

  toggleBtn = false;

  allToggle(){
    this.toggleBtn = !this.toggleBtn;
    this.toDoList.forEach(data => {
      data.status = !data.status;
    });
  };

  clickCheck(item:any){
    item.status = !item.status;
  };



}
