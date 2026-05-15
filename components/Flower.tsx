type Props = {
  className?: string;
  petal?: string;
  center?: string;
  stroke?: string;
};

export default function Flower({
  className,
  petal = "#CAD183",
  center = "#66033C",
  stroke = "#66033C",
}: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g stroke={stroke} strokeWidth="3" strokeLinejoin="round">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="100"
            cy="50"
            rx="22"
            ry="36"
            fill={petal}
            transform={`rotate(${angle} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="22" fill={center} />
      </g>
    </svg>
  );
}
