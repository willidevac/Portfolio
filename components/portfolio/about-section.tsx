import { experience } from '@/lib/portfolio';

const skills = [
  {
    title: 'Oberflächen',
    technologies: 'HTML · CSS · JavaScript',
    example: 'Galerie, Warenkorb und API-Daten verständlich darstellen.',
  },
  {
    title: 'Anwendungslogik',
    technologies: 'ES-Module · Klassen · Canvas',
    example: 'Verantwortlichkeiten trennen und Spielzustände abbilden.',
  },
  {
    title: 'Full-Stack-Projekt',
    technologies: 'Nuxt / Vue · TypeScript · Symfony',
    example: 'Frontend und Backend im Projekt KochGoat verbinden.',
  },
] as const;

export function AboutSection() {
  return (
    <section
      className="about-section"
      id="ueber-mich"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-introduction">
          <div>
            <p className="eyebrow">02 / Über mich</p>
            <h2 id="about-title">
              Von der Mechanik
              <br />
              zur <span>Software.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              Technik begleitet mich schon lange. Heute arbeite ich daran, sie
              in Code zu übersetzen.
            </p>
            <p>
              Nach meiner Ausbildung zum Kfz-Mechatroniker und acht Jahren bei
              der Bundeswehr qualifiziere ich mich für die Softwareentwicklung.
              Parallel zur Schule absolviere ich die Full-Stack-Weiterbildung
              der Developer Akademie.
            </p>
            <p>
              2027 möchte ich im dualen Informatikstudium weiterlernen und mein
              Wissen in echten Projekten einsetzen.
            </p>
          </div>
        </div>
        <div className="experience">
          <h3>Mein Weg</h3>
          <ol>
            {experience.map((item) => (
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
          <h3>Was in meinen Projekten steckt</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
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
