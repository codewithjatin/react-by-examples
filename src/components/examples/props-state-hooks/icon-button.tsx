import { ReactElement } from "react";

const IconButton = ({ children }: { children: ReactElement }) => {
    return (
        <button>
            {children}
        </button>
    )
}

export default IconButton;