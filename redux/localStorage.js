export const getItem = (key) => {
	if (typeof window !== "undefined") {
		return localStorage.getItem(key);
	}
};

export const setItem = (key, value) => {
	return localStorage.setItem(key, value);
};

export const removeItem = (key) => localStorage.removeItem(key);
