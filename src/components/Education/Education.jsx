import css from "./Education.module.css";
import { LuExternalLink } from "react-icons/lu";
import goITCertificate from "../../assets/images/GoIT-certificate.jpg";
import collegeCert from "../../assets/images/college-cert-2.jpg";
import englishCert from "../../assets/images/english-certificate.jpg";

const certificates = [
  {
    title: "Full Stack Developer",
    institution: "IT School GoIT",
    description:
      "Comprehensive course covering HTML, CSS, JavaScript, React, TypeScript and Node.js.",
    year: "2023-2024",
    imageUrl: goITCertificate,
    certLink:
      "https://drive.google.com/file/d/14vAzjS1w7AYJUgIA9prIY5MhxtZUnhp5/view?usp=sharing",
  },
  {
    title: "Information Technology",
    institution: "Chelmsford College",
    description:
      "BTEC Level 3 National Extended Certificate in Information Technology with grade Distinction.",
    year: "2023-2024",
    imageUrl: collegeCert,
    certLink:
      "https://docs.google.com/document/d/1KNbsudE_IREpJY98sSM5ZnblAGYXYDa4jii5b6D6TxM/edit?usp=sharing",
  },
  {
    title: "English Certificate",
    institution: "EF SET",
    description:
      "English EF SET Certificate (Reading, Listening, Writing, Speaking)",
    year: "2024",
    imageUrl: englishCert,
    certLink: "https://cert.efset.org/en/JWGdCn",
  },
];

const Education = () => {
  return (
    <div className={css.educationSection} id="education">
      <h2>Education</h2>
      <div className={css.certificatesContainer}>
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={`${css.certificate} ${
              index === 1 ? css.collegeCertificate : ""
            }`}
          >
            <a
              href={cert.certLink}
              target="_blank"
              rel="noopener noreferrer"
              className={css.certLink}
            >
              <img
                src={cert.imageUrl}
                alt={`${cert.title} Certificate`}
                className={css.certImage}
              />
              <LuExternalLink
                className={`${css.linkIcon} ${
                  index === 1 ? css.secondLinkIcon : ""
                }`}
              />
            </a>
            <h3>{cert.title}</h3>
            <p className={css.institution}>{cert.institution}</p>
            <p className={css.description}>{cert.description}</p>
            <p className={css.year}>{cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
