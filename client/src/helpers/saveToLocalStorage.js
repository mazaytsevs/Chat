export function saveToLocalStorage(key, state) {
  try {
    localStorage.setItem(`${key}`, JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
}

export function deleteFromLocalStorage() {
  try {
    localStorage.clear();
  } catch (e) {
    console.error(e);
  }
}
