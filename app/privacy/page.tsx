import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container max-w-3xl mx-auto px-4 bg-white rounded-xl shadow-lg">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
          </div>

          <div className="prose max-w-none">
            <p className="lead">Last updated: March 27, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              DroneGuard ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our drone surveillance
              platform.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you
              have read, understood, and agree to be bound by all the terms of this Privacy Policy and our Terms of
              Service.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in various ways:</p>
            <ul>
              <li>
                <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain
                personally identifiable information that can be used to contact or identify you ("Personal Data"). This
                may include, but is not limited to:
                <ul>
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </li>
              <li>
                <strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used
                ("Usage Data"). This may include information such as your computer's Internet Protocol address, browser
                type, browser version, the pages of our Service that you visit, the time and date of your visit, the
                time spent on those pages, unique device identifiers and other diagnostic data.
              </li>
              <li>
                <strong>Surveillance Data:</strong> Our Service involves drone surveillance, which may collect video,
                images, and other data from the areas being monitored. This data is collected for security and
                monitoring purposes as specified in your service agreement.
              </li>
            </ul>

            <h2>3. Use of Data</h2>
            <p>DroneGuard uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>
                To provide you with news, special offers and general information about other goods, services and events
                which we offer
              </li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the
              Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              DroneGuard will retain your Personal Data only for as long as is necessary for the purposes set out in
              this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our
              legal obligations, resolve disputes, and enforce our legal agreements and policies.
            </p>
            <p>
              Surveillance data is retained according to the terms specified in your service agreement and applicable
              laws regarding surveillance footage.
            </p>

            <h2>6. Transfer of Data</h2>
            <p>
              Your information, including Personal Data, may be transferred to — and maintained on — computers located
              outside of your state, province, country or other governmental jurisdiction where the data protection laws
              may differ from those of your jurisdiction.
            </p>

            <h2>7. Disclosure of Data</h2>
            <p>We may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul>
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of DroneGuard</li>
              <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>To protect the personal safety of users of the Service or the public</li>
              <li>To protect against legal liability</li>
            </ul>

            <h2>8. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul>
              <li>The right to access, update or delete your information</li>
            </ul>

            <ul>
              <li>The right to access, update or delete your information</li>
              <li>The right to have your information rectified if it is inaccurate or incomplete</li>
              <li>The right to object to our processing of your personal data</li>
              <li>The right to request restriction of processing your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h2>9. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier.
            </p>

            <h2>10. Service Providers</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to
              provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how
              our Service is used.
            </p>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>

            <h2>12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@droneguard.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

