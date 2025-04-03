import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {


    const menu = [
        {text:'Home', path:'/'},
        {text:'About', path:'/'},
        {text:'Blog', path:'/'},
        {text:'Services', path:'/'},
        {text:'Contact', path:'/'}
    ]
  return (
    <div>
        {/* <Header></Header> */}
        <div className="border-b">
            <div className="px-5 py-5 flex justify-between">
                <Link to='/'>
                <span className='font-extrabold text-2xl'>TechXtra</span>
                </Link>
                <div className="flex">
                    <ul className='flex'>
                        {
                            
                                menu.map((x, index) => {
                                    return <li key={index}><Link className='p-2 items-start justify-center flex' to={x.path}><span>{x.text}</span></Link></li>
                                })
                            
                            // menu.map((x) => {
                            //     return <li><Link className='p-2 items-start justify-center flex'><span>{x.text}</span></Link></li>
                            // })
                        }
                    </ul>
                    <button className='bg-slate-500 text-white px-2 py-1 rounded'>
                        <Link to='/create'>+ New Post</Link>
                    </button>  
                </div>
            </div>
        </div>
        {/* <Body></Body> */}
        <div className="flex mx-auto px-5 md:px-20">
            <div className="mt-5 mb-5 min-h-[500px] w-full">
                <Outlet></Outlet>
            </div>
        </div>
        {/* <Footer></Footer> */}
        <div className="flex bg-slate-800">
            <div className="flex mx-auto px-20 py-20 items-center justify-center">
                <h3 className='text-gray-400'>TechXtra</h3>
            </div>
        </div>
    </div>
  )
}

export default Layout