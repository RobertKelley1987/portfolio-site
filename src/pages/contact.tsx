import React from "react";
import ContactPageContextProvider from "../context/ContactPageContext";
import SiteLayout from "../components/layouts/SiteLayout";
import ContactPageContent from "../components/ContactPageContent";

function Contact() {
  return (
    <SiteLayout>
      <main className="text-black mx-auto mb-16 mt-12 px-4 sm:px-8 w-full max-w-2xl md:max-w-4xl flex flex-col gap-4 grow basis-full">
        <div className="flex flex-col md:flex-row gap-8 grow basis-full">
          <ContactPageContextProvider>
            <ContactPageContent />
          </ContactPageContextProvider>
        </div>
      </main>
    </SiteLayout>
  );
}

export default Contact;
