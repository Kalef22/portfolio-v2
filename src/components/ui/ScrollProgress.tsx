import { useEffect, useState } from "react";

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let animationFrame = 0;

        const updateProgress = () => {
            const scrollableHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            setProgress(
                scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0,
            );
        };

        const handleScroll = () => {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(updateProgress);
        };

        updateProgress();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div
            className="scroll-progress"
            style={{ width: `${progress * 100}%` }}
        />
    );
}

export default ScrollProgress;
