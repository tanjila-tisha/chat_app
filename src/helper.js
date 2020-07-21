const getCustomerSupportName = () => "Customer Support";

const getCustomerName = () => "Customer";

const getTime = () => {
  return (
    new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
  );
};

const getRandomAnswer = () => {
  const randomAnswers = [
    "Thanks for contacting us",
    "Give me a moment",
    "Ok",
    "I can check it for you",
    "Thanks",
    "You can be back if you have any other questions",
    "Yes this is the product",
    "I hope you liked it",
    "Are you asking for this one?",
    "Here you go!",
  ];
  const randomIndex = Math.floor(Math.random() * 10);
  return randomAnswers[randomIndex];
};

export { getCustomerSupportName, getCustomerName, getTime, getRandomAnswer };
