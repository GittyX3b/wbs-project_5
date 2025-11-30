// Step to usage:
// 1. copy and redefine this file
// 2. copy and redefine relatetd data/use*.jsx
// 3. import *Provider f.e. in main.jsx and wrap it around related componets
// 4. import use* in related components for access and usage
import { createContext, useState } from 'react';

const ExampleLocalCtx = createContext(null);

const ExampleLocalProvider = ({ children }) => {
    // define data set
    const [localData, setLocalData] = useState({
        sanity: 'localdata data - ok',
        eins: '111',
        zwei: { drei: '333', vier: '444' },
    });

    // declare setter functions
    const setEins = (eins) => setLocalData((c) => ({ ...c, eins }));

    const setDrei = (drei) =>
        setLocalData((c) => ({
            ...c,
            zwei: { ...c.zwei, drei },
        }));

    return <ExampleLocalCtx value={{ localData, setEins, setDrei }}>{children}</ExampleLocalCtx>;
};

export { ExampleLocalCtx, ExampleLocalProvider };
