

const InfoSection =({scrollPosition}) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden  bg-sand ">
          {scrollPosition > 1000 && (
            <div><p>infoSection</p>
            <p>infoSection</p>
            <p>infoSection</p>
            <p>infoSection</p>
            <p>infoSection</p>
            <p>infoSection</p></div>
          )}
    </div>
  );
}

export default InfoSection