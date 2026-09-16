post 1 : (posted)
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










post 2: (posted)
I realised react query has some gorgeous features.


**It can make our app faster without making the same request again and again.

queryKey: ['myParcels', user?.email],
queryFn: async () => {
  const res = await axios.get(`/my-parcels?email=${user.email}`)
  return res.data
}

here queryKey doing a beautiful thing, before the run of queryFn/request it checks whether it already has the same data for the same request regarding the same user? if yes it does not make the request, it provides data from it's cache.
myParcels - the name of the  data.
user?.email - to whom that data belongs?


** we can make the queryFn disable by using enabled property to avoid unnecessary api call.

   enabled: !!user?.email,
        queryFn: async () => {
            const role = await axios.get(`/user-role/${user.email}`) 
          }

  Here in this case I am saying the query, when user is null turn this query function disable. 
  !null - true again !true - false, so it will be disabled. 
  And the most pleasant part is not seeing the console from my endpoint after the log out.

  But without disabling, it will still hit the endpoit while the user is null.

  app.get('/user-role/:email', verifyToken, async (req, res) => {
      console.log('Api is hitted....')})         
 
 I understand the word mount -- although the user is null after logging out it was still consoling(Api is hitted....).
 Then I noticed my navbar is mounted that is also calling the same hook useRole(). So bassicaly that console was camming from there because my navbar is still mounted. 


 ** queryKey can vll the api at everytime when the component rerenders.

 for implementing a search feature this will be a perfect way, where the user types something and result appears just afer the type.  

 const [searchText, setSearchText] = useState('')

 queryKey: ['my-user', searchText]
 queryFn: async () => {
   const res = await axios.get(`/all-users?searchText=${searchText}`)
 } 
 
 Here searchText will be the user's inputed value that is being setted form the users input field. And everytime it changes the queryFn will be run to fetch the rusult when ever the querykey changes.










 post 3: (posted)

 How the stripe payment system has been implemented in my current MERN project -- 

 step__1 :  creating the checkout session from where the user will provide the payment credential. It is a stripe interface, strip takes the credentials and process the payment.
  
    step__1.1 : 
    frontend part-- await axios.post('/create-checkout-session', parcel)
                    window.location.href = res.data.url
    just calling the endpoint(that creates stripe session) and sending the parcle data to the backend, then endpoint will create a session & send a url as response that is the checkout page's link where I am redirection the user.

    backend part-- const session = await stripe.checkout.sessions.create({
                    line_items: [ ], -- The line items representing what is being sold, max 20.

                    mode,

                    metadata: {}, -- Set of key-value pairs that I can attach to an object here the session is basically an object. Useful for storing additional info about the object.

                    success_url, -- The URL the customer will be directed to after the payment or subscription creation is successful.

                    cancel_url
                   })
                   
                  res.send({ url: session.url }) -- sending the checkout link.

    this are my main contents of checkout session.
    ** https://docs.stripe.com/api/payment-link/create#create_payment_link-line_items-price_data  -- in this url it is very well documented.


 step__2 : after a successful payment..

     step__2.1: 
     here was a redirect url in my session object --  
     success_url: `${process.env.SITE_DOMAIN}/dashboard/payment-successs?session_id={CHECKOUT_SESSION_ID}`, -- in this url here is a ready component that'll be mounted after a success payment. Means, the user will be redirected to the success payment page from the stripe payment interface.

     {CHECKOUT_SESSION_ID} -- Stripe replaces {CHECKOUT_SESSION_ID} with the actual Checkout Session ID when it redirects the customer to the success_url after a successful Checkout.

    step__2.2: 
    at this moment an endpoint will be called from that success payment component with adding the query session_id -
        const [searchParams] = useSearchParams()
        const sessionId = searchParams.get('session_id')
       
        axios.patch(`/payment-success?session_id=${sessionId}`)
  
    And here the Frontend part is done after the payment.

    step__2.3:
    Backend part :
    I am just retriving the session using the session_id - 
        app.patch('/payment-success', async (req, res) => {
          const session_id = req.query.session_id
          const session = await stripe.checkout.sessions.retrieve(session_id) })
    
    In this session, there is all info related the payment. And the final step is I am manipulating my documents in mongodb on the basis of the session's data.

#MERN #React #NodeJS #ExpressJS #MongoDB #Stripe #JavaScript #WebDevelopment #FullStackDevelopment #LearningInPublic #SoftwareDevelopment 










post 4: (posted)

Things are not as hard as they seem when an error occurs. And I realised that understanding things in my own way, beyond just following the source, is the real happiness. I faced an error and got the actual cause of it.

I learned behavior of -- 
useState 
tanstack query 
backend behaiveour
rendering the component
MongoDB $regex

I was implementing a search feature in my courier delivery project for the admin.

First I fetched the data and every users was rendering on my manageUser component.
Then I allowe admin to couduct the search option for a specific user. I took a useState to catch the adimin's inputed value.

const [searchText, setSearchText] = useState()
<input onChange={(e) => setSearchText(e.target.value)} type="text" className="input" placeholder=' search user' />

And I used the state inside my API request - 
   queryFn: async () => {
            const res = await axios.get(`/all-users?searchText=${searchText}`)
            return res.data
        }


Problem 1: Nothing, all users were gone. I was trying to find it out from every where then I got it bug.

Initialy I didn't set any value in my usestate. So it's became undefined, and leter my endpoint is getting searchText=undefined. -- /all-users?searchText=undefined.

Then when my backend trying to findout the result with undefined, the result is nothing. But when the state changes users are became visible. So, if I set the useState's initial value as Rahim the page will render all the data/users related the string 'Rahim'.

My backend --
const searchText = req.query.searchText
const query = {}
if (searchText) {
  query.$or = [
    { displayName: { $regex: searchText, $options: 'i' } },
    { email: { $regex: searchText, $options: 'i' } } ]
}
Then later query is being used to findout the documents.

Finally I set the initial value a empty string - useState(''). So, at the first render my backend will couduct the search with an empty object const query = {} and in a result all the users will be available.



Problem 2: as the admin types something the search result was not updating. Then I added queryKey before my queryFn. 
-- queryKey: ['my-user', searchText]

Every new value of searchText changes the query key, so TanStack Query treats it as a different query and runs the query function for that key.
Adimin types--> state changes---> queryFn runs again---> endpoint hits again with new value.

And this is how I fixed the problem...









post 5 : (posted)

I found Aggregation Pipeline is very interesting. It is great to let users see their all activities with just calling only one api.

I need to calculate the users -
* total spend & unpaid parcel & total parcel
* total parcels in transit
* total delivered parcel

I used - 

$match stage - to find the parcels document of a unique user,

$group stage - I set (_id : null) & grouped all the documents in one object. Then I performed the rest of the calculations inside this stage.

Basically everywhere I need to calculate a count or total, I used $sum along with the $cond to meet the actual requirent.

$cond - it takes some conditions and returns true/false and on the basis on that the value of sum will be simultaneously added.

$eq & $ ne - we can compare values as $eq(equal) or $ne(not equal) inside the $cond(condition).


One part I found particularly interesting was calculating totalSpent --

totalSpent: {
  $sum: {
    $cond: [
      {
        $ne: [ { $type: '$deliveryStatus' }, "missing" ]
      },
      $cost', 0
    ]
  }
},

Fact- only after the user makes the payment, the field deliveryStatus will be added but cost already exist.

So, when it exists --> 
$ne finds the field thats type is string
then string !== missing---> since they are not equal, $ne(not equal) will provide the value true
so the result becames true,
if true use $cost
$cond returns $cost and $sum adds the cost.

when it doesn't exist --> 
the type becames missing
then missing !== missing---> since they are equal, $ne(not equal) will provide the value false
so the result becames false,
$cond returns 0 and $sum adds 0.