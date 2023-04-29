import { GitHub, Twitter } from './Icons'


const footerLinks = [
  {
    id: 1,
    link: "",
    name: "GitHub",
    icon: <GitHub />,
  },
  {
    id: 2,
    link: "",
    name: "Twitter",
    icon: <Twitter />,
  },
]

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>
          Crafted with ❤️ by
          <a
            href="https://github.com/hack-parthsharma"
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            {' '}
            Hiren and Parth Sharma
          </a>
        </p>
      </div>
      <ul className="fot-links">
        {footerLinks.map(({ id, link, name, icon }) => (
          <li key={id}>
            <a
              href="https://twitter.com/hirensharmaji"
              target="_blank"
              rel="noreferrer"
              className="fot-link"
            >
              {icon}
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
