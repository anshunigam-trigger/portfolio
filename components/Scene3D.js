"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const LABELS = [
  ["AutoML", "#4fffd3", -2.8, 1.35, -1.3],
  ["FastAPI", "#ffb84d", 2.65, 1.0, -1.15],
  ["Q-Learn", "#ff6b6b", -2.3, -1.45, -1.0],
  ["Next.js", "#a7f3d0", 2.45, -1.25, -1.35],
  ["SHAP", "#a78bfa", 0.05, 2.05, -2.1],
];

function textureFor(label, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 160;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(5, 7, 9, 0.74)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const line = ctx.createLinearGradient(0, 0, canvas.width, 0);
  line.addColorStop(0, color);
  line.addColorStop(0.65, "rgba(255,255,255,0.42)");
  line.addColorStop(1, "rgba(255,255,255,0.02)");
  ctx.strokeStyle = line;
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
  ctx.fillStyle = color;
  ctx.font = "600 36px Cascadia Code, Consolas, monospace";
  ctx.fillText(label, 38, 82);
  ctx.fillStyle = "rgba(226, 232, 240, 0.62)";
  ctx.font = "400 18px Cascadia Code, Consolas, monospace";
  ctx.fillText(`node://${label.toLowerCase().replace(".", "-")}`, 40, 115);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

export default function Scene3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 7.4);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance", preserveDrawingBuffer: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const rig = new THREE.Group();
    scene.add(rig);
    scene.add(new THREE.AmbientLight(0x5f6b78, 1.2));

    const key = new THREE.PointLight(0x4fffd3, 14, 20);
    key.position.set(-3, 4, 4);
    scene.add(key);
    const warm = new THREE.PointLight(0xffb84d, 10, 18);
    warm.position.set(4, -2, 3);
    scene.add(warm);

    const coreGeometry = new THREE.IcosahedronGeometry(1.28, 2);
    const core = new THREE.Mesh(
      coreGeometry,
      new THREE.MeshPhysicalMaterial({
        color: 0x4fffd3,
        emissive: 0x11362f,
        emissiveIntensity: 0.8,
        metalness: 0.18,
        roughness: 0.28,
        transparent: true,
        opacity: 0.78,
        clearcoat: 0.8,
      })
    );
    rig.add(core);

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(coreGeometry),
      new THREE.LineBasicMaterial({ color: 0xf5f7fb, transparent: true, opacity: 0.2 })
    );
    wire.scale.setScalar(1.012);
    rig.add(wire);

    const rings = [2.0, 2.42, 2.86].map((radius, index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.01, 12, 160),
        new THREE.MeshBasicMaterial({ color: 0x4fffd3, transparent: true, opacity: 0.34 })
      );
      ring.rotation.x = Math.PI / 2 + index * 0.4;
      ring.rotation.y = index * 0.72;
      rig.add(ring);
      return ring;
    });

    const count = window.innerWidth < 760 ? 110 : 190;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.2 + Math.random() * 3.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0xe2e8f0, size: 0.035, transparent: true, opacity: 0.78 })
    );
    rig.add(particles);

    const linePositions = [];
    for (let i = 0; i < count; i += 3) {
      const j = (i * 13 + 17) % count;
      linePositions.push(
        positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
      );
    }
    const field = new THREE.LineSegments(
      new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3)),
      new THREE.LineBasicMaterial({ color: 0x4fffd3, transparent: true, opacity: 0.08 })
    );
    rig.add(field);

    const shards = LABELS.map(([label, color, x, y, z], index) => {
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1.42, 0.44),
        new THREE.MeshBasicMaterial({ map: textureFor(label, color), transparent: true, opacity: 0.92, depthWrite: false })
      );
      mesh.position.set(x, y, z);
      mesh.rotation.set(0.12 * index, 0.55 - index * 0.22, 0.04 * index);
      rig.add(mesh);
      return mesh;
    });

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      const mobile = width < 760;
      rig.position.x = mobile ? 0 : 1.08;
      rig.position.y = mobile ? -0.3 : -0.08;
      rig.scale.setScalar(mobile ? 0.72 : 1);
      camera.position.z = mobile ? 8.6 : 7.4;
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    let raf = 0;
    const clock = new THREE.Clock();
    const render = () => {
      const elapsed = clock.getElapsedTime();
      const drift = reducedMotion ? 0 : elapsed;
      rig.rotation.y = drift * 0.13 + pointer.x * 0.1;
      rig.rotation.x = -pointer.y * 0.08;
      core.rotation.x = drift * 0.22;
      core.rotation.y = drift * 0.34;
      wire.rotation.x = -drift * 0.18;
      wire.rotation.z = drift * 0.16;
      rings.forEach((ring, index) => {
        ring.rotation.z = drift * (0.15 + index * 0.08);
        ring.rotation.y += reducedMotion ? 0 : 0.0015 * (index + 1);
      });
      particles.rotation.y = drift * 0.035;
      field.rotation.y = -drift * 0.026;
      shards.forEach((mesh) => mesh.lookAt(camera.position));
      camera.position.x += (pointer.x * 0.18 - camera.position.x) * 0.035;
      camera.position.y += (-pointer.y * 0.16 - camera.position.y) * 0.035;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      if (!reducedMotion) raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(raf);
      mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        object.geometry?.dispose?.();
        const materials = object.material ? (Array.isArray(object.material) ? object.material : [object.material]) : [];
        materials.forEach((material) => {
          material.map?.dispose?.();
          material.dispose?.();
        });
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="scene-3d absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true" />;
}

