import { createContext, useState } from 'react';

import { initialDiaryData } from '@data';

const DiaryCtx = createContext(null);

const DiaryProvider = ({ children }) => {
  const [diaryArr, setDiaryArr] = useState(initialDiaryData);

  const removeArticle = (id) => {
    setDiaryArr((prev) => {
      const newArr = prev.filter((art) => art.uid !== id);

      return newArr;
    });
  };

  return <DiaryCtx value={{ diaryArr, removeArticle }}>{children}</DiaryCtx>;
};

export { DiaryCtx, DiaryProvider };
