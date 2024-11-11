
import { useEffect, useState } from "react"
import axios from 'axios'
interface Github {
  public_repos:number,
  followers:number,
  following:number

}
function Stats() {
      
        const [data, setData] = useState<Github>()
        const [repos, setRepos] = useState<number|undefined>(0)
        const [followers, setFollowers] = useState<number|undefined>(0)
        const [following, setFollowing] = useState<number|undefined>(0)
        const [reposCount, setReposCount] = useState<number>(0)
        const [followersCount, setFollowersCount] = useState<number>(0)
        const [followingount, setFollowingCount] = useState<number>(0)
    
    
        const getGithubData =  async () => {
          
              await axios.get('https://api.github.com/users/BranGitfox')
              .then(res => setData({public_repos:res.data.public_repos, followers:res.data.followers, following:res.data.following}))
              .then(() =>setFollowers(data?.followers))
              .then(() =>setRepos(data?.public_repos))
              .then(() =>setFollowing(data?.following))
              .catch(err => console.log(err.message))
         
        }

    useEffect(() => {
        getGithubData()

        setInterval(() => {
         
            if(typeof repos !== 'undefined'){
                for(let i=0; i< repos;i++) {
                    setReposCount(reposCount+1)
                }
            }

            if(typeof followers !== 'undefined'){
                for(let i=0; i< followers;i++) {
                    setFollowersCount(followersCount+1)
                }
            }

            if(typeof following !== 'undefined'){
                for(let i=0; i< following;i++) {
                    setFollowingCount(followingount+1)
                }
            }
      }, 500)
      }, [])
  return (
    <>
            <div className="absolute top-[650px] grid grid-cols-3 bg-gray-900  md:top-[843px] h-[120px]  w-[100%] p-4">
            <div className="flex flex-col items-center justify-center border-r-2 border-blue-600">
                    <p className='font-bold text-xl text-gray-300 '>40</p>
                    <p className='text-white font-light'>Repository</p>
            </div>
            <div className="flex flex-col  items-center justify-center border-r-2 border-blue-600">
                    <p className='font-bold text-xl text-gray-300 '>40</p>
                    <p className='text-white font-light'>Stars</p>
            </div>
            <div className="flex flex-col  items-center justify-center ">
                    <p className='font-bold text-xl text-gray-300 '>40</p>
                    <p className='text-white font-light'>Commits</p>
            </div>
      </div>
   
    </>
  )
}

export default Stats
