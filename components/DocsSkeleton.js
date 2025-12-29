export default function DocsSkeleton() {
    return (
        <div className="flex-1 container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 animate-pulse">
            <aside className="w-full md:w-64 flex-shrink-0">
                <div className="bg-white/5 rounded-xl p-6 h-[500px]">
                    <div className="h-6 w-32 bg-white/10 rounded mb-6"></div>

                    <div className="flex gap-2 mb-6">
                        <div className="flex-1 h-8 bg-white/10 rounded"></div>
                        <div className="flex-1 h-8 bg-white/10 rounded"></div>
                    </div>

                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-4 w-full bg-white/10 rounded"></div>
                        ))}
                    </div>
                </div>
            </aside>

            <main className="flex-1 min-w-0">
                <div className="bg-white/5 rounded-2xl p-8 md:p-12 min-h-[500px]">
                    <div className="h-10 w-48 bg-white/10 rounded mb-8"></div>

                    <div className="space-y-6">
                        <div className="h-4 w-full bg-white/10 rounded"></div>
                        <div className="h-4 w-5/6 bg-white/10 rounded"></div>
                        <div className="h-4 w-4/6 bg-white/10 rounded"></div>
                    </div>

                    <div className="mt-12 space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-16 w-full bg-white/10 rounded-xl"></div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
