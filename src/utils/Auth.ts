import Cookies from "js-cookie";

// set cookie
export const setCookie = (key, value) => {
  if (typeof window !== "undefined") {
    Cookies.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key) => {
  if (typeof window !== "undefined") {
    Cookies.remove(key, {
      expires: 1,
    });
  }
};
// get cookie
export const getCookie = (key) => {
  if (typeof window !== "undefined") {
    return Cookies.get(key);
  }
};
// localstorage
export const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const isAuth = () => {
  if (typeof window !== "undefined") {
    const cookieChecked = getCookie("jwt");
    if (cookieChecked) {
      if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt")!);
      } else {
        return false;
      }
    }
  }
};
