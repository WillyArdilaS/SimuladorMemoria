import { useState } from 'react';
import Draggable from 'react-draggable';

const Performance = () => {
    const [extended, setExtended] = useState(true);

    return (
      <Draggable>
        {extended == true ? (
            <article className="w-1/4 bg-white shadow-lg">
                <div className="h-7 border-x-2 border-y-2 border-darkGray bg-lightGray"></div>
        
                <section className="px-2 pt-2 pb-10 border-x-2 border-b-2 border-darkGray font-paragraph flex"> 
                    <section>
                        <div className="py-2"> Notepad </div>
                        <div className="py-2"> Excel </div>
                        <div className="py-2"> Word </div>
                    </section>
            
                    <section className="w-3/4 ml-10 flex flex-col">
                        <section className="h-5 my-2.5 bg-darkGray flex">
                            <div className="w-1/4 h-full bg-blue"> </div>
                            <div className="w-1/6 h-full bg-yellow"> </div>
                        </section>
                            
                        <section className="h-5 my-2.5 bg-darkGray flex">
                            <div className="w-1/6 h-full bg-blue"> </div>
                            <div className="w-1/5 h-full bg-yellow"> </div>
                        </section>
                            
                        <section className="h-5 my-2.5 bg-darkGray flex">
                            <div className="w-1/6 h-full bg-blue"> </div>
                            <div className="w-1/12 h-full bg-yellow"> </div>
                        </section>
                    </section>
        
                    <button className="absolute right-4 bottom-0 h-6 w-6 mb-3 rounded-full border-2 border-lightGray text-lightGray flex items-center justify-center
                    hover:scale-105" onClick={() => setExtended(!extended)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </section>
            </article>
        ) : (
            <article className="w-1/4 shadow-lg ">
                <div className="h-7 border-x-2 border-y-2 border-darkGray bg-lightGray"></div>
        
                <section className="px-2 pt-2 pb-10 border-x-2 border-b-2 border-darkGray font-paragraph"> 
                    <section>
                        <div className="py-2"> Notepad </div>
                        <div className="py-2"> Excel </div>
                        <div className="py-2"> Word </div>
                    </section>
        
                    <button className="absolute right-4 bottom-0 h-6 w-6 mb-3 rounded-full border-2 border-lightGray text-lightGray flex items-center justify-center
                    hover:scale-105" onClick={() => setExtended(!extended)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </section>
            </article>
        )}
        
      </Draggable>
    )
  }

export default Performance