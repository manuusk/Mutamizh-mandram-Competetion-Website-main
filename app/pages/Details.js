import React from "react";

export default function Details() {
  return (
    <section
      className="min-h-[50vh] relative w-screen container mx-auto py-12"
      id="details"
    >
      <h1 className="text-4xl font-bold text-center my-10">கால அட்டவணை</h1>

      <ol className="items-center sm:flex w-screen container mx-auto px-6 justify-between md:px-0">
        {[
          {
            title: "பதிவு துவக்கம்",
            date: "12.07.2024",
          },
          {
            title: "கட்டுரை சமர்ப்பிக்கும் தொடக்க தேதி",
            date: "15.08.2024",
          },
          {
            title: "பதிவு மற்றும் கட்டுரை சமர்ப்பிக்கும் கடைசி தேதி",
            date: "30.08.2024",
          },
          {
            title: "போட்டியின் முடிவு அறிவித்தல்",
            date: "15.09.2024",
          },
          {
            title: "பரிசளிப்பு விழா",
            date: "செப்டம்பர் 2024",
          },
        ].map((item, index) => (
          <li
            key={index}
            className="relative mb-6 sm:mb-0 border md:border-none p-3 md:p-0 rounded-md"
          >
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-amber-900 dark:bg-amber-900 sm:ring-8 dark:ring-amber-600 shrink-0"></div>
              <div className="sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <time className="block mb-2 text-lg font-semibold leading-none text-gray-900 dark:text-gray-900">
                <br></br>
                {item.date}
              </time>
            </div>
          </li>
        ))}
      </ol>

      <div
        className="flex flex-col md:flex-row border shadow rounded-md justify-between items-center p-4 my-20 bg-slate-900 text-slate-200"
      >
        <h1
          className="text-3xl font-bold text-center my-12 md:my-0 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
        >
          பதிவு செய்வதற்கான மென்படிவம் &rarr;
        </h1>

        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-3 text-2xl transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfeIVl1OVQhwxd5eNKCv7VDKmbfar-hLCVJQ-lo_gcowrz6mA/viewform"
              target="_blank"
            >
              பதிவு செய்யுங்கள்
            </a>
          </span>

        </button>


      </div>
    </section>
  );
}
