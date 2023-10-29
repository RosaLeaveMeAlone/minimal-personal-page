import WordAnimation from './components/wordanimation';
function App() {



  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="relative flex flex-col m-6 space-y-6 justify-center">
            <div className="text-center space-y-6">
                <h1 className="text-white text-6xl">Joel Uzcategui</h1>
                <h2 className="text-blue-700 text-4xl">Software Engineer with Devops Expertise</h2>
                <div className="group">
                  <button
                    className="group w-full md:w-72 transition-all 
                    duration-150 bg-blue-600 text-white border-b-8 
                    border-b-blue-600 rounded-lg group-hover:border-t-8 
                    group-hover:border-b-0 group-hover:bg-blue-600 
                    group-hover:border-t-blue-600 group-hover:shadow-lg"
                  >
                    <div
                      className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-600"
                    >
                      Download Resume
                    </div>
                  </button>
                </div>
                <WordAnimation  />
            </div>
        </div>
    </div>
    </>
  )
}

export default App
