import axios from 'axios';
import React, { useState } from 'react'





const AddressRegister = () => {


const [formData, setFormData] = useState({ name: '', email: '', comment: '' });


const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
};



//onsubmit  suntion
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/send`, formData);     
      alert("Comment added successfully");
    } catch (err) {
      alert("upadate failed");
     
    }
};



  return (
    <div className='Sign-section w-300'>
        {/* <div className="container">
            <div className="row">
                <div className="col-12 text-center mt-3">
                    <h2>Update Delivery Address</h2>
                </div>
                 <div className="col-12 mt-5 pb-5" >
                  <form   onSubmit={handleSubmit} > 
                    <input type="text" name='country' onChange={handleChange} placeholder='Country/Region' required />
                    <input type="name" name='name'   onChange={handleChange} placeholder='Full name'  required />
                    <input type="number" name='number'  onChange={handleChange}  placeholder='mobile number'  required />
                 <input type="text" name='address1'   onChange={handleChange} placeholder='Flat,House no.,Building , Company, Apartment'  required />
                    <input type="text" name='address2'  onChange={handleChange}  placeholder='Area, Street, Sector, Village'  required />
                    <input type="text" name='address3'  onChange={handleChange}  placeholder='Landmark'  required />
                    <input type="text" name='pincode'   onChange={handleChange} placeholder='pincode'  required />
                    <input type="text" name='city'   onChange={handleChange} placeholder='Town/City'  required />
                    <input type="text" name='state'  onChange={handleChange}  placeholder='State'  required />       
                       <button type='submit' id='submit' className='mt-3 '> Use this Address </button>
                    </form>
                </div>
            </div>  
        </div> */}

        <section class="w-full rounded-lg border-2 border-black p-4 my-8 mx-auto max-w-xl">
    <h3 class="font-os text-lg font-bold text-black inline"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M240-400h480v-66.67H240V-400Zm0-126.67h480v-66.66H240v66.66Zm0-126.66h480V-720H240v66.67ZM880-80 720-240H146.67q-27 0-46.84-19.83Q80-279.67 80-306.67v-506.66q0-27 19.83-46.84Q119.67-880 146.67-880h666.66q27 0 46.84 19.83Q880-840.33 880-813.33V-80ZM146.67-306.67h602l64.66 68.34v-575H146.67v506.66Zm0 0v-506.66 506.66Z" className='inline'/></svg>Comments</h3>

    <form class="mt-4" onSubmit={handleSubmit}>
        <div class="mb-4">
            <label for="name" class="block text-purple-800 font-medium">Name</label>
            <input type="text" id="name" onChange={handleChange}  name="name" class="border-2 border-black text-black p-2 w-full rounded" required/>
        </div>
        <div class="mb-4">
            <label for="name" class="block text-purple-800 font-medium">Email</label>
            <input type="email" id="name" name="email" onChange={handleChange} class="border-2 border-black text-black p-2 w-full rounded" required/>
        </div>

        <div class="mb-4">
            <label for="comment" class="block text-purple-800 font-medium">Comment</label>
            <textarea id="comment" onChange={handleChange}  name="comment" class="border-2 border-black text-black p-2 w-full rounded" required></textarea>
        </div>

        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-3  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Purple to blue
</span>
</button>

    </form>
</section>
    </div>
  )
}

export default AddressRegister