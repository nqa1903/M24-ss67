import { useSelector } from "react-redux";
import { Food } from "../interface/index";
import { useState } from "react";

export default function IFood() {
  const stateFood: Food[] = useSelector((state: any) => state.foodReducer);
  const [values, setValues] = useState(stateFood.map(() => 1));

  const handleChangeQuantity = (value: string, i: number) => {
    if (+value < 1) {
      return;
    }
    if(+value > stateFood[i].quantity){
      return;
    }
    values[i] = +value;
    setValues([...values]);
  };

  return (
    <>
      {stateFood.map((item:Food, i) => (
        <div>
          <div className="media product">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src={item.src} alt="pizza" />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{item.name}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                dicta asperiores veniam repellat unde debitis quisquam magnam
                magni ut deleniti!
              </p>
              <input
                name="quantity-product-1"
                type="number"
                value={values[i]}
                onChange={(e) => handleChangeQuantity(e.target.value, i)}
              />
              <a data-product="1" className="price">
                {item.price} USD{" "}
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
