import React, { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [ groupedMenuItems, setGroupedMenuItems ] = useState({});

    return (
        <MenuContext.Provider value = {{groupedMenuItems, setGroupedMenuItems}}>
            {children}
        </MenuContext.Provider>
    )

}

export const useMenu = () => useContext(MenuContext);
