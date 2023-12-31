import { RefObject, useRef } from "react";
import { useElement, useKeyboard, usePointer, useUpdate } from "@overreact/engine";

export const OnscreenController: React.FC = () => {
  return (
    <div className="flex px-4 absolute left-0 right-0 bottom-8">
      <Control code="KeyA" className="bg-lime-500" />
      <Control code="KeyD" className="bg-cyan-500" />
      <div className="grow" />
      <Control code="KeyW" className="bg-pink-500" />
    </div>
  );
};

type ControlProps = {
  className: string;
  code: string;
};

const Control: React.FC<ControlProps> = ({ className, code }) => {
  const { ref } = useElement();
  useSimulateButton(code, ref);

  return (
    <div ref={ref} className="p-4">
      <div className={`w-16 h-16 rounded-full shadow-lg ${className}`} />
    </div>
  );
};

const useSimulateButton = (code: string, ref: RefObject<Element | null>) => {
  const isDown = useRef(false);
  const pointer = usePointer();
  const keyboard = useKeyboard();

  useUpdate(() => {
    if (ref.current) {
      const isButtonDown = pointer.isDown() && pointer.isTarget(ref.current);

      if (!isDown.current && isButtonDown) {
        keyboard.simulateKeyDown(code);
        isDown.current = true;
      } else if (isDown.current && !isButtonDown) {
        keyboard.simulateKeyUp(code);
        isDown.current = false;
      }
    }
  });
};