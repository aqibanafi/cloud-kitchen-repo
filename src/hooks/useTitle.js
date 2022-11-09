import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Superkitch`
    }, [title])
};

export default useTitle;