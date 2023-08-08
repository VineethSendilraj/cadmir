
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="my-8 mx-12">
        {children}
      </div>
    )
  }
  