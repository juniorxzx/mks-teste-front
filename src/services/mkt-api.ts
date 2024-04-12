import axios from "axios";

const MKT_URL = {
    defaultRoute: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1'
}

export const api = axios.create({
    baseURL: MKT_URL.defaultRoute,

})


export const GetProducts = async () => {
    try {
        const response = await api.get(
            `${MKT_URL.defaultRoute}/products?page=1&rows=8&sortBy=id&orderBy=DESC`
        );

        if (response.status == 200) {
            return response.data.products;
        }
    } catch (error) {
        console.error('Erro para exibir os produtos:', error);
        throw error;
    }
};




