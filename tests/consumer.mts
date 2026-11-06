import * as api from '@lp-labs/word-boundary-trimmer';
import { truncateAtWord } from '@lp-labs/word-boundary-trimmer';
console.log(truncateAtWord('A short sentence here', 12));
// @ts-expect-error invalid argument must be rejected by declarations
api.truncateAtWord(1, 2);
