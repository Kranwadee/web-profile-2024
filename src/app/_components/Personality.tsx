import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Rationalist (INTJ-T)</p>
        <p className="pb-2">
        Rationalists are imaginative and strategic thinkers. With plans for everything.
        </p>
        <div className="flex gap-1">
          <Badge>INTROVERTED</Badge>
          <Badge>VISION</Badge>
          <Badge>REASON</Badge>
          <Badge>PLAN</Badge>
        
        </div>
      </div>
    </Card>
  );
};

export default Personality;
