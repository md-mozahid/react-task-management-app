const Layout = ({ children }) => {
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">{children}</div>
      </section>
    </>
  )
}

export default Layout
