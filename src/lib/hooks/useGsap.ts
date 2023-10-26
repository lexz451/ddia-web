import { gsap } from 'gsap';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useGsapWithContext = (fn: (gsap: GSAP, ctx: gsap.Context) => void) => {
    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context((_) => {
            fn(gsap, _);
        })
        return () => ctx.revert(); 
    }, [fn])
    return null;
}