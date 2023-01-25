import Card from "../layout/card";
import NavigationElements from "../left-navigation/navigation";
import RightSideContent from "./main-content";

function ContactPageContent() {
  return (
    <Card>
      <NavigationElements />
      <RightSideContent>
        <div>Contact me here</div>
      </RightSideContent>
    </Card>
  );
}

export default ContactPageContent;
