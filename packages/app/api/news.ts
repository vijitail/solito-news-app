import { News } from "app/types/news";

const API_URL = `https://api.spaceflightnewsapi.net/v3/articles`

export const getLatestNews = async (): Promise<News[]> => {

    const req = new Request(`${API_URL}`);

    const res = await fetch(req);
    const data = await res.json();

    return data || [];

}

export const getNews = async (id: number): Promise<News> => {

    const req = new Request(`${API_URL}/${id}`);

    const res = await fetch(req);
    const data = await res.json();

    return data || [];

}