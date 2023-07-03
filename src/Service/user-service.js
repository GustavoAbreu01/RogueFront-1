import axios from "axios";

const url = 'http://localhost:8081'

export const UserService = {

    create: function(user) {
        console.log(user)
        axios.post(url + '/user/create', user).then((response) => {
            return response.data;
          });
    },

    getAll: function() {
        return new Promise((resolve, reject) => {
          axios.get(url + '/user/getAll')
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
              reject(error);
            });
        });
      },

    getOne: function(id){
        axios.post(url + '/user/getOne/', id).then((response) => {
            return response.data;
          });
    }

}