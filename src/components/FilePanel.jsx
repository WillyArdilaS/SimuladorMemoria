import Draggable from 'react-draggable';
import fileIcon from '../assets/File Icon.jpg'

const FilePanel = () => {
  return (
    <Draggable>
        <section>
            <article className="flex w-1/2 px-4 overflow-x-auto bg-white shadow-lg border-2 border-darkGray">
                <section className="flex p-4">
                    <article className="mr-10 animate-fade-down animate-duration-1000 animate-delay-300">
                        <button className='hover:scale-105'>
                            <img src={fileIcon} alt="Icono del archivo" id="fileIcon" className='w-24'/>
                        </button>       
                        <h3 className="text-center text-black font-paragraph"> Nombre </h3> 
                    </article>
                </section>
            </article>

            <button className='absolute bottom-0 left-1/2 -ml-0.5 bg-white border-2 border-darkGray'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-1 absolute right-0 top-1">
                    <path strokeL-linecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <img src={fileIcon} alt="Icono del archivo" id="fileIcon" className='w-14 p-2 pt-4 hover:scale-105'/>
            </button>  
        </section>
    </Draggable>
  )
}

export default FilePanel