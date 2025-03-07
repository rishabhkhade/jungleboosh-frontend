import React, { useState } from 'react'
import "./Products.scss"
import Card from '../../component/card/Card'
import Header_label from '../../component/header_label/Header_label'
import img from "../../assets/products/rice.jpg";

function Products() {

    const products = new Array(68).fill({
        name: "rice",
        price: "₹1,000.00",
        image: img,
        addDate: "8-2-2025",
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <>
            <Card>
                <Header_label />
                <div class="parent product-parent">
                    <div class="cont product-cont">
                        <div className="products-grid">
                            {currentItems.map((product, index) => (
                                <div key={index} className="product-card">
                                    <img src={product.image} alt={product.name} />
                                    <h4>{product.name}</h4>
                                    <div class="date-price">
                                        <p className="date"><span>{product.addDate}</span></p>
                                        <p className="price">{product.price}</p>
                                    </div>
                                    <div className="view-detail">
                                        <a href="#">view detail</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pagination">
                            <button
                                className={currentPage === 1 ? "disabled" : ""}
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                &laquo;
                            </button>
                            {[1, 2, "...", 67, 68].map((page, index) => (
                                <button
                                    key={index}
                                    className={currentPage === page ? "active" : ""}
                                    onClick={() => typeof page === "number" && paginate(page)}
                                    disabled={typeof page !== "number"}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                className={currentPage === 68 ? "disabled" : ""}
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === 68}
                            >
                                &raquo;
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Products
