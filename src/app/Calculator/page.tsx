import NavBar from '@/components/NavBar';
import Calculator from '@/components/Calculator';
import Header from '@/components/Header';
import React from 'react';

const CalculatorPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center min-h-[80vh] bg-[#f7f7f7]">
        <Calculator />
      </main>
      <NavBar />
    </>
  );
};

export default CalculatorPage;
