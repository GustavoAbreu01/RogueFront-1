import axios from "axios";

const url = 'http://localhost:8082/product'

export const ProductService = {

    findOne: async (code) => {
        try {
            const response = await axios.get(url + "/" + code);

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    

    findAllProducts: async () => {
        try {
            const response = await axios.get(url + "/completo?size=" + 15 + "&page=" + 0);
            return response.data.content;
        } catch (error) {
            console.error(error);
        }
    },

    findAll: async () => {
        try {
            const response = await axios.get(url + "/resumo?size=" + 15 + "&page=" + 0);
            return response.data.content;
        } catch (error) {
            console.error(error);
        }
    },

    findCategory: async (size, page) => {
        try {
            const response = await axios.get(url + "/completo?size=" + size + "&page=" + page);
            return response.data.content;
        } catch (error) {
            console.error(error);
        }
    },

    findAccessed: async () => {
        try {
            const response = await axios.get(url + "/completo?size=" + 10 + "&page=" + 0);
            return response.data.content;
        } catch (error) {
            console.error(error);
        }
    },

    findHighlight: async () => {
        try {
            const response = await axios.get(url + "/completo?size=" + 10 + "&page=" + 0);
            return response.data.content;
        } catch (error) {
            console.error(error);
        }
    },

    findNew: async () => {
        try {
            const response = await axios.get(url + "/completo?size=" + 10 + "&page=" + 0);
            return response.data.content;
        } catch (error) {
            console.error(error);
        }
    },

    findSearched: async () => {
        try {
            const response = await axios.get(url + "/completo?size=" + 10 + "&page=" + 0);
            return response.data.content;
        } catch (error) {
            console.error(error);
        }
    },

    findSimiliar: async () => {
        try {
            const response = await axios.get(url + "/completo?size=" + 10 + "&page=" + 0);
            return response.data.content;
        } catch (error) {
            console.error(error);
        }
    }

};
export default ProductService;