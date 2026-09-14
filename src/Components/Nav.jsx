const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between border-b border-gray-200 bg-white md:px-10 px-5">
            <a className="flex items-center gap-2 transition-transform duration-300 hover:scale-110" href="#" aria-label="Open menu">
                <i className="ri-menu-fill md:text-2xl" ></i>
            </a>
            <div id="logo">
                <img src="/logo.png" alt="" className="md:h-16 h-10"/>
            </div>
            <button className="cursor-pointer transition-transform duration-300 hover:scale-110">
                <i className="ri-search-line md:text-2xl "></i>
            </button>
        </nav>
    )
}

export default Nav
