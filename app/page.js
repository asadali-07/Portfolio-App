"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Typed from 'typed.js';
import { useEffect,useRef ,useState} from 'react';


function Home() {
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
  const el =useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["WebDeveloper","FrontEnd Developer","BackEnd Developer","FullStack Developer","MernStack Developer"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
   <div >
  {/* Hero Section */}
  <section className=" py-20">
    <div className="container mx-auto px-6 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/WhatsApp Image 2024-09-07 at 5.31.19 PM.jpeg"
            alt="Profile"
            className="w-full md:w-1/2 rounded-full border-purple-400 border-4"
            style={{ width: '300px', height: '300px' }}
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-purple-500">I am a <span  ref={el}></span></h1>
          <p className="text-xl mb-2">"Passionate Full-Stack Developer with expertise in front-end design, back-end development, and scalable web solutions I create impactful, efficient websites and applications that bring ideas to life Lets collaborate to turn your vision into reality</p>
          <h3 className="text-xl font-semibold mb-4 text-purple-500">SKILLS JAVA,PYTHON,HTML,CSS,JAVASCRIPT,EXPRESS JS,MONGODB,SQL,GIT,GITHUB,REACT JS,NEXT JS,BOOTSTRAP,TAILWIND,MATERIAL UI,SHAIDEN UI</h3>
          <div className="flex justify-center gap-6">
          <Button asChild>
       <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild>
            <Link href="/project">Project</Link>
          </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
      {/* Projects Section */}
      <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
      <h2 className="text-4xl text-purple-500 font-bold text-center mb-12">My Top 3 Projects</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className=" rounded-lg flex flex-col justify-center items-center shadow-lg p-6 w-96 transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:border hover:border-purple-400 dark:border border-gray-600">
          <img src="/Screenshot 2024-09-07 175435.png" alt="Project 1" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-2xl font-semibold text-purple-500 mt-4">Wanderlust</h3>
          <p className=" mt-2 mb-4 text-center">Developed a hotel listing platform with features for browsing,filtering,lisiting hotel,integrating user accounts,and customer review stytem for best user experience.<b>Using Express js and Ejs Templet and more npm pakages(Passport Multter couldinary)</b>.</p>
          <Button asChild>
       <Link href="https://wanderlust-gxsq.onrender.com/listings">View Projects</Link>
          </Button>
        </div>
        <div className=" rounded-lg flex flex-col justify-center items-center shadow-lg p-6 w-96 transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:border hover:border-purple-400 dark:border  border-gray-600">
          <img src="/Screenshot 2024-09-07 181205.png" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-2xl font-semibold text-purple-500 mt-4">Get Me Coffee</h3>
          <p className=" mt-2 mb-4">Created a platform where followers can financially support their favorite creators. Integrated user accounts, secure transactions contributions.<b>Using Express js and Next js and more npm pakages(Authjs Multter Couldinary Rozarpay api MongoDb)</b>.</p>
          <Button asChild>
       <Link href="/project">View Projects</Link>
          </Button>
        </div>
        <div className=" rounded-lg flex flex-col justify-center items-center shadow-lg p-6 w-96 transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:border hover:border-purple-400 dark:border  border-gray-600">
          <img src="/Screenshot 2024-09-07 180838.png" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-2xl font-semibold text-purple-500 mt-4">AsadBlog</h3>
          <p className=" mt-2 mb-4">Developed and managed a blog platform, AsadBlog,User can read blog and login ans sign up.<b>Using Next js and Tailwind and with functionlity of dark light mode npm pakages(fs,rehype-pretty-code,react-top-loader,typed.js shaiden UI)</b>.</p>
          <Button asChild>
       <Link href="/project">View Projects</Link>
          </Button>
        </div>
      </div>
    </div>
      </section>

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
      </>
  );
}

export default Home;

