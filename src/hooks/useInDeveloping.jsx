/* eslint-disable no-param-reassign */
import { useEffect } from 'react';

const useInDeveloping = (ref) => {
    useEffect(() => {
        if (ref.current) {
            ref.current.disabled = true;
            ref.current.style.filter = 'blur(2px)';
        }
    }, [ref]);
};

export default useInDeveloping;
