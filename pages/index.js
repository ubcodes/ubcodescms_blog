import Head from "next/head"
import { PostCard, Categories, PostWidget, Subscribe, Footer} from '../components';
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'
import Logo from '../public/logo1.png'




export default function Home({ posts}) {
  return (
    <div>
 <div className="container mx-auto px-10 mb-8 ">
      <Head> 
        <title>Ubcodes | Blog</title>
        <meta name="description" content="Articles on Web Development, Books and Mental Health" />
        <meta property="og:title" content="My Personal Blog" />
        <meta property="og:image" content="https://ubcodes-blog.vercel.app/api/og" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div  className="lg:col-span-8 col-span-1">
         {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}
        </div>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
        <PostWidget />
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

export async function getStaticProps() {
  const posts = (await getPosts() || []);

  return {
    props : { posts}
  }
}