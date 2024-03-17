import { useState, useEffect } from 'react';

const useMarkdown = (filePath) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
    fetch(filePath)
        .then(response => response.text())
        .then(text => setMarkdown(text))
        .catch(err => console.error(`Failed to load markdown file: ${filePath}`, err));
    }, [filePath]);
    return markdown;
};

export { useMarkdown };