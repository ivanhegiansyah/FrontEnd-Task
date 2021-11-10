import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("when rendered", () => {
  it("returns current initial value", () => {
    const { result } = renderHook(() => useInputValue("Test something"));

    expect(result.current.value).toEqual("Test something");
  });

  it("changes the value and input it", () => {
    const { result } = renderHook(() => useInputValue("Test something"));

    act(() => {
      result.current.onChange({ target: { value: "New something" } });
    });
    expect(result.current.value).toEqual("New something");
  });

  it("updates the value", () => {
    const { result, rerender } = renderHook(({ text }) => useInputValue(text), {
      initialValue: { text: "Test something" },
    });

    rerender({ text: "New updated" });
    expect(result.current.value).toEqual("New updated");
  });
});
