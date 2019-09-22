import { useState} from 'react';

export function useForceUpdate(dependencies) {
  const [value, set] = useState(true); //boolean state

  return () => set((value) => !value);
}
