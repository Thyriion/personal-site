import React from 'react';
import { FaGithub, FaChrome } from 'react-icons/fa';
import { GrGamepad } from 'react-icons/gr';

function Referenzen() {
    return (
        <div className="flex flex-col mx-auto w-fit">
            <div className="w-fit text-2xl my-5">
                <a
                    href="https://github.com/Thyriion"
                    target="_blank"
                    className="flex justify-center items-center gap-5 hover:scale-105 hover:text-gray-100"
                    rel="noreferrer">
                    <FaGithub />
                    Quellcode
                </a>
            </div>
            <div className="w-fit text-2xl my-5">
                <a
                    href="https://www.selectline.de/jobs/"
                    target="_blank"
                    className="flex justify-center items-center gap-5 hover:scale-105 hover:text-gray-100"
                    rel="noreferrer">
                    <FaChrome />
                    SelectLine Jobsseite
                </a>
            </div>
            <div className="w-fit text-2xl my-5">
                <a
                    href="https://hangman-thyriion.vercel.app/"
                    target="_blank"
                    className="flex justify-center items-center gap-5 hover:scale-105 hover:text-gray-100"
                    rel="noreferrer">
                    <GrGamepad />
                    Hangman mit React und Typescript
                </a>
            </div>
            <div className="w-fit text-2xl my-5">
                <a
                    href="https://feedback-ui-ks.netlify.app/"
                    target="_blank"
                    className="flex justify-center items-center gap-5 hover:scale-105 hover:text-gray-100"
                    rel="noreferrer">
                    <FaChrome />
                    Feedback App
                </a>
            </div>
            <div className="w-fit text-2xl my-5">
                <a
                    href="https://github-finder-thyriion.vercel.app/"
                    target="_blank"
                    className="flex justify-center items-center gap-5 hover:scale-105 hover:text-gray-100"
                    rel="noreferrer">
                    <FaChrome />
                    Github Finder App
                </a>
            </div>
        </div>
    );
}

export default Referenzen;
