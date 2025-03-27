import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container max-w-3xl mx-auto px-4 bg-white rounded-xl shadow-lg">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
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
              Welcome to DroneGuard ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service")
              govern your use of our website and drone surveillance platform operated by DroneGuard.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and
              disclose information that results from your use of our web pages. Please read it here.
            </p>
            <p>
              Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that
              you have read and understood Agreements, and agree to be bound by them.
            </p>

            <h2>2. Communications</h2>
            <p>
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other
              information we may send. However, you may opt out of receiving any, or all, of these communications from
              us by following the unsubscribe link.
            </p>

            <h2>3. Purchases</h2>
            <p>
              If you wish to purchase any product or service made available through the Service ("Purchase"), you may be
              asked to supply certain information relevant to your Purchase including, without limitation, your credit
              card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>

            <h2>4. Subscriptions</h2>
            <p>
              Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in
              advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set on a monthly or annual
              basis, depending on the type of subscription plan you select when purchasing a Subscription.
            </p>

            <h2>5. Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text,
              graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or
              through the Service, including its legality, reliability, and appropriateness.
            </p>

            <h2>6. Prohibited Uses</h2>
            <p>
              You may use the Service only for lawful purposes and in accordance with Terms. You agree not to use the
              Service for any illegal surveillance activities, invasion of privacy, or any purpose that violates any
              applicable local, state, national, or international law or regulation.
            </p>

            <h2>7. Analytics</h2>
            <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>

            <h2>8. Accounts</h2>
            <p>
              When you create an account with us, you guarantee that the information you provide us is accurate,
              complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the
              immediate termination of your account on the Service.
            </p>

            <h2>9. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features and functionality are
              and will remain the exclusive property of DroneGuard and its licensors. The Service is protected by
              copyright, trademark, and other laws.
            </p>

            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice
              or liability, under our sole discretion, for any reason whatsoever and without limitation, including but
              not limited to a breach of the Terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of
              law provisions.
            </p>

            <h2>12. Changes to Service</h2>
            <p>
              We reserve the right to withdraw or amend our Service, and any service or material we provide via the
              Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of
              the Service is unavailable at any time or for any period.
            </p>

            <h2>13. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at support@droneguard.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

