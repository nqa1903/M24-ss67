import { Action, Food } from "../../interface";

const initialFoods:Food[] = [
    {
        id : 1,
        name:"Pizza",
        price : 30,
        src:"https://github.com/ngoquy12/template_shopping_cart/blob/master/images/pizza.jpg?raw=true",
        quantity : 10,
    },
    {
        id : 2,
        name:"Hamburger",
        price : 15,
        src:"https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Hamburger.jpg?raw=true",
        quantity: 15,
    },
    {
        id : 3,
        name:"Bread",
        price : 20,
        src:"https://github.com/ngoquy12/template_shopping_cart/blob/master/images/bread.jpg?raw=true",
        quantity : 20,
    },
    {
        id : 4,
        name:"Cake",
        price : 10,
        src:"https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Cake.jpg?raw=true",
        quantity : 25,
    },
]

const foodReducer = (state=initialFoods , action:Action)=>{
    switch(action.type){
        case "ADD":
            return state;
        default: 
            return state;
    }
}

export default foodReducer;