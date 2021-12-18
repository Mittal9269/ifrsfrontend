export const NotificationObject = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

export const axiosHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    withCredentials: true,
    credentials: 'include'
}

export const CookieStoreObject = {
    path: '/', 
    expires: new Date(Date.now() + 48 * 360000)
}

export const fecthHeader  = {
    Accept: 'application/json', 
    'Content-Type': 'application/json'
}