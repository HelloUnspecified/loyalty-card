import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { siteInfo } from '../utilities';

const dotStyle = css`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  margin: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const Row = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: ${({ align }) =>
    align === 'end' ? 'flex-end' : 'flex-start'};
`;

const FilledDot = styled.div`
  ${dotStyle};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const OpenDot = styled.div`
  ${dotStyle}
`;

export const DotRow = ({ align, className, filledDots, id, punch, size }) => {
  const { punchesToFree } = siteInfo;

  return (
    <Row className={className} align={align}>
      {Array.from({ length: filledDots }, (x, i) => (
        <FilledDot key={`filled-${id}-${x}-${i}`} size={size} />
      ))}
      {Array.from({ length: punchesToFree - filledDots }, (x, i) => (
        <OpenDot key={`open-${id}-${x}-${i}`} onClick={punch} size={size} />
      ))}
    </Row>
  );
};

DotRow.propTypes = {
  align: PropTypes.string,
  punch: PropTypes.func,
  size: PropTypes.string,
};

DotRow.defaultProps = {
  align: 'end',
  punch: () => {},
  size: '2.5rem',
};
