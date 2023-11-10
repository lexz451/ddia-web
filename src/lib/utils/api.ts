import qs from 'qs';

interface ApiResponse<T> {
    // Define the shape of the response data here
    data: T;
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
    next?: {
        revalidate?: number;
        tags: string[];
    }
}

async function fetchApi<T>(url: string, params: { [key: string]: any } = {}, options?: ApiOptions): Promise<ApiResponse<T>> {
    const queryParams = qs.stringify({
        ...params,
    }, {
        encodeValuesOnly: true,
    });
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api${url}${queryParams ? `?${queryParams}` : ''}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${process.env.API_TOKEN}`,
        ...(options?.headers || {}),
    }
    const { cache, next } = options || {};

    const nextOptions = {
        ...next,
        revalidate: next?.revalidate || 60,
    }

    // @ts-ignore
    const response = await fetch(apiUrl, { next: cache !== 'no-cache' ? nextOptions: {}, cache, headers });
    if (!response.ok) {
        throw new Error(`Failed to fetch API: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data as ApiResponse<T>;
}

export async function getApi<T>(url: string, params: { [key: string]: any } = {}, options?: ApiOptions): Promise<ApiResponse<T>> {
    return fetchApi<T>(url, params, { ...options, method: 'GET' });
}

export async function postApi<T>(url: string, body?: any, options?: ApiOptions): Promise<ApiResponse<T>> {
    return fetchApi(url, {}, { ...options, method: 'POST', body: JSON.stringify(body) });
}

export async function putApi<T>(url: string, body?: any, options?: ApiOptions): Promise<ApiResponse<T>> {
    return fetchApi(url, {}, { ...options, method: 'PUT', body: JSON.stringify(body) });
}

export async function deleteApi<T>(url: string, options?: ApiOptions): Promise<ApiResponse<T>> {
    return fetchApi(url, {}, { ...options, method: 'DELETE' });
}
