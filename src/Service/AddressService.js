import axios from "axios";

const url = 'http://localhost:8082/user'

export const AddressService = {

    create: function (address) {
        axios.post(url, address).then((response) => {
          return response.data;
        });
      },
        




}

export default AddressService;