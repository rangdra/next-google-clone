import HeaderOption from "./HeaderOption";
import * as Icon from "./HeaderOptionsIcon";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={Icon.SearchIcon} title="All" selected />
        <HeaderOption Icon={Icon.PhotographIcon} title="Images" />
        <HeaderOption Icon={Icon.PlayIcon} title="Videos" />
        <HeaderOption Icon={Icon.NewspaperIcon} title="News" />
        <HeaderOption Icon={Icon.MapIcon} title="Maps" />
        <HeaderOption Icon={Icon.DotsVerticalIcon} title="More" />
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
