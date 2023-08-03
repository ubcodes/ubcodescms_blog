import Head from "next/head"
import { PostCard, Categories, PostWidget, Subscribe, Footer} from '../components';
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'



export default function Home({ posts}) {
  return (
    <div>
 <div className="container mx-auto px-10 mb-8 ">
      <Head> 
        <title>Ubcodes | Blog</title>
     
        <meta property="og:image" content="https://pbs.twimg.com/media/F1V6Az9WAAkZRLf?format=jpg&name=large" />

      <meta name="keywords" content="HTML,CSS, JavaScript, Mental Health, React, Books" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ubcodes1_" />
      <meta name="twitter:title" content="Ubcodes | Blog" />
      <meta name="twitter:description" content="Welcome to my blog, where I share my insights and tips on web development, mental health and books. Whether you are a beginner or an expert, a reader or a writer, a coder or a therapist, you will find something useful and interesting here." />
      <meta name="twitter:image" content="https://pbs.twimg.com/media/F1V6Az9WAAkZRLf?format=jpg&name=large" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ubcodes | Blog" />
      <meta property="og:description" content="Welcome to my blog, where I share my insights and tips on web development, mental health and books. Whether you are a beginner or an expert, a reader or a writer, a coder or a therapist, you will find something useful and interesting here." />
      <meta property="og:site_name" content="Ubcodes | Blog" />
      <meta property="og:url" content="https://www.ubcodesblog.com/" />
      {/* <meta property="og:image" content="https://pbs.twimg.com/profile_banners/1565758457642467328/1681520629/1500x500le.jpg" /> */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />


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