const getStorageItem = (storageKey) => {
    const value = window.localStorage.getItem(storageKey)
    return value !== null ? JSON.parse(value) : null
  }
  
  const setStorageItem = (key, val) => {
    const value = JSON.stringify(val)
    window.localStorage.setItem(key, value)
  }
  
  const removeStorageItem = (key) => {
    window.localStorage.removeItem(key)
  }
  
  export {
    getStorageItem,
    setStorageItem,
    removeStorageItem
  }