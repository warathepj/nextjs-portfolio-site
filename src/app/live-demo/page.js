import Link from 'next/link'
import React from 'react'

const LiveDemoPage = () => {
  return (
    <div>
      <h1 className="text-7xl">LiveDemoPage</h1>
      <Link href="/portfolio" className="">
            <p className="text-3xl mr-4 hover:bg-violet hover:text-white">
              Portfolio
            </p>
          </Link>
          <Link href="/" className="">
            <p className="text-3xl hover:bg-violet hover:text-white">
              Home
            </p>
          </Link>
    </div>
  )
}

export default LiveDemoPage