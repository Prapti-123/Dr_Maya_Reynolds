"use client";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function Reveal({ children, width = "fit-content", className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className={className} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.20 }}
                className="h-full"
            >
                {children}
            </motion.div>
        </div>
    );
}
