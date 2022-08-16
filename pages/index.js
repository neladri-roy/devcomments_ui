import { ApolloClient, InMemoryCache } from '@apollo/client'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { GET_ALL_POSTS } from '../graphql/queries'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  console.log(posts)
  return (
    <div className={styles.container}>
      <Head>
        <title>devcomments.io</title>
        <meta name="description" content="created by @neladriroy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>

        {posts.map((val, i) => {
          return (
            <Link key={i} href={val.attributes.urlSlug}>
              
            <div  className={styles.card}>
                <h2>{val.attributes.title} &rarr;</h2>
                <div>{val.attributes.description} </div>
               
                {/* <i>{val.attributes.publishedAt}</i> */}
            </div>
            
            </Link>
          )
        })}

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}><a>Neladri Roy</a>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            
          </span>
        </a>
      </footer>
    </div>
  )
}



export async function getStaticProps(){
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql", 
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS
  })

  return {
    props: {
      posts: data.blogPosts.data
    }
  }
}
