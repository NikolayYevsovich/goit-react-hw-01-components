import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  width: 500px;
  border: 1px solid black;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const StatisticsTitle = styled.h2`
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin: 0;
  padding: 0;
  background-color: aliceblue;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const StatsListItem = styled.li`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 20%;
  background-color: ${props => {
    switch (props.label) {
      case '.docx':
        return 'blue';
      case '.pdf':
        return 'green';
      case '.mp3':
        return 'red';
      case '.psd':
        return 'orange';
      default:
        return 'yellow';
    }
  }};
`;
