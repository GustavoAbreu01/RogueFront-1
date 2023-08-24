import axios from "axios";

const url = 'http://localhost:8082/saves'

export const SaveService = {

    addProductToSaves: async function (savesId, productCode) {
        try {
            const response = await axios.put(`${url}/add/${savesId}/${productCode}`);
            return response.data;
        } catch (error) {
            throw error;
        }
      }

}