import React from 'react';

function CircularLoader({
  diameter = 150,
  progress = 0.25,
  trackWidth = 10,
  trackColor = `#ddd`,
  indicatorWidth = 10,
  indicatorColor = `#07c`,
  indicatorCap = `round`,
  label = `Loading...`,
  labelColor = `#333`,
  spinnerMode = true,
  spinnerSpeed = 2,
}) {
  const c = diameter / 2;
  const radius = c - Math.max(trackWidth, indicatorWidth);
  const arcLength = 2 * Math.PI * radius;
  const arcOffsetRatio = 1 - progress;
  console.log(arcOffsetRatio);

  return (
    <div className="circularLoader">
      <svg className="svg-indicator" width={diameter} height={diameter} style={{transform: 'rotate(-90deg)'}}>
        <circle
          cx={c}
          cy={c}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={trackWidth}
        />
        <circle
          style={{animationDuration: `${1 * spinnerSpeed}s`}}
          className={spinnerMode ? 'spinner' : ''}
          cx={c}
          cy={c}
          fill="transparent"
          r={radius}
          stroke={indicatorColor}
          strokeWidth={indicatorWidth}
          strokeDasharray={arcLength}
          strokeDashoffset={arcLength * arcOffsetRatio}
          strokeLinecap={indicatorCap}
        />
      </svg>
    </div>
  );
}

export default CircularLoader;
