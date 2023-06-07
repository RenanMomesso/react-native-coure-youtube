import BottomSheet, { BottomSheetRefProps } from '@components/BottomSheet';
import { useKeyboard } from '@hooks/useKeyBoard';
import React, { useState, useRef, useEffect, createContext, useContext } from 'react';

interface BottomSheetContextProps {
    isOpen?: boolean
    closeBottomSheet: () => void;
    openBottomSheet: (children: React.ReactNode) => void;
    toggleBottomSheet: (children: React.ReactNode) => void;
}

export const BottomSheetContext = createContext<BottomSheetContextProps>({
    closeBottomSheet: () => { },
    openBottomSheet: () => { },
    toggleBottomSheet: () => { },
});
export const BottomSheetProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [bottomSheetChildren, setBottomSheetChildren] = useState<React.ReactNode>();
    const [isOpen, setIsOpen] = useState(false);
    const bottomSheetRef = useRef<BottomSheetRefProps>(null);
    const { dissmisKeyboard } = useKeyboard()

    useEffect(() => {
        if (!isOpen) {
            bottomSheetRef.current?.scrollTo(0);
        } else {
            bottomSheetRef.current?.scrollTo(-400);
        }
    }, [isOpen]);

    const openBottomSheet = (children: React.ReactNode | null) => {
        setBottomSheetChildren(children || null);
        setIsOpen(true);
    };

    const closeBottomSheet = () => {
        setBottomSheetChildren(null);
        setIsOpen(false);
    };

    const toggleBottomSheet = (children: React.ReactNode | null) => {
        if (isOpen) {
            closeBottomSheet();
        } else {
            dissmisKeyboard()
            openBottomSheet(children);
        }
    }

    return (
        <BottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet, isOpen, toggleBottomSheet }}>
            <BottomSheet ref={bottomSheetRef}>{bottomSheetChildren}</BottomSheet>
            {children}
        </BottomSheetContext.Provider>
    );
};

export const useBottomSheet = () => useContext(BottomSheetContext);