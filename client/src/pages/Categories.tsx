import { useEffect, useState } from "react";
import { Link } from "react-router";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories`)
      .then((response) => response.json())
      .then((data: Category[]) => setCategories(data));
  }, []);

  return (
    <>
      <h1>Categories page</h1>
      <ul className="btnContainer">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`} className="menuBtn">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
