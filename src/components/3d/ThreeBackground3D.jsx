import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer in pure black #000000
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0075);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 85;
    camera.position.y = 15;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Interactive 3D Wave Particle Plane in #B7D63D & #F3EFE6
    const planeWidth = 240;
    const planeDepth = 240;
    const cols = 52;
    const rows = 50;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(cols * rows * 3);
    const colors = new Float32Array(cols * rows * 3);
    const initialY = new Float32Array(cols * rows);

    const colorLime = new THREE.Color(0xb7d63d);
    const colorIvory = new THREE.Color(0xf3efe6);
    const colorMutedLime = new THREE.Color(0x8da728);

    let idx = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = (i / cols - 0.5) * planeWidth;
        const z = (j / rows - 0.5) * planeDepth - 20;
        const y = -18;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        initialY[idx] = y;

        // Gradient color across wave using the new palette
        const ratio = (i + j) / (cols + rows);
        const col = colorLime.clone().lerp(colorIvory, ratio * 0.6).lerp(colorMutedLime, Math.sin(ratio * Math.PI));

        colors[idx * 3] = col.r;
        colors[idx * 3 + 1] = col.g;
        colors[idx * 3 + 2] = col.b;

        idx++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture (circle glow)
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(243, 239, 230, 1)');
      grad.addColorStop(0.35, 'rgba(183, 214, 61, 0.85)');
      grad.addColorStop(0.7, 'rgba(183, 214, 61, 0.2)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.3,
      map: createParticleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const waveParticles = new THREE.Points(geometry, particleMaterial);
    rootGroup.add(waveParticles);

    // 2. Floating 3D Geometric Shards (#B7D63D & #F3EFE6)
    const shardsGroup = new THREE.Group();
    rootGroup.add(shardsGroup);

    const shardMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0xb7d63d,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
        roughness: 0.1,
        metalness: 0.9
      }),
      new THREE.MeshStandardMaterial({
        color: 0xf3efe6,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        roughness: 0.1,
        metalness: 0.9
      }),
      new THREE.MeshStandardMaterial({
        color: 0xc6e44a,
        wireframe: true,
        transparent: true,
        opacity: 0.38,
        roughness: 0.2,
        metalness: 0.8
      })
    ];

    const shardGeometries = [
      new THREE.IcosahedronGeometry(3.5, 0),
      new THREE.OctahedronGeometry(4, 0),
      new THREE.TetrahedronGeometry(4.5, 0),
      new THREE.TorusGeometry(3.2, 0.4, 8, 24),
      new THREE.DodecahedronGeometry(3, 0)
    ];

    const shards = [];
    const shardCount = 22;

    for (let i = 0; i < shardCount; i++) {
      const geo = shardGeometries[i % shardGeometries.length];
      const mat = shardMaterials[i % shardMaterials.length];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        (Math.random() - 0.5) * 160,
        (Math.random() - 0.5) * 80 + 10,
        (Math.random() - 0.5) * 120
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const rotSpeed = {
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015
      };

      const floatSpeed = Math.random() * 0.02 + 0.005;
      const floatAmp = Math.random() * 3 + 2;
      const baseY = mesh.position.y;

      shardsGroup.add(mesh);
      shards.push({ mesh, rotSpeed, floatSpeed, floatAmp, baseY, time: Math.random() * 100 });
    }

    // 3. Dynamic Connecting 3D Constellation Nodes in #B7D63D
    const constelCount = 70;
    const constelGeo = new THREE.BufferGeometry();
    const constelPos = new Float32Array(constelCount * 3);
    const constelVel = [];

    for (let i = 0; i < constelCount; i++) {
      constelPos[i * 3] = (Math.random() - 0.5) * 140;
      constelPos[i * 3 + 1] = (Math.random() - 0.5) * 70 + 15;
      constelPos[i * 3 + 2] = (Math.random() - 0.5) * 80;

      constelVel.push({
        x: (Math.random() - 0.5) * 0.06,
        y: (Math.random() - 0.5) * 0.06,
        z: (Math.random() - 0.5) * 0.06
      });
    }

    constelGeo.setAttribute('position', new THREE.BufferAttribute(constelPos, 3));
    const constelMat = new THREE.PointsMaterial({
      size: 3.5,
      color: 0xb7d63d,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      map: createParticleTexture()
    });
    const constelPoints = new THREE.Points(constelGeo, constelMat);
    rootGroup.add(constelPoints);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xf3efe6, 1.4);
    scene.add(ambientLight);

    const lightLime = new THREE.PointLight(0xb7d63d, 6, 220);
    lightLime.position.set(40, 30, 40);
    scene.add(lightLime);

    const lightIvory = new THREE.PointLight(0xf3efe6, 4, 200);
    lightIvory.position.set(-40, -20, 30);
    scene.add(lightIvory);

    // 5. Mouse Parallax & Scroll Reaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;
    let targetScrollY = 0;

    const handlePointerMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Animation Loop (60 FPS)
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Smooth scroll lerp
      scrollY += (targetScrollY - scrollY) * 0.06;

      // Camera responds in 3D
      camera.position.x = mouse.x * 14;
      camera.position.y = 15 + mouse.y * 10 - scrollY * 0.015;
      camera.position.z = 85 - scrollY * 0.01;
      camera.lookAt(0, -scrollY * 0.012, 0);

      // Animate 3D Wave Particles
      const posAttr = waveParticles.geometry.attributes.position;
      const posArr = posAttr.array;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const pIndex = (i * rows + j) * 3;
          const u = i / cols;
          const v = j / rows;

          const wave1 = Math.sin(u * 8 + time * 1.5) * 5.5;
          const wave2 = Math.cos(v * 7 + time * 1.2) * 4.5;
          const wave3 = Math.sin((u + v) * 5 + time * 2) * 3;

          posArr[pIndex + 1] = initialY[i * rows + j] + wave1 + wave2 + wave3;
        }
      }
      posAttr.needsUpdate = true;

      // Animate 3D Floating Shards
      shards.forEach((s) => {
        s.mesh.rotation.x += s.rotSpeed.x;
        s.mesh.rotation.y += s.rotSpeed.y;
        s.mesh.rotation.z += s.rotSpeed.z;

        s.time += s.floatSpeed;
        s.mesh.position.y = s.baseY + Math.sin(s.time) * s.floatAmp;
      });

      // Animate Constellation Points
      const constelPosArr = constelPoints.geometry.attributes.position.array;
      for (let i = 0; i < constelCount; i++) {
        const i3 = i * 3;
        constelPosArr[i3] += constelVel[i].x;
        constelPosArr[i3 + 1] += constelVel[i].y;
        constelPosArr[i3 + 2] += constelVel[i].z;

        if (Math.abs(constelPosArr[i3]) > 80) constelVel[i].x *= -1;
        if (Math.abs(constelPosArr[i3 + 1] - 15) > 40) constelVel[i].y *= -1;
        if (Math.abs(constelPosArr[i3 + 2]) > 50) constelVel[i].z *= -1;
      }
      constelPoints.geometry.attributes.position.needsUpdate = true;

      rootGroup.rotation.y = time * 0.02 + mouse.x * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      geometry.dispose();
      particleMaterial.dispose();
      constelGeo.dispose();
      constelMat.dispose();

      shardGeometries.forEach((g) => g.dispose());
      shardMaterials.forEach((m) => m.dispose());

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
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    />
  );
};
