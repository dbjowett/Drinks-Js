import CocktailGrid from '../components/Cocktail_Grid';

export default function Home({ data }) {
  console.log(data);
  return <CocktailGrid cocktails={data} />;
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/cocktails');
  const { data } = await res.json();

  return {
    props: {
      data: data
    }
  };
}
