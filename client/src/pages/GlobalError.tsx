import { ErrorBoundary } from "react-error-boundary";
import {Outlet } from 'react-router-dom';

const GlobalErrorPage = () => {
  return (
    <ErrorBoundary FallbackComponent={GlobalErrorPage}>
      <Outlet />
    </ErrorBoundary>
  )
}

export default GlobalErrorPage