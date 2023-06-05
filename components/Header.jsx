import React, { useState, useEffect  } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import { getCategories } from '@/services'

const Header = () => {
   const [categories, setCategories] = useState([]);

  useEffect(() => {
      getCategories()
        .then((newCategories) => setCategories(newCategories) )
  }, []);
  
  return (
    <div className='container mx-auto px-8 mb-8'>
      <div className='border-b w-full inline-block border-purple-200 py-1'>
      <div className='md:float-left block'>
        <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
            <Image src={logo}  
            alt='Ubcodes Logo' 
            className='m-0' 
            width={180} />
            </span>
        </Link>
      </div>
      <div className=' md:float-left md:contents'>
        <a href="https://emmanuellaubokabasi-portfolio.netlify.app/" target='_blank' ><span className='md:float-right  mt-10 mb-0 align-middle text-white ml-2 md:ml-4 lg:ml-4 font-semibold cursor-pointer text-xl hover:text-purple-600 transform hover:-translate-y-1 transition duration-500'>Portfolio</span></a>
        {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} >
                <span className='md:float-right  mt-10 mb-0 align-middle text-white ml-2 md:ml-4 lg:ml-4 font-semibold cursor-pointer text-xl hover:text-purple-600 transform hover:-translate-y-1 transition duration-500'>
                    {category.name} 
                </span>
            </Link>
        ))}
        
      </div>
      
      </div>
    </div>
  )
}

export default Header
