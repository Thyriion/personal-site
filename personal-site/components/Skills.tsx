import React from "react";

function Skills() {
  const skills: { name: string }[] = [
    {
      name: "C#",
    },
    {
      name: "Delphi",
    },
    {
      name: "HTML, CSS, JS",
    },
    {
      name: "Wordpress",
    },
    {
      name: "PHP",
    },
    {
      name: "React",
    },
    {
      name: "Tailwind",
    },
  ];
  return (
    <div className="flex gap-10 flex-wrap justify-center items-center">
      {skills.map((skill) => {
        return (
          <div className="py-10 h-80 w-96 shadow-2xl px-10 animate-fade-in">
            <h3>{skill.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
