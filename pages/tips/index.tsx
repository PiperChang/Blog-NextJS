import { TipService } from "api";
import axios from "axios";
import TipListItem from "components/tips/TipList";
import React from "react";

const Tips = () => {
  // 당장 가져올 필요가 없다.
  
  const tipList = TipService.getList()
  console.log(tipList);
  
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            
            {/* {TipListItem props={}} */}
          </div>
        </div>
      </section>
      <div>
        <input>
        
        </input>
      </div>
    </div>
  );
};

export default Tips;
