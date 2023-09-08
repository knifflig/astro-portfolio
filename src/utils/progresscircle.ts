function makeSVG(percentage: number = 50, innerText: string = ""): string {

  let absPercentage: string = Math.abs(percentage).toString();
  let percentageStr: string = percentage.toString();
  let classes: string;

  if (percentage < 0) {
      classes = "danger-stroke circle-chart__circle--negative";
  } else if (percentage > 0 && percentage <= 30) {
      classes = "warning-stroke";
  } else {
      classes = "success-stroke";
  }

  let svg: string = `
      <svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
          <circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />
          <circle class="circle-chart__circle ${classes}" stroke-dasharray="${absPercentage},100" cx="16.9" cy="16.9" r="15.9" />
          <g class="circle-chart__info">
              <text class="circle-chart__percent" x="17.9" y="15.5">${percentageStr}%</text>
  `;

  if (innerText) {
      svg += `<text class="circle-chart__subline" x="16.91549431" y="22">${innerText}</text>`;
  }

  svg += ` </g></svg>`;

  return svg;
}



export default makeSVG;
