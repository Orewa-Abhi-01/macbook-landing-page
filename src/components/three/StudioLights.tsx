import { Lightformer, Environment } from "@react-three/drei";

const StudioLights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 5, -5]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 5, -5]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
      <spotLight
        angle={0.15}
        position={[-2, 10, 5]}
        intensity={Math.PI * 0.2}
        decay={0}
      />
      <spotLight
        angle={0.15}
        position={[0, -25, 10]}
        intensity={Math.PI * 0.2}
        decay={0}
      />
      <spotLight
        angle={0.15}
        position={[-2, 10, 5]}
        intensity={Math.PI * 0.2}
        decay={0}
      />
    </group>
  );
};

export default StudioLights;
