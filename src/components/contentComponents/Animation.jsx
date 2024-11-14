import React, { useEffect, useState } from "react";
import "../../App.css"; // Import the CSS file

const AnimatedImage = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        setIsAnimated(true);
    }, []);

    return (
        <div className={`image-container ${isAnimated ? "animate" : ""}`}>
            <svg
                width="80"
                height="80"
                viewBox="0 0 220 120"
                xmlns="http://www.w3.org/2000/svg">
                <polygon points="60,30 90,90 30,90" >
                    <animateTransform
                        color="white"
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 30 100"
                        to="260 20 0"
                        dur="3s"
                        repeatCount="indefinite" />
                </polygon>
            </svg>

        </div>
    );
};

export default AnimatedImage;
