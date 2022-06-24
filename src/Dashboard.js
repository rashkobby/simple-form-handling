
import useFetch from './useFetch';


const Dashboard = () => {
    const {data: userInfo, isLoading, error} = useFetch('https://nordc.herokuapp.com/details')

 
    return ( 
        <div className="dashboard">
            
            <table>
                <tbody>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Date of birth</th>
                        <th>SSN</th>
                        <th>MaidenName</th>
                        
                    </tr>
                    {error && <tr>{error}</tr>}
                    {isLoading && <tr>loading...</tr>}
                    
                    {userInfo.map((user) => ( 
                        <tr key={user.id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.useremail}</td>
                            <td>{user.userDOB}</td>
                            <td>{user.userSSN}</td>
                            <td>{user.maidenName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
     );
}
 
export default Dashboard;