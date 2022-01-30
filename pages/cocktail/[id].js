import { useRouter } from 'next/router';

export default function SingleCocktailPage() {
  const router = useRouter();
  console.log(router.query.id);
  return <div>Hello from the single cocktail page</div>;
}
