import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const YearSubjects = ({ data }) => {
  const router = useRouter();
  // console.log(router);
  const array = data;
  return (
    <div className="">
      <div className="grid w-full grid-cols-2 items-center justify-center gap-5 px-4 pb-5 text-white sm:px-8">
        {array.map((arr) => (
          <Link href={`${router.asPath}/${arr.subject}`}>
          <div key={data.courseID} className="mx-auto text-l md:text-3xl font-semibold bg-gray-800 flex justify-center items-center w-full h-28 rounded-lg shadow-lg p-5 relative hover:shadow-xl hover:bg-gray-700 transition-shadow duration-200">
              <button className="">
                {arr.subject}
              </button>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
