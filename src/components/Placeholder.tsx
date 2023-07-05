type PlaceholderProps = { message: string };

export function Placeholder({ message }: PlaceholderProps) {
  return (
    <div className="flex justify-center py-5">
      <h5>{message}</h5>
    </div>
  );
}
