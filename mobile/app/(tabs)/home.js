import StyledButton from "@components/StyledButton";
import { router } from "expo-router";

export default function Home() {
  const handleClick = () => {
    router.push('/organizations/:100/matches');
  }

  return (
    <StyledButton
      text="Organization 1"
      onClick={handleClick}
    />
  );
}