import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroScene3D = () => {
  const mountRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root 3D Object Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Outer Holographic Icosahedron Wireframe in #B7D63D
    const icosaGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const icosaMat = new THREE.MeshStandardMaterial({
      color: 0xb7d63d,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
      roughness: 0.15,
      metalness: 0.95
    });
    const icosaMesh = new THREE.Mesh(icosaGeo, icosaMat);
    rootGroup.add(icosaMesh);

    // 2. Inner Glowing Torus Knot in #F3EFE6
    const knotGeo = new THREE.TorusKnotGeometry(0.85, 0.22, 100, 16, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0xf3efe6,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: false,
      transparent: true,
      opacity: 0.85
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    rootGroup.add(knotMesh);

    // 3. Orbiting Quantum Rings in #B7D63D
    const ringGeo = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xb7d63d,
      transparent: true,
      opacity: 0.7
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    rootGroup.add(ringMesh);

    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xd4e968,
      transparent: true,
      opacity: 0.5
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    rootGroup.add(ringMesh2);

    // 4. Glowing Particle Cloud
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0xb7d63d);
    const color2 = new THREE.Color(0xf3efe6);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.4 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const px = radius * Math.sin(phi) * Math.cos(theta);
      const py = radius * Math.sin(phi) * Math.sin(theta);
      const pz = radius * Math.cos(phi);

      particlePositions[i * 3] = px;
      particlePositions[i * 3 + 1] = py;
      particlePositions[i * 3 + 2] = pz;

      const mixed = color1.clone().lerp(color2, Math.random());
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xf3efe6, 1.3);
    scene.add(ambientLight);

    const pointLightLime = new THREE.PointLight(0xb7d63d, 4.5, 14);
    pointLightLime.position.set(3, 3, 3);
    scene.add(pointLightLime);

    const pointLightIvory = new THREE.PointLight(0xf3efe6, 3, 12);
    pointLightIvory.position.set(-3, -3, 2);
    scene.add(pointLightIvory);

    // Mouse movement handler
    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mousePos.current.targetX = x;
      mousePos.current.targetY = y;
    };

    const handlePointerEnter = () => {
      isHoveredRef.current = true;
    };

    const handlePointerLeave = () => {
      isHoveredRef.current = false;
      mousePos.current.targetX = 0;
      mousePos.current.targetY = 0;
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerenter', handlePointerEnter);
    container.addEventListener('pointerleave', handlePointerLeave);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const speedMult = isHoveredRef.current ? 1.8 : 1.0;

      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.08;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.08;

      rootGroup.rotation.y = elapsedTime * 0.3 * speedMult + mousePos.current.x * 0.7;
      rootGroup.rotation.x = elapsedTime * 0.15 * speedMult + -mousePos.current.y * 0.5;

      knotMesh.rotation.x = elapsedTime * 0.5 * speedMult;
      knotMesh.rotation.z = elapsedTime * 0.35 * speedMult;

      icosaMesh.rotation.y = -elapsedTime * 0.25 * speedMult;
      icosaMesh.rotation.z = -elapsedTime * 0.2 * speedMult;

      ringMesh.rotation.z = elapsedTime * 0.4;
      ringMesh2.rotation.z = -elapsedTime * 0.3;

      particles.rotation.y = elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointerleave', handlePointerLeave);

      icosaGeo.dispose();
      icosaMat.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '380px',
        position: 'relative',
        cursor: 'grab',
        touchAction: 'none'
      }}
      aria-label="Interactive 3D Holographic Core in Electric Lime and Ivory"
    />
  );
};
