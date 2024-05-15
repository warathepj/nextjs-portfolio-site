import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-1 gap-4 h-screen p-5">
      <div className="row-span-1 col-span-1 px-52 py-5 bg-light-blue relative">
      <div class="absolute top-1 left-1">
      <Link href="/" className="">
            <p className="text-xl mr-4 hover:bg-violet hover:text-white">
        Go to Home Page
            </p>
          </Link>
      </div>
        <h1 className="text-7xl mb-5 font-black text-center">Testimonials</h1>
        <p className="text-xl">
        “John is a great web app developer who delivered our project on time and on budget. He was very responsive, professional, and easy to work with. He understood our requirements and provided us with a high-quality web app that met our expectations. We highly recommend him and would definitely hire him again for future projects.” 
        </p>
        <p className="text-xl">
        Jane Smith, CEO of ABC Inc.
        </p>
      </div>

      

      <div className="row-span-1 col-span-1 px-52 py-12 bg-pink">
        <p className="text-xl">
        “John is a very skilled and talented web app developer who helped us create a stunning and user-friendly web app for our online store. He was very communicative, flexible, and attentive to our needs and feedback. He also provided us with valuable suggestions and insights on how to improve our web app and increase our sales. We are very happy with his work and would love to work with him again.”
        </p>
        <p className="text-xl">
        Mike Jones, Owner of XYZ Ltd.
        </p>
      </div>

      <div className="row-span-1 col-span-1 px-52 py-12 bg-light-blue">
        <p className="text-xl">
        “John is an amazing web app developer who went above and beyond to make our web app a success. He was very creative, innovative, and passionate about our project. He not only built a beautiful and functional web app for us, but also taught us how to use and maintain it. He was always available, friendly, and supportive throughout the project. He is a true professional and a pleasure to work with.” 
        </p>
        <p className="text-xl">
        Lisa Brown, Manager of LMN Co.
        </p>
        
      </div>
    </div>
  );
};

export default Testimonials;
