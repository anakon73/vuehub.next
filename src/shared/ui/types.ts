export const styleVariants = ['regular', 'primary', 'dark'] as const

export type styleVariants = typeof styleVariants[number]
