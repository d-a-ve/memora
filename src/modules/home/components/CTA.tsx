import { LinkButton } from "@components/Link";

function CTA() {
  return (
    <div className="bg-white/50 py-16">
      <div className="landing-padding text-center flex flex-col gap-6 items-center justify-center">
        <h2 className="font-semibold text-3xl mb-2 lg:text-2xl">
          Ready to <span className="text-accent">Celebrate</span> Effortlessly?
        </h2>
        <div>
          <LinkButton href="/login" size="md" label="Get Started" />
        </div>
      </div>
    </div>
  );
}

export default CTA;
