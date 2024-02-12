// Import the entire fs-extra package as a CommonJS module
import pkg from 'fs-extra';
const { copySync } = pkg;

async function postbuild() {
  // Your existing postbuild logic
  // ...

  // Copy the static files from the .next output directory to the out directory
  try {
    copySync('./.next/server/pages', './out', {
      overwrite: true,
      recursive: true,
    });
    console.log('Static files have been copied to the out directory.');
  } catch (err) {
    console.error('Error copying static files:', err);
  }
}

postbuild();