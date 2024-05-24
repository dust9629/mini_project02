import React, { useState, useEffect } from "react";
import "./ColorPicker.css";

function ColorPicker({ onBackgroundColorChange, onFontColorChange }) {
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [fontColor, setFontColor] = useState("#ffffff");
  const [backgroundHue, setBackgroundHue] = useState(1);
  const [backgroundSaturation, setBackgroundSaturation] = useState(0);
  const [backgroundLightness, setBackgroundLightness] = useState(0);
  const [fontHue, setFontHue] = useState(360);
  const [fontSaturation, setFontSaturation] = useState(1);
  const [fontLightness, setFontLightness] = useState(1);

  useEffect(() => {
    const bgHex = hslToHex(
      backgroundHue,
      backgroundSaturation,
      backgroundLightness
    );
    setBackgroundColor(bgHex);
    onBackgroundColorChange(bgHex);

    const fontHex = hslToHex(fontHue, fontSaturation, fontLightness);
    setFontColor(fontHex);
    onFontColorChange(fontHex);
  }, [
    backgroundHue,
    backgroundSaturation,
    backgroundLightness,
    fontHue,
    fontSaturation,
    fontLightness,
    onBackgroundColorChange,
    onFontColorChange,
  ]);

  function hslToHex(h, s, l) {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;

    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (h >= 300 && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255)
      .toString(16)
      .padStart(2, "0");
    g = Math.round((g + m) * 255)
      .toString(16)
      .padStart(2, "0");
    b = Math.round((b + m) * 255)
      .toString(16)
      .padStart(2, "0");

    return `#${r}${g}${b}`;
  }

  return (
    <div className="color-picker">
      <div className="background">
        <h6 style={{ color: fontColor }}>Background Color</h6>
        <input
          style={{ color: fontColor }}
          type="text"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <ul>
          <li>
            <p style={{ color: fontColor }}>
              Hue<span style={{ color: fontColor }}>{backgroundHue}°</span>
            </p>
            <input
              type="range"
              min="0"
              max="360"
              value={backgroundHue}
              onChange={(e) => setBackgroundHue(e.target.value)}
            />
          </li>
          <li>
            <p style={{ color: fontColor }}>
              Saturation
              <span style={{ color: fontColor }}>{backgroundSaturation}</span>
            </p>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={backgroundSaturation}
              onChange={(e) => setBackgroundSaturation(e.target.value)}
            />
          </li>
          <li>
            <p style={{ color: fontColor }}>
              Lightness
              <span style={{ color: fontColor }}>{backgroundLightness}</span>
            </p>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={backgroundLightness}
              onChange={(e) => setBackgroundLightness(e.target.value)}
            />
          </li>
        </ul>
      </div>
      <div className="font_color">
        <h6 style={{ color: fontColor }}>Font Color</h6>
        <input
          style={{ color: fontColor }}
          type="text"
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
        />
        <ul>
          <li>
            <p style={{ color: fontColor }}>
              Hue<span style={{ color: fontColor }}>{fontHue}°</span>
            </p>
            <input
              type="range"
              min="0"
              max="360"
              value={fontHue}
              onChange={(e) => setFontHue(e.target.value)}
            />
          </li>
          <li>
            <p style={{ color: fontColor }}>
              Saturation
              <span style={{ color: fontColor }}>{fontSaturation}</span>
            </p>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={fontSaturation}
              onChange={(e) => setFontSaturation(e.target.value)}
            />
          </li>
          <li>
            <p style={{ color: fontColor }}>
              Lightness<span style={{ color: fontColor }}>{fontLightness}</span>
            </p>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={fontLightness}
              onChange={(e) => setFontLightness(e.target.value)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ColorPicker;
