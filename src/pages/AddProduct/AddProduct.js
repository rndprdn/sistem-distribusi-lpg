import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import styled from 'styled-components';
import { PageBase } from '../../components';
import upload from '../../assets/upload.svg';
import validationSchema from './validation';

const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;

const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 42px;
  border-radius: 10px;
  border: 1px solid #dbdde0;
  padding: 0 16px;
  color: #52575c;
  font-size: 14px;
`;

const InputLabel = styled.label`
  display: inline-block;
  width: 100%;
  height: 42px;
  border-radius: 10px;
  border: 1px solid #dbdde0;
  padding: 0 16px;
  color: #52575c;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #5db075;
  margin-top: 50px;

  :disabled {
    background-color: #a0a4a8;
  }
`;

const ErrorsMsg = styled.p`
  font-size: 12px;
  color: #e4032e;
`;

export default function AddProduct() {
  const token = window.localStorage.getItem('authToken');

  function handleSubmit(values) {
    let bodyFormData = new FormData();
    bodyFormData.append('name', values.name);
    bodyFormData.append('price', values.price);
    bodyFormData.append('supplier_id', values.supplier_id);
    bodyFormData.append('image', values.image);

    axios({
      method: 'POST',
      url: 'https://lpg.zall.tech/api/product',
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  return (
    <PageBase>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 16,
        }}
      >
        <p style={{ fontSize: 18 }}>Tambah Produk</p>
      </div>
      <Formik
        initialValues={{ supplier_id: 4 }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, isValid, dirty, setFieldValue }) => {
          function handleUploadImage(e) {
            const file = e.target.files[0];
            setFieldValue('image_url', file.name);
            setFieldValue('image', file);
          }
          return (
            <Form style={{ marginTop: 12 }}>
              <div style={{ marginBottom: 10, position: 'relative' }}>
                <Label
                  htmlFor="image"
                  style={{ display: 'inline-block', width: '100%' }}
                >
                  Foto
                </Label>
                <InputLabel
                  htmlFor="image"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <p>{values.image_url}</p>
                </InputLabel>
                <input
                  id="image"
                  type="file"
                  name="image"
                  style={{ display: 'none' }}
                  onChange={handleUploadImage}
                />
                <img
                  src={upload}
                  alt=""
                  style={{ position: 'absolute', top: '40px', right: '16px' }}
                />
                {errors.image && touched.image && (
                  <ErrorsMsg>{errors.image}</ErrorsMsg>
                )}
              </div>
              <div style={{ marginBottom: 10 }}>
                <Label htmlFor="name">Nama</Label>
                <Input id="name" type="text" name="name" />
                {errors.name && touched.name && (
                  <ErrorsMsg>{errors.name}</ErrorsMsg>
                )}
              </div>
              <div style={{ marginBottom: 10 }}>
                <Label htmlFor="price">Harga</Label>
                <Input id="price" type="number" name="price" />
                {errors.price && touched.price && (
                  <ErrorsMsg>{errors.price}</ErrorsMsg>
                )}
              </div>
              <div>
                <Label htmlFor="stock">Stok</Label>
                <Input id="stock" type="text" name="stock" />
                {errors.stock && touched.stock && (
                  <ErrorsMsg>{errors.stock}</ErrorsMsg>
                )}
              </div>
              <Button type="submit" disabled={!isValid || !dirty}>
                Tambah
              </Button>
            </Form>
          );
        }}
      </Formik>
    </PageBase>
  );
}
