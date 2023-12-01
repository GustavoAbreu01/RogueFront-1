import axios from "axios";

const url = 'http://localhost:8082/creditCard'

export const PaymentService = {

  create: async (payment) => {
    try {
      const response = await axios.post(url, payment, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error("Erro ao criar pagamento:", error);
      throw error;
    }
  },





}

export default PaymentService;