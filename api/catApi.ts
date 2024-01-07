import axios from "axios";

import { AddCatForm, CatResponse, SearchResult } from "@/types/interfaces";
import {
    ADD_CAT_URL,
    FOUND_CATS_URL,
    LOST_CATS_URL,
    SEACH_BY_PASSPORT_ID_URL as SEARCH_BY_PASSPORT_ID_URL,
    SEACH_BY_MICROCHIP_URL as SEARCH_BY_MICROCHIP_URL,
    TOTAL_FOUND_URL,
    TOTAL_LOST_URL,
} from "@/utils/urls";
import { Token } from "@/types/types";

export const postCat = async (
    catData: AddCatForm,
    token: Token
): Promise<string> => {
    const response = await axios.post(ADD_CAT_URL, catData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const cat = response.data;
    const { id: catId } = cat;
    return catId;
};

export const getLostCats = async (): Promise<Array<CatResponse>> => {
    const response = await axios.get(LOST_CATS_URL);
    const cats: Array<CatResponse> = response.data;
    return cats;
};

export const getPaginatedLostCats = async (
    offset: number,
    limit: number
): Promise<Array<CatResponse>> => {
    const response = await axios.get(`${LOST_CATS_URL}/${offset}/${limit}`);
    const cats: Array<CatResponse> = response.data;
    return cats;
};

export const getFoundCats = async (): Promise<Array<CatResponse>> => {
    const response = await axios.get(FOUND_CATS_URL);
    const cats: Array<CatResponse> = response.data;
    return cats;
};

export const getPaginatedFoundCats = async (
    offset: number,
    limit: number
): Promise<Array<CatResponse>> => {
    const response = await axios.get(`${FOUND_CATS_URL}/${offset}/${limit}`);
    const cats: Array<CatResponse> = response.data;
    return cats;
};

export const getTotalFoundCats = async (): Promise<string> => {
    const response = await axios.get(TOTAL_FOUND_URL);
    const total = response.data;
    return total;
};

export const getTotalLostCats = async (): Promise<string> => {
    const response = await axios.get(TOTAL_LOST_URL);
    const total = response.data;
    return total;
};

export const searchCatByMicrochip = async (
    microchip: string
): Promise<SearchResult> => {
    const response = await axios.get(`${SEARCH_BY_MICROCHIP_URL}/${microchip}`);
    const { id, message } = response.data;
    return { id, message };
};

export const searchCatByPassportId = async (
    passportId: string
): Promise<SearchResult> => {
    const response = await axios.get(
        `${SEARCH_BY_PASSPORT_ID_URL}/${passportId}`
    );
    const { id, message } = response.data;
    return { id, message };
};
