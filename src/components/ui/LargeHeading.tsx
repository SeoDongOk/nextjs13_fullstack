import {FC} from 'react';

import { cn } from '../lib/utils';
import { cva, VariantProps} from 'class-variance-authority';

const headingVariants = cva('text-black drak:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
    {
        variant:{
            size:{
                default:'text-4ml md:text-5xl lg:text-6xl',
                lg:'text-5xl md:text-6xl lg:text-7xl',
                sm:'text-2xl md:text-3xl lg:text-4xl'
            }
        },
        defaultVariants: {
            size: 'default',
        },
    }
);

interface LargeHeadingProps
    extends React.HTMLAttributes<HTMLHeadElement>,
        VariantProps<typeof headingVariants> {}

export const LargeHeading:FC =()=>{
    return <div>
        LargeHeading
    </div>
}

export default LargeHeading;