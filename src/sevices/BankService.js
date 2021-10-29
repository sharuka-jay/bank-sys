import axios from "axios";

const BANK_API_BASE_URL ="http://localhost:8090/bank/getAll";
class bankService{
getBanks(){
    return axios.get(BANK_API_BASE_URL);
}
}

export default new bankService()