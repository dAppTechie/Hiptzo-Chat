const DirectMessages = ({ id, name }) => {
  let rand = Math.floor(Math.random() * 99999) + 10000;

  return (
    <div>
      <div className="avatar cursor-pointer space-x-2">
        <div className="w-5 rounded-full">
          <img src={`https://api.lorem.space/image/face?hash=${rand}`} />
        </div>
        <span className="text-sm">{name}</span>
      </div>
    </div>
  );
};
export default DirectMessages;
