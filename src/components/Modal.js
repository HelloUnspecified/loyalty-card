import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Icon } from './Icon';

const ModalMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: ${props => (props.showModal ? '' : 'none')};
`;

const ModalContent = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  max-width: 85rem;
`;

const CloseIcon = styled(Icon)`
  height: 2rem;
  width: 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;

  svg {
    fill: ${({ theme }) => theme.colors.dark};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Modal = ({ className, children, onClose, showModal }) => {
  return (
    <ModalMain
      showModal={showModal}
      className={className}
      onClick={() => {
        onClose();
      }}
    >
      <ModalContent>
        <CloseIcon
          icon="close"
          onClick={() => {
            onClose();
          }}
        />
        {children}
      </ModalContent>
    </ModalMain>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.shape({}).isRequired,
  onClose: PropTypes.func,
  showModal: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  className: '',
  onClose: () => {},
};

// export default styled(Modal)`
//   h2 {
//     font-size: 2.8rem;
//     margin-bottom: 0.7rem;
//   }

//   h2,
//   h3,
//   p {
//     text-align: center;
//     line-height: 1.2;
//     color: ${({ theme }) => theme.colors.dark};
//   }

//   h2,
//   h3 {
//     font-weight: 400;
//   }

//   p {
//     max-width: 60rem;
//     margin: auto;
//   }

//   .underline {
//     padding-bottom: 2rem;
//     border-bottom: 1px solid ${({ theme }) => theme.colors.orange};
//   }

//   .top-line {
//     padding-top: 1.5rem;
//     margin-top: 2rem;
//     border-top: 1px solid ${({ theme }) => theme.colors.orange};
//   }

//   .mc-field-group {
//     justify-content: center;
//   }
// `;
