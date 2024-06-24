const Frame5Card = ({ img, desc,para }) => {
  return (
    <div className={`flex flex-col text-center`}>
      <div className="border-1 rounded-3xl bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811]
       p-1 mx-4">
        <div className="bg-[#10022A] rounded-t-3xl flex justify-center py-12 back">
          <img src={img} alt="" />
        </div>
        <p className="bg-[#10022A] rounded-b-3xl text-white px-6 pb-10 text-justify">
          {para}
        </p>
      </div>
      <p className="font-bold py-6 text-white text-2xl">{desc}</p>
    </div>
  );
};

export default Frame5Card;