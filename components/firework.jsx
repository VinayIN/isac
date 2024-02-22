import React, { useEffect, useRef } from 'react';

const Fireworks = ({ id }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const fireworks = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth - 100;
      canvas.height = window.innerHeight - 100;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const random = (min, max) => Math.random() * (max - min) + min;

    const createFirework = () => {
      const x = random(0, canvas.width);
      const color = `hsl(${random(0, 360)}, 100%, 50%)`;

      for (let i = 0; i < 50; i++) {
        const angle = Math.PI * 2 * random(0, 1);
        const speed = random(1, 5);
        fireworks.push({ x, y: canvas.height, color, angle, speed, life: 100 });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fireworks.forEach((firework, index) => {
        ctx.beginPath();
        ctx.arc(firework.x, firework.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = firework.color;
        ctx.fill();

        firework.x += Math.cos(firework.angle) * firework.speed;
        firework.y += Math.sin(firework.angle) * firework.speed;
        firework.speed *= 1; // Slight deceleration
        firework.life -= 1;

        if (firework.life <= 0) {
          fireworks.splice(index, 1);
        }
      });
      requestAnimationFrame(animate);
    };

    animate();
    const intervalId = setInterval(createFirework, 900);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(intervalId);
    };
  }, []);

  return <canvas ref={canvasRef} id={id} style={{ position: 'absolute' }} />;
};

export default Fireworks;