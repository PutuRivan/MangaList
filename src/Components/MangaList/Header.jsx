import React from 'react'
import { Link } from 'react-router-dom'

const Judul = ({Title, linkHref, linkTitle}) => {
  return (
    <div className="flex justify-between items-center px-8 pt-4">
            <h1 className="text-2xl font-bold text-white">{Title}</h1>
            {
                linkHref && linkTitle 
                ?
                <Link to={linkHref} className="md:text-xl text-sm underline hover:text-[blue] text-white transition-all">
                    {linkTitle}
                </Link>
                : 
                null
            }

        </div>
  )
}

export default Judul