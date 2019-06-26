import React from "react";

class MyButton extends React.Component {
  state = {
    name: "My Name",
    description: "My description",
    Image: "/MyPhoto.jpg"
  };

  getState(MyName, MyURL, MyDescription) {
    this.setState({
      name: MyName,
      description: MyDescription,
      Image: MyURL
    });
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.getState(
              "Sarra",
              "/image2.jpg",
              "Copywriter and professional translator (English to Arabic and vice versa). Over the last fours years, I have provided great content and translations for a large number of websites and publishing houses."
            );
          }}
        >
          Sarra
        </button>
        <button
          onClick={() => {
            this.getState(
              "Mohamed",
              "/image1.jpg",
              "As a PHP programmer I create Drupal websites from the psd design to the production site. I have a 12-year php-mysql experience in the web developing area and more than 8 years in Drupal. I have a great experience working on both back-end and front-end. I have been working as a freelancer in full-time for companies all over the world for 5 years. I provide solutions for companies and other organisations to make their websites more efficient and user friendly"
            );
          }}
        >
          Mohamed
        </button>
        <button
          onClick={() => {
            this.getState(
              "Mouna",
              "/image3.jpg",
              "I am Computer Engineer having 7+ years of website development, design and database experience. I have done projects for various clients under various domains like car dealers, real estate, job boards, forex , eCommerce etc."
            );
          }}
        >
          Mouna
        </button>
        <h1>{this.state.name}</h1>
        <img src={this.state.Image} alt="monImage" />
        <p>{this.state.description}</p>
      </>
    );
  }
}
export default MyButton;
