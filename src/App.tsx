import { FC, useEffect, useState } from "react";
import Switch from "./components/Switch";
import Runtime from "./containers/Runtime";
import Constructor from "./containers/Constructor";

const App: FC = () => {
  const [media, setMedia] = useState(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  );

  if (media) {
    return (
      <div className=" text-center m-2 py-4 border-4 border-dashed">
        <p>
          Пока что недоступно <br /> на мобильных устройствах
        </p>
      </div>
    );
  }

  return (
    <>
      <header></header>
      <main className="main-container h-[100vh] mx-auto flex flex-col justify-start items-center">
        <section className="w-full py-4 flex justify-end">
          <Switch />
        </section>
        <section className="w-full mb-8 md:mb-0 flex flex-col md:flex-row gap-16">
          <Constructor />
          <Runtime />
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
