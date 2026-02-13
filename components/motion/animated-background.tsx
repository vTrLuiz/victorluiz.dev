'use client'

import React, { useMemo } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const colors = [
  'rgba(45, 212, 191, 0.3)',
  'rgba(45, 212, 191, 0.15)',
  'rgba(56, 189, 248, 0.3)',
  'rgba(56, 189, 248, 0.15)',
  'rgba(99, 102, 241, 0.25)',
  'rgba(99, 102, 241, 0.12)',
]

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_80%)]" />
      <BackgroundBoxes />
    </div>
  )
}

const BackgroundBoxesCore = ({
  className,
  ...rest
}: {
  className?: string
}) => {
  const rows = new Array(50).fill(1)
  const cols = new Array(30).fill(1)

  const colorMap = useMemo(() => {
    return rows.map(() =>
      cols.map(() => colors[Math.floor(Math.random() * colors.length)])
    )
  }, [rows.length, cols.length])

  return (
    <div
      style={{
        transform:
          'translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)',
      }}
      className={cn(
        'absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4',
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className="relative h-8 w-16 border-l border-border/[0.08]"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: colorMap[i][j],
                transition: { duration: 0 },
              }}
              key={`col-${j}`}
              className="relative h-8 w-16 border-r border-t border-border/[0.08]"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-border/[0.06]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

const BackgroundBoxes = React.memo(BackgroundBoxesCore)
