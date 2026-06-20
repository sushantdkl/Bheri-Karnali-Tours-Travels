type FieldProps = {
  name: string;
  label: string;
  defaultValue?: string | number | null;
  placeholder?: string;
  required?: boolean;
  type?: string;
  help?: string;
};

export function TextField({ name, label, defaultValue, placeholder, required, type = "text", help }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-navyInk">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue ?? ""}
        placeholder={placeholder}
        className="rounded-lg border border-navyInk/15 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-river focus:ring-4 focus:ring-river/15"
      />
      {help ? <span className="text-xs font-medium text-navyInk/55">{help}</span> : null}
    </label>
  );
}

export function TextAreaField({ name, label, defaultValue, placeholder, required, rows = 5, help }: FieldProps & { rows?: number }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-navyInk">
      <span>{label}</span>
      <textarea
        name={name}
        required={required}
        defaultValue={defaultValue ?? ""}
        placeholder={placeholder}
        rows={rows}
        className="rounded-lg border border-navyInk/15 bg-white px-4 py-3 text-sm font-semibold leading-7 outline-none transition focus:border-river focus:ring-4 focus:ring-river/15"
      />
      {help ? <span className="text-xs font-medium text-navyInk/55">{help}</span> : null}
    </label>
  );
}

export function CheckboxField({ name, label, defaultChecked }: { name: string; label: string; defaultChecked?: boolean }) {
  return (
    <label className="flex items-center gap-3 rounded-lg border border-navyInk/10 bg-white px-4 py-3 text-sm font-bold text-navyInk">
      <input name={name} type="checkbox" defaultChecked={defaultChecked} className="h-4 w-4 accent-river" />
      <span>{label}</span>
    </label>
  );
}

export function FormActions({ cancelHref }: { cancelHref: string }) {
  return (
    <div className="flex flex-col gap-3 border-t border-navyInk/10 pt-5 sm:flex-row">
      <button type="submit" className="btn-primary justify-center">Save changes</button>
      <a href={cancelHref} className="btn-outline justify-center">Cancel</a>
    </div>
  );
}
