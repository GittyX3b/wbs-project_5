import { createContext, useState } from 'react';

import { initialData } from '@data';

const DataCtx = createContext(null);

const DataProvider = ({ children }) => {
  const [localData, setLocalData] = useState(initialData);

  const toggleEditMode = () => {
    setLocalData((prev) => ({
      ...prev,
      editMode: !prev.editMode,
    }));
  };

  return <DataCtx value={{ localData, toggleEditMode }}>{children}</DataCtx>;
};

export { DataCtx, DataProvider };
