"use client";
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'rounded-xl px-4 py-2 text-sm',
        variant === 'primary' && 'bg-charcoal text-beige dark:bg-beige dark:text-charcoal',
        variant === 'secondary' && 'bg-white text-charcoal border border-black/10 dark:bg-charcoal dark:text-beige dark:border-white/10',
        variant === 'ghost' && 'bg-transparent text-inherit',
        className
      )}
      {...props}
    />
  );
}
