import React from "react";
import SkillList from "./SkillLIst";


function SkillContainer() {

  const developers = [
    {
      name: "Raj",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Bharath",
      skills: ["React", "NodeJS", "MongoDB"]
    },
    {
      name: "Rahul",
      skills: ["Python", "Django", "SQL"]
    }
  ];

  return (
    <div>
      <SkillList developers={developers}/>
    </div>
  );
}

export default SkillContainer;