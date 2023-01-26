import { toast } from "react-toastify";
import axiosConfig from "./axios-config";

export const getOrders = async (customerId) => {
  const data = await axiosConfig
    .get(`/store/orders/`) 
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });

  return data;
};


export const getOrderCount = async () => {
  const data = await axiosConfig
    .get(`/store/ordercount/`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });

  return data;
};


export const addOrder = async (productData) => {
  const data = await axiosConfig
    .post(`/store/orders/`, productData)
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


export const deleteOrder = async (id) => {
  const data = await axiosConfig
    .delete(`/store/orders/${id}`)
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


const orderService = {
  getOrders,
  addOrder,
  deleteOrder
};

export default orderService;
