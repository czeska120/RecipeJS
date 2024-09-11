import Link from "next/link";
import fs from "fs";
import path from "path";
import styles from "./index.module.css";

export default function Dish({ dish }: any) {
  return (
    <>
      <div className="flex flex-col m-4">
        <Link
          href="/"
          className="text-sm md:text-base underline hover:text-primary font-medium"
        >
          &lt; Back to all recipes
        </Link>
        <div className={styles.container}>
          {/* Instructions Card */}
          <div className={styles.instructions}>
            <div>
              <h3>{dish.category.toUpperCase()}</h3>
              <h1>{dish.name}</h1>
              <p>{dish.description}</p>
            </div>
            {/* Mobile Ingredients */}
            <div className={styles.mobileIngredients}>
              <h2>Ingredients</h2>
              <ul className="list-disc mx-8 italic">
                {dish.ingredients.map((ingre: any, index: number) => (
                  <li className="mt-1" key={index}>
                    {ingre}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={styles.instructionsHeading}>Instructions</h2>
              <ul className="ml-4">
                {dish.instructions.map((step: any, index: number) => (
                  <li className="mt-2" key={index}>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Ingredients Card*/}
          <div className={styles.ingredients}>
            {/* Web Ingredients */}
            <h2>Ingredients</h2>
            <ul className="list-disc ml-8 italic">
              {dish.ingredients.map((ingre: any, index: number) => (
                <li className="mt-2" key={index}>
                  {ingre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "recipe.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const paths = data.map((dish: { id: number }) => ({
    params: { id: dish.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), "data", "recipe.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const recipe = data.find(
    (dish: { id: number }) => dish.id.toString() === context.params.id
  );

  return {
    props: {
      dish: recipe,
    },
  };
}
