function validateAddProduct(value,images, step) {
  let errors = {};

  if (step === 1) {
    if (!value.product_name) {
      errors.product_name = "Product name is required";
    }
    if (!value.Product_price) {
      errors.Product_price = "Product price is required";
    }
    if (!value.Product_qantity) {
      errors.Product_qantity = "Product quantity is required";
    }
    if (!value.Category) {
      errors.Category = "Product category is required";
    }
    if (!value.Sub_category) {
      errors.Sub_category = "sub category is required";
    }
    if (!value.Prd_category) {
      errors.Prd_category = "product category is required";
    }
  }

  if (step === 2) {
    if (!images || images.length !== 5) {
      errors.images =
        "You must upload exactly 5 images, including a hero image.";
    } else if (!value.heroImage) {
      errors.heroImage = "Hero image is required.";
    }
  }

  if (step === 3) {
    if (!value.Add_info || Object.entries(value.Add_info).length < 3) {
      errors.Add_info = "At least 3 additional information entries are required.";
    }
    
    
    if (!value.Description) {
      errors.Description = "description is required";
    }
  }

  return errors;
}

export default validateAddProduct;
