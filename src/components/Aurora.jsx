import { cn } from "@/lib/utils"

export default function Aurora({
  className,
  colorStops = ["#0f172a", "#1e3a8a", "#7f1d1d"],
  blend = 0.5,
  amplitude = 1,
  speed = 0.6,
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className="aurora-bg"
        style={{
          "--color1": colorStops[0],
          "--color2": colorStops[1],
          "--color3": colorStops[2],
          "--blend": blend,
          "--speed": `${8 / speed}s`,
        }}
      />
    </div>
  )
}