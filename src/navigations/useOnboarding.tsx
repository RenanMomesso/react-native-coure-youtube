import React, { useEffect } from 'react';
import { getDataFromStorage } from '../utils/AsyncStorageUtils';
import { useDispatch } from 'react-redux'

const useOnboarding = () => {
    const dispatch = useDispatch()
    const [showOnboarding, setShowOnboarding] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);

    useEffect(() => {
        const shouldShowOnboarding = async () => {
            setLoading(true)
            const data = await getDataFromStorage("showOnboarding")
            dispatch({ type: "SET_SHOW_ONBOARDING", payload: data === null ? true : false })
            setShowOnboarding(data === null ? true : false)
            setLoading(false)
        }
        shouldShowOnboarding()
    }, [showOnboarding])

    return { showOnboarding, loading }
}

export default useOnboarding;