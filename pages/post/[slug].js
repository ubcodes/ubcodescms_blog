import React from 'react'
import { useRouter } from 'next/router'
import { getPosts, getPostDetails } from '@/services'
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Subscribe, Footer, Loader} from '../../components'
import { AdjacentPosts } from '@/sections'
import Head from 'next/head'
import moment from 'moment'

// import { RichText } from '@graphcms/rich-text-react-renderer'


const PostDetails = ({ post }) => {
  const router = useRouter();

  if(router.isFallback) {
    return <Loader />
  }

  return (
    <div>

      <Head> 
        <title>{`${post.title}`} | Ubcodes</title>
        {/* <meta name="description" content={`${post.excerpt}`} /> */}
        <meta property="og:title" content={`${post.title} | Ubcodes`} />
        <meta property='og:type' content='website'/>
        <meta property='og:site_name' content='Ubcodes' />
        <meta property='og:image'content={`${post.featuredImage.url}`} />
        <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="6" />
      
       {/*  <meta property='og:image:width' content='820' />
        <meta property='og:image:height' content='462' /> */}
        <meta property='og:article:published_time' content={moment(post.createdAt).format('MMM DD, YYYY')} />
        {/* <meta name='twitter:creator' content='@ubcodes1_' />
        <meta name='twitter:label1'  content='Written by' />
        <meta name='twitter:label2'  content='Etop - Essien Emmanuella Ubokabasi ' /> */}


      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ubcodes1_" />
      <meta name="twitter:title" content={`${post.title} | Ubcodes`} />
      <meta name="twitter:description" content={`${post.excerpt}`} />
      {/* <meta name="twitter:image" content="https://pbs.twimg.com/profile_banners/1565758457642467328/1681520629/1500x500le.jpg" /> */}
      <meta name="twitter:creator" content="Etop - Essien Emmanuella Ubokabasi" />  
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${post.title} | Ubcodes`} />
      <meta property="og:description" content={`${post.excerpt}`} />
      <meta property="og:url" content={`https://www.ubcodesblog.com/post/${post.slug}`}/>
      



        <link rel="icon" href="/favicon.ico" />
      </Head>
       
        <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
        </div>
        <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:Sticky top-8'>
                <PostWidget slug={post.slug} categories={post.categories.map((category)=> category.slug)} />
                <Categories />
                <Subscribe />
            </div>
        </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default PostDetails



export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
