import {createContext} from "react";

export const SavedXPsContext = createContext({
    savedXPs: [],
    addXP() {},
    clearXP() {}
});

export const ActiveXPsContext = createContext({
    xp: 0,
    changeXP() {}
});