import {FC, HTMLAttributes} from 'react';
import { VariantProps, cva } from 'class-variance-authority'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants>{}

const paragraphVariants = cva("max-w-pose text-slate-700 dark:text-slate-300 mb-2 text-center",
{
    variants: {
        size: {
            default: 'text-base sm:text-lg',
            sm: 'text-sm, sm:text-base',
        },
        defaultVariants: {
            size: 'default',
        }
    }
})

const Paragraph: FC<ParagraphProps> = ({}) => {
    return <div>Paragraph</div>
}

export default Paragraph