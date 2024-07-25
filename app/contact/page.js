"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import LandingPage from '@/components/landingPage';
export default function Contact() {
  const { t } = useTranslation('common');

  return (
    <div>
        
      <LandingPage />
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
          </div>
          <img src="./CustomerSupport.jpg" alt="" className="p-6 h-full w-full rounded" />
        </div>
        <form noValidate className="space-y-6 relative top-1/4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left">Full name</label>
            <input id="name" type="text" placeholder="Enter your full name" className="mt-1 block w-full p-3 rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-100" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email</label>
            <input id="email" type="email" placeholder="Enter your email" className="mt-1 block w-full p-3 rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-100" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left">Message</label>
            <textarea id="message" rows="3" placeholder="Enter your message" className="mt-1 block w-full p-3 rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-100"></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide  rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-violet-600 dark:text-gray-50">
            Send Message
          </button>
        </form>

      </div>
        
    
    </div>
  );
};

