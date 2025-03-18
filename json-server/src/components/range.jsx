import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

function Range({ handleInput ,minValue ,maxValue }) {

    return (
        <div className="App">
            <MultiRangeSlider
                min={0}
                max={100}
                step={1}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                    handleInput(e);
                }}
            />
        </div>
    );
}

export default Range;