export type ClassNameValue = Parameters<typeof twMerge>[0]

export function useClasses(
  classes: ClassNameValue,
) {
  const attrs = useAttrs()

  return twMerge(
    classes,
    attrs.class as ClassNameValue,
  )
}
