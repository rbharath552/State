import React from "react";

function SkillList(props) {
  return (
    <div>
      <h2>Developer Skills</h2>

      {props.developers.map((dev, index) => (
        <div key={index}>
          <h3>{dev.name}</h3>

          <ul>
            {dev.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>

          <hr />
        </div>
      ))}
    </div>
  );
}
export default SkillList;