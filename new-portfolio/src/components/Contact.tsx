import React, { FC } from 'react';

const Contact: FC = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <form 
        onSubmit={() => {/* form submission logic */}}
        className="w-full max-w-lg p-4 bg-white shadow-md rounded flex flex-col gap-6 mx-auto"
      >
        <h1 className="text-xl font-light">Contact Us</h1>
        <input 
          className="p-5 bg-gray-200 rounded focus:outline-none"
          placeholder="Name" 
          name="name" 
        />
        <input 
          className="p-5 bg-gray-200 rounded focus:outline-none"
          placeholder="Email" 
          name="email" 
        />
        <textarea
          className="p-5 bg-gray-200 rounded focus:outline-none"
          placeholder="Write your message"
          name="message"
          rows={10}
        />
        <button 
          type="submit" 
          className="bg-pink-600 text-white font-bold cursor-pointer rounded py-3"
        >
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact;
