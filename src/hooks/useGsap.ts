import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const useGsapWithContext = (fn: (gsap: GSAP, ctx: gsap.Context) => void) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context((_) => {
            fn(gsap, _);
        })
        return () => ctx.revert(); 
    }, [fn])
    return null;
}