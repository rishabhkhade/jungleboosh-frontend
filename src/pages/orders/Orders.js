import React from "react";
import "./Orders.scss";
import Card from "../../component/card/Card";
import Header_label from "../../component/header_label/Header_label";
import { LiaRupeeSignSolid } from "react-icons/lia";

function Orders() {
  const ordersData = [
    {
      key: "1",
      name: "Alice Doe",
      age: 30,
      product: "Tablet",
      amount: "$500",
      deliveredDate: "2024-03-09",
      address: "Paris No. 3 Street",
    },
    {
      key: "2",
      name: "Bob Smith",
      age: 28,
      product: "Monitor",
      amount: "$200",
      deliveredDate: "2024-03-05",
      address: "Berlin No. 7 Lane",
    },
  ];


  return (
    <>
      <Card>
        <Header_label />
        <div className="order-parent parent">
          <div className="order-cont cont">
            <div className="order-wrapper">
              <div className="order-left">
                <div className="order-left-img">
                  <img src="" alt="" />
                </div>
                <div className="order-left-product-details">
                  <h4>Product Name</h4>
                  <div className="price-quan-amnt">
                    <div class="price"><h5>Price :</h5><span><LiaRupeeSignSolid />800.00</span>
                    </div>
                    <div class="quantity">  <h5>Quantity :</h5><span>1</span></div>
                    <div class="total-amount"><h5>Total Amount :</h5><span><LiaRupeeSignSolid />800.00</span>
                    </div>
                  </div>
                </div>

              </div>
              <div class="order-right">

                <div class="order-customer">
                  <div class="customer-name">
                    <h5>Customer Name :</h5><span>Xyz abc pqr</span>
                  </div>
                  <div class="deleivery-address">
                    <h5>Delivery Address :</h5><span>23-mandir Pune , Maharashtra</span>
                  </div>
                  <div class="shipping-cancelled-btn">
                    <div class="btn">Shipped</div>
                    <div class="btn">Cancelled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Orders;
