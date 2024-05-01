import productService from "../services/product.service";

let getAllProducts = async (req, res) => {
  try {
    let products = await productService.getAllProducts();
    if (products && products.length > 0) {
      res.status(200).json({
        data: products,
        errcode: 0,
        message: "Get all product successful",
      });
    } else {
      res.status(200).json({
        data: [],
        errcode: 0,
        message: "No product found",
      });
    }
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Internal server error",
      error: e,
    });
  }
};

let postProduct = async (req, res) => {
  try {
    let data = req.body;
    if(!data){
      return res.status(400).json({
        errcode: 1,
        message: "No product data",
      });
    }
    let product = await productService.createProduct(data);
    res.status(201).json({
      data: product,
      errcode: 0,
      message: "Create product successful",
    });
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Create product fail",
      error: e.message,
    });
  }
};

let putProduct = async (req, res) => {
  try {
    let data = req.body;
    let id = req.params.id;
    let product = await productService.updateProduct(data, id);
    if (product === 0) {
      return res.status(404).json({
        message: "Product not found",
        errcode: 1,
      });
    }
    res.status(200).json({
      errcode: 0,
      message: "Update product successful",
    });
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Update product fail",
      error: e.message,
    });
  }
};

let deleteProductById = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await productService.deleteProductById(id);
    if (product === 0) {
      return res.status(404).json({
        message: "Product not found",
        errcode: 1,
      });
    }
    res.status(200).json({
      errcode: 0,
      message: "Delete product successful",
    });
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Delete product fail",
      error: e.message,
    });
  }
};

let getProductById = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        errcode: 1,
      });
    }
    res.status(200).json({
      data: product,
      errcode: 0,
      message: "Get product successful",
    });
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Get product fail",
      error: e.message,
    });
  }
}

let fetchListProducts = async (req, res) => {
  try {
    let offset = req.params.offset;
    console.log(offset);
    let products = await productService.getListProducts(offset);
    if (products && products.length > 0) {
      res.status(200).json({
        data: products,
        errcode: 0,
        message: "Get all product successful",
      });
    } else {
      res.status(200).json({
        data: [],
        errcode: 0,
        message: "No product found",
      });
    }
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Internal server error",
      error: e.message,
    });
  }
}

let getSearchPoducts =  async (req, res) => {
  try {
    let name = req.query.name;
    // console.log(name);
    let products = await productService.getSearchProducts(name);
    if (products && products.length > 0) {
      res.status(200).json({
        data: products,
        errcode: 0,
        message: "Get all product successful",
      });
    } else {
      res.status(200).json({
        data: [],
        errcode: 0,
        message: "No product found",
      });
    }
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Internal server error",
      error: e.message,
    });
  }

}

let getNameAndImageById = async (req,res) => {
  let id = req.params.id;
  console.log('check id',id);
  try {
      let result = await productService.getNameAndImageById(id);
      return res.status(200).json({
          message: 'Get product by id success',
          data: result,
          errcode: 0
      })
  } catch (e) {
      return res.status(500).json({
          message: "Get product fail",
          error:e.message,
          errcode:1
      })
  }

}

let getCountProducts = async (req, res) => {
  try {
    let count = await productService.countProducts();
    if (count) {
      res.status(200).json({
        data: count,
        errcode: 0,
        message: "Get all product successful",
      });
    } else {
      res.status(200).json({
        data: 0,
        errcode: 0,
        message: "No product found",
      });
    }
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Internal server error",
      error: e.message,
    });
  }
};

let getSearchProductByCategory = async (req, res) => {
  try {
    let category = req.params.id;
    let products = await productService.findProductsByCategory(category);
    if (products && products.length > 0) {
      res.status(200).json({
        data: products,
        errcode: 0,
        message: "Get all product successful",
      });
    } else {
      res.status(200).json({
        data: [],
        errcode: 0,
        message: "No product found",
      });
    }
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Internal server error",
      error: e.message,
    });
  }
}

let getSearchProductByPrice = async (req, res) => {
  try {
    console.log(req.body);
    let priceMax = req.body.max * 1000000; // convert to vnd
    let priceMin = req.body.min * 1000000; // convert to vnd
    let products = await productService.findByPrice(priceMin, priceMax);
    if (products && products.length > 0) {
      res.status(200).json({
        data: products,
        errcode: 0,
        message: "Get all product successful",
      });
    } else {
      res.status(200).json({
        data: [],
        errcode: 0,
        message: "No product found",
      });
    }
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Internal server error",
      error: e.message,
    });
  }

}

let getSearchProductsByCategoryAndPrice = async (req, res) => {
  try {
    console.log(req.body);
    let category = req.body.categoryid;
    let priceMax = req.body.max * 1000000; // convert to vnd
    let priceMin = req.body.min * 1000000; // convert to vnd
    let products = await productService.findSearchProductsByCategoryAndPrice(category, priceMin, priceMax);
    if (products && products.length > 0) {
      res.status(200).json({
        data: products,
        errcode: 0,
        message: "Get all product successful",
      });
    } else {
      res.status(200).json({
        data: [],
        errcode: 0,
        message: "No product found",
      });
    }
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Internal server error",
      error: e.message,
    });
  }

}

export default {
  getAllProducts,
  postProduct,
  putProduct,
  deleteProductById,
  getProductById,
  fetchListProducts,
  getSearchPoducts,
  getNameAndImageById,
  getCountProducts,
  getSearchProductByCategory,
  getSearchProductByPrice,
  getSearchProductsByCategoryAndPrice
};