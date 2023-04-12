import { useCallback } from "react";
import { loadFull } from "tsparticles";


const Particle = () => {

    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);
    
    const particleOptions = {
        background: {
            color: {
                value: '#000000',
            },
        },
        particles: {
            color: {
                value: '#8C7C62',
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: 3,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 700,
                },
                value: 80,
            },
            move: {
                enable: true,
                speed: 6,
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: {
                    value: '#8C7C62',
                },
            },
        },
        interactivity: {
            detectsOn: 'canvas',
            events: {
                onHover: {
                    enable: true,
                    mode: 'grab',
                },
                onClick: {
                    enable: true,
                    mode: 'repulse',
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 200,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
    
        },
    };

    return [particlesInit, particlesLoaded, particleOptions]
}

export default Particle;