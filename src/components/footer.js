
import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import '../components_css/footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-title">IITK Links</Typography>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">IITK Homepage</a></li>
              <li><a href="#" className="footer-link">DoAA</a></li>
              <li><a href="#" className="footer-link">DoSA</a></li>
              <li><a href="#" className="footer-link">Students' Gymkhana</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-title">For Companies</Typography>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Steps - Company registration</a></li>
              <li><a href="#" className="footer-link">Recruitment Procedure and Policy</a></li>
              <li><a href="#" className="footer-link">Brochures</a></li>
              <li><a href="#" className="footer-link">Departmental Brochures</a></li>
              <li><a href="#" className="footer-link">FAQs</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-title">For Students</Typography>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Steps - Students Registration</a></li>
              <li><a href="#" className="footer-link">Policy</a></li>
              <li><a href="#" className="footer-link">Preparation Portal</a></li>
              <li><a href="#" className="footer-link">Insights</a></li>
              <li><a href="#" className="footer-link">FAQs</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-title">Contact</Typography>
            <address className="footer-contact">
              Students' Placement office<br />
              109, outreach building<br />
              IIT Kanpur, Kanpur-208016<br />
              Phone no.: +91 512 259 44 33/34<br />
              Email: <a href="mailto:spo@iitk.ac.in" className="footer-link">spo@iitk.ac.in</a>
            </address>
          </Grid>
        </Grid>
        <Box mt={5} textAlign="center">
          <Typography variant="body2" className="footer-copy">
            © Copyright 2023 SPO, IIT Kanpur
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
