import { useRef, useLayoutEffect } from 'react';

interface UseLayoutTransitionProps {
  duration?: number;
  easing?: 'ease' | 'easeIn' | 'easeOut' | 'easeInOut' | string;
}

export const useLayoutTransition = <T extends HTMLElement>({
  duration,
  easing,
}: UseLayoutTransitionProps) => {
  const ref = useRef<T>(null);
  const initialPos = useRef<DOMRect>();

  const node = ref.current;

  if (node) {
    initialPos.current = node.getBoundingClientRect();
  }

  useLayoutEffect(() => {
    const initialPosition = initialPos.current;

    if (!node || !initialPosition) return;

    const finalPosition = node.getBoundingClientRect();

    const x = initialPosition.left - finalPosition.left;
    const y = initialPosition.top - finalPosition.top;

    node.animate(
      [{ transform: `translate(${x}px, ${y}px)` }, { transform: '' }],
      {
        id: 'layout',
        composite: 'accumulate',
        duration,
        easing,
      }
    );
  });

  return {
    ref,
  };
};