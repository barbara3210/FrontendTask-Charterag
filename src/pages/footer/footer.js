import Image from 'next/image';
import Link from 'next/link';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-logo">
                <Image src="/logo/Charterag.png" alt="Logo" width={216} height={50} />
            </div>

            <div className="footer-content">
                <div className="footer-links">
                    <div className="footer-block">
                        <h3 className="footer-title">Programs</h3>
                        <ul>
                            <li><Link href="#">Program 1</Link></li>
                            <li><Link href="#">Program 2</Link></li>
                            <li><Link href="#">Program 3</Link></li>
                            <li><Link href="#">Program 4</Link></li>
                        </ul>
                    </div>

                    <div className="footer-block">
                        <h3 className="footer-title">Find out more</h3>
                        <ul>
                            <li><Link href="#">Link 1</Link></li>
                            <li><Link href="#">Link 2</Link></li>
                            <li><Link href="#">Link 3</Link></li>
                        </ul>
                    </div>

                    <div className="footer-block">
                        <h3 className="footer-title">Charterag</h3>
                        <ul>
                            <li><Link href="#">Link 1</Link></li>
                            <li><Link href="#">Link 2</Link></li>
                            <li><Link href="#">Link 3</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-social">
                    <div className="footer-social-icon">
                        <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} />
                    </div>
                    <div className="footer-social-icon">
                        <Image src="/icons/facebook.png" alt="Facebook" width={24} height={24} />
                    </div>
                    <div className="footer-social-icon">
                        <Image src="/icons/youtube.png" alt="YouTube" width={24} height={24} />
                    </div>
                </div>
            </div>

            <div className="footer-line"></div>

            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>Copyright © 2024 Charterag Ltd. (company no. 08245801)Lorem ipsum dolor sit amet lorem ipsum ipsum, United Kingdom.</p>
                </div>
                <div className="footer-info">
                    <Link href="#">Legal info</Link>
                </div>
                <div className="footer-info">
                    <Link href="#">Terms and conditions</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
