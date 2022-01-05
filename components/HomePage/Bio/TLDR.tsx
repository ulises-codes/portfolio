import Image from 'next/image'

export default function TLDR() {
  return (
    <div>
      <p>
        My name is Ulises Himely. Species: human. My name is pronounced the same
        as{' '}
        <a
          className="link"
          href="https://en.wikipedia.org/wiki/Ulysses_S._Grant"
          rel="norefferer noopener"
          target="_blank"
        >
          Ulysses S. Grant
        </a>
        , that guy on the $50 bill. I code in JavaScript, Python, React,
        Typescript, HTML, and CSS.
      </p>
      <div>
        <h4 className="subtitle">Certifications</h4>
        <a
          href="https://www.credly.com/badges/a089e4e1-db25-41d4-8948-e6ea4b3bd804/public_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ulises.codes/certifications/aws-ccp.png"
            height="60"
            width="60"
          />
        </a>
      </div>
    </div>
  )
}
