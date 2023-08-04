export default function CardWrapper({ children, width, height }) {
  return (
    <div className={`border-[1.5px] relative border-primary rounded-2xl px-6 py-12 flex flex-col items-start justify-between ${width} ${height}`}>
      {children}
    </div>
  )
}
