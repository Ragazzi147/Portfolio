import { navLinks } from '../data/site';

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">lucas.ragazzi</div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
