import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
      <div className="flex items-center justify-center gap-4">
        <div className="animate-BounceDelayOne bg-primary h-5 w-5 rounded-full"></div>
        <div className="animate-BounceDelayTwo bg-primary h-5 w-5 rounded-full"></div>
        <div className="animate-BounceDelayThree bg-primary h-5 w-5 rounded-full"></div>
      </div>
      <span className="text-lg font-normal leading-snug">Loading...</span>
    </div>
  );
};

export default LoadingPage;
