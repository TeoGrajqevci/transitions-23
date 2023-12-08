import { runSequence } from "./shared/sequenceRunner.js";

const emptySequence = [
    "sketches/example-sequence-empty",
    "sketches/example-sequence-empty",
]

const exampleSequence = [
    "sketches/day1",
    "sketches/day2",
    "sketches/day3",
    "sketches/day4"
]

runSequence(exampleSequence)