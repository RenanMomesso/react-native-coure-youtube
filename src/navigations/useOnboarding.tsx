import React, { useEffect } from 'react';
import { getDataFromStorage } from '../utils/AsyncStorageUtils';

const useOnboarding = () => {
    const [showOnboarding, setShowOnboarding] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);

    useEffect(() => {
        const shouldShowOnboarding = async () => {
            setLoading(true)
            const data = await getDataFromStorage("showOnboarding")
            setShowOnboarding(data === "true" ? true : false)
            setLoading(false)
        }
        shouldShowOnboarding()
    }, [showOnboarding])

    return { showOnboarding, loading }
}

export default useOnboarding;