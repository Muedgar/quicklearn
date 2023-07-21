import React, { useState } from 'react';

function Faqs() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className='bg-[#f3f2ef] flex-col justify-center items-center'>
        <div className='w-[100%] flex justify-center items-center'>
            <p className='mt-[30px] w-1/2 h-[100px] text-[#0d333f] font-bold text-[2.5em] text-center'>Frequently asked questions</p>
        </div>

<div id="accordion-collapse" data-accordion="collapse">
        {faqData.map((faq, index) => (
          <div key={index}>
            <h2>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium text-left text-black border ${
                  openAccordion === index
                    ? 'border-b-0'
                    : 'border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                } rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openAccordion === index}
                aria-controls={`accordion-collapse-body-${index}`}
              >
                <span>{faq.question}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-180 ${
                    openAccordion === index ? 'rotate-0' : 'rotate-180'
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`p-5 ${
                openAccordion === index ? 'border border-b-0' : 'hidden'
              } border-gray-200 dark:border-gray-700`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <p className="mb-2 text-black dark:text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Faqs


const faqData = [
  {
    question: 'What is QuickLearn, and how does it benefit small business owners?',
    answer:
      'QuickLearn is a cutting-edge accounting app tailored for small business owners. It streamlines accounting tasks like bookkeeping, invoicing, payroll management, and financial reporting, making them more accessible to individuals without formal accounting training. By automating these processes, QuickLearn saves valuable time and effort, empowering business owners to focus on growing their ventures and making informed financial decisions.'
  },
  {
    question: 'Is QuickLearn suitable for users with limited accounting knowledge?',
    answer: `Absolutely! QuickLearn is designed with user-friendliness in mind, making it accessible to all, regardless of their accounting expertise. The app offers a user-friendly interface and provides helpful tutorials and guides to assist users in understanding and navigating the system effortlessly. Whether you're a seasoned accountant or a business owner new to financial management, QuickLearn is the perfect tool to simplify your accounting tasks.`
    },
  {
    question: 'How does QuickLearn provide personalized insights for my business?',
    answer:
        `QuickLearn goes beyond standard accounting software by becoming your personalized financial advisor. Through intelligent analysis of your financial data, QuickLearn offers tailored insights and actionable recommendations for cost-saving opportunities, tracking profitability, and making data-driven decisions. The app empowers you to take charge of your business's financial health and drive growth with confidence.`      
},
];