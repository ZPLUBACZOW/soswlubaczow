export default function GetFileName(String) {
  const underscoreIndex = String.indexOf('_')

  if (underscoreIndex !== -1) {
    return String.substring(underscoreIndex + 1)
  } else {
    return String
  }
}
