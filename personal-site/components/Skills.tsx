import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const cardVariants = {
    visible: {
        opacity: 1,
        translateY: 0,
        transition: {
            when: 'beforeChildren',
        },
        delay: 0.2,
    },
    hidden: {
        opacity: 0,
        translateY: 40,
        transition: {
            when: 'afterChildren',
        },
    },
};

function Skills() {
    const skills: { name: string; progress: number }[] = [
        {
            name: 'HTML, CSS, JS',
            progress: 90,
        },
        {
            name: 'PHP',
            progress: 85,
        },
        {
            name: 'React',
            progress: 60,
        },
        {
            name: 'Wordpress',
            progress: 75,
        },
        {
            name: 'Tailwind',
            progress: 80,
        },
        {
            name: 'C#',
            progress: 45,
        },
        {
            name: 'Delphi',
            progress: 30,
        },
    ];

    const controls = useAnimation();
    const [ref, inView, entry] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible').then();
        }
    }, [controls, inView]);

    return (
        <motion.div
            className="flex gap-10 flex-wrap justify-center items-center"
            initial={'hidden'}
            animate={controls}
            variants={cardVariants}
            ref={ref}>
            {skills.map((skill, index) => {
                return (
                    <div
                        className="py-10 h-fit w-96 shadow-2xl shadow-gray-900 px-10 rounded-md border-2 border-black"
                        key={index}>
                        <h3 className="pb-10">{skill.name}</h3>

                        <div className="h-fit">
                            <CircularProgressbar
                                value={skill.progress}
                                text={`${skill.progress}%`}
                            />
                        </div>
                    </div>
                );
            })}
        </motion.div>
    );
}

export default Skills;
