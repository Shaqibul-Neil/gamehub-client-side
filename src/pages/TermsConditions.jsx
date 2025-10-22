const TermsConditions = () => {
  return (
    <div className="text-white min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0f1e] to-[#081d29] py-20 px-6">
      <title>GameHub - Terms & Conditions</title>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl audiowide text-success font-bold">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Welcome to <span className="text-success">GameHub</span>. By
            accessing or using our platform, you agree to the following terms
            and conditions. Please read carefully before proceeding.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl text-secondary audiowide mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By using GameHub, you confirm that you are at least 13 years old
              and agree to comply with all applicable local, national, and
              international laws. If you do not agree with any of these terms,
              you are prohibited from using this platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-secondary audiowide mb-2">
              2. User Conduct
            </h2>
            <p>
              Users must not engage in any activities that disrupt, damage, or
              exploit the GameHub services or other users. Hacking, cheating, or
              distributing malware will lead to permanent suspension of your
              account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-secondary audiowide mb-2">
              3. Content Ownership
            </h2>
            <p>
              All images, videos, and content displayed on GameHub are either
              owned by GameHub or licensed to us. You may not copy, modify, or
              redistribute any content without prior permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-secondary audiowide mb-2">
              4. Third-Party Links
            </h2>
            <p>
              GameHub may contain links to third-party websites or game
              publishers. We do not control or take responsibility for the
              content, privacy policies, or practices of these external sites.
              Accessing them is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-secondary audiowide mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              GameHub and its team shall not be held responsible for any
              damages, losses, or data breaches arising from your use of the
              platform. All services are provided “as is” without any warranty.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-secondary audiowide mb-2">
              6. Updates to Terms
            </h2>
            <p>
              We reserve the right to modify or replace these terms at any time.
              Updates will be effective immediately upon posting. Users are
              encouraged to review this page regularly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-secondary audiowide mb-2">
              7. Contact Information
            </h2>
            <p>
              For any queries regarding our terms or platform usage, please
              reach out to us at{" "}
              <span className="text-success font-semibold">
                support@gamehub.com
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
