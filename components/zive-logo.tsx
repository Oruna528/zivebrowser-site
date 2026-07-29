import type { SVGProps } from 'react'

// Zive Browser のシンプルなブラウザ / 稲妻を模したロゴマーク
export function ZiveLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.35"
      />
      <path
        d="M17.5 6 9 18h6l-.5 8L23 14h-6l.5-8Z"
        fill="currentColor"
      />
    </svg>
  )
}
