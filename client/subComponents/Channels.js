import { useRouter } from 'next/router';

const Channels = ({ id, name }) => {
  const router = useRouter();
  const changeUrl = () => {
    router.push(`?channel=${id}&name=${name}`);
  };

  return (
    <div className="cursor-pointer" onClick={changeUrl}>
      <span>#{name}</span>
    </div>
  );
};
export default Channels;
