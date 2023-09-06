

export default function Card({video, darkMode}){

    return (
        <video 
            className={`mb-6 z-10 hover:cursor-pointer ${darkMode ? '' : 'border-slate-800 border-2'}`}
            controls
            muted
            controlsList="play pause nosound"
            width='650px'>    

            <source src={video} type='video/mp4' />
        </video>
    )
}