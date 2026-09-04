import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  error?: string;
  className?: string;
}

export function CustomDropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  name,
  error,
  className = "",
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Hidden input for HTML form accessibility/compat if needed */}
      {name && <input type="hidden" name={name} value={value} />}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full rounded-sm border px-4 py-3 text-sm text-left outline-none transition-all flex items-center justify-between bg-[color-mix(in_oklab,var(--teal-deep)_14%,transparent)] ${
          isOpen
            ? "border-[var(--gold)] ring-1 ring-[var(--gold)]"
            : error
              ? "border-red-500/80"
              : "border-border hover:border-[var(--gold)]/70 focus:border-[var(--gold)]"
        }`}
      >
        <span className={value ? "text-foreground font-medium" : "text-muted-foreground"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`size-4 text-[var(--gold-bright)] transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-sm border border-[var(--gold)] bg-[#0d221e] py-1.5 shadow-[var(--shadow-glow-teal)] max-h-64 overflow-y-auto animate-in fade-in-50 zoom-in-95 duration-150"
        >
          {options.map((option) => {
            const isSelected = value === option;
            return (
              <div
                key={option}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option)}
                className={`group flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer select-none transition-colors duration-150 ${
                  isSelected
                    ? "bg-[color-mix(in_oklab,var(--gold)_20%,transparent)] text-[var(--gold-bright)] font-semibold"
                    : "text-white hover:bg-[var(--gold)] hover:text-black font-normal"
                }`}
              >
                <span>{option}</span>
                {isSelected && (
                  <Check className="size-4 text-[var(--gold-bright)] group-hover:text-black shrink-0 ml-2" />
                )}
              </div>
            );
          })}
        </div>
      )}

      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
