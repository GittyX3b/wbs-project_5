import { createContext, useState } from 'react';

import { initialAppConfig } from '@data';

const AppControlCtx = createContext(null);

const AppControlProvider = ({ children }) => {
  const [config, setConfig] = useState(initialAppConfig);

  const toggleEditMode = () => {
    setConfig((prev) => ({ ...prev, editMode: !prev.editMode }));
  };

  return <AppControlCtx value={{ config, toggleEditMode }}>{children}</AppControlCtx>;
};

export { AppControlCtx, AppControlProvider };
