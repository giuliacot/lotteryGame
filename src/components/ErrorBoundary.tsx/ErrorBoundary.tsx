import React, { Component, ErrorInfo, ReactNode } from 'react'
import { InfoBox } from '../InfoBox.tsx/InfoBox'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error333:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <InfoBox type="error">Oh no! Eggs broken</InfoBox>
    }

    return this.props.children
  }
}

export default ErrorBoundary
