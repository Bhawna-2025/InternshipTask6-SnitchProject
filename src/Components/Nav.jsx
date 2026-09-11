const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between border-b border-gray-200 bg-white px-10">
            <a className="flex items-center gap-2 transition-transform duration-300 hover:scale-110" href="#" aria-label="Open menu">
                <i className="ri-menu-fill text-2xl" ></i>
            </a>
            <div id="logo">
                <img src="/logo.png" alt="" />
            </div>
            <button className="cursor-pointer transition-transform duration-300 hover:scale-110">
                <i className="ri-search-line text-2xl "></i>
            </button>
        </nav>
    )
}

export default Nav
