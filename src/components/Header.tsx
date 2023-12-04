export function Header({title}) {
    return (
        <div>
            <div className="min-w-[320px] fixed w-full mt-0 z-10">
                <div className="p-16 bg-teal-900">
                    <h1 className="text-white text-2xl sm:text-6xl text-center uppercase font-thin">{title}</h1>
                </div>
                <div className="p-1 bg-white"/>
                <div className="p-1 bg-teal-900"/>
            </div>
        </div>
    )
}
