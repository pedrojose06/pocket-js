import { twMerge } from 'tailwind-merge'

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={twMerge(
        'font-medium text-sm tracking-tight leading-normal',
        props.className
      )}
    />
  )
}
