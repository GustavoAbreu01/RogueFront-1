import axios from "axios";

const url = 'http://localhost:8082/address'
const url2 = 'http://localhost:8082/user'

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

  update: async (user) => {
    try {
      const response = await axios.put('http://localhost:8082/user/' + user.id, user, null, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar endereço:", error);
      throw error;
    }
  },




}

export default AddressService;