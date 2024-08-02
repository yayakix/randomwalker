import usePageStore, { PageTypes } from '../stores/pageStore';

const Navbar = () => {
    const { updatePage } = usePageStore();

    return <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                <a href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap ">Nature of Code</span>
                </a>
                <br></br>
                <button onClick={() => updatePage(PageTypes.HOME)}>
                    <span className="self-center text-xl font-semibold whitespace-nowrap ">HOME</span>
                </button>

                <button onClick={() => updatePage(PageTypes.RANDOM_WALKER)}>
                    <span className="self-center text-xl font-semibold whitespace-nowrap ">RANDOM WALKER</span>
                </button>
            </div>
        </nav>
    </header>
}

export default Navbar