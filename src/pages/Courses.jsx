import { useState } from "react";
import { motion } from "framer-motion";
import courses from "../data/coursesData";
import "../styles/courses.css";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Dance");
  const [filterLevel, setFilterLevel] = useState("All");

  const filteredCourses = courses.filter(course => {
    return (
      course.category === activeTab &&
      (filterLevel === "All" || course.level === filterLevel)
    );
  });

  return (
    <div className="courses-page">
      <h1 className="page-title">Our Courses</h1>

      <div className="tabs">
        {["Dance", "Martial Arts"].map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="filters">
        {["All", "Beginner", "Intermediate", "Advanced"].map(level => (
          <button
            key={level}
            className={filterLevel === level ? "active" : ""}
            onClick={() => setFilterLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="course-grid">
        {filteredCourses.map(course => (
          <motion.div
            key={course.id}
            className="course-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="details">
              <span>Level: {course.level}</span>
              <span>Duration: {course.duration}</span>
              <span>{course.schedule}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;