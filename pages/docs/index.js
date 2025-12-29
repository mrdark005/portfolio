import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DocsSkeleton from '../../components/DocsSkeleton';
import CodeBlock from '../../components/CodeBlock';
import { docsData } from '../../data/docsData';
import { useRouter } from 'next/router';

export default function Docs() {
    const [activeModule, setActiveModule] = useState(docsData[0]);
    const [activeSection, setActiveSection] = useState(docsData[0].sections[0]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            setTimeout(() => setLoading(false), 2000);
        }
    }, [router.isReady]);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            if (!hash) return;

            for (const module of docsData) {
                if (module.id === hash) {
                    setActiveModule(module);
                    setActiveSection(module.sections[0]);
                    return;
                }

                for (const section of module.sections) {
                    if (section.id === hash) {
                        setActiveModule(module);
                        setActiveSection(section);
                        return;
                    }
                    if (section.subsections && section.subsections.find(sub => sub.id === hash)) {
                        setActiveModule(module);
                        setActiveSection(section);
                        setTimeout(() => {
                            const element = document.getElementById(hash);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                const details = element.querySelector('details');
                                if (details) details.open = true;
                                const wrapperDetails = element.closest('details') || element.querySelector('details');
                                if (wrapperDetails) wrapperDetails.open = true;
                            }
                        }, 100);
                        return;
                    }
                }
            }
        };

        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
     if (loading) {
        return (
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
                <Head>
                    <title>Loading... | Documentation</title>
                </Head>
                <Header />
                <DocsSkeleton />
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
            <Head>
                <title>{activeModule.title} | Documentation</title>
                <meta name="description" content={activeModule.description} />
            </Head>
            <Header />

            <div className="flex-1 container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-secondary/20 backdrop-blur-md border border-white/5 rounded-xl p-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                        <h2 className="text-xl font-bold mb-6 text-blue-400">Modules</h2>

                        <div className="flex gap-2 mb-6 bg-black/20 p-1 rounded-lg">
                            {docsData.map((module) => (
                                <button
                                    key={module.id}
                                    onClick={() => {
                                        setActiveModule(module);
                                        setActiveSection(module.sections[0]);
                                        router.push(`#${module.id}`, undefined, { shallow: true });
                                    }}
                                    className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${activeModule.id === module.id
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {module.title}
                                </button>
                            ))}
                        </div>

                        <div className="border-t border-white/10 pt-6">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Contents</h3>
                            <ul className="space-y-1">
                                {activeModule.sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            onClick={() => {
                                                setActiveSection(section);
                                                router.push(`#${section.id}`);
                                            }}
                                            className={`text-sm w-full text-left px-3 py-2 rounded transition-colors ${activeSection.id === section.id
                                                ? 'text-white font-medium bg-white/10 border-l-2 border-blue-500'
                                                : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                                                }`}
                                        >
                                            {section.title}
                                        </button>

                                        {activeSection.id === section.id && section.subsections && (
                                            <ul className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-2">
                                                {section.subsections.map((sub) => (
                                                    <li key={sub.id}>
                                                        <a
                                                            href={`#${sub.id}`}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                router.push(`#${sub.id}`);
                                                                scrollToSection(sub.id);
                                                            }}
                                                            className="block text-xs text-gray-500 hover:text-blue-400 py-1 px-2 rounded transition-colors"
                                                        >
                                                            {sub.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>

                <main className="flex-1 min-w-0">
                    <div className="bg-secondary/20 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-12 min-h-[500px]">
                        <h2 className="text-3xl font-bold mb-6 text-blue-400">{activeSection?.title}</h2>

                        {activeSection?.type === 'accordion' && activeSection.items ? (
                            <div className="space-y-4">
                                {activeSection.items.map((item) => (
                                    <div key={item.id} id={item.id} className="border border-white/10 rounded-xl overflow-hidden bg-black/20 transition-all duration-300">
                                        <details className="group">
                                            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 transition-colors list-none">
                                                <div className="font-mono text-blue-300 font-semibold text-lg">
                                                    {item.label}
                                                </div>
                                                <span className="transform group-open:rotate-180 transition-transform duration-300 text-gray-400">
                                                    ▼
                                                </span>
                                            </summary>
                                            <div className="p-4 pt-0 border-t border-white/5 bg-black/10">
                                                <p className="text-gray-300 mb-4 mt-4">{item.description}</p>
                                                {item.usage && (
                                                    <CodeBlock code={item.usage} language="javascript" />
                                                )}
                                            </div>
                                        </details>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div
                                className="prose prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: activeSection?.content || '' }}
                            />
                        )}
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}
