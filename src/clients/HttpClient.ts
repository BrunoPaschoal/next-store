import { AxiosClientAdapter } from "@/adapters/HttpClient/AxiosClient";

export const HttpClient = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const axiosClient = new AxiosClientAdapter(baseURL);

  return {
    axiosClient,
  };
};
