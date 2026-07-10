import React from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className, ...props }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
