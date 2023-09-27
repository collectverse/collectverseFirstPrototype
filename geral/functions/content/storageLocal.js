// coloca informaçõa no localstorage
function storageCreate(nameStorage, item) {
    localStorage.setItem(nameStorage, JSON.stringify(item));
}
export { storageCreate }