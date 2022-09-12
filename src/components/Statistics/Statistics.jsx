import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  StatisticsTitle,
  StatsList,
  StatsListItem,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatsList>
        {stats.map(stat => (
          <StatsListItem key={stat.id} label={stat.label}>
            <span className="label">{stat.label}</span>
            <span className="percentage"> {stat.percentage}%</span>
          </StatsListItem>
        ))}
      </StatsList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
