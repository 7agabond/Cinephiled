import { Span } from "components/MovieInfo/MovieDetailsStyles";
import { motion } from "framer-motion";
import { blurPlaceholder } from "globals/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useRef } from "react";
import { BsChevronRight } from "react-icons/bs";
import { getCleanTitle } from "src/utils/helper";
import { NoDataText } from "styles/GlobalComponents";
import { CastGrid, CastImg, CastWrapper, SeeMore } from "./CastStyles";

const Cast = ({ cast }) => {
  const router = useRouter();
  const routeRef = useRef(router.asPath);

  return (
    <Fragment>
      {cast.data.length > 0 ? (
        <CastGrid>
          {cast.data.map((item) => (
            <CastWrapper key={item.id}>
              <Link href={`/person/${item.id}-${getCleanTitle(item.name)}`} passHref>
                <a>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 }
                    }}
                    whileTap={{ scale: 0.95 }}>
                    <CastImg className='relative text-center'>
                      <Image
                        src={
                          item.profile_path
                            ? `https://image.tmdb.org/t/p/w276_and_h350_face${item.profile_path}`
                            : "/Images/DefaultAvatar.png"
                        }
                        alt='cast-image'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='top'
                        placeholder='blur'
                        blurDataURL={blurPlaceholder}
                      />
                    </CastImg>
                  </motion.div>
                </a>
              </Link>

              <div className='mt-3'>
                <Span className='font-bold movieCastHead line-clamp-2'>
                  {item?.roles?.[0]?.character ?? item?.character}
                </Span>
                <Span className='movieCastName block'>{item.name}</Span>
                {item?.episode_count ? (
                  <Span className='movieCastName block episode-count'>
                    {item?.episode_count} episodes
                  </Span>
                ) : null}
              </div>
            </CastWrapper>
          ))}

          {cast.totalCount > 15 ? (
            <Link href={`${routeRef.current}/cast`}>
              <a className='mb-auto mt-12' aria-label='full cast'>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 }
                  }}
                  whileTap={{ scale: 0.95 }}>
                  <SeeMore>
                    <BsChevronRight size='22' />
                  </SeeMore>
                  <Span className='mt-3 font-bold movieCastHead block'>Full Cast</Span>
                </motion.div>
              </a>
            </Link>
          ) : null}
        </CastGrid>
      ) : (
        <NoDataText className='font-bold text-center my-5'>TBA</NoDataText>
      )}
    </Fragment>
  );
};

export default Cast;
