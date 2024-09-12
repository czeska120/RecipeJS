import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type Recipe = {
  id: string;
  name: string;
  category: string;
  description: string;
  src: string;
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
      <div className="flex flex-col mx-2 justify-center md:flex-row md:flex-wrap my-4 md:gap-6">
        {/* Card */}
        {recipes?.map((recipe: Recipe) => (
          <Link href={`/details/${recipe.id}`} key={recipe.id}>
            <div className="card">
              <div className="image">
                <Image
                  src={recipe.src}
                  alt="adobo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h2 className="recipe-category">
                  {recipe.category.toUpperCase()}
                </h2>
                <h1 className="recipe-name">{recipe.name}</h1>
              </div>
              <div>
                <div className="line-clamp-2">
                  <p className="recipe-description">{recipe.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
