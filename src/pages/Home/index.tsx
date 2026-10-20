import { useEffect, useRef } from "preact/hooks";
import { gsap } from "gsap";
import blob from "../../assets/blob.svg";
import "./style.css";

export function Home() {
  const blobRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = blobRef.current;
    if (!image) return;

    const tween = gsap.to(image, {
      x: 18,
      y: -18,
      rotation: 12,
      scale: 1.15,
      opacity: 0.5,
      duration: 2.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => tween.kill();
  }, []);

  return (
    <div class="home">
      <a href="https://preactjs.com" target="_blank">
        <img
          ref={blobRef}
          src={blob}
          alt="Preact logo"
          height="360"
          width="360"
        />
      </a>
    </div>
  );
}
