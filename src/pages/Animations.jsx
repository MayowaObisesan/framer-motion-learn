import {motion} from "framer-motion"
import {useRef} from "react";

export const AnimComponents = () => (
    <motion.div
        className="box"
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
        }}
    />
)

export const AnimButtons = () => (
    <motion.button
        className=""
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
    >
        Click me
    </motion.button>
)


export const AnimDrag = () => {
    const constraintsRef = useRef(null);

    return (
        <div className="example-container">
            <motion.div className="drag-area" ref={constraintsRef}/>
            <motion.div drag dragConstraints={constraintsRef}/>
        </div>
    );
};