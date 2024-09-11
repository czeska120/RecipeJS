import { useState, useEffect } from "react";
import Link from "next/link";

type Recipe = {
  id: string;
  name: string;
  category: string;
  description: string;
};

export default function RecipeCard() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      {/* Card List */}
      <div className="flex flex-col mx-4 justify-center md:flex-row md:flex-wrap my-4 md:gap-6  ">
        {/* Card */}
        {recipes?.map((recipe: Recipe) => (
          <Link href={`/details/${recipe.id}`}>
            <div key={recipe.id} className="card">
              <div className="h-3/5">
                <h2>{recipe.category.toUpperCase()}</h2>
                <h1>{recipe.name}</h1>
              </div>
              <div className="h-2/5">
                <div className="line-clamp-3">
                  <p className="text-sm">{recipe.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
