import axios from "axios";

export const SaveService = {

      AddProductInSave: async function (saveId, productCode) {
        console.log(saveId, productCode);
        const url = `http://localhost:8082/saves/add/${saveId}/${productCode}`;
        try {
            const response = await axios.put(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    getSave: async function (saveId) {
        const url = `http://localhost:8082/saves/` + saveId;
        try {
            const response = await axios.get(url, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    
    removeFromSaves: async function (saveId, productCode) {
        console.log(saveId, productCode);
        const url = `http://localhost:8082/saves/add/${saveId}/${productCode}`;
        try {
            const response = await axios.put(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

}
export default SaveService;

