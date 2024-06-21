import { Food } from "../../interface";

const initialFoodCarts:Food[] = [
    {
        id : 1,
        name:"Pizza",
        price : 30,
        src:"https://github.com/ngoquy12/template_shopping_cart/blob/master/images/pizza.jpg?raw=true",
        quantity : 10,
    },
];

const foodCartReducer = (state=initialFoodCarts , action:any) =>{
    switch(action.type){
        case "UPDATE":
            return state;
        case "DELETE":
            return state;
        default:
            return state;
    }
}

export default foodCartReducer;