const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageKey = key => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (err) {
    console.error(err);
  }
};

export const getLocalFavorites = () => getLocalStorageKey("favoriteJobs");
export const setLocalFavorites = jobs =>
  setLocalStorageKey("favoriteJobs", jobs);
