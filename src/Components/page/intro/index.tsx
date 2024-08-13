import { useState, useRef, useEffect } from "react";
import { Container } from "./styled";


export default function Intro() {
    const [isInViewport, setIsInViewport] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return; // 요소가 아직 준비되지 않은 경우 중단

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 요소가 뷰포트에 나타났을 경우
                    setIsInViewport(true);
                } else {
                    // 요소가 뷰포트를 벗어난 경우
                    setIsInViewport(false);
                }
            });
        };

        const options = { root: null, rootMargin: "0px", threshold: 0 };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(ref.current); // 요소 관찰 시작

        return () => {
            observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
        };
    }, []);

    return (
        <>
            <Container >
                <h1>asd</h1>
            </Container >
            <Container className={isInViewport ? "frame-in" : ""} ref={ref}>
                <h1>안녕하세요</h1>
            </Container>
        </>
    );
}
