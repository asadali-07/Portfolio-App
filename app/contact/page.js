"use client"
import React from 'react'
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const Contact = () => {
  const  [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to server
    console.log(form);
    setform({name: '', email: '', message: ''});
  }
  return (
    <section id="contact" className=" py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8 text-purple-500 text-center">Get In Touch</h2>
      <form className="max-w-lg mx-auto p-8 rounded-lg shadow-lg  w-96 transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:border hover:border-purple-400 dark:border border-gray-600">
          <div className="mb-4">
            <label htmlFor="name"  className="block  text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              onChange={handleChange}
              id="name"
              name="name"
              value={form.name}
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block  text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block  text-sm font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={form.message}
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <div  onClick={handleSubmit} className="mb-4">
            <Button >Send Message</Button>
          </div>
        </form>
    </div>
  </section>
  )
}

export default Contact