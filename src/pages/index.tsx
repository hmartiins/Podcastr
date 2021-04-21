export default function Home(props) {
  return (
    <>
      <h1>Index</h1>
      <span>{JSON.stringify(props.episodes)}</span>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
