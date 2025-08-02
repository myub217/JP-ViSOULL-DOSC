// ✅ src/Home/common/ErrorBoundary.tsx

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: unknown) {
    console.error("❌ App crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center p-6">
          <h1 className="text-2xl font-bold text-red-600">เกิดข้อผิดพลาด</h1>
          <p className="text-gray-600 mt-2">
            โปรดลองโหลดหน้าใหม่ หรือติดต่อผู้ดูแลระบบ
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
