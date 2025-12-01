import { useParams } from 'react-router-dom';

import { useDiary } from '@context';

const Article = () => {
  const { diaryArr } = useDiary();
  const { slug } = useParams();
  const article = diaryArr.find((ele) => ele.slug === slug);

  return (
    <div id='Article' className='rounded-2xl'>
      <title>{article.title}</title>
      <div className='w-full rounded bg-white'>
        <div className='carousel carousel-center rounded-box h-[500px] space-x-1 bg-white'>
          {article.images.map((x, i) => {
            return (
              <div className='carousel-item'>
                <img src={x} key={i} className='rounded-box' />
              </div>
            );
          })}
        </div>

        <div className='p-20 pb-30'>
          <h1 className='py-10 text-2xl font-bold'>{article.title}</h1>
          <div className='card-text'>
            {article.text.split('\n\n').map((para, idx) => (
              <p key={idx} className='mb-2'>
                {para.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Article };
