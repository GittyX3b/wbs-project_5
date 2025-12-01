import { Trash } from 'lucide-react';

import { useAppControl, useDiary } from '@context';

const BtnDelete = ({ articleId }) => {
  const { config } = useAppControl();
  const { removeArticle } = useDiary();

  if (!config.editMode) return null;

  const handleClick = (e) => {
    e.preventDefault();
    removeArticle(e.currentTarget.dataset.article);
  };

  return (
    <button
      data-article={articleId}
      className='btn btn-ghost btn-circle absolute top-4 right-4 z-5 bg-white p-2 text-neutral-400 hover:bg-zinc-600 hover:text-white active:bg-zinc-800'
      onClick={handleClick}
    >
      <Trash />
    </button>
  );
};

export { BtnDelete };
