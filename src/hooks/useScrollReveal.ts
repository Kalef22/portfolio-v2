import { useEffect } from "react";

export function useScrollREveal() {
    useEffect(() => {
        const elements = document.querySelectorAll('.reveal');

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            {
                threshold: 0.2,
            },
        );

        elements.forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, []);
}