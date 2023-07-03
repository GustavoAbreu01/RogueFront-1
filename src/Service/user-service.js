import axios from "axios";

const url = 'http://localhost:8081'

export const UserService = {

    create: function(user) {
        console.log(user)
        axios.post(url + '/user/create', user).then((response) => {
            return response.data;
          });
      }

}