import axios from "axios";

export async function fetchData(url: string) {
    const api_key = import.meta.env.VITE_REACT_API_KEY;
    const { data } = await axios.get(
        import.meta.env.VITE_REACT_BASE_URL + "/" + url,
        {
            headers: {
                "Content-Type": "application/json",
                api_key,
            },
        }
    );

    return data.data.coins;
}
