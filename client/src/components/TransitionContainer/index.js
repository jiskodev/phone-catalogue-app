import React from 'react'
import { Panel } from './transitionContainerElements'

function TransitionContainer() {
    return (
        <>
            <>
                <Panel initial={{ width: '100%' }} animate={{ width: 0 }} transition={{ duration: 1 }}></Panel>
            </>
        </>
    )
}

export default TransitionContainer
