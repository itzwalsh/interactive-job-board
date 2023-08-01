export default function Header() {
  return (
    <header>
      <div className="bg-primary-cyan">
        {/* Mobile */}
        <img
          src="src/assets/bg-header-mobile.svg"
          alt="Mobile Header SVG"
          className="block desktop:hidden object-cover w-full h-32"
        />
        {/* Desktop */}
        <img
          src="src/assets/bg-header-desktop.svg"
          alt="Desktop Header SVG"
          className="hidden desktop:block object-cover w-full h-36"
        />
      </div>
    </header>
  )
}
