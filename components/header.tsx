const Slogan = () => {
    const codeClassNames = "font-mono font-medium text-sky-500";
    return (
        <div className="pt-20 max-w-5xl mx-auto">
            <h1 className="text-center text-6xl font-extrabold text-slate-900">
                Rapidly build modern websites without ever leaving your HTML.
            </h1>
            <p className="mt-6 mx-auto max-w-3xl text-lg text-slate-600">
                A utility-first CSS framework packed with classes like{" "}
                <code className={codeClassNames}>flex</code>, <code>pt-4</code>,{" "}
                <code className={codeClassNames}>text-center</code>, and{" "}
                <code className={codeClassNames}>rotate-90</code> that can be
                composed to build any design, directly in your markup.
            </p>
            <div className="mt-6 flex justify-center space-x-6 text-sm">
                <a
                    href=""
                    className="bg-slate-900 text-white font-semibold px-6 h-12 rounded-lg flex justify-center items-center"
                >
                    Get started
                </a>
                <button className="border-slate-400 border-spacing-3 rounded-lg shadow-sm w-72 flex items-center ring-1 ring-slate-900/10 px-4 text-slate-400">
                    <span className="text-slate-400 mr-6">Q</span>
                    <span className="flex-auto text-start">
                        Quick search...
                    </span>
                    <kbd className="font-sans font-semibold">
                        <abbr
                            title="Command"
                            className="no-underline text-slate-300"
                        >
                            ⌘
                        </abbr>
                        K
                    </kbd>
                </button>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <header className="">
            <div className="flex items-center justify-between p-2 bg-slate-50">
                <h1 className="">Tailwind Mock</h1>
                <div className="flex">
                    <nav className="flex">
                        <ul className="flex items-center space-x-8">
                            {["Home", "About", "Contact"].map((item) => (
                                <li key={item} className="">
                                    <a>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex items-center border-l border-slate-200 ml-6 pl-6">
                        <button className="text-slate-400">Dark/Light</button>
                        <a href="" className="ml-6 text-slate-400">
                            <span className="sr-only">GitHub</span>
                            <span>GH Logo</span>
                        </a>
                    </div>
                </div>
            </div>
            <Slogan />
        </header>
    );
};

export default Header;
