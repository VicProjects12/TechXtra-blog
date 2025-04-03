import React, { use, useEffect, useState } from 'react';
import Blogcard from '../components/Blogcard';
import { getBlogs } from '../api/api';



const Home = () => {


  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const allBlogs = await getBlogs();
      setBlogs(allBlogs.data);
    }
    fetchData();

  }, [])

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
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {blogs && blogs.map((x, i) => {
            return <Blogcard key={i} blogdata={x} />
          })}

        </div>
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {blogs && blogs.map(x => {
          return <Blogcard key={x.id || x._id} blogdata={x} />
        })}
      </div> */}

      </div>
    </div>);
}

      export default Home