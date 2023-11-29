import axios from "axios";

const url = 'http://localhost:8082/user'

export const UserService = {

  create: async (user) => {
    axios.post(url, user).then((response) => {
      return response.data;
    });
  },

  findOne: async (id) => {
    try {
      const response = await axios.get('http://localhost:8082/user/' + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (login) => {
    try {
      const response = await axios.post("http://localhost:8082/login", login, { withCredentials: true });
      return response;
    } catch (error) {
      throw error;
    }
  },

  delete: function (id) {
    axios.delete(url + '/' + id).then((response) => {
      return response.data;
    });
  }

}