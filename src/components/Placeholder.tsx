type PlaceholderProps = { message: string };

export function Placeholder({ message }: PlaceholderProps) {
  return (
    <div className="flex justify-center py-5">
      <h1 className="text-xl">{message}</h1>
    </div>
  );
}
