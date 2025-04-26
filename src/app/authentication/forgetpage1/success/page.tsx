import { CircleCheck } from "lucide-react";
import {Button} from "antd";

const page = () => {
  return (
    <div className="p-10 bg-blue-300">
      <div className="bg-white place-self-center p-10 m-4 text-center">
        <CircleCheck className="size-50 lg:size-80 place-self-center" />
        <h2 className="text-green-500 text-3xl font-500 py-5 ">Successfully</h2>
        <p>Your password has been reset successfully</p>
        <Button type="primary">CONTINUE</Button>
      </div>
    </div>
  );
};

export default page;
