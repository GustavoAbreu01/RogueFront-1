import axios from "axios";

export const SaveService = {

    AddProductInSave: async (cookie, saveId, productCode) => {
        const url = "http://localhost:8082/saves/add/" + saveId + "/" + productCode;
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

    getSave: async (saveId) => {
        const url = `http://localhost:8082/saves/` + saveId;
        try {
            const response = await axios.get(url, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    removeFromSaves: async (saveId, productCode) => {
        console.log(saveId, productCode);
        const url = "http://localhost:8082/saves/remove/" + saveId + "/" + productCode;
        try {
            const response = await axios.put(url, null, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

}
export default SaveService;

