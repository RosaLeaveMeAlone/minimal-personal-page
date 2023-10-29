import WordAnimation from './components/WordAnimation';
import ButtonResume from './components/ButtonResume';
function App() {



  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="relative flex flex-col m-6 space-y-6 justify-center">
            <div className="text-center space-y-6">
                <h1 className="text-white text-6xl">Joel Uzcategui</h1>
                <h2 className="text-blue-700 text-4xl">Software Engineer with Devops Expertise</h2>
                <ButtonResume />
                <WordAnimation  />
            </div>
        </div>
    </div>
    </>
  )
}

export default App
