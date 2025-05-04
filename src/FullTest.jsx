import { useMemo, useState } from "react";
import Option from "./Option";

export default function FullTest({data}) {

  return (
    <>
    {data?.map((e, index) => {
        return (
          <div className="qScreen" key={index}>
            <p>{`${index + 1}. ` + e?.question}</p>
            <div className="options">
              <Option letter={"A. "} option={e?.options[0]?.q} answer={e?.options[0]?.a}  />
              <Option letter={"B. "} option={e?.options[1]?.q} answer={e?.options[1]?.a}  />
              <Option letter={"C. "} option={e?.options[2]?.q} answer={e?.options[2]?.a}  />
              <Option letter={"D. "} option={e?.options[3]?.q} answer={e?.options[3]?.a}  />
            </div>
          </div>
        );
      })}
    </>
  )
}
