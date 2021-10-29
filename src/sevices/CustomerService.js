import axios from "axios";

const CUS_API_BASE_URL ="http://localhost:8090/person/getAll";
class customerService{
getCustomer(){
    return axios.get(CUS_API_BASE_URL);
}
}

export default new customerService()