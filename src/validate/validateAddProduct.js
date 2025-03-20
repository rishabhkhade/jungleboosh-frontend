function validateAddProduct(value, images, heroImage, step) {
  let errors = {};

  if (step === 1) {
    if (!value.product_name) {
      errors.product_name = "Product name is required";
    }
    if (!value.Product_price) {
      errors.Product_price = "Product price is required";
    }

    if (!value.prd_unit) {
      errors.prd_unit = "Product Unit is required";
    }
    if (!value.stock) {
      errors.stock = "Product Quantity is required";
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
    const filteredImages = images.filter(img => img !== heroImage); // Remove heroImage from array
    const totalImages = filteredImages.length + (heroImage ? 1 : 0);
    
    if (totalImages !== 5) {
      errors.images = `You must upload exactly 5 images, including a hero image. You currently have ${totalImages}.`;
    }
    
    
        
  }

  if (step === 3) {
    if (!value.Add_info || Object.keys(value.Add_info).length < 3) {
      errors.Add_info = "At least 3 additional information entries are required.";
    }
    

    if (!value.Description) {
      errors.Description = "description is required";
    }
  }

  return errors;
}

export default validateAddProduct;
