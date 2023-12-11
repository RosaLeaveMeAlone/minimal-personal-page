
const Footer = () => {
    const iconStyle = {
        fontSize: '2rem',
      };
  return (
    <footer className="bg-zinc-900">
        <div className="container max-w-6xl py-10 mx-auto">
            <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                <div className="flex flex-col items-center space-y-8 mme:items-start md:space-y-4">
                    <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                        <div className="h-10 group">
                            <a href="https://github.com/RosaLeaveMeAlone/minimal-personal-page">Link To This Website Repository</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                        <div className="h-10 group">
                            <a href="https://github.com/RosaLeaveMeAlone/digital-design-tailwind-svelte">Some Tailwind Template</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                        <div className="h-10 group">
                            <a href="https://github.com/RosaLeaveMeAlone/dotfiles">Dotenvs</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-between space-y-4 text-gray-100">
                    <div className="flex items-center justify-center space-x-4 mx-auto md:mx-0 md:justify-end">
                        <div className="h-8 group">
                            <a href="https://www.linkedin.com/in/joel-uzcategui-44497722a/" aria-label="LinkedIn">
                            <i className="devicon-linkedin-plain" style={iconStyle}></i>
                            </a>
                        </div>
                        <div className="h-8 group">
                            <a href="https://github.com/RosaLeaveMeAlone" aria-label="GitHub">
                            <i className="devicon-github-original" style={iconStyle}></i>
                            </a>
                        </div>
                    </div>
                    <div className="font-bold">
                        Joeluzcategui102@gmail.com
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;