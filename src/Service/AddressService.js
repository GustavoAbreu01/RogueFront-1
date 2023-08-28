import axios from "axios";

const url = 'http://localhost:8082/address'

export const AddressService = {

    create: function (address) {
      console.log(address);
        axios.post(url, address).then((response) => {
          return response.data;
        });
      },
        




}

export default AddressService;