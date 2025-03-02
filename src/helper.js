import API_URL from "./apiConfig";
import axiosInstance from "./axiosInstance";

export async function handleScarpper(userData) {
    try {
        setTimeout(async () => {
            await axiosInstance.post(`${API_URL}scrape-jobs/`, userData);
            console.log("Scrape jobs route hit successfully!");
        }, 3000);
    } catch (scrapeError) {
        console.error("Error hitting scrape-jobs route:", scrapeError);
    }
}