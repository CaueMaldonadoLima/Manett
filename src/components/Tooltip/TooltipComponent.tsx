import { FC } from "react"

type TooltipProps = {
    text: string,
    children: React.ReactNode,
    position: 'top' | 'right' | 'bottom' | 'left',
}

const Tooltip: FC<TooltipProps> = ({
    text,
    children,
    position = 'top',
}) => {

    const getPositionClasses = () => {
        switch (position) {
          case "top":
            return "bottom-full mb-2 left-1/2 -translate-x-1/2";
          case "bottom":
            return "top-full mt-2 left-1/2 -translate-x-1/2";
          case "left":
            return "right-full mr-2 top-1/2 -translate-y-1/2";
          case "right":
            return "left-full ml-2 top-1/2 -translate-y-1/2";
          default:
            return "bottom-full mb-2 left-1/2 -translate-x-1/2";
        }
    };

    return (
        <div className="relative group inline-block">
            {children}
            <div className={`absolute ${getPositionClasses()} w-max px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity`}>
                {text}
            </div>
        </div>
    )
}

export { Tooltip }