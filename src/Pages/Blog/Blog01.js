import React from 'react';
import SQL from '../../assets/images/sql-vs-no-sql-1.png'
import useTitle from '../../hooks/useTitle';

const Blog01 = () => {
    //Set Page Title
    useTitle("Blog 01")
    
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <p className="text-base text-gray-700 md:text-lg">
                        <span className='font-bold text-3xl'>SQL vs NoSQL: Five Main Differences</span>
                        <br />
                        <br />
                        SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                        <br />
                        There are five practical differences between SQL and NoSQL:
                        <br />
                        <ol>
                            <li>Language</li>
                            <li>Scalability</li>
                            <li>Structure</li>
                            <li>Properties</li>
                            <li>Support and communities</li>
                        </ol>
                        <br />
                        <span className='font-bold text-xl'>1. Language</span>
                        <br />
                        SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
                        <br />
                        <br />
                        <span className='font-bold text-xl'>2. Scalability</span>
                        <br />
                        Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note
                        <br />
                        <br />
                        <span className='font-bold text-xl'>3. Structure</span>
                        <br />
                        SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.
                        </p>
                    </div>
                    <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                        <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={SQL}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog01;