import axios from "axios";

const url = 'http://localhost:8082/product/'

export const ProductService = {

    findOne: async (code) => {
        try {
            const response = await axios.get(url + code);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    findAll: async () => {
      try {
          const response = await axios.get(url + "all?size=" + 10 + "&page=" + 0);
          return response.data.content;
      } catch (error) {
          console.error(error);
      }
  }

};
export default ProductService;