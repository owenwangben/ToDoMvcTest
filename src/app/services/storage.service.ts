import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getItem(key:string) : any{
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  setItem(key:string,value:any) : void{
    localStorage.setItem(key,JSON.stringify(value));
  }

  removeItem(key:string) : void{
    localStorage.removeItem(key);
  }

  clear() : void{
    localStorage.clear();
  }

}
