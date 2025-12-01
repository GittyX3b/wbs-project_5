import { Loader } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppControl } from '@context';
import { BtnDelete } from '@elements';

function truncateWords(text, maxWords = 20) {
  if (!text) return '';
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '…';
}

const Card = ({ uid, slug, title, imageUrl, text }) => {
  const { config } = useAppControl();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <NavLink to={!config.editMode ? slug : ''}>
      <div className='relative'>
        {!imageLoaded && (
          <div className='flex h-70 animate-pulse items-center justify-center rounded bg-gray-200 shadow'>
            <Loader className='animate-spin' />
          </div>
        )}

        {imageLoaded && (
          <div
            className='card bg-base-100 flex h-full flex-col overflow-hidden rounded shadow-sm'
            data-uid={uid}
            data-slug={slug}
          >
            <div className='h-50 w-full shrink-0'>
              <img
                src={imageUrl + '?w=500'}
                alt={title}
                className='h-full w-full object-cover'
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className='card-body flex flex-1 flex-col p-4'>
              <h2 className='card-title mb-2 text-lg font-bold'>{title}</h2>
              <p className='flex-1 text-sm text-gray-700'>{truncateWords(text, 20)}</p>

              <div className='mt-4'>
                <BtnDelete articleId={uid} />
              </div>
            </div>
          </div>
        )}

        {/* Hidden preloader image */}
        <img src={imageUrl} alt='' className='hidden' onLoad={() => setImageLoaded(true)} />
      </div>
    </NavLink>
  );
};

export { Card };
