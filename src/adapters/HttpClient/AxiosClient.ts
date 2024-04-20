import axios, { AxiosError, AxiosInstance, AxiosResponse, Method } from "axios";

interface RequestData {
  url: string;
  method: Method;
  body?: any;
}

interface ResponseData<T> {
  statusCode: number;
  body: T;
}

export interface HttpClient {
  request: <T>(data: RequestData) => Promise<ResponseData<T>>;
}

export class AxiosClientAdapter implements HttpClient {
  private httpClient: AxiosInstance;

  constructor(baseURL?: string, token?: string) {
    this.httpClient = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async request<T>(data: RequestData): Promise<ResponseData<T>> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await this.httpClient.request({
        url: data.url,
        method: data.method,
        data: data.body,
      });
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      throw new Error(_error?.request?.data?.message);
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
