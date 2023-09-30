import CategoryCard from "./CategoryCard";
import { BsVectorPen } from "react-icons/bs";
import { PiFileHtmlLight } from "react-icons/pi";
import { TbMicrophone2, TbMusic } from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi";
import { WiSunrise } from "react-icons/wi";
import { AiOutlineCamera } from "react-icons/ai";
import { BiData } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import {FaHeartPulse} from 'react-icons/fa6'
import { SiMoleculer } from "react-icons/si";
const Categories = () => {
  return (
    <div className="w-full bg-[#F0FBF7;] py-24 ">
      <div className="md:max-w-[1480px] m-auto   max-w-[600px] ">
        <h1 className="md:leading-[72px]   text-3xl font-bold">
          Most <span className="text-[#20B486]">Popular Categories</span>
        </h1>

        <p className=" text-lg text-gray-600">
          Various versions have evolved over the years, sometimes by accident.
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-2 py-12 gap-4">
          <CategoryCard icons={<BsVectorPen size={30} />} title={"Design"} />
          <CategoryCard
            icons={<PiFileHtmlLight size={30} />}
            title={"Devlopment"}
          />
          <CategoryCard
            icons={<TbMicrophone2 size={30} />}
            title={"Marketing"}
          />
          <CategoryCard
            icons={<HiOutlineBriefcase size={30} />}
            title={"Business"}
          />

          <CategoryCard icons={<WiSunrise size={30} />} title={"Lifestyle"} />
          <CategoryCard
            icons={<AiOutlineCamera size={30} />}
            title={"Photography"}
          />
          <CategoryCard icons={<TbMusic size={30} />} title={"Music"} />
          <CategoryCard icons={<BiData size={30} />} title={"Data Science"} />

          <CategoryCard
            icons={<FcIdea size={30} />}
            title={"Personal Develop"}
          
          />
          <CategoryCard
            icons={<FaHeartPulse size={30} />}
            title={"Health & Fitness"}
          />
          <CategoryCard icons={<SiMoleculer size={30} />} title={"Finance"} />
          <CategoryCard icons={<FaUniversity size={30} />} title={"Teaching"} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
