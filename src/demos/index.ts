import { EmptyDemo } from "./EmptyDemo";
import { MultiplayerDemo } from "./MultiplayerDemo";
import { PhysicsDemo } from "./PhysicsDemo";
import { PlatformerDemo } from "./PlatformerDemo";
import { RotatingBoxDemo } from "./RotatingBoxDemo";

export const demos = [
  { name: 'Empty', path: '/empty', component: EmptyDemo },
  { name: 'Rotating Box', path: '/rotating-box', component: RotatingBoxDemo },
  { name: 'Platformer', path: '/platformer', component: PlatformerDemo },
  { name: 'Split-screen Multiplayer', path: '/multiplayer', component: MultiplayerDemo },
  { name: 'Physics (Marble Jar)', path: '/physics', component: PhysicsDemo },
];