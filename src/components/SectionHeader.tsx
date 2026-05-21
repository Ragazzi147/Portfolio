import Reveal from './Reveal';

type SectionHeaderProps = {
  label: string;
  title: string;
};

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <Reveal>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  );
}
