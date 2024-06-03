// Inside your StudentInfo component
import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
    return(
        <div>
            <h1>Guneet Jassi</h1>
            <p>
                Github Repository:{' '}
                <Link href="https://github.com/Guneetjassi/cprg306-assignments">
                  click here 
                </Link>
            </p>
        </div>
    );
};

export default StudentInfo;
