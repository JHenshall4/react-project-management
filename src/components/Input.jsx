import { forwardRef } from "react";

export default forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <label className="flex flex-col gap-1 my-4 text-sm font-bold uppercase text-stone-500">
      {label}
      {textarea ? (
        <textarea
          ref={ref}
          {...props}
          className="normal-case font-normal w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      ) : (
        <input
          ref={ref}
          {...props}
          className="normal-case font-normal w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      )}
    </label>
  );
});
