import { Component } from '@angular/core';
import { Todo, Todotype } from './toDoList';
// import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoMVC-test';

  // constructor(private storageService : StorageService){ }

  // saveData(): void {
  //   const data = { name: 'John Doe', age: 30 };
  //   this.storageService.setItem('userData', data);
  // }

  // loadData(): void {
  //   const userData = this.storageService.getItem('userData');
  //   console.log(userData);
  // }

  // clearData(): void {
  //   this.storageService.clear();
  // }

  //enum
  nowTodoType = Todotype.All;
  todoTypes = Todotype;


  //項目列表
  toDoList : Todo[] = [];

  //全選按鈕
  toggleBtn = false;

  //輸入框enter新增項目，禁止輸入空白
  add(input : HTMLInputElement){
    const inputValue = input.value.trim();
    if(inputValue !== ''){
    this.toDoList.push({
      Status: false,
      Thing: input.value,
      Editing: false
    });
  };
    input.value = '';
  };
  // add(input : HTMLInputElement){
  //   const inputValue = input.value;
  //   const words = inputValue.split(/\s+/);
  //   const newTodoList = {
  //     Status: false,
  //     Thing: words.join(' '),
  //     Editing: false
  //   };
    
  //   if(words.length > 0 && words.every( word => word.trim() !== '')){
  //     this.toDoList.push(newTodoList);
  //     input.value = '';
  //   }
  // };
  
  //項目全選
  // allToggle(){
  //   this.toggleBtn = !this.toggleBtn;
  //   this.toDoList.forEach(data => {
  //     data.Status = !data.Status;
  //   });
  // };
  allToggle(){
    const allCheck = this.toDoList.every(data => data.Status);
    this.toDoList.forEach(data => {data.Status = !allCheck});
    this.toggleBtn = !allCheck;
  }


  //項目勾選
  clickCheck(item:Todo){
    item.Status = !item.Status;
  };

  //項目刪除
  delete(index:number){
    this.toDoList.splice(index,1);
  };

  //雙擊編輯
  edit(item:Todo){
    item.Editing = true;
  }

  //編輯更新
  update(item:Todo,value:string){
    item.Thing = value;
    item.Editing = false;
  }

  //參數type預設為數字
  setTodoType(type:number){
    this.nowTodoType = type;
  };

  //全部
  get newTodoAll(){
    let List : Todo[] = [];

    switch(this.nowTodoType){

    case Todotype.Active:
    List = this.todoActive;
    break;

    case Todotype.Completed:
    List = this.todoCompleted;
    break;

    default:
      List = this.toDoList;
      break;
    };
    return List;
  };

  //未勾選集合
  get todoActive() : Todo[] {
    return this.toDoList.filter(data => !data.Status);
  };

  //已勾選集合
  get todoCompleted() : Todo[] {
    return this.toDoList.filter(data => data.Status);
  };

  //清除已完成項目
  clearCompleted(){
    this.toDoList = this.todoActive;
  };

}
