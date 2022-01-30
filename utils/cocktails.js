export async function getAllCocktailIds() {
  const res = await fetch('http://localhost:3000/api/cocktails');
  const { data } = await res.json();

  const ids = data.map((item) => {
    return {
      params: {
        id: item._id
      }
    };
  });

  return ids;
}

export async function getCocktailData(id) {
  const res = await fetch(`http://localhost:3000/api/cocktails/${id}`);
  const { data } = await res.json();

  return data;
}
