import axios from "axios";

import { AddCatForm, CatResponse } from "@/types/interfaces";
import { ADD_CAT_URL, CATS_URL } from "@/utils/urls";
import { Token } from "@/types/types";

export const postCat = async (
    catData: AddCatForm,
    token: Token
): Promise<Array<string>> => {
    const respons = await axios.post(ADD_CAT_URL, catData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const cat = respons.data;
    const { id: catId, status} = cat
    return [catId, status];
};

export const getAllCats = async (): Promise<Array<CatResponse>> => {
    const respons = await axios.get(CATS_URL)
    const cats: Array<CatResponse> = respons.data
    return cats
}