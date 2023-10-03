function navigation(path) {
  window.location.pathname = path;
}
function navigationParam(url, param) {
  location.href = `${url}?${param}`;
}
export function getDataFormLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))||[];
}
export function setDataFormLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// hàm tạo id  auto cho data
function createIdauto(key, data) {
  const idElement = data[data.length - 1].id;
  const numberId = Number(idElement.slice(key.length + 1));
  const newId = key + "_" + (numberId + 1);
  return newId;
}
