import React from 'react'

const Blog = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className="flex flex-col w-[60%] overflow-hidden">
            <h1 className='mt-1 text-3xl font-extrabold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit?</h1>

            <div className="flex mt-4 mb-4">
                <small>Jan 21, 2024</small>
            </div>
            <img className='rounded-lg' src="https://picsum.photos/id/204/300/200" alt="" />
            <div>
                <h2 className='text-2xl mt-2 mb-2'>
                    What is Lorem Ipsum?
                </h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                <h2 className='text-2xl mt-2 mb-2'>Why do we use it?</h2>
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
                comes from a line in section 1.10.32.
               
            </div>
        </div>
    </div>
  )
}

export default Blog