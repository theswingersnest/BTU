const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://167.71.255.240:8000";

const buildUrl = (endpoint, params = {}) => {
  let cleanEndpoint = endpoint.endsWith("/") ? endpoint : `${endpoint}/`; 
  const url = new URL(`${API_BASE_URL}${cleanEndpoint}`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value);
    }
  });

  return url.toString();
};


const getAuthHeaders = () => {
  const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getApi = async (endpoint, params = {}, customHeaders = {}) => {
  const url = buildUrl(endpoint, params);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
      ...customHeaders,
    },
  });

  const json = await res.json();

  if (!res.ok) {
    const error = new Error(json?.detail || `GET ${url} failed with status ${res.status}`);
    error.status = res.status;
    if(error.status === 401){
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("role")
      window.location.href = "/login"
    }
    error.detail = json?.detail;
    throw error;
  }

  return json;
};


export const postApi = async (endpoint, data = {}, isFormData = false, customHeaders = {}) => {
  const body = isFormData ? data : JSON.stringify(data);

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...getAuthHeaders(),
      ...customHeaders,
    },
    body,
  });

  if (!res.ok) throw new Error(`POST ${endpoint} failed with status ${res.status}`);
  return res.json();
};

export const putApi = async (endpoint, data = {}, isFormData = false, customHeaders = {}) => {
  const body = isFormData ? data : JSON.stringify(data);

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "PUT",
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...getAuthHeaders(),
      ...customHeaders,
    },
    body,
  });

  if (!res.ok) throw new Error(`PUT ${endpoint} failed with status ${res.status}`);
  return res.json();
};








// Usage of APi's
// await getApi("/users");
// const data = await getApi("/leaderboard", {
//     limit: 10,
//     period: "monthly",
//     offset: 0,
//   });
// await postApi("/login", { email, password });
// await putApi("/profile", formData, true);
