import React from 'react'

function Benefits() {
  const data = [
    {
        title: "Effortless Financial Management",
        content: "QuickLearn revolutionizes the way small business owners manage their finances, providing an intuitive and user-friendly platform that simplifies complex accounting tasks."
    },
    {
        title: "Streamlined Automation for Time Savings",
        content: "QuickLearn leverages cutting-edge automation technology to streamline accounting processes, allowing you to save valuable time and resources."
    },
    {
        title: "Personalized Guidance and Insights",
        content: "QuickLearn goes beyond being just another accounting software; it becomes your trusted financial advisor."
    }
  ]
  return (
    <div className='w-screen h-fit pb-10 flex-col justify-center items-center bg-[#f3f2ef]'>
        <div className='w-[100%] flex justify-center items-center'>
            <p className='mt-[35px] w-1/2 h-[100px] text-[#0d333f] font-bold text-[2.5em] text-center'>Powerful accounting tool for small and growing businesses</p>
        </div>
        <div className='flex justify-evenly pt-20'>
            {data.map((d,k) => (
            <div key={k} className='w-[300px] h-[350px] bg-[#dbedee] p-3 rounded-md'>
                <p className='text-[#0d333f] text-2xl font-bold w-[100%] text-center p-5'>{d.title}</p>
                <p className='text-[#0d333f] text-md font-medium w-[100%] text-center p-5'>{d.content}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Benefits