import { Trash } from 'lucide-react';

import { useData } from '@provider';

const BtnDelete = () => {
  const { localData } = useData();

  if (!localData.editMode) return null;

  return (
    <button className='btn btn-ghost absolute top-4 left-4 bg-red-500 p-2 text-white'>
      <Trash />
    </button>
  );
};

export { BtnDelete };
