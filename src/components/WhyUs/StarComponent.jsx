export default function StarComponent({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M12 2L9.24 8.26 2 9.35l5.46 4.73L5.65 21 12 17.27 18.35 21l-1.81-7.92L22 9.35l-7.24-1.09L12 2z"
      />
    </svg>
  )
}