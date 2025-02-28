import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Home = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    if (!text1Ref.current || !text2Ref.current || !text3Ref.current) return;

    gsap.set([text1Ref.current, text2Ref.current, text3Ref.current], {
      opacity: 0,
      y: 50,
    });

    const timeline = gsap.timeline({ defaults: { duration: 2 } });

    timeline
      .to(text1Ref.current, {
        y: 0,
        opacity: 1,
        ease: "power3.out",
      })
      .to(
        text2Ref.current,
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        text3Ref.current,
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <>
      <div className="relative">
        <img
          src="/images/main_image_1.jpg"
          alt="main_image_1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-end justify-start mr-10 mt-40">
          <span ref={text1Ref} className="text-white text-5xl font-bold">
            사랑하는 사람과 함께 했던 추억
          </span>
          <span ref={text2Ref} className="text-white text-5xl font-bold">
            Missing People에서
          </span>
          <span ref={text3Ref} className="text-white text-5xl font-bold">
            찾아드리겠습니다.
          </span>
        </div>
      </div>
    </>
  );
};
