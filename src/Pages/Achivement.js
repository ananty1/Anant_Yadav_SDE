import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import './styles.css';

const achievements = [
  "LeetCode rating of 1753, top 9.67% of daily LeetCode users.",
  "Solved more than 900 algorithmic problems on LeetCode, GeeksforGeeks, CodingNinjas.",
  "Ranked in top 1% in JEE Advanced 2021, AIR 2905 (OBC).",
  "Represented IIT BHILAI Cricket twice in INTER-IIT SPORTS MEET."
];

const Achievements = () => {
  return (
    <Container className="container">
      <Typography variant="h2" gutterBottom>Achievements</Typography>
      <List>
        {achievements.map((achievement, index) => (
          <ListItem key={index}>
            <ListItemText primary={achievement} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Achievements;
