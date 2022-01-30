import { getAllCocktailIds, getCocktailData } from '../../utils/cocktails';

export default function SingleCocktailPage({ cocktail }) {
  return (
    <div>
      <h1>{cocktail.title}</h1>
      <div>{cocktail.description}</div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await getCocktailData(params.id);

  return {
    props: {
      cocktail: data
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllCocktailIds();
  return {
    paths,
    fallback: false
  };
}
