import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeDreamScene({ theme = 'light' }) {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const sceneRef = useRef(null);

  // Update Fog and Lighting when theme switches
  useEffect(() => {
    if (sceneRef.current) {
      const isDark = theme === 'dark';
      sceneRef.current.fog.color.setHex(isDark ? 0x0F0721 : 0xFAF7FF);
    }
  }, [theme]);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const isDarkInitial = document.documentElement.getAttribute('data-theme') === 'dark';
    scene.fog = new THREE.FogExp2(isDarkInitial ? 0x0F0721 : 0xFAF7FF, 0.016);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xE9D5FF, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xFBCFE8, 1.3);
    dirLight1.position.set(8, 12, 10);
    scene.add(dirLight1);

    const pointLight = new THREE.PointLight(0xA855F7, 2.2, 35);
    pointLight.position.set(-6, -4, 8);
    scene.add(pointLight);

    const cyanLight = new THREE.PointLight(0x38BDF8, 1.6, 30);
    cyanLight.position.set(6, 6, 4);
    scene.add(cyanLight);

    // Group for objects
    const dreamGroup = new THREE.Group();
    scene.add(dreamGroup);

    // 1. Star Particles Field
    const starCount = 1000;
    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const scales = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      scales[i] = Math.random() * 0.8 + 0.3;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Custom star texture
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 32;
    starCanvas.height = 32;
    const ctx = starCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(216, 180, 254, 0.9)');
    grad.addColorStop(0.7, 'rgba(168, 85, 247, 0.4)');
    grad.addColorStop(1, 'rgba(168, 85, 247, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();

    const starTexture = new THREE.CanvasTexture(starCanvas);
    const starMaterial = new THREE.PointsMaterial({
      size: 0.48,
      map: starTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    dreamGroup.add(starField);

    // 2. Floating 3D Geometric Stars
    const createStarGeometry = (arms = 5, rOuter = 0.7, rInner = 0.35, depth = 0.25) => {
      const shape = new THREE.Shape();
      for (let i = 0; i < arms * 2; i++) {
        const r = i % 2 === 0 ? rOuter : rInner;
        const angle = (i / (arms * 2)) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      shape.closePath();

      const extrudeSettings = {
        depth,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.08,
      };
      return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    };

    const floatingItems = [];
    const starGeom = createStarGeometry();

    const starMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0xFDE047,
        emissive: 0xCA8A04,
        emissiveIntensity: 0.35,
        roughness: 0.2,
        metalness: 0.1,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xF472B6,
        emissive: 0xDB2777,
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.1,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xC084FC,
        emissive: 0x9333EA,
        emissiveIntensity: 0.35,
        roughness: 0.2,
        metalness: 0.1,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x38BDF8,
        emissive: 0x0284C7,
        emissiveIntensity: 0.35,
        roughness: 0.2,
        metalness: 0.1,
      }),
    ];

    // Spawn floating stars
    for (let i = 0; i < 16; i++) {
      const mat = starMaterials[i % starMaterials.length];
      const mesh = new THREE.Mesh(starGeom, mat);
      
      const x = (Math.random() - 0.5) * 36;
      const y = (Math.random() - 0.5) * 26;
      const z = (Math.random() - 0.5) * 16 - 2;
      mesh.position.set(x, y, z);

      const scale = 0.45 + Math.random() * 0.45;
      mesh.scale.set(scale, scale, scale);

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      dreamGroup.add(mesh);
      floatingItems.push({
        mesh,
        baseY: y,
        speed: 0.008 + Math.random() * 0.012,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    // 3. Floating Glowing Crystals (Octahedrons)
    const crystalGeom = new THREE.OctahedronGeometry(0.7, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0xE879F9,
      emissive: 0xC026D3,
      emissiveIntensity: 0.4,
      roughness: 0.1,
      metalness: 0.3,
      transparent: true,
      opacity: 0.85,
    });

    for (let c = 0; c < 6; c++) {
      const crystalMesh = new THREE.Mesh(crystalGeom, crystalMat);
      const cx = (Math.random() - 0.5) * 30;
      const cy = (Math.random() - 0.5) * 22;
      const cz = (Math.random() - 0.5) * 14 - 3;
      crystalMesh.position.set(cx, cy, cz);
      const cScale = 0.5 + Math.random() * 0.4;
      crystalMesh.scale.set(cScale, cScale * 1.5, cScale);
      dreamGroup.add(crystalMesh);

      floatingItems.push({
        mesh: crystalMesh,
        baseY: cy,
        speed: 0.01 + Math.random() * 0.01,
        rotSpeedX: 0.015,
        rotSpeedY: 0.02,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    // 4. Floating Dream Planets / Orbs with Rings
    const planetGroup = new THREE.Group();
    const sphereGeom = new THREE.SphereGeometry(1.2, 32, 32);
    const ringGeom = new THREE.RingGeometry(1.5, 2.2, 32);

    const planetMat = new THREE.MeshStandardMaterial({
      color: 0xDDD6FE,
      roughness: 0.3,
      metalness: 0.2,
      emissive: 0x8B5CF6,
      emissiveIntensity: 0.25,
    });

    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xC084FC,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
    });

    const planet1 = new THREE.Mesh(sphereGeom, planetMat);
    const ring1 = new THREE.Mesh(ringGeom, ringMat);
    ring1.rotation.x = Math.PI / 2.3;
    planet1.add(ring1);
    planet1.position.set(-13, 7, -6);
    planet1.scale.set(0.9, 0.9, 0.9);
    planetGroup.add(planet1);

    const planet2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.85, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0xFBCFE8,
        roughness: 0.4,
        emissive: 0xEC4899,
        emissiveIntensity: 0.25,
      })
    );
    planet2.position.set(14, -6, -4);
    planetGroup.add(planet2);

    dreamGroup.add(planetGroup);

    // 5. Slowly Drifting Stylized Lavender Clouds
    const cloudGroup = new THREE.Group();
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xEDE9FE,
      emissive: 0xDDD6FE,
      emissiveIntensity: 0.2,
      roughness: 0.8,
      transparent: true,
      opacity: 0.4,
    });

    const createCloudCluster = () => {
      const cluster = new THREE.Group();
      const count = 5 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        const rad = 0.8 + Math.random() * 0.7;
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(rad, 16, 16), cloudMat);
        sphere.position.set(
          (Math.random() - 0.5) * 2.2,
          (Math.random() - 0.5) * 0.8,
          (Math.random() - 0.5) * 1.5
        );
        cluster.add(sphere);
      }
      return cluster;
    };

    const clouds = [];
    for (let c = 0; c < 4; c++) {
      const cloud = createCloudCluster();
      const cx = (Math.random() - 0.5) * 35;
      const cy = (Math.random() - 0.5) * 20;
      const cz = -8 - Math.random() * 6;
      cloud.position.set(cx, cy, cz);
      cloudGroup.add(cloud);
      clouds.push({
        group: cloud,
        speedX: 0.003 + Math.random() * 0.004,
      });
    }
    dreamGroup.add(cloudGroup);

    // Mouse Tracking for Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      camera.position.x = currentMouseX * 1.6;
      camera.position.y = currentMouseY * 1.1;
      camera.lookAt(0, 0, 0);

      // Star field subtle rotation
      starField.rotation.y = elapsedTime * 0.02;
      starField.rotation.x = elapsedTime * 0.008;

      // Floating items animation (stars & crystals)
      floatingItems.forEach((item) => {
        item.mesh.position.y = item.baseY + Math.sin(elapsedTime * 1.2 + item.floatOffset) * 0.6;
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
      });

      // Drifting clouds
      clouds.forEach((cl) => {
        cl.group.position.x += cl.speedX;
        if (cl.group.position.x > 25) {
          cl.group.position.x = -25;
        }
      });

      // Planets rotation
      planet1.rotation.y += 0.005;
      planet2.rotation.y += 0.008;
      planet1.position.y = 7 + Math.sin(elapsedTime * 0.8) * 0.4;
      planet2.position.y = -6 + Math.cos(elapsedTime * 0.9) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      starTexture.dispose();
      starGeom.dispose();
      crystalGeom.dispose();
      crystalMat.dispose();
      sphereGeom.dispose();
      ringGeom.dispose();
      cloudMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {!hasWebGL && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(221, 214, 254, 0.4) 0%, rgba(248, 245, 254, 0.8) 100%)',
          }}
        />
      )}
    </div>
  );
}
