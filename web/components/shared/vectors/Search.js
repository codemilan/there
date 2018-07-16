export default ({ stroke = 'black', ...props }) => (
  <svg viewBox="0 0 13 13" width={13} height={13} fill="none" {...props}>
    <path
      d="M5.889 10.778a4.889 4.889 0 1 0 0-9.778 4.889 4.889 0 0 0 0 9.778zM12 12L9.342 9.342"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
