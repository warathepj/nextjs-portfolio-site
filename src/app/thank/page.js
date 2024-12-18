import Image from "next/image";
import Link from "next/link";

export default function NewPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="mt-8 mb-8">
        <p className="text-center text-gray-700 text-3xl">เลี้ยงกาแฟผู้พัฒนา</p>
      </section>

      <section className="mb-8">
        <Image
          src="https://warathepj.github.io/js-ai-gallery/public/image/promptpay-20.png"
          alt="Abstract image"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </section>

      <section className="mb-8">
        <Link href="https://nextjs-my-project.vercel.app/" target="_blank">
          <p className="text-3xl hover:bg-violet hover:text-white">
            View Another Project
          </p>
        </Link>
      </section>

      <section className="mb-8">
        <p className="text-center text-2xl font-bold">CorgiDev</p>
      </section>

      <section>
        <Image
          src="https://warathepj.github.io/js-ai-gallery/public/image/fri12.jpeg"
          alt="Another abstract image"
          width={300}
          height={300}
          className="rounded-lg mb-4"
        />
      </section>

      <Link href="/" className="">
        <p className="text-3xl hover:bg-violet hover:text-white">Home</p>
      </Link>
    </main>
  );
}
