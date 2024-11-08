export function formatPostDate(dateString) {
  const dataObject = new Date(dateString)
  const formattedDate = dataObject.toISOString().split("T")[0]
  return formattedDate
}