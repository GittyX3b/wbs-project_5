import { use } from 'react';

import { DiaryCtx } from '@context/DiaryProvider';

export const useDiary = () => use(DiaryCtx);
