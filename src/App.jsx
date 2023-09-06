import './styles.css'
import React from 'react'
import { BiMoon } from 'react-icons/bi'
import { AiFillGithub } from '../node_modules/react-icons/ai'
import Card from './components/Card'
import ContactForm from './components/ContactForm'


function App() {

  const [darkMode, setDarkMode] = React.useState(true)

  return (
    <div className={darkMode ? 'bg-slate-900' : 'bg-transparent'}>
      <nav className={`h-20 z-20 sticky top-0 shadow-md flex items-center px-5 ${darkMode ? 'bg-slate-900 shadow-sm shadow-slate-100' : 'bg-gray-100'}`}>
        <div className={`text-2xl select-none ml-10 mr-auto ${darkMode ? 'text-white' : ''}`}>
          My Portfolio
        </div>
        {darkMode ? (
          <>
            <a href="https://github.com/Alfoncae" target="_blank" attribute>
              <AiFillGithub
              size='30px'
              stroke='1rem'
              color='white'
              />
            </a>
            <BiMoon
              className='hover:cursor-pointer ml-10'
              onClick={() => setDarkMode(!darkMode)}
              size='30px'
              stroke='1rem'
              color='white'
            />
          </>
        ) : (
          <>
            <a href="https://github.com/Alfoncae" target="_blank" attribute>
              <AiFillGithub 
              size='30px'
              stroke='1rem'
              />
            </a>
            <BiMoon
              className='hover:cursor-pointer ml-10'
              onClick={() => setDarkMode(!darkMode)}
              size='30px'
              stroke='1rem'
              color='black'
            />
          </>
        )}
      </nav>
      <div className='p-12 md:flex justify-center items-center md:text-left text-center xl:justify-between'>
        <div className={`text-5xl select-none md:mb-0 mb-12 xl:ml-10 text-cyan-900 ${darkMode ? 'text-white' : ''}`}>Alfonso Bran Mandujano</div>
        <div className={`text-2xl text-cyan-800 hover:bg-slate-300 max-w-5xl border p-6 shadow-lg bg-slate-200 ${darkMode ? 'bg-slate-900 text-white hover:bg-slate-800' : ''}`}>I am a new up an coming frontend developer learning and creating websites using html, css, javascript and react.</div>
      </div>

      <div className='p-12 md:flex gap-6 justify-center items-center md:text-left text-center xl:justify-around'>
        <div className={`text-2xl text-cyan-800 hover:bg-slate-300 max-w-5xl border mb-12 p-6 shadow-lg bg-slate-200 ${darkMode ? 'bg-slate-900 text-white hover:bg-slate-800' : ''}`}>
          I've completed courses such as CS50x and CS50w.
        </div>
        <div className={`text-2xl text-cyan-800 hover:bg-slate-300 max-w-5xl border p-6 shadow-lg bg-slate-200 ${darkMode ? 'bg-slate-900 text-white hover:bg-slate-800' : ''}`}>
          CS50w includes projects I've completed you can view a demo video below
        </div>
      </div>

      <div className={`p-12 md:flex gap-8 flex-wrap justify-center ${darkMode ? 'text-white' : ''}`}>
        <div className='text-center'>
          <div className='text-2xl mb-3'>
            Mail project
          </div>
          <Card darkMode={darkMode}video='videos/mail.mov'></Card>
        </div>
        <div className='text-center'>
          <div className='text-2xl mb-3'>
            Commerce project
          </div>
          <Card darkMode={darkMode}video='videos/commerce.mov'></Card>
        </div>
        <div className='text-center'>
          <div className='text-2xl mb-3'>
            Money Manager project
          </div>
          <Card darkMode={darkMode}video='videos/manager.mp4'></Card>
        </div>
        <div className='text-center'>
          <div className='text-2xl mb-3'>
            Network project
          </div>
          <Card darkMode={darkMode}video='videos/network.mp4'></Card>
        </div>
        <div className='text-center'>
          <div className='text-2xl mb-3'>
            Todo list project
          </div>
          <Card darkMode={darkMode}video='videos/tasks.mp4'></Card>
        </div>
        <div className="p-6 flex-col sm:w-2/3">
            <div className='text-center text-4xl my-10'>
              Contact Me
            </div>
            <ContactForm darkMode={darkMode}/>
        </div>
      </div>
    </div>
  )
}

export default App
