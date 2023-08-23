import axios from "axios";

const url = 'http://localhost:8082/user'

export const UserService = {

  create: function (user) {
    console.log(user)
    axios.post(url, user).then((response) => {
      return response.data;
    });
  },

  findAll: function () {
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

  findOne: function (id) {
    axios.get(url + '/' + id).then((response) => {
      return response.data;
    });
  },
  login: function (email, password) {
    const apiUrl = `http://localhost:8082/user/${email}/${password}`;
    return axios.get(apiUrl)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
},

  delete: function(id){
    axios.delete(url + '/'+ id).then((response) => {
        return response.data;
      });
}

}