import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 14px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed rgba(31, 135, 75, 0.8);
  @media (max-width: 567px) {
    font-size: 14px;
    }
`;

export const BoldLink = styled.a`
  font-size: 14px;
  color: rgba(31, 135, 75, 0.8);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed rgba(31, 135, 75, 0.8);

  @media (max-width: 567px) {
  font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  height: 50px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  padding: 0px 15px;
  transition: all 200ms ease-in-out;
  margin-bottom: 20px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }


  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(31, 135, 75, 0.8);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 150px;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: linear-gradient(
    78deg, rgba(31, 135, 75, 0.8) 10%, rgba(0,255,0,0.3) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

export const LineText = styled.p`
  font-size: 14px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  @media (max-width: 567px) {
    font-size: 14px;
    }
`;