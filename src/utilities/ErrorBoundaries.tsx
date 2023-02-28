import React from "react"

interface Props {
    children: React.ReactNode
    fallbackComponent: React.ReactNode
}

interface State {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<Props> {
    constructor(props: Props, State) {
        super(props)
        this.state = { hasError: false }
    }
    
    static getDelivedStateFromError (error: Error) {
        return { hasError: true }
    }
    
    render() {
       if( this.state.hasError) {
        return this.props.children
       } 
    }
}