type Player = "X" | "O" | "Both" | null;

const Square = ({
  value,
  onClick,
  winner,
}: {
  winner: Player;
  value: Player;
  onClick: () => void;
}) => {
  if (!value) {
    return (
      <button className='square' onClick={onClick} disabled={Boolean(winner)} />
    );
  }
  return (
    <div>
      <button className={`square square_${value.toLocaleLowerCase()}`} disabled>
        {value}
      </button>
    </div>
  );
};

export default Square;
