import Header from '@/components/Header';
import More from '@/components/More';
import NavBar from '@/components/NavBar';
import React from 'react';

const MorePage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-[#f7f7f7] pb-[80px]">
        <More />
      </main>
      <NavBar />
    </>
  );
};

export default MorePage;
