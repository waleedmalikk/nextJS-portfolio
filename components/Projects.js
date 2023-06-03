import React, { useState } from 'react';
import styles from "../styles/projects.module.css"

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projectData = [
    { name: 'Project 1', type: 'Type A', imageUrl: '/project-1.jpg' },
    { name: 'Project 2', type: 'Type B', imageUrl: '/project-2.jpg' },
    { name: 'Project 3', type: 'Type A', imageUrl: '/project-3.jpg' },
    { name: 'Project 4', type: 'Type C', imageUrl: '/project-4.jpg' },
    { name: 'Project 5', type: 'Type D', imageUrl: '/project-5.jpg' },
    { name: 'Project 6', type: 'Type B', imageUrl: '/project-6.jpg' },
    { name: 'Project 7', type: 'Type C', imageUrl: '/project-7.jpg' },

  ];

  const handleFilterChange = (event) => {
    setSelectedFilter(event);
  };

    let filteredProjects;
    if(selectedFilter){
        if(selectedFilter==="All"){
            filteredProjects=projectData
        }else{
            filteredProjects = selectedFilter
            ? projectData.filter((project) => project.type === selectedFilter)
            : projectData;
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.h1}>
            <h1>My Work</h1>
        </div>
        <div className={styles.lineContainer}>
            <div className={styles.smallBar}></div>
        </div>
        <div className={styles.filterList}>
        <div
            className={selectedFilter === 'All' ? `${styles.filterItem} ${styles.active}` : `${styles.filterItem}`}
            onClick={() => handleFilterChange('All')}
          >
            All
          </div>
          <div
            className={selectedFilter === 'Type A' ? `${styles.filterItem} ${styles.active}` : `${styles.filterItem}`}
            onClick={() => handleFilterChange('Type A')}
          >
            Type A
          </div>
          <div
            className={selectedFilter === 'Type B' ? `${styles.filterItem} ${styles.active}` : `${styles.filterItem}`}
            onClick={() => handleFilterChange('Type B')}
          >
            Type B
          </div>
          <div
            className={selectedFilter === 'Type C' ? `${styles.filterItem} ${styles.active}` : `${styles.filterItem}`}
            onClick={() => handleFilterChange('Type C')}
          >
            Type C
          </div>
          <div
            className={selectedFilter === 'Type D' ? `${styles.filterItem} ${styles.active}` : `${styles.filterItem}`}
            onClick={() => handleFilterChange('Type D')}
          >
            Type D
          </div>
        </div>
        <div className={styles.gallery}>
            {filteredProjects.map((project) => (
            <div key={project.name} className={styles.projectItem}>
                <img src={project.imageUrl} alt={project.name} />
            </div>
            ))}
        </div>
    </div>
  );
};

export default Projects;
