import axios from "axios";

import { AddCatForm, CatResponse } from "@/types/interfaces";
import { ADD_CAT_URL, FOUND_CATS_URL, LOST_CATS_URL } from "@/utils/urls";
import { Token } from "@/types/types";

export const postCat = async (
    catData: AddCatForm,
    token: Token
): Promise<string> => {
    const respons = await axios.post(ADD_CAT_URL, catData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const cat = respons.data;
    const { id: catId } = cat
    return catId;
};

export const getLostCats = async (): Promise<Array<CatResponse>> => {
    const respons = await axios.get(LOST_CATS_URL)
    const cats: Array<CatResponse> = respons.data
    return cats
}

export const getFoundCats = async (): Promise<Array<CatResponse>> => {
    const respons = await axios.get(FOUND_CATS_URL)
    const cats: Array<CatResponse> = respons.data
    return cats
}
