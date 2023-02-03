import React, { useState } from "react";
import { useRouter } from "next/router";
import Error from "next/error";
import Link from "next/link";
import { YearSubjects } from "components/YearSubjects";
import { promises as fs } from 'fs';
import path from 'path';
// import styles from '../../styles/BlogPost.module.css';



const Slug = (props) => {
  const router = useRouter();
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const showFirstYear = () => {
    setThird(false);
    setSecond(false);
    setFirst(true);
  };


  const showSecondYear = () => {
    setFirst(false);
    setThird(false);
    setSecond(true);
  };

  const showThirdYear = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
  };
  // console.log(router.query);
  // const { slug } = router.query;
  // console.log(props.subject)
  // console.log(props.data);

  if (props.data.error) {
    return <Error statusCode={404} />;
  }

  return (
    <div className="bg-gray-900 min-h-screen w-full p-10 items-center">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
      <h1 className="text-3xl md:text-7xl font-bold text-white text-center">DuAcademia</h1>

        <h2 className="my-10 text-center text-4xl font-bold text-white">{props.data.course}</h2>
        {/* <Link href={`${router.asPath}/statistics`}>
          <div>FIRST</div>
        </Link> */}
        <div className="mx-auto grid pb-10 grid-cols-3 justify-center text-center text-white xl:grid-cols-3 xl:gap-4 xl:px-20">
          <div className="w-48">
            <button
              onClick={showFirstYear}
              className={first? "text-md rounded-xl px-6 py-3 font-bold  transition duration-300  md:text-2xl bg-indigo-500": "text-md rounded-xl px-6 py-3 font-bold  transition duration-300  md:text-2xl bg-gray-800"}
            >
              1st Year
            </button>
          </div>
          <div>
            <button
            onClick={showSecondYear} 
            className={second? "text-md rounded-xl px-6 py-3 font-bold  transition duration-300  md:text-2xl bg-indigo-500": "text-md rounded-xl px-6 py-3 font-bold  transition duration-300  md:text-2xl bg-gray-800"}>
              2nd Year
            </button>
          </div>
          <div>
            <button 
            onClick={showThirdYear}
            className={third? "text-md rounded-xl px-6 py-3 font-bold  transition duration-300  md:text-2xl bg-indigo-500": "text-md rounded-xl px-6 py-3 font-bold  transition duration-300  md:text-2xl bg-gray-800"}>
              3rd Year
            </button>
          </div>
        </div>
        <div className={first? "": "hidden"}>
        <YearSubjects data={props.data.firstyear} />
        </div>
        <div className={second? "": "hidden"}>
        <YearSubjects data={props.data.secondyear} />
        </div>
        <div className={third? "": "hidden"}>
        <YearSubjects data={props.data.thirdyear} />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query);
  // const router = useRouter();
  const slug = context.query.slug;
  const jsonDirectory = path.join(process.cwd(), 'jsondata')
  console.log(jsonDirectory)
  let data = {}
  try {
    const contents = await fs.readFile(jsonDirectory + `/${slug}.json`, 'utf-8');
    data = JSON.parse(contents);
    console.log(data)

  } catch (error) {
    data = {error: true};
  }
  return {
    props: {data} , // will be passed to the page component as props
  };
}

export default Slug;
