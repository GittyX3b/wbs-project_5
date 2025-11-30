import { use } from 'react';

import { ExampleLocalCtx } from '@provider/ExampleLocalProvider';

export const useExampleLocal = () => use(ExampleLocalCtx);
