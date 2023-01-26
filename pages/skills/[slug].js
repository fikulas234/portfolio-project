import { useRouter } from "next/router";
import Image from "next/image";

import Card from "@/components/layout/card";
import NavigationElements from "@/components/left-navigation/navigation";
import RightSideContent from "@/components/right-content/main-content";
import SingleImage from "@/components/layout/single-image";
function SkillIcons() {
  const router = useRouter();
  const currentUrl = router.asPath;
  const confPath = /[^/]*$/.exec(currentUrl)[0];

  return (
    <Card>
      <NavigationElements />
      <RightSideContent>
        <SingleImage>
          <Image
            src={`/images/icons/${confPath}`}
            width={100}
            height={100}
            alt={confPath}
          />
        </SingleImage>
      </RightSideContent>
    </Card>
  );
}

export default SkillIcons;
