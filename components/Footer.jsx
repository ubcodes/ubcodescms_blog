import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'

export const revalidate = 60;


const Footer = () => {
  return (
    <footer className='bg-white-200 text-center mx-auto text-white dark:bg-purple-100 w-full'>
        <div className='container pt-9 mx-auto w-full'>
            <div className='mb-9 flex justify-center'>
            <a href="https://www.youtube.com/@ubcodes/videos" className='icons mx-0.5 lg:mx-5 sm:mx-5 text-neutral-800 dark:text-neutral-200  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-3 transition duration-400 hover:-translate-y-1'>
          <svg
           xmlns="http://www.w3.org/2000/svg" width="10" height="10" 
           fill="currentColor" 
           className="bi bi-youtube h-7 w-7 " 
           viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> </svg>
            </a>
            <a href="https://twitter.com/ubcodes1_" className='mx-0.5 lg:mx-5 sm:mx-5 text-neutral-800 dark:text-neutral-200  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-3 transition duration-400 hover:-translate-y-1'>
           <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
            </a>
            <a href="https://www.instagram.com/ubcodes._/" className='mx-0.5 lg:mx-5 sm:mx-5 text-neutral-800 dark:text-neutral-200  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-3 transition duration-400 hover:-translate-y-1'>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
            </a>
            <a href="https://www.linkedin.com/in/emmanuella-ubokabasi-etop-essien-b41846227/" className='mx-0.5 lg:mx-5 sm:mx-5 text-neutral-800 dark:text-neutral-200  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-3 transition duration-400 hover:-translate-y-1'>
                <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
            </a>
            <a href="https://github.com/ubcodes" className='mx-0.5 lg:mx-5 sm:mx-5 text-neutral-800 dark:text-neutral-200  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-3 transition duration-400 hover:-translate-y-1'>
             <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
            </a>
            </div>
        </div>

        {/* Copyright  */}
        <div className=' p-4 text-center   text-3xl bg-purple-600 text-neutral-200 '>
        <a 
            className='text-white-800 dark:text-white-400 custom-font'
            href="https://emmanuellaubokabasi.me/"
        >
            Developed with ❤️, by <i className='hover:text-red-700'>Ubokabasi</i>
        </a>
         <p className='text-xl'>© Etop - Essien Emmanuella Ubokabasi  </p> <p className='text-sm'>2023</p> 
        </div>

    </footer>
  )
}

export default Footer
