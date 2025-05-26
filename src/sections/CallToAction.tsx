"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    className="flex flex-none gap-16 text-7xl md:text-8xl font-medium whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">&#10038;</span>
                            <span>Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
