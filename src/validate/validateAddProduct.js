function handleFirstFormValidate(value) {
  let errors = {};
  
  if (!value.sellerId) {
    errors.sellerId = "Seller Id is required";
  }
  if (!value.product_name) {
    errors.product_name = "product name is required";
  }
  if (!value.Product_price) {
    errors.product_name = "product price is required";
  }
  if (!value.Product_qantity) {
    errors.product_name = "product quantity is required";
  }
  if (!value.Category) {
    errors.Category = "product Category is required";
  }
  if (!value.Sub_category) {
    errors.Sub_category = "sub category is required";
  }
  if (!value.Prd_category) {
    errors.Prd_category = "product category is required";
  }
  if (!value.Description) {
    errors.Description = "description is required";
  } else if (value.Description.split(" ").length > 300) {
    errors.Description = "Max length is 300 words";
  }
  if (!value.Heroimage) {
    errors.Heroimage = "hero image is required";
  }
}

export { handleFirstFormValidate };
