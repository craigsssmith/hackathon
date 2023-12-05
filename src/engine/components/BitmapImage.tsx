import { Node } from '../components';
import { usePosition, useProperty, useRender } from "../hooks";
import { UseElementResult, useElement } from "../hooks/useElement";
import { BitmapAsset, Position, Prop, Size } from "../types";

type BitmapImageProps = {
  element?: UseElementResult<HTMLDivElement>;
  image: Prop<BitmapAsset>;
  pos?: Prop<Position>;
  size: Prop<Size>;
  offset: Prop<Position>;
  flip?: Prop<boolean>;
}

export const BitmapImage: React.FC<BitmapImageProps> = (props) => {
  const element = useElement<HTMLDivElement>(props.element);

  const image = useProperty(props.image);
  const pos = usePosition(props.pos);
  const size = useProperty(props.size);
  const flip = useProperty(props.flip || false);
  const offset = useProperty(props.offset);

  useRender(() => {
    element.setBaseStyles({ pos, size, flip });
    element.setStyle('imageRendering', 'pixelated');
    element.setStyle('backgroundImage', `url(${image.current.url})`);
    element.setStyle('backgroundSize', `${image.current.size[0] * image.current.scale}px ${image.current.size[1] * image.current.scale}px`);
    element.setStyle('backgroundPosition', `${-offset.current[0]}px ${-offset.current[1]}px`);
  });

  return (
    <Node pos={pos}>
      <div ref={element.ref} className="absolute bg-no-repeat" />
    </Node>
  )
};
