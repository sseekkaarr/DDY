import { useEffect, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import styles from "../styles/ActivityCatalog.module.scss";

// Tipe data untuk kategori
interface Category {
  category_id: string;
  category: string;
  category_image: string; // Tambahkan properti gambar
}

const ActivityCatalog = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simpan gambar di kategori secara lokal (jika API belum menyediakannya)
    const localCategories = [
      { category_id: "PHY", category: "Physical Activities", category_image: "/img/physical.png" },
      { category_id: "REL", category: "Mental Relaxation", category_image: "/img/relaxation.png" },
      { category_id: "SCR", category: "Self-Care Rituals", category_image: "/img/selfcare.png" },
      { category_id: "CRE", category: "Creative Outlets", category_image: "/img/creative.png" },
      { category_id: "SOC", category: "Social Activities", category_image: "/img/social.png" },
      { category_id: "EXP", category: "Exploration & Knowledge", category_image: "/img/exploration.png" },
      { category_id: "RPG", category: "Reflection & Personal Growth", category_image: "/img/reflection.png" },
    ];

    setCategories(localCategories);
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <main className={styles.catalogContainer}>
        <h1 className={styles.catalogTitle}>Explore Self-Care Categories</h1>
        <div className={styles.categoryList}>
          {categories.map((category) => (
            <Link
              key={category.category_id}
              href={`/activities/${category.category_id}`}
              passHref
            >
              <div className={styles.categoryCard}>
                <img
                  src={category.category_image}
                  alt={category.category}
                  className={styles.categoryImage}
                />
                <h3 className={styles.categoryName}>{category.category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default ActivityCatalog;
