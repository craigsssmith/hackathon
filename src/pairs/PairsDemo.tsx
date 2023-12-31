import { Device, Engine } from "@overreact/engine";
import { Cards } from "./Cards";

export const PairsDemo = () => {
  return (
    <Engine>
      <Device bg="#223344" mode="mobile">
        <Cards />
      </Device>
    </Engine>
  );
};



