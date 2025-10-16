interface QAItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const supportData: QAItem[] = [
  {
    id: "payment-1",
    category: "Payments",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
  },
  {
    id: "payment-2",
    category: "Payments",
    question: "How do I update my payment information?",
    answer: "You can update your payment information in your account settings under 'Payment Methods'."
  },
  {
    id: "shipping-1",
    category: "Shipping",
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 business day delivery."
  },
  {
    id: "returns-1",
    category: "Returns",
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unused items in original packaging. Returns are free for store credit."
  },
  {
    id: "account-1",
    category: "Account",
    question: "How do I reset my password?",
    answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email."
  }
];