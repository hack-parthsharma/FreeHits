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
            href=""
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            {' '}
            Hiren and Parth Sharma
          </a>
        </p>
      </div>
      <div className="footer">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
            {' '}
            Hiren and Parth Sharma
            </a>
        ))
      </div>
    </div>
  )
}
export default Footer
