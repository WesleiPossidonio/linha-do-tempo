interface TimelineItemProps {
  title: string;
  description: string;
  align: "left" | "right";
  icon: React.ReactNode;
}

export const Timeline = ({ title, description, align, icon }: TimelineItemProps) => {
  const isLeft = align === "left";

  return (
    <div className="relative w-full flex">
      {/* Linha central rosa */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-300 z-0" />

      {/* Card à esquerda */}
      {isLeft && (
        <>
          <div className="w-1/2 flex justify-end pr-6">
            <div className="bg-pink-50 p-4 rounded-lg shadow-md shadow-pink-200 text-right max-w-xs">
              <h4 className="text-lg font-bold text-pink-800">{title}</h4>
              <p className="text-sm text-pink-700">{description}</p>
            </div>
          </div>
          <div className="w-0 flex flex-col items-center relative z-10">
            <div className="bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center z-10">
              {icon}
            </div>
          </div>
          <div className="w-1/2" />
        </>
      )}

      {/* Card à direita */}
      {!isLeft && (
        <>
          <div className="w-1/2" />
          <div className="w-0 flex flex-col items-center relative z-10">
            <div className="bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center z-10">
              {icon}
            </div>
          </div>
          <div className="w-1/2 flex justify-start pl-6">
            <div className="bg-pink-50 p-4 rounded-lg shadow-md shadow-pink-200 text-left max-w-xs">
              <h4 className="text-lg font-bold text-pink-800">{title}</h4>
              <p className="text-sm text-pink-700">{description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
