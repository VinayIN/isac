import { useState, useEffect } from 'react';

export const useMarkdown = (filePath) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        let isMounted = true;

        const loadMarkdown = async () => {
            if (!filePath) {
                if (isMounted) {
                    setMarkdown('');
                }

                return;
            }

            try {
                const response = await fetch(filePath);

                if (!response.ok) {
                    throw new Error(`Failed to fetch markdown: ${response.status}`);
                }

                const text = await response.text();

                if (isMounted) {
                    setMarkdown(text);
                }
            } catch {
                if (isMounted) {
                    setMarkdown('');
                }
            }
        };

        loadMarkdown();

        return () => {
            isMounted = false;
        };
    }, [filePath]);

    return markdown;
};
