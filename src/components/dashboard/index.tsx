import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from '../utils/Footer';
import { faBroadcastTower, faFileDownload, faHome, faPoll, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Dispatch } from './pages/Dispatch';
import { Monitoring } from './pages/Monitoring';
import { Distribution } from './pages/Distribution';
import { Users } from './pages/Users';
import { DashboardLink } from './Common';

// eslint-disable-next-line no-unused-vars
const InstallerPublisherLinks = () => (
    <>
        <DashboardLink icon={faHome} name="Home" path="/" />
        <DashboardLink icon={faPoll} name="Monitoring" path="/monitoring" />
        <DashboardLink icon={faFileDownload} name="Distribution" path="/distribution" />
    </>
);

// eslint-disable-next-line no-unused-vars
const AdminLinks = () => (
    <>
        <DashboardLink icon={faHome} name="Home" path="" />
        <DashboardLink icon={faBroadcastTower} name="Dispatch" path="/dispatch" />
        <DashboardLink icon={faPoll} name="Monitoring" path="/monitoring" />
        <DashboardLink icon={faFileDownload} name="Distribution" path="/distribution" />
    </>
);

// eslint-disable-next-line no-unused-vars
const OwnerLinks = () => (
    <>
        <AdminLinks />
        <DashboardLink icon={faUserFriends} name="Users" path="/users" />
    </>
);

export const Dashboard: React.FC = () => {
    return (
        <div className="absolute w-screen h-screen flex flex-col justify-between">
            <div className="w-full xl:w-5/6 2xl:w-2/3 mx-auto mt-24 px-10 xl:px-0 z-30 flex flex-col">
                <div className="flex flex-col xl:flex-row">
                    <Router>
                        <div className="flex flex-col mr-10">
                            <div className="flex xl:flex-col justify-start">
                                {/*<OwnerLinks />*/}
                                <AdminLinks />
                            </div>
                        </div>

                        <Switch>
                            <Route exact path="/dashboard"/>
                            <Route exact path="/dashboard/dispatch" component={Dispatch} />
                            <Route exact path="/dashboard/monitoring" component={Monitoring }/>
                            <Route exact path="/dashboard/distribution" component={Distribution} />
                            <Route exact path="/dashboard/users" component={Users} />
                        </Switch>
                    </Router>
                </div>
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};
