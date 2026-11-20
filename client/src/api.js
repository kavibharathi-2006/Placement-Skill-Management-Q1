
const BASE_URL = "https://placement-skill-q1-backend.onrender.com/api";

async function request(url, options = {}) {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return { data };
}

const API = {
  get: (url) => request(url),

  post: (url, data) =>
    request(url, {
      method: "POST",
      body: JSON.stringify(data)
    }),

  put: (url, data) =>
    request(url, {
      method: "PUT",
      body: JSON.stringify(data)
    }),

  delete: (url) =>
    request(url, {
      method: "DELETE"
    })
};

export default API;
