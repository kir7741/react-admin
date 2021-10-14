import React from "react";

export const ProgressContext = React.createContext({
    processVal: 0,
    setProcessVal: (v: number) => {},
});

export default ProgressContext;