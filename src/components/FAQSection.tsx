
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I get started with Amazon Connect integration?",
      answer:
        "To get started, you'll need an Amazon AWS account with Amazon Connect enabled. Follow our integration steps to generate your widget code and implement it on your lovable.dev project.",
    },
    {
      question: "Is the Amazon Connect chat widget customizable?",
      answer:
        "Yes, the widget is highly customizable. You can adjust colors, sizing, placement, and text to match your brand identity and website design.",
    },
    {
      question: "Do I need technical knowledge to implement the chat widget?",
      answer:
        "Basic web development knowledge is helpful, but our step-by-step guide makes implementation straightforward even for non-technical users.",
    },
    {
      question: "Can I monitor chat analytics after implementation?",
      answer:
        "Yes, Amazon Connect provides comprehensive analytics for all customer interactions through your chat widget, accessible through your Amazon Connect dashboard.",
    },
    {
      question: "How does the chat widget work on mobile devices?",
      answer:
        "The Amazon Connect chat widget is fully responsive and adapts to different screen sizes, providing a seamless experience for mobile users.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
