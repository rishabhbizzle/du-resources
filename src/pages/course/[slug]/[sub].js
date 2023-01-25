import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { Books } from "components/Books";
import { Notes } from "components/Notes";

import Link from 'next/link'

export default function Index(props) {

    const [books, setBooks] = useState(true)
    const [notes, setNotes] = useState(false)
    const [previousYear, setPreviousYear] = useState(false)

    const showNotes = () => {
      setBooks(false);
      setPreviousYear(false);
      setNotes(true);
    };

    const router = useRouter()
    // console.log(data)

    return (
      <div className="w-full h-screen bg-black">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="mt-8 mb-8 text-center text-6xl font-bold text-white">{props.data.subject}</h1>
        <div className="mx-auto grid pb-10 grid-cols-4 justify-center text-center text-white xl:grid-cols-4 xl:gap-1 xl:px-20">
          <div>
            <button

              className="text-md rounded-xl border-transparent px-6 py-3 font-bold shadow-[rgba(255,255,255,0.50)] transition duration-300 hover:border-[#f5a607] md:text-2xl bg-[#ffffff17]"
            >
              Books
            </button>
          </div>
          <div>
            <button 
            onClick={showNotes}
            className="text-md rounded-xl border-transparent px-4 py-3 font-bold shadow-[rgba(255,255,255,0.50)] transition duration-300 hover:border-[#f5a607] md:px-6 md:text-2xl bg-[#ffffff17]">
              Notes
            </button>
          </div>
          <div>
            <button 
            className="text-md rounded-xl border-transparent px-4 py-3 font-bold shadow-[rgba(255,255,255,0.50)] transition duration-300 hover:border-[#f5a607] md:px-6 md:text-2xl bg-[#ffffff17]">
              Past Papers
            </button>
          </div>
        </div>
        {books && <Books data= {props.data} />}
        {notes && <Notes data= {props.data} />}

      </div>
      {/* <Link href={`${router.asPath}/${sub}`}>
      <div>Statistics</div>
      </Link> */}
    </div>
    )
}

export async function getServerSideProps(context) {
  console.log(context.query)
  let sub = context.query.sub
  sub = sub.toLowerCase()
  let api = await fetch(`http://localhost:3000/api/getSubjectResources?sub=${sub}`);
  let data = await api.json();
  return {
    props: { data }, // will be passed to the page component as props
  };

}
