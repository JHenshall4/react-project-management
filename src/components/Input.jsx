export default function Input({ label, ...props }) {
  return (
    <label className="flex flex-col">
      {label}
      <input {...props} className="bg-stone-300" />
    </label>
  );
}
