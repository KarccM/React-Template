import { getWFP, getICRC } from '../api/options';

export function generateOptions(name) {
  if (name === 'wfp') {
    return getWFP;
  }
  if (name === 'icrc') {
    return getICRC;
  }
}
