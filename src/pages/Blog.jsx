import { Card } from '@elements';
import { useData } from '@provider';

const Blog = () => {
  const { localData } = useData();

  return (
    <div id='Blog'>
      <title>Blog</title>
      <div className='wrap grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {localData.diary.map((item) => {
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
