import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Panel = styled(motion.div)`
    width: 0;
    height: 100vh;
    position: fixed;
    z-index: 10;
    background-color: #f2f2f2;
`