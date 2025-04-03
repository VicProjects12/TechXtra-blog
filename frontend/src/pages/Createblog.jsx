import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { uploadedFile, createBlog } from '../api/api';

const CreateBlog = () => {
    const [value, setValue] = useState('');


    const blankBlog = {
        "title": "",
        "image": "",
        "post": "<p><br></p>",
        "Service": "",
        "category": ""
    }

    const [newblog, setNewblog] = useState(blankBlog);

    const handleUpload = async (event) => {
        let result = await uploadedFile(event.target.files[0]);
        if (result.path) {
            setNewblog({ ...newblog, image: result.path });
        }
    }

    const handleSubmit = async (e) => {
        let createdBlog = await createBlog(newblog);
        if (createdBlog.desc == 1) {
            setNewblog(blankBlog);
            alert('Blog created successfully !');
        }
        console.log(result);
    }

    const menu = [
        { text: 'Home', path: '/' },
        { text: 'About', path: '/' },
        { text: 'Blog', path: '/' },
        { text: 'Services', path: '/' },
        { text: 'Contact', path: '/' }

    ]
    return (
        <div className='flex w-full items-center justify-center'>
            <div className="bg-slate-200 w-[60%] p-5 rounded-xl">
                <small>{JSON.stringify(newblog)}</small>
                <h1 className='text-2xl mb-5'>Create Blog Post</h1>
                <div className="flex flex-col">
                    <label htmlFor="" className='ml-1 text-gray-500'>Title</label>
                    <input type="text" value={newblog.title} onChange={(e) => setNewblog({ ...newblog, title: e.target.value })} className='h-10 border border-gray-300 rounded my-2 p-2' />
                    <label htmlFor="" className='ml-1 text-gray-500'>Category</label>
                    <select value={newblog.category} onChange={(e) => setNewblog({ ...newblog, category: e.target.value })} name="" id="" className='h-10 border border-gray-300 rounded my-2 p-2'>
                        <option value="default disabled">Select Category</option>

                        {/* {
                            optionsArray.map((option, index) => (
                                <option key={index} value={option.value}>{option.text}</option>
                            ))
                        } */}



                        
                         {
                            menu.map(x => {
                                return <option value={x.text}>{x.text}</option>
                            })
                        } 
                    </select>
                    <label htmlFor="" className='ml-1 text-gray-500'>Image</label>
                    <input onChange={(e) => handleUpload(e)} type="file" className=' border-gray-300 rounded my-2 p-2' />
                    <label htmlFor="" className='ml-1 text-gray-500'>Post</label>
                    <ReactQuill className='bg-white rounded mb-2 mt-2 editingarea' theme="snow" value={newblog.post} onChange={(e) => setNewblog({ ...newblog, post: e })} />

                    <hr />
                    <button onClick={() => handleSubmit()} className='bg-slate-500 text-white h-8 w-[100px] mt-2 rounded'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog;