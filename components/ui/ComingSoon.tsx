import Button from "./Button";

const ComingSoon = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-100 text-center shadow-lg p-2 mt-6 mb-2 pb-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Coming Soon</h1>
        <p className="text-xl text-gray-600 mb-8">
          We are working hard to bring you something amazing!
        </p>
        <div className="w-1/2 h-1 bg-green-500 rounded-full mb-8"></div>
        <p className="text-lg text-gray-500">Stay tuned for updates.</p>

        <Button
          text="Notify Me"
          className="btn-wide btn-outline btn-info hover:bg-blue-600 mt-6 font-semibold"
          onClick={() => {
            window.location.href = "/contacts";
          }}
        />
      </div>
    </div>
  );
};

export default ComingSoon;
