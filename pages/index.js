import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
//---------------------------Route Masking-----------------------
// import Header from '../components/Header.js';
// import Layout from '../components/MyLayout.js';
// import Link from 'next/link';


// export default () => (
//     <Layout>
//         <h1>My Blog</h1>
//         <ul>
//             <PostLink title="Hello Next.js"/>
//             <PostLink title="Learn Next.js is awesome"/>
//             <PostLink title="Deploy apps with Zeit"/>
//         </ul>
//     </Layout>
// )

// // const PostLink = (props) => (
// //     <li>
// //         <Link href={`/post?title=${props.title}`}>
// //             <a>{props.title}</a>
// //         </Link>
// //     </li>
// // )


// // Route Masking
// const PostLink = (props) => (
//     <li>
//       <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//         <a>{props.title}</a>
//       </Link>
//     </li>
//   )


  