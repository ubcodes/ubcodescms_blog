import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer'


const PostDetail = ({ post }) => {
   const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':con
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div  className='bg-white shadow-lg rounded-lg lg:p-5 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
      <picture>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top h-ful w-full rounded-t-lg'
      />
      </picture>
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
           <div className='flex items-center  mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <picture>
              <img
                alt={post.author.name}
                height="40px"
                width="40px"
                className='align-middle rounded-full'
                src={post.author.photo.url}
            />
            </picture>
            <p className='inline align-middle text-gray-700 ml-2 text-lg '>{post.author.name}</p>
        </div>
        <div className='font-medium text-gray-700'>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
                {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
        </div>
        </div>
        <React.Fragment>

      <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
        {/* {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

          return getContentFragment(index, children, typeObj, typeObj.type)
        })} */}
         {/* <RichText content={post.content.raw.children} /> */}
         <RichText
           content={post.content.raw.children} 
           renderers={{
            h1: ({ children }) => <h1 className='mb-4 text-4xl text-gray-900 md:text-4xl lg:text-4xl'>{children}</h1>,
            h2: ({ children }) => <h2 className='mb-4 text-3xl text-gray-900 md:text-3xl lg:text-3xl'>{children}</h2>,
            h3: ({ children }) => <h3 className=' text-2xl text-gray-900 '>{children}</h3>,
            h4: ({ children }) => <h4 className=' text-xl '>{children}</h4>,
            h5: ({ children }) => <h5 className='text-large text-gray-900 '>{children}</h5>,
            h6: ({ children }) => <h6 className=' text-lg text-gray-900'>{children}</h6>,
            p: ({ children }) => <p className='my-4 font-medium '>{children}</p>,
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => <i>{children}</i>,
            underline: ({ children }) => <u>{children}</u>,
            // links: ({children}) => <link className='text-blue-800' >{children}</link>,
            ul: ({ children }) => <ul  className='list-disc list-inside my-4 text-medium'>{children}</ul>,
            ol: ({ children }) => <ol className='list-decimal list-inside my-4 medium'>{children}</ol>,
            li: ({ children }) => <li className='my-2 text-lg'>{children}</li>,
            // table: ({ children }) => <li>{children}</li>,
            code: ({ children }) => <code className='bg-gray-300  rounded-md px-1  text-xs'>{children}</code>,
            code_block: ({ children }) => <pre className='bg-gray-300 overflow-y-auto overflow-x-auto  rounded-md p-2 text-xs'>{children}</pre>,
            blockquote: ({ children }) => <div className='text-sm font-semibold border border-purple-300 border-t-0 border-l-2 border-r-0 border-b-0 p-3 mt-3'>{children}</div>,
            
            Asset: {
              video: () => <div className='w-96 h-64'>custom VIDEO</div>,
              image: () => <div>custom IMAGE</div>,
              application: () => <div>custom APPLICATION</div>,
              'video/mp4': () => {
                return <div>custom video/mp4 renderer</div>
              },
            },

           }}
           />

        </React.Fragment>


      </div>
    </div>
  )
}

export default PostDetail
