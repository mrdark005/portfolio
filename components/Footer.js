import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-secondary/20 backdrop-blur-md border-t border-white/10 mt-12 py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                <div className="mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://github.com/mrdark005" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                        <AiFillGithub size={26} />
                    </a>
                    <a href="https://instagram.com/eshabanov_" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                        <AiFillInstagram size={26} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
