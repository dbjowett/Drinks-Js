import { useRouter } from 'next/router';

export default function EditSingleCocktail() {
  const router = useRouter();

  console.log(router.query.id);
  return <div>Hello from the edit single cocktail page</div>;
}
