import '@app/globals.css'


export default function Card(
  title: string,
  { children }: Readonly<{ children: React.ReactNode}>,
) {
  return (
    <div className="m-auto">
      {title}
      {children}
    </div>
  )
}
