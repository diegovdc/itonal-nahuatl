/* globals DOMException */
export const storageAvailable = (type) => {
  let storage = window[type]
  try {
    let x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22
      // Firefox
      || e.code === 1014
      // test name field too, because code might not be present
      // everything except Firefox
      || e.name === 'QuotaExceededError'
      // Firefox
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage.length !== 0
  }
}

export const storeOnSession = (key, item) => {
  if (storageAvailable('sessionStorage')) {
    window.sessionStorage.setItem(key, item)
    return true
  }
  return false
}

export const getOnSession = (key, default_) => {
  if (storageAvailable('sessionStorage')) {
    return window.sessionStorage.getItem(key)
  }
  return default_
}

export const removeFromSession = (key) => {
  if (storageAvailable('sessionStorage')) {
    window.sessionStorage.removeItem(key)
    return true
  }
  return false
}


export const storeOnLocal = (key, item) => {
  if (storageAvailable('localStorage')) {
    window.localStorage.setItem(key, item)
    return true
  }
  return false
}

export const getOnLocal = (key, default_) => {
  if (storageAvailable('localStorage')) {
    return window.localStorage.getItem(key)
  }
  return default_
}

export const removeFromLocal = (key) => {
  if (storageAvailable('localStorage')) {
    window.localStorage.removeItem(key)
    return true
  }
  return false
}
