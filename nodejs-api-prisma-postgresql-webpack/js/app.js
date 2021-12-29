import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
const title = "F1 Team & Driver";
ReactDOM.render(
  <div>
    {title}

    <div className="mx-auto container">
      <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 dark:bg-gray-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://www.formula1.com/content/dam/fom-website/manual/Misc/2021manual/2021AbuDhabiGPmanualadds/Friday/GettyImages-1237137896.jpg.transform/9col/image.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-gray-700 dark:text-gray-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  </div>,
  document.getElementById("app")
);
