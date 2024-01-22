interface ButtonProps {
  children?: string;
}

export default function Button({ children }: ButtonProps) {
  return (
    <div>
      <button className="bg-white px-16 py-2 font-bold text-xl shadow-lg border rounded-full">
        {children}
      </button>
    </div>
  );
}
