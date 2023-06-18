export const getFSError = () => {
  const err = new Error('FS operation failed');
  console.error(err.message);
}
