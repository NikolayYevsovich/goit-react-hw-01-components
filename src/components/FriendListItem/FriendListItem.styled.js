import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  padding-left: 100px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  margin-bottom: 10px;
`;

export const OnlineStatus = styled.span`
  margin-right: 7px;
  margin-left: 7px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: red;
  margin-left: 15px;
	margin-right: 15px;
  background-color: ${props => {
    if (props.isOnline) {
      return 'green';
    }
    if (!props.isOnline) {
      return 'red';
    }
  }};
  }};
`;

export const FriendAvatar = styled.img`
  margin-right: 15px;
`;
