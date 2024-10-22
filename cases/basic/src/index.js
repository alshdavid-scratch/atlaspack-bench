window.addEventListener('atlaspack:import_retry', console.log);

(async () => {
  const lazyValue = await import('./lazy.js')
  console.log(lazyValue)
})()

