import { useState} from 'react';

export function useForceUpdate(dependencies) {
  const [value, set] = useState(true);

  return () => set((value) => !value);
}
