export const postLogin = async (data) => {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}

export const postUser = async (token) => {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return response.json();
}

export const putUser = (token, data) => {
  return fetch("http://localhost:3001/api/v1/user/profile", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())

}
