function AnonymousLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="App min-h-screen flex flex-col">
      <main className="grow">
        <h1>{children}</h1>
      </main>
    </div>
  )
}

export default AnonymousLayout
