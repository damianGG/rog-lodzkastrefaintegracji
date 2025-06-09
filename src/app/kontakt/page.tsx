import Link from "next/link";
import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from "@/components/blocks/form/form";

export default function Kontakt() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: "url('/img/flaga-ue-tlo.png')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                Kontakt
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>

            <title>Biuro Projektu</title>

            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>Biuro Projektu</h1>
                        <p><strong>Adres:</strong> ul. Słowackiego 24 lok. 16A, 35-060 Rzeszów</p>
                        <p>Biuro projektu czynne jest od poniedziałku do piątku w godzinach 8:00 - 16:00 (istnieje możliwość umówienia się na inne godziny spotkania)</p>
                        <p><strong>Tel:</strong> +48 789 156 957</p>
                        <p><strong>E-mail:</strong> <a href="mailto:integracja@rogszkolenia.pl" className="link-primary" target="_blank">integracja@rogszkolenia.pl</a> </p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1044.186354029244!2d22.00246526490173!3d50.03450141903533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb01d3f6086b%3A0x24949f781a7a09b6!2sJuliusza%20S%C5%82owackiego%2024%2F16a%2C%2035-060%20Rzesz%C3%B3w!5e1!3m2!1spl!2spl!4v1749507031019!5m2!1spl!2spl"

                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="row mt-10">
                    <div className="col text-center">
                        <Image
                            src="/img/rog-logo-removebg-preview.png"
                            alt="Picture of the author"
                            width={255}
                            height={188}
                        />
                        <h2>Siedziba Róg Consulting &amp; Business Training Sp. z o. o.</h2>
                        <p><strong>Adres: </strong> ul. Kazimierza Pułaskiego 9A,35-011 Rzeszów</p>
                        <p><strong>Strona: </strong><Link href="https://rogszkolenia.pl/" className="link-primary" target="_blank">www.rogszkolenia.pl</Link></p>
                        {/* <p><strong>Facebook: </strong><Link href="https://www.facebook.com/crse.szkolenia/?locale=pl_PL" className="link-primary" target="_blank">Centrum Rozwoju Społeczno-Ekonomicznego </Link></p> */}
                        <p><strong>Tel: </strong>+48 798 574 614</p>
                        <p><strong>E-mail: </strong><a href="mailto:rogszkolenia@gmail.com" className="link-primary" target="_blank">rogszkolenia@gmail.com</a> </p>
                    </div>

                </div>
                {/* <div className="row mt-10">
                    <div className="col text-center">

                        <Image
                            src="/img/logos/EFEKTMOTYLALOGO.png"
                            alt="Picture of the author"
                            width={65}
                            height={65}
                        />
                        <h2>Siedziba Fundacja EFEKT MOTYLA - Partner</h2>
                        <p><strong>Adres: </strong> Plac Niepodległości 1 lok. 3.19, 25-506 Kielce</p>
                        <p><strong>Strona: </strong><Link href="https://fundacjaefektmotyla.pl" className="link-primary" target="_blank">www.fundacjaefektmotyla.pl</Link></p>
                        <p><strong>Facebook: </strong><Link href="https://www.facebook.com/fundacjaefektmotyla/" className="link-primary" target="_blank">Fundacja Efekt Motyla</Link></p>
                        <p><strong>Tel: </strong> +48 533 535 008</p>
                        <p><strong>E-mail: </strong><a href="mailto:biuro@fundacjaefektmotyla.pl" className="link-primary" target="_blank">biuro@fundacjaefektmotyla.pl</a> </p>
                    </div>

                </div> */}
                <div className="row">
                    <div className="col text-center mb-15">
                        <Link
                            href="https://www.facebook.com/search/top/?q=%23funduszeue%20%23FunduszeEuropejskie"
                            className="link-primary" target="_blank"
                        >
                            #FunduszeUE #FunduszeEuropejskie
                        </Link>

                    </div>
                </div>
                {/* <div className="container">
                    <h3 className="text-center">Formularz kontaktowy</h3>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <ContactForm />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

