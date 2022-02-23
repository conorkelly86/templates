import type { NextPage } from "next";
export const Grid: NextPage = () => {
  return (
    <>
      <div className="flex flex-wrap text-center px-25% py-25%">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
          1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam a,
          facilis numquam veritatis voluptatum aspernatur possimus totam saepe
          dolorum neque! Quasi dolores ipsam eligendi voluptate, quam saepe
          cupiditate aliquid fuga?
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400">
          2
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
          3
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400">
          4
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-500">
          5
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400">
          6
        </div>
      </div>
    </>
  );
};
export default Grid;
