export default function ToggleMenuButton({ open, setOpen }) {
  return (
    <button
      className="md:hidden text-2xl"
      onClick={() => setOpen(!open)}
    >
      ☰
    </button>
  );
}

