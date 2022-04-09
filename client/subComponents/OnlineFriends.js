const OnlineFriends = (id, name) => {
  let rand = Math.floor(Math.random() * 99999) + 10000;

  return (
    <div>
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={`https://api.lorem.space/image/face?hash=${rand}`} />
        </div>
      </div>
    </div>
  );
};
export default OnlineFriends;
