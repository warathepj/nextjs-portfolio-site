import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-2 gap-4 h-screen p-5">
      <div className="row-span-1 col-span-1 p-5 bg-light-blue relative">
      <div class="absolute top-1 left-1">
      <Link href="/" className="">
            <p className="text-xl mr-4 hover:bg-violet hover:text-white">
        Go to Home Page
            </p>
          </Link>
      </div>
        <h1 className="text-7xl mb-5 font-black text-center">Portfolio</h1>
        <p className="text-4xl">
          Here are some of the web apps that I’ve built and worked on:
        </p>
      </div>

      <div className="row-span-1 col-span-1 p-5 bg-pink">
        <h1 className="text-3xl mb-4 font-black">Quiz App</h1>
        <p className="text-2xl mb-4">
        A fun and interactive quiz app that allows users to create and take quizzes on various topics. Built with Vue.js, Tailwind CSS, and MongoDB.
        </p>
        <div className="flex flex-row">
          <Link href="/live-demo" className="">
            <p className="text-3xl mr-4 hover:bg-violet hover:text-white">
              Live Demo |
            </p>
          </Link>
          <Link href="/source-code" className="">
            <p className="text-3xl hover:bg-violet hover:text-white">
              Source Code
            </p>
          </Link>
        </div>
      </div>

      <div className="row-span-1 col-span-1 p-5 bg-pink">
        <h1 className="text-3xl mb-4 font-black">Todo App</h1>
        <p className="text-2xl mb-4">
          A simple and elegant todo app that allows users to manage their tasks
          and mark them as completed. Built with React, TypeScript, and
          Firebase.
        </p>
        <div className="flex flex-row">
          <Link href="/live-demo" className="">
            <p className="text-3xl mr-4 hover:bg-violet hover:text-white">
              Live Demo |
            </p>
          </Link>
          <Link href="/source-code" className="">
            <p className="text-3xl hover:bg-violet hover:text-white">
              Source Code
            </p>
          </Link>
        </div>
      </div>

      <div className="row-span-1 col-span-1 p-5 bg-light-blue">
      <h1 className="text-3xl mb-4 font-black">E-commerce App</h1>
        <p className="text-2xl mb-4">
        A fully functional e-commerce app that allows users to browse, buy, and sell products. Built with React, Redux, Node.js, Express, and Stripe.
        </p>
        <div className="flex flex-row">
          <Link href="/live-demo" className="">
            <p className="text-3xl mr-4 hover:bg-violet hover:text-white">
              Live Demo |
            </p>
          </Link>
          <Link href="/source-code" className="">
            <p className="text-3xl hover:bg-violet hover:text-white">
              Source Code
            </p>
          </Link>
        </div>
      </div>

      <div className="row-span-1 col-span-1 p-5 bg-light-blue">
        <h1 className="text-3xl mb-4 font-black">Blog App</h1>
        <p className="text-2xl mb-4">
          A personal blog app that allows users to create, read, update, and
          delete posts. Built with Next.js, Prisma, and PostgreSQL.{" "}
        </p>
        <div className="flex flex-row">
          <Link href="/live-demo" className="">
            <p className="text-3xl mr-4 hover:bg-violet hover:text-white">
              Live Demo |
            </p>
          </Link>
          <Link href="/source-code" className="">
            <p className="text-3xl hover:bg-violet hover:text-white">
              Source Code
            </p>
          </Link>
        </div>
      </div>

      <div className="row-span-1 col-span-1 p-5 bg-pink">
      <h1 className="text-3xl mb-4 font-black">Weather App</h1>
        <p className="text-2xl mb-4">
        A weather app that displays the current and forecast weather information for any location. Built with React, Bootstrap, and OpenWeather API.
        </p>
        <div className="flex flex-row">
          <Link href="/live-demo" className="">
            <p className="text-3xl mr-4 hover:bg-violet hover:text-white">
              Live Demo |
            </p>
          </Link>
          <Link href="/source-code" className="">
            <p className="text-3xl hover:bg-violet hover:text-white">
              Source Code
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
