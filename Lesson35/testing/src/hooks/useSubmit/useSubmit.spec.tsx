import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useSubmit } from './useSubmit';

describe('useSubmit', () => {
  it('calls handleSubmit and prevents default', () => {
    const handleSubmit = vi.fn();

    const { result } = renderHook(() => useSubmit(handleSubmit));

    const preventDefault = vi.fn();

    const fakeEvent = { preventDefault } as unknown as React.FormEvent<HTMLFormElement>;

    act(() => { result.current.onSubmit(fakeEvent) });

    expect(preventDefault).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalled();
  });
});