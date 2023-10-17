import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useGsapWithContext = (fn: (gsap: GSAP, ctx: gsap.Context) => void) => {
    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context((_) => {
            fn(gsap, _);
        })
        return () => ctx.revert(); 
    }, [fn])
    return null;
}