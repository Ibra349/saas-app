import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Nos Professeurs</h1>
        <section className="home-section">
            <CompanionCard
                id="123"
                name="Brainy"
                topic="Neural network"
                subject="Science"
                duration ={45}
                color="#ff8455"
            />
            <CompanionCard
                id="124"
                name="Nesting"
                topic="Network"
                subject="Science"
                duration ={35}
                color="#e5d0ff"
            />
            <CompanionCard
                id="125"
                name="Network Simulation"
                topic="How to create a network simulation"
                subject="Science"
                duration ={25}
                color="#ffda6e"
            />
        </section>
        <section className="home-section">
            <CompanionsList
                title={"Recently completed sessions"}
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
            <CTA />
        </section>
        <Button> Lets begin </Button>
    </main>
  )
}

export default Page