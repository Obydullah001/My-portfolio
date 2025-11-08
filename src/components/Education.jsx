import React from 'react';

const Education = () => {
    return (
<>
        <h1 className='text-3xl text-center my-10 text-purple-700'>Education & Courses</h1>
       <div className=''>
         <div className='my-10 border flex flex-col md:flex-row gap-8 items-center justify-between p-6 rounded-lg lg:w-[1100px] mx-auto'> 
           <div className='w-full md:w-xl text-center md:text-left'>
             <h1 className='text-2xl '>LL.B.</h1>
           <p className=''> I have Graduated LL.B. From Department of Law Jagannath University. After Graduating I found The Art of creating. The New things through Coding   </p>
           </div>
           <div>
            <img className='w-sm rounded-2xl' src="https://tds-images.thedailystar.net/sites/default/files/styles/very_big_201/public/media/api_images/2025/10/20/JnU%20anniversary.jpg" alt="image of Jagannath University" />
           </div>
        </div>
        <div className='border p-6 rounded-lg lg:w-[1100px] mx-auto'>
            <h1 className='text-2xl '>Web Development Course</h1>
              <p className=''> I have Completed A Web Development Course. <br /> Here I have learned HTML, CSS, JavaScript, React, Node js, Express js, MongoDB and other related technologies. </p>
        </div>
       </div>
</>
    );
};

export default Education;