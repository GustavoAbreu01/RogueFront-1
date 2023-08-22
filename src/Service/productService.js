import axios from "axios";

const url = 'http://localhost:8082/product/'

export const ProductService = {

    findOne: async (videoId) => {
        try {
            const response = await axios.get(url + videoId);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    findAll: async () => {
      const randomPageSize = 20;
      try {
          const response = await axios.get(url + "all?size=" + randomPageSize + "&page=" + 0);
          return response.data;
      } catch (error) {
          console.error(error);
      }
  }

};
export default ProductService;