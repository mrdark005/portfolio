import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; 
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import { FaCopy, FaCheck } from 'react-icons/fa';

export default function CodeBlock({ code, language = 'javascript' }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        Prism.highlightAll();
    }, [code, language]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <div className="relative group rounded-lg overflow-hidden border border-white/10 bg-[#1e1e1e]">
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-md bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Copy code"
            >
                {copied ? <FaCheck size={14} className="text-green-400" /> : <FaCopy size={14} />}
            </button>
            <div className="overflow-x-auto p-4 max-h-[500px] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <pre className={`language-${language} !bg-transparent !m-0 !p-0 !text-sm`}>
                    <code className={`language-${language}`}>
                        {code.trim()}
                    </code>
                </pre>
            </div>
        </div>
    );
}
