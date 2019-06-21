import React from "react";
import XPChips from "./XPChips";
import XPForm from "./XPForm";
import XPSavedProvider from "../providers/XPSavedProvider";

export default function XPBox() {
  
  return (
    <div>
      <XPSavedProvider>
        <XPChips />
        <XPForm />
      </XPSavedProvider>
    </div>
  );
}