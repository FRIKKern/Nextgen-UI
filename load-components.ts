import componentNames from "./component-names"

async function loadComponents() {
  const components: { [key: string]: any } = {}

  await Promise.all(
    componentNames.map(async (componentName) => {
      const exportName = componentName
        .split("-")
        .map((word, index) => {
          if (!word || word.length === 0) {
            return ""
          }
          return index === 0
            ? word
            : (word[0] ?? "").toUpperCase() + word.slice(1)
        })
        .join("")
        .replace(".component", "")

      const importedModule = await import(`./${componentName}`)
      components[exportName] = importedModule.default
    })
  )

  return components
}

export default loadComponents
