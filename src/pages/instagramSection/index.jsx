


import {
  Container,
  Title,
  Subtitle,
  InstaHandle,
  Grid,
  PostBox,
  MoreLink,
} from "./styles";
import ansiedade from "../../assets/ansiedade.png";
import luisa from "../../assets/luisa.png";
import image from "../../assets/image.png";
import luisa2 from "../../assets/luisa2.png";
import decisao from "../../assets/decisao.png";
import ansioso from "../../assets/ansioso.png";

export default function InstagramSection() {
  return (
    <Container>
      <Title>Acompanhe meus conteúdos no Instagram</Title>
      <Subtitle>
        para reflexões, orientações e acolhimento sobre saúde emocional:
      </Subtitle>
      <InstaHandle>
        <span role="img" aria-label="instagram">
          📷
        </span>{" "}
        @luisafernandez.psi
      </InstaHandle>

      <Grid>
        <PostBox>
          <a
            href="https://www.instagram.com/p/Cyq81nkNKOb/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={luisa} alt="Post 1" />
          </a>
        </PostBox>
        <PostBox>
          <a
            href="https://www.instagram.com/p/DFYwjOyOb8u/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ansiedade} alt="Post 2" />
          </a>
        </PostBox>

        <PostBox>
          <a
            href="https://www.instagram.com/p/CmfVVMJtDE_/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image} alt="Post 3" />
          </a>
        </PostBox>

        <PostBox>
          <a
            href="https://www.instagram.com/p/DFvxZRsP-Hh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={luisa2} alt="Post 4" />
          </a>
        </PostBox>

        <PostBox>
          <a
            href="https://www.instagram.com/p/DDNQJE6P5Qc/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={decisao} alt="Post 5" />
          </a>
        </PostBox>

        <PostBox>
          <a
            href="https://www.instagram.com/p/DCzxVp9v1mR/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ansioso} alt="Post 6" />
          </a>
        </PostBox>
      </Grid>

      <MoreLink
        href="https://www.instagram.com/luisafernandez.psi"
        target="_blank"
      >
        Ver mais no Instagram →
      </MoreLink>
    </Container>
  );
}