import Head from 'next/head'
import Banner from '../components/Banner'
import Bannertext from '../components/Bannertext'
import Header from '../components/Header'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'

export default function Home({movies,action,romance,comedy,drama}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* banner */}
      <Banner movies={movies}  />
      <Bannertext movies={movies}/>
      <Title Heading="Action" data={action} />
      <Title Heading="Romance" data={romance} />
      <Title Heading="Comedy" data={comedy} />
      <Title Heading="Drama" data={drama} />

    </div>
  )
}

export async function getServerSideProps(context){
  const total = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=bac63f0b426881aff0bc5d4cb4ed4f72").then(
    (res)=> res.json()
  );
  const actiontotal = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=bac63f0b426881aff0bc5d4cb4ed4f72&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate").then(
    (res)=> res.json()
  );
  const romancetotal = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=bac63f0b426881aff0bc5d4cb4ed4f72&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate").then(
    (res)=> res.json()
  );
  const comedytotal = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=bac63f0b426881aff0bc5d4cb4ed4f72&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate").then(
    (res)=> res.json()
  );
  const dramatotal = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=bac63f0b426881aff0bc5d4cb4ed4f72&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate").then(
    (res)=> res.json()
  );
  const action = actiontotal.results;
  const romance = romancetotal.results;
  const comedy = comedytotal.results;
  const drama = dramatotal.results;
  const movies= total.results;
  return {
    props:{
      movies,action,romance,comedy,drama
    }
  }
}