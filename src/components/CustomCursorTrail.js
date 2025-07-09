import { useEffect } from "react";

const CustomCursorTrail = () => {
  useEffect(() => {
    const wrapper = document.createElement("div");
    wrapper.className =
      "pointer-events-none fixed top-0 left-0 w-full h-full z-50";
    document.body.appendChild(wrapper);

    const handleMouseMove = (e) => {
      const dot = document.createElement("div");
      dot.className =
        "w-2 h-2 bg-purple-900 rounded-full absolute opacity-50";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      wrapper.appendChild(dot);

      setTimeout(() => {
        dot.style.transition = "opacity 0.5s ease";
        dot.style.opacity = 0;
      }, 20);

      setTimeout(() => {
        dot.remove();
      }, 700);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      wrapper.remove();
    };
  }, []);

  return null;
};

export default CustomCursorTrail;
