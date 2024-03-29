import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Add</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://social-app-6hl7.onrender.com/assets/image"
        style={{ borderRadius: "0.75rem", margin: "0.75 0" }}
      />
      <FlexBetween>
        <Typography color={main}>??Cosmetics??</Typography>
        <Typography color={medium}>Cosmo.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Whatever advertisement here
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
