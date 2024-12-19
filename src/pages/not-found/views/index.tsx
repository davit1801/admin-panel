import GoBackButton from '@/components/buttons/GoBackButton';
import React from 'react';

const NotFoundView: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="px-6 py-24 text-center sm:py-32 lg:px-8">
        <p className="font-semibold">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          Page Not Found
        </h1>

        <div className="mt-10">
          <GoBackButton />
        </div>
      </div>
    </main>
  );
};

export default NotFoundView;
