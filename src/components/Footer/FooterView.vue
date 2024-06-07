<template>
    <v-divider></v-divider>
    <v-footer >
        
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <h3>Company</h3>
            <ul>
              <li><a href="#!">Work With Us</a></li>
              <li><a href="#!">Contact Us</a></li>
            </ul>
          </v-col>
          <v-col cols="12" md="3">
            <h3>Help & Support</h3>
            <ul>
              <li><a href="#!">View Tutorials</a></li>
              <li><a href="#!">Request a New Feature</a></li>
              <li><a href="#!">Report a Bug</a></li>
              <li><a href="#!">Report an Outage</a></li>
            </ul>
          </v-col>
          <v-col cols="12" md="3">
            <h3>Community & Tools</h3>
            <ul>
              <li><a href="#!">Join Our Community</a></li>
              <li><a href="#!">Follow Us On LinkedIn</a></li>
            </ul>
          </v-col>
          <v-col cols="12" md="3">
            <h3>Terms & Policies</h3>
            <ul>
              <li><a href="#!">Privacy Notice</a></li>
              <li><a href="#!">Terms of Service</a></li>
              <li><a href="#!">Usage Guidelines</a></li>
            </ul>
          </v-col>
        </v-row>
        <v-row class="mt-5 d-flex justify-center">
          <div class=" d-flex align-center">
            <v-img style="border-radius: 50%;" src="https://i.pinimg.com/564x/9d/e4/97/9de497cbac67554d199b5945006f14d0.jpg" alt="Logo" width="35" height="35" />
            <div class="ms-3">&copy; 2024 PeopleSearch</div>
          </div>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <style scoped>
  h3 {
    font-size: 1.2em;
    font-weight: 500;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    margin: 5px 0;
  }
  ul li a {
    color: #000;
    text-decoration: none;
  }
  ul li a:hover {
    text-decoration: underline;
  }
  </style>