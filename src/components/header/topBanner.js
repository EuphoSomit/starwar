import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import moment from 'moment';

const TopBanner = props => {
  return (
    <div className="top-banner-header">
      <Container>
        <Row>
          <Col md={4}>
            <div className="title">
              Referral for{' '}
              {startCase(toLower(props.selectedMember.patientName))}
            </div>
          </Col>
          <Col md={6}>
            <div className="flex">
              <span className="member-id">{`Member ID: ${
                props.selectedMember.memberId
              }`}</span>
              <span className="status">
                Status:{' '}
                <span className="strong">
                  {startCase(toLower(props.selectedMember.status))}
                </span>
              </span>
              <span className="dob">{`DOB: ${moment(
                props.selectedMember.dob
              ).format('L')}`}</span>
            </div>
          </Col>
          <Col md={2} className="text-right">
            <Button
              color="link"
              onClick={props.loadComponent}
              className="text-underline text-white font-14 header-cta-btn"
            >
              {props.pageText}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBanner;
