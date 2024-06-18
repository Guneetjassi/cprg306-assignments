// app/page.js
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="list-disc">
        <li className="mb-4">
          <Link href="/week-2">
            Week 2 Assignment
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/week-3">
            Week 3 Assignment
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/week-4">
            Week 4 Assignment
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/week-5">
            Week 5 Assignment
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;