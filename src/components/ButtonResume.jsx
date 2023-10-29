const ButtonResume = () => {
    const handleButtonClick = () => {
      const nuevaURL = 'https://joel-uzcategui.com/files/Joel_Uzcategui_Resume_11_2023.pdf';
      
      window.open(nuevaURL, '_blank');
    };

    return (
        <div className="group">
          <button
            className="group w-full md:w-72 transition-all 
            duration-150 bg-blue-600 text-white border-b-8 
            border-b-blue-600 rounded-lg group-hover:border-t-8 
            group-hover:border-b-0 group-hover:bg-blue-600 
            group-hover:border-t-blue-600 group-hover:shadow-lg"
            onClick={handleButtonClick}
          >
            <div
              className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-600"
            >
              Download Resume
            </div>
          </button>
        </div>
      );
}

export default ButtonResume;