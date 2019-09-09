import {css} from 'styled-components';

const shadowKeyUmbraOpacity = 'rgba(0, 0, 0, .05)';
const shadowKeyPenumbraOpacity = 'rgba(0, 0, 0, .035)';
const shadowKeyAmbientOpacity = 'rgba(0, 0, 0, .03)';

const shadowKeyUmbra = [
  `0px 0px 0px 0px ${shadowKeyUmbraOpacity}`,
  `0px 2px 1px -1px ${shadowKeyUmbraOpacity}`,
  `0px 3px 1px -2px ${shadowKeyUmbraOpacity}`,
  `0px 3px 3px -2px ${shadowKeyUmbraOpacity}`,
  `0px 2px 4px -1px ${shadowKeyUmbraOpacity}`,
  `0px 3px 5px -1px ${shadowKeyUmbraOpacity}`,
  `0px 3px 5px -1px ${shadowKeyUmbraOpacity}`,
  `0px 4px 5px -2px ${shadowKeyUmbraOpacity}`,
  `0px 5px 5px -3px ${shadowKeyUmbraOpacity}`,
  `0px 5px 6px -3px ${shadowKeyUmbraOpacity}`,
  `0px 6px 6px -3px ${shadowKeyUmbraOpacity}`,
  `0px 6px 7px -4px ${shadowKeyUmbraOpacity}`,
  `0px 7px 8px -4px ${shadowKeyUmbraOpacity}`,
  `0px 7px 8px -4px ${shadowKeyUmbraOpacity}`,
  `0px 7px 9px -4px ${shadowKeyUmbraOpacity}`,
  `0px 8px 9px -5px ${shadowKeyUmbraOpacity}`,
  `0px 8px 10px -5px ${shadowKeyUmbraOpacity}`,
  `0px 8px 11px -5px ${shadowKeyUmbraOpacity}`,
  `0px 9px 11px -5px ${shadowKeyUmbraOpacity}`,
  `0px 9px 12px -6px ${shadowKeyUmbraOpacity}`,
  `0px 10px 13px -6px ${shadowKeyUmbraOpacity}`,
  `0px 10px 13px -6px ${shadowKeyUmbraOpacity}`,
  `0px 10px 14px -6px ${shadowKeyUmbraOpacity}`,
  `0px 11px 14px -7px ${shadowKeyUmbraOpacity}`,
  `0px 11px 15px -7px ${shadowKeyUmbraOpacity}`,
];

const shadowKeyPenumbra = [
  `0px 0px 0px 0px ${shadowKeyPenumbraOpacity}`,
  `0px 1px 1px 0px ${shadowKeyPenumbraOpacity}`,
  `0px 2px 2px 0px ${shadowKeyPenumbraOpacity}`,
  `0px 3px 4px 0px ${shadowKeyPenumbraOpacity}`,
  `0px 4px 5px 0px ${shadowKeyPenumbraOpacity}`,
  `0px 5px 8px 0px ${shadowKeyPenumbraOpacity}`,
  `0px 6px 10px 0px ${shadowKeyPenumbraOpacity}`,
  `0px 7px 10px 1px ${shadowKeyPenumbraOpacity}`,
  `0px 8px 10px 1px ${shadowKeyPenumbraOpacity}`,
  `0px 9px 12px 1px ${shadowKeyPenumbraOpacity}`,
  `0px 10px 14px 1px ${shadowKeyPenumbraOpacity}`,
  `0px 11px 15px 1px ${shadowKeyPenumbraOpacity}`,
  `0px 12px 17px 2px ${shadowKeyPenumbraOpacity}`,
  `0px 13px 19px 2px ${shadowKeyPenumbraOpacity}`,
  `0px 14px 21px 2px ${shadowKeyPenumbraOpacity}`,
  `0px 15px 22px 2px ${shadowKeyPenumbraOpacity}`,
  `0px 16px 24px 2px ${shadowKeyPenumbraOpacity}`,
  `0px 17px 26px 2px ${shadowKeyPenumbraOpacity}`,
  `0px 18px 28px 2px ${shadowKeyPenumbraOpacity}`,
  `0px 19px 29px 2px ${shadowKeyPenumbraOpacity}`,
  `0px 20px 31px 3px ${shadowKeyPenumbraOpacity}`,
  `0px 21px 33px 3px ${shadowKeyPenumbraOpacity}`,
  `0px 22px 35px 3px ${shadowKeyPenumbraOpacity}`,
  `0px 23px 36px 3px ${shadowKeyPenumbraOpacity}`,
  `0px 24px 38px 3px ${shadowKeyPenumbraOpacity}`,
];

const shadowKeyAmbient = [
  `0px 0px 0px 0px ${shadowKeyAmbientOpacity}`,
  `0px 1px 3px 0px ${shadowKeyAmbientOpacity}`,
  `0px 1px 5px 0px ${shadowKeyAmbientOpacity}`,
  `0px 1px 8px 0px ${shadowKeyAmbientOpacity}`,
  `0px 1px 10px 0px ${shadowKeyAmbientOpacity}`,
  `0px 1px 14px 0px ${shadowKeyAmbientOpacity}`,
  `0px 1px 18px 0px ${shadowKeyAmbientOpacity}`,
  `0px 2px 16px 1px ${shadowKeyAmbientOpacity}`,
  `0px 3px 14px 2px ${shadowKeyAmbientOpacity}`,
  `0px 3px 16px 2px ${shadowKeyAmbientOpacity}`,
  `0px 4px 18px 3px ${shadowKeyAmbientOpacity}`,
  `0px 4px 20px 3px ${shadowKeyAmbientOpacity}`,
  `0px 5px 22px 4px ${shadowKeyAmbientOpacity}`,
  `0px 5px 24px 4px ${shadowKeyAmbientOpacity}`,
  `0px 5px 26px 4px ${shadowKeyAmbientOpacity}`,
  `0px 6px 28px 5px ${shadowKeyAmbientOpacity}`,
  `0px 6px 30px 5px ${shadowKeyAmbientOpacity}`,
  `0px 6px 32px 5px ${shadowKeyAmbientOpacity}`,
  `0px 7px 34px 6px ${shadowKeyAmbientOpacity}`,
  `0px 7px 36px 6px ${shadowKeyAmbientOpacity}`,
  `0px 8px 38px 7px ${shadowKeyAmbientOpacity}`,
  `0px 8px 40px 7px ${shadowKeyAmbientOpacity}`,
  `0px 8px 42px 7px ${shadowKeyAmbientOpacity}`,
  `0px 9px 44px 8px ${shadowKeyAmbientOpacity}`,
  `0px 9px 46px 8px ${shadowKeyAmbientOpacity}`,
];

const elevations = (z: number, important: boolean = false) => css`box-shadow: ${shadowKeyUmbra[z]}, ${shadowKeyPenumbra[z]}, ${shadowKeyAmbient[z]} ${important ? 'important' : ''};`;

export default elevations;
