import { useDiary } from '@context';
import { Card } from '@elements';

const Blog = () => {
  const { diaryArr } = useDiary();

  return (
    <div id='Blog'>
      <title>Blog</title>
      <div className='wrap grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
        {diaryArr.map((item) => {
          return (
            <Card
              key={item.uid}
              uid={item.uid}
              slug={item.slug}
              title={item.title}
              imageUrl={item.images[0]}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Blog };
