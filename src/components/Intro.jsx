import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Joseph
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Fullstack Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am a Junior Full-Stack Developer, embarking on a new journey after a
        great career as a Personal Trainer in the fitness industry. My love for
        development and overcoming challenges has led me to pursue a career in
        tech. I am eager to see where this adventure as a developer takes me and
        am excited to share my skills and experiences with the world!{" "}
      </p>
    </div>
  );
}

export default Intro;
