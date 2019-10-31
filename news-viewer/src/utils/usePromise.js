import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
    // 대기 중/완료/실패에 대한 상태관리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (error) {
                setError(error);
            }
            setLoading(false)
        }
        process();
        // eslint-disable-next-line
    }, deps)
    return [loading, resolved, error];
}