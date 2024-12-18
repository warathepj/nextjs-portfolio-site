import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-5 gap-4 h-screen p-5">
      <div className="row-span-2 col-span-2 p-5 bg-light-blue">
        <h1 className="text-7xl">John Doe</h1>
        <h1 className="text-7xl mb-5">Web App Developer</h1>
        <p className="text-4xl">
          Hi, I’m John Doe, a web app developer with over 10 years of experience
          in creating and maintaining web applications for various clients and
          industries. I specialize in using modern technologies such as React,
          Node.js, MongoDB, and AWS to build fast, scalable, and user-friendly
          web apps. I’m passionate about solving problems, learning new skills,
          and delivering high-quality products.
        </p>
      </div>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-[405px]"
        ></img>
      </div>
      <div className="bg-pink p-4 text-sm">
        <h4 className="mb-3">
          If you’re looking for a web app developer who can help you turn your
          ideas into reality, you’ve come to the right place. I can help you
          with:
        </h4>
        <p>
          - Designing and developing web apps from scratch or based on existing
          templates
        </p>
        <p>- Adding new features and functionalities to your web apps</p>
        <p>
          - Fixing bugs and improving the performance and security of your web
          apps
        </p>
        <p>- Deploying and hosting your web apps on the cloud or on-premises</p>
        <p>- Providing ongoing support and maintenance for your web apps</p>
      </div>

      <div className="bg-light-blue p-4 flex flex-col items-center justify-center">
        <h2 className="mb-3 text-6xl">Portfolio</h2>
        <Link href="/portfolio" className="">
          <h3 className="text-4xl hover:bg-violet hover:text-white">
            click me
          </h3>
        </Link>
      </div>
      <div className="col-span-2  bg-light-blue p-4">
        <p className="text-xl">
          To see some of the web apps that I’ve built and worked on, please
          check out my portfolio below. You can also read some of the
          testimonials from my previous and current clients to see what they
          have to say about my work.
        </p>
        <p className="text-xl">
          If you’re interested in working with me, please feel free to contact
          me anytime. I’d love to hear from you and discuss your project details
          and requirements. You can reach me by email, phone, or social media.
          You can also fill out the contact form on this website and I’ll get
          back to you as soon as possible.
        </p>
        <p className="text-xl">
          Thank you for visiting my portfolio and I hope to hear from you soon!
        </p>
      </div>
      <div className="bg-pink p-4 flex flex-col items-center justify-center">
        <h2 className="mb-3 text-5xl">Testimonials</h2>
        <Link href="/testimonials" className="">
          <h3 className="text-4xl hover:bg-violet hover:text-white">
            click me
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default page;