import { useTranslation } from 'react-i18next';
import Link from 'next/link';
export default function RegisterForm() {
    const { t } = useTranslation('common');

    return (
        <section className="w-full min-h-screen text-gray-900 flex items-center justify-center py-36 bg-center bg-cover bg-no-repeat"
    style={{ backgroundImage: "url('../login.jpg')" }}>
        
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 relative bg-gray-950 bg-opacity-50">
          <div className="relative z-30 w-full py-6 opacity-100">
            <h1 className="my-6">LOGO</h1>
            <div className="py-6 space-x-2">
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">f</span>
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">G+</span>
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">in</span>
            </div>
            <p className="text-gray-100">or register with your email</p>
            <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="pb-2 pt-4">
                <input type="text" name="name" id="name" placeholder="Name" className="block w-full p-4 text-lg rounded-sm bg-gray-200 opacity-100" />
              </div>
              <div className="pb-2 pt-4">
                <input type="email" name="email" id="email" placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-gray-200 opacity-100" />
              </div>
              <div className="pb-2 pt-4">
                <input className="block w-full p-4 text-lg rounded-sm bg-gray-200 opacity-100" type="password" name="password" id="password" placeholder="Password" />
              </div>
              <div className="pb-2 pt-4">
                <input className="block w-full p-4 text-lg rounded-sm bg-gray-200 opacity-100" type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" />
              </div>
              <div className="px-4 pb-2 pt-4">
                <button className="uppercase block w-full p-4 text-lg rounded-xl bg-blue-600 hover:bg-indigo-600 focus:outline-none text-white">Register</button>
              </div>
            </form>
            <div className="mt-4 text-gray-300">
              <p>Already have an account? <Link href="/login" className="text-blue-400 hover:text-amber-400">Login here</Link></p>
            </div>
          </div>
        </div>
      </section>
    );
  }