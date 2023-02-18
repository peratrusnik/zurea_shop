import axios from "axios";

export const GetAllProducts = () => axios.get('/product/get-all')

export const SearchProducts = (searchParam) => axios.post('/product/search', {searchParam:searchParam})