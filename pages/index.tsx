import RecipeCard from "../components/RecipeCard";

export default function Home() {
  return (
    <>
      <h1 className="m-6 font-heading text-text font-bold text-3xl">
        All Recipes
      </h1>
      <RecipeCard />
    </>
  );
}
