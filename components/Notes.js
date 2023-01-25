import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Notes = ({ data }) => {
  const router = useRouter();
//   console.log(router);
  const notes = data.notes;
  return (
    <div className="">
      <div className="grid w-full grid-cols-2 items-center justify-center gap-5 px-4 pb-5 text-white sm:px-8">
        {notes && notes.map((note) => (
          <div key={data.id} className="flex justify-center mx-auto">
            <Link href={note.url}>
              <button className="text-md rounded-xl border-transparent px-6 py-3 font-bold shadow-[rgba(255,255,255,0.50)] transition duration-300 hover:border-[#f5a607] md:text-2xl">
                {note.name}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
