import Link from "next/link";
export default function TopBanner() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/main.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
      
      <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-center  z-20">
        <h1 className="text-6xl font-bold mb-4 text-amber-400">Trade Smart, Trade Global</h1>
        <h2 className="text-4xl mb-4 text-white">Where Technology Meets Trading</h2>
        <h3 className="text-3xl mb-8 text-white">Automate Your Success</h3>
        <div>
          <button className="btn-wide px-8 py-4 text-lg font-bold bg-blue-600 text-white rounded-xl">
            <Link href="/login" className="px-4 text-l font-bold bg-blue-600 hover:bg-blue-700 rounded">
            Get Started
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
