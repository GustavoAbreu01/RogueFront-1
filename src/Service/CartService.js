import axios from "axios";


export const CartService = {

    AddProductInCart: async function (cartId, productCode, quantity) {
        const url = `http://localhost:8082/cart/add/${cartId}/${productCode}?quantity=${quantity}`;
        try {
            const response = await axios.put(url);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    GetCart: async function (cartId) {
        const url = `http://localhost:8082/cart/${cartId}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    DeleteProductInCart: async function (cartId, productCode) {
        const url = `http://localhost:8082/cart/remove/${cartId}/${productCode}`;
        try {
            const response = await axios.delete(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }



}
export default CartService;