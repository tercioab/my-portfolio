import React from "react";

export default function Skills() {
  const skills = [
    {
      title: "JavaScript",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    },
    {
      title: "TypeScript",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    },
    {
      title: "React",
      src:
        "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
    },
    {
      title: "Next",
      src:
        "https://miro.medium.com/v2/resize:fit:576/1*yqQpg5pkNNY2NCdcmqVstw.png",
    },
    {
      title: "Photoshop",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
    },
    {
      title: "Docker",
      src: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    },
    {
      title: "NestJS",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png",
    },
    // Add other skill objects here
  ];

  return (
	  <div className="relative -top-10">
		  
      <div className="flex justify-center items-center">
      <p className="text-center absolute top-1/2 w-full text-xl -top-8 text-slate-700 ">
        Minhas skills
      </p>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, i) => (
            <div key={i} className="m-4">
              <img
                src={skill.src}
                alt={`${skill.title} logo`}
                className="w-16 "
              />
              <p className="text-center text-black mt-1 text-xs font-medium text-slate-400">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
}
