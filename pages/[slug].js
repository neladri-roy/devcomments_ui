import React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ALL_POST_URLS, GET_INDIVIDUAL_POST } from '../graphql/queries';
import styles from '../styles/Home.module.css'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote';


const client = new ApolloClient({
    uri: "http://localhost:1337/graphql", 
    cache: new InMemoryCache()
  });

export default function Post({post}){
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{post.title}</h1>
            <MDXRemote {...post.content}/>
        </div>
    )
}


export async function getStaticPaths(){
    const { data } = await client.query({query: GET_ALL_POST_URLS});
    const paths = data.blogPosts.data.map((post) => {
        return {
            params: {slug: post.attributes.urlSlug}
        }
    });

    return {
        paths, 
        fallback: false
    }
}


export async function getStaticProps({ params }){
    const { data } = await client.query({
        query: GET_INDIVIDUAL_POST,
        variables: { slugUrl: params.slug}
    });

    const attrs = data.blogPosts.data[0].attributes;

    const html = await serialize(attrs.content)

    return {
        props: {
            post: {
                title: attrs.title,
                content: html
            }
        }
    }
}