import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='flex sticky items-end  top-0  p-5 xl: px-10  '>
            <motion.div className="felx items-center "
                initial={{ opacity: 0, scale: 0, x: -100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {/* social icons */}
                <SocialIcon url='https://twitter.com/sanjay29218'
                    fgColor='black'
                    bgColor='transparent'

                />
                <SocialIcon url='https://www.linkedin.com/in/sanjay-poudel-49171815b/'
                    fgColor='black'
                    bgColor='transparent'
                />
                <SocialIcon url='https://www.facebook.com/sanjay29218/'
                    fgColor='black'
                    bgColor='transparent'
                />
                <SocialIcon url='https://github.com/sanjay-29218'
                    fgColor='black'
                    bgColor='transparent'
                />

            </motion.div>
            {/* <motion.div className='px-32'
                initial={{ opacity: 0, scale: 0, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <SocialIcon network='email'
                    fgColor='black'
                    bgColor='transparent'
                />
                <p className=' hidden md:inline-flex uppercase text-sm text-gray-600'>It's Me Sanjay</p>
            </motion.div> */}

        </header>
        
    )
}