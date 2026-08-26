post 1 :
Often I use useffect in react and often I use the cleanup function, I was not clear about how those are actually working but here to build the zapshift project I tried to learn from the core. If i am wrong at anything all of you are welcomed to put your comment.

Useeffect - the main work of useeffect is to handling the sideeffects. Such as in this case the axios is a outsider thing it is not a part of react. So whatever I will do anything regarding the axios I should do all the codes inside the useeffect.

dependency - dependency is an (array with a value / an empty array / or nothing) of useeffect it decides when the use effect will be ran, on the basis of the dependency use effect can run only for once when the component is mounting or it can run for several times on the basis of the changes of any value or can run for every re-rendes. here in my case the use effect will be run every time when the user will be changed because of this - [user].

such as - 
console.log('it is mounting..!'), it is counselling two times in my console because when the component is mounting for the first time there is no user so it is consulting for one time and then when the user is getting into the system (because firebase takes some time) for the change of the value of dependancy array it is consolling for the second time.

Importance of clean up function - 
it will run - right before the effect runs again and when the component unmounts.

In my Axios code, the cleanup function's job is to remove the Axios interceptors that I previously added by axiosSecurity.interceptors.request.use() (registering/adding the interceptor).
And in my cleanup by using eject() I am unregistering the interceptor.

If I do not do this, the number of interceptors will be increased day by day and my app will be slow down.
And it is great to see visually the conselling of - console.log('it is ejected..!') in my console when the value of the user is changing means the cleanup function is running.

#ReactJS #UseEffect #JavaScript #Axios #WebDevelopment #FrontendDevelopment #Firebase #LearnInPublic #SoftwareEngineering #JavaScriptDeveloper


const axiosSecurity = axios.create({
  baseURL: 'http://localhost:3000'
})

const useAxiosSecurity = () => {
  const { user, logOutUser } = UseAuth()
  const navigate = useNavigate()
  useEffect(() => {
    const reqInterceptor = axiosSecurity.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`
      return config
    })
    console.log('it is mounting..!')
    const resInterceptor = axiosSecurity.interceptors.response.use((response) => {
      return response
    },
      (error) => {
        const status = error.status
        if (status === 401 || status === 403) {
          logOutUser()
            .then(() => {
              navigate('/login')
            })
        }
        return Promise.reject(error)
      })
    return () => {
      axiosSecurity.interceptors.request.eject(reqInterceptor)
      axiosSecurity.interceptors.response.eject(resInterceptor)
      console.log('it is ejected..!')
    }
  }, [user])
  return axiosSecurity
}
export default useAxiosSecurity





post 2:
react query has some goirgious features. 
**It can make our app faster without making the same request again and again.

queryKey: ['myParcels', user?.email],
queryFn: async () => {
  const res = await axios.get(`/my-parcels?email=${user.email}`)
  return res.data
}

here queryKey doing a beautiful thing, before the run of queryFn/request it chackes does it have the same data for the same request reguarding the same user? if yes it do not make the request, it provides data from it's cache.
myParcels - the name of the  data.
user?.email - to whom that data belongs?

** we can make the queryFn disable by using enabled property to avoid unnecessary api call.
   enabled: !!user?.email,
        queryFn: async () => {
            const role = await axios.get(`/user-role/${user.email}`) }
  Here in this case i am saying the query tha when user is null turn this query function disable. !null - true again !true - false, so it will be disabled. and the most pleasuras part is not seeing the consol from my endpoint after the log out.
  app.get('/user-role/:email', verifyToken, async (req, res) => {
      console.log('Api is hitted....')})         
 
 I fell the word mount -- for the first after logout it was still consoling, then I noticed my navbar is mounted that is calling the same hook useRole(). So bassicaly that console was camming 