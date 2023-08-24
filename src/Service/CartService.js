import axios from "axios";

const url = "http://localhost:8082/cart";

export const CartService = {

    AddProductInCart: async (cartId, productCode) => {
        const url = `http://localhost:8082/cart/add?cartId=${cartId}&productCode=${productCode}`;
        try {
            const response = await axios.put(url);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },



}