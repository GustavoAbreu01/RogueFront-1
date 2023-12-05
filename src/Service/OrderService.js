import axios from "axios";

const url = 'http://localhost:8082/order';

export const OrderService = {
    
  create: async (address) => {
    try {
      const response = await axios.post(url, address, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error("Erro ao criar endereço:", error);
      throw error;
    }
  }

};

export default OrderService;
