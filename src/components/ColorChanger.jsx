import { colors, randomRGB } from "./../colors"
import "./ColorChanger.css"
import Popup from "./Popup"

export default function ColorChanger({ globalColor, onChangeColor }) {
  return (
    <Popup
      id="colorChangers"
      buttonContent="Select Color 👇🏻"
      children={
        <div class="colorChangers">
          {colors.slice(1).map(({ name, kelvin, value }) => (
            <button
              style={{ background: `rgb(${value})` }}
              class={`${globalColor() === value ? "selected" : ""}`}
              onClick={() => onChangeColor(value)}
            />
          ))}
          <button
            class="randomColor"
            onClick={() => onChangeColor(randomRGB())}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="19px"
                viewBox="0 0 24 24"
                width="18px"
                fill="var(--action)"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
              </svg>
            </span>
          </button>
        </div>
      }
    />
  )
}
