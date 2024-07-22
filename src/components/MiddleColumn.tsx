import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PostForm from "./MiddleComponents/PostForm"
import Timeline from "./MiddleComponents/Timeline"

const Column = styled.div`
  max-width: 598px;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
`

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`

const Tab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: none;
  background-color: ${props => props.active ? '#1DA1F2' : 'transparent'};
  color: ${props => props.active ? 'white' : 'black'};
  cursor: pointer;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${props => props.active ? '#1DA1F2' : '#E8E8E8'};
  }
`


const MiddleColumn: React.FC = (props) => {
  const [activeTab, setActiveTab] = useState<'all' | 'following'>('all');

  return (
    <Column>
      <PostForm />
      <TabContainer>
        <Tab 
          active={activeTab === 'all'} 
          onClick={() => setActiveTab('all')}
        >
          For You
        </Tab>
        <Tab 
          active={activeTab === 'following'} 
          onClick={() => setActiveTab('following')}
        >
          Following
        </Tab>
      </TabContainer>
      {activeTab === 'all' && <Timeline type="all" />}
      {activeTab === 'following' && <Timeline type="following" />}
    </Column>
  );
};

export default MiddleColumn;