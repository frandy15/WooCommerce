import React, { useState, useEffect, createContext } from 'react'

const AppContext = createContext([
    {},
    () => {}
])

const AppProvider = (props) => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        if(process.browser) {
         let items = localStorage.getItem('cart');
         items = items && JSON.parse(items);
         setCart({product: '123'})
        }
    }, [])

    return (
    <AppContext.Provider value={[cart, setCart]}>
        {props.children}
    </AppContext.Provider>
    )
} 

export {AppContext, AppProvider}