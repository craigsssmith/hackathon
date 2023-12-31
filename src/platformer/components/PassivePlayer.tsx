import React from "react";
import { BitmapSprite, Node, SpriteSet, useOffsetPosition, usePosition, useProperty } from "@overreact/engine";
import { PLAYER_FALL, PLAYER_IDLE, PLAYER_JUMP, PLAYER_RUN } from "../assets";
import { PlayerIndicator } from "./PlayerIndicator";
import { usePlatformGame } from "./PlatformGame";

const COLLIDER_OFFSET_Y = 9;

/**
 * Player
 * ------
 * 
 * ...
 */

type PlayerProps = {
  index: 0 | 1;
}

export const PassivePlayer: React.FC<PlayerProps> = ({ index }) => {
  const game = usePlatformGame();
  const pos = usePosition(game.current.players[index].pos);
  const flip = useProperty(game.current.players[index].flip);
  const animation = useProperty(game.current.players[index].animation);

  const idleSpritePos = useOffsetPosition(pos, [-30, -99 + COLLIDER_OFFSET_Y]);
  const runSpritePos = useOffsetPosition(pos, [-33, -102 + COLLIDER_OFFSET_Y]);
  const jumpSpritePos = useOffsetPosition(pos, [-30, -108 + COLLIDER_OFFSET_Y]);
  const fallSpritePos = useOffsetPosition(pos, [-30, -108 + COLLIDER_OFFSET_Y]);
  const labelPos = useOffsetPosition(pos, [0, -128]);

  return (
    <Node pos={pos}>
      <SpriteSet animation={animation}>
        <BitmapSprite name="idle" pos={idleSpritePos} size={[57, 102]} sprite={PLAYER_IDLE} flip={flip} />
        <BitmapSprite name="run" pos={runSpritePos} size={[63, 99]} sprite={PLAYER_RUN} flip={flip} />
        <BitmapSprite name="jump" pos={jumpSpritePos} size={[60, 108]} sprite={PLAYER_JUMP} flip={flip} repeat={false} />
        <BitmapSprite name="fall" pos={fallSpritePos} size={[60, 108]} sprite={PLAYER_FALL} flip={flip} repeat={false} />
      </SpriteSet>
     <PlayerIndicator pos={labelPos} index={index} />
    </Node>
  );
}

