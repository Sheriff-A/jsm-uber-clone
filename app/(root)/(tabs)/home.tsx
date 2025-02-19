import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignedIn, useUser } from "@clerk/clerk-expo";

const Home = () => {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
    </SafeAreaView>
  );
};

export default Home;
