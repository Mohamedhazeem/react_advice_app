
type searchParams = {
    search: string
}

export function  randomAdviceFetch(url: string) {
    return fetch(`${url}`).then(response => response.json());
}
export function  searchAdviceFetch(url: string, search: string){    
    return fetch(`${url}${search}`).then(response => response.json());
}
/*,{
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}*/