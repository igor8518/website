// eslint-disable-next-line no-unused-vars
import React from 'react';
import { DashboardPage, DashboardPageTitle } from '../Common';

export const Dispatch: React.FC = () => {
    return (
        <DashboardPage>
            <DashboardPageTitle>Dispatch</DashboardPageTitle>

            <div className="border border-gray-600 p-7 mb-10 rounded-2xl">
                <h2 className="text-2xl font-medium mb-4">Global TELEX Message</h2>
                <p className="text-lg mb-4">
                    This will send a TELEX message to ALL active aircraft on the network if they have this option
                    enabled, in addition to all aircraft that connect within 24 hours.
                </p>
                <p className="text-lg text-red-500">
                    WARNING: USE WITH EXTREME CAUTION AND ONLY AFTER CONSULTING WOTH THE TEAM.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Client Search</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque doloremque
                    eos facilis minus. Itaque.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Flight Number Blacklist</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolorum
                    ducimus illo in incidunt pariatur.</p>
            </div>

            <div className="">
                <h2 className="text-2xl font-medium mb-4">TELEX Message Blacklist</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos facilis
                    laudantium maxime necessitatibus, nihil nobis?</p>
            </div>
        </DashboardPage>
    );
};
