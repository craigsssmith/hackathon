import { CollisionBox, Tilemap, Tileset } from "@engine";

import tileset from "../assets/tileset.png";

const TILESET: Tileset = {
  image: { url: tileset, size: [128, 128], scale: 3 },
  gridSize: [24, 20],
  cellSize: [48, 48],
};

const TILES: number[] = [
   5,  6,  6,  6,  6,  6,  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  5,  6,  6,  6,  6,  6,  7,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  
   5,  6,  6,  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  5,  6,  6,  7,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,

   1,  1,  1,  4, -1, -1, -1,  5,  6,  6,  6,  6,  6,  6,  6,  6,  7, -1, -1, -1,  0,  1,  1,  1,
  10, 10, 11, 12, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  8,  9, 10, 10,
  18, 18, 19, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 17, 18, 18,

  18, 18, 40, 41,  1,  1,  4, -1, -1, -1,  5,  6,  6,  7, -1, -1, -1,  0,  1,  1, 43, 44, 18, 18,
  18, 18, 48, 49, 10, 11, 12, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  8,  9, 10, 51, 52, 18, 18,
  18, 18, 18, 18, 18, 19, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 17, 18, 18, 18, 18, 18,

  18, 18, 18, 18, 18, 40, 41,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 43, 44, 18, 18, 18, 18, 18,
  18, 18, 18, 18, 18, 48, 49, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 51, 52, 18, 18, 18, 18, 18,
  18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
];

/**
 * LevelGeometry
 * -------------
 * 
 * ...
 */

export const LevelGeometry: React.FC = () => {
  return (
    <>
      <Tilemap pos={[-576, -240]} tileset={TILESET} tiles={TILES} />

      <CollisionBox pos={[-576, -240]} size={[336, 48]} tags={['platform']} />
      <CollisionBox pos={[240, -240]} size={[336, 48]} tags={['platform']} />
      
      <CollisionBox pos={[-576, -96]} size={[192, 48]} tags={['platform']} />
      <CollisionBox pos={[384, -96]} size={[192, 48]} tags={['platform']} />

      <CollisionBox pos={[-576, 48]} size={[192, 144]} tags={['solid']} />
      <CollisionBox pos={[-240, 48]} size={[480, 48]} tags={['platform']} />
      <CollisionBox pos={[384, 48]} size={[192, 144]} tags={['solid']} />

      <CollisionBox pos={[-384, 192]} size={[144, 144]} tags={['solid']} />
      <CollisionBox pos={[-96, 192]} size={[192, 48]} tags={['platform']} />
      <CollisionBox pos={[240, 192]} size={[144, 144]} tags={['solid']} />

      <CollisionBox pos={[-240, 336]} size={[480, 144]} tags={['solid']} />
    </>
  );
}