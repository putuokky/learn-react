export default function PlaceContentCenter({ children }) {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center antialiased tracking-tight">
                <div className="max-w-lg w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}
