export const Button = ({ children }) => {
  return (
    <button className="w-64 text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-5 py-2.5">
      {children}
    </button>
  );
};
