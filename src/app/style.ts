import { css } from "@emotion/css";

export const container = css`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const floatingButton = css`
  position: fixed !important;
  width: 60px !important;
  height: 60px !important;
  bottom: 40px !important;
  right: 40px !important;
  color: #fff !important;
  border-radius: 50px !important;
  text-align: center !important;
  box-shadow: 2px 2px 3px #999 !important;
`;

export const reply = css`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  textarea {
    padding: 10px;
    font-size: 15px;
    border-radius: 10px;
    border-color: none;
    outline: none;
    width: 100%;
    height: 100px;
  }
`;
