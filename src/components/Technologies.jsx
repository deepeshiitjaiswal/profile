import { RiReactjsLine } from "react-icons/ri";
import { SiMicrosoftazure, SiGooglecloud, SiTerraform, SiPulumi, SiPython, SiApachekafka, SiRedis, SiGrafana, SiPrometheus, SiAnsible } from 'react-icons/si';
import { FaAws, FaTerminal } from 'react-icons/fa'; // For a generic cloud icon (if needed)
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -5 },
    animate:{
        y: [5, -5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});
const iconVariantsX = (duration) => ({
    initial: { x: -5 },
    animate:{
        x: [5, -5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div id="tech" className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-white-100"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMicrosoftazure className="text-7xl text-white-100"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGooglecloud className="text-7xl text-white-100"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTerraform className="text-7xl text-white-100"/>
            </motion.div>
            
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 pt-2 pb-2">
            <motion.div 
            variants={iconVariantsX(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPulumi className="text-7xl text-gray-50"/>
            </motion.div>
            <motion.div variants={iconVariantsX(2)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl text-gray-50"/>
            </motion.div>
            <motion.div variants={iconVariantsX(3)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaTerminal title="Bash" className="text-7xl text-gray-50"/>
            </motion.div>
            <motion.div variants={iconVariantsX(2)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiApachekafka className="text-7xl text-gray-50"/>
            </motion.div>
            <motion.div variants={iconVariantsX(1.5)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiRedis className="text-7xl text-gray-50"/>
            </motion.div>
            
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGrafana className="text-7xl text-white-100"/>
            </motion.div>
            <motion.div variants={iconVariants(1.5)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPrometheus className="text-7xl text-white-100"/>
            </motion.div>
            <motion.div variants={iconVariants(3)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAnsible className="text-7xl text-white-100"/>
            </motion.div>
            <motion.div variants={iconVariants(1)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-white-100"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies;