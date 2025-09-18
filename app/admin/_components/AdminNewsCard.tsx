import { FaXmark } from "react-icons/fa6";

export type AdminNewsCardProps = {
  heading: string;
  text: string;
  type: "news" | "alert";
};

const newsColors = {
  news: "bg-linear-40 from-violet to-pink",
  alert: "bg-linear-120 from-violet to-pink",
};

export function AdminNewsCard(props: AdminNewsCardProps) {
  return (
    <div className={`${newsColors[props.type]} rounded-medium text-white p-4`}>
      <div className="flex justify-between">
        <h5 className="font-bold">{props.heading}</h5>
        <FaXmark />
      </div>
      <p>{props.text}</p>
    </div>
  );
}
