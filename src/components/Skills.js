import React from 'react';

const skills = ['PHP', 'HTML', 'Python', 'Laravel', 'MySQL', 'Git', 'Figma'];

function Skills() {
  return (
    <section id="skills" className="container">
      <h2>Keahlian</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;