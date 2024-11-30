import { useEffect, useState } from "react";
interface IntersectionObserverHookOptions extends IntersectionObserverInit {
  threshold: number;
}

interface IntersectionObserverHookResult {
  observedEntries: IntersectionObserverEntry[];
  setObservedEntries: React.Dispatch<React.SetStateAction<IntersectionObserverEntry[]>>;
}

const useIntersectionObserver = (options: IntersectionObserverHookOptions): IntersectionObserverHookResult => {
  const [observedEntries, setObservedEntries] = useState<IntersectionObserverEntry[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setObservedEntries(entries);
    }, options);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [options]);

  return { observedEntries, setObservedEntries };
};

export default useIntersectionObserver;
