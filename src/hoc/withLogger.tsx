import { useEffect, type ComponentType } from "react";

export function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string,
) {
  function ComponentWithLogger(props: P) {
    useEffect(() => {
      console.log(`[withLogger] ${componentName} mounted`);

      return () => {
        console.log(`[withLogger] ${componentName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  ComponentWithLogger.displayName = `withLogger(${componentName})`;

  return ComponentWithLogger;
}
