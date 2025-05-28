import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const Filters = ({ applyFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const categories = ['بدل رسمية', 'بدل كاجوال', 'بدل زفاف', 'أطقم أطفال'];
  const colors = ['أسود', 'كحلي', 'رمادي', 'بيج', 'بني', 'أبيض'];
  const sizes = ['46', '48', '50', '52', '54', '56', '58'];

  const handleApplyFilters = () => {
    applyFilters({
      category: selectedCategory,
      color: selectedColor,
      size: selectedSize,
    });
  };

  return (
    <div className="filters-container">
      <Row>
        <Col>
          <Form.Group controlId="categoryFilter">
            <Form.Label>الفئة</Form.Label>
            <Form.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="">كل الفئات</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="colorFilter">
            <Form.Label>اللون</Form.Label>
            <Form.Select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
              <option value="">كل الألوان</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="sizeFilter">
            <Form.Label>المقاس</Form.Label>
            <Form.Select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="">كل المقاسات</option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col className="d-flex align-items-end">
          <Button variant="dark" onClick={handleApplyFilters}>
            تطبيق الفلاتر
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Filters;
