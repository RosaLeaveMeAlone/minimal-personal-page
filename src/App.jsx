import WordAnimation from './components/WordAnimation';
import ButtonResume from './components/ButtonResume';
import Footer from './components/Footer';

function App() {



  return (
    <>
      {/* Hero section */}
      <section>
      {/* sisifo-background.webp */}
          <div className="flex items-center justify-center min-h-screen bg-black custom-background">
              <div className="relative flex flex-col m-6 space-y-6 justify-center">
                  <div className="text-center space-y-8">
                      <h1 className="text-white text-6xl">Joel Uzcategui</h1>
                      <h2 className="text-blue-700 text-4xl">Software Engineer with Devops Expertise</h2>
                      <p className="text-gray-200 text-2xl">Over 4 Years of Experience</p>
                      <ButtonResume />
                      <WordAnimation  />
                      <div className="w-full border-b mt-10"></div>
                  </div>
              </div>
          </div>
      </section>

      {/* skills description section */}
      <section>
        <div className='flex items-center justify-center h-80 bg-black'>
          <div className="container mx-auto px-3">
            <h2 className="text-4xl mb-6 font-bold text-center text-white">Skills</h2>
            <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
              There is a diverse range of technologies that I have mastered throughout my career.
            </p>
          </div>
        </div>
      </section>
      {/* skills box */}
      <section>
        <div className="flex flex-col md:flex-row md:space-x-7 items-center justify-center pb-6 bg-black">
          {/* box1 */}
          <div
            className="relative flex flex-col mt-10 w-80vw p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3"
          >
            <h2
              className="pt-6 text-xl font-bold text-center capitalize md:text-left"
            >
              Current Knowledge
            </h2>
            {/* Make a list with tailwind with those technologies: React, NodeJS, Docker Kubernetes */}
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-2">
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-php-plain text-2xl"></i> PHP
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-javascript-plain text-2xl"></i> Javascript
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-typescript-plain text-2xl"></i> Typescript
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-laravel-plain text-2xl"></i> Laravel
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-nodejs-plain text-2xl"></i> NodeJS
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-nestjs-plain text-2xl"></i> NestJS
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-amazonwebservices-plain-wordmark text-2xl"></i> AWS
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-docker-plain-wordmark text-2xl"></i> Docker
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-jenkins-line text-2xl"></i> Jenkins
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-nginx-original text-2xl"></i> Nginx
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-vuejs-plain text-2xl"></i> VueJS
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-react-original text-2xl"></i> ReactJS
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-postgresql-plain text-2xl"></i> Postgresql
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-mysql-plain-wordmark text-2xl"></i> Mysql
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-microsoftsqlserver-plain-wordmark text-2xl"></i> SQL Server
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-sqlite-plain-wordmark text-2xl"></i> SQLite
              </li>
              <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
                <i className="devicon-mongodb-plain-wordmark text-2xl"></i> MongoDB
              </li>
            </ul>
          </div>

      {/* box2 */}
        <div
          className="relative flex flex-col mt-10 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3"
        >
          <h2
            className="pt-6 text-xl font-bold text-center capitalize md:text-left"
          >
            Next Steps
          </h2>
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-2">
            <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
              <i className="devicon-kubernetes-plain-wordmark text-2xl"></i> Kubernetes
            </li>
            <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
              <i className="devicon-terraform-plain text-2xl"></i> Terraform
            </li>
            <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
              <i class="devicon-dart-plain"></i> Dart
            </li>
            <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
              <i class="devicon-flutter-plain"></i> Flutter
            </li>
            <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
              <i className="devicon-python-plain text-2xl"></i> Python
            </li>
            <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
              <i className="devicon-ansible-plain text-2xl"></i> Ansible
            </li>
            <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
              <i className="devicon-prometheus-original text-2xl"></i> Prometheus
            </li>
            <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
              <i className="devicon-nextjs-plain text-2xl"></i> NextJS
            </li>
            <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
              <i className="devicon-svelte-plain text-2xl"></i> Svelte
            </li>
            <li className="px-2 py-1 my-1 text-xs font-bold bg-veryDarkViolet rounded-full md:mx-1">
              <i className="devicon-cplusplus-plain text-2xl"></i> C++
            </li>
          </ul>
        </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App

