/* ============================================
   Footer Component
   Multi-column footer with links, contact info,
   social media, and legal modals
   ============================================ */

import React, { useState } from "react";
import { Container, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import styles from "./Footer.module.css";

// Privacy Policy Content Component
const PrivacyPolicyContent = () => (
  <div className={styles.legalContent}>
    <section className={styles.legalSection}>
      <h3>Introduction</h3>
      <p>
        Anvil Energy (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
        respects your privacy and is committed to protecting your personal
        information. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you visit our website or
        engage with our rooftop solar design, installation, subsidy, and
        financing services.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Information We Collect</h3>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, residential or business address, and other contact details
          you provide via our lead and consultation forms.
        </li>
        <li>
          <strong>Site & Energy Information:</strong> Monthly electricity bill,
          connected load, roof dimensions, shading, and photos you share for
          solar system design and proposal generation.
        </li>
        <li>
          <strong>KYC & Subsidy Data:</strong> Aadhaar / PAN references,
          discom account number, and documents required to process PM Surya
          Ghar subsidy applications and solar loan sanctions (shared only with
          the relevant authority or lending partner with your consent).
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you interact with
          our website, including pages visited, time spent, and navigation
          patterns.
        </li>
        <li>
          <strong>Device Information:</strong> IP address, browser type,
          operating system, and device identifiers for analytics and security
          purposes.
        </li>
      </ul>
    </section>

    <section className={styles.legalSection}>
      <h3>How We Use Your Information</h3>
      <p>We use the collected information for the following purposes:</p>
      <ul>
        <li>
          To respond to your enquiries, share quotations, and schedule site
          surveys
        </li>
        <li>
          To design your rooftop solar system and issue the installation
          proposal
        </li>
        <li>
          To process PM Surya Ghar subsidy applications, net-metering filings,
          and solar loan approvals with partner banks and NBFCs
        </li>
        <li>
          To coordinate installation, commissioning, and post-install service
          with your dedicated Anvil Saathi
        </li>
        <li>
          To send relevant product updates, performance reports, and
          promotional communications (with your consent)
        </li>
        <li>
          To comply with legal, tax, and regulatory obligations under Indian
          law
        </li>
      </ul>
    </section>

    <section className={styles.legalSection}>
      <h3>Cookies & Analytics</h3>
      <p>
        Our website uses cookies and analytics tools (including Google
        Analytics, Google Tag Manager, and Meta Pixel) to understand how
        visitors interact with our site and to measure advertising
        performance. You can manage cookie preferences through your browser
        settings.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Data Sharing</h3>
      <p>
        We do not sell your personal information. We share limited data only
        with: (a) discoms and the MNRE / National Portal for subsidy and
        net-metering applications; (b) partner banks and NBFCs if you opt for
        solar financing; (c) payment gateways for order processing; and (d)
        authorised service providers who help us operate this website. All
        partners are bound by confidentiality obligations.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Data Security</h3>
      <p>
        We implement appropriate technical and organisational measures to
        protect your personal information against unauthorised access,
        alteration, disclosure, or destruction. However, no method of
        transmission over the internet is 100% secure, and we cannot guarantee
        absolute security.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Your Rights</h3>
      <p>Under applicable Indian data-protection law, you have the right to:</p>
      <ul>
        <li>Access and request a copy of your personal data</li>
        <li>Correct any inaccurate or incomplete information</li>
        <li>
          Request deletion of your personal data, subject to statutory record
          retention
        </li>
        <li>Opt-out of marketing communications at any time</li>
        <li>Withdraw consent where processing is based on consent</li>
      </ul>
    </section>

    <section className={styles.legalSection}>
      <h3>Contact Us</h3>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at:
      </p>
      <p>
        <strong>Anvil Energy</strong>
        <br />
        Email: hello@anvil.energy
        <br />
        Phone: 1800 2020 001
        <br />
        Gurugram, Haryana, India
      </p>
    </section>
  </div>
);

// Terms of Service Content Component
const TermsOfServiceContent = () => (
  <div className={styles.legalContent}>
    <section className={styles.legalSection}>
      <h3>Acceptance of Terms</h3>
      <p>
        By accessing and using this website, you accept and agree to be bound
        by these Terms of Service. If you do not agree to these terms, please
        do not use this website. Anvil Energy reserves the right to update
        these terms from time to time; the latest version will always be
        available on this page.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>About Our Services</h3>
      <p>
        Anvil Energy is a rooftop solar company offering design, supply,
        installation, subsidy assistance, financing tie-ups, and lifetime
        after-sales support for residential, commercial, and industrial
        customers across India. Quotations shared through this website are
        indicative and subject to a site survey and final proposal.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Orders, Pricing & Payment</h3>
      <ul>
        <li>
          Final pricing is confirmed only after a site survey and signed work
          order. Taxes (GST) are charged as applicable under Indian law.
        </li>
        <li>
          Advance and milestone payments are governed by the work order you
          sign with us. All payments must be made to the Anvil Energy account
          details listed on the official invoice.
        </li>
        <li>
          Subsidy amounts under PM Surya Ghar are released by the Government
          of India directly to eligible customers as per MNRE guidelines and
          are not controlled by Anvil Energy.
        </li>
      </ul>
    </section>

    <section className={styles.legalSection}>
      <h3>Warranty & After-Sales Support</h3>
      <p>
        Solar panels, inverters, batteries, and balance-of-system components
        carry manufacturer warranties as published in your work order.
        Workmanship is covered under our own warranty for the period stated at
        the time of sale. Warranty claims are serviced through your assigned
        Anvil Saathi.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Cancellation & Refunds</h3>
      <p>
        Customers may cancel an order before material dispatch by written
        notice to hello@anvil.energy. Refunds for eligible cancellations will
        be processed within 10 business days to the original payment method,
        net of any design, survey, or approval fees already incurred. Once
        material has been dispatched or installation has commenced, the terms
        of the signed work order apply.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>User Responsibilities</h3>
      <p>By using this website, you agree to:</p>
      <ul>
        <li>
          Provide accurate and complete information when requesting a
          quotation or enquiry
        </li>
        <li>
          Use the website only for lawful purposes and in compliance with
          applicable laws
        </li>
        <li>
          Not engage in any activity that could harm, disable, or impair the
          website
        </li>
        <li>
          Not attempt to gain unauthorised access to any part of the website
          or its systems
        </li>
      </ul>
    </section>

    <section className={styles.legalSection}>
      <h3>Intellectual Property</h3>
      <p>
        All content on this website, including text, graphics, logos, images,
        and software, is the property of Anvil Energy and is protected by
        applicable intellectual property laws. You may not reproduce,
        distribute, or create derivative works without prior written consent.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Consumer Protection & Grievance Redressal</h3>
      <p>
        In accordance with the Consumer Protection Act, 2019 and the Consumer
        Protection (E-Commerce) Rules, 2020, customers may raise grievances
        by writing to hello@anvil.energy or calling 1800 2020 001. We will
        acknowledge every grievance within 48 hours and aim to resolve it
        within 30 days.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Limitation of Liability</h3>
      <p>
        Anvil Energy shall not be liable for any indirect, incidental,
        consequential, or punitive damages arising from your use of this
        website. Generation estimates and savings figures shared on this
        website are projections based on typical irradiation and tariff
        assumptions; actual results may vary.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Governing Law</h3>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of India. Any disputes shall be subject to the exclusive
        jurisdiction of the courts at Gurugram, Haryana.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Contact Information</h3>
      <p>
        For any questions regarding these Terms, please contact us at:
      </p>
      <p>
        <strong>Anvil Energy</strong>
        <br />
        Email: hello@anvil.energy
        <br />
        Phone: 1800 2020 001
        <br />
        Gurugram, Haryana, India
      </p>
    </section>
  </div>
);

// Legal Modal Component
const LegalModal = ({ isOpen, onClose, title, children }) => {
  if (typeof window === "undefined") return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, y: 30, scale: 0.95, transition: { duration: 0.2 } },
  };

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className={styles.modalBackdrop}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={styles.legalModal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{title}</h2>
              <IconButton
                className={styles.modalCloseBtn}
                onClick={onClose}
                aria-label="Close modal"
              >
                <Icon icon="mdi:close" />
              </IconButton>
            </div>
            <div className={styles.modalBody}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

// Quick Links data
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Solar Calculator", href: "#calculator" },
  { label: "Solar Solutions", href: "#services" },
  { label: "Why Anvil", href: "#about" },
  { label: "How It Works", href: "#highlights" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// Solutions links data
const solutionLinks = [
  { label: "On-Grid Rooftop Solar", href: "#services" },
  { label: "Hybrid Solar + Battery", href: "#services" },
  { label: "Commercial & Industrial", href: "#services" },
  { label: "PM Surya Ghar Subsidy", href: "#services" },
  { label: "Solar EMI & Loans", href: "#services" },
];

// Social media links (driven by env, empty values are skipped)
const socialLinks = [
  {
    icon: "mdi:facebook",
    href: process.env.REACT_APP_FACEBOOK_URL,
    label: "Facebook",
  },
  {
    icon: "mdi:instagram",
    href: process.env.REACT_APP_INSTAGRAM_URL,
    label: "Instagram",
  },
  {
    icon: "mdi:youtube",
    href: process.env.REACT_APP_YOUTUBE_URL,
    label: "YouTube",
  },
  {
    icon: "mdi:linkedin",
    href: process.env.REACT_APP_LINKEDIN_URL,
    label: "LinkedIn",
  },
].filter((s) => s.href && s.href.trim() !== "");

const Footer = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${(
    process.env.REACT_APP_WHATSAPP_NUMBER || "+918002020001"
  ).replace(/\D/g, "")}`;

  return (
    <>
      <footer className={styles.footer}>
        {/* Main Footer Content */}
        <div className={styles.mainFooter}>
          <Container maxWidth="xl">
            <div className={styles.footerGrid}>
              {/* Column 1: Logo & Tagline */}
              <div className={styles.footerBrand}>
                <div className={styles.logoWrapper}>
                  <img
                    src="https://solar.anvil.energy/svgs/logo.svg"
                    alt="Anvil Solar"
                    style={{
                      height: "36px",
                      width: "auto",
                    }}
                  />
                </div>
                <p className={styles.tagline}>
                  India&apos;s hassle-free rooftop solar partner. Design,
                  subsidy, finance, install, and lifetime support — all handled
                  by your Anvil Saathi.
                </p>
                {/* Social Icons */}
                {socialLinks.length > 0 && (
                  <div className={styles.socialIcons}>
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label={social.label}
                      >
                        <Icon icon={social.icon} />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Column 2: Quick Links */}
              <div className={styles.footerColumn}>
                <h4 className={styles.columnTitle}>Quick Links</h4>
                <ul className={styles.footerLinks}>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className={styles.footerLink}
                        {...(link.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Solutions */}
              <div className={styles.footerColumn}>
                <h4 className={styles.columnTitle}>Solutions</h4>
                <ul className={styles.footerLinks}>
                  {solutionLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className={styles.footerLink}
                        {...(link.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div className={styles.footerColumn}>
                <h4 className={styles.columnTitle}>Get in touch</h4>
                <ul className={styles.contactList}>
                  <li className={styles.contactItem}>
                    <div className={styles.contactLabelRow}>
                      <Icon icon="mdi:phone" className={styles.contactIcon} />
                      <span className={styles.contactLabel}>Phone</span>
                    </div>
                    <a
                      href="tel:+918002020001"
                      className={styles.contactValue}
                    >
                      1800 2020 001
                    </a>
                  </li>
                  <li className={styles.contactItem}>
                    <div className={styles.contactLabelRow}>
                      <Icon
                        icon="mdi:whatsapp"
                        className={styles.contactIcon}
                      />
                      <span className={styles.contactLabel}>WhatsApp</span>
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactValue}
                    >
                      Chat on WhatsApp
                    </a>
                  </li>
                  <li className={styles.contactItem}>
                    <div className={styles.contactLabelRow}>
                      <Icon icon="mdi:email" className={styles.contactIcon} />
                      <span className={styles.contactLabel}>Email</span>
                    </div>
                    <a
                      href="mailto:hello@anvil.energy"
                      className={styles.contactValue}
                    >
                      hello@anvil.energy
                    </a>
                  </li>
                  <li className={styles.contactItem}>
                    <div className={styles.contactLabelRow}>
                      <Icon
                        icon="mdi:map-marker"
                        className={styles.contactIcon}
                      />
                      <span className={styles.contactLabel}>Address</span>
                    </div>
                    <span className={styles.contactValue}>
                      Anvil Energy,
                      <br />
                      Gurugram, Haryana, India
                    </span>
                  </li>
                  <li className={styles.contactItem}>
                    <div className={styles.contactLabelRow}>
                      <Icon
                        icon="mdi:clock-outline"
                        className={styles.contactIcon}
                      />
                      <span className={styles.contactLabel}>Hours</span>
                    </div>
                    <span className={styles.contactValue}>
                      Mon–Sat, 9 AM – 7 PM IST
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <Container maxWidth="xl">
            <div className={styles.bottomContent}>
              <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} Anvil Energy. All rights
                reserved.
              </p>
              <div className={styles.legalLinks}>
                <button
                  className={styles.legalLink}
                  onClick={() => setPrivacyModalOpen(true)}
                >
                  Privacy Policy
                </button>
                <span className={styles.linkDivider}>|</span>
                <button
                  className={styles.legalLink}
                  onClick={() => setTermsModalOpen(true)}
                >
                  Terms of Service
                </button>
                <span className={styles.linkDivider}>|</span>
                <a href="/sitemap.xml" className={styles.legalLink}>
                  Sitemap
                </a>
              </div>
            </div>
          </Container>
        </div>
      </footer>

      {/* Legal Modals */}
      <LegalModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        title="Privacy Policy"
      >
        <PrivacyPolicyContent />
      </LegalModal>

      <LegalModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
        title="Terms of Service"
      >
        <TermsOfServiceContent />
      </LegalModal>
    </>
  );
};

export default Footer;
