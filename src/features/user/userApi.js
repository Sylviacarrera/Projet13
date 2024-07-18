export const postLogin = data => {
    return fetch("http://localhost:3001/api/v1/user/login", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
}

export const postUser = token => {
    return fetch("http://localhost:3001/api/v1/user/profile", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.json())
}