import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react"
import { useState, useRef } from "react"

function AnimatedMenuItem({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <DropdownMenuItem
      onClick={onClick}
      asChild
    >
      <div
        ref={itemRef}
        className="relative overflow-hidden cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="pointer-events-none absolute h-24 w-24 rounded-full bg-linear-to-r from-blue-400/50 to-purple-400/50 blur-xl"
              style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
        <span className="relative z-10">{children}</span>
      </div>
    </DropdownMenuItem>
  )
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animation for smooth following
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          ref={buttonRef}
          variant="outline"
          size="icon"
          className="relative overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="pointer-events-none absolute h-32 w-32 rounded-full bg-linear-to-r from-blue-400/30 to-purple-400/30 blur-xl"
                style={{
                  x: springX,
                  y: springY,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ scale: 0.5, rotate: 90, }}
                animate={{ scale: 1, rotate: 0,  }}
                exit={{ scale: 0.5, rotate: -90, opacity: 0}}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ scale: 0.5, rotate: -90, }}
                animate={{ scale: 1, rotate: 0,  }}
                exit={{ scale: 0.5, rotate: 90, opacity: 0}}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15 }}
        >
          <AnimatedMenuItem onClick={() => setTheme("light")}>
            Light
          </AnimatedMenuItem>
          <AnimatedMenuItem onClick={() => setTheme("dark")}>
            Dark
          </AnimatedMenuItem>
          <AnimatedMenuItem onClick={() => setTheme("system")}>
            System
          </AnimatedMenuItem>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
