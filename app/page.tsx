import ClientOnly from "@/components/ClientOnly";

import Hero from "./(sections)/hero/Hero";
import Ecosystem from "./(sections)/ecosystem/Ecosystem";
import Structure from "./(sections)/structure/Structure";
import Usp from "./(sections)/usp/Usp";
import Lifecycle from "./(sections)/lifecycle/Lifecycle";
import Team from "./(sections)/team/Team";
import CTA from "./(sections)/contact/CTA";
import Contact from "./(sections)/contact/Contact";

export default function Page() {
  return (
    <main>
      <ClientOnly>
        <Hero />
        <Ecosystem />
        <Structure />
        <Usp />
        <Lifecycle />
        <Team />
        <CTA />
        <Contact />
      </ClientOnly>
    </main>
  );
}
