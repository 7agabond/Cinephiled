import {
  SeaonDetailsWrapper,
  SeaonsOverview,
  SeasonDetailsDivider,
  SeasonImg,
  SeasonInfoMain,
  SeasonInfoWrapper,
  SeasonsContainer,
  SeasonsRelease,
  SeasonTitle,
  SeasonWrapper,
} from "./TVStyles";

const TVSeasons = ({ seasons }) => {
  let seasonReleaseDates = [];

  seasons.forEach((item) =>
    seasonReleaseDates.push(
      new Date(item.air_date.toString()).toDateString().slice(4, -5) +
        ", " +
        new Date(item.air_date.toString()).getFullYear()
    )
  );

  const Today = new Date();
  return (
    <>
      <SeasonsContainer>
        {seasons.map((item, i) => (
          <SeasonWrapper key={item.id} className="mb-5">
            <SeasonImg poster={item.poster_path} />
            <SeasonInfoWrapper>
              <SeasonInfoMain>
                <SeasonTitle>
                  {item.name}
                  {Today < new Date(seasonReleaseDates[i]) &&
                  Today !== new Date(seasonReleaseDates[i])
                    ? " (Upcoming)"
                    : ""}
                </SeasonTitle>
                <SeaonDetailsWrapper>
                  <SeasonsRelease>{seasonReleaseDates[i]}</SeasonsRelease>
                  <SeasonDetailsDivider />
                  <SeasonsRelease>{item.episode_count} Episodes</SeasonsRelease>
                </SeaonDetailsWrapper>
                {item.overview !== "" && (
                  <SeaonsOverview>{item.overview}</SeaonsOverview>
                )}
              </SeasonInfoMain>
            </SeasonInfoWrapper>
          </SeasonWrapper>
        ))}
      </SeasonsContainer>
    </>
  );
};

export default TVSeasons;
