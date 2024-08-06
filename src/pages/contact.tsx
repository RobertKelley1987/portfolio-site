import React from "react";
import ContactPageContextProvider from "../context/ContactPageContext";
import SiteLayout from "../components/layouts/SiteLayout";
import ContactPageContent from "../components/ContactPageContent";

function Contact() {
  return (
    <SiteLayout>
      <main className="text-black mx-auto mb-16 mt-12 px-4 sm:px-8 w-full max-w-xl flex flex-col gap-4 grow basis-full">
        <ContactPageContextProvider>
          <ContactPageContent />
        </ContactPageContextProvider>
      </main>
    </SiteLayout>
  );
}

export default Contact;
