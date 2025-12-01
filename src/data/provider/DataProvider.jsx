import { createContext, useState } from 'react';

import { initialData } from '@data';

const DataCtx = createContext(null);

const DataProvider = ({ children }) => {
  const [localData, setLocalData] = useState(initialData);

  // #TODO:

  return <DataCtx value={{ localData, setLocalData }}>{children}</DataCtx>;
};

export { DataCtx, DataProvider };
