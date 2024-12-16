import Footer from '../components/Footer'
import Header from '../components/Header'

function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <h1>{children}</h1>
      </main>
      <Footer />
    </div>
  )
}

export default CustomerLayout
