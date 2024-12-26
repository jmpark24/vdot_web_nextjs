import Equivalent from '@/components/Equivalent';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import React from 'react';

const EquivalentPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-[#f7f7f7] pb-[80px]">
        <Equivalent />
      </main>
      <NavBar />
    </>
  );
};

export default EquivalentPage;
