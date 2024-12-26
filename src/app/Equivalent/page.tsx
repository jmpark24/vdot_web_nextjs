import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Training from '@/components/Training';
import React from 'react';

const EquivalentPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center min-h-screen bg-[#f7f7f7] pb-[80px]">
        <Training />
      </main>
      <NavBar />
    </>
  );
};

export default EquivalentPage;
