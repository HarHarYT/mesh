function convertPaths() {
  const inputPathsElement = document.getElementById('inputPaths');
  const outputPathsElement = document.getElementById('outputPaths');

  const inputPaths = inputPathsElement.value.trim();

  if (inputPaths === '') {
    alert('Please enter paths.');
    return;
  }

  const pathsArray = inputPaths.split(',');

  const fixedPaths = pathsArray.map((path) => {
    const parts = path.trim().split('/');
    return '/Game/' + parts.slice(3).join('/').replace('.uasset', '.uasset').replace('.', '_C.');
  });

  outputPathsElement.innerHTML = '<p>Fixed Paths:</p><ul>' + fixedPaths.map((fixedPath) => `<li>${fixedPath}</li>`).join('') + '</ul>';
}
