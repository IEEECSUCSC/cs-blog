import React from 'react';

const Blogtile = (props) => {
    return (
        <div className="flex flex-col md:flex-row max-w-full bg-white shadow-lg my-8 rounded-lg overflow-hidden md:max-w-4xl ">
            <div className="md:w-1/3 flex">
                <img src="https://test1.ko-de.org/test.png" alt="Blog" className="object-cover w-full h-48 md:h-auto md:rounded-l-lg" />
            </div>
            <div className="w-full md:w-2/3 p-4">
                <h2 className="font-semibold text-xl text-gray-800 mb-2">{props.title}</h2>
                <p className="text-gray-600 text-sm md:mb-14">
                    {props.desc}
                </p>
                <div className="flex items-center mt-4">
                    <img src="https://test1.ko-de.org/test.png" alt="Blogger" className="rounded-full w-10 h-10" />
                    <span className="ml-2 text-sm text-gray-500">{props.writer}</span>
                </div>
                <div className="flex flex-wrap items-center mt-4 text-xs">
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-gray-700 mr-2 mb-2">{props.date}</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-gray-700 mr-2 mb-2">{props.tag1}</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-gray-700 mr-2 mb-2">{props.tag2}</span>
                    {/* Add more tags as needed */}
                </div>
            </div>
        </div>
    );
};

export default Blogtile;
