import React, { useEffect, useState } from "react";
import "./Orders.scss";
import Card from "../../component/card/Card";
import Header_label from "../../component/header_label/Header_label";
import { LiaRupeeSignSolid } from "react-icons/lia";
import pro_img1 from "../../assets/products/rice.jpg"
import { sellerApi } from "../../utils/Api";

function Orders() {

  const [orderProduct, setOrderProduct] = useState([]);


  //get order by id
  const getOrderById = async () => {
    try {
      const response = await sellerApi.get("api/order/getOrdersBySeller?sellerId=6")
      setOrderProduct(response.data.data);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getOrderById()
  }, [])

  return (
    <>
      <Card>
        <Header_label />
        <div className="order-parent parent">
          <div className="order-cont cont">
            {
              orderProduct.length > 0 ? (
                orderProduct.map((item, index) => (
                  <div className="order-wrapper" key={index}>
                    <div className="order-left">
                      <div className="order-left-img">
                        <img src={pro_img1} alt="" />
                      </div>
                      <div className="order-left-product-details">
                        <h4>{item.pro_name}</h4>
                        <div className="price-quan-amnt">
                          <div class="price"><h5>Price :</h5><span><LiaRupeeSignSolid />{item.price}</span>
                          </div>
                          <div class="quantity"> <h5>Quantity :</h5><span>{item.quantity}</span></div>
                          <div class="total-amount"><h5>Total Amount :</h5><span><LiaRupeeSignSolid />{item.totalAmt}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="order-right">

                      <div class="order-customer">
                        <div class="customer-name">
                          <h5>Customer Name :</h5><span>{item.buyerName}</span>
                        </div>
                        <div class="deleivery-address">
                          <h5>Delivery Address :</h5><span>{item.address}</span>
                        </div>
                        <div class="shipping-cancelled-btn">
                          <div class="btn">Shipped</div>
                          <div class="btn">Cancelled</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No orders found</p>
              )
            }
          </div>
        </div>
      </Card>
    </>
  );
}

export default Orders;
