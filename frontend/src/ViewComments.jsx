import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ViewComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getdata');
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  });

  return (
    <div className='w-300 ' >
        <section className="w-300 rounded-lg border-2 border-black p-4 my-8  mx-auto ">
            <h3 className="font-os text-lg font-bold text-black">Comments</h3>
            <ul className="mt-4">
            {comments.map((comment, index) => (
                
                <li key={index} className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M240-400h480v-66.67H240V-400Zm0-126.67h480v-66.66H240v66.66Zm0-126.66h480V-720H240v66.67ZM880-80 720-240H146.67q-27 0-46.84-19.83Q80-279.67 80-306.67v-506.66q0-27 19.83-46.84Q119.67-880 146.67-880h666.66q27 0 46.84 19.83Q880-840.33 880-813.33V-80ZM146.67-306.67h602l64.66 68.34v-575H146.67v506.66Zm0 0v-506.66 506.66Z"/></svg>
                    <div className="ms-6">
                             <p className="font-semibold text-black">{comment.name}</p>
                <p className="text-gray-600">{comment.email}</p>
                <p className="mt-2 text-gray-700">{comment.comment}</p>
                    </div>
            
                <hr className='border-gray-300 my-4' />
                </li>
            ))}
            </ul>
        </section>
    </div>
  )
}

export default ViewComments