import React,{useEffect} from 'react'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from '../components/Spinner'
import { HomePageVideos } from '../Types'
import Card from '../components/Card'

export const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);


  useEffect(() => {
    dispatch(getHomePageVideos(false));
    console.log(videos)
  }, [dispatch]);
  return (
   <div className="max-h-screen overflow-hidden">
    <div style={{height:'7.5vh'}} className="">
      <Navbar/>
    </div>
    <div style={{height:'92.5vh'}} className="flex">
<Sidebar/>
{videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
    </div>
   </div>
  )
}
