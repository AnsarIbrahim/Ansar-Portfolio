import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.error('Unhandled UI error:', error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (!hasError) return children;
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <span className="eyebrow">Something went wrong</span>
          <h1 className="section-title mt-5">This page hit an error.</h1>
          <p className="section-sub mx-auto">
            Reload to try again, or head back to the home page.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/" className="btn-primary">Back to home</a>
            <button type="button" onClick={() => window.location.reload()} className="btn-ghost">
              Reload
            </button>
          </div>
        </div>
      </main>
    );
  }
}

ErrorBoundary.propTypes = { children: PropTypes.node.isRequired };

export default ErrorBoundary;
