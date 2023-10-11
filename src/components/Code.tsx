import { FC, useState } from "react";
import {type Language} from "prism-react-renderer"
import { useTheme } from "next-themes";

interface CodeProps {
    code:string,
    show:boolean,
    langage: Language,
    animationDelay?: number,
    animated?: boolean
}

const Code:FC<CodeProps> = ({
    code,
    langage,
    show,
    animated,
    animationDelay
}) =>{
    const {} = useTheme()
    const [text,setText] = useState(animated? '':code)
    return <div>Code</div>
}

export default Code