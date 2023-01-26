import React from 'react'
import { useRouter } from "next/router";


const index = () => {
  const router = useRouter()
  console.log(router.query)

  return (
    <div>{router.query.fileID}
    </div>
  )
}

export default index