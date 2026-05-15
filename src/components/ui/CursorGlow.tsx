import { useEffect, useRef } from "react";

const GLOW_SIZE = 220;
const GLOW_OFFSET = GLOW_SIZE / 2;

function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.innerWidth < 768) return;

        const moveGlow = (event: MouseEvent) => {
            if (!glowRef.current) return;

            glowRef.current.style.transform = `
        translate(
          ${event.clientX - GLOW_OFFSET}px,
          ${event.clientY - GLOW_OFFSET}px
        )
      `;
        };

        window.addEventListener("mousemove", moveGlow);

        return () => {
            window.removeEventListener("mousemove", moveGlow);
        };
    }, []);

    if (window.innerWidth < 768) return null;

    return <div ref={glowRef} className="cursor-glow" />;
}

export default CursorGlow;
