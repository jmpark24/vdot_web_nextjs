import NavBar from '@/components/NavBar';
import Calculator from '@/components/Calculator';
import Header from '@/components/Header';
import React from 'react';

const page = () => {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen bg-[#f7f7f7]">
        <Header />
        <Calculator />
      </main>
      <NavBar />
    </>
  );
};

export default page;
