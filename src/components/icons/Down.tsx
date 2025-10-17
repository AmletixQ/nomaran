import Up from "./ShevronArrow";

export default function Down() {
  return (
    <div {...props} className="rotate-90">
      <Up />
    </div>
  );
}
