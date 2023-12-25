const Icon = ({ id, size = 24, color = 'black' }) => {
  return (
    <svg width={size} height={size}>
      <use href={`/icons/sprite.svg#${id}`} fill={color} />
    </svg>
  )
}

export default Icon
