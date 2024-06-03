import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul>
        <li>
          {/* Use Next.js Link component */}
          <Link href="/week-2">
            Week 2 Assignment
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
