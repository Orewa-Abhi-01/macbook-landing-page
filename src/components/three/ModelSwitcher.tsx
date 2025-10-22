// import { PresentationControls } from "@react-three/drei"
// import { useRef } from "react"
// import MacbookModel14 from "../models/Macbook-14"
// import MacbookModel16 from "../models/Macbook-16"

// const ModelSwitcher = () => {
//     const smallMacbookRef = useRef();
//     const largeMacbookRef = useRef();

//     const showLargeMacbook = scale === 0.08 || scale === 0.05;

//   return (
//     <>
//     <PresentationControls>
//         <group ref={ largeMacbookRef}>
//             <MacbookModel16  scale={isMobile ? 0.05 : 0.08} />
//         </group>
//     </PresentationControls>
//      <PresentationControls>
//         <group ref={ smallMacbookRef}>
//             <MacbookModel14  scale={isMobile ? 0.05 : 0.08} />
//         </group>
//     </PresentationControls>
//     </>
//   )
// }

// export default ModelSwitcher

// import { useRef } from "react";
// import type { ComponentProps } from "react";
// import { PresentationControls } from "@react-three/drei";
// import { Group } from "three";
// import gsap from 'gsap';

// import MacbookModel16 from "../models/Macbook-16.jsx";
// import MacbookModel14 from "../models/Macbook-14.jsx";
// import {useGSAP} from "@gsap/react";
// const ANIMATION_DURATION = 1;
// const OFFSET_DISTANCE = 5;

// const fadeMeshes = (group, opacity) => {
//     if(!group) return;

//     group.traverse((child) => {
//         if(child.isMesh) {
//             child.material.transparent = true;
//             gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
//         }
//     })
// }

// const moveGroup = (group, x) => {
//     if(!group) return;

//     gsap.to(group.position, { x, duration: ANIMATION_DURATION })
// }

// const ModelSwitcher = ({ scale, isMobile }: { scale: number; isMobile: boolean }) => {
//     const SCALE_LARGE_DESKTOP = 0.08;
//     const SCALE_LARGE_MOBILE = 0.05;

//     const smallMacbookRef = useRef<Group | null>(null);
//     const largeMacbookRef = useRef<Group | null>(null);

//     const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

//     useGSAP(() => {
//         if(showLargeMacbook) {
//             moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
//             moveGroup(largeMacbookRef.current, 0);

//             fadeMeshes(smallMacbookRef.current, 0);
//             fadeMeshes(largeMacbookRef.current, 1);
//         } else {
//             moveGroup(smallMacbookRef.current, 0);
//             moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

//             fadeMeshes(smallMacbookRef.current, 1);
//             fadeMeshes(largeMacbookRef.current, 0);
//         }
//     }, [scale])

//     type ControlsConfig = ComponentProps<typeof PresentationControls>;

//     const controlsConfig: ControlsConfig = {
//         snap: true,
//         speed: 1,
//         zoom: 1,
//         azimuth: [-Infinity, Infinity],
//         config: { mass: 1, tension: 0, friction: 26 }
//     }

//     return (
//         <>
//             <PresentationControls {...controlsConfig}>
//                 <group ref={largeMacbookRef}>
//                     <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
//                 </group>
//             </PresentationControls>

//             <PresentationControls {...controlsConfig}>
//                 <group ref={smallMacbookRef}>
//                     <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
//                 </group>
//             </PresentationControls>
//         </>
//     )
// }
// export default ModelSwitcher

import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import type { ComponentProps } from "react";

import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";
import { useGSAP } from "@gsap/react";
const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

type ControlsConfig = ComponentProps<typeof PresentationControls>;


const controlsConfig: ControlsConfig = {
  snap: true,
  speed: 1,
  zoom: 1,
  azimuth: [-Infinity, Infinity],
  config: { mass: 1, tension: 0, friction: 26 },
};

const ModelSwitcher = ({ scale, isMobile }) => {
  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_LARGE_MOBILE = 0.05;

  const smallMacbookRef = useRef();
  const largeMacbookRef = useRef();

  const showLargeMacbook =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    } else {
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    }
  }, [scale]);

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};
export default ModelSwitcher;
