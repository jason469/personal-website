"use client"

import {AnimatePresence, motion} from "framer-motion";

export const BounceInAnimation = ({isVisible, children}: any) => {
    return (
        <>
            <AnimatePresence>
                {(isVisible &&
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{delay: 0.25}}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
