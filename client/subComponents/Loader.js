const styles = {
  wrapper: 'flex items-center justify-center py-3 mt-5',
  spinner: 'h-32 w-32 animate-spin rounded-full border-b-2 border-green-700',
};

const Loader = () => (
  <div className={styles.wrapper}>
    <div className={styles.spinner} />
  </div>
);

export default Loader;
