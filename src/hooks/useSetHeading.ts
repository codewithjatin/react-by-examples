import { useEffect } from "react";

const useSetHeading = (headingText: string) => {
    useEffect(() => {
        document.getElementById('headingText')!.innerHTML = headingText;
    }, [])
    return []
};

export default useSetHeading;