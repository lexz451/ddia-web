import qs from 'qs';

interface ApiResponse {
    // Define the shape of the response data here
    data: any[] | any;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        }
    };
}

interface ApiOptions extends RequestInit {
    cache?: 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached';
}

async function fetchApi(url: string, params: { [key: string]: any } = {}, options?: ApiOptions): Promise<ApiResponse> {
    const queryParams = qs.stringify({
        ...params,
    }, {
        encodeValuesOnly: true,
    });
    const apiUrl = `${process.env.API_URL}/api${url}${queryParams ? `?${queryParams}` : ''}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${process.env.API_TOKEN}`,
        ...(options?.headers || {}),
    }
    const { cache, ...fetchOptions } = options || {};
    const response = await fetch(apiUrl, { ...fetchOptions, cache, headers });
    if (!response.ok) {
        throw new Error(`Failed to fetch API: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

export async function getApi(url: string, params: { [key: string]: any } = {}, options?: ApiOptions): Promise<ApiResponse> {
    return fetchApi(url, params, { ...options, method: 'GET' });
}

export async function postApi(url: string, body?: any, options?: ApiOptions): Promise<ApiResponse> {
    return fetchApi(url, {}, { ...options, method: 'POST', body: JSON.stringify(body) });
}

export async function putApi(url: string, body?: any, options?: ApiOptions): Promise<ApiResponse> {
    return fetchApi(url, {}, { ...options, method: 'PUT', body: JSON.stringify(body) });
}

export async function deleteApi(url: string, options?: ApiOptions): Promise<ApiResponse> {
    return fetchApi(url, {}, { ...options, method: 'DELETE' });
}
