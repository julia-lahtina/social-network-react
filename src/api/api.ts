import axios from "axios";

// api
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "9778ccc8-038a-4d81-9130-86ef29c12736",
  },
});

export const api = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get<any>(`/users?page=${currentPage}&count=${pageSize}`);
  },
  getProfile(userId: string) {
    return profileAPI.getProfile(userId);
  },
  follow(userId: number) {
    return instance.post(`/follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance.delete(`/follow/${userId}`);
  },
  me() {
    return instance.get("/auth/me");
  },
  login(email: string, password: string, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return instance.delete("auth/login");
  },
};

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get<any>(`/profile/${userId}`);
  },
  getUserStatus(userId: string) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateUserStatus(status: string) {
    return instance.put("/profile/status", { status: status });
  },
};

//types
type UsersPropsResponseType = {
  [key: string]: UsersType[];
};
type UsersType = {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};
