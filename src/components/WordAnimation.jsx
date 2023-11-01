import { useRef, useEffect } from 'react';
import anime from 'animejs';

const WordAnimation = () => {
  const textContainerRef = useRef(null);

  const words = [
    'PHP',
    'JavaScript',
    'AWS',   
    'Jenkins', 
    'Docker',
    'ReactJS',
    'Laravel',
    'NodeJS',
    'VueJS',
  ];
  const animationDuration = 300;
  const delay = 2000;

  useEffect(() => {
    const changeTextWithAnimation = () => {
      const currentIndex = words.indexOf(textContainerRef.current.innerText);
      const nextIndex = (currentIndex + 1) % words.length;
      const nextWord = words[nextIndex];

      anime({
        targets: textContainerRef.current,
        translateY: ["0", "-20px"],
        opacity: [1, 0],
        easing: "easeInOutSine",
        duration: animationDuration,
        delay: delay,
        complete: (anim) => {
          textContainerRef.current.innerText = nextWord;
          anime({
            targets: textContainerRef.current,
            translateY: ["20px", "0"],
            opacity: [0, 1],
            easing: "easeInOutSine",
            duration: animationDuration,
            complete: changeTextWithAnimation,
          });
        },
      });
    };

    changeTextWithAnimation();
  }, []);

  return <div className='text-white text-xl select-none' ref={textContainerRef}>{words[0]}</div>;
};

export default WordAnimation;