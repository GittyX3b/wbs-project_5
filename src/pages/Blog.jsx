import { useData } from '@provider';

const Blog = () => {
  const { localData } = useData();

  console.log('Blog: ', localData);

  return (
    <div id='Blog'>
      <title>Blog</title>
      <div>...contents here in green container...</div>
    </div>
  );
};

export { Blog };
