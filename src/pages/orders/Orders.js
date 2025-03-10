import React from "react";
import "./Orders.scss";
import Card from "../../component/card/Card";
import Header_label from "../../component/header_label/Header_label";
import Tables from "../../component/tables/Tables";

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

  const ordersColumns = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
      searchable: true,
    },
    { title: "Age", dataIndex: "age", key: "age", searchable: true },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      searchable: true,
    },
    { title: "Amount", dataIndex: "amount", key: "amount", searchable: false },
    {
      title: "Delivered Date",
      dataIndex: "deliveredDate",
      key: "deliveredDate",
      searchable: false,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      searchable: true,
    },
  ];

  return (
    <>
      <Card>
        <Header_label />
        <Tables data={ordersData} columns={ordersColumns} />
      </Card>
    </>
  );
}

export default Orders;
