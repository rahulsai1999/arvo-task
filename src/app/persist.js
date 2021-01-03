const save = (key, value) => {
  localStorage.setItem(key, value);
};

const get = (key) => {
  return localStorage.getItem(key);
};

const clear = (key) => {
  localStorage.removeItem(key);
};

const getStore = () => {
  const p1 = get("player1");
  const p2 = get("player2");
  const s1 = get("score1");
  const s2 = get("score2");
  return { p1, p2, s1, s2 };
};

const clearStore = () => {
  clear("player1");
  clear("player2");
  clear("score1");
  clear("score2");
};

export { save, get, clear, getStore, clearStore };
