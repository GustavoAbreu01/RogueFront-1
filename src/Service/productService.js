import axios from "axios";

const url = 'http://localhost:8081/product'

export const ProductService = {

    create: function(product) {
        console.log(product)
        axios.post(url, product).then((response) => {
            return response.data;
          });
    },

    findAll: function() {
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

      findOne: function(id){
        axios.get(url + '/' + id).then((response) => {
            return response.data;
          });
    },
    
    delete: function(id){
        axios.delete(url + '/'+ id).then((response) => {
            return response.data;
          });
    },

    update: function(id, product){
        axios.patch(url + '/' + product + '/' + id).then((response) => {
            return response.data
        })
    }

}