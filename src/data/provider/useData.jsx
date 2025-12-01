import { use } from 'react';

import { DataCtx } from '@provider/DataProvider';

export const useData = () => use(DataCtx);
