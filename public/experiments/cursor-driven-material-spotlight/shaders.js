export const vertexPars = `varying vec3 vWPos;`;

export const vertexMain = `vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`;

export const fragmentPars = `
  uniform vec3 uHitPoint;
  uniform float uActive, uRadius, uSoftness;
  varying vec3 vWPos;
`;

export const fragmentMain = `
  float d = distance(vWPos, uHitPoint);
  float reveal = 1.0 - smoothstep(uRadius, uRadius + uSoftness, d);
  float mask = reveal * uActive;
  roughnessFactor = mix(0.95, 0.45, mask);
  diffuseColor.rgb *= mix(1.0, 0.5, mask);
`;
