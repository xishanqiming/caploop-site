import Card from "@/components/Card";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Card className="p-10 text-center bg-gradient-to-r from-[hsl(var(--brand-200))] to-[hsl(var(--brand-50))]">
          <h3 className="text-2xl font-semibold">Join Our Pilot — Get Early Access</h3>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            Access smart valuations, tokenized assets, and a compliant ecosystem built for scale.
          </p>
          <div className="mt-6">
            <Button asChild href="#contact">
              Join / 联系我们
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}