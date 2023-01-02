import axiosConfig from "./axios-config";

export const getCategories = async (customerId) => {
  const data = await axiosConfig
    .get(`/api/categories/customers/${customerId}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

export const addCategory = async (productData) => {
  const data = await axiosConfig
    .post(`/api/categories/`, productData)
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


export const editCategoriee = async (categorieId, categorieData) => {
  const data = await axiosConfig
    .put(`/api/categories/${categorieId}`, categorieData)
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



export const deleteCategory= async (id) => {
  const data = await axiosConfig
    .delete(`/api/categories/${id}`)
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

const categoryService = {
  getCategories,
  addCategory,
  deleteCategory
};

export default categoryService;
