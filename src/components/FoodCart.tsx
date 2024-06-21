import { useSelector } from "react-redux";
import { Food } from "../interface";

export default function FoodCart() {
  const stateFood:Food[] = useSelector((state:any)=>state.foodCartReducer)
  return (
    <>
      {stateFood.map((item:Food,index:number)=>(
        <tr>
        <th scope="row">{index+1}</th>
        <td>{item.name}</td>
        <td>{item.price} USD</td>
        <td>
          <input name="cart-item-quantity-1" type="number" defaultValue={1} />
        </td>
        <td>
          <a className="label label-info update-cart-item" data-product="">
            Update
          </a>
          <a className="label label-danger delete-cart-item" data-product="">
            Delete
          </a>
        </td>
      </tr>
      ))}
    </>
  );
}
