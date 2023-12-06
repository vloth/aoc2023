const input_file = Bun.file("input.txt")
const input = (await input_file.text()).split("\n").filter(Boolean)

function to_int(n) { return Number.parseInt(n, 10) }
function is_int(n) { return !Number.isNaN(to_int(n)) && isFinite(n) }

let calibration = 0

for (const line of input) {
  let [start,end] = [0, line.length - 1]
  let [line_calibration_start,line_calibration_end] = [undefined, undefined]

  while (start <= end) {
    if (is_int(line[start]))
      line_calibration_start = to_int(line[start])
    else if (line_calibration_start == null) start++

    if (is_int(line[end]))
      line_calibration_end = to_int(line[end])
    else if (line_calibration_end == null) end--

    if (line_calibration_start != null && line_calibration_end != null)
      break
  }

  calibration += to_int(`${line_calibration_start}${line_calibration_end}`)
}

console.log(calibration)
