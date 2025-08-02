// ✅ src/Home/common/ErrorBoundary.tsx — React Error Boundary Component for JP Visual & Docs

import React, { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to show fallback UI on next render
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log error to an error reporting service here
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-base-100 text-base-content p-4">
          <h1 className="text-3xl font-bold mb-4">เกิดข้อผิดพลาดบางอย่าง</h1>
          <p className="mb-6">
            ขอโทษในความไม่สะดวก กรุณารีเฟรชหน้าหรือกลับมาใหม่ภายหลัง
          </p>
          <pre className="whitespace-pre-wrap bg-base-200 p-4 rounded-lg text-sm text-error">
            {this.state.error?.message}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;