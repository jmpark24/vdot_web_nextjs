import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import React from 'react';

const TrainingPage = () => {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen bg-[#f7f7f7]">
        <Header pageName="Training" />
      </main>
      <NavBar />
    </>
  );
};

export default TrainingPage;
