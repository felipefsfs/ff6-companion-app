import React, { Fragment } from "react";

export default function CharExp({char, exp, data}) {
    
  const char_obj = create_char(char, exp, data);
  return (
    <Fragment>
      <span className="card-title">
      <div class=" left chip"> 
        {char_obj.level}
      </div>
      <div class="chip right">
        {char_obj.perc}%
      </div>
      <div class="chip pulse right ">
        {char_obj.nextExp}
      </div>
      </span>
    </Fragment>
  );

  function create_char(char_name, exp_value, base_data) {
    const index = base_data.exp.findIndex(o => o.experience > exp_value);
    const nextObj = base_data.exp[index];
    const currObj = base_data.exp[index-1];
    const toNextPerc = Math.round(((exp_value - currObj.experience)/(nextObj.experience - currObj.experience))*100);
    return {
      value: char_name,
      level: currObj.level,
      nextExp: nextObj.experience - exp_value,
      perc: toNextPerc
    }
  }
}