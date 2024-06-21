export interface Food{
    id : number,
    name : string ,
    price : number,
    src : string;
    quantity : number;
}

export interface Action{
    type : string,
    payload : any,
}