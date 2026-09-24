import type { Locale } from '@/types/portfolio';
import { getTranslation } from '@/lib/localization';
import { englishExperience, englishSkills } from '@/data/background-en';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';

export function AboutSection({ locale = 'de' }: { readonly locale?: Locale }) {
  const copy = getTranslation(locale);
  const localizedExperience = locale === 'en' ? englishExperience : experience;
  const localizedSkills = locale === 'en' ? englishSkills : skills;
  return (
    <section
      className="about-section"
      id="ueber-mich"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-introduction">
          <div>
            <p className="eyebrow">02 / {copy.navigation.about}</p>
            <h2 id="about-title">
              {copy.about.heading[0]}
              <br />
              {copy.about.heading[1]} <span>{copy.about.heading[2]}</span>
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">{copy.about.paragraphs[0]}</p>
            <p>{copy.about.paragraphs[1]}</p>
            <p>{copy.about.paragraphs[2]}</p>
          </div>
        </div>
        <div className="experience">
          <h3>{copy.about.journey}</h3>
          <ol>
            {localizedExperience.map((item) => (
              <li key={item.title}>
                <span className="experience-period">{item.period}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="skills">
          <h3>{copy.about.skills}</h3>
          <div className="skills-grid">
            {localizedSkills.map((skill) => (
              <div className="skill" key={skill.title}>
                <h4>{skill.title}</h4>
                <p>{skill.technologies}</p>
                <span>{skill.example}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
