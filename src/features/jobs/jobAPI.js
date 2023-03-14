import axios from "../../utils/axios";

export const getJobs = async () => {
    const response = await axios.get("/jobs");

    return response.data;
};

export const addTransaction = async (data) => {
    const response = await axios.post("/transactions", data);

    return response.data;
};

export const editTransaction = async (id, data) => {
    const response = await axios.put(`/transactions/${id}`, data);

    return response.data;
};

export const deleteJob = async (id) => {
    const response = axios.delete(`/jobs/${id}`);

    return response.data;
};
