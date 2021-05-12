function colorGenerator() {
  return `rgb(${1 + Math.random() * 100}, ${50 + Math.random() * 100}, ${
    100 + Math.random() * 100
  })`;
}

function rotate(speed, angle) {
  const speedVelocity = {
    x: speed.x * Math.cos(angle) - speed.y * Math.sin(angle),
    y: speed.x * Math.sin(angle) + speed.y * Math.cos(angle),
  };
  return speedVelocity;
}

function checkCollision(ant, nextant) {
  const dx = ant.speed.x - nextant.speed.x;
  const dy = ant.speed.y - nextant.speed.y;

  const xs = nextant.positionX - ant.positionX;
  const ys = nextant.positionY - ant.positionY;
  if (dx * xs + dy * ys >= 0) {
    const angle = -Math.atan2(
      nextant.positionY - ant.positionY,
      nextant.positionX - ant.positionX
    );
    const m1 = ant.mass;
    const m2 = nextant.mass;

    const u1 = rotate(ant.speed, angle);
    const u2 = rotate(nextant.speed, angle);

    const v1 = {
      x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
      y: u1.y,
    };

    const v2 = {
      x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
      y: u2.y,
    };

    const vF1 = rotate(v1, -angle);
    const vF2 = rotate(v2, -angle);

    ant.speed.x = vF1.x;
    ant.speed.y = vF1.y;

    nextant.speed.x = vF2.x;
    nextant.speed.y = vF2.y;
  }
}

function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
