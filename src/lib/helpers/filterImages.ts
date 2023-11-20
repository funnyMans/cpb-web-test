export const filterImages = (element: any) => {
  if (element.type === "tag" && element.name === "img") {
    return null
  }
  if (element.children) {
    element.children = element.children.map(filterImages).filter(Boolean)
  }
  return element
}

export const filterElements = (element: any) => {
  const cropedHTML = element.slice(0, 3)
  const final = cropedHTML.map((item: any) =>
    item.props && typeof item.props.children === "object"
      ? item.props.children.slice(0, 4)
      : item,
  )
  return final
}
