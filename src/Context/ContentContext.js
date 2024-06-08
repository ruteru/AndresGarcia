import React, { createContext, useState } from 'react';

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState({
        header: 'Welcome to My Portfolio',
        body: 'This is the body content.'
    });
    const [currentPage, setCurrentPage] = useState('Home');

    const updateContent = (newContent) => {
        setContent(newContent);
    };

    const changePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <ContentContext.Provider value={{ content, updateContent, currentPage, changePage }}>
            {children}
        </ContentContext.Provider>
    );
};
