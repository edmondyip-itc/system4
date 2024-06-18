const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/[0-9A-Fa-f]{2}/g).map((x) => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

export default hex2rgba