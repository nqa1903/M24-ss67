import FoodCart from "./components/FoodCart";
import IFood from "./components/IFood";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="row">
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title">List Products</h1>
                </div>
                <div className="panel-body" id="list-product">
                  <IFood></IFood>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h1 className="panel-title">Your Cart</h1>
                </div>
                <div className="panel-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{width:"4%"}}>STT</th>
                        <th>Name</th>
                        <th style={{width:"15%"}}>Price</th>
                        <th style={{width:"4%"}}>Quantity</th>
                        <th style={{width:"25%"}}>Action</th>
                      </tr>
                    </thead>
                    <tbody id="my-cart-body">
                      <FoodCart></FoodCart>
                    </tbody>
                    <tfoot id="my-cart-footer">
                      <tr>
                        <td colSpan={4}>
                          There are <b>2</b> items in your shopping cart.
                        </td>
                        <td colSpan={2} className="total-price text-left">
                          630 USD
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div
                className="alert alert-success"
                role="alert"
                id="mnotification"
              >
                Add to cart successfully
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
