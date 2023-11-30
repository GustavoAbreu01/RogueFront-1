import axios from "axios";


export const CartService = {

    AddProductInCart: async (cookie, cartId, productCode, quantity) => {
        const url = `http://localhost:8082/cart/add/${cartId}/${productCode}?quantity=${quantity}`;
        try {
            const response = await axios.put(url, null,
                {
                    headers: {
                        'Authorization': `Bearer ${cookie}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    withCredentials: true
                });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    GetCart: async function (cartId) {
        const url = `http://localhost:8082/cart/${cartId}`;
        try {
            const response = await axios.get(url, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    DeleteProductInCart: async (cartId, productCode) => {
        const url = "http://localhost:8082/cart/remove/all/" + cartId;
        try {
            const response = await axios.delete(url, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    MinunProductInCart: async (cartId, productCode) => {
        const url = "http://localhost:8082/cart/remove/" + cartId + "/" + productCode;
        try {
            const response = await axios.put(url, null, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }



}
export default CartService;