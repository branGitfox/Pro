

function Stats() {
  return (
    <>
            <div className="absolute top-[650px] grid grid-cols-3 bg-gray-900  md:top-[843px] h-[120px]  w-[100%] p-4">
            <div className="flex flex-col items-center justify-center border-r-2 border-blue-600">
                    <p className='font-bold text-xl text-gray-300 '>40</p>
                    <p className='text-white font-light'>Repository</p>
            </div>
            <div className="flex flex-col  items-center justify-center border-r-2 border-blue-600">
                    <p className='font-bold text-xl text-gray-300 '>40</p>
                    <p className='text-white font-light'>Stars</p>
            </div>
            <div className="flex flex-col  items-center justify-center ">
                    <p className='font-bold text-xl text-gray-300 '>40</p>
                    <p className='text-white font-light'>Commits</p>
            </div>
      </div>
   
    </>
  )
}

export default Stats
