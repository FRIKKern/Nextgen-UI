import loadComponents from "./components/load-components"
;(async () => {
  const components = await loadComponents()

  for (const [key, value] of Object.entries(components)) {
    exports[key] = value
  }
})()
