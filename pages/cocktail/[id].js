import SingleCocktail from '../../components/Single_Cocktail';
import { getAllCocktailIds, getCocktailData } from '../../utils/cocktails';
export default function SingleCocktailPage({ cocktail }) {
  return <SingleCocktail cocktail={cocktail} />;
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
