import React, { useState, useEffect  } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getCategories } from '@/services'

const Categories = ({category}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      getCategories()
        .then((newCategories) => setCategories(newCategories) )
  }, []);

  return (
    

    <div>



      <div className='bg-white shadow-lg rounded-lg p-5 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='cursor-pointer block pb-3 mb-3 hover:text-purple-600'>
              {category.name}
            </span>
        </Link>
      ))}
    </div>
    </div>
  )
}

export default Categories
