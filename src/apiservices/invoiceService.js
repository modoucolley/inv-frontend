import { toast } from "react-toastify";
import axiosConfig from "./axios-config";

export const getInvoices = async (customerId) => {
  const data = await axiosConfig
    .get(`/store/invoices/`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });

  return data;
};


export const getInvoiceCount = async () => {
  const data = await axiosConfig
    .get(`/store/invoicecount/`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });

  return data;
};


export const addInvoice = async (productData) => {
  const data = await axiosConfig
    .post(`/store/invoices/`, productData)
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


export const deleteInvoice = async (id) => {
  const data = await axiosConfig
    .delete(`/store/invoices/${id}`)
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



export const editInvoice = async (id, data) => {
  const data1 = await axiosConfig
    .put(`/store/invoices/${id}`, data)
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

  return data1;
};

