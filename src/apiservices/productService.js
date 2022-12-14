import axiosConfig from "./axios-config";


const user = JSON.parse(localStorage.getItem("user"));
console.log("user.email")
console.log(user?.id)


export const getProducts = async (customerId) => {
  const data = await axiosConfig
    .get(`/api/products/customers/${customerId}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

export const getProductCount = async () => {
  const data = await axiosConfig
    .get(`/api/productcount/`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });

  return data;
};

export const addProduct = async (productData) => {
  const data = await axiosConfig
    .post(`/api/products/`, productData)
    .then((response) => {
      console.log("Api Response")
      console.log(response)
      return response;
    })
    .catch((err) => {
      console.log("Api Error")
      console.log(err.response.data.result);
      return err.response;
    });

  return data;
};


export const deleteProduct = async (id) => {
  const data = await axiosConfig
    .delete(`/api/products/${id}`)
    .then((response) => {
      console.log("Api Response")
      console.log(response)
      return response;
    })
    .catch((err) => {
      console.log("Api Error")
      console.log(err.response.data.result);
      return err.response;
    });

  return data;
};

export const editProduct = async (productData) => {
  const data = await axiosConfig
    .put(`/api/products/${productData.id}`, productData)
    .then((response) => {
      console.log("Api Response")
      console.log(response)
      return response;
    })
    .catch((err) => {
      console.log("Api Error")
      console.log(err.response.data.result);
      return err.response;
    });

  return data;
}

const productService = {
  getProducts,
  getProductCount,
  addProduct,
  deleteProduct
};

export default productService;
