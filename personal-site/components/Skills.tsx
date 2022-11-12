import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Skills() {
  const skills: { name: string; progress: number }[] = [
    {
      name: "C#",
      progress: 45,
    },
    {
      name: "Delphi",
      progress: 30,
    },
    {
      name: "HTML, CSS, JS",
      progress: 80,
    },
    {
      name: "Wordpress",
      progress: 75,
    },
    {
      name: "PHP",
      progress: 85,
    },
    {
      name: "React",
      progress: 60,
    },
    {
      name: "Tailwind",
      progress: 50,
    },
  ];

  return (
    <div className="flex gap-10 flex-wrap justify-center items-center">
      {skills.map((skill, index) => {
        return (
          <div
            className="py-10 h-fit w-96 shadow-2xl px-10 animate-fade-in"
            key={index}
          >
            <h3 className="pb-10">{skill.name}</h3>

            <div className="h-fit">
              <CircularProgressbar
                value={skill.progress}
                text={`${skill.progress}%`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
