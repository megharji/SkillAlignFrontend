const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginApi = async (payload) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
     redirect: "follow",
  };

  const response = await fetch(API_BASE_URL + "auth_routers/login", requestOptions);

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || data.detail || "Unable to login user");
  }

  return data;
};
