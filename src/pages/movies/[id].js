import Navigation from "../../components/Navigation/Navigation";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import {
  MovieBg,
  Error404,
  MovieDetailsWrapper,
  Wrapper,
  MovieImg,
  MovieHeroWrap,
  MovieBgContainer,
  MovieContainer,
  MovieInfo,
} from "../../styles/GlobalComponents";
import DominantColor from "../../components/Movie/DominantColor";
import MovieDetails from "../../components/MovieInfo/MovieDetails";
import { ColorsContextProvider } from "../../store/colorContext";

const movie = ({ movieDetails, creditsDetails, error }) => {
  let crew = [];

  if (error === false) {
    creditsDetails.crew.forEach((item, i) => {
      if (item.job === "Director") crew.push(creditsDetails.crew[i]);
      if (item.job === "Writer") crew.push(creditsDetails.crew[i]);
    });
  }

  const getyear = new Date(movieDetails.release_date).getFullYear();

  // console.log(movieDetails, creditsDetails, error, crew);

  return (
    <>
      <Head>
        <title>{movieDetails.title}</title>
      </Head>
      <Wrapper>
        <MovieDetailsWrapper className="d-flex flex-column justify-content-between">
          <Navigation />
          {error ? (
            <Error404>404</Error404>
          ) : (
            <>
              <ColorsContextProvider>
                <MovieContainer className="position-relative">
                  <MovieBgContainer className="position-absolute">
                    <MovieBg
                      backdrop={movieDetails.backdrop_path}
                      className="position-absolute"
                    ></MovieBg>
                    <DominantColor image={movieDetails.poster_path} />
                  </MovieBgContainer>

                  <MovieHeroWrap className="position-absolute">
                    <MovieImg
                      data={movieDetails.poster_path}
                      className="mx-5"
                    />
                    <MovieInfo>
                      <MovieDetails
                        movieDetailsData={movieDetails}
                        date={getyear}
                      />
                    </MovieInfo>
                  </MovieHeroWrap>
                </MovieContainer>
              </ColorsContextProvider>

              <div style={{ height: "50rem" }}></div>
            </>
          )}
          <Footer />
        </MovieDetailsWrapper>
      </Wrapper>
    </>
  );
};

export async function getServerSideProps(context) {
  const api_key = "146aefbfac856df49543995a6badbf0f";
  const movie_id = context.params.id;
  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`
  );

  const creditsResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api_key}&language=en-US`
  );

  const error = movieResponse.ok ? false : true;

  const movieDetails = await movieResponse.json();

  const creditsDetails = await creditsResponse.json();

  return {
    props: {
      movieDetails,
      creditsDetails,
      error,
    },
  };
}

export default movie;
