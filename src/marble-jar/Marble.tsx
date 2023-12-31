import { Prop, Position, usePosition, useProperty, Size, Circle, Node, PhysicsCircle, useDynamicProperty } from "@overreact/engine";

type MarbleProps = {
  pos: Prop<Position>;
  radius: Prop<number>;
  color: Prop<string>;
};

export const Marble: React.FC<MarbleProps> = (props) => {
  const pos = usePosition(props.pos);
  const radius = useProperty(props.radius);
  const color = useProperty(props.color);

  const circlePos = useDynamicProperty(pos, (pos): Position => [
    pos[0] - radius.current,
    pos[1] - radius.current,
  ]);

  const circleSize = useDynamicProperty(radius, (radius): Size => [radius * 2, radius * 2]);

  return (
    <Node>
      <Circle pos={circlePos} size={circleSize} color={color} />
      <PhysicsCircle pos={pos} radius={radius} />
    </Node>
  );
};
