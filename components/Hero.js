import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content flex lg:flex-row flex-col">
        <div className="lg:w-3/5 w-full h-full flex justify-center">
          <div className="w-full h-full relative">
            <img
              src="/GlobalMarket.jpg"
              className="object-cover w-full h-full rounded-lg shadow-2xl"
              alt="Global Market"
            />
          </div>
        </div>
        <div className="lg:w-2/5 w-full flex flex-col justify-center p-4 lg:p-8">
          <h1 className="text-5xl font-bold mb-4 text-blue-600">Box Office News!</h1>
          <p className="py-6 text-left">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary text-lg font-bold text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
}
