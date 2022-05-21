import axios from 'axios';
import {GetPeopleResp} from "../types";

const $API = axios.create({
    baseURL: 'https://swapi.dev/api'
})

export class API {

    static async getPeople (page: string = '', search: string = ''):Promise<GetPeopleResp> {
        const res = await $API.get('/people', {
            params: {page, search}
        });
        return res.data;
    }

}