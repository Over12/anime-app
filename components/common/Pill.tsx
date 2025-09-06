export default function Pill({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`border-2 px-2 py-1 rounded-md capitalize ${className}`}>{children}</span>
  )
}
