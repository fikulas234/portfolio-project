import RightSideContent from "./main-content";
import Card from "../layout/card";
import NavigationElements from "../left-navigation/navigation";

const ResourcesContent = () => {
  return (
    <Card>
      <NavigationElements />
      <RightSideContent>Resources Content</RightSideContent>
    </Card>
  );
};

export default ResourcesContent;
