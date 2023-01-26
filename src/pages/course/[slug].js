import React, { useState } from "react";
import { useRouter } from "next/router";
import Error from "next/error";
import Link from "next/link";
import { FirstYearSubjects } from "components/FirstYearSubjects";
import { SecondYearSubjects } from "components/SecondYearSubjects";
import { ThirdYearSubjects } from "components/ThirdYearSubjects";
import { promises as fs } from 'fs';
import path from 'path';
// import styles from '../../styles/BlogPost.module.css';



const Slug = (props) => {
  const router = useRouter();
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);

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
    <div className="w-full bg-black pt-20">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="mt-8 mb-8 text-center text-6xl font-bold text-white">{props.data.course}</h1>
        {/* <Link href={`${router.asPath}/statistics`}>
          <div>FIRST</div>
        </Link> */}
        <div className="mx-auto grid pb-10 grid-cols-3 justify-center text-center text-white xl:grid-cols-3 xl:gap-4 xl:px-20">
          <div>
            <button
              onClick={showFirstYear}
              className="text-md rounded-xl border-transparent px-6 py-3 font-bold shadow-[rgba(255,255,255,0.50)] transition duration-300 hover:border-[#f5a607] md:text-2xl bg-[#ffffff17]"
            >
              1st Year
            </button>
          </div>
          <div>
            <button
            onClick={showSecondYear} 
            className="text-md rounded-xl border-transparent px-4 py-3 font-bold shadow-[rgba(255,255,255,0.50)] transition duration-300 hover:border-[#f5a607] md:px-6 md:text-2xl bg-[#ffffff17]">
              2nd Year
            </button>
          </div>
          <div>
            <button 
            onClick={showThirdYear}
            className="text-md rounded-xl border-transparent px-4 py-3 font-bold shadow-[rgba(255,255,255,0.50)] transition duration-300 hover:border-[#f5a607] md:px-6 md:text-2xl bg-[#ffffff17]">
              3rd Year
            </button>
          </div>
        </div>
        
        {first && <FirstYearSubjects data={props.data} />}
        {second && <SecondYearSubjects data={props.data} />}
        {third && <ThirdYearSubjects data={props.data} />}

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
