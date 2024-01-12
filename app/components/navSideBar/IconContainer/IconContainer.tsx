export const IconContainer: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
    return (
      <div className={`cursor-pointer hover:bg-backGroundGreen hover:text-white border-t-4 w-full py-3 flex justify-center`}>
        {icon}
      </div>
    );
  };