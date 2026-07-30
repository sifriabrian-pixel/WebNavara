import type { Variants } from "framer-motion";

// Variants compartidas para el patrón "fade + translateY" de scroll-reveal.
// Cuando `reduced` es true (prefers-reduced-motion), se cae a un simple fade sin desplazamiento.
export function fadeUpVariants(reduced: boolean): Variants {
  return {
    hidden: { opacity: 0, y: reduced ? 0 : 12 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0.3 : 0.6,
        delay: reduced ? 0 : i * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
}

// Igual que fadeUpVariants pero con delay más corto, para grillas con muchos items (stagger de cards).
export function fadeUpStaggerVariants(reduced: boolean, staggerStep = 0.09): Variants {
  return {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0.3 : 0.5,
        delay: reduced ? 0 : i * staggerStep,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
}
