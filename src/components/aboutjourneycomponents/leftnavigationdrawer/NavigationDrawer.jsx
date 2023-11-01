import React from "react";
import Button from "../../reuseablecomponents/button/Button";

const NavigationDrawer = () => {
  return (
    <div className="left-sidebar">
      {/* Use the Button component within your LeftSidebar */}
      <Button variant="primary">Click me</Button>
    </div>
  );
};

export default NavigationDrawer;
