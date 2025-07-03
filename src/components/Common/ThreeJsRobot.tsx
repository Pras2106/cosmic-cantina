import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeJsRobotProps {
  onRobotClick: () => void;
}

const ThreeJsRobot: React.FC<ThreeJsRobotProps> = ({ onRobotClick }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<THREE.Group>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 280 / 280, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(280, 280);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced lighting with cosmic theme
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x8b5cf6, 1.2);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const blueLight = new THREE.PointLight(0x8b5cf6, 0.8, 15);
    blueLight.position.set(-3, 3, 3);
    scene.add(blueLight);

    const greenLight = new THREE.PointLight(0x22c55e, 0.6, 12);
    greenLight.position.set(2, 2, -2);
    scene.add(greenLight);

    const yellowLight = new THREE.PointLight(0xf59e0b, 0.4, 10);
    yellowLight.position.set(0, -2, 4);
    scene.add(yellowLight);

    // Create enhanced R2-D2 style robot
    const robotGroup = new THREE.Group();
    robotRef.current = robotGroup;

    // Enhanced materials with cosmic theme
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xf0f0f0,
      shininess: 120,
      reflectivity: 0.3
    });
    
    const cosmicMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x8b5cf6,
      shininess: 100,
      emissive: 0x2d1b69
    });
    
    const greenMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x22c55e,
      shininess: 100,
      emissive: 0x064e3b,
      emissiveIntensity: 0.3
    });

    const yellowMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xf59e0b,
      shininess: 100,
      emissive: 0x92400e
    });

    // Main body (cylinder)
    const bodyGeometry = new THREE.CylinderGeometry(0.9, 0.9, 1.6, 20);
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.8;
    body.castShadow = true;
    robotGroup.add(body);

    // Head (dome)
    const headGeometry = new THREE.SphereGeometry(0.65, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    const head = new THREE.Mesh(headGeometry, bodyMaterial);
    head.position.y = 1.9;
    head.castShadow = true;
    robotGroup.add(head);

    // Enhanced cosmic panels
    const panelGeometry = new THREE.BoxGeometry(0.35, 0.9, 0.08);
    const leftPanel = new THREE.Mesh(panelGeometry, cosmicMaterial);
    leftPanel.position.set(-0.55, 0.8, 0.85);
    robotGroup.add(leftPanel);

    const rightPanel = new THREE.Mesh(panelGeometry, cosmicMaterial);
    rightPanel.position.set(0.55, 0.8, 0.85);
    robotGroup.add(rightPanel);

    // Multiple eyes/sensors
    const eyeGeometry = new THREE.SphereGeometry(0.12, 12, 12);
    const mainEye = new THREE.Mesh(eyeGeometry, yellowMaterial);
    mainEye.position.set(0, 1.95, 0.6);
    robotGroup.add(mainEye);

    const leftEye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), greenMaterial);
    leftEye.position.set(-0.2, 1.85, 0.58);
    robotGroup.add(leftEye);

    const rightEye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), cosmicMaterial);
    rightEye.position.set(0.2, 1.85, 0.58);
    robotGroup.add(rightEye);

    // Enhanced legs
    const legGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.9, 12);
    const legMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x999999,
      shininess: 80
    });
    
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.35, -0.45, 0);
    leftLeg.castShadow = true;
    robotGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.35, -0.45, 0);
    rightLeg.castShadow = true;
    robotGroup.add(rightLeg);

    const centerLeg = new THREE.Mesh(legGeometry, legMaterial);
    centerLeg.position.set(0, -0.45, -0.45);
    centerLeg.castShadow = true;
    robotGroup.add(centerLeg);

    // Enhanced details
    const detailGeometry = new THREE.BoxGeometry(0.25, 0.12, 0.06);
    for (let i = 0; i < 4; i++) {
      const detail = new THREE.Mesh(detailGeometry, i % 2 === 0 ? cosmicMaterial : greenMaterial);
      detail.position.set(0, 0.2 + i * 0.25, 0.85);
      robotGroup.add(detail);
    }

    // Add antenna
    const antennaGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
    const antenna = new THREE.Mesh(antennaGeometry, legMaterial);
    antenna.position.set(0.3, 2.3, 0);
    robotGroup.add(antenna);

    const antennaTop = new THREE.SphereGeometry(0.05, 8, 8);
    const antennaTopMesh = new THREE.Mesh(antennaTop, yellowMaterial);
    antennaTopMesh.position.set(0.3, 2.45, 0);
    robotGroup.add(antennaTopMesh);

    scene.add(robotGroup);
    camera.position.z = 5;

    // Animation variables
    let time = 0;
    const baseRotationSpeed = 0.008;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.016;

      if (robotRef.current) {
        // Enhanced floating motion
        robotRef.current.position.y = Math.sin(time * 1.5) * 0.15;
        
        // Slow rotation with variation
        robotRef.current.rotation.y += baseRotationSpeed + Math.sin(time * 0.5) * 0.002;
        
        // Slight tilt animation
        robotRef.current.rotation.z = Math.sin(time * 1.2) * 0.08;
        robotRef.current.rotation.x = Math.cos(time * 0.8) * 0.03;

        // Enhanced scale effect when hovered
        const targetScale = isHovered ? 1.15 : 1;
        robotRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        // Enhanced eye glow animations
        if (mainEye.material instanceof THREE.MeshPhongMaterial) {
          const intensity = 0.3 + Math.sin(time * 3) * 0.4;
          mainEye.material.emissiveIntensity = intensity;
        }

        if (leftEye.material instanceof THREE.MeshPhongMaterial) {
          const intensity = 0.2 + Math.sin(time * 4 + 1) * 0.3;
          leftEye.material.emissiveIntensity = intensity;
        }

        if (rightEye.material instanceof THREE.MeshPhongMaterial) {
          const intensity = 0.2 + Math.sin(time * 5 + 2) * 0.3;
          rightEye.material.emissiveIntensity = intensity;
        }

        // Antenna animation
        if (antennaTopMesh.material instanceof THREE.MeshPhongMaterial) {
          const intensity = 0.4 + Math.sin(time * 6) * 0.4;
          antennaTopMesh.material.emissiveIntensity = intensity;
        }

        // Light animations
        blueLight.intensity = 0.8 + Math.sin(time * 2) * 0.3;
        greenLight.intensity = 0.6 + Math.sin(time * 2.5 + 1) * 0.2;
        yellowLight.intensity = 0.4 + Math.sin(time * 3 + 2) * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Enhanced mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(robotGroup.children, true);
      
      setIsHovered(intersects.length > 0);
    };

    const handleClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(robotGroup.children, true);
      
      if (intersects.length > 0) {
        onRobotClick();
        
        // Enhanced click animation
        if (robotRef.current) {
          robotRef.current.rotation.y += Math.PI / 3;
          
          // Multi-color flash effect
          robotGroup.children.forEach((child, index) => {
            if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial) {
              const originalEmissive = child.material.emissive.clone();
              const colors = [0x8b5cf6, 0x22c55e, 0xf59e0b];
              child.material.emissive.setHex(colors[index % colors.length]);
              child.material.emissiveIntensity = 0.8;
              
              setTimeout(() => {
                child.material.emissive.copy(originalEmissive);
                child.material.emissiveIntensity = 0.3;
              }, 300);
            }
          });
        }
      }
    };

    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('click', handleClick);
    renderer.domElement.style.cursor = 'pointer';

    // Cleanup
    return () => {
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('click', handleClick);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isHovered, onRobotClick]);

  return (
    <div 
      ref={mountRef} 
      className="fixed bottom-6 right-6 z-40 rounded-2xl overflow-hidden glass-morphism border border-white/20"
      style={{ 
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(34, 197, 94, 0.15) 50%, transparent 80%)',
        padding: '15px',
        boxShadow: '0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)'
      }}
    />
  );
};

export default ThreeJsRobot;