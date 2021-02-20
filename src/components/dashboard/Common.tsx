import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DashboardLink = ({ name, path, icon }: { name: string, icon: IconProp, path: string }) => {
    const [pathSlug, setPathSlug] = useState('');
    const [currentPageSlug, setCurrentPageSlug] = useState('');
    const { pathname } = useLocation();

    useEffect(() => setPathSlug(path.substring(path.lastIndexOf('/') + 1)), [path]);
    useEffect(() => setCurrentPageSlug(pathname.substring(pathname.lastIndexOf('/') + 1)), [pathname]);

    return (
        <Link to={`/dashboard${path}`}>
            <span className="flex flex-row mr-5 xl:mr-0">
                <span className="w-12 hidden xl:flex flex-row justify-center">
                    <FontAwesomeIcon className="mt-1 mr-4" size={'lg'} icon={icon}/>
                </span>
                <h1 className={`text-2xl ${currentPageSlug === pathSlug ? 'text-teal' : 'text-white'} hover:text-teal transition duration-200 font-medium mb-6`}>{name}</h1>
            </span>
        </Link>
    );
};

export const DashboardPage: React.FC = ({ children }) => (
    <div className="w-full bg-navy px-9 py-7 rounded-xl shadow-md">
        {children}
    </div>
);

export const DashboardPageTitle: React.FC = ({ children }) => (
    <h1 className="text-4xl mb-7">{children}</h1>
);
