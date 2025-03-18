import React, { useEffect } from 'react';
import Blogcard from '../components/Blogcard';
import { getBlogs } from '../api/api';


const Home = () => {

  const [blogs, setBlogs] = useState(null);


  useEffect(() => {
    const allBlogs = getBlogs();
    setBlogs(allBlogs.data);
  }, []);

  const data = [
    {
      title: 'Is it worth it to buy a new phone in 2025?',
      image: 'https://picsum.photos/id/208/300/200',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      author: 'John Doe',
      date: '2023-01-01',
      Comments: 10
    },
    {
      title: 'Is it worth it to buy a new phone in 2025?',
      image: 'https://picsum.photos/id/206/300/200',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      author: 'John Doe',
      date: '2023-01-01',
      Comments: 10
    },
    {
      title: 'Is it worth it to buy a new phone in 2025?',
      image: 'https://picsum.photos/id/204/300/200',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      author: 'John Doe',
      date: '2023-01-01',
      Comments: 10
    },
    {
      title: 'Is it worth it to buy a new phone in 2025?',
      image: 'https://picsum.photos/id/203/300/200',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      author: 'John Doe',
      date: '2023-01-01',
      Comments: 10
    },
    {
      title: 'Is it worth it to buy a new phone in 2025?',
      image: 'https://picsum.photos/id/202/300/200',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      author: 'John Doe',
      date: '2023-01-01',
      Comments: 10
    },
    {
      title: 'Is it worth it to buy a new phone in 2025?',
      image: 'https://picsum.photos/id/201/300/200',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      author: 'John Doe',
      date: '2023-01-01',
      Comments: 10
    },
]
  return (
    <div>
      <p>{JSON.stringify(blogs)}</p>
       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map(x => {
          return <Blogcard blogdata={x} />
        })}
       </div>
    </div>
  )
}

export default Home