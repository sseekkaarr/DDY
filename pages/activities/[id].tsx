import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/ActivityDetail.module.scss";

interface Activity {
  id: string;
  activity_name: string;
  description: string;
  duration: string;
}

const ActivityDetail = () => {
  const router = useRouter();
  const { id } = router.query; 
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const categoryMapping: { [key: string]: string } = {
    PHY: "Physical Activities",
    REL: "Mental Relaxation",
    SCR: "Self-Care Rituals",
    CRE: "Creative Outlets",
    SOC: "Social Activities",
    EXP: "Exploration & Knowledge",
    RPG: "Reflection & Personal Growth",
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetch(`/api/activities?category_id=${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch activities: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data: Activity[]) => {
          setActivities(data.slice(0, 5));
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching activities:", err);
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [id]);

  const handleActivityClick = (activityId: string) => {
    setSelectedActivity((prev) => (prev === activityId ? null : activityId));
  };

  const categoryName = id ? categoryMapping[id as string] : "this category";

  if (isLoading) return <p>Loading activities...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Activities for {categoryName || "this category"}
        </h1>
        {activities.length > 0 ? (
          <ul className={styles.activityList}>
            {activities.map((activity) => (
              <li key={activity.id} className={styles.activityItem}>
                <div
                  className={styles.activityHeader}
                  onClick={() => handleActivityClick(activity.id)}
                >
                  <strong>{activity.activity_name}</strong>
                </div>
                {selectedActivity === activity.id && (
                  <div className={styles.activityDetails}>
                    <p>{activity.description}</p>
                    <p>
                      <em>Duration: {activity.duration}</em>
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No activities found for {categoryName || "this category"}.</p>
        )}
      </div>
    </>
  );
};

export default ActivityDetail;
