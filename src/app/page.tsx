import ProfileCard from "@/components/ProfileCard";
import MotionWrapper from "@/components/MotionWrapper";

export default function Home() {
    return (
        <main className="w-full flex justify-center">
            <MotionWrapper>
                <ProfileCard />
            </MotionWrapper>
        </main>
    );
}
