import axios from "axios";

const url = 'http://localhost:8082/product'

export const ProductService = {

    create: function(categories) {
        console.log(categories)
        axios.post(url, categories).then((response) => {
            return response.data;
          });
    },

<<<<<<< Updated upstream
    findAll: function() {
      console.log("alo")
        return new Promise((resolve, reject) => {
          axios.get(url)
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
              reject(error);
            });
        });
      },
=======
    findAll: async () => {
      const randomPageSize = 30;
      try {
          const response = await axios.get(url + "/all?size=" + randomPageSize + "&page=" + 0);
          return response.data;
      } catch (error) {
          console.error(error);
      }
  }
>>>>>>> Stashed changes

};
export default ProductService;