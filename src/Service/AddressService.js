import axios from "axios";

const url = 'http://localhost:8082/address';
const userUrl = 'http://localhost:8082/user';

export const AddressService = {
  create: async (address) => {
    try {
      const response = await axios.post(url, address, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error("Erro ao criar endereço:", error);
      throw error;
    }
  },

  update: async (user, cookie) => {
    const id = user.id;
    try {
      const response = await axios.put(`${userUrl}/${id}`, user, {
        headers: {
          'Authorization': `Bearer ${cookie}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar endereço:", error);
      throw error;
    }
  },
};

export default AddressService;
