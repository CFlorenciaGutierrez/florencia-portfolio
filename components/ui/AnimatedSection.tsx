'use client';

import { motion, useReducedMotion } from 'framer-motion';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function AnimatedSection({
  children,
  className,
  id
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.55, ease: 'easeOut' }
      }
    >
      {children}
    </motion.section>
  );
}
