import React, { useState, useEffect, useRef } from "react";

const GridLayoutWrapper = ({ children, dot = false }) => {
    const gridSize = 40;
    const glowRadius = 150;

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const updateSize = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setContainerSize({
                    width: rect.width,
                    height: rect.height
                });
            }
        };

        // Initial calculation
        updateSize();

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", updateSize);

        // Observe container size changes
        const resizeObserver = new ResizeObserver(updateSize);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", updateSize);
            resizeObserver.disconnect();
        };
    }, []);

    const cols = Math.ceil(containerSize.width / gridSize) + 1;
    const rows = Math.ceil(containerSize.height / gridSize) + 1;

    const getDistance = (cellX, cellY) => {
        if (!containerRef.current) return glowRadius + 1;

        const containerRect = containerRef.current.getBoundingClientRect();
        const dx = cellX - (mousePos.x - containerRect.left);
        const dy = cellY - (mousePos.y - containerRect.top);
        return Math.sqrt(dx * dx + dy * dy);
    };

    const getCellStyle = (col, row) => {
        const cellX = col * gridSize + gridSize / 2;
        const cellY = row * gridSize + gridSize / 2;
        const distance = getDistance(cellX, cellY);

        if (distance > glowRadius) {
            return { opacity: 0 };
        }

        const intensity = 1 - distance / glowRadius;

        return {
            opacity: intensity * 0.8,
            border: ` ${dot ? "0.2px" : "0.02px"} solid transparent`,
            // borderImage: `linear-gradient(90deg, #3b82f6) ${dot ? "" : 1}`,
            borderImage: `linear-gradient(90deg, #3b82f6, #8b5cf6) ${dot ? "" : 1}`,

        };
    };

    return (
        <div ref={containerRef} className="relative w-full min-h-screen bg-transparent overflow-hidden">
            {/* Static Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(75, 85, 99, 0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(75, 85, 99, 0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: `${gridSize}px ${gridSize}px`,
                    width: containerSize.width,
                    height: containerSize.height
                }}
            />

            {/* Interactive Glow Grid */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: containerSize.width,
                    height: containerSize.height
                }}
            >
                {Array.from({ length: rows }).map((_, row) =>
                    Array.from({ length: cols }).map((_, col) => (
                        <div
                            key={`${row}-${col}`}
                            className="absolute transition-opacity duration-150 ease-out"
                            style={{
                                left: col * gridSize,
                                top: row * gridSize,
                                width: gridSize,
                                height: gridSize,
                                ...getCellStyle(col, row),
                            }}
                        />
                    ))
                )}
            </div>

            {/* CONTENT SLOT */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
};

export default GridLayoutWrapper;