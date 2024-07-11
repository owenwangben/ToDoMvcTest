export interface Todo {
    Status:boolean;
    Thing:string;
    Editing:boolean;
};

export enum Todotype{
    All,
    Active,
    Completed
}