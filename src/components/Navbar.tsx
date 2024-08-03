import usePageStore, { PageTypes } from '../stores/store';

const Navbar = () => {
    const { updatePage } = usePageStore() as { updatePage: (page: PageTypes) => void };

    return <header>
        <nav className="text-white underline border-gray-200 px-4 lg:px-6 py-2.5 ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl flex-col">
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
                <button onClick={() => updatePage(PageTypes.RANDOM_GAUSSIAN)}>
                    <span className="self-center text-xl font-semibold whitespace-nowrap ">RANDOM GAUSSIAN</span>
                </button>
                <button onClick={() => updatePage(PageTypes.ACCEPT_REJECT_DISTRIBUTION)}>
                    <span className="self-center text-xl font-semibold whitespace-nowrap ">ACCEPT REJECT DISTRIBUTION</span>
                </button>
            </div>
        </nav>
    </header>
}

export default Navbar