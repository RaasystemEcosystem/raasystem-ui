function Navbar() {
  return (
    <nav className="p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">RABEX Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Connect Wallet</button>
      </div>
    </nav>
  )
}

export default Navbar
