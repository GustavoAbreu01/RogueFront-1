import axios from "axios";

export const OrderService = {

  create: async (order, id, cookie) => {
    try {
      const response = await axios.post(`http://localhost:8082/order/` + id, order, {
        headers: {
          'Authorization': `Bearer ${cookie}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAll: async (cookie) => {
    try {
      const response = await axios.get(`http://localhost:8082/order`, {
        headers: {
          'Authorization': `Bearer ${cookie}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

};

export default OrderService;
