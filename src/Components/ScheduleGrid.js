import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 10px;
`;

const GridItem = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

const MyGrid = () => {
  return (
    <GridContainer>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
      <GridItem>9</GridItem>
      <GridItem>10</GridItem>
      <GridItem>11</GridItem>
      <GridItem>12</GridItem>
      <GridItem>13</GridItem>
      <GridItem>14</GridItem>
      <GridItem>15</GridItem>
      <GridItem>16</GridItem>
    </GridContainer>
  );
};

export default MyGrid;