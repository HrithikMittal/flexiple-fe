import { css } from "@emotion/css";

export const item = css`
  display: flex;
  padding: 10px;
  column-gap: 10px;
`;

export const profileImage = css`
  border-radius: 50%;
  width: max-content;
  padding-top: 20px;
  img {
    overflow: hidden;
    border-radius: 50%;
  }
`;

export const content = css`
  background-color: #f9f6f6;
  padding: 10px 15px 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px #a129fe;
`;

export const name = css`
  font-weight: bolder;
  font-size: 1rem;
  padding: 10px 0px;
`;

export const optionItem = css`
  display: flex;
  column-gap: 5px;
  cursor: pointer;
  align-items: center;
`;

export const replyItem = css`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  textarea {
    padding: 10px;
    font-size: 15px;
    border-radius: 10px;
    border-color: none;
    outline: none;
    width: 98%;
    height: 100px;
  }
`;

export const options = css`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin: 5px;
`;

// login modal css
export const inputStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  label {
    font-size: 15px;
  }
`;

export const passwordStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-size: 12px;
  align-items: flex-end;
  font-style: italic;
  color: #a129fe;
`;

export const lgModal = css`
  background-color: white;
  border-radius: 5px;
  padding: 50px;
  outline: none;
  width: 400px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const titleWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-weight: 600;
  }
`;
