import React, { Suspense } from 'react';
import Tabs from './Tabs';
import Glimmer from './Glimmer';

const Comments = React.lazy(() => import('./Comments'));
const Photos = React.lazy(() => import('./Photos'));

function TabSwitcher() {
    const [tab, setTab] = React.useState('photos');

    function handleTabSelect(tab) {
        setTab(tab);
    };

    return (
        <div>
            <Tabs onTabSelect={handleTabSelect} />
            <Suspense fallback={<Glimmer />}>
                {tab === 'photos' ? <Photos /> : <Comments />}
            </Suspense>
        </div>
    );
}

export default TabSwitcher