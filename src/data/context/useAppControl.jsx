import { use } from 'react';

import { AppControlCtx } from '@context/AppControlProvider';

export const useAppControl = () => use(AppControlCtx);
