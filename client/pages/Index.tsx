import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-ocean-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-ocean-text mb-6">
            VPS Virtual Server Hosting in Hong Kong
          </h1>
          <p className="text-2xl md:text-3xl text-ocean-primary font-semibold mb-4">
            Super-Fast. Ultra-Secure. Asia-Optimized.
          </p>
          <p className="text-lg text-ocean-text mb-8 max-w-3xl mx-auto">
            Launch your powerful VPS in Hong Kong and enjoy unbeatable
            performance, low latency, and full control right where your
            customers are.
          </p>
          <a
            href="https://arzhost.com/vps/"
            className="bg-ocean-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ocean-primary/90 transition-colors inline-block"
          >
            Get Started in Minutes →
          </a>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ocean-text text-center mb-12">
            Why Choose VPS Hosting in Hong Kong?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-ocean-text mb-8 text-center">
              If your audience is in Asia or Mainland China, hosting closer
              means speedier sites, smoother apps, and happier users. Hong Kong
              is a digital hub with:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-ocean-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-ocean-text mb-2">
                  Lightning-fast connectivity
                </h3>
                <p className="text-ocean-text/80">to Asia-Pacific and China</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-ocean-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="font-semibold text-ocean-text mb-2">
                  World-class infrastructure
                </h3>
                <p className="text-ocean-text/80">and stable internet laws</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-ocean-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-ocean-text mb-2">
                  Strategic edge
                </h3>
                <p className="text-ocean-text/80">
                  for eCommerce, SaaS, and developers targeting Asia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ocean-text text-center mb-4">
            VPS Features You'll Absolutely Love
          </h2>
          <p className="text-lg text-ocean-text text-center mb-12">
            You deserve hosting that works as hard as you do! Our Hong Kong VPS
            gives you:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "💾",
                title: "NVMe SSD Storage",
                desc: "blazing-fast speed for your websites",
              },
              {
                icon: "🔑",
                title: "Full Root Access",
                desc: "total control over software & OS",
              },
              {
                icon: "📈",
                title: "Scalable CPU & RAM",
                desc: "upgrade when you grow",
              },
              {
                icon: "🛡️",
                title: "Free DDoS Protection",
                desc: "stay safe from cyber bullies",
              },
              {
                icon: "🌐",
                title: "Dedicated IPv4 Address",
                desc: "private and stable connections",
              },
              {
                icon: "🏢",
                title: "Secure Hong Kong Data Center",
                desc: "99.99% Uptime Guarantee",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-ocean-secondary/20"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-ocean-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-ocean-text/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ocean-text text-center mb-4">
            VPS Hosting Plans & Pricing
          </h2>
          <p className="text-lg text-ocean-text text-center mb-12">
            All plans include full root access, fast NVMe storage, and 24/7
            support.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-sm border border-ocean-secondary/20">
              <thead className="bg-ocean-secondary/20">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-ocean-text">
                    Plan
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-ocean-text">
                    CPU Cores
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-ocean-text">
                    RAM
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-ocean-text">
                    Storage
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-ocean-text">
                    Bandwidth
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-ocean-text">
                    Price (Monthly)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    plan: "Starter",
                    cpu: "1 Core",
                    ram: "1 GB",
                    storage: "25 GB",
                    bandwidth: "1 TB",
                    price: "$8.99/mo",
                  },
                  {
                    plan: "Developer",
                    cpu: "2 Cores",
                    ram: "2 GB",
                    storage: "50 GB",
                    bandwidth: "2 TB",
                    price: "$14.99/mo",
                  },
                  {
                    plan: "Pro",
                    cpu: "4 Cores",
                    ram: "4 GB",
                    storage: "100 GB",
                    bandwidth: "4 TB",
                    price: "$24.99/mo",
                  },
                  {
                    plan: "Elite",
                    cpu: "6 Cores",
                    ram: "8 GB",
                    storage: "200 GB",
                    bandwidth: "6 TB",
                    price: "$44.99/mo",
                  },
                ].map((plan, index) => (
                  <tr
                    key={index}
                    className="border-t border-ocean-secondary/20"
                  >
                    <td className="px-6 py-4 font-semibold text-ocean-primary">
                      {plan.plan}
                    </td>
                    <td className="px-6 py-4 text-ocean-text">{plan.cpu}</td>
                    <td className="px-6 py-4 text-ocean-text">{plan.ram}</td>
                    <td className="px-6 py-4 text-ocean-text">
                      {plan.storage}
                    </td>
                    <td className="px-6 py-4 text-ocean-text">
                      {plan.bandwidth}
                    </td>
                    <td className="px-6 py-4 font-semibold text-ocean-primary">
                      {plan.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-ocean-text mb-4">
              Optional Add-Ons:
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              <li className="flex justify-between items-center p-4 bg-ocean-background rounded-lg">
                <span className="text-ocean-text">cPanel License:</span>
                <span className="font-semibold text-ocean-primary">
                  +$14/mo
                </span>
              </li>
              <li className="flex justify-between items-center p-4 bg-ocean-background rounded-lg">
                <span className="text-ocean-text">Daily Backups:</span>
                <span className="font-semibold text-ocean-primary">+$5/mo</span>
              </li>
              <li className="flex justify-between items-center p-4 bg-ocean-background rounded-lg">
                <span className="text-ocean-text">Extra IPv4:</span>
                <span className="font-semibold text-ocean-primary">+$3/mo</span>
              </li>
              <li className="flex justify-between items-center p-4 bg-ocean-background rounded-lg">
                <span className="text-ocean-text">Managed Support:</span>
                <span className="font-semibold text-ocean-primary">
                  +$20/mo
                </span>
              </li>
            </ul>
            <p className="text-center text-ocean-primary font-semibold text-lg">
              Save 15% on annual billing.
            </p>
            <div className="text-center mt-8">
              <a
                href="https://arzhost.com/vps/"
                className="bg-ocean-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ocean-primary/90 transition-colors inline-block"
              >
                Choose Your Plan Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ocean-text text-center mb-12">
            Perfect For...
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-ocean-text mb-8">
              Your Hong Kong VPS is ideal for:
            </p>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                "Hosting websites and apps for Asian users",
                "Cross-border eCommerce and Shopify stores",
                "VPN and proxy services near China",
                "API, bots, and development environments",
                "Startup founders and digital agencies",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-ocean-primary text-xl">✓</span>
                  <span className="text-ocean-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ocean-text text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-ocean-background p-6 rounded-lg border border-ocean-secondary/20">
              <p className="text-ocean-text mb-4 italic">
                "I host all my crypto bots on their Hong Kong VPS. Fast setup,
                no lag. Totally recommend!"
              </p>
              <p className="font-semibold text-ocean-primary">
                – Leo T., Singapore
              </p>
            </div>
            <div className="bg-ocean-background p-6 rounded-lg border border-ocean-secondary/20">
              <p className="text-ocean-text mb-4 italic">
                "Perfect for my Shopify store targeting customers in China and
                Taiwan. Love the support too!"
              </p>
              <p className="font-semibold text-ocean-primary">
                – Jenny W., eCommerce Seller
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ocean-text text-center mb-12">
            Rock-Solid Infrastructure
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-ocean-text mb-8">
              Your VPS lives in a secure Tier III data center in Hong Kong with:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Redundant power and network",
                "Advanced firewalls and uptime monitoring",
                "24/7 on-site technicians and DDoS protection",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-ocean-secondary/20"
                >
                  <p className="text-ocean-text">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ocean-text text-center mb-12">
            Simple Setup. Easy Management.
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-ocean-text text-center mb-8">
              No tech headaches here. You'll enjoy:
            </p>
            <ul className="space-y-4">
              {[
                "One-click OS installs: Ubuntu, CentOS, Debian & more",
                "Reboot, reimage, and scale right from your dashboard",
                "Real human support anytime, any day",
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-ocean-primary text-xl">✓</span>
                  <span className="text-ocean-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ocean-text text-center mb-12">
            See Our VPS in Action
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/p8qVXz_2mPI"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
                title="VPS Hosting Demo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-ocean-text text-center mb-12">
            FAQ
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                q: "Can I target users in Mainland China with this VPS?",
                a: "Yes! Hong Kong's low latency makes it ideal for China-focused sites.",
              },
              {
                q: "Is it unmanaged or managed VPS?",
                a: "All plans are unmanaged by default. Managed support is available as an add-on.",
              },
              {
                q: "Can I upgrade my VPS later?",
                a: "Absolutely! You can scale RAM, storage, or CPU whenever you need.",
              },
              {
                q: "How fast is the setup?",
                a: "Instant provisioning – your VPS is ready in minutes!",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept Visa, Mastercard, PayPal, and crypto (BTC/ETH/USDT).",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border-b border-ocean-secondary/20 pb-6"
              >
                <h3 className="font-semibold text-ocean-text mb-2 text-lg">
                  Q: {faq.q}
                </h3>
                <p className="text-ocean-text/80">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-ocean-text mb-6">
            Ready to Elevate Your Hosting Game?
          </h2>
          <p className="text-xl text-ocean-text mb-8">
            Start your{" "}
            <a
              href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
              className="text-ocean-primary hover:underline"
            >
              VPS hosting Hong Kong
            </a>{" "}
            today and experience premium performance across Asia!
          </p>
          <a
            href="https://arzhost.com/vps/"
            className="bg-ocean-primary text-white px-12 py-6 rounded-lg text-xl font-semibold hover:bg-ocean-primary/90 transition-colors inline-block"
          >
            Choose Your Plan Now →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
