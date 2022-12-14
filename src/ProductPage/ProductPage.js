import React, { useState } from "react";
// import PropTypes from "prop-types";
import styles from "./ProductPage.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import ScrollTop from "../LandingPage/ScrollTop";

import HeaderProducts from "../Headers/HeaderProducts";
import HeaderProductsNo from "../Headers/HeaderProductsNo";
import { Outlet, useNavigate } from "react-router-dom";
import { Categories } from "../dataCategories.js";
import { AppButtonWGY, AppButtonWhite } from "../CustomComponents/AppButton";
import Footer from "../Footer/Footer";

function ProductPage() {
  const [breadcrumbActive, setBreadcrumbActive] = useState("All Products");
  const navigate = useNavigate();

  return (
    <Container fluid className={styles.ProductPage} data-testid="ProductPage">
      {localStorage.getItem("user-info") ? (
        <HeaderProducts />
      ) : (
        <HeaderProductsNo />
      )}

      <Container>
        <Row className="align-items-center">
          <Breadcrumb className="pt-3">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
            <Breadcrumb.Item active>{breadcrumbActive}</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Col xs={3}>
            <Stack className="gap-2">
              {Categories.map((category, index) => (
                <AppButtonWGY
                  key={index}
                  onClick={() => {
                    setBreadcrumbActive(category.text);
                    navigate(`/products/${category.url}`);
                  }}
                  type="button"
                  active={category.text === breadcrumbActive}
                >
                  {category.text.toUpperCase()}
                </AppButtonWGY>
              ))}
            </Stack>
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <ScrollTop />
      <Footer></Footer>
    </Container>
  );
}

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

export default ProductPage;
