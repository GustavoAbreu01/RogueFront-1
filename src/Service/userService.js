import axios from "axios";

const url = 'http://localhost:8081/user'

export const UserService = {

  create: function (user) {
    console.log(user)
    axios.post(url + '/create', user).then((response) => {
      return response.data;
    });
  },

  getAll: function () {
    return new Promise((resolve, reject) => {
      axios.get(url + '/getAll')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getOne: function (id) {
    axios.post(url + '/getOne/', id).then((response) => {
      return response.data;
    });
  },
  edit: function (id, user) {
    axios.put(url + '/edit/' + id, user).then((response) => {
      return response.data
    })
  },
  delete: function(id){
    axios.post(url + '/delete/'+ id).then((response) => {
        return response.data;
      });
}

}