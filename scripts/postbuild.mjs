import pkg from 'fs-extra';
const { copySync } = pkg;

async function postbuild() {
  try {
    // Copy the "pages" from the .next output directory to the out directory
    copySync('./.next/server/pages', './out', {
      overwrite: true,
      recursive: true,
    });

    // Additionally, copy the "static" folder which includes static chunks and assets
    copySync('./.next/static', './out/_next/static', {
      overwrite: true,
      recursive: true,
    });

    // Any other directories or files you need to copy should be done here
    // For example, if you have a public folder:
    copySync('./public', './out', {
      overwrite: true,
      recursive: true,
    });

    console.log('All necessary files have been copied to the out directory.');
  } catch (err) {
    console.error('Error copying files:', err);
  }
}

postbuild();