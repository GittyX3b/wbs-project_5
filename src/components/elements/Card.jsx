import { BtnDelete } from '@elements';

function truncateWords(text, maxWords = 20) {
  if (!text) return '';
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '…';
}

const Card = ({ uid, slug, title, imageUrl, text }) => {
  return (
    <div className='card bg-base-100 grow shadow-sm' uid={uid} slug={slug}>
      <figure>
        <img src={imageUrl} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{truncateWords(text, 10)}</p>
      </div>

      <BtnDelete />
    </div>
  );
};

export { Card };
