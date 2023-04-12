import React, { useState, useEffect } from "react";
import Particles from "react-particles";
import Particle from "./Particle";

const AboutMe = () => {
    const [particlesInit, particlesLoaded, particleOptions] = Particle();
    const [text, setText] = useState("");
    const [typingIndex, setTypingIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [words, setWords] = useState(["Full stack", "MERN"]);

    useEffect(() => {
        const typingDelay = 1000;
        const deletingDelay = 1050;
        const nextWordDelay = 1500;

        const typing = setInterval(() => {
            const currentWord = words[typingIndex % words.length];

            if (!isDeleting) {
                setText(currentWord.slice(0, text.length + 1));
                if (text === currentWord) {
                    setIsDeleting(true);
                    setTimeout(() => setIsDeleting(false), nextWordDelay);
                }
            } else {
                setText(currentWord.slice(0, text.length - 1));
                if (text === "") {
                    setTypingIndex((prev) => prev + 1);
                    setIsDeleting(false);
                }
            }
        }, isDeleting ? deletingDelay : typingDelay);

        return () => clearInterval(typing);
    }, [text, isDeleting, typingIndex, words]);

    return (
        <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 w-full h-full">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={particleOptions}
                />
            </div>

            <div className="w-full h-full flex items-center justify-center ">
                <div className="z-10 relative text-xl text-slate-300 text-center px-[10vw]">
                    <h1 >Hi My name is Ram Kumar!</h1>
                    <h1>{text}</h1>
                    <p>Yo, what's up peeps! I'm Ram Kumar, a kickass full stack developer from India. I work with JS and MERN stack, but let's be real, I'm basically a wizard who can make anything happen with code. And when I'm not busy hacking away at my keyboard, I'm busy binge-watching some crazy fun stuff on the internet.

                        But hey, don't be fooled by my laid-back attitude, I'm all about automating things and making my life easier. Who wants to waste time on boring repetitive tasks, am I right?

                        So if you're looking for a chill dude who can also whip up some epic websites and apps, hit me up!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
