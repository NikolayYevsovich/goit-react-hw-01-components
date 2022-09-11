import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  padding: 20px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  font-family: cursive;
`;

export const Avatar = styled.img`
  width: 100px;
  display: block;
  height: auto;
  border-radius: 50%;
  background-color: azure;
  border: 1px solid gray;
`;

export const StatsWrapper = styled.ul`
  list-style: none;
  display: flex;
  font-family: cursive;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  margin-right: -15px;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 15px;
`;
