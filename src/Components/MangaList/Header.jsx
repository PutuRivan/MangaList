import React from 'react'
import { Link } from 'react-router-dom'

const Judul = ({Title, linkHref, linkTitle}) => {
  return (
    <div className="flex justify-between items-center px-8 pt-4">
            <Link to={linkHref} className="text-2xl font-bold text-white hover:text-[red] transition-all">{Title}</Link>
            {
                linkHref && linkTitle 
                ?
                <Link to={linkHref} className="text-lg underline font-bold text-white hover:text-[red] transition-all">
                    {linkTitle}
                </Link>
                : 
                null
            }

        </div>
  )
}

export default Judul