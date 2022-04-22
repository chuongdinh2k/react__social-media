import { axiosClient } from ".";

const mockapi_url = "https://60c0c446b8d3670017555cb3.mockapi.io/api/v1";
interface IPagination {
    page?: number;
    limit?: number;
}
export const postApi = {
    getListPost: (values: IPagination) => {
        const url = `${mockapi_url}/posts?page=${values?.page}&limit=${values?.limit}`;
        return axiosClient.get(url);
    },
};
