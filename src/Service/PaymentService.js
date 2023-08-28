import axios from "axios";

const url = 'http://localhost:8082/creditCard'

export const PaymentService = {

    create: function (payment) {
        axios.post(url, payment).then((response) => {
          return response.data;
        });
      },
        




}

export default PaymentService;