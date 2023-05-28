import { styled } from "styled-components";
import Map from "./Map";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
`;

const Right = styled.div`
  flex: 1;
  padding: 0 3%;
`;

const Judul = styled.h1`
  font-weight: 600;
  color: #1b405e;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  background-color: #eeeeee;
  border-style: none;
  border-radius: 5px;
  padding: 3% 2%;
`;

const TextArea = styled.textarea`
  background-color: #eeeeee;
  border-style: none;
  border-radius: 5px;
  padding: 5% 2%;
`;

const Tombol = styled.button`
  padding: 2%;
  background-color: #fea0b3;
  border-radius: 5px;
  border-style: solid;
  border-color: #776569;
  font-weight: bold;
  color: #1b405e;
  letter-spacing: 1px;
`;

const Kontak = () => {

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) =>{
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ohhkiio",
        "template_l0l43sm",
        ref.current,
        "4DDx0oMYmv7-KOP-R"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          {/* buat bikin form isi cerita */}
          <Form ref={ref} onSubmit={handleSubmit}>
            <Judul>Ceritakan kisahmu tentang Burung Enggang!</Judul>
            <Input placeholder="Nama" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Tulis kisahmu disini!" name="message" rows={10}/>
            <Tombol type="submit">Kirim</Tombol>
            {success && "Pesan anda berhasil dikirim. Terimakasih :D"}
          </Form>
        </Left>

        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Kontak;
