import React from "react"

const ENV_VAR = import.meta.env.VITE_EXAMPLE_ENV_VAR || ""

const Home = () => {
  return (
    <div className='flex flex-col gap-10'>
      <h1 className='text-center text-xl font-bold'>This is the Home Page</h1>
      <div>
        <p>Example env variable (VITE_EXAMPLE_ENV):</p>
        <div className='h-3'></div>
        <p>&quot;{ENV_VAR}&quot;</p>
      </div>
    </div>
  )
}

export default Home
