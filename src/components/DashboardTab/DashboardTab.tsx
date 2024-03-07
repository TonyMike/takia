"use client"
import { Tab } from '@headlessui/react';
import MyAdverTab from './MyAdvertTab';
import ProfileTab from './ProfileTab';
import UpdatePasssword from './UpdatePasssword';
import { ReactElement } from 'react';

const DashboardTab = () => {
  const tabs: String[] = [
    'Profile',
    'Adverts',
    'password'
  ];

  const tabsContent : ReactElement[] = [
    <ProfileTab />,
    <MyAdverTab />,
    <UpdatePasssword />
  ];

  return (
    <Tab.Group>
      <Tab.List className="flex  rounded-full bg-white shadow-takia   p-1.5 md:p-2 ">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) => `flex-1  capitalize py-2 px-4 text-sm font-medium border-none outline-none  rounded-full ${selected ? 'bg-takia-orange text-white transition-all duration-300' : ' transition-all duration-300 text-gray-950 font-semibold'}`}
          >
            {
              ({ selected }) => (
                <span className={`${selected ? 'italic' : ''}`}>{tab}</span>
              )
            }
          </Tab>
        ))}
      </Tab.List>

      <Tab.Panels className="mt-4">
        {tabsContent.map((tab, index) => (
          <Tab.Panel key={index}>
            {tab}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}


export default DashboardTab;