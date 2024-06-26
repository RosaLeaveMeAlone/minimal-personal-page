const ButtonResume = () => {
    const handleButtonClick = () => {
      const nuevaURL = 'https://pub-fc1ea49fdc67441d8e5337a1c31be4b3.r2.dev/Joel-Uzcategui.pdf';
      
      window.open(nuevaURL, '_blank');
    };

    return (
        <div className="group">
          <button
            className="group w-full md:w-72 transition-all 
            duration-150 text-white border-b-4 border
            border-b-zinc-200 rounded-lg group-hover:border-t-4 
            group-hover:border-b-0 group-hover:bg-zinc-50 
            group-hover:border-t-zinc-200 group-hover:shadow-lg
            group-hover:text-black"
            onClick={handleButtonClick}
          >
            <div
              className="px-8 py-4 duration-150 rounded-lg group-hover:bg-zinc-50"
            >
              Download Resume
            </div>
          </button>
        </div>

      );
}

export default ButtonResume;