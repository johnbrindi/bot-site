import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Berlin Snoww Budd",
  description: "Privacy policy and data protection for the Berlin Snoww Budd Telegram bot.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-gray-300 p-8 lg:p-24 font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-green-400 hover:text-green-300 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Data Collection</h2>
          <p>
            The Berlin Snoww Budd Telegram bot does not permanently store your personal data. 
            We only process your Telegram User ID and username temporarily to facilitate 
            communication and order processing via our secure manual desk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">2. Usage of Information</h2>
          <p>
            Information provided during interactions is used solely to provide the services requested. 
            We do not share, sell, or distribute your information to any third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Security</h2>
          <p>
            All communications are encrypted via Telegram's secure protocol. 
            We recommend users do not share sensitive personal information beyond what is 
            strictly necessary for delivery coordination.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Links</h2>
          <p>
            Our bot may contain links to external sites (like our landing page). 
            We are not responsible for the privacy practices of external websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">5. Contact</h2>
          <p>
            If you have any questions about this privacy policy, please contact our 
            admin team directly via the Telegram contact link provided in the bot menu.
          </p>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-800 text-sm">
          Last Updated: April 2026 | Berlin Snoww Budd Team
        </footer>
      </div>
    </main>
  );
}
