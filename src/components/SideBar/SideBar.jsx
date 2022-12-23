import IconProfile from "../utils/Icons/IconProfile";
import IconCourts from "../utils/Icons/IconCourts";
import IconNews from "../utils/Icons/IconNews";
import IconMap from "../utils/Icons/IconMap";
import { useState } from "react";
import { Link } from "react-router-dom";

const list = [
  { name: "canchas", path: "courts", comp: <IconCourts /> },
  { name: "perfil", path: "profile", comp: <IconProfile /> },
  { name: "noticias", path: "news", comp: <IconNews /> },
  { name: "mapa", path: "", comp: <IconMap /> },
];

const SideBar = () => {
  const [openBar, setOpenBar] = useState(false);
  return (
    <div
      onMouseOver={() => setOpenBar(true)}
      onMouseLeave={() => setOpenBar(false)}
      className={`${openBar ? "w-64" : "w-12"} bg-trasparent py-10 z-50 fixed`}
    >
      <ul>
        {list.map((li, key) => (
          <Link key={key} to={`/${li.path}`} onClick={() => setOpenBar(false)}>
            <div
              className={`${
                openBar ? "clip" : "rounded-r-full"
              } h-[44px]  bg-greyBorder flex items-center my-2`}
            >
              <li
                onTouchMove={() => setOpenBar(true)}
                className={`${
                  openBar ? "clip px-4" : "rounded-r-full"
                } bg-greyBackground w-full text-2xl font-black tracking-widest uppercase flex items-center shadow-lg my-[1px] mr-[2px] py-1 hover:text-3xl hover:tracking-wide`}
              >
                <span
                  className={`${!openBar && "hidden"} flex-1 text-greyText
              `}
                >
                  {li.name}
                </span>
                <span className="px-1">{li.comp}</span>
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
