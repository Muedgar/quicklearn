import React from 'react'

function Stats() {
  const data = [{
    rf: 0,
    status: `${0} estimates`,
  },
  {
    rf: 0,
    status: `${0} overdue invoices`,
  },
  {
    rf: 0,
    status: `${0} open invoices and credits`,
  },
  {
    rf: 0,
    status: `${0} recently paid`,
  }
]
  return (
    <div className='flex pt-4 pl-5 pr-5'>
        {data.map((item, index) => (
                <div className='w-60 mr-5' key={index}>
                <div>
                    <span className='text-lg font-bold text-quick-nav-shortcut-header'>RF {item.rf}</span>
                </div>
                <div>
                    <span className='text-xs text-slate-800 font-medium'>{item.status}</span>
                </div>
                {index===0 && <div className="relative rounded-t-sm mt-4 hover:scale-y-150 rounded-b-md w-full h-6 bg-[rgb(0,168,249)] transition-all duration-100 ease-out 
                hover:shadow-[0px_5px_0px_0px_rgb(5,81,151)] shadow-[0px_0px_0px_0px_rgba(109,40,217)]
                "></div>}

                {index===1 && <div className="relative rounded-t-sm mt-4 hover:scale-y-150 rounded-b-md w-full h-6 bg-amber-500 transition-all duration-100 ease-out 
                hover:shadow-[0px_5px_0px_0px_rgb(69,26,3)] shadow-[0px_0px_0px_0px_rgba(109,40,217)]
                "></div>}

                {index===2 && <div className="relative rounded-t-sm mt-4 hover:scale-y-150 rounded-b-md w-full h-6 bg-stone-500 transition-all duration-100 ease-out 
                hover:shadow-[0px_5px_0px_0px_rgb(28,25,23)] shadow-[0px_0px_0px_0px_rgba(109,40,217)]
                "></div>}

                {index===3 && <div className="relative rounded-t-sm mt-4 hover:scale-y-150 rounded-b-md w-full h-6 bg-green-500 transition-all duration-100 ease-out 
                hover:shadow-[0px_5px_0px_0px_rgb(5,46,22)] shadow-[0px_0px_0px_0px_rgba(109,40,217)]
                "></div>}
                
                </div>
            ))
        }
    </div>
  )
}

export default Stats