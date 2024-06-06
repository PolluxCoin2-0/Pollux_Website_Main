const Frame5Card = ({ img, desc, className }) => {
  return (
    <div className={`flex flex-col text-center ${className}`}>
      <div className="border-1 rounded-3xl bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] p-1 mx-4">
        <div className="bg-[#10022A] rounded-t-3xl flex justify-center py-12 back">
          <img src={img} alt="" />
        </div>
        <p className="bg-[#10022A] rounded-b-3xl text-white px-12 pb-10 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sint
          omnis facilis labore in veritatis suscipit consequatur ab, beatae unde
          deserunt eligendi incidunt assumenda. Sequi eveniet sapiente esse! Modi,
          sapiente dolorum soluta illo porro corporis sint. Commodi earum, aliquid
          nostrum eveniet quibusdam autem nam sed natus officiis error? Velit,
          quos?
        </p>
      </div>
      <p className="font-bold py-6 text-white text-2xl">{desc}</p>
    </div>
  );
};

export default Frame5Card;