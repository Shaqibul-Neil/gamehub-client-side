const Character = ({ character }) => {
  return (
    <div className="flex gap-8 flex-col">
      <figure className="w-64 h-64 mx-auto">
        <img
          src={character?.image}
          alt={character?.name}
          className="w-64 h-64 drop-shadow-[0_0_5px_rgba(0,255,224,0.8)]"
        />
      </figure>
      <div className="space-y-8 text-center">
        <h2 className="text-2xl">{character?.name}</h2>
        <p className="text-primary">{character?.bio}</p>
      </div>
    </div>
  );
};

export default Character;
